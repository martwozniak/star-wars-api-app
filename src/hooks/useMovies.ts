import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { getFilms } from '../services/api';
import { Film } from '../types/types';

export const useMovies = () => {
    const [movies, setMovies] = useState<Film[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMovies = useCallback(async (search: string = '') => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await getFilms(search);
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
            setError('Failed to fetch movies. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    const debouncedSearch = useCallback(
        debounce((text: string) => {
            fetchMovies(text);
        }, 300),
        [fetchMovies]
    );

    const handleSearch = (text: string) => {
        setSearchQuery(text);
        debouncedSearch(text);
    };

    return {
        movies,
        searchQuery,
        isLoading,
        error,
        handleSearch,
    };
};
