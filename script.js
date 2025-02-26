let price = 1.87;
let cid = [
  ['PENNIES', 1.01],
  ['NICKELS', 2.05],
  ['DIMES', 3.1],
  ['QUARTERS', 4.25],
  ['ONES', 90],
  ['FIVES', 55],
  ['TENS', 20],
  ['TWENTIES', 60],
  ['ONE HUNDREDS', 100]
];
let cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const total = document.getElementById("total");
const register = document.getElementById("register");

total.textContent =  `Total: $${price}`;
register.innerHTML = `${cid[0][0]}: $${cid[0][1]}<br>${cid[1][0]}: $${cid[1][1]}<br>${cid[2][0]}: $${cid[2][1]}<br>${cid[3][0]}: $${cid[3][1]}<br>${cid[4][0]}: $${cid[4][1]}<br>${cid[5][0]}: $${cid[5][1]}<br>${cid[6][0]}: $${cid[6][1]}<br>${cid[7][0]}: $${cid[7][1]}<br>${cid[8][0]}: $${cid[8][1]}`




  const cidFunction = (i, j) => {
    for (let i = 0; i < cid.length; i++) {
        for (let j = 0; j < cid[i].length; j++) {  
        }
      }
      return cid[i][j];
  };

  const mainFunction = () => {
    if (cash == price) {
        changeDue.textContent = "No change due - customer paid with exact cash"
    } 
  };

purchaseBtn.addEventListener("click", mainFunction);



  //console.log(cid[i][j]);
  console.log(cidFunction(3, 1));