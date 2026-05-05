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

    const [year, month, day] = dob.split("-");

    const DD = parseInt(day);
    const MM = parseInt(month);
    const YY = parseInt(year.slice(2, 4));
    const CC = parseInt(year.slice(0, 2));

   //    CALCULATION
// d=((4CC​−2×CC−1)+(45×YY​)+(1026×(MM+1)​)+DD)mod7

    let d = ( ( (4 * CC) - (2 * CC - 1) ) +  (45 * YY) +(1026 * (MM + 1)) +  DD ) % 7;

    if (d < 0) { d = (d + 7) % 7; }

    // Days of the week
    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    // Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    const dayName = days[d];
    const akanName = gender === "male"
        ? maleNames[d]
        : femaleNames[d];

   
    dayResult.textContent = `You were born on: ${dayName}`;
    result.textContent = `Your Akan name is: ${akanName}`; });

//     PRACTICEING WITH THE CALCULATION
//     console.log(`CC: ${CC}, YY: ${YY}, MM: ${MM}, DD: ${DD}`);
//     console.log(`Calculation steps:`);
//     console.log(`(4 * CC) - (2 * CC - 1): ${(4 * CC) - (2 * CC - 1)}`);
//     console.log(`45 * YY: ${45 * YY}`);
//     console.log(`1026 * (MM + 1): ${1026 * (MM + 1)}`);
//     console.log(`Total before modulo: ${(4 * CC) - (2 * CC - 1) + (45 * YY) + (1026 * (MM + 1)) + DD}`);
//     console.log(`d before adjustment: ${d}`);
//     console.log(`d after adjustment (if negative): ${d < 0 ? (d + 7) % 7 : d}`);
    // function calculateDayOfWeek(year, month, day) {
    // const CC = Math.floor(year / 100);
    // const YY = year % 100;
    // const MM = month;
    // const DD = day;

    // let d = ( ( (4 * CC) - (2 * CC - 1) ) +  (45 * YY) +(1026 * (MM + 1)) +  DD ) % 7;

    // if (d < 0) { d = (d + 7) % 7; }

    // return d;
}