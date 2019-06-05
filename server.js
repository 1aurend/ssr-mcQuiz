/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// import './quiz.css'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _QuizSelector = __webpack_require__(11);

var _QuizSelector2 = _interopRequireDefault(_QuizSelector);

var _Go = __webpack_require__(12);

var _Go2 = _interopRequireDefault(_Go);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Start(props) {

  var quizData = void 0;
  if (false) {
    quizData = window.__INITIAL_DATA__;
  } else {
    quizData = props.staticContext.data;
  }

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      numQs = _useState2[0],
      setNum = _useState2[1];

  return _react2.default.createElement(
    'div',
    { id: 'pagegrid' },
    _react2.default.createElement(
      'div',
      { id: 'question' },
      _react2.default.createElement(
        'h2',
        null,
        'Flashcard App Prototype'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Choose a number of flashcards to try it.'
      )
    ),
    _react2.default.createElement(
      'div',
      { id: 'startinputs' },
      _react2.default.createElement(_QuizSelector2.default, { onChange: function onChange(e) {
          setNum(e.target.value);
        } }),
      _react2.default.createElement(_Go2.default, { num: numQs, data: quizData })
    )
  );
}

exports.default = Start;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Quiz = __webpack_require__(13);

var _Quiz2 = _interopRequireDefault(_Quiz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QuizContainer(props) {

  var theQs = [];
  console.log(props.location.state);

  for (var i = 0; i < props.location.state.numQs; i++) {
    theQs.push(props.location.state.data[i]);
  }

  console.log(theQs);

  return _react2.default.createElement(_Quiz2.default, { data: theQs });
}

exports.default = QuizContainer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


function makeQsReadable(idsArray, questions) {

  var readableQs = [];

  questions.map(function (question) {

    var update = question;

    for (var i = 0; i < update.fields.answers.length; i++) {
      for (var j = 0; j < idsArray.length; j++) {
        if (update.fields.answers[i] === idsArray[j].idA) {
          update.fields.answers[i] = idsArray[j].text;
          break;
        }
      }
    }

    for (var k = 0; k < update.fields.choices.length; k++) {
      for (var l = 0; l < idsArray.length; l++) {
        if (update.fields.choices[k] === idsArray[l].idC) {
          update.fields.choices[k] = idsArray[l].text;
          break;
        }
      }
    }

    readableQs.push(update);
  });

  return readableQs;
}

exports.default = makeQsReadable;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _makeqsreadable = __webpack_require__(4);

var _makeqsreadable2 = _interopRequireDefault(_makeqsreadable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matchIDs(questions, answers, choices, makeQsReadable) {

  var namestoAnswerIDs = [];
  var addChoiceIDs = [];

  answers.map(function (answer) {

    var match = {
      text: answer.fields.name,
      idA: answer.id
    };

    namestoAnswerIDs.push(match);
    return;
  });

  namestoAnswerIDs.map(function (item) {

    for (var i = 0; i < choices.length; i++) {
      if (choices[i].fields.name === item.text) {
        item = _extends({}, item, { idC: choices[i].id });
        addChoiceIDs.push(item);
      }
    }
    return;
  });

  return makeQsReadable(addChoiceIDs, questions);
}

exports.default = matchIDs;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _server = __webpack_require__(9);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(18);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _atfetch = __webpack_require__(19);

var _atfetch2 = _interopRequireDefault(_atfetch);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(22);

var _routes2 = _interopRequireDefault(_routes);

var _matchids = __webpack_require__(5);

var _matchids2 = _interopRequireDefault(_matchids);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static("public"));

app.get("*", function (req, res, next) {

  var reqRoute = _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};

  var data = reqRoute.needsData ? (0, _atfetch2.default)(_matchids2.default) : Promise.resolve();

  data.then(function (data) {

    var context = { data: data };

    var markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App2.default, null)
    ));

    res.send("\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <title>MC Quiz with SSR</title>\n            <script src=\"/bundle.js\" defer></script>\n            <script>window.__INITIAL_DATA__ = " + (0, _serializeJavascript2.default)(data) + "</script>\n          </head>\n          <body>\n            <div id='app'>" + markup + "</div>\n          </body>\n        </html>\n      ");
  }).catch(next);
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Start = __webpack_require__(2);

var _Start2 = _interopRequireDefault(_Start);

var _QuizContainer = __webpack_require__(3);

var _QuizContainer2 = _interopRequireDefault(_QuizContainer);

var _reactRouter = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {

  console.log(props.data);

  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { path: '/', exact: true, render: function render(props) {
        return _react2.default.createElement(_Start2.default, _extends({}, props, { data: props.data }));
      } }),
    _react2.default.createElement(_reactRouter.Route, { path: '/quiz', render: function render(props) {
        return _react2.default.createElement(_QuizContainer2.default, props);
      } })
  );
}

exports.default = App;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QuizSelector(props) {

  return _react2.default.createElement(
    'div',
    { id: 'selector' },
    _react2.default.createElement(
      'select',
      { onChange: props.onChange },
      _react2.default.createElement(
        'option',
        { value: '1' },
        '1'
      ),
      _react2.default.createElement(
        'option',
        { value: '2' },
        '2'
      ),
      _react2.default.createElement(
        'option',
        { value: '3' },
        '3'
      ),
      _react2.default.createElement(
        'option',
        { value: '4' },
        '4'
      ),
      _react2.default.createElement(
        'option',
        { value: '5' },
        '5'
      )
    )
  );
} //eventually other options can go in here

exports.default = QuizSelector;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Gosvg from 'react-svg-loader!./go.svg'


function Go(props) {

  console.log('here is props.num from Go ' + props.num);

  return _react2.default.createElement(
    'div',
    { id: 'go' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: {
          pathname: '/quiz',
          state: {
            numQs: props.num,
            data: props.data
          }
        }, style: { height: "3rem" } },
      'Go'
    )
  );
}

exports.default = Go;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// import './quiz.css'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Question = __webpack_require__(14);

var _Question2 = _interopRequireDefault(_Question);

var _Choice = __webpack_require__(15);

var _Choice2 = _interopRequireDefault(_Choice);

var _Results = __webpack_require__(16);

var _Results2 = _interopRequireDefault(_Results);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function Quiz(props) {

  console.log(props.data);
  console.log(props.data.length);
  console.log(props.data[0]);

  var _useState = (0, _react.useState)(props.data[0].fields),
      _useState2 = _slicedToArray(_useState, 2),
      currentQ = _useState2[0],
      nextQ = _useState2[1];

  var startTime = (0, _react.useRef)([Date.now()]);
  var clickTime = (0, _react.useRef)([]);
  var answeredCount = (0, _react.useRef)(0);
  var timesLog = (0, _react.useRef)([]);
  var responsesLog = (0, _react.useRef)([]);
  var inputs = (0, _react.useRef)([]);
  var average = (0, _react.useRef)(0);
  var correct = (0, _react.useRef)(0);

  function handleClick(choice) {

    var now = Date.now();

    Promise.resolve(inputs.current = [].concat(_toConsumableArray(inputs.current), [choice])).then(function () {
      if (currentQ.answers.length === inputs.current.length) {
        clickTime.current = [].concat(_toConsumableArray(clickTime.current), [now]);
        startTime.current = [].concat(_toConsumableArray(startTime.current), [now]);
        answeredCount.current = answeredCount.current + 1;
        responsesLog.current = [].concat(_toConsumableArray(responsesLog.current), [{ input: inputs.current, answer: currentQ.answers }]);
      }
    }).then(function () {
      if (currentQ.answers.length === inputs.current.length) {
        doMath();
      }
    }).then(function () {
      if (currentQ.answers.length === inputs.current.length && answeredCount.current < props.data.length) {
        inputs.current = [];
        nextQ(props.data[answeredCount.current].fields);
      }
    });
  }

  function doMath() {

    var time = (clickTime.current[clickTime.current.length - 1] - startTime.current[answeredCount.current - 1]) / 1000;
    console.log('math= ' + time);
    timesLog.current = [].concat(_toConsumableArray(timesLog.current), [time]);

    console.log('reponses so far: ' + JSON.stringify(responsesLog.current));
    if (JSON.stringify(responsesLog.current[responsesLog.current.length - 1].answer) === JSON.stringify(responsesLog.current[responsesLog.current.length - 1].input)) {
      correct.current = correct.current + 1;
      console.log('number correct = ' + correct.current);
    }

    if (answeredCount.current === props.data.length) {
      var mean = function mean(arr) {
        return arr.reduce(function (a, b) {
          return a + b;
        }, 0) / arr.length;
      };
      average.current = mean(timesLog.current);
      nextQ(null);
    }
  }

  if (answeredCount.current < props.data.length) {
    return _react2.default.createElement(
      'div',
      { id: 'pagegrid' },
      _react2.default.createElement(
        'div',
        { id: 'question' },
        _react2.default.createElement(_Question2.default, { question: currentQ.questionText })
      ),
      _react2.default.createElement(
        'div',
        { id: 'choices' },
        currentQ.choices.map(function (choice) {
          return _react2.default.createElement(_Choice2.default, { onClick: function onClick() {
              return handleClick(choice);
            }, choice: choice, key: choice });
        })
      )
    );
  } else {
    return _react2.default.createElement(
      'div',
      { id: 'pagegrid' },
      _react2.default.createElement(
        'div',
        { id: 'question' },
        _react2.default.createElement(
          'h2',
          null,
          'End of Quiz!'
        )
      ),
      _react2.default.createElement(
        'div',
        { id: 'results' },
        _react2.default.createElement(_Results2.default, { average: average.current, correct: correct.current, totalQs: props.data.length }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          _react2.default.createElement(
            'button',
            null,
            'Start Over'
          )
        )
      )
    );
  }
}

exports.default = Quiz;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Question(props) {

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'h2',
      { style: { margin: 'auto' } },
      props.question
    )
  );
}

exports.default = Question;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Choice(props) {

  return _react2.default.createElement(
    'button',
    { className: 'choicebutton', onClick: props.onClick },
    props.choice
  );
}

exports.default = Choice;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Results(props) {

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Your Results:'
    ),
    _react2.default.createElement(
      'p',
      null,
      props.correct,
      ' out of ',
      props.totalQs,
      ' correct'
    ),
    _react2.default.createElement(
      'p',
      null,
      props.average,
      ' seconds average per flashcard'
    )
  );
}

exports.default = Results;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var loadQuiz = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var gameLabBase, questions, choices, answers, Qs, As, Cs, quizData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        gameLabBase = new _airtable2.default({ apiKey: process.env.GAMELAB_AT_KEY }).base(process.env.GAMELAB_BASE_ID);
                        questions = [];
                        choices = [];
                        answers = [];

                        console.log('Fetching Quiz Data -----------------------');

                        Qs = gameLabBase('flashcardQs').select({
                            maxRecords: 100,
                            view: "Grid view"
                        }).eachPage(function page(records, fetchNextPage) {

                            records.forEach(function (record) {
                                console.log('Retrieved', record.get('questionText'));
                                questions.push(record._rawJson);
                            });
                            fetchNextPage();
                        }).then(function () {
                            return 'got Qs!';
                        });
                        As = gameLabBase('fcAnswers').select({
                            maxRecords: 100,
                            view: "Grid view"
                        }).eachPage(function page(records, fetchNextPage) {

                            records.forEach(function (record) {
                                console.log('Retrieved', record.get('name'));
                                answers.push(record._rawJson);
                            });
                            fetchNextPage();
                        }).then(function () {
                            return 'got As!';
                        });
                        Cs = gameLabBase('fcChoices').select({
                            maxRecords: 100,
                            view: "Grid view"
                        }).eachPage(function page(records, fetchNextPage) {

                            records.forEach(function (record) {
                                console.log('Retrieved', record.get('name'));
                                choices.push(record._rawJson);
                            });
                            fetchNextPage();
                        }).then(function () {
                            return 'got Cs!';
                        });
                        _context.t0 = console;
                        _context.next = 11;
                        return Qs;

                    case 11:
                        _context.t1 = _context.sent;

                        _context.t0.log.call(_context.t0, _context.t1);

                        _context.t2 = console;
                        _context.next = 16;
                        return As;

                    case 16:
                        _context.t3 = _context.sent;

                        _context.t2.log.call(_context.t2, _context.t3);

                        _context.t4 = console;
                        _context.next = 21;
                        return Cs;

                    case 21:
                        _context.t5 = _context.sent;

                        _context.t4.log.call(_context.t4, _context.t5);

                        quizData = (0, _matchids2.default)(questions, answers, choices, _makeqsreadable2.default);

                        console.log(JSON.stringify(quizData, null, 4));
                        return _context.abrupt('return', quizData);

                    case 26:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function loadQuiz() {
        return _ref.apply(this, arguments);
    };
}();

var _makeqsreadable = __webpack_require__(4);

var _makeqsreadable2 = _interopRequireDefault(_makeqsreadable);

var _matchids = __webpack_require__(5);

var _matchids2 = _interopRequireDefault(_matchids);

var _airtable = __webpack_require__(20);

var _airtable2 = _interopRequireDefault(_airtable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

__webpack_require__(21).config();

exports.default = loadQuiz;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("airtable");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Start = __webpack_require__(2);

var _Start2 = _interopRequireDefault(_Start);

var _QuizContainer = __webpack_require__(3);

var _QuizContainer2 = _interopRequireDefault(_QuizContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: '/',
  exact: true,
  component: _Start2.default,
  needsData: true
}, {
  path: '/quiz',
  exact: false,
  component: _QuizContainer2.default
}];

exports.default = routes;

/***/ })
/******/ ]);