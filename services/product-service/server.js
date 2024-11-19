import express from 'express'
const app = express();

app.use(express.json());

// Example route
app.get('/', (req, res) => {
    try {
        res.send('<h1>from Product !!!!</h1>');
        res.status(200).json({ message: 'Product Service is up and running!' });
        
    } catch (error) {
        res.status(400).json(error);
    }
});
app.get('/api/v1/product', (req, res) => {
    try {
        res.send('<h1>from Product v1 new !!!!</h1>');
        res.status(200).json({ message: 'Product Service is up and running!' });
        
    } catch (error) {
        res.status(400).json(error);
    }
});

// Start User Service
app.listen(5002, () => {
    console.log('Product Service is running on port 5002');
});