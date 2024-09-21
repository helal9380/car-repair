import React from 'react';

const SectionTitle = ({title, subTitle, description}) => {
    return (
        <div className='space-y-2 w-1/2 mx-auto text-center'>
            <h3 className='text-[#FF3811] text-xl font-bold '>{title}</h3>
            <h2 className='text-4xl font-semibold'>{subTitle}</h2>
            <p>{description}</p>
        </div>
    );
};

export default SectionTitle;