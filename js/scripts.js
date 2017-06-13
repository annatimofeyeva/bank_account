//business logic






// user interface logic:

$(document).ready(function() {
  $("form#form-create").submit(function(event) {
    event.preventDefault();
    var userName = $("input#name").val();
    var userInitialDeposit = $("input#initialDeposit").val();
  }

  $("form#form-update").submit(function(event) {
    event.preventDefault();
    var depositAmount = $("input#depositAmount").val();
    var withdrawalAmount = $("input#withdrawalAmount").val();
  }
};
