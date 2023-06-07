import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Sparkle Sports School | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <Slider></Slider>  
        </div>
    );
};

export default Home;