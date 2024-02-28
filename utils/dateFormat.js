const addDateSuffix = (date) => {
    const dateStr = date.toString();
    const lastChar = dateStr.charAt(dateStr.length - 1);
    const suffix = (lastChar === '1' && dateStr !== '11') ? 'st' :
        (lastChar === '2' && dateStr !== '12') ? 'nd' :
            (lastChar === '3' && dateStr !== '13') ? 'rd' : 'th';

    return `${dateStr}${suffix}`;
};

module.exports = (timestamp, { monthLength = 'short', dateSuffix = true } = {}) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dateObj = new Date(timestamp);

    const formattedMonth = months[dateObj.getMonth()];

    const dayOfMonth = dateSuffix ? addDateSuffix(dateObj.getDate()) : dateObj.getDate();

    const year = dateObj.getFullYear();

    let hour = (dateObj.getHours() % 12) || 12;
    const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();
    const timeofDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

    return `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${timeofDay}`;
};