document.querySelector("form").onsubmit = async function(e) {
    e.preventDefault();

    let inputs = document.querySelectorAll("input");
    let data = {};

    inputs.forEach((input, i) => {
        data[["firstname", "lastname", "username", "password",
        "email", "phone", "college", "department"][i]] = input.value;
    });

    let response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    let result = await response.json();
    alert(result.message + "\nRegistration ID: " + result.registrationId);
};