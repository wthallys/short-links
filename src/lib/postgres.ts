import postgres from "postgres";
import "dotenv/config"

export const sql = postgres(String(process.env.POSTGRES_URL))
