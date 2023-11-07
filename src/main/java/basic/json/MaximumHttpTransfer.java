package basic.json;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class MaximumHttpTransfer {

    private static String url = "https://jsonmock.hackerrank.com/api/transactions?page=";
    private static NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.US);

    public static List<String> maximumTransfer(String name, String city) {
        int curPage = 1;
        long totalPages;
        float maxCredit = 0;
        float maxDebit = 0;
        List<String> strList = new ArrayList<>();
        try {
            do {
                JSONObject jsonObject = getResponseFromUrl(url + curPage);
                totalPages = (Long) jsonObject.get("total_pages");
                JSONArray dataArray = (JSONArray) jsonObject.get("data");
                for (int i = 0; i < dataArray.size(); i++) {
                    JSONObject dataObject = (JSONObject) dataArray.get(i);
                    String tempName = (String) dataObject.get("userName");
                    JSONObject location = (JSONObject) dataObject.get("location");
                    String tempCity = (String) location.get("city");
                    if (name.equals(tempName) && (city.equals(tempCity))) {
                        float amount = nf.parse((String) dataObject.get("amount")).floatValue();
                        String txnType = (String) dataObject.get("txnType");
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

    static JSONObject getResponseFromUrl(String urlString) throws IOException, ParseException {
        HttpURLConnection connection = (HttpURLConnection) new URL(urlString).openConnection();
        connection.setRequestProperty("accept", "application/json");
        connection.setRequestMethod("GET");
        if (connection.getResponseCode() == 200) {
            return (JSONObject) new JSONParser().parse(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8));
        }
        return null;
    }

    public static void main(String[] args) {
        System.out.println(maximumTransfer("Helena Fernandez", "Ilchester"));
        System.out.println(maximumTransfer("Bob Martin", "Bourg"));
    }

}
