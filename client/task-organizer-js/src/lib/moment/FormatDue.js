import moment from 'moment';

export const FormatDue = (time) => {
    // input: moment
    // output: (Today/Yesterday/n days ago) at {time.hour}:{time.minute} (pm/am) as a String

    // if input is a string or Date, convert it to a moment object to be used
    if (typeof time === 'string' || time instanceof String || time instanceof Date) { time = moment(time); }

    const today = moment();
    const daysInFuture = time.diff(today, 'days', true);
    const timeUntilTomorrow = moment().startOf('day').add(1, 'day').diff(moment(), 'days', true); // positive number greater than current time unless it is 12 am 
    const timeSinceYesterday = moment().startOf('day').diff(moment(), 'days', true); // negative number less than current time unless it is 12 am
    const nDaysFromNow = daysInFuture < 0 ? Math.ceil((daysInFuture - timeSinceYesterday) - 1) : Math.floor((daysInFuture - timeUntilTomorrow) + 1);

    // Logic to determine the fomatting
    if (nDaysFromNow === 0) {
        return "[Today at] h:mm a";
    } else if (nDaysFromNow === 1) {
        return "[Tomorrow at] h:mm a";
    } else if (nDaysFromNow === -1) {
        return "[Yesterday at] h:mm a";
    } else if (nDaysFromNow > 1) {
        return `[${Math.abs(nDaysFromNow)} days from now at] h:mm a`;
    } else {
        return `[${Math.abs(nDaysFromNow)} days ago at] h:mm a`;
    }
}

export const MakeDue = (dayDueOffset, HourDue, MinuteDue) => {
    // input: due in n days, Hour Due, Minute Due
    // output: moment Object 
    // Example: MakeDue(0, 6, 30) = moment().add({"days":0}).startOf('day').add({"hours":6, "minutes":30})
    // = Today at 6:30 PM
    return moment().add(dayDueOffset, 'days').startOf('day').add({ "hours": HourDue, "minutes": MinuteDue });
}

export default FormatDue;