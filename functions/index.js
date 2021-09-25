const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");

const stripe = require("stripe")(
  "sk_test_51HRgJ4IOyTm3HGfqMXuSpFttNP4rUqN3NUWwAhgFAD9E1xUcnItEwBNjfzWSod2olgtxS0lzh8giCLzV6rfDKr38007S7ii6lC"
);

//API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) =>
  response.status(200).send("hello world Julio")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved Boom!! for this amount>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-e2c5f/us-central1/api
