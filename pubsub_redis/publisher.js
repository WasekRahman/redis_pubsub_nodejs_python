const redis = require("redis");
const publisher = redis.createClient();
const prompt = require("prompt-sync")({ sigint: true });
var channel = "test";
var message = prompt();
message = "Nodejs : " + message;
publisher.publish(channel, message, () => {
  publisher.quit();
});
