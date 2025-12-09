import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();
const PORT = 8002;

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const start = async () => {
  try {
    serve(
      {
        fetch: app.fetch,
        port: PORT,
      },
      (info) => {
        console.log(`Payment service is running on port ${PORT}`);
      }
    );
  } catch (err) {
    console.error("Error starting the payment service:", err);
    process.exit(1);
  }
};

start();
