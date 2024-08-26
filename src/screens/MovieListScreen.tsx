import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Film } from '../types/types';
import { useMovies } from '../hooks/useMovies';
import { COLORS, FONTS, SPACING } from '../styles/theme';
import MovieItem from '../components/MovieListScreen/MovieItem.tsx';
import LoadingState from '../components/MovieListScreen/LoadingState.tsx';
import SearchBar from '../components/MovieListScreen/SearchBar.tsx';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

type RootStackParamList = {
    MovieDetails: { movie: Film };
  };

  type MovieListScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MovieDetails'>;

const MovieListScreen: React.FC = () => {
    const navigation = useNavigation<MovieListScreenNavigationProp>();
    const { movies, searchQuery, isLoading, error, handleSearch } = useMovies();

    const renderMovieItem = ({ item }: { item: Film }) => (
        <MovieItem
            movie={item}
            onPress={() => navigation.navigate('MovieDetails', { movie: item })}
        />
    );

    const renderContent = () => {
        if (isLoading) {
            return <LoadingState />;
        }

        if (error) {
            return <Text style={styles.errorText}>{error}</Text>;
        }

        return (
            <FlatList
                data={movies}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.episode_id.toString()}
                ListEmptyComponent={<Text style={styles.emptyText}>No movies found</Text>}
            />
        );
    };

    return (
        <View style={styles.container}>
            <SearchBar
                value={searchQuery}
                onChangeText={handleSearch}
                placeholder="Search movies..."
            />
            {renderContent()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SPACING.medium,
    },
    errorText: {
        color: COLORS.error,
        fontSize: FONTS.sizes.medium,
        textAlign: 'center',
        marginTop: SPACING.large,
    },
    emptyText: {
        color: COLORS.text.secondary,
        fontSize: FONTS.sizes.medium,
        textAlign: 'center',
        marginTop: SPACING.large,
    },
});

export default MovieListScreen;
