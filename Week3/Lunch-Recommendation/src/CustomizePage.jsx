import { useState } from "react";

const MENU_LIST = [
    { name: "초밥", cuisine: "일식", mainIngredient: "밥", soup: "국물 없음" },
    { name: "짬뽕", cuisine: "중식", mainIngredient: "면", soup: "국물" },
    { name: "불고기", cuisine: "한식", mainIngredient: "고기/해물", soup: "국물 없음" },
    { name: "뼈해장국", cuisine: "한식", mainIngredient: "고기/해물", soup: "국물" },
    { name: "마라탕", cuisine: "중식", mainIngredient: "고기/해물", soup: "국물" },
    { name: "간장계란밥", cuisine: "한식", mainIngredient: "밥", soup: "국물 없음" },
    { name: "우동", cuisine: "일식", mainIngredient: "면", soup: "국물" },
    { name: "라멘", cuisine: "일식", mainIngredient: "면", soup: "국물" },
    { name: "돈까스", cuisine: "일식", mainIngredient: "고기/해물", soup: "국물 없음" },
    { name: "비빔밥", cuisine: "한식", mainIngredient: "밥", soup: "국물 없음" }
]

function CustomizePage() {
    const [step, setStep] = useState(1);
    const [options, setOptions] = useState({
        cuisine: "",
        mainIngredient: "",
        soup: "",
    });
    const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
    const [recommendedMenu, setRecommendedMenu] = useState('');

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleRecommendMenu = () => {
        setStep(step + 1);
    };

    return (
        <>
            {step === 1 && (
                <>
                    <h2>Step 1: 어떤 요리가 좋아?</h2>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.cuisine === "일식"}
                            onChange={() => {
                                setOptions({ ...options, cuisine: "일식" });
                            }}
                        />일식
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.cuisine === "중식"}
                            onChange={() => {
                                setOptions({ ...options, cuisine: "중식" });
                            }}
                        />중식
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.cuisine === "한식"}
                            onChange={() => {
                                setOptions({ ...options, cuisine: "한식" });
                            }}
                        />한식
                    </label>
                    <br />
                    <button onClick={handleNextStep}>다음으로</button>
                </>
            )}
            {step === 2 && (
                <>
                    <h2>Step 2: 주재료는?</h2>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.mainIngredient === "밥"}
                            onChange={() => {
                                setOptions({ ...options, mainIngredient: "밥" });
                            }}
                        />밥
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.mainIngredient === "면"}
                            onChange={() => {
                                setOptions({ ...options, mainIngredient: "면" });
                            }}
                        />면
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.mainIngredient === "고기/해물"}
                            onChange={() => {
                                setOptions({ ...options, mainIngredient: "고기/해물" });
                            }}
                        />고기/해물
                    </label>
                    <br />
                    <button onClick={handlePrevStep}>이전으로</button>
                    <button onClick={handleNextStep}>다음으로</button>
                </>
            )}
            {step === 3 && (
                <>
                    <h2>Step 3: 국물은?</h2>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.soup === "국물"}
                            onChange={() => {
                                setOptions({ ...options, soup: "국물" });
                            }}
                        />국물 있어야지
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.soup === "국물 없음"}
                            onChange={() => {
                                setOptions({ ...options, soup: "국물 없음" });
                            }}
                        />없어도 돼
                    </label>
                    <br />
                    <button onClick={handlePrevStep}>이전으로</button>
                    <button onClick={handleRecommendMenu}>메뉴 추천</button>
                </>
            )}
            {step === 4 && (
                <>
                    <h2>{recommendedMenu} 어때?</h2>
                </>
            )}
        </>
    );
}

export default CustomizePage;
