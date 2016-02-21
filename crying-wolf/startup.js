if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
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
            for (let j = 0; j < 50; j++) {
                Weeks.insert({
                    week: j + 1,
                    diseases: diseases
                });
            }
        }
    });
}
