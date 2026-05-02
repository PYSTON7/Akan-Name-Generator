document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // 1. Get inputs
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    const result = document.getElementById("result");

    // 2. Validation
    if (
        isNaN(day) || day < 1 || day > 31 ||
        isNaN(month) || month < 1 || month > 12 ||
        isNaN(year) || year < 1920 || year > 2026 ||
        gender === ""
    ) {
        result.textContent = "Please enter valid date and select gender.";
        return;
    }

    // 3. Split year into CC and YY
    const CC = Math.floor(year / 100);
    const YY = year % 100;

    const MM = month;
    const DD = day;

    // 4. Day calculation formula
    const dayOfWeek =
        Math.round(
            ((4 * CC) - (2 * CC - 1) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7
        );

    // 5. Akan names
    const maleNames = [
        "Kwasi", "Kwadwo", "Kwabena",
        "Kwaku", "Yaw", "Kofi", "Kwame"
    ];

    const femaleNames = [
        "Akosua", "Adwoa", "Abenaa",
        "Akua", "Yaa", "Afua", "Ama"
    ];

    // 6. Get name
    let akanName = "";

    if (gender === "male") {
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }

    // 7. Display result
    result.textContent = `Your Akan name is: ${akanName}`;
});
