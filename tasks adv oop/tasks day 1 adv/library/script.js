// Step 1: Author Constructor Function
function Author(name, email) {
  this.name = name;
  this.email = email;
}

// Step 2: Book Constructor Function
function Book(name, price, author) {
  this.name = name;
  this.price = price;
  this.author = author;
}

// Variables
var books = []; // Array to store books
var currentBookIndex = 0; // Track the current book being entered
var totalBooks = 0; // Total number of books to be entered

// Step 3: Create the Form Dynamically
function createForm() {
  totalBooks = parseInt(document.getElementById("numBooks").value, 10);
  var booksError = document.getElementById("numBooksError");

  // Validation for number of books
  if (isNaN(totalBooks) || totalBooks <= 0) {
    booksError.textContent = "Please enter a valid number of books.";
    return;
  }

  // Reset errors and clear input field
  booksError.textContent = "";
  document.getElementById("numBooks").value = "";

  // Start with the first book form
  currentBookIndex = 0;
  showForm();
}

// Step 4: Show the Form for the Current Book
function showForm() {
  var bookFormContainer = document.getElementById("bookFormContainer");
  var bookForm = document.getElementById("bookForm");

  // Clear any previous form content
  bookForm.innerHTML = "";

  // Generate form section for the current book
  var formSection = `
      <div class="form-section">
        <h3>Book ${currentBookIndex + 1}</h3>
        <label for="bookName">Name:</label>
        <input type="text" id="bookName" required>
        <span id="bookNameError" class="error"></span>
        <label for="bookPrice">Price:</label>
        <input type="text" id="bookPrice" required>
        <span id="bookPriceError" class="error"></span>
        <label for="authorName">Author Name:</label>
        <input type="text" id="authorName" required>
        <span id="authorNameError" class="error"></span>
        <label for="authorEmail">Author Email:</label>
        <input type="text" id="authorEmail" required>
        <span id="authorEmailError" class="error"></span>
      </div>
    `;

  bookForm.innerHTML = formSection; // Add the form section
  bookFormContainer.classList.remove("hidden"); // Display the form container
}

// Step 5: Handle Form Submission
function submitForm() {
  var bookName = document.getElementById("bookName").value;
  var bookPrice = document.getElementById("bookPrice").value;
  var authorName = document.getElementById("authorName").value;
  var authorEmail = document.getElementById("authorEmail").value;

  // Clear previous error messages
  clearErrorMessages();

  // Validate input fields
  if (!validateInputs(bookName, bookPrice, authorName, authorEmail)) {
    return; // Stop execution if validation fails
  }

  // Create a new book and add it to the array
  var author = new Author(authorName, authorEmail);
  var book = new Book(bookName, bookPrice, author);
  books.push(book);

  currentBookIndex++; // Move to the next book

  if (currentBookIndex < totalBooks) {
    showForm(); // Display the form for the next book
  } else {
    document.getElementById("bookFormContainer").classList.add("hidden"); // Hide the form container
    document.querySelector(".form_container").classList.add("hidden"); // Hide the overall form
    fillTable(); // Show the table with book data
  }
}

// Step 6: Fill the Table with Book Data
function fillTable() {
  var bookTable = document.getElementById("bookTable");
  var bookTableBody = document.querySelector("#bookTable tbody");

  // Clear previous table content
  bookTableBody.innerHTML = "";

  books.forEach((book, index) => {
    var row = `
        <tr>
          <td>${book.name}</td>
          <td>${book.price}</td>
          <td>${book.author.name}</td>
          <td>${book.author.email}</td>
          <td>
            <button class="edit" onclick="editBook(${index})">Edit</button>
            <button class="delete" onclick="deleteBook(${index})">Delete</button>
          </td>
        </tr>
      `;
    bookTableBody.innerHTML += row;
  });

  bookTable.classList.remove("hidden"); // Display the table
}

// Step 7: Edit Book Data
function editBook(index) {
  var row = document.querySelector(
    `#bookTable tbody tr:nth-child(${index + 1})`
  );
  var cells = row.querySelectorAll("td");

  cells[0].innerHTML = `<input type="text" id="editBookName${index}" value="${books[index].name}">`;
  cells[1].innerHTML = `<input type="text" id="editBookPrice${index}" value="${books[index].price}">`;
  cells[2].innerHTML = `<input type="text" id="editAuthorName${index}" value="${books[index].author.name}">`;
  cells[3].innerHTML = `<input type="text" id="editAuthorEmail${index}" value="${books[index].author.email}">`;

  cells[4].innerHTML = `
    <button class="save" onclick="saveBook(${index})">Save</button>
    <button class="cancel" onclick="fillTable()">Cancel</button>
  `;
}

// Step 8: Save Edited Book
function saveBook(index) {
  books[index].name = document.getElementById(`editBookName${index}`).value;
  books[index].price = document.getElementById(`editBookPrice${index}`).value;
  books[index].author.name = document.getElementById(
    `editAuthorName${index}`
  ).value;
  books[index].author.email = document.getElementById(
    `editAuthorEmail${index}`
  ).value;

  fillTable();
}

// Step 9: Delete Book
function deleteBook(index) {
  books.splice(index, 1); // Remove the book from the array
  fillTable();

  // If no books are left, show the form container
  if (books.length === 0) {
    document.querySelector(".form_container").classList.remove("hidden");
    document.getElementById("bookTable").classList.add("hidden");
  }
}

// Step 10: Clear Error Messages
function clearErrorMessages() {
  document.getElementById("bookNameError").textContent = "";
  document.getElementById("bookPriceError").textContent = "";
  document.getElementById("authorNameError").textContent = "";
  document.getElementById("authorEmailError").textContent = "";
}

// Step 11: Validate Inputs
function validateInputs(bookName, bookPrice, authorName, authorEmail) {
  var isValid = true;

  if (!/^[a-zA-Z]+$/.test(bookName)) {
    document.getElementById("bookNameError").textContent =
      "Book name must contain only letters with no spaces.";
    isValid = false;
  }
  if (!/^[a-zA-Z]+$/.test(authorName)) {
    document.getElementById("authorNameError").textContent =
      "Author name must contain only letters with no spaces.";
    isValid = false;
  }
  if (!/^\d+$/.test(bookPrice)) {
    document.getElementById("bookPriceError").textContent =
      "Price must be a number with no spaces.";
    isValid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(authorEmail)) {
    document.getElementById("authorEmailError").textContent =
      "Author email must be a valid email address.";
    isValid = false;
  }

  return isValid;
}

// Step 12: Toggle Buttons for Editing
function toggleButtons(row, editing) {
  var editBtn = row.querySelector(".edit");
  var deleteBtn = row.querySelector(".delete");

  if (editing) {
    editBtn.style.display = "none";
    deleteBtn.style.display = "none";
  } else {
    editBtn.style.display = "inline-block";
    deleteBtn.style.display = "inline-block";
  }
}
