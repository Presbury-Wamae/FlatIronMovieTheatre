# FlatIronMovieTheatre

Flatiron Movie Theater is open for business! FlatIronMovieTheatre is a web application that allows users to browse movie listings and purchase tickets.

## Demo

For a visual representation of how the app should function, refer to the provided GIF demo.

## Features

As a user, you can:
- View details of the first movie, including its poster, title, runtime, showtime, and available tickets.
- Browse a menu of all movies displayed on the left side of the page.
- Purchase tickets for a selected movie, decreasing the number of available tickets.
- Prevent ticket purchases if a movie is sold out.
- Delete movies from the list and the server.
- Display a "Sold Out" status when no tickets are available.

## API Endpoints

### Retrieve Film Data
#### Fetch the First Movie
```
GET /films/1
```
##### Example Response:
```json
{
  "id": "1",
  "title": "The Giant Gila Monster",
  "runtime": "108",
  "capacity": 30,
  "showtime": "04:00PM",
  "tickets_sold": 27,
  "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
  "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
}
```

#### Fetch All Movies
```
GET /films
```
##### Example Response:
```json
[
   {
     "id": "1",
     "title": "The Giant Gila Monster",
     "runtime": "108",
     "capacity": 30,
     "showtime": "04:00PM",
     "tickets_sold": 27,
     "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
   },
   {
     "id": "2",
     "title": "Manos: The Hands Of Fate",
     "runtime": "118",
     "capacity": 50,
     "showtime": "06:45PM",
     "tickets_sold": 44,
     "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
   }
]
```

### Purchase a Ticket
```
PATCH /films/:id
```
#### Request Headers:
```json
{
  "Content-Type": "application/json"
}
```
#### Request Body:
```json
{
  "tickets_sold": 28
}
```
##### Example Response:
```json
{
  "id": "1",
  "title": "The Giant Gila Monster",
  "runtime": "108",
  "capacity": 30,
  "showtime": "04:00PM",
  "tickets_sold": 28,
  "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
  "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
}
```

### Add a Ticket Purchase Record
```
POST /tickets
```
#### Request Body:
```json
{
   "film_id": "28",
   "number_of_tickets": 5
}
```
##### Example Response:
```json
{
   "id": "1",
   "film_id": "28",
   "number_of_tickets": 5
}
```

### Delete a Film
```
DELETE /films/:id
```
##### Example Response:
```json
{}
```

## UI Behavior
- When a movie sells out, the "Buy Ticket" button should change to "Sold Out".
- The movie in the list should be marked as sold out by adding a `sold-out` class.

Example:
```html
<ul id="films">
   <li class="film item">(Title of film)</li>
   <li class="sold-out film item">(Title of a sold-out film)</li>
   <li class="film item">(Title of film)</li>
</ul>
```

## Setup Instructions
1. Clone this repository.
2. Open `index.html` in a browser to test the application.
3. Ensure you have a local JSON server running to serve film data.
4. Modify `db.json` as needed for testing different scenarios.

## Technologies Used
- HTML
- CSS
- JavaScript
- JSON Server

## Author
Flatiron School

## License
This project is licensed under the MIT License.

