import React from "react";
import {
} from '../../style';

function NameOfCuisine(selectedOption, options, setOptions) {
    setOptions((prevOptions) => ({
        ...prevOptions,
        cuisine: selectedOption,
    }));
}

function FirstStep({ options, setOptions, setIsActiveButton }) {
    const cuisines = ["일식", "중식", "한식"];

    return (
        <>
            <h2>Step 1: 어떤 요리가 좋아?</h2>
            {cuisines.map((cuisine) => (
                <label key={cuisine} className={options.cuisine === cuisine ? "selected" : ""}>
                    <input type="checkbox" checked={options.cuisine === cuisine}
                        onChange={() => {
                            setOptions({ ...options, cuisine });
                            setNextButtonEnabled(true);
                        }}
                    />
                    {cuisine}
                </label>
            ))}
        </>
    );
}

export default FirstStep;
