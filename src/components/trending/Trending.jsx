import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../movieCard/MovieCard';
import TrendingTabBar from '../tabs/TrendingTab';

const Trending = () => {

    const API_URL = "https://api.themoviedb.org/3";
    const [movies, setMovies] = useState([]);
    const [activeTab, setActiveTab] = useState('today');

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const todayDate = new Date().toISOString().split('T')[0];
            const lastWeekDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

            try {
                const response = await axios.get(`${API_URL}/trending/movie/${activeTab === 'today' ? 'day' : 'week'}`, {
                    params: {
                        api_key: process.env.REACT_APP_MOVIE_API_KEY,
                        primary_release_date_gte: activeTab === 'today' ? todayDate : lastWeekDate,
                        primary_release_date_lte: activeTab === 'today' ? todayDate : null,
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };

        fetchTrendingMovies();
    }, [activeTab]);

    return (
        <div>
            <TrendingTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex overflow-x-auto space-x-4">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Trending;
