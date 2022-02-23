package de.michaelw.backend.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserMongo implements UserDetails {

    public UserMongo(String username, String password, Collection<? extends GrantedAuthority> authorities) {
        this.username = username;
        this.password = password;
        this.authorities = authorities;
        this.trails = new ArrayList<>();
    }

    @Id
    String id;

    String username;
    String password;
    ArrayList<TrailData> trails;

    public Collection<? extends GrantedAuthority> authorities;

    public boolean isAccountNonExpired= true;
    public boolean isAccountNonLocked= true;
    public boolean isCredentialsNonExpired= true;
    public boolean isEnabled= true;

    public void addToList(TrailData trackId) {
        trails.add(trackId);
    }
}
