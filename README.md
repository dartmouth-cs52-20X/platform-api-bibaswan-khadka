# Platform API

Using express and mongodb I built a api to power lab4. The api runs on heroku at and has CRUD features to create, read, update and delete. 

[deployed url](https://apilab5.herokuapp.com/api)

## What Worked Well
I found this lab to be preety straightforward, and mongoose especially to be very smooth and intuitiuve. I was able to implement the create, read, update, and delete commands by simply calling mongoose commands. I did not have to tinker much at all. Mongoose had built in commands that did exactly what I wanted them to do. 
## What Didn't
I did the extra credit and implementing the tags as array was more time consuming than expected. I expected to be able to implement it just by changing the tags field to array, but I had to make several other changes such as split and join commands in the api server and the lab4 frontend. 

## Extra credit
1.  I changed the tags store to be an array rather than a string, that is split by whitespace.
2.  I added in a new field that shows which date the post was created.
3.  I also have a search feature. 
