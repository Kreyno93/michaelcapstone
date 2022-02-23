package de.michaelw.backend.Models;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MTBUserRepo extends MongoRepository<UserMongo, String> {
    UserMongo findByUsername(String username);
    UserMongo getUserMongoById(String id);
}
