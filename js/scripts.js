//business logic
function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.addToTotal = function(amountToAdd) {
  return this.balance = (this.balance + amountToAdd);
}

BankAccount.prototype.subtractToTotal = function(amountToSubtract) {
  return this.balance = (this.balance - amountToSubtract);
}

// user interface logic:

$(document).ready(function() {
    $("form#form-create").submit(function(event) {
    event.preventDefault();
    var userName = $("input#name").val();
    var userInitialDeposit = parseInt($("input#initialDeposit").val());
    var myAccount = new BankAccount(userName, userInitialDeposit);
    $(".currentBalance").append("<h3> $" + userInitialDeposit + "</h3>");
    $("form#form-update").submit(function(event) {
      event.preventDefault();
      var depositAmount = parseInt($("input#depositAmount").val());
      var withdrawalAmount = parseInt($("input#withdrawalAmount").val());
      if (depositAmount) {
        $(".currentBalance").empty();
        var newTotal = myAccount.addToTotal(depositAmount);
        $(".currentBalance").append("<h3> $" + newTotal + "</h3>");
      } else {
        $(".currentBalance").empty();
        var newTotal = myAccount.subtractToTotal(withdrawalAmount);
        $(".currentBalance").append("<h3> $" + newTotal + "</h3>");
      }
    });
  });

  // $
  //   event.preventDefault();
  //   var depositAmount = $("input#depositAmount").val();
  //   var withdrawalAmount = $("input#withdrawalAmount").val();
  //   var myAccount2 = new BankAccount(userName, userInitialDeposit);

  });
