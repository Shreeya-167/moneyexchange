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
   
  });
  
  PaymentsSchema = new SimpleSchema({
    loanId: {
      type: String,
    },
    amount: {
      type: Number,
    },
    
  });
  
  Users.attachSchema(UsersSchema);
  Loans.attachSchema(LoansSchema);
  Payments.attachSchema(PaymentsSchema);
  
