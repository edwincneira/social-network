import { config } from "dotenv"
config();

export default {
  PORT: process.env.PORT || 3000,
  JWT_PATRON: process.env.JWT || "sshh",
  NAME_DB: process.env.NAME_DB,
  MONGO_URL: `mongodb://${process.env.MONGO_LOCAL}/${process.env.NAME_DB}`,
};