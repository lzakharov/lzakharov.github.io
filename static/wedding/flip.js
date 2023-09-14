function handleTickInit(tick) {
    var locale = {
        YEAR_PLURAL: 'Лет',
        YEAR_SINGULAR: 'Год',
        MONTH_PLURAL: 'Месяцев',
        MONTH_SINGULAR: 'Месяц',
        WEEK_PLURAL: 'Недель',
        WEEK_SINGULAR: 'Неделя',
        DAY_PLURAL: 'Дней',
        DAY_SINGULAR: 'День',
        HOUR_PLURAL: 'Часов',
        HOUR_SINGULAR: 'Час',
        MINUTE_PLURAL: 'Минут',
        MINUTE_SINGULAR: 'Минута',
        SECOND_PLURAL: 'Секунд',
        SECOND_SINGULAR: 'Секунда',
        MILLISECOND_PLURAL: 'Миллисекунд',
        MILLISECOND_SINGULAR: 'Миллисекунда'
    };

    for (var key in locale) {
        if (!locale.hasOwnProperty(key)) { continue; }
        tick.setConstant(key, locale[key]);
    }

    // format of due date is ISO8601
    // https://en.wikipedia.org/wiki/ISO_8601

    // '2018-01-31T12:00:00'        to count down to the 31st of January 2018 at 12 o'clock
    // '2019'                       to count down to 2019
    // '2018-01-15T10:00:00+01:00'  to count down to the 15th of January 2018 at 10 o'clock in timezone GMT+1

    // create the countdown counter
    var counter = Tick.count.down('2023-12-01T18:00:00+03:00');

    counter.onupdate = function (value) {
        tick.value = value;
    };

    counter.onended = function () {
        // redirect, uncomment the next line
        // window.location = 'my-location.html'

        // hide counter, uncomment the next line
        // tick.root.style.display = 'none';

        // show message, uncomment the next line
        // document.querySelector('.tick-onended-message').style.display = '';
    };
}