let request = require('request');

// request('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(err, response, body){
//     let bodyJson = JSON.parse(body);
//     for (let i=0; i<bodyJson.length; i++) {
//         let randomQuote = bodyJson[i]['content'];
//         document.getElementById('quote').innerHTML = randomQuote;
//     }
// });

// After 5ms it will start if you want to start after lauching please uncomment above scenario 
setInterval(function(){
    request('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(err, response, body){
        let bodyJson = JSON.parse(body);
        for (let i=0; i<bodyJson.length; i++) {
            let randomQuote = bodyJson[0]['content'];
            document.getElementById('quote').innerHTML = randomQuote;
        }
    });
}, 5000)
