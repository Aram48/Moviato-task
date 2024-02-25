const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    {id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813},
    {id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951},
  ];

  const searchInput = document.getElementById('search-input');
  const bookList = document.getElementById('book-list');
  const noMatchesMessage = document.getElementById('no-matches');

  function renderBooks(booksToRender) {
    bookList.innerHTML = '';

    if (booksToRender.length === 0) {
      noMatchesMessage.style.display = 'block';
      return;
    }

    noMatchesMessage.style.display = 'none';

    booksToRender.forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.classList.add('book-item');

      const title = document.createElement('p');
      title.innerHTML = highlightMatches(book.title);
      const author = document.createElement('p');
      author.innerHTML = highlightMatches(book.author);

      bookItem.appendChild(title);
      bookItem.appendChild(author);
      bookList.appendChild(bookItem);
    });
  }

  function highlightMatches(text) {
    const searchKeyword = searchInput.value.trim().toLowerCase();
    if (!searchKeyword) {
      return text;
    }

    const regex = new RegExp(searchKeyword, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }

  function handleSearch() {
    const searchKeyword = searchInput.value.trim().toLowerCase();
    const matchingBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchKeyword) ||
      book.author.toLowerCase().includes(searchKeyword)
    );

    renderBooks(matchingBooks);
  }

  searchInput.addEventListener('input', handleSearch);

  renderBooks(books);