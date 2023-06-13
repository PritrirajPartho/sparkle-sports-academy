import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import img1 from '../../../public/com/addidas.png';
import img2 from '../../../public/com/ibm.png';
import img3 from '../../../public/com/nord.png';
import img4 from '../../../public/com/samsung.webp';
import img5 from '../../../public/com/red-bull.png';
import img6 from '../../../public/com/ikea.webp';

const OurSponsor = () => {
    return (
        <div className='ms-3 mb-16'>
            <SectionTitle heading={'Our Valuable Sponsor'} subHeading={'more world class company trust us.'}></SectionTitle>
           <div className='grid sm:grid-cols-1 sm:gap-10 lg:grid-cols-6  justify-center mt-4'>
                <img className='sm:mb-6 mt-4 w-36 mr-6 rounded' src={img1}  /> 
                <img className='sm:mb-6 mt-4 w-36 mr-6 rounded' src={img2}  /> 
                <img className='sm:mb-6 mt-4 w-36 mr-6 rounded' src={img3}  /> 
                <img className='sm:mb-6 mt-4 w-36 mr-6 rounded' src={img4} /> 
                <img className='sm:mb-6 mt-4 w-36 mr-6 rounded' src={img5} /> 
                <img className='sm:mb-6 mt-4 w-36 mr-6 rounded' src={img6} /> 
           </div>
        </div>
    );
};

export default OurSponsor;