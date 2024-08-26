import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = (SCREEN_WIDTH - 48) / 2; // 48 = padding (16) * 2 + gap (16)
const ITEM_HEIGHT = ITEM_WIDTH;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    itemContainer: {
        width: ITEM_WIDTH,
        alignItems: 'center',
    },
    image: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 8,
        marginBottom: 8,
    },
    name: {
        fontSize: 14,
        textAlign: 'center',
    },
    placeholderContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 8,
        marginBottom: 8,
        backgroundColor: '#656262',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        color: '#a0a0a0',
        fontSize: 16,
    },
});

export default styles;
