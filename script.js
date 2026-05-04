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

    // Split date (YYYY-MM-DD)
    const [year, month, day] = dob.split("-");

    const DD = parseInt(day);
    const MM = parseInt(month);
    const YY = parseInt(year.slice(2, 4));
    const CC = parseInt(year.slice(0, 2));

    // Formula (corrected structure)
    let d = (
        ( (4 * CC) - (2 * CC - 1) ) +
        (45 * YY) +
        (1026 * (MM + 1)) +
        DD
    ) % 7;

    if (d < 0) {
        d = (d + 7) % 7;
    }

    // Days of week
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

    // Output
    dayResult.textContent = `You were born on: ${dayName}`;
    result.textContent = `Your Akan name is: ${akanName}`;
});