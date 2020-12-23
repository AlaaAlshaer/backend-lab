backend lab  
Alaa Alsaher

when website conncite to server, with url localhost:8080, the root router handle this and send index.html (main html file),
in this file one button when it clicked, background post request will create and still wait to responce and send by requset json data ({email:"asd2017591@gmail.com"}) to the server.
the server resive request and handle it and append name:Alaa to json data to become ({email:"asd2017591@gmail.com", name:"Alaa}) and send it to client.
client resive it and display in window.

when conncite to server, with url localhost:8080/greeting/<anyname> the server responce by json data({message:"anyname"});