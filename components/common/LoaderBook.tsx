import React from 'react';
import IconBookLoader from "@/components/icons/IconBookLoader";

const LoaderBook = () => {
    return (
        <div className="loader">
            <div className="book-wrapper">
                <IconBookLoader />
            </div>
        </div>
    );
};

export default LoaderBook;