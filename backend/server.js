// backend/server.js - Add monitoring
const appInsights = require('applicationinsights');

if (process.env.NODE_ENV === 'production') {
    appInsights.setup(process.env.APPINSIGHTS_CONNECTION_STRING)
        .setAutoCollectConsole(true)
        .start();
    
    const client = appInsights.defaultClient;
    
    // Track custom events
    app.use((req, res, next) => {
        client.trackRequest({
            name: `${req.method} ${req.url}`,
            url: req.url,
            duration: 0,
            resultCode: res.statusCode,
            success: res.statusCode < 400
        });
        next();
    });
}
