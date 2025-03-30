import React, {ButtonHTMLAttributes} from 'react';
import IconLoader from "@/components/icons/IconLoader";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    isLink?: boolean;
}

const Button: React.FC<ButtonProps> = ({className, children, isLoading, disabled, isLink, ...rest}) => {
    return (
        <button
            disabled={isLoading || disabled}
            className={`group relative common-button overflow-hidden ${className ? className : ''} ${isLoading ? 'bg-text-primary' : ''}`}
            {...rest}
        >
            {isLoading ? <IconLoader className='w-8 h-8'/> : children}
            {isLink && (
                <div
                    aria-hidden="true"
                    className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine md:hidden"/>
            )}
        </button>
    );
};

export default Button;