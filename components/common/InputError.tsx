import React from 'react';

interface InputErrorProps {
    error?: string;
    className?: string;
}

const InputError = ({error, className}: InputErrorProps) => {
    return (
        <p className={`formError text-xs absolute right-0 text-error font-semibold duration-300 opacity-0 ${className ? className : ''}`}>
            {error ? error || 'This field is required' : ''}
        </p>
    );
};

export default InputError;