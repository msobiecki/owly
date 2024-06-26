import { CronJob } from "cron";

const cronWordDaily = new CronJob("* * * * *", () => {
  console.log("running a task every minute");
});

export default cronWordDaily;
