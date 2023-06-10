import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from './Slider/Slider';
import OurSponsor from '../OurSponsor/OurSponsor';

const Home = () => {
    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Sparkle Sports School | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <Slider></Slider>
          <OurSponsor></OurSponsor>  
        </div>
    );
};

export default Home;