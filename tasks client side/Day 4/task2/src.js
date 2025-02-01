function welcomingMessage() {
  var userName;
  var phoneNumber;
  var mobileNumber;
  var Email;

  do {
    userName = prompt("Enter your name (letters only):");

    if (!/^[a-zA-Z0-9_-]{4,16}$/.test(userName)) {
      alert("shoul be charcter ,i,e Not a number");
    }
  } while (!/^[a-zA-Z0-9_-]{4,16}$/.test(userName));

  alert("Welcome" + " " + userName);

  //  phone number
  do {
    phoneNumber = prompt("Enter your phoneNumber:");

    if (!/^\+?[1-8][0-8]{7,14}$/.test(phoneNumber)) {
      alert("Invalid number! (8 digits");
    }
  } while (!/^\+?[1-8][0-8]{7,14}$/.test(phoneNumber));

  alert("Welcome " + phoneNumber);

  // mobile number
  do {
    mobileNumber = prompt("Enter your mobileNumber :");

    if (!/^\+?[1-9][0-9]{7,14}$/.test(mobileNumber)) {
      alert("should be numbers starts with(010|012|011");
    }
  } while (!/^(010|011|012)\d{8}$/.test(mobileNumber));

  alert("Welcome " + mobileNumber);

  // email
  do {
    Email = prompt("Enter your email:");

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)) {
      alert(
        "should use regular exp . to vaildate that email is formatted corrcetly (abc@123.com"
      );
    }
  } while (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email));

  alert(
    "Welcome, " +
      userName +
      "!\n" +
      "Phone Number: " +
      phoneNumber +
      "\n" +
      "Mobile Number: " +
      mobileNumber +
      "\n" +
      "Email: " +
      Email
  );

  document.write(
    "Welcome, " +
      userName +
      "<br>" +
      "Phone Number: " +
      phoneNumber +
      "<br>" +
      "Mobile Number: " +
      mobileNumber +
      "<br>" +
      "Email: " +
      Email
  );
}
welcomingMessage();
