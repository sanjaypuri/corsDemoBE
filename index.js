import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors(
  {
    origin:["http://127.0.0.1:3000", "https://coresbackend.onrender.com/"],
    methods:["GET", "POST"],
    credentials: true
  }
));

app.get("/api/users", (req, res) => {
  res.send([
    {
      id:1,
      name:"Sanjay"
    },
    {
      id:2,
      name:"Sanju"
    },
    {
      id:3,
      name:"Shubam"
    },
    {
      id:4,
      name:"Shobit"
    },
  ]);
});

app.listen(5000);
