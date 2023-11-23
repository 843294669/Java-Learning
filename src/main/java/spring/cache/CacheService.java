package spring.cache;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;


@Service
public class CacheService {

    Logger logger = LoggerFactory.getLogger(CacheService.class);

    /**
     * 当使用相同的参数调用被标记的方法时，Spring会从缓存中返回之前的结果，而不会实际执行方法。
     * @return
     */
    @Cacheable(key = "#id", value = "cacheManager")
    public Object getDataById(int id) {
        logger.info("get data from db first time for the same id.");
        return new Object();
    }

    @CachePut(key = "#id", value = "cacheManager")
    public Object updateDataById(int id) {
        logger.info("update cache data every time for any id.");
        return new Object();
    }

    @CacheEvict(key = "#id", value = "cacheManager")
    public Object deleteDataById(int id) {
        logger.info("evict cache data every time for any id.");
        return new Object();
    }
}
