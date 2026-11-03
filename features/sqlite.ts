import { Database } from 'bun:sqlite';

async function sqliteDemo(){
    const db = new Database("bundb.sqlite");

    //create a table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);


        console.log("Database Successfully created");

        const insertUser = db.prepare(
            `INSERT INTO users (name, email) VALUES (?, ?)`);
        //placeholders(?, ?) help to prevent SQL Injection
        // insertUser.run("Ghost Buster", "ghostbuster@gmail.com");

        // const extractAllusers = db.query("SELECT * FROM users").all();
        // console.log(extractAllusers);

        // db.run('UPDATE users SET name = ? WHERE email = ?', [
        //     "Big Wayne",
        //     "brucewaynreuster@gmail.com"
        // ])

        // const getUpdateduserInfo = db.query(`SELECT * FROM users WHERE email = ?`).get("brucewaynreuster@gmail.com")
        // console.log(getUpdateduserInfo);

        db.run(`DELETE FROM users WHERE email = ?`, ["brucewaynreuster@gmail.com"])
        const extractRemainingUsers = db.query(`SELECT * FROM users`).all();

        console.log(`extractRemainingUsers`, extractRemainingUsers);
        
} 



sqliteDemo();