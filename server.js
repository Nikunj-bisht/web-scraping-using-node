
const request = require("request-promise-core");
const cherio = require('cheerio');
const Table = require('cli-table');
//const fs = require(fs);
const axios = require("axios");
const got = require('got');

const json2csv = require('json2csv').Parser;
//var user = [];


//its  a  singleton class
Regexsimlifier.getinstance().checkemail(String mail)
// same you can use for others
Regexsimplifier.setpasslength(int len) // use this for password limit



const url = "https://www.popcornflix.com/pages/discover/d/movies";
// process.on('unhandledRejection', (reason, promise) => {
//    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
//    // Application specific logging, throwing an error, or other logic here
//  });

 (async()=>{

const config = {
    headers:{
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
     "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7"
    },gzip:true
    
   };
   const {data} = await axios.get(url,config);
//console.log(data);


   let $ = cherio.load(data);
  let title =$('div[class="thumbrow-item-box"]>a').text();


 // let rating =  $('div[class="ratingValue"]>strong>span').text().trim();
   
 console.log(title);

})();


// $('div[class="title_wrapper"]>h1').text()
// $('div[class="ratingValue"]>strong>span').text().trim();
//$('ul[class="thumbrow-list list-unstyled list-inline"]>li>div>div>div>div>a').attr('href')
