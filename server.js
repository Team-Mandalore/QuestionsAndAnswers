const express = require ('express');
const qAndARoutes = require ('./src/q_and_a_service/routes.js');
const app = express ();

app.use (express.json());


app.get('/', (req, res) => {
  res.send ('Hello World!!!')
});

app.use(qAndARoutes);

const port = process.env.PORT || 3000;
app.listen (port, () => console.log (`Listening on port ${port}...`));



