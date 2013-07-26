$(document).ready(function() {

  var checkingsBalance = 10;
  var savingsBalance = 10;
  var savingsElement = $('#savingsBalance');
  var checkingsElement = $('#checkingsBalance');

  function withdrawFromCheckings(event) {
    event.preventDefault();
    var amount = parseInt($('#checkingsAmount').val());
    if (amount > (checkingsBalance + savingsBalance)){
      alert("You do not have sufficient funds to withdraw $" + amount +". \nNo transaction will be made.")
    } else {
      if (amount > checkingsBalance){
        alert("You do not have sufficient funds to withdraw $" + amount +". \nThe withdrawal will come from  your savings account.")
        savingsBalance -= (amount - checkingsBalance);
        updateSavingsBalance();
        checkingsBalance -= checkingsBalance;
        updateCheckingsBalance();
      } else {
        checkingsBalance -= amount;
        updateCheckingsBalance();
        }
      }
  }

  function depositIntoCheckings(event) {
    event.preventDefault();
    var amount = parseInt($('#checkingsAmount').val());
    checkingsBalance += amount;
    updateCheckingsBalance();
  }
  function withdrawFromSavings(event) {
    event.preventDefault();
    var amount = parseInt($('#savingsAmount').val());
    if(amount<= savingsBalance){
      savingsBalance -= amount;
      updateSavingsBalance();
    } else if (amount <= checkingsBalance) {
      alert("You do not have sufficient funds to withdraw $" + amount +". \nThe withdrawal will come from  your checkings account.")
      checkingsBalance -= amount;
      updateCheckingsBalance();
    } else {
      alert("You do not have sufficient funds to withdraw $" + amount +".")
    }
  }
  function depositIntoSavings(event) {
    event.preventDefault();
    var amount = parseInt($('#savingsAmount').val());
    savingsBalance += amount;
    updateSavingsBalance();
  }
  function updateCheckingsBalance() {
    checkingsElement.text('$' + checkingsBalance);
    if (checkingsBalance == 0) {
    document.getElementById('checkingsAccount').style.backgroundColor = '#FF0000';
    }
  }
  function updateSavingsBalance() {
    savingsElement.text('$' + savingsBalance);
    if (savingsBalance == 0) {
    document.getElementById('savingsAccount').style.backgroundColor = '#FF0000';
    }
  }

  $('#checkingsWithdraw').on('click', withdrawFromCheckings);
  $('#savingsWithdraw').on('click', withdrawFromSavings);
  $('#checkingsDeposit').on('click', depositIntoCheckings);
  $('#savingsDeposit').on('click', depositIntoSavings);

  updateCheckingsBalance();
  updateSavingsBalance();
});
