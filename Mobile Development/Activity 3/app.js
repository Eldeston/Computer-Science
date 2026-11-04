require("dotenv").config();

const express = require("express");
const { ObjectId } = require("mongodb");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT;

const client = new MongoClient(
    process.env.MONGODB_URI
)

app.use(express.json());
app.use(express.static("public"));

async function startServer() {
    await client.connect();
    console.log("Successfully connected to MongoDB.");

    const db = client.db(process.env.DB_NAME);

    app.post("/api/signup", async (req, res) => {
        const {
            firstName,
            lastName,
            email,
            gender,
            password
        } = req.body;

        if (
            !firstName ||
            !lastName ||
            !email ||
            !gender ||
            !password
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const existingUser = await db
            .collection("Users")
            .findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists."
            });
        }

        await db.collection("Users").insertOne({
            firstName,
            lastName,
            email,
            gender,
            password,
            createdAt: new Date()
        });

        res.json({
            success: true,
            message: "Account created successfully."
        });
    });

    app.post("/api/login", async (req, res) => {
        const { email, password } = req.body;

        const user = await db.collection("Users").findOne({
            email,
            password
        });

        if (user) {
            res.json({
                success: true,
                email: user.email,
                firstName: user.firstName
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }
    });

    app.get("/api/tasks/:email", async (req, res) => {
        const tasks = await db
            .collection("Tasks")
            .find({
                email: req.params.email
            })
            .toArray();

        res.json(tasks);
    });

    app.post("/api/tasks/:email", async (req, res) => {
        if (!req.body.title?.trim()) {
            return res.status(400).json({
                success: false,
                message: "Task title required"
            });
        }

        const task = {
            email: req.params.email,
            title: req.body.title.trim()
        };

        await db.collection("Tasks").insertOne(task);

        res.json({ success: true });
    });

    app.delete("/api/tasks/:email/:id", async (req, res) => {
        await db.collection("Tasks").deleteOne({
            _id: new ObjectId(req.params.id),
            email: req.params.email
        });

        res.json({
            success: true
        });
    });
    
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

// Catch any errors
startServer().catch((error) => {
    console.error(error);
});