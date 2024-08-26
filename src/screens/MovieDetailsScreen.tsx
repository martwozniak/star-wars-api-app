import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useMovieDetails } from '../hooks/useMovieDetails';
import LoadingView from '../components/MovieDetailsScreen/LoadingView.tsx';
import EntityGridList from '../components/MovieDetailsScreen/EntityGridList.tsx';
import MovieHeader from '../components/MovieDetailsScreen/MovieHeader.tsx';
import { RootStackParamList } from '../types/navigation.ts';

type MovieDetailsScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

type Props = {
    route: MovieDetailsScreenRouteProp;
};

const MovieDetailsScreen: React.FC<Props> = ({ route }) => {
    const { movie } = route.params;
    const { entities, loading } = useMovieDetails(movie);

    if (loading) {
        return <LoadingView />;
    }

    return (
        <FlatList
            data={entities}
            renderItem={({ item }) => <EntityGridList item={item} />}
            keyExtractor={(item) => item.type}
            ListHeaderComponent={<MovieHeader movie={movie} />}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default MovieDetailsScreen;
