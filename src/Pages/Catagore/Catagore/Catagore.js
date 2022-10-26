import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Catagore = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <h2>This catagore news:{data.length}</h2>
            {
                data.map(news => <NewsSummeryCard
                key={news._id}
                news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Catagore;