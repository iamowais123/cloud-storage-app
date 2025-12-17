import pkg from "redis";
const { createClient } = pkg;
const SchemaFieldTypes = pkg?.SchemaFieldTypes || { TAG: "TAG" };

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  password: process.env.REDIS_PASSWORD,
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error:", err);
  process.exit(1);
});

(async () => {
  try {
    await redisClient.connect();
    console.log("Connected to Redis Cloud Successfully!");

    // Try creating index only if RediSearch is available
    try {
      if (redisClient.ft) {
        await redisClient.ft.create(
          "userIdIdx",
          {
            "$.userId": {
              type: SchemaFieldTypes.TAG,
              AS: "userId",
            },
          },
          {
            ON: "JSON",
            PREFIX: "session:",
          }
        );
        console.log("Redis Index 'userIdIdx' created successfully!");
      } else {
        console.log("RediSearch not enabled on this Redis Cloud instance, skipping index creation.");
      }
    } catch (err) {
      if (err.message.includes("Index already exists")) {
        console.log("Redis Index 'userIdIdx' already exists, skipping creation.");
      } else {
        console.error("Error creating Redis Index:", err);
      }
    }
  } catch (err) {
    console.error("Redis Connection Failed:", err);
    process.exit(1);
  }
})();

export default redisClient;
