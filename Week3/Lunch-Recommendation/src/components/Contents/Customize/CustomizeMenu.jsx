import { useState } from "react";
import RetryButton from "../RetryButton";
import FirstStep from "./Step/FirstStep";
import MENU_LIST from '../../../constants/MenuData';
import SecondStep from "./Step/SecondStep";
import ThirdStep from "./Step/ThirdStep";
import ReturnCustomizeMenu from "./ReturnCustomizeMenu";

function CustomizeMenu({ setRecommendationStart }) {
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
                    <div>
                        <button
                            type="button"
                            onClick={handleNextStep}
                            disabled={!nextButtonEnabled}>
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
                        setNextButtonEnabled={setNextButtonEnabled}
                    />
                    <div>
                        <button type="button" onClick={handlePrevStep}>이전으로</button>
                        <button type="button" onClick={handleNextStep} disabled={!nextButtonEnabled}>다음으로</button>
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <ThirdStep
                        options={options}
                        setOptions={setOptions}
                        setRecommendedMenu={setRecommendedMenu}
                    />
                    <div>
                        <button type="button" onClick={handlePrevStep}>이전으로</button>
                        <ReturnCustomizeMenu
                            MENU_LIST={MENU_LIST}
                            options={options}
                            step={step}
                            setStep={setStep}
                            setRecommendedMenu={setRecommendedMenu}
                            recommendedMenu={recommendedMenu} />
                    </div>
                </>
            )}
            {step === 4 && (
                <>
                    <h2>{recommendedMenu} 어때?</h2>
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