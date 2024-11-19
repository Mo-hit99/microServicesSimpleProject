import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express();

//// Route-to-target mapping
const proxyRoutes = {
    '/product': 'http://localhost:5002',
    '/user': 'http://localhost:5001',
};

// Apply proxy middleware for each route
for (const [route, target] of Object.entries(proxyRoutes)) {
    app.use(route, createProxyMiddleware({ target, changeOrigin: true }));
}
if (process.env.NODE_ENV === 'production') {
    console.log('Running in production mode');
} else {
    console.log('Running in development mode');
}
app.listen(5000, () => {
    console.log('http://localhost:5000');
});