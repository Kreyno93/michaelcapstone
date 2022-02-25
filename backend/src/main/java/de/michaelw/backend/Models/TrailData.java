package de.michaelw.backend.Models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.Objects;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class TrailData {
    @NonNull Integer trackId;
    Object place;// Defined by Google
    Integer rating;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TrailData trailData = (TrailData) o;
        return trackId.equals(trailData.trackId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(trackId);
    }
}
