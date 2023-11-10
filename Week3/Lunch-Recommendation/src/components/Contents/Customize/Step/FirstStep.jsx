import React from "react";
import {
} from '../../style';

function FirstStep({ options, setOptions, setNextButtonEnabled }) {
    return (
        <>
            <h2>Step 1: 어떤 요리가 좋아?</h2>
            <label className={options.cuisine === "일식" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.cuisine === "일식"}
                    onChange={() => {
                        setOptions({ ...options, cuisine: "일식" });
                        setNextButtonEnabled(true);
                    }}
                />일식
            </label>
            <label className={options.cuisine === "중식" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.cuisine === "중식"}
                    onChange={() => {
                        setOptions({ ...options, cuisine: "중식" });
                        setNextButtonEnabled(true);
                    }}
                />중식
            </label>
            <label className={options.cuisine === "한식" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.cuisine === "한식"}
                    onChange={() => {
                        setOptions({ ...options, cuisine: "한식" });
                        setNextButtonEnabled(true);
                    }}
                />한식
            </label>
        </>
    );
}

export default FirstStep;
