import { createClient } from 'redis';

const client = createClient({
	socket: {
		sessionTimeout: 10000,
		host: process.env.REDIS_HOST,
		port: parseInt(process.env.REDIS_PORT)
	},
});

const onRedisError = (err) => {
console.error(err);
};

client.on("error", onRedisError);

client.connect();

export { client };
