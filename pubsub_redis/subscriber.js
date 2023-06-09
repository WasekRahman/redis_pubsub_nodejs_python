var redis = require('redis');

const main = async () => {
  const subscriber = redis.createClient();
  await subscriber.connect();

  const channel = 'test';
  await subscriber.subscribe(channel, (msg) => console.log(msg));
};

main();
