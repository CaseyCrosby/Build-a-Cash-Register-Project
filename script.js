let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
let cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const total = document.getElementById("total");
const register = document.getElementById("register");

total.textContent =  `Total: $${price}`;
register




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