const express = require('express');
const app = express();

// Serve static files only in production
if (process.env.NODE_ENV === 'production') {
  const clientPath = 'client/build';

  app.use(express.static(clientPath));

  app.get('*', (req, res) => {
    res.sendFile('/index.html', { root: clientPath });
  });
}

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
