if (Meteor.isServer) {
    Meteor.startup(function () {
        const diseases = [{
            disease: 'Diarreas < 1',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Diarreas 1-4',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Diarreas 5-14',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Diarreas 15+',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Varicela',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Hepatitis',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Mordeduras',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Neumonia',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Conjuntivits',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Mortalidad',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Desinteria < 15',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Desinteria > 15',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Malaria',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Dengue',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Chikungunya',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }, {
            disease: 'Zika',
            currentYearAmount: 0,
            lastYearAmount: 0,
            collectedCurrentYear: 0,
            collectedLastYear: 0
        }];

        if (Weeks.find().count() === 0) {
            for (let i = 0; i < 50; i++) {
                Weeks.insert({
                    week: i + 1,
                    diseases: diseases
                });
            }
        }
    });

    Meteor.publish('weeks', () => {
        return Weeks.find();
    });
}
