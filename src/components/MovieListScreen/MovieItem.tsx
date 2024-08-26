import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Film} from '../../types/types.ts';
import {COLORS, FONTS, SPACING} from '../../styles/theme.ts';

interface MovieItemProps {
    movie: Film;
    onPress: () => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.info}>Episode {movie.episode_id}</Text>
        <Text style={styles.info}>Released: {movie.release_date}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: SPACING.medium,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    title: {
        fontSize: FONTS.sizes.large,
        fontWeight: 'bold',
        color: COLORS.text.primary,
    },
    info: {
        fontSize: FONTS.sizes.small,
        color: COLORS.text.secondary,
    },
});

export default MovieItem;
