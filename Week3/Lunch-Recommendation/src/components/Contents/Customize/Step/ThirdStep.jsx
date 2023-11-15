import React from 'react'

function NameOfSoup(selectedOption, options, setOptions) {
    setOptions((prevOptions) => ({
        ...prevOptions,
        soup: selectedOption,
    }));
}
function ThirdStep({ options, setOptions, setIsActiveButton }) {
    const soups = ["국물", "국물 없음"];

    return (
        <>
            <h2>Step 3: 국물은?</h2>
            {soups.map((soup) => (
                <label key={soup} className={options.soup === soup ? "selected" : ""}>
                    <input type="checkbox" checked={options.soup === soup}
                        onChange={() => {
                            setOptions({ ...options, soup });
                            setNextButtonEnabled(true);
                        }}
                    />
                    {soup}
                </label>
            ))}

        </>

    )
}

export default ThirdStep