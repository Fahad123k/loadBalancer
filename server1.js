const express = require('express');
const app1 = express();
const path = require('path')

// Handler method
const handlerFunction = num => (req, res) => {
    console.log("req here")
    return res.send('server 1')
}

// Only handle GET and POST requests
// Receive request and pass to handler method
app1.use(express.urlencoded());
app1.set('view engine', 'ejs')
// create a new folder for view
app1.set('views', path.join(__dirname, 'views'))

app1.get('/',function(req,res){
    return res.render('index',{
        server:"Airtel"
    })
})
app1.post('/SendOtp',function(req,res){
    return res.render('back')
})
app1.get('*', handlerFunction(1))


// Start server on PORT 3000
app1.listen(3000, err => {
    err ?
        console.log("Failed to listen on PORT 3000") :
        console.log("Application Server listening on PORT 3000");
});