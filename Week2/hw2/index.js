const INIT_BALANCE = 0;
let balance = INIT_BALANCE;
const HISTORY_LIST = [
  { category: "식비", content: "버거킹 문정역점", amount: -10000 },
  { category: "취미", content: "포토그레이강남2호점", amount: -5000 },
  { category: "월급", content: "이번달 월급", amount: 300000 },
  { category: "식비", content: "강남역 깍뚝에서 삼쏘", amount: -30000 }
];
const CATEGORY_LIST = [
  { name: "식비", financeType: "spending" },
  { name: "취미", financeType: "spending" },
  { name: "영화", financeType: "spending" },
  { name: "월급", financeType: "income" },
  { name: "용돈", financeType: "income" }
];
const listScroll = document.querySelector(".scrollArea");
let totalIncome = 0;
let totalSpending = 0;
let priceClass = "income_price";
let financeType = "income";

document.getElementById("income").addEventListener("change", updateHistory);
document.getElementById("spending").addEventListener("change", updateHistory);
document.querySelector('.save_btn').addEventListener('click', addHistoryToList);
updateHistory();
checkRadioFinanceType();
openModal();
closeModal();

function updateHistory () {
  const incomeChecked = document.getElementById("income").checked;
  const spendingChecked = document.getElementById("spending").checked;
  const filteredHistories = filterHistories(incomeChecked, spendingChecked);
  listScroll.innerHTML = "";

  filteredHistories.map(history => {
    priceClass = history.amount > 0 ? "income_price" : "spending_price";
    const listView = createListView(history, priceClass);
    deleteBtnHandler(listView, history);
    listScroll.appendChild(listView);
  });
  updateBalance();
  filterCategoryList();
}

function filterHistories (incomeChecked, spendingChecked) {
  return HISTORY_LIST.filter(history => (history.amount > 0 && incomeChecked) || (history.amount < 0 && spendingChecked));
}

function deleteBtnHandler(listView, history) {
  const deleteBtn = listView.querySelector(".delete_btn");
  deleteBtn.addEventListener("click", () => {
    deleteHistory(listView, history);
  });
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

function deleteHistory (listView, history) {
  const listScroll = document.querySelector(".scrollArea");
  const historyIndex = HISTORY_LIST.indexOf(history);
  listScroll.removeChild(listView);

  if (historyIndex !== -1) {
    HISTORY_LIST.splice(historyIndex, 1);
  }  
  updateBalance();
  updateHistory();
}

function updateBalance () {
  totalIncome = 0;
  totalSpending = 0;

  calcultatedHistoryAmounts = HISTORY_LIST.map((history) => {
    if (history.amount > 0) {
      totalIncome += history.amount;
    } else {
      totalSpending -= history.amount;
    }
  });
  calculateBalance();
}

function calculateBalance () {
  const totalElement = document.querySelector(".total");
  const incomeElement = document.querySelector(".income");
  const spendingElement = document.querySelector(".spending");

  balance = INIT_BALANCE + totalIncome - totalSpending;
  totalElement.textContent = balance;
  incomeElement.textContent = totalIncome;
  spendingElement.textContent = totalSpending;
}

function checkRadioFinanceType () {
  document.querySelectorAll('input[name="finance"]').forEach(function(radio) {
    radio.addEventListener("change", function() {
      if (document.getElementById("radio-income").checked) {
        financeType = "income";
      } else if (document.getElementById("radio-spending").checked) {
        financeType = "spending";
      }
      filterCategoryList();
    });
  });
};

function filterCategoryList() {
  const categoryList = document.querySelector(".category-list");
  categoryList.innerHTML = "";

  const filterCategories = new Set(
    CATEGORY_LIST
      .filter(category => {
        if (financeType === 'spending') 
          return category.financeType === 'spending';
        else
          return category.financeType === 'income';
      })
      .map(category => category.name)
  );

  filterCategories.forEach(category => {
    const option = document.createElement("option");
    option.text = category;
    categoryList.add(option);
  });
}

function showModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("hidden");
}

function openModal() {
  const addButton = document.querySelector(".add_btn");
  addButton.addEventListener("click", showModal);
}

function closeModal () {
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".cancel_btn");
  modal.classList.add("hidden");
  closeButton.addEventListener("click", closeModal);
}

function addHistoryToList() {
  const financeType = document.querySelector('input[name="finance"]:checked').id;
  const category = document.querySelector('.category-list').value;
  const amount = Number(document.querySelector('.textbox[name="amount"]').value);
  const content = document.querySelector('.textbox[name="content"]').value;
  const newHistory = {
    category: category,
    content: content,
    amount: financeType === 'radio-income' ? amount : -amount
  };
  amountShouldbeNumber(amount, newHistory);
}

function amountShouldbeNumber(amount, newHistory) {
  if (isNaN(amount)) {
    alert("올바른 값을 입력하세요. 숫자만 입력 가능합니다.");
  } else if (amount <= 0) {
    alert("가격을 양수로 입력하세요.");
  } else {
    HISTORY_LIST.push(newHistory);
    updateHistory();
    alert("저장되었습니다.");
  }
}