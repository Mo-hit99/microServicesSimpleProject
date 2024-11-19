import express from 'express'
const app = express();

app.use(express.json());

// Example route
app.get('/', (req, res) => {
    try {
        res.send('<h1>from USer !!!</h1>');
        res.status(200).json({ message: 'USer Service is up and running!' });
        
    } catch (error) {
        res.status(400).json(error);
    }
});
app.get('/api/v1/user', (req, res) => {
    try {
        res.send('<h1>from User v1 new !!!</h1>');
        res.status(200).json({ message: 'USer Service is up and running!' });
        
    } catch (error) {
        res.status(400).json(error);
    }
});

// Start User Service
app.listen(5001, () => {
    console.log('User Service is running on port 5001');
});