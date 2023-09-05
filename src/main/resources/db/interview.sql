-- 时间格式化
select pr.config_id, co.tier,
CONCAT(
  IF(FLOOR(sum(TIMESTAMPDIFF(SECOND, str_to_date(start_date, "%Y-%m-%d %k:%i:%s"), str_to_date(end_date, "%Y-%m-%d %k:%i:%s"))) / 86400) < 10, '0', ''),
  floor(sum(TIMESTAMPDIFF(SECOND, str_to_date(start_date, "%Y-%m-%d %k:%i:%s"), str_to_date(end_date, "%Y-%m-%d %k:%i:%s"))) / 86400), ' days ',
  IF(FLOOR(sum(TIMESTAMPDIFF(SECOND, str_to_date(start_date, "%Y-%m-%d %k:%i:%s"), str_to_date(end_date, "%Y-%m-%d %k:%i:%s"))) % 86400/3600) < 10, '0', ''),
  FLOOR(sum(TIMESTAMPDIFF(SECOND, str_to_date(start_date, "%Y-%m-%d %k:%i:%s"), str_to_date(end_date, "%Y-%m-%d %k:%i:%s"))) % 86400/3600), ' hours ',
  IF(FLOOR(sum(TIMESTAMPDIFF(SECOND, str_to_date(start_date, "%Y-%m-%d %k:%i:%s"), str_to_date(end_date, "%Y-%m-%d %k:%i:%s"))) % 3600/60) < 10, '0', ''),
  FLOOR(sum(TIMESTAMPDIFF(SECOND, str_to_date(start_date, "%Y-%m-%d %k:%i:%s"), str_to_date(end_date, "%Y-%m-%d %k:%i:%s"))) % 3600/60), ' minutes ',
  IF(FLOOR(sum(TIMESTAMPDIFF(SECOND, str_to_date(start_date, "%Y-%m-%d %k:%i:%s"), str_to_date(end_date, "%Y-%m-%d %k:%i:%s"))) % 60) < 10, '0', ''),
  FLOOR(sum(TIMESTAMPDIFF(SECOND, str_to_date(start_date, "%Y-%m-%d %k:%i:%s"), str_to_date(end_date, "%Y-%m-%d %k:%i:%s"))) % 60),  ' seconds'
)
AS `hours` FROM `production` as pr inner join
configuration co on pr.config_id = co.id  where pr.start_date like '2021%' and pr.end_date like '2021%' group by co.id;

--输赢比
SELECT P.PLAYER_NAME, ROUND((R.WIN_COUNT/R.LOSS_COUNT),2) WIN_LOSS_RATIO
    FROM PLAYERS P,(SELECT ID , SUM(CASE WHEN RESULT = 'WIN' THEN 1 ELSE 0 END) WIN_COUNT, SUM(CASE WHEN RESULT = 'LOSS' THEN 1 ELSE 0 END) LOSS_COUNT
  FROM RESULTS GROUP BY ID) R
  WHERE P.PLAYER_ID = R.ID
  ORDER BY WIN_LOSS_RATIO ASC,R.PLAYER_NAME DESC;

--选举
SELECT PARTY, COUNT(ID) AS Party_Seats_won FROM CANDIDATES JOIN
(SELECT CONSTITUENCY_ID, CANDIDATE_ID, VOTES
FROM   (
   SELECT CANDIDATE_ID, CONSTITUENCY_ID, VOTES
        , ROW_NUMBER() OVER (PARTITION BY CONSTITUENCY_ID ORDER BY VOTES DESC) AS rn
   FROM   RESULTS
   ) sub
WHERE  sub.rn = 1) WINNER
WHERE WINNER.CANDIDATE_ID = CANDIDATES.ID
GROUP BY CANDIDATES.PARTY ORDER BY Party_Seats_won DESC;

--季度费用
SELECT CONF.NAME AS CONFIGURATION,
  CASE WHEN (HPOURSTABLE.Q1 IS NOT NULL OR HPOURSTABLE.Q1 <> 0) THEN CONCAT("$",CAST(ROUND((HPOURSTABLE.Q1)*(SUBSTRING(CONF.PRICE, 2, LENGTH(CONF.PRICE)-6)),3) AS DECIMAL(10,3))," = ",HPOURSTABLE.Q1," hours * ",CONF.PRICE) ELSE NULL END AS "Q1'21",
  CASE WHEN (HPOURSTABLE.Q2 IS NOT NULL OR HPOURSTABLE.Q2 <> 0) THEN CONCAT("$",CAST(ROUND((HPOURSTABLE.Q2)*(SUBSTRING(CONF.PRICE, 2, LENGTH(CONF.PRICE)-6)),3) AS DECIMAL(10,3))," = ",HPOURSTABLE.Q2," hours * ",CONF.PRICE) ELSE NULL END AS "Q2'21",
  CASE WHEN (HPOURSTABLE.Q3 IS NOT NULL OR HPOURSTABLE.Q3 <> 0) THEN CONCAT("$",CAST(ROUND((HPOURSTABLE.Q3)*(SUBSTRING(CONF.PRICE, 2, LENGTH(CONF.PRICE)-6)),3) AS DECIMAL(10,3))," = ",HPOURSTABLE.Q3," hours * ",CONF.PRICE) ELSE NULL END AS "Q3'21",
  CASE WHEN (HPOURSTABLE.Q4 IS NOT NULL OR HPOURSTABLE.Q4 <> 0) THEN CONCAT("$",CAST(ROUND((HPOURSTABLE.Q4)*(SUBSTRING(CONF.PRICE, 2, LENGTH(CONF.PRICE)-6)),3) AS DECIMAL(10,3))," = ",HPOURSTABLE.Q4," hours * ",CONF.PRICE) ELSE NULL END AS "Q4'21"
  FROM CONFIGURATIONS CONF,
  (SELECT ID,
       MAX(CASE WHEN SEQNUM = 1 THEN HOURS END) as Q1,
       MAX(CASE WHEN SEQNUM = 2 THEN HOURS END) as Q2,
       MAX(CASE WHEN SEQNUM = 3 THEN HOURS END) as Q3,
       MAX(CASE WHEN SEQNUM = 4 THEN HOURS END) as Q4
FROM
(SELECT t.*, ROW_NUMBER() OVER (PARTITION BY ID ORDER BY (SELECT QUARTER)) AS SEQNUM
      FROM (SELECT CONFIGURATION_ID ID,CASE QUARTER(DT_START)
  WHEN 1 THEN 'Q1'
  WHEN 2 THEN 'Q2'
  WHEN 3 THEN 'Q3'
  WHEN 4 THEN 'Q4'
  END AS QUARTER, SUM(CEILING(TIMESTAMPDIFF(SECOND, DT_START, DT_END)/3600)) AS HOURS
FROM DEPLOYMENTS WHERE YEAR(DT_START) = 2021 AND YEAR(DT_END) =2021  GROUP BY ID,QUARTER ORDER BY ID,QUARTER) t)
            t
GROUP BY ID) AS HPOURSTABLE WHERE HPOURSTABLE.ID = CONF.ID ORDER BY CONF.PRICE;