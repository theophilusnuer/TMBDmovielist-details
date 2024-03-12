import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, id }) => {
    return (
        <div className="flex-shrink-0 mr-4" style={{ width: "200px", height: "300px" }}>
            <div className="bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col justify-between h-full">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-t-md object-cover" style={{ height: "70%" }} />
                <div className="movie-info mt-2">
                    <h2 className="text-lg font-semibold text-gray-300">
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </h2>
                    <p className="text-sm text-gray-400">{movie.release_date}</p>
                    {/* <p className="text-sm text-gray-300 truncate">{movie.overview}</p> */}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;































// import React from 'react';

// const MovieCard = ({ movie }) => {
//     return (
//         <>
//             <div className="container-movie">
//                 <div className="flex-shrink-0 mr-4" style={{ width: "200px", height: "300px" }}>
//                     <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-between h-full">
//                         <div className="flex-shrink-0">
//                             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-t-md object-cover" style={{ height: "50%" }} />
//                             <div className="movie-info mt-2">
//                                 <h2 className="text-lg font-semibold text-white truncate">{movie.title}</h2>
//                                 <p className="text-sm text-gray-400">{movie.release_date}</p>
//                                 <p className="text-sm text-gray-300 truncate">{movie.overview}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     );
// };

// export default MovieCard;
