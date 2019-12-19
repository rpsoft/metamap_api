var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var html = require("html");
var fs = require('fs');
var request = require("request");
const cheerio = require('cheerio');
const { Pool, Client } = require('pg')

const csv = require('csv-parser');
const fs = require('fs');

import {PORT} from "./config"
import {MM_EMAIL,MM_USERNAME,MM_PASSWORD} from "./config"

var cors = require('cors');

app.use(cors());

// use it before all route definitions
app.use(cors("*"));

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});
//
// function extractMMData (r) {
//   try{
//     r = JSON.parse(r)
//     r = r.AllDocuments[0].Document.Utterances.map(
//                     utterances => utterances.Phrases.map(
//                       phrases => phrases.Mappings.map(
//                         mappings => mappings.MappingCandidates.map(
//                           candidate => ({
//                                     CUI:candidate.CandidateCUI,
//                                     matchedText: candidate.CandidateMatched,
//                                     preferred: candidate.CandidatePreferred,
//                                     hasMSH: candidate.Sources.indexOf("MSH") > -1
//                                  })
//                                )
//                              )
//                            )
//                          ).flat().flat().flat()
//
//     // This removes duplicate cuis
//     r = r.reduce( (acc,el) => {if ( acc.cuis.indexOf(el.CUI) < 0 ){acc.cuis.push(el.CUI); acc.data.push(el)}; return acc }, {cuis: [], data: []} ).data
//     return r
//   } catch (e){
//     return []
//   }
// }
async function main(){
}

main();

app.get('/echo', async function(req,res){
  //
  // if ( req.query && req.query.docid && req.query.page ){
  //
  //   var filename = req.query.docid+"_"+req.query.page+".html"
  //
  //   var delprom = new Promise(function(resolve, reject) {
  //       fs.rename( tables_folder+'/'+ filename , tables_folder_deleted+'/'+ filename , (err) => {
  //         if (err) { reject("failed")} ;
  //         console.log('Move complete : '+filename);
  //         resolve("done");
  //       });
  //   });
  //
  //   await delprom;
  //   await refreshDocuments();
  //
  //   res.send("table deleted")
  // } else {
  //   res.send("table not deleted")
  // }
  res.send("echo!")
});

app.listen(PORT, function () {
  console.log('Express Server running on port '+PORT+' ' + new Date().toISOString());
});
