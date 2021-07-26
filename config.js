import { config } from "dotenv"
config();

export default {
  PORT: process.env.PORT || 3000,
  JWT_PATRON: process.env.JWT || "sshh"
  //   MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  //   MONGODB_DATABASE_NAME: process.env.MONGODB_DATABASE_NAME || "social-network",
  //   MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${
  //     process.env.MONGODB_DATABASE_NAME|| "social-network"
  //   }`,
};