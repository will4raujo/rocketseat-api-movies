const movieNotes = `
    CREATE TABLE movie_notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR,
        description VARCHAR,
        rating INTEGER
        user_id INTEGER FOREIGN KEY 
    )

`;

module.exports = movieNotes;