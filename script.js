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
// console.log("gender:", gender);
// console.log("dob:", dob);

    const date = new Date(dob);
    const dayNumber = date.getDay(); 

    // console.log("Date of Birth:", dob);
    // console.log("Day Number:", dayNumber);

    // Day names
    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    // console.log("Days of the week:", days);

    // Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    console.log("Akan names:", gender === "male" ? maleNames : femaleNames);

    // Get date
    const dayName = days[dayNumber];
    const akanName = gender === "male" 
        ? maleNames[dayNumber] 
        : femaleNames[dayNumber];

        // console.log("Day Name:", dayName);
        // console.log("Akan Name:", akanName);

    // Display results
    dayResult.textContent = `You were born on: ${dayName}`;
    result.textContent = `Your Akan name is: ${akanName}`;

    // console.log("day born:", dayResult.textContent);
    // console.log("result:", result.textContent);
    
});
