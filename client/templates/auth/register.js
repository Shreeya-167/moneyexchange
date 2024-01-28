Template.register.events({
    'submit form': function (event) {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      const role = event.target.role.value;
  
    
      const userId = Accounts.createUser({ email, password });
  
      
      Users.update(userId, { $set: { roles: [role] } });
    },
  });
  
