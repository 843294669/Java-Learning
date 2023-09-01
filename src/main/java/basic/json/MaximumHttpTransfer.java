package basic.json;


import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.boot.configurationprocessor.json.JSONObject;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

public class MaximumHttpTransfer {

    public static List<String> maximumTransfer(String name, String city) {
        long totalPages;
        JSONObject jsonObj = null;
        List<Float> creditList = new ArrayList<>();
        List<Float> debitList = new ArrayList<>();
        int curPage = 1;
        List<String> strList = new ArrayList<>();
        try {
            do {
                String url2 = "https://jsonmock.hackerrank.com/api/transactions?page=" + curPage;
                jsonObj = getResponseFromUrl(url2);
                totalPages = (long) jsonObj.get("total_pages");
                JSONArray dataArray = (JSONArray) jsonObj.get("data");
                for (int i = 0; i < dataArray.length(); i++) {
                    JSONObject dataObject = (JSONObject) dataArray.get(i);
                    String tempName = (String) dataObject.get("userName");
                    JSONObject location = (JSONObject) dataObject.get("location");
                    String tempCity = (String) location.get("city");
                    if (name.equals(tempName) && (city.equals(tempCity))) {
                        String txnType = (String) dataObject.get("txnType");
                        if (txnType.equals("credit")) {
                            creditList.add(NumberFormat.getCurrencyInstance(Locale.US).parse((String) dataObject.get("amount")).floatValue());
                        } else {
                            debitList.add(NumberFormat.getCurrencyInstance(Locale.US).parse((String) dataObject.get("amount")).floatValue());
                        }
                    }
                }
                curPage++;
            } while (curPage < totalPages);

        } catch (Exception e) {
            e.printStackTrace();
        }

        strList.add(NumberFormat.getCurrencyInstance(Locale.US).format(Collections.max(creditList)));
        strList.add(NumberFormat.getCurrencyInstance(Locale.US).format(Collections.max(debitList)));
        return strList;

    }

    static JSONObject getResponseFromUrl(String urlString) {
        try {
            URL url = new URL(urlString);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestProperty("accept", "application/json");
            connection.setRequestMethod("GET");
            if (connection.getResponseCode() == 200) {
                return (JSONObject) new JSONParser(connection.getInputStream()).parse();
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return null;
    }

}
