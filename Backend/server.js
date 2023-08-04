const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const userDB = [
        {
            id: 1,
            username: "admin",
            password: "passwd123",
            isAdmin: true,
        },
        {
            id: 2,
            username: "staff",
            password: "123456",
            isAdmin: false,
        },
        {
            id: 3,
            username: "vice",
            password: "abrakadabra",
            isAdmin: false,
        },
    {
            id: 4,
            username: "super",
            password: "69843",
            isAdmin: true,
        },
    {
            id: 5,
            username: "user",
            password: "123",
            isAdmin: false,
        }
    ];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

const user = userDB.find((u) => u.username === username && u.password === password);

if (user) {
  res.json({ status: 'Success' });
} else {
  res.json({ status: 'Failed' });
}
});

app.listen(3001);
console.log('Server is Running');