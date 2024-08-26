import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './EntityGrid.styles.ts';

interface Entity {
    url: string;
    name: string;
}

interface EntityGridProps {
    title: string;
    entities: Entity[];
    entityType: 'characters' | 'planets' | 'starships' | 'vehicles' | 'species';
}

const PlaceholderImage = () => (
    <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>No Image</Text>
    </View>
);

const EntityGrid: React.FC<EntityGridProps> = ({ title, entities, entityType }) => {
    const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

    const handleImageError = (id: string) => {
        setImageErrors(prev => ({ ...prev, [id]: true }));
    };

    const renderItem = ({ item }: { item: Entity }) => {
        const id = item.url.split('/').slice(-2, -1)[0];
        const imageUrl = `https://starwars-visualguide.com/assets/img/${entityType}/${id}.jpg`;

        return (
            <View style={styles.itemContainer}>
                {imageErrors[id] ? (
                    <PlaceholderImage />
                ) : (
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                        onError={() => handleImageError(id)}
                    />
                )}
                <Text style={styles.name}>{item.name}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={entities}
                renderItem={renderItem}
                keyExtractor={(item) => item.url}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};

export default EntityGrid;
