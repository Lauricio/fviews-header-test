Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('route1');
});


Router.route('/route1', function () {
  Session.set("activeHeader","route1header");
  this.render('route1');
});

Router.route('/route2', function () {
  Session.set("activeHeader","route2header");
  this.render('route2');
});

if (Meteor.isClient) {
  Session.setDefault("activeHeader","route1header");
  Template.layout.helpers({
    activeHeader : function () {
     return Session.get("activeHeader");
    }
  });
};

