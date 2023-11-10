import React from 'react';
import MENU_LIST from '../../../constants/MenuData';

function ReturnCustomizeMenu({ options, setStep, step, setRecommendedMenu, recommendedMenu }) {
    const handleRecommendMenu = () => {
        setStep(step + 1);
        const filteredMenus = MENU_LIST.filter((menu) => {
            return (
                (options.cuisine === '' || menu.cuisine === options.cuisine) &&
                (options.mainIngredient === '' || menu.mainIngredient === options.mainIngredient) &&
                (options.soup === '' || menu.soup === options.soup)
            );
        });

        if (filteredMenus.length > 0) {
            // 필터링된 메뉴 배열 중 랜덤 인덱스 하나 반환
            const randomIndex = Math.floor(Math.random() * filteredMenus.length);
            setRecommendedMenu(filteredMenus[randomIndex].name);
        } else {
            setRecommendedMenu('텅 😅');
        }
    };

    return (
        <button type="button" onClick={handleRecommendMenu} disabled={!recommendedMenu}>
            메뉴 추천
        </button>
    );
}

export default ReturnCustomizeMenu;
