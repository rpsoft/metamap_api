"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = require("./config");

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var html = require("html");

var fs = require('fs');

var request = require("request");

var cheerio = require('cheerio');

var _require = require('pg'),
    Pool = _require.Pool,
    Client = _require.Client;

var csv = require('csv-parser');

var fs = require('fs');

var cors = require('cors');

app.use(cors()); // use it before all route definitions

app.use(cors("*"));

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

Object.defineProperty(Array.prototype, 'flat', {
  value: function value() {
    var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return this.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) && depth > 1 ? toFlatten.flat(depth - 1) : toFlatten);
    }, []);
  }
}); //
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

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _main.apply(this, arguments);
}

main();
app.get('/echo',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
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
            res.send("echo!");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(_config.PORT, function () {
  console.log('Express Server running on port ' + _config.PORT + ' ' + new Date().toISOString());
});