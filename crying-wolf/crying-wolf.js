Weeks = new Mongo.Collection("weeks");

if (Meteor.isClient) {
  // counter starts at 0

  Template.diseaseTable.helpers({
    weeks: function () {
      return Weeks.find({}, {
          limit: 1
      });
    }
  });
}
