/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Hashir Sheikh
      Date:10/10/2024

      Filename: project03-01.js
*/

let menuItem = document.getElementsByClassName("menuItem");
for(let i = 0; i < menuItem.length; i++){
      menuItem[i].addEventListener("click",calTotal)
}

function calTotal(){
      let orderTotal = 0
      for(let i = 0;i<menuItem.length;i++){
            if(menuItem[i].checked){
                  orderTotal += Number(menuItem[i].nodeValue)
            }
      document.getElementById("billTotal").innerhtml = formatCurrency(orderTotal)

      }
}

function formatCurrency(value){
return "$" + value.toFixed(2);
}
