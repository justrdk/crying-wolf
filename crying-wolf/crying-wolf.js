Weeks = new Mongo.Collection('weeks');

if (Meteor.isClient) {

    Template.diseaseTable.helpers({
        weeks: function () {
            return Weeks.find({}, {
                limit: 1
            });
        }
    });
}
