import { createClient } from "redis";
import "dotenv/config"

export const redis = createClient({
    url: process.env.REDIS_URL
})

redis.connect()