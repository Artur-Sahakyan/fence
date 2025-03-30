import React, {SVGProps} from 'react';

const IconAcc = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={38}
            height={38}
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x="0.767456"
                y="0.633789"
                width="37.2244"
                height="37.2244"
                rx="18.6122"
                fill="#E9EAEB"
            />
            <path
                d="M28.0509 15.9072L20.9126 23.0456C20.0696 23.8886 18.6901 23.8886 17.8471 23.0456L10.7087 15.9072"
                stroke="#181D27"
                strokeWidth="2.18967"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    );
};

export default IconAcc;