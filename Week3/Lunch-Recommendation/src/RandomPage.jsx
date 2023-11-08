import React, { useState, useEffect } from 'react';

function RandomPage({ setRecommendationStart }) {
    const [time, setTime] = useState(3);
    const [recommendedMenu, setRecommendedMenu] = useState(null);
    const MENUS = [
        "초밥", "짬뽕", "불고기", "뼈해장국", "마라탕", "간장계란밥", "우동", "라멘", "돈까스", "비빔밥"
    ]

    useEffect(() => {
        time > 0 && setTimeout(() => setTime(time - 1), 1000);
    }, [time]);

    useEffect(() => {
        if (time <= 0) {
            const randomIndex = Math.floor(Math.random() * MENUS.length);
            setRecommendedMenu(MENUS[randomIndex]);
        }
    }, [time, MENUS]);

    const handleRetry = () => {
        setRecommendedMenu('');
        setRecommendationStart(false);
    };

    return (
        <div>
            {time > 0 ? (
                <h2>{time}</h2>
            ) : (
                <>
                    <h3>{recommendedMenu} 어때?</h3>
                    <button type="button" onClick={handleRetry}>
                        다시 해볼래
                    </button>
                </>
            )}
        </div>
    );
}

export default RandomPage;
