import { useState } from "react";
import RetryButton from "./RetryButton";
import ChooseCustomizedMenu from "./ChooseCustomizedMenu";
import FirstStep from "./FirstStep";
import MENU_LIST from '../constants/MenuData';
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

function CustomizePage({ setRecommendationStart }) {
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
        setNextButtonEnabled(false);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
        setNextButtonEnabled(true);
    };

    return (
        <>
            {step === 1 && (
                <>
                    <FirstStep
                        options={options}
                        setOptions={setOptions}
                        setNextButtonEnabled={setNextButtonEnabled}
                    />
                    <button
                        type="button"
                        onClick={handleNextStep}
                        disabled={!nextButtonEnabled}>
                        다음으로
                    </button>
                </>
            )}
            {step === 2 && (
                <>
                    <SecondStep
                        options={options}
                        setOptions={setOptions}
                        setNextButtonEnabled={setNextButtonEnabled}
                    />
                    <button type="button" onClick={handlePrevStep}>이전으로</button>
                    <button type="button" onClick={handleNextStep} disabled={!nextButtonEnabled}>다음으로</button>
                </>
            )}
            {step === 3 && (
                <>
                    <ThirdStep
                        options={options}
                        setOptions={setOptions}
                        setRecommendedMenu={setRecommendedMenu}
                    />
                    <button type="button" onClick={handlePrevStep}>이전으로</button>
                    <ChooseCustomizedMenu
                        MENU_LIST={MENU_LIST}
                        options={options}
                        step={step}
                        setStep={setStep}
                        setRecommendedMenu={setRecommendedMenu}
                        recommendedMenu={recommendedMenu} />
                </>
            )}
            {step === 4 && (
                <>
                    <h2>{recommendedMenu} 어때?</h2>
                    <RetryButton
                        setRecommendedMenu={setRecommendedMenu}
                        setRecommendationStart={setRecommendationStart} />
                </>
            )}
        </>
    );
}

export default CustomizePage;
