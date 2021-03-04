import redis


subscriber = redis.Redis(host = 'localhost', port = 6379)
channel = 'test'
p = subscriber.pubsub()

p.subscribe(channel)

while True:
	message = p.get_message()
	if message and not message['data'] == 1:
		message = message['data'].decode('utf-8')
		print(message)
		
