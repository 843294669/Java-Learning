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
import java.util.List;
import java.util.Locale;

public class MaximumHttpTransfer {

    private static String url = "https://jsonmock.hackerrank.com/api/transactions?page=";
    private static NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.US);

    public static List<String> maximumTransfer(String name, String city) {
        int totalPages;
        int curPage = 1;
        float maxCredit = 0;
        float maxDebit = 0;
        List<String> strList = new ArrayList<>();
        try {
            do {
                JSONObject jsonObj = getResponseFromUrl(url + curPage);
                totalPages = jsonObj.getInt("total_pages");
                JSONArray dataArray = jsonObj.getJSONArray("data");
                for (int i = 0; i < dataArray.length(); i++) {
                    JSONObject dataObject = dataArray.getJSONObject(i);
                    String tempName = dataObject.getString("userName");
                    JSONObject location = dataObject.getJSONObject("location");
                    String tempCity = location.getString("city");
                    if (name.equals(tempName) && (city.equals(tempCity))) {
                        float amount = nf.parse(dataObject.getString("amount")).floatValue();
                        String txnType = dataObject.getString("txnType");
                        if (txnType.equals("credit")) {
                            maxCredit = Math.max(maxCredit, amount);
                        } else {
                            maxDebit = Math.max(maxDebit, amount);
                        }
                    }
                }
                curPage++;
            } while (curPage < totalPages);

        } catch (Exception e) {
            e.printStackTrace();
        }

        strList.add(nf.format(maxCredit));
        strList.add(nf.format(maxDebit));
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
