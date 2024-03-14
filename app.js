// app.js

const express = require  ('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect('mongodb+srv://maheswariu106:aTfDNgNYjI7tfeBy@cluster0.e0bhqhh.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 3000;
users[any];
// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.js

// Add these lines after the previous code in app.js

const Message = require('./models/Message');

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Listen for incoming chat messages
  socket.on('chat message', (data) => {
    console.log('Received message:', data);

    // Save the message to MongoDB
    const message = new Message({ user: data.user, text: data.message });
    message.save((err ) => {
      if (err) {
        console.error('Error saving message to database:', err);
      } else {
        console.log('Message saved to the database');
      }
    });

    // Broadcast the message to all connected clients
    io.emit('chat message', data);
  });

  // Listen for user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


// app.js

// Add these lines after the previous code in app.js

app.use(express.static('public'));