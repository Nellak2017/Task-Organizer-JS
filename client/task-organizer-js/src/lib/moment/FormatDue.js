import moment from 'moment';

export const FormatDue = (time) => {
    // input: moment
    // output: (Today/Yesterday/n days ago) at {time.hour}:{time.minute} (pm/am) as a String
    
    // Note: This is the version I am using with the date, time picker from Material UI
    // This means that it has been heavily altered to reflect the new library
    // The old output is supposed to be time.format("..."), now it is just "..."

    console.log("Time");
    console.log(time);

    // if input is a string, convert it to a moment object to be used
    if (typeof time === 'string' || time instanceof String) {
        time = moment(time);
    }

     // if input is a Date, convert it to a moment object to be used
    if (time instanceof Date) {
        time = moment(time);
    }

    const today = moment();
    //const defaultText = ` at ${time.format('h')}:${time.format('mm a')}`;
    const matchesDay = time.date() === today.date();
    const matchesMonth = time.month() === today.month();
    const matchesYear = time.year() === today.year();
    const daysInFuture = time.diff(today, 'days', true);
    const daysInPast = today.add(1, 'days').diff(time, 'days');

    console.log("Days in the future");
    console.log(daysInFuture);

    /*
        time_until_tomorrow = start_of_tomorrow_moment - time // positive number greater than current time unless it is 12 am 
        time_since_yesterday = end_of_yesterday_moment - time // negative number less than current time unless it is 12 am

        n_days_from_now = ... // will be an integer representing what the difference between today and the input is.. ex: 12:01 am tomorrow is tomorrow, instead of 0 days resulting in a bug

     */

    // Logic to determine the fomatting
    if (matchesDay && matchesMonth && matchesYear) {
        return "[Today at] h:mm a";
    } else if (daysInFuture === 1 && matchesMonth && matchesYear) {
        return "[Tomorrow at] h:mm a";
    } else if (daysInPast === 1 && matchesMonth && matchesYear) {
        return "[Yesterday at] h:mm a";
    } else if (daysInFuture > 1) {
        return "[days from now at] h:mm a";
    } else {
        return "[days ago at] h:mm a";
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