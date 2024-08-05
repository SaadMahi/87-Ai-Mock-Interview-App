/** @type { import("drizzle-kit").Config } */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-interview-mocker_owner:Sxi7jEgvD2LR@ep-aged-sky-a5hwmvfa.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require",
  },
};
