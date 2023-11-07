import React, { useState, useEffect } from 'react';
import RecommendationPage from './RecommendationPage';

const RandomPage = () => {
    const menus = ['뼈해장국', '스테이크', '초밥', '파스타', '버거', '짜장면', '카레', '떡볶이'];

    const [time, setTime] = useState(3);
    const [recommendedMenu, setRecommendedMenu] = useState(null);

    useEffect(() => {
        time > 0 && setTimeout(() => setTime(time - 1), 1000);
    }, [time]);

    useEffect(() => {
        if (time <= 0) {
            const randomIndex = Math.floor(Math.random() * menus.length);
            setRecommendedMenu(menus[randomIndex]);
        }
    }, [time, menus]);

    const handleRetry = () => {
        setTime(3);
        setRecommendedMenu(null);
    };

    return (
        <div>
            {time > 0 ? (
                <h2>{time}</h2>
            ) : (
                <>
                    <h3>오늘의 추천 메뉴: {recommendedMenu}</h3>
                    <button type="button" onClick={handleRetry}>다시 해볼래</button>
                </>
            )}
        </div>
    );
};

export default RandomPage;
