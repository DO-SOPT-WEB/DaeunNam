const INIT_BALANCE = 0;
let balance = INIT_BALANCE;
const HISTORY_LIST = [
  { category: "식비", content: "버거킹 문정역점", amount: -10800 },
  { category: "취미", content: "포토그레이강남2호점", amount: -5000 },
  { category: "월급", content: "이번달 월급", amount: 300000 },
  { category: "식비", content: "강남역 깍뚝에서 삼쏘", amount: -30000 }
];
let totalIncome = 0;
let totalCost = 0; 

document.getElementById("income").addEventListener("change", updateHistory);
document.getElementById("cost").addEventListener("change", updateHistory);
updateHistory();

function updateHistory() {
  const showIncome = document.getElementById("income").checked;
  const showCost = document.getElementById("cost").checked;
  const filteredHistories = filterHistories(showIncome, showCost);

  let listScroll = document.querySelector(".scrollArea");
  listScroll.innerHTML = "";

  for (const history of filteredHistories) {
    let priceClass = "income_price";
    if (history.amount > 0) {
      priceClass = "income_price";
    } else {
      priceClass = "cost_price";
    }
    const listView = createListView(history, priceClass);

    const deleteBtn = listView.querySelector(".delete_btn");
    deleteBtn.addEventListener("click", function() {
      deleteHistories(listView, history);
    });

    listScroll.appendChild(listView);
  }
  updateBalance();
}

function createListView(history, priceClass) {
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

function filterHistories(showIncome, showCost) {
  const filteredHistories = [];

  for (const history of HISTORY_LIST) {
    if ((showIncome && history.amount > 0) || (showCost && history.amount < 0)) {
      filteredHistories.push(history);
    }
  }
  return filteredHistories;
}

function deleteHistories(listView, history) {
  const listScroll = document.querySelector(".scrollArea");
  const historyIndex = HISTORY_LIST.indexOf(history);
  listScroll.removeChild(listView);

  if (historyIndex !== -1) {
    HISTORY_LIST.splice(historyIndex, 1);
  }  
  updateBalance();
  updateHistory();
}

function updateBalance() {
  const totalElement = document.querySelector(".total");
  const incomeElement = document.querySelector(".income");
  const costElement = document.querySelector(".cost");

  totalIncome = 0;
  totalCost = 0;

  for (const history of HISTORY_LIST) {
    if (history.amount > 0) {
      totalIncome += history.amount;
    } else {
      totalCost -= history.amount;
    }
  }

  balance = INIT_BALANCE + totalIncome - totalCost;
  totalElement.textContent = balance;
  incomeElement.textContent = totalIncome;
  costElement.textContent = totalCost;
}

