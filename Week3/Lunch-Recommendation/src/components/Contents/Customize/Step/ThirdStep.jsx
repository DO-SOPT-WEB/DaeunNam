import React from 'react'

function ThirdStep({ options, setOptions, setIsActiveButton }) {
    return (
        <>
            <h2>Step 3: 국물은?</h2>
            <label className={options.soup === "국물" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.soup === "국물"}
                    onChange={() => {
                        setOptions({ ...options, soup: "국물" });
                        setIsActiveButton(true);
                    }}
                />국물 좋아
            </label>
            <label className={options.soup === "국물 없음" ? "selected" : ""}>
                <input
                    type="checkbox"
                    checked={options.soup === "국물 없음"}
                    onChange={() => {
                        setOptions({ ...options, soup: "국물 없음" });
                        setIsActiveButton(true);
                    }}
                />없어도 돼
            </label>
        </>

    )
}

export default ThirdStep