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

  const book = createBook();

  // console.log(book);

  booksList = createBooksList(book);

  // console.log(booksList);
}

function createBook() {
  const titleInput = document.querySelector("#title-input");
  const authorInput = document.querySelector("#author-input");
  const readInput = document.querySelector("#read-input");

  const titleInputValue = titleInput.value;
  const authorInputValue = authorInput.value;

  if (titleInputValue && authorInputValue) {
    const book = {
      id: new Date().getTime(),
      insertedDate: new Date().toISOString(),
      title: titleInputValue,
      author: authorInputValue,
      read: false,
    };

    if (readInput.checked) {
      book.read = true;

      return book;
    }
    return book;
  }

  return "error : please enter title or author !!";

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
