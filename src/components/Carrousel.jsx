import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const Carrousel = ({ backgroundIMG, carrousel = [] }) => {
    const listRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === carrousel.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [carrousel.length]);

    useEffect(() => {
        const listNode = listRef.current;
        listNode.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, [currentIndex]);

    return (
        <div
            className="carrousel"
        >
            <img src={backgroundIMG} alt="background" className="carrousel-background" style={{
                width: '100%',
                height: '100%',
            }}/>
            <div className="container-carrousel">
                <div className="carrousel-list" ref={listRef}>
                    {carrousel.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`img-${index}`}
                            className="carrousel-item"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

Carrousel.propTypes = {
    backgroundIMG: PropTypes.string.isRequired,
    carrousel: PropTypes.arrayOf(PropTypes.string).isRequired
};
