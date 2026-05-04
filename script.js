
    document.getElementById("akanForm").addEventListener("submit", function(e) {
    e.preventDefault();

    
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    const result = document.getElementById("result");
    const dayResult = document.getElementById("dayResult");

  
    if (
        isNaN(day) || day < 1 || day > 31 ||
        isNaN(month) || month < 1 || month > 12 ||
        isNaN(year) ||
        gender === ""
    ) {
        result.textContent = "Please enter valid day (1–31), month (1–12), year and select gender.";
        return;
    }

    
    const CC = Math.floor(year / 100); 
    const YY = year % 100;            
    const MM = month;
    const DD = day;

    // 4. Apply formula
    let d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7;

    
    if (d < 0) {
        d = (d + 7) % 7;
    }

    // 5. Day names
    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    // 6. Akan names
    const maleNames = [
        "Kwasi", "Kwadwo", "Kwabena",
        "Kwaku", "Yaw", "Kofi", "Kwame"
    ];

    const femaleNames = [
        "Akosua", "Adwoa", "Abenaa",
        "Akua", "Yaa", "Afua", "Ama"
    ];

    
    const dayName = days[d];
    const akanName = gender === "male"
        ? maleNames[d]
        : femaleNames[d];

   
    dayResult.textContent = `You were born on: ${dayName}`;
    result.textContent = `Your Akan name is: ${akanName}`;
});