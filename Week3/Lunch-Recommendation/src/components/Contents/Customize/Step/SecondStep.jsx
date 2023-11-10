import React from 'react'

function SecondStep({ options, setOptions, setNextButtonEnabled }) {
    return (
        <>
            <h2>Step 2: 주재료는?</h2>
            <label className={options.mainIngredient === "밥" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.mainIngredient === "밥"}
                    onChange={() => {
                        setOptions({ ...options, mainIngredient: "밥" });
                        setNextButtonEnabled(true);
                    }}
                />밥
            </label>
            <label className={options.mainIngredient === "면" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.mainIngredient === "면"}
                    onChange={() => {
                        setOptions({ ...options, mainIngredient: "면" });
                        setNextButtonEnabled(true);
                    }}
                />면
            </label>
            <label className={options.mainIngredient === "고기/해물" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.mainIngredient === "고기/해물"}
                    onChange={() => {
                        setOptions({ ...options, mainIngredient: "고기/해물" });
                        setNextButtonEnabled(true);
                    }}
                />고기/해물
            </label>
        </>

    )
}

export default SecondStep