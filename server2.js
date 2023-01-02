const express = require('express');
const app2 = express();
const path = require('path')
// Handler method
const handlerFunction = num => (req, res) => {
    const { method, url, headers, body } = req
    return res.send('server 2')
}

// Only handle GET and POST requests
// Receive request and pass to handler method


app2.use(express.urlencoded());
app2.set('view engine', 'ejs')
// create a new folder for view
app2.set('views', path.join(__dirname, 'views'))
app2.get('/',function(req,res){
    return res.render('index',{
        server:"Jio"
    })
})
app2.post('/SendOtp',function(req,res){
    return res.render('back')
})
app2.get('*', handlerFunction(1))


// Start server on PORT 3000
app2.listen(3001, err => {
    err ?
        console.log("Failed to listen on PORT 3001") :
        console.log("Application Server listening on PORT 3001");
});