import React, {SVGProps} from 'react';

const IconBar = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={32}
            height={32}
            viewBox="0 0 50 50"
            className='cursor-pointer'
            {...props}
        >
            <path
                d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
        </svg>

    );
};

export default IconBar;