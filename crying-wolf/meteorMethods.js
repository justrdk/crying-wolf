Meteor.methods({
    updateWeek: (week) => {
        Weeks.update(week._id, week);
    }
});
