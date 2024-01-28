Template.adminDashboard.helpers({
    allTransactions: function () {
      return {
        loans: Loans.find(),
        payments: Payments.find(),
      };
    },
  });
  