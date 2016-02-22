if (Meteor.isClient) {

	Meteor.subscribe('weeks');

	Template.main.created = function() {
		this.selectedWeek = new ReactiveVar({});
	};

	Template.main.helpers({
		weekOptions: () => {
			return Weeks.find();
		},
		selectedWeek: () => {
			return Template.instance().selectedWeek.get();
		}
	});

	Template.main.events({
		'change #week-list': (ev, template) => {
			var selectedWeek = parseInt($(ev.target).val(), 10);
			let week = Weeks.findOne({
				week: selectedWeek
			});

			if (week) {
				template.selectedWeek.set(week);
			} else {
				template.selectedWeek.set({});
			}
		}
	});

	Template.main.rendered = () => {
		$('#datepicker').datepicker();
	};
}
