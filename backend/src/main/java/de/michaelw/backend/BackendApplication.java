package de.michaelw.backend;

import de.michaelw.backend.Models.MTBUserRepo;
import de.michaelw.backend.Models.UserMongo;
import de.michaelw.backend.Services.MongoUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@EnableMongoRepositories(basePackageClasses = MTBUserRepo.class)
@SpringBootApplication

public class BackendApplication{

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}
