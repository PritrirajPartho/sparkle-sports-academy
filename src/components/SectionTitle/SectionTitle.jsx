import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto mb-20 mt-20 ">
            <p className="text-black mb-2 text-center w-100">{subHeading}</p>
            <h3 className="mx-auto text-center text-xl uppercase border-y-4 py-4 text-[#164BF7] w-3/4 md:w-4/12 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;