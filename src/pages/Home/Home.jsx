import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from './Slider/Slider';
import OurSponsor from '../OurSponsor/OurSponsor';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructor from './PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Sparkle Sports School | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <Slider></Slider>
          <PopularClasses></PopularClasses>
          <PopularInstructor></PopularInstructor>
          <OurSponsor></OurSponsor>  
        </div>
    );
};

export default Home;