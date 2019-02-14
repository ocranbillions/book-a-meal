import express from 'express';
// import bodyParser from 'body-parser';
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// );

const app = express();


app.get('/', (req, res) => res.send('Hello World!'));


const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
