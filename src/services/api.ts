import axios from 'axios';
import {ApiResponse, Character, Film, Planet, Species, Starship, Vehicle} from '../types/types.ts';

const API_BASE_URL = 'https://swapi.dev/api';

export const getFilms = async (search: string = ''): Promise<ApiResponse<Film>> => {
    const response = await axios.get<ApiResponse<Film>>(`${API_BASE_URL}/films/`, { params: { search } });
    return response.data;
};

export const getCharacter = async (id: string): Promise<Character> => {
    const response = await axios.get<Character>(`${API_BASE_URL}/people/${id}/`);
    return response.data;
};

export const getPlanet = async (id: string): Promise<Planet> => {
    const response = await axios.get<Planet>(`${API_BASE_URL}/planets/${id}/`);
    return response.data;
};

export const getStarship = async (id: string): Promise<Starship> => {
    const response = await axios.get<Starship>(`${API_BASE_URL}/starships/${id}/`);
    return response.data;
};

export const getVehicle = async (id: string): Promise<Vehicle> => {
    const response = await axios.get<Vehicle>(`${API_BASE_URL}/vehicles/${id}/`);
    return response.data;
};

export const getSpecies = async (id: string): Promise<Species> => {
    const response = await axios.get<Species>(`${API_BASE_URL}/species/${id}/`);
    return response.data;
};
