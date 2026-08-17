# QuietPod Nap Rentals API

A simple Express API for a noise-canceling nap pod rental business. Students and workers rent a pod by the hour to get real rest between classes or shifts.

## Running it

```
npm install
node server.js
```

Server runs at `http://localhost:3000`

## Endpoints

### `GET /business-info`
Basic info about the business.
```json
{
  "name": "QuietPod Nap Rentals",
  "tagline": "A quiet place to rest, whenever you need it",
  "locations": 3,
  "hours": "7:00 AM - 10:00 PM daily",
  "contact": "hello@quietpod.com"
}
```

### `GET /pods`
List of every pod unit, its location, current status, and hourly rate.
```json
[
  { "id": 1, "location": "Main Library - 2nd Floor", "status": "available", "hourlyRate": 5 },
  { "id": 2, "location": "Main Library - 2nd Floor", "status": "occupied", "hourlyRate": 5 }
]
```

### `GET /amenities`
List of what's included with every pod rental.
```json
[
  "Active noise-canceling walls",
  "Adjustable memory foam bed",
  "Soft wake-up alarm light"
]
```

### `GET /pricing`
Pricing broken into categories: hourly, daily pass, and membership tiers.
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

### `GET /availability`
Pod availability broken down by location.
```json
{
  "Main Library - 2nd Floor": { "totalPods": 2, "available": 1 },
  "Student Union": { "totalPods": 1, "available": 1 }
}
```
