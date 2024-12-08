import express from 'express';
const app = express();
app.get('/api/hello', (req, res) => res.send('Hello!'));
app.listen(3002, ()=>console.log('server is runnin on port 3002!'));