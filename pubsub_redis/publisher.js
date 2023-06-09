const redis = require('redis');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = () => {
  rl.question('', async (message) => {
    if (message === 'exit') {
      return rl.close();
    }

    const publisher = redis.createClient();
    await publisher.connect();

    const channel = 'test';
    message = 'Nodejs : ' + message;

    publisher.publish(channel, message, () => {
      publisher.quit();
    });

    main();
  });
};

main();
