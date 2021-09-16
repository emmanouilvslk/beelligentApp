const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const milliseccondsPerDay = 1000 * 60 * 60 * 24;

export default class getDateTime {
    static dmy(date: string) {
        const jsDate = new Date(date);
        return `${("0" + jsDate.getDate()).slice(-2)}/${("0" + (jsDate.getMonth() + 1)).slice(
            -2,
        )}/${jsDate.getFullYear()}`;
    }
    static dMy(date: string) {
        const jsDate = new Date(date);
        return `${jsDate.getDate()} ${monthNames[jsDate.getMonth()]} ${jsDate.getFullYear()} `;
    }
    static dM(date: string) {
        const jsDate = new Date(date);
        return `${jsDate.getDate()} ${monthNames[jsDate.getMonth()]} `;
    }
    static time24(date: string) {
        const jsDate = new Date(date);
        const hours = ("0" + jsDate.getHours()).slice(-2);
        const minutes = ("0" + jsDate.getMinutes()).slice(-2);

        return `${hours}:${minutes}`;
    }
    static hours(date: string) {
        const hours = new Date(date).getHours();

        return hours;
    }
    static minutes(date: string) {
        const minutes = new Date(date).getMinutes();

        return minutes;
    }
    static weekPeriodEndDate(startDate: string, numberOfWeeks: number) {
        const startDateJS = new Date(startDate);
        const endDate = startDateJS.setDate(startDateJS.getDate() + numberOfWeeks * 7);
        const endDateJSON = new Date(endDate).toJSON();
        return endDateJSON;
    }
    static dateDifferenceInDays(smallerDate: string, biggerDate: string) {
        const a = new Date(smallerDate);
        const b = new Date(biggerDate);

        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        const difference = Math.abs(Math.floor((utc2 - utc1) / milliseccondsPerDay));

        return difference;
    }

    static timeDifferenceMillisecconds(smallerDate: string, biggerDate: string, getPositive?: boolean) {
        const commonDate = new Date();
        const biggerTime = new Date(biggerDate);
        const smallerTime = new Date(smallerDate);

        const aDate = new Date(commonDate).setHours(smallerTime.getHours(), smallerTime.getMinutes(), 0, 0);
        const bDate = new Date(commonDate).setHours(biggerTime.getHours(), biggerTime.getMinutes(), 0, 0);

        const differenceInMillisecconds = bDate - aDate;

        return getPositive ? Math.abs(differenceInMillisecconds) : differenceInMillisecconds;
    }
    static timeDifferenceMinutes(smallerDate: string, biggerDate: string, getPositive?: boolean) {
        const differenceInMillisecconds = this.timeDifferenceMillisecconds(smallerDate, biggerDate);
        const differenceInMinutes = differenceInMillisecconds / 60000;

        return getPositive ? Math.abs(differenceInMinutes) : differenceInMinutes;
    }
}
