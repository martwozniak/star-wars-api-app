import { useNavigation } from '@react-navigation/native';
import { Film } from '../types/types';

export const useMovieNavigation = () => {
    const navigation = useNavigation();

    const navigateToMovieDetails = (movie: Film) => {
        navigation.navigate('MovieDetails', { movie });
    };

    return { navigateToMovieDetails };
};
