Template.borrowerDashboard.events({
    'submit form': function (event) {
      event.preventDefault();
      const amount = parseFloat(event.target.amount.value);
  
      // Validate amount
  
      // Create loan request
      Loans.insert({
        userId: Meteor.userId(),
        amount: amount,
        status: 'pending',
      });
    },
  });
  
  Template.borrowerDashboard.helpers({
    loans: function () {
      return Loans.find({ userId: Meteor.userId() });
    },
  });
  