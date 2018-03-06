const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('combined'));



// app.use((req, res, next) => { 
//     //console.log("===request object:", Object.keys(req));
//     // console.log("===req.method: ", req.method)
//     // console.log("===req.statusCode: ", req.statusCode)
//     // console.log("===req.URL: ", req.url);

//     // morgan('', () => { 

//     // })

//     morgan('combined');



//     next();
// }); 
    


app.get('/', (req, res) => {
    // console.log("req: ", req);
    //console.log("res: ", res);

    res.send("hello world");
});


app.get('/news', (req, res) => {
    // console.log("req: ", req);
    //console.log("res: ", res);

    res.send("You reached the NEWS page! Congrats!");
});








app.listen(3000, function () { 
    console.log("server is listening on port 3000: Welcome home!");
})