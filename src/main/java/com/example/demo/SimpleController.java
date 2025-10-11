
package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class SimpleController {

    @GetMapping("/hello")
    public Map<String, Object> sayHello() {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("koreaTime", ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toString());
        body.put("timestamp", System.currentTimeMillis());
        body.put("message", "Hello, World!");
        return body;
    }
}
