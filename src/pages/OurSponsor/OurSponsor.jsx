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
        <div>
            <SectionTitle heading={'Our Valuable Sponsor'} subHeading={'more world class company trust us.'}></SectionTitle>
           <div className='flex justify-center '>
                <img className='w-36 mr-6' src={img1}  /> 
                <img className='w-36 mr-6' src={img2}  /> 
                <img className='w-36 mr-6' src={img3}  /> 
                <img className='w-36 mr-6' src={img4} /> 
                <img className='w-36 mr-6' src={img5} /> 
                <img className='w-36 mr-6' src={img6} /> 
           </div>
        </div>
    );
};

export default OurSponsor;