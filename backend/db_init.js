const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const DB_NAME = 'wordle-list.db';

const JSON_FILE_PATH = 'wordle-list.json';

// Create SQLite database and table
const db = new sqlite3.Database(DB_NAME, (err) => {
  if (err) {
    console.error(`Error creating database: ${err.message}`);
    return;
  }

  console.log(`Database ${DB_NAME} created`);

  // Create table
  db.run(`
    CREATE TABLE IF NOT EXISTS words (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word TEXT
    )
  `, (err) => {
    if (err) {
      console.error(`Error creating table: ${err.message}`);
      return;
    }

    console.log('Table "words" created');

    // Read data from JSON file
    const jsonData = fs.readFileSync(JSON_FILE_PATH, 'utf8');
    const words = JSON.parse(jsonData);

    // Insert data into the table
    const insertStatement = db.prepare('INSERT INTO words (word) VALUES (?)');

    words.forEach((word) => {
      insertStatement.run(word);
    });

    insertStatement.finalize((err) => {
      if (err) {
        console.error(`Error inserting data: ${err.message}`);
        return;
      }

      console.log('Data inserted successfully');

      // Close the database connection
      db.close((err) => {
        if (err) {
          console.error(`Error closing database: ${err.message}`);
        } else {
          console.log('Database connection closed');
        }
      });
    });
  });
});

