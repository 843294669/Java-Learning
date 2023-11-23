package spring.cache;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.context.annotation.Bean;

import java.util.concurrent.TimeUnit;

//@Configuration
public class CaffeineConfig {
    @Bean
    public Cache caffeineCache(){
        return Caffeine.newBuilder()
                //设置10秒后过期,方便后续观察现象
                .expireAfterWrite(10, TimeUnit.SECONDS)
                //初始容量为100
                .initialCapacity(100)
                //最大容量为200
                .maximumSize(200)
                .build();
    }
}

