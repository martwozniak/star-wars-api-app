import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import {COLORS} from '../../styles/theme.ts';

const LoadingState: React.FC = () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingState;
