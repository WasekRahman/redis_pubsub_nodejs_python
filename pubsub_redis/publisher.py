import redis


client = redis.Redis(host = 'localhost', port = 6379)
message="start"
channel = "test"
while(message!="exit"):
	message = input("")
	send_message = "Python : " + message
	client.publish(channel, send_message)