const INIT_BALANCE = 0;
let balance = INIT_BALANCE;
const HISTORY_LIST = [
  { category: "식비", content: "버거킹 문정역점", amount: -10800 },
  { category: "취미", content: "포토그레이강남2호점", amount: -5000 },
  { category: "월급", content: "이번달 월급", amount: 300000 },
  { category: "식비", content: "강남역 깍뚝에서 삼쏘", amount: -30000 }
];

document.getElementById("income").addEventListener("change", updateBalanceAndHistory);
document.getElementById("cost").addEventListener("change", updateBalanceAndHistory);
updateBalanceAndHistory();

function updateBalanceAndHistory () {
  const showIncome = document.getElementById("income").checked;
  const showCost = document.getElementById("cost").checked;

  const filteredHistories = filterHistories(showIncome, showCost);

  let totalIncome = 0;
  let totalCost = 0;
  const listScroll = document.querySelector(".scrollArea");
  listScroll.innerHTML = "";

  const totalElement = document.querySelector(".total");
  const incomeElement = document.querySelector(".income");
  const costElement = document.querySelector(".cost");

  for (const history of filteredHistories) {
    if (history.amount > 0) {
      totalIncome += history.amount;
      priceClass = "income_price";
    } else {
      totalCost -= history.amount;
      priceClass = "cost_price";
    }
    listScroll.appendChild(createListView(history, priceClass));
  }

  balance = INIT_BALANCE + totalIncome - totalCost;
  totalElement.textContent = balance;
  incomeElement.textContent = totalIncome;
  costElement.textContent = totalCost;
}

function createListView (history, priceClass) {
  const listView = document.createElement("article");
  listView.className = "listView";
  
  const ulElement = document.createElement("ul");
  ulElement.innerHTML = `
    <li class="category">${history.category}</li>
    <li class="content">${history.content}</li>
    <li class="${priceClass}">${history.amount}</li>
    <li><input type="button" class="delete_btn"></li>
  `;
  
  listView.appendChild(ulElement);
  return listView;
}

function filterHistories (showIncome, showCost) {
  const filteredHistories = [];

  for (const history of HISTORY_LIST) {
    if ((showIncome && history.amount > 0) || (showCost && history.amount < 0)) {
      filteredHistories.push(history);
    }
  }

  return filteredHistories;
}