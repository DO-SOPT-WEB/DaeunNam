import React from 'react';
import * as S from './style.js';

function RecommendTypeButton({ handleRandom, handleCustomize }) {
    return (
        <>
            <S.button type='button' onClick={handleCustomize}>골라 먹을래</S.button>
            <S.button type="button" onClick={handleRandom}>아무거나 먹을래</S.button>
        </>
    )
}

export default RecommendTypeButton