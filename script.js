/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var earnings, expenses, sum;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings = [];
expenses = [];
sum = [];


document.getElementById('add').addEventListener('click', (event) => {
  sum.unshift(getNumberOrString(document.getElementById('number').value));
  if (sum[0] > 0) {
    earnings.push(getNumberOrString(document.getElementById('number').value));
    let element_linkEar = document.getElementById('linkEar');
    let new_li = document.createElement('li');
    new_li.innerText = getNumberOrString(document.getElementById('number').value);

    element_linkEar.appendChild(new_li);
    let element_showEarnings = document.getElementById('showEarnings');
    element_showEarnings.innerText = earnings.reduce((a,b) => a+b, 0);
  } else if (sum[0] <= 0) {
    expenses.unshift(getNumberOrString(document.getElementById('number').value));
    let element_linkExp = document.getElementById('linkExp');
    let new_li2 = document.createElement('li');
    new_li2.innerText = getNumberOrString(document.getElementById('number').value);

    element_linkExp.appendChild(new_li2);
    let element_showExpenses = document.getElementById('showExpenses');
    element_showExpenses.innerText = expenses.reduce((a,b) => a+b, 0);
  }

});

document.getElementById('allTotal').addEventListener('click', (event) => {
  let element_total = document.getElementById('total');
  element_total.innerText = sum.reduce((a,b) => a+b, 0);

});
