import { useEffect, useState } from "react";
import RetryButton from "../RetryButton";
import FirstStep from "./Step/FirstStep";
import MENU_LIST from '../../../constants/MenuData';
import SecondStep from "./Step/SecondStep";
import ThirdStep from "./Step/ThirdStep";
import ReturnCustomizeMenu from "./ReturnCustomizeMenu";

function CustomizeMenu({ setRecommendationStart }) {
    const [step, setStep] = useState(1);
    const [recommendedMenu, setRecommendedMenu] = useState('');
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [options, setOptions] = useState({
        cuisine: "",
        mainIngredient: "",
        soup: "",
    });

    const handleNextStep = () => {
        if (isActiveButton) {
            setStep(step + 1);
        }
        else {
            e.preventDefault();
        }
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    useEffect(() => {
        const buttonState = () => {
            if (step === 1 && options.cuisine === "") {
                setIsActiveButton(false);
            } else if (step === 2 && options.mainIngredient === "") {
                setIsActiveButton(false);
            } else if (step === 3 && options.soup === "") {
                setIsActiveButton(false);
            } else {
                setIsActiveButton(true);
            }
        };
        buttonState();
    }, [step]);

    return (
        <>
            {step === 1 && (
                <>
                    <FirstStep
                        options={options}
                        setOptions={setOptions}
                        setIsActiveButton={setIsActiveButton}
                    />
                    <div>
                        <button
                            type="button"
                            onClick={handleNextStep}
                            disabled={!isActiveButton}>
                            다음으로
                        </button>
                    </div>
                </>
            )}
            {step === 2 && (
                <>
                    <SecondStep
                        options={options}
                        setOptions={setOptions}
                        setIsActiveButton={setIsActiveButton}
                    />
                    <div>
                        <button type="button" onClick={handlePrevStep}>이전으로</button>
                        <button type="button" onClick={handleNextStep} disabled={!isActiveButton}>다음으로</button>
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <ThirdStep
                        options={options}
                        setOptions={setOptions}
                        setIsActiveButton={setIsActiveButton}
                    />
                    <div>
                        <button type="button" onClick={handlePrevStep}>이전으로</button>
                        <ReturnCustomizeMenu
                            MENU_LIST={MENU_LIST}
                            options={options}
                            step={step}
                            setStep={setStep}
                            setRecommendedMenu={setRecommendedMenu}
                            isActiveButton={isActiveButton} />
                    </div>
                </>
            )}
            {step === 4 && (
                <>
                    <h2>{recommendedMenu} 어때?</h2>
                    {recommendedMenu && (
                        <img
                            src={`/${encodeURIComponent(recommendedMenu)}.png`}
                            alt={recommendedMenu}
                        />
                    )}
                    <div>
                        <RetryButton
                            setRecommendedMenu={setRecommendedMenu}
                            setRecommendationStart={setRecommendationStart} />
                    </div>
                </>
            )}
        </>
    );
}

export default CustomizeMenu;
