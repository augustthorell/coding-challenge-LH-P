function countdown(dirtynumber) {
    let remainingTime;
    let test = dirtynumber.substr(5);
    let monthsLeft = test.substr(0, 2);
    let daysLeft = test.substr(3);

    let countdownDay, today, dday, diff, days;
    countdownDay = [parseInt(daysLeft), parseInt(monthsLeft)];
    today = new Date();
    dday = new Date(today.getFullYear(), countdownDay[1] - 1, countdownDay[0]);
    if (today.getTime() > dday.getTime()) {
        dday.setFullYear(dday.getFullYear() + 1);
    }
    diff = dday.getTime() - today.getTime();
    days = Math.floor(diff / (1000 * 60 * 60 * 24) + 1);

    if (days < 0) {
        remainingTime = 'Date has passed';
    } else if (days === 365) {
        remainingTime = 'Today';
    } else if (days === 1) {
        remainingTime = 'Tomorrow';
    } else if ((days > 1) && (days < 7)) {
        remainingTime = 'In ' + days + ' days';
    } else if ((days >= 7) && (days < 14)) {
        remainingTime = 'In 1 week';
    } else {
        remainingTime = 'In ' + Math.floor(days / 7) + ' weeks';
    }
    return remainingTime;
}
