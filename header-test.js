Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('route1');
});


Router.route('/route1', function () {
  this.render('route1');
});

Router.route('/route2', function () {
  this.render('route2');
});

