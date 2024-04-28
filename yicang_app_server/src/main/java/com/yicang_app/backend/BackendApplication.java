package com.yicang_app.backend;

import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.security.Security;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        try {
            // 添加 Bouncy Castle 加密算法提供程序
            Security.addProvider(new BouncyCastleProvider());

            // 启动 Spring Boot 应用程序
            SpringApplication.run(BackendApplication.class, args);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
