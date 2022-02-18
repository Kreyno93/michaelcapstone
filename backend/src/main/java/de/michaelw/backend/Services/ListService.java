package de.michaelw.backend.Services;

import de.michaelw.backend.Models.MTBUserRepo;
import de.michaelw.backend.Models.UserMongo;
import de.michaelw.backend.Models.TrailData;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service

public class ListService {

    private final MTBUserRepo mtbUserRepo;

    public void postToList(TrailData trackId, UserMongo dummyUser) {
        UserMongo userMongo = mtbUserRepo.findByUsername(dummyUser.getUsername());

        if(userMongo==null){
            throw new IllegalStateException("User not found in Database: " + dummyUser);
        }
        userMongo.addToList(trackId);
        mtbUserRepo.save(userMongo);

    }
}
