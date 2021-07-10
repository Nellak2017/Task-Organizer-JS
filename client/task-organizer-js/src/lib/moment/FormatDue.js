import moment from 'moment';

export const FormatDue = (time) => {
    // input: moment
    // output: (Today/Yesterday/n days ago) at {time.hour}:{time.minute} (pm/am)
    const today = moment();
    const defaultText = ` at ${time.format('h')}:${time.format('mm a')}`;
    const matchesDay = time.date() === today.date();
    const matchesMonth = time.month() === today.month();
    const matchesYear = time.year() === today.year();

    // Logic to determine the fomatting
    if(matchesDay && matchesMonth && matchesYear){
        return String('Today'+defaultText);
    }else if(time.date() === today.date()+1 && matchesMonth && matchesYear){
        return String('Tomorrow'+defaultText);
    }else if(time.date() === today.date()-1 && matchesMonth && matchesYear){
        return String('Yesterday'+defaultText);
    }else if(time.date() > today.date()+1){
        return String(`In ${time.date() - today.date()} days from now`+defaultText);
    }else{
        return String(`${today.date() - time.date()} days ago`+defaultText);
    }
}

export const MakeDue = (dayDueOffset, HourDue, MinuteDue) => {
    // input: due in n days, Hour Due, Minute Due
    // output: moment Object 
    // Example: MakeDue(0, 6, 30) = moment().add({"days":0}).startOf('day').add({"hours":6, "minutes":30})
    // = Today at 6:30 PM
    return moment().add({"days":dayDueOffset}).startOf('day').add({"hours":HourDue, "minutes":MinuteDue});
}

export default FormatDue;