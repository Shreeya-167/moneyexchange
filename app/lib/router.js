Router.configure({
    layoutTemplate: 'layout',
  });
  
  Router.route('/', {
    name: 'home',
    template: 'home',
  });
  
  Router.route('/register', {
    name: 'register',
    template: 'register',
  });
  
  Router.route('/borrower/dashboard', {
    name: 'borrowerDashboard',
    template: 'borrowerDashboard',
  });
  
  Router.route('/lender/dashboard', {
    name: 'lenderDashboard',
    template: 'lenderDashboard',
  });
  
  Router.route('/admin/dashboard', {
    name: 'adminDashboard',
    template: 'adminDashboard',
  });
  