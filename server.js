const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});

app.get('/api/customers', (req, res) => {
    res.send([{
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': 'HongGil Dong',
        'birthday': '880405',
        'gender': 'male',
        'job': 'college student'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': 'Sejong Daewang',
        'birthday': '890405',
        'gender': 'male',
        'job': 'King'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': 'Sunsin Lee',
        'birthday': '900405',
        'gender': 'female',
        'job': 'General'
      }]
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));