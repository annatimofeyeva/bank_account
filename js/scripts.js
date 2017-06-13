//business logic
function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}



// user interface logic:

$(document).ready(function() {
    $("form#form-create").submit(function(event) {
    event.preventDefault();
    var userName = $("input#name").val();
    var userInitialDeposit = $("input#initialDeposit").val();
    var myAccount = new BankAccount(userName, userInitialDeposit);
    console.log(myAccount);
  });

  $("form#form-update").click(function(event) {
    event.preventDefault();
    var depositAmount = $("input#depositAmount").val();
    var withdrawalAmount = $("input#withdrawalAmount").val();
    
  });

});
