package de.michaelw.backend.Controller;
import de.michaelw.backend.Models.TrailData;
import de.michaelw.backend.Models.UserMongo;
import de.michaelw.backend.Services.ListService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import java.util.Set;

@AllArgsConstructor
@RestController
@RequestMapping("/api")

public class ListController {

    final ListService service;


    @PostMapping("/fav")
    public void addFavToList(@RequestBody TrailData trailData, UsernamePasswordAuthenticationToken authToken) {
        UserMongo dummyUser = (UserMongo) authToken.getPrincipal();
        service.postToList(trailData, dummyUser);
    }

    @GetMapping("/fav")
    public Set<TrailData> getFavList(UsernamePasswordAuthenticationToken authToken){
        UserMongo dummyUser = (UserMongo) authToken.getPrincipal();
        return service.getFavList(dummyUser);
    }

    @PostMapping("/fav/rating")
    public void addRatingToList(@RequestBody TrailData favData,UsernamePasswordAuthenticationToken authToken){
        UserMongo tempUser = (UserMongo) authToken.getPrincipal();
        service.setRatingToList(favData, tempUser);
    }
}
