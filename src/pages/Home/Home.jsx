import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Sparkle Sports School | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <h1>This is Home</h1>
          <h1 className='mb-12'>Assignment 12 is very hard. so be careful</h1>
              <button className="btn btn-outline btn-info">Assignment-12 for your life</button>
              <button className="btn btn-outline btn-success">Success</button>
              <button className="btn btn-outline btn-warning">Warning</button>
              <button className="btn btn-outline btn-error">Error</button>  
        </div>
    );
};

export default Home;