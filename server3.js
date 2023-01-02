const express = require('express');
const app3 = express();
const path = require('path')

// Handler method
const handlerFunction = num => (req, res) => {
    const { method, url, headers, body } = req
    return res.send('server 3')
}

// Only handle GET and POST requests
// Receive request and pass to handler method

app3.use(express.urlencoded());
app3.set('view engine', 'ejs')
// create a new folder for view
app3.set('views', path.join(__dirname, 'views'))

app3.get('/',function(req,res){
    return res.render('index',{
        server:"Vi"
    })
})
app3.post('/SendOtp',function(req,res){
    return res.render('back')
})
app3.get('*', handlerFunction(3))


// Start server on PORT 3000
app3.listen(3002, err => {
    err ?
        console.log("Failed to listen on PORT 3002") :
        console.log("Application Server listening on PORT 3002");
});