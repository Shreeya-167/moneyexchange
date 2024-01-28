Template.lenderDashboard.events({
    'click .confirm-payment': function (event) {
      const loanId = event.target.dataset.loanId;
      const amount = parseFloat(event.target.dataset.amount);
  
      Payments.insert({
        loanId: loanId,
        amount: amount,
      });
  
      Loans.update(loanId, { $set: { status: 'paid' } });
    },
  });
  
  Template.lenderDashboard.helpers({
    payments: function () {
      return Payments.find();
    },
  });
  
