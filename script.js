document.getElementById("akanForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    const result = document.getElementById("result");
    const dayResult = document.getElementById("dayResult");

    if (!dob || gender === "") {
        result.textContent = "Please enter your birthdate and select gender.";
        return;
    }

    let [year, month, day] = dob.split("-").map(Number);

    if (month < 3) {
        month += 12;
        year -= 1;
    }

    const DD = day;
    const MM = month;
    const YY = year % 100;
    const CC = Math.floor(year / 100);

    let d = (DD + Math.floor(13 * (MM + 1) / 5) + YY + Math.floor(YY / 4) + Math.floor(CC / 4) - 2 * CC) % 7;

    if (d < 0) { d = (d + 7) % 7; }
     d = (d + 6) % 7;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    const dayName = days[d];
    const akanName = gender === "male" ? maleNames[d] : femaleNames[d];

    dayResult.textContent = `You were born on: ${dayName}`;
    result.textContent = `Your Akan name is: ${akanName}`;

    // Clear results and reset form after 5 seconds
    setTimeout(() => {
        result.textContent = "";
        dayResult.textContent = "";
        this.reset();

    }, 5000);
});
    

//     PRACTICEING WITH THE CALCULATION
//     console.log(`CC: ${CC}, YY: ${YY}, MM: ${MM}, DD: ${DD}`);
//     console.log(`Calculation steps:`);
//     console.log(`(4 * CC) - (2 * CC - 1): ${(4 * CC) - (2 * CC - 1)}`);
//     console.log(`45 * YY: ${45 * YY}`);
//     console.log(`1026 * (MM + 1): ${1026 * (MM + 1)}`);
//     console.log(`Total before modulo: ${(4 * CC) - (2 * CC - 1) + (45 * YY) + (1026 * (MM + 1)) + DD}`);
//     console.log(`d before adjustment: ${d}`);
//     console.log(`d after adjustment (if negative): ${d < 0 ? (d + 7) % 7 : d}`);
//    function calculateDayOfWeek(CC, YY, MM, DD) {
//     let d = ( ( (4 * CC) - (2 * CC - 1) ) +  (45 * YY) +(1026 * (MM + 1)) +  DD ) % 7;
//     if (d < 0) { d = (d + 7) % 7; }
//     return d;
// }