package de.michaelw.backend.Controller;

import de.michaelw.backend.Models.TrailData;
import de.michaelw.backend.Models.UserMongo;
import de.michaelw.backend.Services.ListService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
