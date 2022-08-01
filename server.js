const express = require ('express');
const qAndARoutes = require ('./src/q_and_a_service/routes.js');
const app = express ();

app.use (express.json());


app.get('/', (req, res) => {
  res.send ('Hello World!!!')
});

app.use('/qa', qAndARoutes);

const port = process.env.PORT || 3000;
app.listen (port, () => console.log (`Listening on port ${port}...`));



//-------------Reviewing ----------------//



// const courses = [
//   {id: 1, name: 'course1'},
//   {id: 2, name: 'course2'},
//   {id: 3, name: 'course3'},
// ]


// app.get('/api/courses', (req, res) => {
//   res.send (courses)
// });

// app.get('/api/courses/:courseid', (req, res) => {
//   const course = courses.find(c => c.id === parseInt(req.params.courseid))
//   if (!course) {
//     res.status(404).send('The course with the given id was not found.')
//   } else {
//     res.send(course)
//   }
// });

// app.post('/api/courses', (req, res) => {
//   const course = {
//     id: courses.length + 1 ,
//     name: req.body.name,
//   }
//   courses.push (course);
//   res.send(course);

// });

// app.put('/api/courses/:id', (req, res) => {
//   const course = courses.find(c => c.id === parseInt(req.params.courseid))
//   if (!course) {
//     res.status(404).send('The course with the given id was not found.')
//   }
//   course.name = req.body.name;
//   res.send(course);
// });




// app.delete()


