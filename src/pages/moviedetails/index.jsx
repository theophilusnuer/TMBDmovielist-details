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
               
                {/* Additional image at the left */}
                <div className="absolute inset-0 mb-20 flex items-center">
                    <img className='ml-6 h-3/4 md:w-1/2 rounded-lg shadow-lg max-w-80' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>

                 {/* text area for title, release date, tagline and overview */}
                 <div className="absolute left-1/4 top-1/3 ml-20 text-white mr-6 text-left">
                    <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                    <span className="text-lg mb-2 italic">{movie.release_date}</span>
                    <span className="text-lg mb-2 block">{movie.tagline}</span>
                    <span className="text-lg">{movie.overview}</span>
                </div>
            </div>

        
            <p className="">ratings</p>
            release date
            reviews
        </section>
    );
}
