# QuietPod Nap Rentals API

Ever been so exhausted at school or work that you just needed 20 minutes of actual quiet? That's the problem QuietPod solves. This is a small backend API for a business that rents out noise-canceling nap pods by the hour — think phone-booth-sized rooms with a bed, blackout walls, and a soft alarm to wake you up on time.

This API is what would sit behind a mobile app for the business. It doesn't have a database yet — everything below is realistic placeholder data — but it's built the way a real backend would be: separate, clearly named routes for each piece of information the app would need.

## How to run it

1. Make sure you have Node.js installed.
2. Open a terminal in this folder and run:
   ```
   npm install
   node server.js
   ```
3. You should see: `QuietPod API running at http://localhost:3000`
4. Open your browser and visit any of the routes below.

If you visit `http://localhost:3000/` by itself, you'll just get a welcome message pointing you to the real routes — that's normal, not an error.

## What each route gives you

### `/business-info`
The basics about the company — name, tagline, how many locations, hours, and contact info. Good for an "About" screen in an app.
```json
{
  "name": "QuietPod Nap Rentals",
  "tagline": "A quiet place to rest, whenever you need it",
  "locations": 3,
  "hours": "7:00 AM - 10:00 PM daily",
  "contact": "hello@quietpod.com"
}
```

### `/pods`
Every individual pod the business owns, where it's located, whether it's free or occupied right now, and what it costs per hour. This is the list an app would show when someone's trying to find a pod to book.
```json
[
  { "id": 1, "location": "Main Library - 2nd Floor", "status": "available", "hourlyRate": 5 },
  { "id": 2, "location": "Main Library - 2nd Floor", "status": "occupied", "hourlyRate": 5 }
]
```

### `/amenities`
What you actually get inside a pod when you rent one. Simple list, easy to display as bullet points in an app.
```json
[
  "Active noise-canceling walls",
  "Adjustable memory foam bed",
  "Soft wake-up alarm light"
]
```

### `/pricing`
This is the one with more structure to it, since nap pods aren't priced just one way. You can pay by the hour, grab a day pass, or get a membership — and memberships themselves split into monthly or semester options. That's why this data is "nested" instead of a flat list.
```json
{
  "hourly": { "rate": 5, "minMinutes": 30 },
  "dailyPass": { "rate": 20, "maxHours": 6 },
  "membership": {
    "monthly": { "price": 40, "includedHours": 10 },
    "semester": { "price": 150, "includedHours": 45 }
  }
}
```

### `/availability`
A quick snapshot of how many pods are free at each location right now, without having to scroll through the full `/pods` list.
```json
{
  "Main Library - 2nd Floor": { "totalPods": 2, "available": 1 },
  "Student Union": { "totalPods": 1, "available": 1 }
}
```

## Why it's built this way

Each route only returns one type of thing and has a name that says exactly what it does — no `/data1` or `/page2` guessing games. Three different data shapes are covered on purpose: a flat object (`/business-info`), plain arrays (`/pods`, `/amenities`), and nested objects (`/pricing`, `/availability`) — the same mix of shapes a real mobile app would need to pull from a real backend.
