// Selectors :

const showModalButton = document.querySelector(".app__add-button");
const closeModalButton = document.querySelector(".form-close");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const addBookButton = document.querySelector(".form__add-button");

// Variables :

let booksList = [];

// Event Listener :

document.addEventListener("DOMContentLoaded", () => {
  showModalButton.addEventListener("click", showModal);
  closeModalButton.addEventListener("click", hideModal);
  backdrop.addEventListener("click", hideModal);
  addBookButton.addEventListener("click", addBook);
});

// Functions :

function showModal() {
  const titleInput = document.querySelector("#title-input");

  // Show modal :
  modal.style.opacity = "1";
  modal.style.transform = "translateY(-5vh)";

  // Show backdrop :
  backdrop.style.display = "block";

  // Focus on title input :

  titleInput.focus();
}

function hideModal() {
  // Hide modal :

  modal.style.opacity = "0";
  modal.style.transform = "translateY(-200vh)";

  // Hide backdrop :

  backdrop.style.display = "none";
}

function addBook(event) {
  event.preventDefault();

  // console.log("clicked add book button !!");

  createBook();
}

function createBook() {
  const titleInput = document.querySelector("#title-input");
  const authorInput = document.querySelector("#author-input");
  const readInput = document.querySelector("#read-input");

  // Get values from user :
  const titleInputValue = titleInput.value;
  const authorInputValue = authorInput.value;

  if (titleInputValue && authorInputValue) {
    // create book :
    const book = {
      id: new Date().getTime(),
      insertedDate: new Date().toISOString(),
      title: titleInputValue,
      author: authorInputValue,
      read: false,
    };

    // remove style invalid inputs :
    titleInput.classList.remove("invalid");
    authorInput.classList.remove("invalid");

    if (readInput.checked) {
      //  When user checks read option :
      book.read = true;

      booksList = createBooksList(book);
      booksList = sortBooksList(booksList);
      // save books list in local storage :
      saveBooksList(booksList);
      // console.log("sorted1:", booksList);
    } else {
      booksList = createBooksList(book);
      booksList = sortBooksList(booksList);
      saveBooksList(booksList);
      // console.log("sorted2:", booksList);
    }
  } else {
    // When user doesn't enter information in inputs :
    if (titleInputValue === "" || authorInputValue === "") {
      if (titleInputValue === "") {
        titleInput.classList.add("invalid");
        titleInput.focus();
        // console.log("title");
      } else {
        authorInput.classList.add("invalid");
        authorInput.focus();
        // console.log("author");
      }
    }
  }
}

function createBooksList(book) {
  return (booksList = [...booksList, book]);
}

  // else {
  //   if (titleInputValue === "" || authorInputValue === "") {
  //     // console.log("empty string !!");
  //   }
  // }

  // return;
}

function createBooksList(book) {
  // *** REMEMBER *** //
  if (typeof book === "string") return null;

  booksList = [...booksList, book];

  return booksList;
}
