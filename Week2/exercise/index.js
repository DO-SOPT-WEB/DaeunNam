// 방법 1
const mango = document.createElement("li");
const mangoText = document.createTextNode("mango");

mango.appendChild(mangoText); // <li>mango</li>

const fruitList = document.querySelector("ul"); // ul 요소 가져옴
fruitList.appendChild(mango); // ul 요소에 붙여줌  


// // 방법 2
// const mango = document.createElement("li");
// mango.innerText = "mango";

// const fruitList = document.querySelector("ul"); // ul 요소 가져옴
// fruitList.appendChild(mango); // ul 요소에 붙여줌  

// red class 요소 없애기
const redFruit = document.querySelectorAll(".red");
redFruit.forEach((fruit) => {
    fruit.remove();
})

// 3번째 과일만 파란색으로 
const thirdFruit = document.querySelector("li:nth-child(3)");
thirdFruit.classList.add("blue"); // classlist 받아와서 .blue 적용

// 버튼을 누르면 리스트 개수가 뜸
const lengthButton = document.querySelector("button.count");
function showLength() {
    const allList = document.querySelectorAll("li");
    alert(`과일 개수는 ${allList.length}입니다.`);
} 
lengthButton.addEventListener("click", showLength);
