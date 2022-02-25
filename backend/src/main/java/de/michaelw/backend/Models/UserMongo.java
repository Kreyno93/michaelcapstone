package de.michaelw.backend.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserMongo implements UserDetails {

    public Collection<? extends GrantedAuthority> authorities;
    public boolean isAccountNonExpired = true;
    public boolean isAccountNonLocked = true;
    public boolean isCredentialsNonExpired = true;
    public boolean isEnabled = true;
    @Id
    String id;
    String username;
    String password;
    Set<TrailData> trails;
    public UserMongo(String username, String password, Collection<? extends GrantedAuthority> authorities) {
        this.username = username;
        this.password = password;
        this.authorities = authorities;
        this.trails = new HashSet<>();
    }

    public void addToList(TrailData trackId) {
        trails.add(trackId);
    }
}
