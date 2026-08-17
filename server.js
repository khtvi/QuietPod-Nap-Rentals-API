// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello API! Your server is running');
// });

// app.get('/profile', (req, res) => {
//     res.json({
//         name: "Khate Israel",
//         course: "BS Computer Science",
//         year: "4th Year",
//         school: "Sacred Heart College"
//     });
// });

// app.get('/skills', (req, res) => {
//     res.json({
//         skills: ["HTML", "CSS", "Javascript", "Flutter"]
//     });
// });

// app.get('/store-info', (req, res) => {
//     res.json({
//         store: "Aling Nena's Sari Sari Store",
//         isOpen: true,
//         hours: {
//             open: "6:00 AM",
//             close: "9:00 PM"
//         },
//         popularItems: [
//             "Skyflakes",
//             "CS Green Tea",
//             "Instant Pancit Canton"
//         ],
//         contactNumber: "0917-123-4567"
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`)
// });

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('QuietPod Nap Rentals API is running.');
});

app.get('/business-info', (req, res) => {
  res.json({
    name: "QuietPod Nap Rentals",
    tagline: "A quiet place to rest, whenever you need it",
    locations: 3,
    hours: {
        open: "7:00 AM",
        close: "10:00 PM"
    },
    contact: "0917-123-4567"
  });
});

app.get('/pods', (req, res) => {
  res.json([
    { 
        id: 1,
        location: "Main Library - 2nd Floor",
        status: "available",
        hourlyRate: 5 
    },
    { 
        id: 2,
        location: "Main Library - 2nd Floor",
        status: "occupied",
        hourlyRate: 5 
    },
    { 
        id: 3,
        location: "Student Union",
        status: "available",
        hourlyRate: 6 
    },
    { 
        id: 4,
        location: "Downtown Coworking Hub",
        status: "available",
        hourlyRate: 7 
    }
  ]);
});

app.get('/amenities', (req, res) => {
  res.json([
    "Active noise-canceling walls",
    "Adjustable memory foam bed",
    "Soft wake-up alarm light",
    "USB charging port",
    "Fresh linen every use"
  ]);
});

app.get('/pricing', (req, res) => {
  res.json({
    hourly: { 
        rate: 5, 
        minMinutes: 30 
    },
    dailyPass: { 
        rate: 20, 
        maxHours: 6 
    },
    membership: {
      monthly: { 
        price: 40, 
        includedHours: 10 
    },
      semester: { 
        price: 150, 
        includedHours: 45 
    }
    }
  });
});

app.get('/availability', (req, res) => {
  res.json({
    "Main Library - 2nd Floor": { 
        totalPods: 2, 
        available: 1 
    },
    "Student Union": { 
        totalPods: 1, 
        available: 1 
    },
    "Downtown Coworking Hub": { 
        totalPods: 1, 
        available: 1 
    }
  });
});

app.listen(PORT, () => {
  console.log(`QuietPod API running at http://localhost:${PORT}`);
});