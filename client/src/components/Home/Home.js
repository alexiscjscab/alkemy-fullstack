import React from 'react';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import HomeCtn from './styledHome'



const Home = () => {

    

    return (
        <HomeCtn>
            <Filter/>
            <Cards/>
        </HomeCtn>
    )
}

export default Home
