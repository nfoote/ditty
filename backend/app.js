const express = require('express')
const app = express()
require('dotenv').config()
var request = require('request'); // "Request" library

const port = 8080

app.get('/getSong', (req, res) => {
  console.log(req.query.value)

  const query = encodeURI(req.query.value);
  const types = "artist";

  // Search:
  // Type = album, artist, playlist, track, show and espisode
  //  - Search results include hits from all the specified item types. 
  //  - For example: q=name:abacab&type=album,track

  var client_id = process.env.CLIENT_ID;
  var client_secret = process.env.CLIENT_SECRET;
  
  // your application requests authorization
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };
  
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      var token = body.access_token;
      var options = {
        url: `https://api.spotify.com/v1/search?q=${query}&type=${types}`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        res.send(body);
      });
    }
  });

});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/upload', upload.single('photo'), (req, res) => {
  if (req.file){
    res.json(req.file);
  }
  else throw 'error'
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})