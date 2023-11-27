const express = require('express');
const app = express();
app.use(express.json());

const elements = [];

// Create an element
app.post('/elements', (req, res) => {
  const { name } = req.body;
  elements.push(name);
  res.status(201).json({ message: 'Element created successfully' });
});

// List all elements
app.get('/elements', (req, res) => {
  res.json(elements);
});

// Delete an element
app.delete('/elements/:name', (req, res) => {
  const { name } = req.params;
  const index = elements.indexOf(name);
  if (index !== -1) {
    elements.splice(index, 1);
    res.json({ message: 'Element deleted successfully' });
  } else {
    res.status(404).json({ message: 'Element not found' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
