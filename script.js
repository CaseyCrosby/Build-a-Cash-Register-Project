let price = 1.87;
let cid = [
  ['PENNIES', 1.01,],
  ['NICKELS', 2.05],
  ['DIMES', 3.1],
  ['QUARTERS', 4.25],
  ['ONES', 90],
  ['FIVES', 55],
  ['TENS', 20],
  ['TWENTIES', 60],
  ['ONE HUNDREDS', 100]
];
let totalCid = cid.reduce((acc, arr) => acc += arr[1], 0);
totalCid = parseFloat(totalCid.toFixed(2));
console.log(totalCid);
let cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const total = document.getElementById("total");
const register = document.getElementById("register");

total.textContent =  `Total: $${price}`;
register.innerHTML = `${cid[0][0]}: $${cid[0][1]}<br>${cid[1][0]}: $${cid[1][1]}<br>${cid[2][0]}: $${cid[2][1]}<br>${cid[3][0]}: $${cid[3][1]}<br>${cid[4][0]}: $${cid[4][1]}<br>${cid[5][0]}: $${cid[5][1]}<br>${cid[6][0]}: $${cid[6][1]}<br>${cid[7][0]}: $${cid[7][1]}<br>${cid[8][0]}: $${cid[8][1]}`;




  

  let changeDueNumber = cash.value - price

    const currencyUnits = {
      "PENNIES": 0.01,
      "NICKELS": 0.05,
      "DIMES": 0.1,
      "QUARTERS": 0.25,
      "ONES": 1,
      "FIVES": 5,
      "TENS": 10,
      "TWENTIES": 20,
      "ONE HUNDREDS": 100
    };

    let change = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      const currName = cid[i][0];
      const currTotal = cid[i][1];
      const currValue = currencyUnits[currName];
      let currAmount = 0;

      while (changeDueNumber >= currValue && currTotal > currAmount) {
        changeDueNumber -= currValue;
        changeDueNumber = parseFloat(changeDueNumber.toFixed(2)); // Prevent floating point errors
        currAmount += currValue;
      }

      if (currAmount > 0) {
        change.push([currName, currAmount]);
      }
      
    };

    const changeFormat = () => {
      change.forEach((element) => {
        changeDue.innerHTML += `${element[0]}: $${element[1]}<br>`;
      })
    
    };
  
  const mainFunction = () => {
    if (cash.value == price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        cash.value = '';
        return;
    } else if (cash.value < price) {
      changeDue.textContent = "Customer does not have enough money to purchase the item";
      cash.value = '';
        return;
    } else if (price < cash.value && totalCid < changeDueNumber) {
      changeDue.textContent = "Status: INSUFFICIENT_FUNDS"
    } else  {
       changeDue.innerHTML = `Status: OPEN<br>`; changeFormat();
       cash.value = '';
        return;
    }
  };

purchaseBtn.addEventListener("click", mainFunction);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    mainFunction();
  }
});

  //console.log(cid[i][j]);
  console.log(changeDueNumber);
  console.log(change);