if (Meteor.isClient) {

	Meteor.subscribe('weeks');

	Template.main.created = function () {
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
			let selectedWeek = parseInt($(ev.target).val(), 10);
			const week = Weeks.findOne({
				week: selectedWeek
			});

			if (week) {
				template.selectedWeek.set(week);
			} else {
				template.selectedWeek.set({});
			}
		},
		'update-week .week-table': (ev, template, data) => {
			template.selectedWeek.set(data);
			Meteor.call('updateWeek', data);
		}
	});

	Template.main.rendered = () => {
		$('#datepicker').datepicker();
	};

	Template.diseaseTableRows.events({
		'input .current-year-amount': (ev, template) => {
			let value = $(ev.currentTarget).val().trim();

			if(value === '') {
				return;
			}
			template.data.currentYearAmount = parseInt(value, 10);
			$('.week-table').trigger('update-week', Template.parentData(1));
		},
		'input .last-year-amount': (ev, template) => {
			let value = $(ev.currentTarget).val().trim();

			if(value === '') {
				return;
			}
			template.data.lastYearAmount = parseInt(value, 10);
			$('.week-table').trigger('update-week', Template.parentData(1));
		}
	});
}
