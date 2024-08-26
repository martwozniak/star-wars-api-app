import React from 'react';
import EntityGrid from '../EntityGrid.tsx';

type Props = {
    item: {
        type: 'characters' | 'planets' | 'starships' | 'vehicles' | 'species';
        data: any[]
    };
};

const EntityGridList: React.FC<Props> = ({ item }) => {
    const title = item.type.charAt(0).toUpperCase() + item.type.slice(1);

    return (
        <EntityGrid
            title={title}
            entities={item.data}
            entityType={item.type}
        />
    );
};

export default React.memo(EntityGridList);
