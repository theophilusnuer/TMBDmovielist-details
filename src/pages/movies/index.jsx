import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/movieCard/MovieCard";
import Trending from "../../components/trending/Trending";



const Movies = () => {
    // Define the API URL
    const API_URL = "https://api.themoviedb.org/3";

    // Function to fetch movies from the API
    const fetchMovies = async () => {
        try {
            // Send GET request to the API
            const response = await axios.get(`${API_URL}/discover/movie`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY
                }
            });
            // Set the fetched movies in state
            setMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    // State to store the fetched movies
    const [movies, setMovies] = useState([]);

    // Fetch movies when the component mounts
    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        // Main container for the movies page
        <>
            <main className="container mx-auto mt-20 px-20">
                {/* Section for trending movies */}
                < section >
                    {/* Heading for the section */}
                    < h2 className="text-dark text-lg mb-4">Discover Movies</h2>
                    {/* Container for trending movies with horizontal scroll */}
                    <div className="flex overflow-x-scroll">
                        {/* Map through the movies array to display each movie card */}
                        {movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                </section >
                {/* Add other sections for Popular, Top rated, Best Trailers, and Free to watch movies here */}
                < section className="mt-10">
                    <Trending />
                </section >
            </main >
        </>

    );
};

export default Movies;





































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import MovieCard from "../../components/movieCard/MovieCard";
// import SearchBar from "../../components/searchInput/SearchBar";


// const Movies = () => {
//     const API_URL = "https://api.themoviedb.org/3";

//     // Fetch movies from API
//     const fetchMovies = async () => {
//         try {
//             const response = await axios.get(`${API_URL}/discover/movie`, {
//                 params: {
//                     api_key: process.env.REACT_APP_MOVIE_API_KEY
//                 }
//             });
//             setMovies(response.data.results);
//         } catch (error) {
//             console.error("Error fetching movies:", error);
//         }
//     };

//     // initialize the movies variable to empty array
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         fetchMovies();
//     }, []);

//     return (
//         <>
//             <div>Hello Movies</div>
//             <SearchBar />
//             <div className="flex overflow-x: auto">
//                 {movies.map((movie) => (
//                     <MovieCard key={movie.id} movie={movie} />
//                 ))}
//             </div>

//         </>
//     );
// };

// export default Movies;
