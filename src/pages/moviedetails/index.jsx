import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}
`)
            .then(response => response.json())
            .then(data => {
                setMovie(data.results);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error)
            });

    }, [id]);

    if (!movie) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1> {movie.title} </h1>
            <p> {movie.tagline} </p>
            <p> {movie.overview} </p>
        </div>
    );
}