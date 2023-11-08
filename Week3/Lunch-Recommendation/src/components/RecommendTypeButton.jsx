import React from 'react';
import handleCustom from './InitPage';
import handleRandom from './InitPage';

function RecommendTypeButton({ handleRandom, handleCustomize }) {
    return (
        <>
            <button type='button' onClick={handleCustomize}>골라 먹을래</button>
            <button type="button" onClick={handleRandom}>아무거나 먹을래</button>
        </>
    )
}

export default RecommendTypeButton