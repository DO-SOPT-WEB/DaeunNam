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
    return (
        <>
            <h2>Step 1: 어떤 요리가 좋아?</h2>
            <label className={options.cuisine === "일식" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.cuisine === "일식"}
                    onChange={() => {
                        NameOfCuisine("일식", options, setOptions);
                        setIsActiveButton(true);
                    }}
                />일식
            </label>
            <label className={options.cuisine === "중식" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.cuisine === "중식"}
                    onChange={() => {
                        NameOfCuisine("중식", options, setOptions);
                        setIsActiveButton(true);
                    }}
                />중식
            </label>
            <label className={options.cuisine === "한식" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.cuisine === "한식"}
                    onChange={() => {
                        NameOfCuisine("한식", options, setOptions);
                        setIsActiveButton(true);
                    }}
                />한식
            </label>
        </>
    );
}

export default FirstStep;
