const express = require('express');
const path = require('path'); // Import path module
const port = process.env.PORT || 8000
const app = express();

//app.use(express.static(path.join(__dirname,'public')))

// Serve static files from the 'public' directory

let posts = [
    {id:1,title:'Post One'},
    {id:2,title:'Post Two'},
    {id:3,title:'Post Three'}
]
app.get('/api/posts',(request,response)=>{
    try{
        response.status(200)
        response.json(posts)
        console.log(response.statusCode)
    }
    catch{
        response.status(400)
        console.log(response.statusCode)
    }
})

//Getting a single post
app.get('/api/posts/:id',(request , response)=>{
    try{
        response.status(200)
        console.log(response.statusCode)
        const id = Number(request.params.id)
        response.json(posts.filter(x=>x.id==id))
    }
    catch(err){
        response.status(500)
        console.log(`You got this ${err}` + response.statusCode)
    }
})
// Start the server
app.listen(port, () => {
    try{
        console.log(`Server Runnin on ${port}`)
    }
    catch(err){
        console.log(`Fix this ${err}`)
    }
});
