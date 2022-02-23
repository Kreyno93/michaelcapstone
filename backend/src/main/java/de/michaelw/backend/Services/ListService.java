package de.michaelw.backend.Services;

import de.michaelw.backend.Models.MTBUserRepo;
import de.michaelw.backend.Models.UserMongo;
import de.michaelw.backend.Models.TrailData;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@AllArgsConstructor
@Service

public class ListService {

    private final MTBUserRepo mtbUserRepo;

    public void postToList(TrailData trackId, UserMongo dummyUser) {
        UserMongo userMongo = mtbUserRepo.findByUsername(dummyUser.getUsername());

        if (userMongo == null) {
            throw new IllegalStateException("User not found in Database: " + dummyUser);
        }
        if (userMongo.getTrails().contains(trackId)) {
            System.out.println("-------------" + trackId + "already exists -------------");
        } else {
            userMongo.addToList(trackId);
            mtbUserRepo.save(userMongo);
        }

    }

    public ArrayList<TrailData> getFavList(UserMongo dummyUser){
        UserMongo userMongo = mtbUserRepo.getUserMongoById(dummyUser.getUsername());
        System.out.println(userMongo.getTrails());
        return userMongo.getTrails();
    }

}
