//create a new fxn that just logs the data to the console and call it dbLogSubscriber

const db = require("../db")

function databaseLogSubscriber(data) {
    try{
        const { name, createdAt } = data
        const sql = `INSERT INTO resources (name, createdAt) VALUES (?, ?)`
        db.run(sql, [name, createdAt], (err) => {
            if (err) {
                console.error("Error inserting resource:", err.message)
            }
            
        })
        console.log("Resource inserted into database:", data)
    } catch (error) {
        console.error("Error inserting resource:", error.message)
    }
}

module.exports = databaseLogSubscriber

