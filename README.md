#FLATIRONMOVIETHEATRE
Please make sure the server is running before you use the website.
You can do this by running "json-server --watch db.json" on your Terminal.

See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads. The number of available tickets will need to be derived by subtracting the number of tickets_sold from the theater's capacity.

See a menu of all movies on the left side of the page in the ul#films element when the page loads. (optional: you can style each film in the list by adding the classes film item to each li element.) There is a placeholder li in the ul#films element that is hardcoded in the HTML — feel free to remove that element by editing the HTML file directly, or use JavaScript to remove the placeholder element before populating the list. 

Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). A persistence mechanism is needed for this feature. Read the following paragraph for more details.

When a ticket is purchased, the app should:

Persist the updated number of tickets_sold on the server. Remember, the frontend shows the number of available tickets based on the tickets_sold and the capacity, so only the tickets_sold should be updated on the backend when a ticket is purchased.

Delete a film from the server. Add a delete button next to each film in the ul#films menu. When the button is clicked, remove the film from the list and also delete the film on the server

When a movie is sold out (when there are no available tickets remaining), indicate that the movie is sold out by changing the button text to "Sold Out". Also update the film item in the ul#films menu by adding a class of sold-out to the film. 