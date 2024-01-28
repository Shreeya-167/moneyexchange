Template.register.events({
    'submit form': function (event) {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      const role = event.target.role.value;
  
      // Validate email, password, and role
  
      // Create user
      const userId = Accounts.createUser({ email, password });
  
      // Set user roles
      Users.update(userId, { $set: { roles: [role] } });
    },
  });
  
