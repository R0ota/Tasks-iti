// document.addEventListener("DOMContentLoaded", () => {
//     // Retrieve the saved data from cookies
//     const username = CookieLibrary.getCookie('username');
//     const age = CookieLibrary.getCookie('age');
//     const gender = CookieLibrary.getCookie('gender');
//     const fontColor = CookieLibrary.getCookie('fontColor');
//     let visits = parseInt(CookieLibrary.getCookie('visits') || '0');

//     // Increment visits count
//     visits += 1;
//     const expiryDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000); // 1 year from now
//     CookieLibrary.setCookie('visits', visits, expiryDate); // Update visit count cookie

//     // Update profile page content
//     document.getElementById('greeting').innerText = `Hello, ${username}!`;
//     console.log(username);
//     document.getElementById('age').innerText = `You are ${age} years old.`;
//     document.getElementById('visits').innerText = `You have visited this site ${visits} times.`;

//     // Change text color based on the saved color
//     document.body.style.color = fontColor;

//     // Set the gender profile image
//     const profileImage = document.getElementById('profile_image');
//     if (gender === 'male') {
//         profileImage.src = 'male.jpg'; // Replace with actual image path
//     } else if (gender === 'female') {
//         profileImage.src = 'female.jpg'; // Replace with actual image path
//     }

//     // Log Out functionality
//     document.getElementById('logoutButton').addEventListener('click', () => {
//         // Delete all cookies
//         CookieLibrary.deleteCookie('username');
//         CookieLibrary.deleteCookie('age');
//         CookieLibrary.deleteCookie('gender');
//         CookieLibrary.deleteCookie('fontColor');
//         CookieLibrary.deleteCookie('visits');

//         // Redirect back to the form page
//         location.href = 'index.html'; // Replace with your form page URL
//     });
// });
window.onload= () => {
    // Ensure the elements exist before trying to manipulate them
    const username = CookieLibrary.getCookie('username');
    const age = CookieLibrary.getCookie('age');
    const gender = CookieLibrary.getCookie('gender');
    const fontColor = CookieLibrary.getCookie('fontColor');
    let visits = parseInt(CookieLibrary.getCookie('visits') || '0');
console.log(visits)
    // Increment visits count
    visits += 1;

    const expiryDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000); // 1 year from now
    CookieLibrary.setCookie('visits', visits, expiryDate); // Update visit count cookie

    // Ensure the elements exist before modifying them
    const greetingElement = document.getElementById('greeting');
    const ageElement = document.getElementById('age');
    const visitsElement = document.getElementById('visits');
    const profileImage = document.getElementById('profile_image');

    if (greetingElement && ageElement && visitsElement && profileImage) {
        // Update profile page content
        greetingElement.innerText = `Hello, ${username}!`;
        ageElement.innerText = `You are ${age} years old.`;
        visitsElement.innerText = `You have visited this site ${visits} times.`;

        // Change text color based on the saved color
        document.body.style.color = fontColor;

        // Set the gender profile image
        if (gender === 'male') {
            profileImage.src = 'male.jpg'; // Replace with actual image path
        } else if (gender === 'female') {
            profileImage.src = 'female.jpg'; // Replace with actual image path
        }
    }

    // Log Out functionality
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Delete all cookies
            CookieLibrary.deleteCookie('username');
            CookieLibrary.deleteCookie('age');
            CookieLibrary.deleteCookie('gender');
            CookieLibrary.deleteCookie('fontColor');
            CookieLibrary.deleteCookie('visits');

            // Redirect back to the form page
            location.href = 'index.html'; // Replace with your form page URL
        });
    }
};
