document.addEventListener("DOMContentLoaded", () => {
    // Check if cookies already exist and autofill the form
    if (CookieLibrary.hasCookie('username')) {
        document.querySelector("input[placeholder='your name...']").value = CookieLibrary.getCookie('username');
    }
    if (CookieLibrary.hasCookie('age')) {
        document.querySelector("input[placeholder='your age...']").value = CookieLibrary.getCookie('age');
    }
    if (CookieLibrary.hasCookie('gender')) {
        const gender = CookieLibrary.getCookie('gender');
        document.querySelector(`input[value="${gender}"]`).checked = true;
    }
    if (CookieLibrary.hasCookie('fontColor')) {
        document.querySelector("input[type='color']").value = CookieLibrary.getCookie('fontColor');
    }

    // Handle form submission
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page

        const username = document.querySelector("input[placeholder='your name...']").value;
        const age = document.querySelector("input[placeholder='your age...']").value;
        const gender = document.querySelector("input[name='gender']:checked")?.value;
        const fontColor = document.querySelector("input[type='color']").value;

        if (username && age && gender && fontColor) {
            // Set cookies for each field, valid for 1 year
            const expiryDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

            CookieLibrary.setCookie('username', username, expiryDate);
            CookieLibrary.setCookie('age', age, expiryDate);
            CookieLibrary.setCookie('gender', gender, expiryDate);
            CookieLibrary.setCookie('fontColor', fontColor, expiryDate);

            console.log(username,age,gender)

            // Redirect to the welcome page
            location.href = "welcome.html";
        } else {
            alert('Please fill in all the fields.');
        }
    });
});
