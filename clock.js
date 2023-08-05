setInterval(showTime, 1000);
function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let date = time.getDate();
        let year = time.getFullYear(); 
        let month = time.getMonth() + 1;
        am_pm = "AM";

        if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
        }
        if (hour == 0) {
                hr = 12;
                am_pm = "AM";
        }

        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        date = date < 10 ? "0" + date : date;
        month = month < 10 ? "0" + month : month;

        document.getElementById("hour")
                .innerHTML = hour;
        document.getElementById("minute")
                .innerHTML = min;
        document.getElementById("second")
                .innerHTML = sec;
        document.getElementById("am")
                .innerHTML = am_pm;
        document.getElementById("date")
                .innerHTML = date+'/'+month+'/'+year;
}
showTime();

