package de.michaelw.backend.Controller;

import de.michaelw.backend.Models.FavData;
import de.michaelw.backend.Models.TrailData;
import de.michaelw.backend.Models.UserMongo;
import de.michaelw.backend.Services.ListService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@AllArgsConstructor
@RestController
@RequestMapping("/api")

public class ListController {

    final ListService service;


    @PostMapping("/fav")
    public void addFavToList(@RequestBody TrailData trackId, UsernamePasswordAuthenticationToken authToken) {
        UserMongo dummyUser = (UserMongo) authToken.getPrincipal();
        service.postToList(trackId, dummyUser);
    }

    @GetMapping("/get/fav")
    public ArrayList<TrailData> getFavList(UsernamePasswordAuthenticationToken authToken){
        UserMongo dummyUser = (UserMongo) authToken.getPrincipal();
        return service.getFavList(dummyUser);
    }

    @PostMapping("/get/fav/rating")
    public void addRatingToList(@RequestBody FavData favData,UsernamePasswordAuthenticationToken authToken){
        UserMongo tempUser = (UserMongo) authToken.getPrincipal();
        service.addRatingToList(favData, tempUser);
    }
}
