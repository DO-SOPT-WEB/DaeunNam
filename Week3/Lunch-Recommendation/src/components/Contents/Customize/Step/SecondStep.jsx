import React from 'react'

function NameOfMainIngredient(selectedOption, options, setOptions) {
    setOptions((prevOptions) => ({
        ...prevOptions,
        mainIngredient: selectedOption,
    }));
}

function SecondStep({ options, setOptions, setIsActiveButton }) {
    return (
        <>
            <h2>Step 2: 주재료는?</h2>
            <label className={options.mainIngredient === "밥" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.mainIngredient === "밥"}
                    onChange={() => {
                        NameOfMainIngredient("밥", options, setOptions);
                        setIsActiveButton(true);
                    }}
                />밥
            </label>
            <label className={options.mainIngredient === "면" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.mainIngredient === "면"}
                    onChange={() => {
                        NameOfMainIngredient("면", options, setOptions);
                        setIsActiveButton(true);
                    }}
                />면
            </label>
            <label className={options.mainIngredient === "고기/해물" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.mainIngredient === "고기/해물"}
                    onChange={() => {
                        NameOfMainIngredient("고기/해물", options, setOptions);
                        setIsActiveButton(true);
                    }}
                />고기/해물
            </label>
        </>

    )
}

export default SecondStep