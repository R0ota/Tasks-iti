const CookieLibrary = {
    // Retrieve a cookie value by its name
    getCookie: (cookieName) => {
        // Decode the cookie string and split it into individual cookies
        const cookies = decodeURIComponent(document.cookie).split(';');

        // Iterate through the cookies and check if the name matches
        for (let cookie of cookies) {
            // Split the cookie into name and value
            const [name, value] = cookie.trim().split('=');

            // If the cookie name matches, return the value
            if (name === cookieName) return value;
        }

        // Return null if the cookie with the given name is not found
        return null;
    },

    // Set a cookie with a given name, value, and expiry date
    setCookie: (cookieName, cookieValue, expiryDate) => {
        // Set the cookie with the name, value, expiry date, and path
        document.cookie = `${cookieName}=${cookieValue}; expires=${expiryDate.toUTCString()}; path=/`;
    },

    // Delete a cookie by its name by setting its expiry date to a past date
    deleteCookie: (cookieName) => {
        // Set the cookie with the name to an empty value and a past expiry date
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },

    // Get a list of all cookies as an array of name-value pairs
    allCookieList: () => {
        // Decode the cookie string and split it into individual cookies
        return decodeURIComponent(document.cookie)
            .split(';')
            // Map each cookie to an array of name and value
            .map(cookie => cookie.trim().split('='));
    },

    // Check if a cookie with a given name exists
    hasCookie: (cookieName) => {
        const cookie = CookieLibrary.getCookie(cookieName); // Get the cookie value
        if (cookie === null) {
            return false; // If the cookie is not found, return false
        }
        return true; // If the cookie is found, return true
    }

};
