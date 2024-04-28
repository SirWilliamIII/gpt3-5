const express = require('express');

const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Serve HTML form for uploading images
app.get('/', (req, res) => {
    res.send(`
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="image" />
      <button type="submit">Upload</button>
    </form>
  `);
});

// Handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        console.log(req.file);
        // File is uploaded successfully
        res.send('Image uploaded!');
    } else {
        res.status(400).send('No file uploaded.');
    }
});


const data = [{
        id: 1,
        title: 'First blog post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 2,
        title: 'Second blog post',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];


// Handle blog posts
// This is just a simple example, you can replace it with your own blog post management logic
app.get('/posts', (req, res) => {
    // Return a JSON array of blog posts
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});