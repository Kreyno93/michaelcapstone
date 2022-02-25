package de.michaelw.backend.Services;

import de.michaelw.backend.Models.MTBUserRepo;
import de.michaelw.backend.Models.TrailData;
import de.michaelw.backend.Models.UserMongo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;

@AllArgsConstructor
@Service

public class ListService {

    private final MTBUserRepo mtbUserRepo;

    public void postToList(TrailData trailData, UserMongo dummyUser) {
        UserMongo userMongo = mtbUserRepo.findByUsername(dummyUser.getUsername());

        if (userMongo == null) {
            throw new IllegalStateException("User not found in Database: " + dummyUser);
        }
        userMongo.addToList(trailData);
        mtbUserRepo.save(userMongo);
    }

    public Set<TrailData> getFavList(UserMongo dummyUser) {
        UserMongo userMongo = mtbUserRepo.getUserMongoById(dummyUser.getId());
        System.out.println(userMongo.getTrails());
        return userMongo.getTrails();
    }

    public void setRatingToList(TrailData favData, UserMongo tempUser) {
        UserMongo userMongo = mtbUserRepo.getUserMongoById(tempUser.getId());
        if (userMongo == null) {
            throw new IllegalStateException("User not found in Database: " + tempUser);
        }
        if (favData.getRating() == null) {
            throw new IllegalArgumentException("Rating must be set, but was null");
        }
        userMongo.getTrails().stream()
                .filter(favData::equals)
                .findAny()
                .orElseThrow(() -> new IllegalArgumentException("No Track found with ID : " + favData.getTrackId()))
                .setRating(favData.getRating());
        mtbUserRepo.save(userMongo);
    }

}
