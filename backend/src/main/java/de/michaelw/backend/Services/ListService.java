package de.michaelw.backend.Services;

import de.michaelw.backend.Models.MTBUserRepo;
import de.michaelw.backend.Models.UserMongo;
import de.michaelw.backend.Models.trailData;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service

public class ListService {

    private final MTBUserRepo mtbUserRepo;

    public void postToList(Number trackId, UserMongo dummyUser) {
        trailData test = new trailData(trackId);
        mtbUserRepo.findByUsername(dummyUser.getUsername()).addToList(test);
    }
}
