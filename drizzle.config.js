/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://AI-MOCKER_owner:bsmcCkvfD8H9@ep-ancient-queen-a5nwry2g.us-east-2.aws.neon.tech/AI-MOCKER?sslmode=require'
  }
};

