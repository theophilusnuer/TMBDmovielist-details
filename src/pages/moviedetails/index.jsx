import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                const data = await response.json();
                setMovie(data); // Update state with fetched movie details
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <div className="relative w-screen h-screen">
                <img className='absolute inset-0 w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <div class="absolute inset-0 bg-black opacity-70"></div>
                <img className='h-20 rounded-md' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
            <h1>{movie.title}</h1>
            <p>{movie.tagline}</p>
            <p>{movie.overview}</p>
            <p className="">ratings</p>
            release date
            reviews
        </section>
    );
}
