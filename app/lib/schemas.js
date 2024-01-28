// lib/schemas.js
UsersSchema = new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    },
    roles: {
      type: [String],
      allowedValues: ['admin', 'borrower', 'lender']
    },
    // Add other user fields as needed
  });
  
  LoansSchema = new SimpleSchema({
    userId: {
      type: String,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
      allowedValues: ['pending', 'approved', 'rejected', 'paid']
    },
    // Add other loan fields as needed
  });
  
  PaymentsSchema = new SimpleSchema({
    loanId: {
      type: String,
    },
    amount: {
      type: Number,
    },
    // Add other payment fields as needed
  });
  
  Users.attachSchema(UsersSchema);
  Loans.attachSchema(LoansSchema);
  Payments.attachSchema(PaymentsSchema);
  