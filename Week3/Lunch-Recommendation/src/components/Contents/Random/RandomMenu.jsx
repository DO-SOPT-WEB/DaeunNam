import React, { useState, useEffect } from 'react';
import RetryButton from '../RetryButton';
import MENUS from '../../../constants/Menus';
import * as S from '../style';

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
        <S.RandomSection>
            {time > 0 ? (
                <S.CountDown>{time}</S.CountDown>
            ) : (
                <>
                    <S.ReturnMenu>{recommendedMenu} 어때?</S.ReturnMenu>
                    <RetryButton
                        setRecommendedMenu={setRecommendedMenu}
                        setRecommendationStart={setRecommendationStart} />

                </>
            )}
        </S.RandomSection>
    );
}

export default RandomMenu;
