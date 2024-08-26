import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {COLORS, FONTS, SPACING} from '../../styles/theme.ts';

interface ErrorStateProps {
    message: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SPACING.large,
    },
    text: {
        color: COLORS.error,
        fontSize: FONTS.sizes.medium,
        textAlign: 'center',
    },
});

export default ErrorState;
