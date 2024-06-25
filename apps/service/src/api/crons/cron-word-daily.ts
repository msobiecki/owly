import cron from "node-cron";

const cronWordDaily = cron.schedule("* * * * *", () => {
  console.log("running a task every minute");
});

export default cronWordDaily;
