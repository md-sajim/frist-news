import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <h5>Today all news {data.length}</h5>
            {
                data.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}

                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;