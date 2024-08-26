import { useState, useEffect } from 'react';
import { getCharacter, getPlanet, getStarship, getVehicle, getSpecies } from '../services/api';
import {Film} from '../types/types.ts';

type Entity = {
    type: string;
    data: any[];
};

export const useMovieDetails = (movie: Film) => {
    const [entities, setEntities] = useState<Entity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const fetchEntityDetails = async (urls: string[], fetchFunction: (id: string) => Promise<any>) => {
                    const promises = urls.map(url => fetchFunction(url.split('/').slice(-2, -1)[0]));
                    return Promise.all(promises);
                };

                const [characters, planets, starships, vehicles, species] = await Promise.all([
                    fetchEntityDetails(movie.characters, getCharacter),
                    fetchEntityDetails(movie.planets, getPlanet),
                    fetchEntityDetails(movie.starships, getStarship),
                    fetchEntityDetails(movie.vehicles, getVehicle),
                    fetchEntityDetails(movie.species, getSpecies),
                ]);

                setEntities([
                    { type: 'characters', data: characters },
                    { type: 'planets', data: planets },
                    { type: 'starships', data: starships },
                    { type: 'vehicles', data: vehicles },
                    { type: 'species', data: species },
                ]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching details:', error);
                setLoading(false);
            }
        };

        fetchDetails();
    }, [movie]);

    return { entities, loading };
};
