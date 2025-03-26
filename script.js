document.addEventListener("DOMContentLoaded", () => {
 
    const moviesList = document.getElementById("movies");
    const moviePoster = document.getElementById("movie-poster");
    const movieTitle = document.getElementById("movie-title");
    const movieDescription = document.getElementById("movie-description");
    const movieRuntime = document.getElementById("movie-runtime");
    const remainingTickets = document.getElementById("remaining-tickets");
    const buyButton = document.getElementById("buy-ticket");
  
    const API_URL = "http://localhost:3000/films";
  // Store the selected movie
    let currentMovie = null; 
  
    // Fetch and display the first movie
    function fetchFirstMovie() {
      fetch(API_URL)
        .then((response) => response.json())
        .then((movies) => {
          if (movies.length > 0) {
            // Show the first movie
            displayMovie(movies[0]); 
          }
          // Populate movie list
          displayMoviesList(movies); 
        })
        .catch((error) => console.error("Error fetching movies:", error));
    }
  
    // Display a movie's details
    function displayMovie(movie) {
      // Store the selected movie
      currentMovie = movie; 
  
      moviePoster.src = movie.poster;
      movieTitle.textContent = movie.title;
      movieDescription.textContent = movie.description;
      movieRuntime.textContent = movie.runtime;
      
      const availableTickets = movie.capacity - movie.tickets_sold;
      remainingTickets.textContent = availableTickets;
  
      if (availableTickets === 0) {
        buyButton.textContent = "Sold Out";
        buyButton.disabled = true;
      } else {
        buyButton.textContent = "Buy Ticket";
        buyButton.disabled = false;
      }
    }
  
    // Populate the sidebar with movies
    function displayMoviesList(movies) {
      // Clear existing list
      moviesList.innerHTML = ""; 
  
      movies.forEach((movie) => {
        const listItem = document.createElement("li");
        listItem.textContent = movie.title;
        listItem.classList.add("film-item");
        // Store movie ID for selection
        listItem.dataset.id = movie.id; 
  
        // Click event to show movie details
        listItem.addEventListener("click", () => displayMovie(movie)
   )
  
        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", (event) => {
          // Prevent movie selection when clicking delete
          event.stopPropagation(); 
          deleteMovie(movie.id, listItem);
        });
  
        listItem.appendChild(deleteButton);
        moviesList.appendChild(listItem);
      });
    }
  
    // Buy a ticket
    buyButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (!currentMovie) return;
  
      let availableTickets = currentMovie.capacity - currentMovie.tickets_sold;
      if (availableTickets > 0) {
        currentMovie.tickets_sold += 1;
        remainingTickets.textContent = availableTickets - 1;
  
        // If sold out, disable button
        if (availableTickets - 1 === 0) {
          buyButton.textContent = "Sold Out";
          buyButton.disabled = true;
        }
  
        // Update the server with new ticket count
        fetch(`${API_URL}/${currentMovie.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tickets_sold: currentMovie.tickets_sold }),
        })
          .then((response) => response.json())
          .catch((error) => console.error("Error updating tickets:", error));
      }
    });
  
    // Delete a movie
    function deleteMovie(movieId, listItem) {
      fetch(`${API_URL}/${movieId}`, { method: "DELETE" })
        .then((response) => {
          if (response.ok) {
            listItem.remove();
            alert("Movie deleted successfully!");
          } else {
            alert("Failed to delete movie.");
          }
        })
        .catch((error) => console.error("Error deleting movie:", error));
    }
  
    // Initialize page with first movie
    fetchFirstMovie();
  });