if (Meteor.isClient) {

	Meteor.subscribe('weeks');

	Template.main.created = function() {
		this.selectedWeek = new ReactiveVar({});
		this.pastWeeks = new ReactiveVar([]);
	};

	Template.main.helpers({
		weekOptions: () => {
			const weeks = Weeks.find().map((val) => {
				return val.week;
			});

			return weeks;
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
			const pastWeeks = Weeks.find({
				week: {
					$lt: selectedWeek
				}
			}).map((val) => {
				return val.diseases;
			});

			if (week) {
				template.selectedWeek.set(week);
				template.pastWeeks.set(pastWeeks);
			} else {
				template.selectedWeek.set({});
				template.pastWeeks.set([]);
			}
		},
		'update-week .week-table': (ev, template, data, disease) => {
			const pastWeeks = template.pastWeeks.get();
			let diseaseUpdate = {};
			let diseasesGroup = [];
			let tempDisease = {};

			for (let i = 0; i < pastWeeks.length; i++) {
				diseasesGroup = diseasesGroup.concat(pastWeeks[i].filter((val) => {
					return val.disease === disease;
				}));
			}
			if (diseasesGroup.length > 0) {
				let collectedCurrentYear = 0;
				let collectedLastYear = 0;
				for (let j = 0; j < diseasesGroup.length; j++) {
					collectedCurrentYear += diseasesGroup[j].currentYearAmount;
					collectedLastYear += diseasesGroup[j].lastYearAmount;
				}
				diseaseUpdate = {
					disease: disease,
					collectedCurrentYear: collectedCurrentYear,
					collectedLastYear: collectedLastYear
				};
			}

			tempDisease = data.diseases.filter((val) => {
				return val.disease === disease;
			})[0];

			tempDisease.collectedCurrentYear = diseaseUpdate.collectedCurrentYear ? diseaseUpdate.collectedCurrentYear + tempDisease.currentYearAmount : tempDisease.currentYearAmount;
			tempDisease.collectedLastYear = diseaseUpdate.collectedLastYear ? diseaseUpdate.collectedLastYear + tempDisease.lastYearAmount : tempDisease.lastYearAmount;
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

			if (value === '') {
				return;
			}
			template.data.currentYearAmount = parseInt(value, 10);
			$('.week-table').trigger('update-week', [Template.parentData(1), template.data.disease]);
		},
		'input .last-year-amount': (ev, template) => {
			let value = $(ev.currentTarget).val().trim();

			if (value === '') {
				return;
			}
			template.data.lastYearAmount = parseInt(value, 10);
			$('.week-table').trigger('update-week', [Template.parentData(1), template.data.disease]);
		}
	});
}
