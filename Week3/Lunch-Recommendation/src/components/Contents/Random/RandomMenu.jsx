import React, { useState, useEffect } from 'react';
import RetryButton from './RetryButton';
import MENUS from '../constants/Menus';

function RandomMenu({ setRecommendationStart }) {
    const [time, setTime] = useState(3);
    const [recommendedMenu, setRecommendedMenu] = useState(null);

    useEffect(() => {
        time > 0 && setTimeout(() => setTime(time - 1), 1000);
    }, [time]);

    useEffect(() => {
        if (time <= 0) {
            const randomIndex = Math.floor(Math.random() * MENUS.length);
            setRecommendedMenu(MENUS[randomIndex]);
        }
    }, [time, MENUS]);

    return (
        <div>
            {time > 0 ? (
                <h2>{time}</h2>
            ) : (
                <>
                    <h3>{recommendedMenu} 어때?</h3>
                    <RetryButton
                        setRecommendedMenu={setRecommendedMenu}
                        setRecommendationStart={setRecommendationStart} />
                </>
            )}
        </div>
    );
}

export default RandomMenu;
