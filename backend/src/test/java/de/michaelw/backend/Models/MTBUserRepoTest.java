package de.michaelw.backend.Models;

import de.michaelw.backend.Services.MongoUserDetailsService;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;

class MTBUserRepoTest {

    final MTBUserRepo repo = mock(MTBUserRepo.class);
    final MongoUserDetailsService test = new MongoUserDetailsService(repo);


    @Test
    void findByUsername() {

        // GIVEN

        // WHEN

        // THEN

    }

    @Test
    void getUserMongoById() {
        // GIVEN

        // WHEN

        // THEN
    }
}