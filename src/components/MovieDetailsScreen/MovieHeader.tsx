import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Film} from '../../types/types.ts';

type Props = {
    movie: Film;
};

const MovieHeader: React.FC<Props> = ({ movie }) => {
    const imageUri = `https://starwars-visualguide.com/assets/img/films/${movie.episode_id}.jpg`;

    return (
        <View>
            <Image source={{ uri: imageUri }} style={styles.movieImage} />
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.info}>Episode: {movie.episode_id}</Text>
            <Text style={styles.info}>Director: {movie.director}</Text>
            <Text style={styles.info}>Producer: {movie.producer}</Text>
            <Text style={styles.info}>Release Date: {movie.release_date}</Text>
            <Text style={styles.sectionTitle}>Opening Crawl:</Text>
            <Text style={styles.openingCrawl}>{movie.opening_crawl}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    movieImage: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    info: {
        fontSize: 16,
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
    },
    openingCrawl: {
        fontSize: 16,
        lineHeight: 24,
        fontStyle: 'italic',
        marginBottom: 16,
    },
});

export default React.memo(MovieHeader);
