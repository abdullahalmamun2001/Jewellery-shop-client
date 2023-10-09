import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Contract from './Contract/Contract';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Contract></Contract>
        </div>
    );
};

export default Home;