const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.send('🚀 Hello from AWS Beanstalk + CodePipeline CI/CD!');
});

// Set port (Elastic Beanstalk uses PORT from env)
const port = process.env.PORT || 3000;

// Start the server and bind to 0.0.0.0 for external access
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${port}`);
});
