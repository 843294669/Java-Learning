package spring.cache;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CacheTest {

    @Autowired
    CacheService cacheService;

    @Test
    public void testGetData() {
        // test get data with same id twice
        cacheService.getDataById(1);
        cacheService.getDataById(1);
    }

    @Test
    public void testUpdateData() {
        // test update data with same id twice
        cacheService.updateDataById(1);
        cacheService.updateDataById(1);
    }

    @Test
    public void testDeleteData() {
        // test delete data with same id twice
        cacheService.deleteDataById(1);
        cacheService.deleteDataById(1);
    }
}
