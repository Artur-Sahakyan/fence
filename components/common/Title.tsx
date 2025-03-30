import React from 'react';

const Title = ({children, className}: {children: string, className?: string}) => {
    return (
        <h2 className={`text-black text-[50px] leading-[48px] text-center font-bold mb-5 xl:text-3xl md:text-xl md:mb-4 ${className || ''}`}>
            {children}
        </h2>
    );
};

export default Title;