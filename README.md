# chat
Simple Chat App Using Socket.io

"The WebSocket Protocol enables two-way communication between a client running untrusted code in a controlled environment to a remote host that has opted-in to communications from that code."

##Build web framework##
* Setup a simple HTML webpage
* Ensure Node.JS is installed
* Create ```package.json``` file
* ```npm-install --save expres@4.XX.X```
* create and run ```node index.js``` file

Running node index.js will make the http server listen on port 3000
[localhost:3000](http://localhost:3000)

In this case, for the sake of simplicity this Chat sends the message to everyone, including the sender.
On the client side when we capture a chat message event we’ll include it in the page. 
The total client-side JavaScript code now amounts to about 25 lines of code with room for improvements.
