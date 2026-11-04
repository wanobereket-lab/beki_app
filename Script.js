function updateClock() {

    const now = new Date();

    let hours = now.getHours();

    let minutes = now.getMinutes();

    let seconds = now.getSeconds();


    // Add zero before single digits

    hours = String(hours).padStart(2, "0");

    minutes = String(minutes).padStart(2, "0");

    seconds = String(seconds).padStart(2, "0");


    // Display time

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;


    // Display date

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", options);

}


// Update clock every second

updateClock();

setInterval(updateClock, 1000);
