import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import {COLORS, SPACING} from '../../styles/theme.ts';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText, placeholder }) => (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
    />
);

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: COLORS.border,
        borderWidth: 1,
        marginBottom: SPACING.medium,
        paddingHorizontal: SPACING.small,
    },
});

export default SearchBar;
