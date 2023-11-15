import React from 'react'

function NameOfMainIngredient(selectedOption, options, setOptions) {
    setOptions((prevOptions) => ({
        ...prevOptions,
        mainIngredient: selectedOption,
    }));
}

function SecondStep({ options, setOptions, setIsActiveButton }) {
    const mainIngredients = ["밥", "면", "고기/해물"];

    return (
        <>
            <h2>Step 2: 주재료는?</h2>
            {mainIngredients.map((mainIngredient) => (
                <label key={mainIngredient} className={options.mainIngredient === mainIngredient ? "selected" : ""}>
                    <input type="checkbox" checked={options.mainIngredient === mainIngredient}
                        onChange={() => {
                            setOptions({ ...options, mainIngredient });
                            setNextButtonEnabled(true);
                        }}
                    />
                    {mainIngredient}
                </label>
            ))}
        </>

    )
}

export default SecondStep