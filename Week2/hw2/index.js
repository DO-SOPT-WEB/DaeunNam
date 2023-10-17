document.addEventListener("DOMContentLoaded", function () {
    const INIT_BALANCE = 0;
    let balance = INIT_BALANCE;
    const HISTORY_LIST = [
      { category: "식비", content: "버거킹 문정역점", amount: -10800 },
      { category: "취미", content: "포토그레이강남2호점", amount: -5000 },
      { category: "월급", content: "이번달 월급", amount: 300000 },
      { category: "식비", content: "강남역 깍뚝에서 삼쏘", amount: -30000 }
    ];

    function updateBalanceAndHistory() {
      let totalIncome = 0;
      let totalCost = 0;
    
      const listScroll = document.querySelector(".scrollArea");
      listScroll.innerHTML = ""; 
      
      
      for (const history of HISTORY_LIST) {
        if (history.amount > 0) {
          totalIncome += history.amount;
          priceClass = "income_price"
        } else {
          totalCost -= history.amount;
          priceClass = "cost_price"
        }
    
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
        listScroll.appendChild(listView);
      }
    
      const totalElement = document.querySelector(".total");
      const incomeElement = document.querySelector(".income");
      const costElement = document.querySelector(".cost");
    
      balance = INIT_BALANCE + totalIncome - totalCost;
      totalElement.textContent = balance;
      incomeElement.textContent = totalIncome;
      costElement.textContent = totalCost;
    }

    updateBalanceAndHistory();
  });
  