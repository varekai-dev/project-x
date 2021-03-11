webpackHotUpdate_N_E("pages/casinos/[pid]",{

/***/ "./node_modules/bail/index.js":
/*!************************************!*\
  !*** ./node_modules/bail/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bail

function bail(err) {
  if (err) {
    throw err
  }
}


/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = value => {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
};


/***/ }),

/***/ "./node_modules/mdast-add-list-metadata/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-add-list-metadata/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var visitWithParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js");

function addListMetadata() {
  return function (ast) {
    visitWithParents(ast, 'list', function (listNode, parents) {
      var depth = 0, i, n;
      for (i = 0, n = parents.length; i < n; i++) {
        if (parents[i].type === 'list') depth += 1;
      }
      for (i = 0, n = listNode.children.length; i < n; i++) {
        var child = listNode.children[i];
        child.index = i;
        child.ordered = listNode.ordered;
      }
      listNode.depth = depth;
    });
    return ast;
  };
}

module.exports = addListMetadata;


/***/ }),

/***/ "./node_modules/mdast-util-from-markdown/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/mdast-util-from-markdown/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fromMarkdown

// These three are compiled away in the `dist/`

var toString = __webpack_require__(/*! mdast-util-to-string */ "./node_modules/mdast-util-to-string/index.js")
var assign = __webpack_require__(/*! micromark/dist/constant/assign */ "./node_modules/micromark/dist/constant/assign.js")
var own = __webpack_require__(/*! micromark/dist/constant/has-own-property */ "./node_modules/micromark/dist/constant/has-own-property.js")
var normalizeIdentifier = __webpack_require__(/*! micromark/dist/util/normalize-identifier */ "./node_modules/micromark/dist/util/normalize-identifier.js")
var safeFromInt = __webpack_require__(/*! micromark/dist/util/safe-from-int */ "./node_modules/micromark/dist/util/safe-from-int.js")
var parser = __webpack_require__(/*! micromark/dist/parse */ "./node_modules/micromark/dist/parse.js")
var preprocessor = __webpack_require__(/*! micromark/dist/preprocess */ "./node_modules/micromark/dist/preprocess.js")
var postprocess = __webpack_require__(/*! micromark/dist/postprocess */ "./node_modules/micromark/dist/postprocess.js")
var decode = __webpack_require__(/*! parse-entities/decode-entity */ "./node_modules/parse-entities/decode-entity.browser.js")
var stringifyPosition = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/index.js")

function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding
    encoding = undefined
  }

  return compiler(options)(
    postprocess(
      parser(options).document().write(preprocessor()(value, encoding, true))
    )
  )
}

// Note this compiler only understand complete buffering, not streaming.
function compiler(options) {
  var settings = options || {}
  var config = configure(
    {
      transforms: [],
      canContainEols: [
        'emphasis',
        'fragment',
        'heading',
        'paragraph',
        'strong'
      ],

      enter: {
        autolink: opener(link),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading),
        blockQuote: opener(blockQuote),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer,
        codeFencedFenceMeta: buffer,
        codeIndented: opener(codeFlow, buffer),
        codeText: opener(codeText, buffer),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition),
        definitionDestinationString: buffer,
        definitionLabelString: buffer,
        definitionTitleString: buffer,
        emphasis: opener(emphasis),
        hardBreakEscape: opener(hardBreak),
        hardBreakTrailing: opener(hardBreak),
        htmlFlow: opener(html, buffer),
        htmlFlowData: onenterdata,
        htmlText: opener(html, buffer),
        htmlTextData: onenterdata,
        image: opener(image),
        label: buffer,
        link: opener(link),
        listItem: opener(listItem),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list, onenterlistordered),
        listUnordered: opener(list),
        paragraph: opener(paragraph),
        reference: onenterreference,
        referenceString: buffer,
        resourceDestinationString: buffer,
        resourceTitleString: buffer,
        setextHeading: opener(heading),
        strong: opener(strong),
        thematicBreak: opener(thematicBreak)
      },

      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: onexitcharacterreferencevalue,
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    },

    settings.mdastExtensions || []
  )

  var data = {}

  return compile

  function compile(events) {
    var tree = {type: 'root', children: []}
    var stack = [tree]
    var tokenStack = []
    var listStack = []
    var index = -1
    var handler
    var listStart

    var context = {
      stack: stack,
      tokenStack: tokenStack,
      config: config,
      enter: enter,
      exit: exit,
      buffer: buffer,
      resume: resume,
      setData: setData,
      getData: getData
    }

    while (++index < events.length) {
      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (
        events[index][1].type === 'listOrdered' ||
        events[index][1].type === 'listUnordered'
      ) {
        if (events[index][0] === 'enter') {
          listStack.push(index)
        } else {
          listStart = listStack.pop(index)
          index = prepareList(events, listStart, index)
        }
      }
    }

    index = -1

    while (++index < events.length) {
      handler = config[events[index][0]]

      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          assign({sliceSerialize: events[index][2].sliceSerialize}, context),
          events[index][1]
        )
      }
    }

    if (tokenStack.length) {
      throw new Error(
        'Cannot close document, a token (`' +
          tokenStack[tokenStack.length - 1].type +
          '`, ' +
          stringifyPosition({
            start: tokenStack[tokenStack.length - 1].start,
            end: tokenStack[tokenStack.length - 1].end
          }) +
          ') is still open'
      )
    }

    // Figure out `root` position.
    tree.position = {
      start: point(
        events.length ? events[0][1].start : {line: 1, column: 1, offset: 0}
      ),

      end: point(
        events.length
          ? events[events.length - 2][1].end
          : {line: 1, column: 1, offset: 0}
      )
    }

    index = -1
    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree
    }

    return tree
  }

  function prepareList(events, start, length) {
    var index = start - 1
    var containerBalance = -1
    var listSpread = false
    var listItem
    var tailIndex
    var lineIndex
    var tailEvent
    var event
    var firstBlankLineIndex
    var atMarker

    while (++index <= length) {
      event = events[index]

      if (
        event[1].type === 'listUnordered' ||
        event[1].type === 'listOrdered' ||
        event[1].type === 'blockQuote'
      ) {
        if (event[0] === 'enter') {
          containerBalance++
        } else {
          containerBalance--
        }

        atMarker = undefined
      } else if (event[1].type === 'lineEndingBlank') {
        if (event[0] === 'enter') {
          if (
            listItem &&
            !atMarker &&
            !containerBalance &&
            !firstBlankLineIndex
          ) {
            firstBlankLineIndex = index
          }

          atMarker = undefined
        }
      } else if (
        event[1].type === 'linePrefix' ||
        event[1].type === 'listItemValue' ||
        event[1].type === 'listItemMarker' ||
        event[1].type === 'listItemPrefix' ||
        event[1].type === 'listItemPrefixWhitespace'
      ) {
        // Empty.
      } else {
        atMarker = undefined
      }

      if (
        (!containerBalance &&
          event[0] === 'enter' &&
          event[1].type === 'listItemPrefix') ||
        (containerBalance === -1 &&
          event[0] === 'exit' &&
          (event[1].type === 'listUnordered' ||
            event[1].type === 'listOrdered'))
      ) {
        if (listItem) {
          tailIndex = index
          lineIndex = undefined

          while (tailIndex--) {
            tailEvent = events[tailIndex]

            if (
              tailEvent[1].type === 'lineEnding' ||
              tailEvent[1].type === 'lineEndingBlank'
            ) {
              if (tailEvent[0] === 'exit') continue

              if (lineIndex) {
                events[lineIndex][1].type = 'lineEndingBlank'
                listSpread = true
              }

              tailEvent[1].type = 'lineEnding'
              lineIndex = tailIndex
            } else if (
              tailEvent[1].type === 'linePrefix' ||
              tailEvent[1].type === 'blockQuotePrefix' ||
              tailEvent[1].type === 'blockQuotePrefixWhitespace' ||
              tailEvent[1].type === 'blockQuoteMarker' ||
              tailEvent[1].type === 'listItemIndent'
            ) {
              // Empty
            } else {
              break
            }
          }

          if (
            firstBlankLineIndex &&
            (!lineIndex || firstBlankLineIndex < lineIndex)
          ) {
            listItem._spread = true
          }

          // Fix position.
          listItem.end = point(
            lineIndex ? events[lineIndex][1].start : event[1].end
          )

          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]])
          index++
          length++
        }

        // Create a new list item.
        if (event[1].type === 'listItemPrefix') {
          listItem = {
            type: 'listItem',
            _spread: false,
            start: point(event[1].start)
          }

          events.splice(index, 0, ['enter', listItem, event[2]])
          index++
          length++
          firstBlankLineIndex = undefined
          atMarker = true
        }
      }
    }

    events[start][1]._spread = listSpread
    return length
  }

  function setData(key, value) {
    data[key] = value
  }

  function getData(key) {
    return data[key]
  }

  function point(d) {
    return {line: d.line, column: d.column, offset: d.offset}
  }

  function opener(create, and) {
    return open

    function open(token) {
      enter.call(this, create(token), token)
      if (and) and.call(this, token)
    }
  }

  function buffer() {
    this.stack.push({type: 'fragment', children: []})
  }

  function enter(node, token) {
    this.stack[this.stack.length - 1].children.push(node)
    this.stack.push(node)
    this.tokenStack.push(token)
    node.position = {start: point(token.start)}
    return node
  }

  function closer(and) {
    return close

    function close(token) {
      if (and) and.call(this, token)
      exit.call(this, token)
    }
  }

  function exit(token) {
    var node = this.stack.pop()
    var open = this.tokenStack.pop()

    if (!open) {
      throw new Error(
        'Cannot close `' +
          token.type +
          '` (' +
          stringifyPosition({start: token.start, end: token.end}) +
          '): it’s not open'
      )
    } else if (open.type !== token.type) {
      throw new Error(
        'Cannot close `' +
          token.type +
          '` (' +
          stringifyPosition({start: token.start, end: token.end}) +
          '): a different token (`' +
          open.type +
          '`, ' +
          stringifyPosition({start: open.start, end: open.end}) +
          ') is open'
      )
    }

    node.position.end = point(token.end)
    return node
  }

  function resume() {
    return toString(this.stack.pop())
  }

  //
  // Handlers.
  //

  function onenterlistordered() {
    setData('expectingFirstListItemValue', true)
  }

  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      this.stack[this.stack.length - 2].start = parseInt(
        this.sliceSerialize(token),
        10
      )

      setData('expectingFirstListItemValue')
    }
  }

  function onexitcodefencedfenceinfo() {
    var data = this.resume()
    this.stack[this.stack.length - 1].lang = data
  }

  function onexitcodefencedfencemeta() {
    var data = this.resume()
    this.stack[this.stack.length - 1].meta = data
  }

  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return
    this.buffer()
    setData('flowCodeInside', true)
  }

  function onexitcodefenced() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data.replace(
      /^(\r?\n|\r)|(\r?\n|\r)$/g,
      ''
    )

    setData('flowCodeInside')
  }

  function onexitcodeindented() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    var label = this.resume()
    this.stack[this.stack.length - 1].label = label
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
  }

  function onexitdefinitiontitlestring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].title = data
  }

  function onexitdefinitiondestinationstring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].url = data
  }

  function onexitatxheadingsequence(token) {
    if (!this.stack[this.stack.length - 1].depth) {
      this.stack[this.stack.length - 1].depth = this.sliceSerialize(
        token
      ).length
    }
  }

  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true)
  }

  function onexitsetextheadinglinesequence(token) {
    this.stack[this.stack.length - 1].depth =
      this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2
  }

  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding')
  }

  function onenterdata(token) {
    var siblings = this.stack[this.stack.length - 1].children
    var tail = siblings[siblings.length - 1]

    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text()
      tail.position = {start: point(token.start)}
      this.stack[this.stack.length - 1].children.push(tail)
    }

    this.stack.push(tail)
  }

  function onexitdata(token) {
    var tail = this.stack.pop()
    tail.value += this.sliceSerialize(token)
    tail.position.end = point(token.end)
  }

  function onexitlineending(token) {
    var context = this.stack[this.stack.length - 1]

    // If we’re at a hard break, include the line ending in there.
    if (getData('atHardBreak')) {
      context.children[context.children.length - 1].position.end = point(
        token.end
      )

      setData('atHardBreak')
      return
    }

    if (
      !getData('setextHeadingSlurpLineEnding') &&
      config.canContainEols.indexOf(context.type) > -1
    ) {
      onenterdata.call(this, token)
      onexitdata.call(this, token)
    }
  }

  function onexithardbreak() {
    setData('atHardBreak', true)
  }

  function onexithtmlflow() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexithtmltext() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitcodetext() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitlink() {
    var context = this.stack[this.stack.length - 1]

    // To do: clean.
    if (getData('inReference')) {
      context.type += 'Reference'
      context.referenceType = getData('referenceType') || 'shortcut'
      delete context.url
      delete context.title
    } else {
      delete context.identifier
      delete context.label
      delete context.referenceType
    }

    setData('referenceType')
  }

  function onexitimage() {
    var context = this.stack[this.stack.length - 1]

    // To do: clean.
    if (getData('inReference')) {
      context.type += 'Reference'
      context.referenceType = getData('referenceType') || 'shortcut'
      delete context.url
      delete context.title
    } else {
      delete context.identifier
      delete context.label
      delete context.referenceType
    }

    setData('referenceType')
  }

  function onexitlabeltext(token) {
    this.stack[this.stack.length - 2].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
  }

  function onexitlabel() {
    var fragment = this.stack[this.stack.length - 1]
    var value = this.resume()

    this.stack[this.stack.length - 1].label = value

    // Assume a reference.
    setData('inReference', true)

    if (this.stack[this.stack.length - 1].type === 'link') {
      this.stack[this.stack.length - 1].children = fragment.children
    } else {
      this.stack[this.stack.length - 1].alt = value
    }
  }

  function onexitresourcedestinationstring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].url = data
  }

  function onexitresourcetitlestring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].title = data
  }

  function onexitresource() {
    setData('inReference')
  }

  function onenterreference() {
    setData('referenceType', 'collapsed')
  }

  function onexitreferencestring(token) {
    var label = this.resume()
    this.stack[this.stack.length - 1].label = label
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
    setData('referenceType', 'full')
  }

  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type)
  }

  function onexitcharacterreferencevalue(token) {
    var data = this.sliceSerialize(token)
    var type = getData('characterReferenceType')
    var value
    var tail

    if (type) {
      value = safeFromInt(
        data,
        type === 'characterReferenceMarkerNumeric' ? 10 : 16
      )

      setData('characterReferenceType')
    } else {
      value = decode(data)
    }

    tail = this.stack.pop()
    tail.value += value
    tail.position.end = point(token.end)
  }

  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token)
    this.stack[this.stack.length - 1].url = this.sliceSerialize(token)
  }

  function onexitautolinkemail(token) {
    onexitdata.call(this, token)
    this.stack[this.stack.length - 1].url =
      'mailto:' + this.sliceSerialize(token)
  }

  //
  // Creaters.
  //

  function blockQuote() {
    return {type: 'blockquote', children: []}
  }

  function codeFlow() {
    return {type: 'code', lang: null, meta: null, value: ''}
  }

  function codeText() {
    return {type: 'inlineCode', value: ''}
  }

  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    }
  }

  function emphasis() {
    return {type: 'emphasis', children: []}
  }

  function heading() {
    return {type: 'heading', depth: undefined, children: []}
  }

  function hardBreak() {
    return {type: 'break'}
  }

  function html() {
    return {type: 'html', value: ''}
  }

  function image() {
    return {type: 'image', title: null, url: '', alt: null}
  }

  function link() {
    return {type: 'link', title: null, url: '', children: []}
  }

  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      spread: token._spread,
      children: []
    }
  }

  function listItem(token) {
    return {
      type: 'listItem',
      spread: token._spread,
      checked: null,
      children: []
    }
  }

  function paragraph() {
    return {type: 'paragraph', children: []}
  }

  function strong() {
    return {type: 'strong', children: []}
  }

  function text() {
    return {type: 'text', value: ''}
  }

  function thematicBreak() {
    return {type: 'thematicBreak'}
  }
}

function configure(config, extensions) {
  var index = -1

  while (++index < extensions.length) {
    extension(config, extensions[index])
  }

  return config
}

function extension(config, extension) {
  var key
  var left

  for (key in extension) {
    left = own.call(config, key) ? config[key] : (config[key] = {})

    if (key === 'canContainEols' || key === 'transforms') {
      config[key] = [].concat(left, extension[key])
    } else {
      Object.assign(left, extension[key])
    }
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-from-markdown/index.js":
/*!********************************************************!*\
  !*** ./node_modules/mdast-util-from-markdown/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist */ "./node_modules/mdast-util-from-markdown/dist/index.js")


/***/ }),

/***/ "./node_modules/mdast-util-to-string/index.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-string/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toString

// Get the text content of a node.
// Prefer the node’s plain-text fields, otherwise serialize its children,
// and if the given value is an array, serialize the nodes in it.
function toString(node) {
  return (
    (node &&
      (node.value ||
        node.alt ||
        node.title ||
        ('children' in node && all(node.children)) ||
        ('length' in node && all(node)))) ||
    ''
  )
}

function all(values) {
  var result = []
  var index = -1

  while (++index < values.length) {
    result[index] = toString(values[index])
  }

  return result.join('')
}


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-alpha.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-alpha.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiAlpha = regexCheck(/[A-Za-z]/)

module.exports = asciiAlpha


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-alphanumeric.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-alphanumeric.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/)

module.exports = asciiAlphanumeric


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-atext.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-atext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/)

module.exports = asciiAtext


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-control.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-control.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: EOF is seen as ASCII control here, because `null < 32 == true`.
function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code < 32 || code === 127
  )
}

module.exports = asciiControl


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-digit.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-digit.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiDigit = regexCheck(/\d/)

module.exports = asciiDigit


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-hex-digit.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-hex-digit.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiHexDigit = regexCheck(/[\dA-Fa-f]/)

module.exports = asciiHexDigit


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-punctuation.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-punctuation.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/)

module.exports = asciiPunctuation


/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js":
/*!********************************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-line-ending-or-space.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function markdownLineEndingOrSpace(code) {
  return code < 0 || code === 32
}

module.exports = markdownLineEndingOrSpace


/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-line-ending.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-line-ending.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function markdownLineEnding(code) {
  return code < -2
}

module.exports = markdownLineEnding


/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-space.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-space.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32
}

module.exports = markdownSpace


/***/ }),

/***/ "./node_modules/micromark/dist/character/unicode-punctuation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/unicode-punctuation.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unicodePunctuationRegex = __webpack_require__(/*! ../constant/unicode-punctuation-regex.js */ "./node_modules/micromark/dist/constant/unicode-punctuation-regex.js")
var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

// In fact adds to the bundle size.

var unicodePunctuation = regexCheck(unicodePunctuationRegex)

module.exports = unicodePunctuation


/***/ }),

/***/ "./node_modules/micromark/dist/character/unicode-whitespace.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/unicode-whitespace.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexCheck = __webpack_require__(/*! ../util/regex-check.js */ "./node_modules/micromark/dist/util/regex-check.js")

var unicodeWhitespace = regexCheck(/\s/)

module.exports = unicodeWhitespace


/***/ }),

/***/ "./node_modules/micromark/dist/constant/assign.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/constant/assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = Object.assign

module.exports = assign


/***/ }),

/***/ "./node_modules/micromark/dist/constant/from-char-code.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/from-char-code.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fromCharCode = String.fromCharCode

module.exports = fromCharCode


/***/ }),

/***/ "./node_modules/micromark/dist/constant/has-own-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/has-own-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty

module.exports = own


/***/ }),

/***/ "./node_modules/micromark/dist/constant/html-block-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/html-block-names.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.
var basics = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
]

module.exports = basics


/***/ }),

/***/ "./node_modules/micromark/dist/constant/html-raw-names.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/html-raw-names.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.
var raws = ['pre', 'script', 'style', 'textarea']

module.exports = raws


/***/ }),

/***/ "./node_modules/micromark/dist/constant/splice.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/constant/splice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var splice = [].splice

module.exports = splice


/***/ }),

/***/ "./node_modules/micromark/dist/constant/unicode-punctuation-regex.js":
/*!***************************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/unicode-punctuation-regex.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
var unicodePunctuation = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/

module.exports = unicodePunctuation


/***/ }),

/***/ "./node_modules/micromark/dist/constructs.js":
/*!***************************************************!*\
  !*** ./node_modules/micromark/dist/constructs.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {value: true})

var text$1 = __webpack_require__(/*! ./initialize/text.js */ "./node_modules/micromark/dist/initialize/text.js")
var attention = __webpack_require__(/*! ./tokenize/attention.js */ "./node_modules/micromark/dist/tokenize/attention.js")
var autolink = __webpack_require__(/*! ./tokenize/autolink.js */ "./node_modules/micromark/dist/tokenize/autolink.js")
var blockQuote = __webpack_require__(/*! ./tokenize/block-quote.js */ "./node_modules/micromark/dist/tokenize/block-quote.js")
var characterEscape = __webpack_require__(/*! ./tokenize/character-escape.js */ "./node_modules/micromark/dist/tokenize/character-escape.js")
var characterReference = __webpack_require__(/*! ./tokenize/character-reference.js */ "./node_modules/micromark/dist/tokenize/character-reference.js")
var codeFenced = __webpack_require__(/*! ./tokenize/code-fenced.js */ "./node_modules/micromark/dist/tokenize/code-fenced.js")
var codeIndented = __webpack_require__(/*! ./tokenize/code-indented.js */ "./node_modules/micromark/dist/tokenize/code-indented.js")
var codeText = __webpack_require__(/*! ./tokenize/code-text.js */ "./node_modules/micromark/dist/tokenize/code-text.js")
var definition = __webpack_require__(/*! ./tokenize/definition.js */ "./node_modules/micromark/dist/tokenize/definition.js")
var hardBreakEscape = __webpack_require__(/*! ./tokenize/hard-break-escape.js */ "./node_modules/micromark/dist/tokenize/hard-break-escape.js")
var headingAtx = __webpack_require__(/*! ./tokenize/heading-atx.js */ "./node_modules/micromark/dist/tokenize/heading-atx.js")
var htmlFlow = __webpack_require__(/*! ./tokenize/html-flow.js */ "./node_modules/micromark/dist/tokenize/html-flow.js")
var htmlText = __webpack_require__(/*! ./tokenize/html-text.js */ "./node_modules/micromark/dist/tokenize/html-text.js")
var labelEnd = __webpack_require__(/*! ./tokenize/label-end.js */ "./node_modules/micromark/dist/tokenize/label-end.js")
var labelStartImage = __webpack_require__(/*! ./tokenize/label-start-image.js */ "./node_modules/micromark/dist/tokenize/label-start-image.js")
var labelStartLink = __webpack_require__(/*! ./tokenize/label-start-link.js */ "./node_modules/micromark/dist/tokenize/label-start-link.js")
var lineEnding = __webpack_require__(/*! ./tokenize/line-ending.js */ "./node_modules/micromark/dist/tokenize/line-ending.js")
var list = __webpack_require__(/*! ./tokenize/list.js */ "./node_modules/micromark/dist/tokenize/list.js")
var setextUnderline = __webpack_require__(/*! ./tokenize/setext-underline.js */ "./node_modules/micromark/dist/tokenize/setext-underline.js")
var thematicBreak = __webpack_require__(/*! ./tokenize/thematic-break.js */ "./node_modules/micromark/dist/tokenize/thematic-break.js")

var document = {
  42: list,
  // Asterisk
  43: list,
  // Plus sign
  45: list,
  // Dash
  48: list,
  // 0
  49: list,
  // 1
  50: list,
  // 2
  51: list,
  // 3
  52: list,
  // 4
  53: list,
  // 5
  54: list,
  // 6
  55: list,
  // 7
  56: list,
  // 8
  57: list,
  // 9
  62: blockQuote // Greater than
}
var contentInitial = {
  91: definition // Left square bracket
}
var flowInitial = {
  '-2': codeIndented,
  // Horizontal tab
  '-1': codeIndented,
  // Virtual space
  32: codeIndented // Space
}
var flow = {
  35: headingAtx,
  // Number sign
  42: thematicBreak,
  // Asterisk
  45: [setextUnderline, thematicBreak],
  // Dash
  60: htmlFlow,
  // Less than
  61: setextUnderline,
  // Equals to
  95: thematicBreak,
  // Underscore
  96: codeFenced,
  // Grave accent
  126: codeFenced // Tilde
}
var string = {
  38: characterReference,
  // Ampersand
  92: characterEscape // Backslash
}
var text = {
  '-5': lineEnding,
  // Carriage return
  '-4': lineEnding,
  // Line feed
  '-3': lineEnding,
  // Carriage return + line feed
  33: labelStartImage,
  // Exclamation mark
  38: characterReference,
  // Ampersand
  42: attention,
  // Asterisk
  60: [autolink, htmlText],
  // Less than
  91: labelStartLink,
  // Left square bracket
  92: [hardBreakEscape, characterEscape],
  // Backslash
  93: labelEnd,
  // Right square bracket
  95: attention,
  // Underscore
  96: codeText // Grave accent
}
var insideSpan = {
  null: [attention, text$1.resolver]
}
var disable = {
  null: []
}

exports.contentInitial = contentInitial
exports.disable = disable
exports.document = document
exports.flow = flow
exports.flowInitial = flowInitial
exports.insideSpan = insideSpan
exports.string = string
exports.text = text


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/content.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/content.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {value: true})

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var factorySpace = __webpack_require__(/*! ../tokenize/factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var tokenize = initializeContent

function initializeContent(effects) {
  var contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  )
  var previous
  return contentStart

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return factorySpace(effects, contentStart, 'linePrefix')
  }

  function paragraphInitial(code) {
    effects.enter('paragraph')
    return lineStart(code)
  }

  function lineStart(code) {
    var token = effects.enter('chunkText', {
      contentType: 'text',
      previous: previous
    })

    if (previous) {
      previous.next = token
    }

    previous = token
    return data(code)
  }

  function data(code) {
    if (code === null) {
      effects.exit('chunkText')
      effects.exit('paragraph')
      effects.consume(code)
      return
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      effects.exit('chunkText')
      return lineStart
    } // Data.

    effects.consume(code)
    return data
  }
}

exports.tokenize = tokenize


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/document.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/document.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {value: true})

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var factorySpace = __webpack_require__(/*! ../tokenize/factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var partialBlankLine = __webpack_require__(/*! ../tokenize/partial-blank-line.js */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")

var tokenize = initializeDocument
var containerConstruct = {
  tokenize: tokenizeContainer
}
var lazyFlowConstruct = {
  tokenize: tokenizeLazyFlow
}

function initializeDocument(effects) {
  var self = this
  var stack = []
  var continued = 0
  var inspectConstruct = {
    tokenize: tokenizeInspect,
    partial: true
  }
  var inspectResult
  var childFlow
  var childToken
  return start

  function start(code) {
    if (continued < stack.length) {
      self.containerState = stack[continued][1]
      return effects.attempt(
        stack[continued][0].continuation,
        documentContinue,
        documentContinued
      )(code)
    }

    return documentContinued(code)
  }

  function documentContinue(code) {
    continued++
    return start(code)
  }

  function documentContinued(code) {
    // If we’re in a concrete construct (such as when expecting another line of
    // HTML, or we resulted in lazy content), we can immediately start flow.
    if (inspectResult && inspectResult.flowContinue) {
      return flowStart(code)
    }

    self.interrupt =
      childFlow &&
      childFlow.currentConstruct &&
      childFlow.currentConstruct.interruptible
    self.containerState = {}
    return effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code)
  }

  function containerContinue(code) {
    stack.push([self.currentConstruct, self.containerState])
    self.containerState = undefined
    return documentContinued(code)
  }

  function flowStart(code) {
    if (code === null) {
      exitContainers(0, true)
      effects.consume(code)
      return
    }

    childFlow = childFlow || self.parser.flow(self.now())
    effects.enter('chunkFlow', {
      contentType: 'flow',
      previous: childToken,
      _tokenizer: childFlow
    })
    return flowContinue(code)
  }

  function flowContinue(code) {
    if (code === null) {
      continueFlow(effects.exit('chunkFlow'))
      return flowStart(code)
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      continueFlow(effects.exit('chunkFlow'))
      return effects.check(inspectConstruct, documentAfterPeek)
    }

    effects.consume(code)
    return flowContinue
  }

  function documentAfterPeek(code) {
    exitContainers(
      inspectResult.continued,
      inspectResult && inspectResult.flowEnd
    )
    continued = 0
    return start(code)
  }

  function continueFlow(token) {
    if (childToken) childToken.next = token
    childToken = token
    childFlow.lazy = inspectResult && inspectResult.lazy
    childFlow.defineSkip(token.start)
    childFlow.write(self.sliceStream(token))
  }

  function exitContainers(size, end) {
    var index = stack.length // Close the flow.

    if (childFlow && end) {
      childFlow.write([null])
      childToken = childFlow = undefined
    } // Exit open containers.

    while (index-- > size) {
      self.containerState = stack[index][1]
      stack[index][0].exit.call(self, effects)
    }

    stack.length = size
  }

  function tokenizeInspect(effects, ok) {
    var subcontinued = 0
    inspectResult = {}
    return inspectStart

    function inspectStart(code) {
      if (subcontinued < stack.length) {
        self.containerState = stack[subcontinued][1]
        return effects.attempt(
          stack[subcontinued][0].continuation,
          inspectContinue,
          inspectLess
        )(code)
      } // If we’re continued but in a concrete flow, we can’t have more
      // containers.

      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        inspectResult.flowContinue = true
        return inspectDone(code)
      }

      self.interrupt =
        childFlow.currentConstruct && childFlow.currentConstruct.interruptible
      self.containerState = {}
      return effects.attempt(
        containerConstruct,
        inspectFlowEnd,
        inspectDone
      )(code)
    }

    function inspectContinue(code) {
      subcontinued++
      return self.containerState._closeFlow
        ? inspectFlowEnd(code)
        : inspectStart(code)
    }

    function inspectLess(code) {
      if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
        // Maybe another container?
        self.containerState = {}
        return effects.attempt(
          containerConstruct,
          inspectFlowEnd, // Maybe flow, or a blank line?
          effects.attempt(
            lazyFlowConstruct,
            inspectFlowEnd,
            effects.check(partialBlankLine, inspectFlowEnd, inspectLazy)
          )
        )(code)
      } // Otherwise we’re interrupting.

      return inspectFlowEnd(code)
    }

    function inspectLazy(code) {
      // Act as if all containers are continued.
      subcontinued = stack.length
      inspectResult.lazy = true
      inspectResult.flowContinue = true
      return inspectDone(code)
    } // We’re done with flow if we have more containers, or an interruption.

    function inspectFlowEnd(code) {
      inspectResult.flowEnd = true
      return inspectDone(code)
    }

    function inspectDone(code) {
      inspectResult.continued = subcontinued
      self.interrupt = self.containerState = undefined
      return ok(code)
    }
  }
}

function tokenizeContainer(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    'linePrefix',
    this.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : 4
  )
}

function tokenizeLazyFlow(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.lazy(this.parser.constructs.flow, ok, nok),
    'linePrefix',
    this.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : 4
  )
}

exports.tokenize = tokenize


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/flow.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/flow.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {value: true})

var content = __webpack_require__(/*! ../tokenize/content.js */ "./node_modules/micromark/dist/tokenize/content.js")
var factorySpace = __webpack_require__(/*! ../tokenize/factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var partialBlankLine = __webpack_require__(/*! ../tokenize/partial-blank-line.js */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")

var tokenize = initializeFlow

function initializeFlow(effects) {
  var self = this
  var initial = effects.attempt(
    // Try to parse a blank line.
    partialBlankLine,
    atBlankEnding, // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content, afterConstruct)
        ),
        'linePrefix'
      )
    )
  )
  return initial

  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEndingBlank')
    effects.consume(code)
    effects.exit('lineEndingBlank')
    self.currentConstruct = undefined
    return initial
  }

  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    self.currentConstruct = undefined
    return initial
  }
}

exports.tokenize = tokenize


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/text.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/text.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {value: true})

var assign = __webpack_require__(/*! ../constant/assign.js */ "./node_modules/micromark/dist/constant/assign.js")
var shallow = __webpack_require__(/*! ../util/shallow.js */ "./node_modules/micromark/dist/util/shallow.js")

var text = initializeFactory('text')
var string = initializeFactory('string')
var resolver = {
  resolveAll: createResolver()
}

function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === 'text' ? resolveAllLineSuffixes : undefined
    )
  }

  function initializeText(effects) {
    var self = this
    var constructs = this.parser.constructs[field]
    var text = effects.attempt(constructs, start, notText)
    return start

    function start(code) {
      return atBreak(code) ? text(code) : notText(code)
    }

    function notText(code) {
      if (code === null) {
        effects.consume(code)
        return
      }

      effects.enter('data')
      effects.consume(code)
      return data
    }

    function data(code) {
      if (atBreak(code)) {
        effects.exit('data')
        return text(code)
      } // Data.

      effects.consume(code)
      return data
    }

    function atBreak(code) {
      var list = constructs[code]
      var index = -1

      if (code === null) {
        return true
      }

      if (list) {
        while (++index < list.length) {
          if (
            !list[index].previous ||
            list[index].previous.call(self, self.previous)
          ) {
            return true
          }
        }
      }
    }
  }
}

function createResolver(extraResolver) {
  return resolveAllText

  function resolveAllText(events, context) {
    var index = -1
    var enter // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.

    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === 'data') {
          enter = index
          index++
        }
      } else if (!events[index] || events[index][1].type !== 'data') {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end
          events.splice(enter + 2, index - enter - 2)
          index = enter + 2
        }

        enter = undefined
      }
    }

    return extraResolver ? extraResolver(events, context) : events
  }
} // A rather ugly set of instructions which again looks at chunks in the input
// stream.
// The reason to do this here is that it is *much* faster to parse in reverse.
// And that we can’t hook into `null` to split the line suffix before an EOF.
// To do: figure out if we can make this into a clean utility, or even in core.
// As it will be useful for GFMs literal autolink extension (and maybe even
// tables?)

function resolveAllLineSuffixes(events, context) {
  var eventIndex = -1
  var chunks
  var data
  var chunk
  var index
  var bufferIndex
  var size
  var tabs
  var token

  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length ||
        events[eventIndex][1].type === 'lineEnding') &&
      events[eventIndex - 1][1].type === 'data'
    ) {
      data = events[eventIndex - 1][1]
      chunks = context.sliceStream(data)
      index = chunks.length
      bufferIndex = -1
      size = 0
      tabs = undefined

      while (index--) {
        chunk = chunks[index]

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length

          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++
            bufferIndex--
          }

          if (bufferIndex) break
          bufferIndex = -1
        } // Number
        else if (chunk === -2) {
          tabs = true
          size++
        } else if (chunk === -1);
        else {
          // Replacement character, exit.
          index++
          break
        }
      }

      if (size) {
        token = {
          type:
            eventIndex === events.length || tabs || size < 2
              ? 'lineSuffix'
              : 'hardBreakTrailing',
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index
              ? bufferIndex
              : data.start._bufferIndex + bufferIndex
          },
          end: shallow(data.end)
        }
        data.end = shallow(token.start)

        if (data.start.offset === data.end.offset) {
          assign(data, token)
        } else {
          events.splice(
            eventIndex,
            0,
            ['enter', token, context],
            ['exit', token, context]
          )
          eventIndex += 2
        }
      }

      eventIndex++
    }
  }

  return events
}

exports.resolver = resolver
exports.string = string
exports.text = text


/***/ }),

/***/ "./node_modules/micromark/dist/parse.js":
/*!**********************************************!*\
  !*** ./node_modules/micromark/dist/parse.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var content = __webpack_require__(/*! ./initialize/content.js */ "./node_modules/micromark/dist/initialize/content.js")
var document = __webpack_require__(/*! ./initialize/document.js */ "./node_modules/micromark/dist/initialize/document.js")
var flow = __webpack_require__(/*! ./initialize/flow.js */ "./node_modules/micromark/dist/initialize/flow.js")
var text = __webpack_require__(/*! ./initialize/text.js */ "./node_modules/micromark/dist/initialize/text.js")
var combineExtensions = __webpack_require__(/*! ./util/combine-extensions.js */ "./node_modules/micromark/dist/util/combine-extensions.js")
var createTokenizer = __webpack_require__(/*! ./util/create-tokenizer.js */ "./node_modules/micromark/dist/util/create-tokenizer.js")
var miniflat = __webpack_require__(/*! ./util/miniflat.js */ "./node_modules/micromark/dist/util/miniflat.js")
var constructs = __webpack_require__(/*! ./constructs.js */ "./node_modules/micromark/dist/constructs.js")

function parse(options) {
  var settings = options || {}
  var parser = {
    defined: [],
    constructs: combineExtensions(
      [constructs].concat(miniflat(settings.extensions))
    ),
    content: create(content),
    document: create(document),
    flow: create(flow),
    string: create(text.string),
    text: create(text.text)
  }
  return parser

  function create(initializer) {
    return creator

    function creator(from) {
      return createTokenizer(parser, initializer, from)
    }
  }
}

module.exports = parse


/***/ }),

/***/ "./node_modules/micromark/dist/postprocess.js":
/*!****************************************************!*\
  !*** ./node_modules/micromark/dist/postprocess.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var subtokenize = __webpack_require__(/*! ./util/subtokenize.js */ "./node_modules/micromark/dist/util/subtokenize.js")

function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }

  return events
}

module.exports = postprocess


/***/ }),

/***/ "./node_modules/micromark/dist/preprocess.js":
/*!***************************************************!*\
  !*** ./node_modules/micromark/dist/preprocess.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var search = /[\0\t\n\r]/g

function preprocess() {
  var start = true
  var column = 1
  var buffer = ''
  var atCarriageReturn
  return preprocessor

  function preprocessor(value, encoding, end) {
    var chunks = []
    var match
    var next
    var startPosition
    var endPosition
    var code
    value = buffer + value.toString(encoding)
    startPosition = 0
    buffer = ''

    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++
      }

      start = undefined
    }

    while (startPosition < value.length) {
      search.lastIndex = startPosition
      match = search.exec(value)
      endPosition = match ? match.index : value.length
      code = value.charCodeAt(endPosition)

      if (!match) {
        buffer = value.slice(startPosition)
        break
      }

      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3)
        atCarriageReturn = undefined
      } else {
        if (atCarriageReturn) {
          chunks.push(-5)
          atCarriageReturn = undefined
        }

        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition))
          column += endPosition - startPosition
        }

        if (code === 0) {
          chunks.push(65533)
          column++
        } else if (code === 9) {
          next = Math.ceil(column / 4) * 4
          chunks.push(-2)

          while (column++ < next) chunks.push(-1)
        } else if (code === 10) {
          chunks.push(-4)
          column = 1
        } // Must be carriage return.
        else {
          atCarriageReturn = true
          column = 1
        }
      }

      startPosition = endPosition + 1
    }

    if (end) {
      if (atCarriageReturn) chunks.push(-5)
      if (buffer) chunks.push(buffer)
      chunks.push(null)
    }

    return chunks
  }
}

module.exports = preprocess


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/attention.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/attention.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chunkedPush = __webpack_require__(/*! ../util/chunked-push.js */ "./node_modules/micromark/dist/util/chunked-push.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var classifyCharacter = __webpack_require__(/*! ../util/classify-character.js */ "./node_modules/micromark/dist/util/classify-character.js")
var movePoint = __webpack_require__(/*! ../util/move-point.js */ "./node_modules/micromark/dist/util/move-point.js")
var resolveAll = __webpack_require__(/*! ../util/resolve-all.js */ "./node_modules/micromark/dist/util/resolve-all.js")
var shallow = __webpack_require__(/*! ../util/shallow.js */ "./node_modules/micromark/dist/util/shallow.js")

var attention = {
  name: 'attention',
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
}

function resolveAllAttention(events, context) {
  var index = -1
  var open
  var group
  var text
  var openingSequence
  var closingSequence
  var use
  var nextEvents
  var offset // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.

  while (++index < events.length) {
    // Find a token that can close.
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === 'attentionSequence' &&
      events[index][1]._close
    ) {
      open = index // Now walk back to find an opener.

      while (open--) {
        // Find a token that can open the closer.
        if (
          events[open][0] === 'exit' &&
          events[open][1].type === 'attentionSequence' &&
          events[open][1]._open && // If the markers are the same:
          context.sliceSerialize(events[open][1]).charCodeAt(0) ===
            context.sliceSerialize(events[index][1]).charCodeAt(0)
        ) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if (
            (events[open][1]._close || events[index][1]._open) &&
            (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
            !(
              (events[open][1].end.offset -
                events[open][1].start.offset +
                events[index][1].end.offset -
                events[index][1].start.offset) %
              3
            )
          ) {
            continue
          } // Number of markers to use from the sequence.

          use =
            events[open][1].end.offset - events[open][1].start.offset > 1 &&
            events[index][1].end.offset - events[index][1].start.offset > 1
              ? 2
              : 1
          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: movePoint(shallow(events[open][1].end), -use),
            end: shallow(events[open][1].end)
          }
          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: shallow(events[index][1].start),
            end: movePoint(shallow(events[index][1].start), use)
          }
          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: shallow(events[open][1].end),
            end: shallow(events[index][1].start)
          }
          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: shallow(openingSequence.start),
            end: shallow(closingSequence.end)
          }
          events[open][1].end = shallow(openingSequence.start)
          events[index][1].start = shallow(closingSequence.end)
          nextEvents = [] // If there are more markers in the opening, add them before.

          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = chunkedPush(nextEvents, [
              ['enter', events[open][1], context],
              ['exit', events[open][1], context]
            ])
          } // Opening.

          nextEvents = chunkedPush(nextEvents, [
            ['enter', group, context],
            ['enter', openingSequence, context],
            ['exit', openingSequence, context],
            ['enter', text, context]
          ]) // Between.

          nextEvents = chunkedPush(
            nextEvents,
            resolveAll(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index),
              context
            )
          ) // Closing.

          nextEvents = chunkedPush(nextEvents, [
            ['exit', text, context],
            ['enter', closingSequence, context],
            ['exit', closingSequence, context],
            ['exit', group, context]
          ]) // If there are more markers in the closing, add them after.

          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2
            nextEvents = chunkedPush(nextEvents, [
              ['enter', events[index][1], context],
              ['exit', events[index][1], context]
            ])
          } else {
            offset = 0
          }

          chunkedSplice(events, open - 1, index - open + 3, nextEvents)
          index = open + nextEvents.length - offset - 2
          break
        }
      }
    }
  } // Remove remaining sequences.

  index = -1

  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data'
    }
  }

  return events
}

function tokenizeAttention(effects, ok) {
  var before = classifyCharacter(this.previous)
  var marker
  return start

  function start(code) {
    effects.enter('attentionSequence')
    marker = code
    return sequence(code)
  }

  function sequence(code) {
    var token
    var after
    var open
    var close

    if (code === marker) {
      effects.consume(code)
      return sequence
    }

    token = effects.exit('attentionSequence')
    after = classifyCharacter(code)
    open = !after || (after === 2 && before)
    close = !before || (before === 2 && after)
    token._open = marker === 42 ? open : open && (before || !close)
    token._close = marker === 42 ? close : close && (after || !open)
    return ok(code)
  }
}

module.exports = attention


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/autolink.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/autolink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha.js */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric.js */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiAtext = __webpack_require__(/*! ../character/ascii-atext.js */ "./node_modules/micromark/dist/character/ascii-atext.js")
var asciiControl = __webpack_require__(/*! ../character/ascii-control.js */ "./node_modules/micromark/dist/character/ascii-control.js")

var autolink = {
  name: 'autolink',
  tokenize: tokenizeAutolink
}

function tokenizeAutolink(effects, ok, nok) {
  var size = 1
  return start

  function start(code) {
    effects.enter('autolink')
    effects.enter('autolinkMarker')
    effects.consume(code)
    effects.exit('autolinkMarker')
    effects.enter('autolinkProtocol')
    return open
  }

  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return schemeOrEmailAtext
    }

    return asciiAtext(code) ? emailAtext(code) : nok(code)
  }

  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)
      ? schemeInsideOrEmailAtext(code)
      : emailAtext(code)
  }

  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code)
      return urlInside
    }

    if (
      (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) &&
      size++ < 32
    ) {
      effects.consume(code)
      return schemeInsideOrEmailAtext
    }

    return emailAtext(code)
  }

  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol')
      return end(code)
    }

    if (code === 32 || code === 60 || asciiControl(code)) {
      return nok(code)
    }

    effects.consume(code)
    return urlInside
  }

  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (asciiAtext(code)) {
      effects.consume(code)
      return emailAtext
    }

    return nok(code)
  }

  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
  }

  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (code === 62) {
      // Exit, then change the type.
      effects.exit('autolinkProtocol').type = 'autolinkEmail'
      return end(code)
    }

    return emailValue(code)
  }

  function emailValue(code) {
    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
      effects.consume(code)
      return code === 45 ? emailValue : emailLabel
    }

    return nok(code)
  }

  function end(code) {
    effects.enter('autolinkMarker')
    effects.consume(code)
    effects.exit('autolinkMarker')
    effects.exit('autolink')
    return ok
  }
}

module.exports = autolink


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/block-quote.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/block-quote.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var blockQuote = {
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit: exit
}

function tokenizeBlockQuoteStart(effects, ok, nok) {
  var self = this
  return start

  function start(code) {
    if (code === 62) {
      if (!self.containerState.open) {
        effects.enter('blockQuote', {
          _container: true
        })
        self.containerState.open = true
      }

      effects.enter('blockQuotePrefix')
      effects.enter('blockQuoteMarker')
      effects.consume(code)
      effects.exit('blockQuoteMarker')
      return after
    }

    return nok(code)
  }

  function after(code) {
    if (markdownSpace(code)) {
      effects.enter('blockQuotePrefixWhitespace')
      effects.consume(code)
      effects.exit('blockQuotePrefixWhitespace')
      effects.exit('blockQuotePrefix')
      return ok
    }

    effects.exit('blockQuotePrefix')
    return ok(code)
  }
}

function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.attempt(blockQuote, ok, nok),
    'linePrefix',
    this.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : 4
  )
}

function exit(effects) {
  effects.exit('blockQuote')
}

module.exports = blockQuote


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/character-escape.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/character-escape.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asciiPunctuation = __webpack_require__(/*! ../character/ascii-punctuation.js */ "./node_modules/micromark/dist/character/ascii-punctuation.js")

var characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
}

function tokenizeCharacterEscape(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('characterEscape')
    effects.enter('escapeMarker')
    effects.consume(code)
    effects.exit('escapeMarker')
    return open
  }

  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter('characterEscapeValue')
      effects.consume(code)
      effects.exit('characterEscapeValue')
      effects.exit('characterEscape')
      return ok
    }

    return nok(code)
  }
}

module.exports = characterEscape


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/character-reference.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/character-reference.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decodeEntity = __webpack_require__(/*! parse-entities/decode-entity.js */ "./node_modules/parse-entities/decode-entity.browser.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric.js */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiDigit = __webpack_require__(/*! ../character/ascii-digit.js */ "./node_modules/micromark/dist/character/ascii-digit.js")
var asciiHexDigit = __webpack_require__(/*! ../character/ascii-hex-digit.js */ "./node_modules/micromark/dist/character/ascii-hex-digit.js")

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var decodeEntity__default = /*#__PURE__*/ _interopDefaultLegacy(decodeEntity)

var characterReference = {
  name: 'characterReference',
  tokenize: tokenizeCharacterReference
}

function tokenizeCharacterReference(effects, ok, nok) {
  var self = this
  var size = 0
  var max
  var test
  return start

  function start(code) {
    effects.enter('characterReference')
    effects.enter('characterReferenceMarker')
    effects.consume(code)
    effects.exit('characterReferenceMarker')
    return open
  }

  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric')
      effects.consume(code)
      effects.exit('characterReferenceMarkerNumeric')
      return numeric
    }

    effects.enter('characterReferenceValue')
    max = 31
    test = asciiAlphanumeric
    return value(code)
  }

  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal')
      effects.consume(code)
      effects.exit('characterReferenceMarkerHexadecimal')
      effects.enter('characterReferenceValue')
      max = 6
      test = asciiHexDigit
      return value
    }

    effects.enter('characterReferenceValue')
    max = 7
    test = asciiDigit
    return value(code)
  }

  function value(code) {
    var token

    if (code === 59 && size) {
      token = effects.exit('characterReferenceValue')

      if (
        test === asciiAlphanumeric &&
        !decodeEntity__default['default'](self.sliceSerialize(token))
      ) {
        return nok(code)
      }

      effects.enter('characterReferenceMarker')
      effects.consume(code)
      effects.exit('characterReferenceMarker')
      effects.exit('characterReference')
      return ok
    }

    if (test(code) && size++ < max) {
      effects.consume(code)
      return value
    }

    return nok(code)
  }
}

module.exports = characterReference


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-fenced.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-fenced.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size.js */ "./node_modules/micromark/dist/util/prefix-size.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var codeFenced = {
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced,
  concrete: true
}

function tokenizeCodeFenced(effects, ok, nok) {
  var self = this
  var closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  }
  var initialPrefix = prefixSize(this.events, 'linePrefix')
  var sizeOpen = 0
  var marker
  return start

  function start(code) {
    effects.enter('codeFenced')
    effects.enter('codeFencedFence')
    effects.enter('codeFencedFenceSequence')
    marker = code
    return sequenceOpen(code)
  }

  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code)
      sizeOpen++
      return sequenceOpen
    }

    effects.exit('codeFencedFenceSequence')
    return sizeOpen < 3
      ? nok(code)
      : factorySpace(effects, infoOpen, 'whitespace')(code)
  }

  function infoOpen(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceInfo')
    effects.enter('chunkString', {
      contentType: 'string'
    })
    return info(code)
  }

  function info(code) {
    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('chunkString')
      effects.exit('codeFencedFenceInfo')
      return factorySpace(effects, infoAfter, 'whitespace')(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code)
    return info
  }

  function infoAfter(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceMeta')
    effects.enter('chunkString', {
      contentType: 'string'
    })
    return meta(code)
  }

  function meta(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('chunkString')
      effects.exit('codeFencedFenceMeta')
      return openAfter(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code)
    return meta
  }

  function openAfter(code) {
    effects.exit('codeFencedFence')
    return self.interrupt ? ok(code) : content(code)
  }

  function content(code) {
    if (code === null) {
      return after(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return effects.attempt(
        closingFenceConstruct,
        after,
        initialPrefix
          ? factorySpace(effects, content, 'linePrefix', initialPrefix + 1)
          : content
      )
    }

    effects.enter('codeFlowValue')
    return contentContinue(code)
  }

  function contentContinue(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue')
      return content(code)
    }

    effects.consume(code)
    return contentContinue
  }

  function after(code) {
    effects.exit('codeFenced')
    return ok(code)
  }

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0
    return factorySpace(
      effects,
      closingSequenceStart,
      'linePrefix',
      this.parser.constructs.disable.null.indexOf('codeIndented') > -1
        ? undefined
        : 4
    )

    function closingSequenceStart(code) {
      effects.enter('codeFencedFence')
      effects.enter('codeFencedFenceSequence')
      return closingSequence(code)
    }

    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code)
        size++
        return closingSequence
      }

      if (size < sizeOpen) return nok(code)
      effects.exit('codeFencedFenceSequence')
      return factorySpace(effects, closingSequenceEnd, 'whitespace')(code)
    }

    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('codeFencedFence')
        return ok(code)
      }

      return nok(code)
    }
  }
}

module.exports = codeFenced


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-indented.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-indented.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size.js */ "./node_modules/micromark/dist/util/prefix-size.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented,
  resolve: resolveCodeIndented
}
var indentedContentConstruct = {
  tokenize: tokenizeIndentedContent,
  partial: true
}

function resolveCodeIndented(events, context) {
  var code = {
    type: 'codeIndented',
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  }
  chunkedSplice(events, 0, 0, [['enter', code, context]])
  chunkedSplice(events, events.length, 0, [['exit', code, context]])
  return events
}

function tokenizeCodeIndented(effects, ok, nok) {
  return effects.attempt(indentedContentConstruct, afterPrefix, nok)

  function afterPrefix(code) {
    if (code === null) {
      return ok(code)
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(indentedContentConstruct, afterPrefix, ok)(code)
    }

    effects.enter('codeFlowValue')
    return content(code)
  }

  function content(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue')
      return afterPrefix(code)
    }

    effects.consume(code)
    return content
  }
}

function tokenizeIndentedContent(effects, ok, nok) {
  var self = this
  return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)

  function afterPrefix(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)
    }

    return prefixSize(self.events, 'linePrefix') < 4 ? nok(code) : ok(code)
  }
}

module.exports = codeIndented


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-text.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-text.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var codeText = {
  name: 'codeText',
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous: previous
}

function resolveCodeText(events) {
  var tailExitIndex = events.length - 4
  var headEnterIndex = 3
  var index
  var enter // If we start and end with an EOL or a space.

  if (
    (events[headEnterIndex][1].type === 'lineEnding' ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === 'lineEnding' ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex // And we have data.

    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[tailExitIndex][1].type = events[headEnterIndex][1].type =
          'codeTextPadding'
        headEnterIndex += 2
        tailExitIndex -= 2
        break
      }
    }
  } // Merge adjacent spaces and data.

  index = headEnterIndex - 1
  tailExitIndex++

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === 'lineEnding'
    ) {
      events[enter][1].type = 'codeTextData'

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end
        events.splice(enter + 2, index - enter - 2)
        tailExitIndex -= index - enter - 2
        index = enter + 2
      }

      enter = undefined
    }
  }

  return events
}

function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}

function tokenizeCodeText(effects, ok, nok) {
  var sizeOpen = 0
  var size
  var token
  return start

  function start(code) {
    effects.enter('codeText')
    effects.enter('codeTextSequence')
    return openingSequence(code)
  }

  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code)
      sizeOpen++
      return openingSequence
    }

    effects.exit('codeTextSequence')
    return gap(code)
  }

  function gap(code) {
    // EOF.
    if (code === null) {
      return nok(code)
    } // Closing fence?
    // Could also be data.

    if (code === 96) {
      token = effects.enter('codeTextSequence')
      size = 0
      return closingSequence(code)
    } // Tabs don’t work, and virtual spaces don’t make sense.

    if (code === 32) {
      effects.enter('space')
      effects.consume(code)
      effects.exit('space')
      return gap
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return gap
    } // Data.

    effects.enter('codeTextData')
    return data(code)
  } // In code.

  function data(code) {
    if (
      code === null ||
      code === 32 ||
      code === 96 ||
      markdownLineEnding(code)
    ) {
      effects.exit('codeTextData')
      return gap(code)
    }

    effects.consume(code)
    return data
  } // Closing fence.

  function closingSequence(code) {
    // More.
    if (code === 96) {
      effects.consume(code)
      size++
      return closingSequence
    } // Done!

    if (size === sizeOpen) {
      effects.exit('codeTextSequence')
      effects.exit('codeText')
      return ok(code)
    } // More or less accents: mark as data.

    token.type = 'codeTextData'
    return data(code)
  }
}

module.exports = codeText


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/content.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/content.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size.js */ "./node_modules/micromark/dist/util/prefix-size.js")
var subtokenize = __webpack_require__(/*! ../util/subtokenize.js */ "./node_modules/micromark/dist/util/subtokenize.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

// No name because it must not be turned off.
var content = {
  tokenize: tokenizeContent,
  resolve: resolveContent,
  interruptible: true,
  lazy: true
}
var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
} // Content is transparent: it’s parsed right now. That way, definitions are also
// parsed right now: before text in paragraphs (specifically, media) are parsed.

function resolveContent(events) {
  subtokenize(events)
  return events
}

function tokenizeContent(effects, ok) {
  var previous
  return start

  function start(code) {
    effects.enter('content')
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    })
    return data(code)
  }

  function data(code) {
    if (code === null) {
      return contentEnd(code)
    }

    if (markdownLineEnding(code)) {
      return effects.check(
        continuationConstruct,
        contentContinue,
        contentEnd
      )(code)
    } // Data.

    effects.consume(code)
    return data
  }

  function contentEnd(code) {
    effects.exit('chunkContent')
    effects.exit('content')
    return ok(code)
  }

  function contentContinue(code) {
    effects.consume(code)
    effects.exit('chunkContent')
    previous = previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous: previous
    })
    return data
  }
}

function tokenizeContinuation(effects, ok, nok) {
  var self = this
  return startLookahead

  function startLookahead(code) {
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return factorySpace(effects, prefixed, 'linePrefix')
  }

  function prefixed(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    if (
      self.parser.constructs.disable.null.indexOf('codeIndented') > -1 ||
      prefixSize(self.events, 'linePrefix') < 4
    ) {
      return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
    }

    return ok(code)
  }
}

module.exports = content


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/definition.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/definition.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var normalizeIdentifier = __webpack_require__(/*! ../util/normalize-identifier.js */ "./node_modules/micromark/dist/util/normalize-identifier.js")
var factoryDestination = __webpack_require__(/*! ./factory-destination.js */ "./node_modules/micromark/dist/tokenize/factory-destination.js")
var factoryLabel = __webpack_require__(/*! ./factory-label.js */ "./node_modules/micromark/dist/tokenize/factory-label.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var factoryWhitespace = __webpack_require__(/*! ./factory-whitespace.js */ "./node_modules/micromark/dist/tokenize/factory-whitespace.js")
var factoryTitle = __webpack_require__(/*! ./factory-title.js */ "./node_modules/micromark/dist/tokenize/factory-title.js")

var definition = {
  name: 'definition',
  tokenize: tokenizeDefinition
}
var titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
}

function tokenizeDefinition(effects, ok, nok) {
  var self = this
  var identifier
  return start

  function start(code) {
    effects.enter('definition')
    return factoryLabel.call(
      self,
      effects,
      labelAfter,
      nok,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(code)
  }

  function labelAfter(code) {
    identifier = normalizeIdentifier(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    )

    if (code === 58) {
      effects.enter('definitionMarker')
      effects.consume(code)
      effects.exit('definitionMarker') // Note: blank lines can’t exist in content.

      return factoryWhitespace(
        effects,
        factoryDestination(
          effects,
          effects.attempt(
            titleConstruct,
            factorySpace(effects, after, 'whitespace'),
            factorySpace(effects, after, 'whitespace')
          ),
          nok,
          'definitionDestination',
          'definitionDestinationLiteral',
          'definitionDestinationLiteralMarker',
          'definitionDestinationRaw',
          'definitionDestinationString'
        )
      )
    }

    return nok(code)
  }

  function after(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('definition')

      if (self.parser.defined.indexOf(identifier) < 0) {
        self.parser.defined.push(identifier)
      }

      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeTitle(effects, ok, nok) {
  return start

  function start(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, before)(code)
      : nok(code)
  }

  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(
        effects,
        factorySpace(effects, after, 'whitespace'),
        nok,
        'definitionTitle',
        'definitionTitleMarker',
        'definitionTitleString'
      )(code)
    }

    return nok(code)
  }

  function after(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}

module.exports = definition


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-destination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-destination.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asciiControl = __webpack_require__(/*! ../character/ascii-control.js */ "./node_modules/micromark/dist/character/ascii-control.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

// eslint-disable-next-line max-params
function destinationFactory(
  effects,
  ok,
  nok,
  type,
  literalType,
  literalMarkerType,
  rawType,
  stringType,
  max
) {
  var limit = max || Infinity
  var balance = 0
  return start

  function start(code) {
    if (code === 60) {
      effects.enter(type)
      effects.enter(literalType)
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      return destinationEnclosedBefore
    }

    if (asciiControl(code) || code === 41) {
      return nok(code)
    }

    effects.enter(type)
    effects.enter(rawType)
    effects.enter(stringType)
    effects.enter('chunkString', {
      contentType: 'string'
    })
    return destinationRaw(code)
  }

  function destinationEnclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      effects.exit(literalType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    effects.enter('chunkString', {
      contentType: 'string'
    })
    return destinationEnclosed(code)
  }

  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit('chunkString')
      effects.exit(stringType)
      return destinationEnclosedBefore(code)
    }

    if (code === null || code === 60 || markdownLineEnding(code)) {
      return nok(code)
    }

    effects.consume(code)
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed
  }

  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code)
      return destinationEnclosed
    }

    return destinationEnclosed(code)
  }

  function destinationRaw(code) {
    if (code === 40) {
      if (++balance > limit) return nok(code)
      effects.consume(code)
      return destinationRaw
    }

    if (code === 41) {
      if (!balance--) {
        effects.exit('chunkString')
        effects.exit(stringType)
        effects.exit(rawType)
        effects.exit(type)
        return ok(code)
      }

      effects.consume(code)
      return destinationRaw
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      if (balance) return nok(code)
      effects.exit('chunkString')
      effects.exit(stringType)
      effects.exit(rawType)
      effects.exit(type)
      return ok(code)
    }

    if (asciiControl(code)) return nok(code)
    effects.consume(code)
    return code === 92 ? destinationRawEscape : destinationRaw
  }

  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code)
      return destinationRaw
    }

    return destinationRaw(code)
  }
}

module.exports = destinationFactory


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-label.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-label.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")

// eslint-disable-next-line max-params
function labelFactory(effects, ok, nok, type, markerType, stringType) {
  var self = this
  var size = 0
  var data
  return start

  function start(code) {
    effects.enter(type)
    effects.enter(markerType)
    effects.consume(code)
    effects.exit(markerType)
    effects.enter(stringType)
    return atBreak
  }

  function atBreak(code) {
    if (
      code === null ||
      code === 91 ||
      (code === 93 && !data) ||
      /* c8 ignore next */
      (code === 94 &&
        /* c8 ignore next */
        !size &&
        /* c8 ignore next */
        '_hiddenFootnoteSupport' in self.parser.constructs) ||
      size > 999
    ) {
      return nok(code)
    }

    if (code === 93) {
      effects.exit(stringType)
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      effects.exit(type)
      return ok
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return atBreak
    }

    effects.enter('chunkString', {
      contentType: 'string'
    })
    return label(code)
  }

  function label(code) {
    if (
      code === null ||
      code === 91 ||
      code === 93 ||
      markdownLineEnding(code) ||
      size++ > 999
    ) {
      effects.exit('chunkString')
      return atBreak(code)
    }

    effects.consume(code)
    data = data || !markdownSpace(code)
    return code === 92 ? labelEscape : label
  }

  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code)
      size++
      return label
    }

    return label(code)
  }
}

module.exports = labelFactory


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-space.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-space.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")

function spaceFactory(effects, ok, type, max) {
  var limit = max ? max - 1 : Infinity
  var size = 0
  return start

  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type)
      return prefix(code)
    }

    return ok(code)
  }

  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code)
      return prefix
    }

    effects.exit(type)
    return ok(code)
  }
}

module.exports = spaceFactory


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-title.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-title.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function titleFactory(effects, ok, nok, type, markerType, stringType) {
  var marker
  return start

  function start(code) {
    effects.enter(type)
    effects.enter(markerType)
    effects.consume(code)
    effects.exit(markerType)
    marker = code === 40 ? 41 : code
    return atFirstTitleBreak
  }

  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    return atTitleBreak(code)
  }

  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType)
      return atFirstTitleBreak(marker)
    }

    if (code === null) {
      return nok(code)
    } // Note: blank lines can’t exist in content.

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return factorySpace(effects, atTitleBreak, 'linePrefix')
    }

    effects.enter('chunkString', {
      contentType: 'string'
    })
    return title(code)
  }

  function title(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit('chunkString')
      return atTitleBreak(code)
    }

    effects.consume(code)
    return code === 92 ? titleEscape : title
  }

  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code)
      return title
    }

    return title(code)
  }
}

module.exports = titleFactory


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-whitespace.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-whitespace.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function whitespaceFactory(effects, ok) {
  var seen
  return start

  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      seen = true
      return start
    }

    if (markdownSpace(code)) {
      return factorySpace(
        effects,
        start,
        seen ? 'linePrefix' : 'lineSuffix'
      )(code)
    }

    return ok(code)
  }
}

module.exports = whitespaceFactory


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/hard-break-escape.js":
/*!*******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/hard-break-escape.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
}

function tokenizeHardBreakEscape(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('hardBreakEscape')
    effects.enter('escapeMarker')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (markdownLineEnding(code)) {
      effects.exit('escapeMarker')
      effects.exit('hardBreakEscape')
      return ok(code)
    }

    return nok(code)
  }
}

module.exports = hardBreakEscape


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/heading-atx.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/heading-atx.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var headingAtx = {
  name: 'headingAtx',
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
}

function resolveHeadingAtx(events, context) {
  var contentEnd = events.length - 2
  var contentStart = 3
  var content
  var text // Prefix whitespace, part of the opening.

  if (events[contentStart][1].type === 'whitespace') {
    contentStart += 2
  } // Suffix whitespace, part of the closing.

  if (
    contentEnd - 2 > contentStart &&
    events[contentEnd][1].type === 'whitespace'
  ) {
    contentEnd -= 2
  }

  if (
    events[contentEnd][1].type === 'atxHeadingSequence' &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart &&
        events[contentEnd - 2][1].type === 'whitespace'))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4
  }

  if (contentEnd > contentStart) {
    content = {
      type: 'atxHeadingText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    }
    text = {
      type: 'chunkText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: 'text'
    }
    chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content, context]
    ])
  }

  return events
}

function tokenizeHeadingAtx(effects, ok, nok) {
  var self = this
  var size = 0
  return start

  function start(code) {
    effects.enter('atxHeading')
    effects.enter('atxHeadingSequence')
    return fenceOpenInside(code)
  }

  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code)
      return fenceOpenInside
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingSequence')
      return self.interrupt ? ok(code) : headingBreak(code)
    }

    return nok(code)
  }

  function headingBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence')
      return sequence(code)
    }

    if (code === null || markdownLineEnding(code)) {
      effects.exit('atxHeading')
      return ok(code)
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, headingBreak, 'whitespace')(code)
    }

    effects.enter('atxHeadingText')
    return data(code)
  }

  function sequence(code) {
    if (code === 35) {
      effects.consume(code)
      return sequence
    }

    effects.exit('atxHeadingSequence')
    return headingBreak(code)
  }

  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingText')
      return headingBreak(code)
    }

    effects.consume(code)
    return data
  }
}

module.exports = headingAtx


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/html-flow.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/html-flow.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha.js */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric.js */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var fromCharCode = __webpack_require__(/*! ../constant/from-char-code.js */ "./node_modules/micromark/dist/constant/from-char-code.js")
var htmlBlockNames = __webpack_require__(/*! ../constant/html-block-names.js */ "./node_modules/micromark/dist/constant/html-block-names.js")
var htmlRawNames = __webpack_require__(/*! ../constant/html-raw-names.js */ "./node_modules/micromark/dist/constant/html-raw-names.js")
var partialBlankLine = __webpack_require__(/*! ./partial-blank-line.js */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")

var htmlFlow = {
  name: 'htmlFlow',
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
}
var nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
}

function resolveToHtmlFlow(events) {
  var index = events.length

  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
      break
    }
  }

  if (index > 1 && events[index - 2][1].type === 'linePrefix') {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start // Add the prefix start to the HTML line token.

    events[index + 1][1].start = events[index - 2][1].start // Remove the line prefix.

    events.splice(index - 2, 2)
  }

  return events
}

function tokenizeHtmlFlow(effects, ok, nok) {
  var self = this
  var kind
  var startTag
  var buffer
  var index
  var marker
  return start

  function start(code) {
    effects.enter('htmlFlow')
    effects.enter('htmlFlowData')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (code === 33) {
      effects.consume(code)
      return declarationStart
    }

    if (code === 47) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code)
      kind = 3 // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.

      return self.interrupt ? ok : continuationDeclarationInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      buffer = fromCharCode(code)
      startTag = true
      return tagName
    }

    return nok(code)
  }

  function declarationStart(code) {
    if (code === 45) {
      effects.consume(code)
      kind = 2
      return commentOpenInside
    }

    if (code === 91) {
      effects.consume(code)
      kind = 5
      buffer = 'CDATA['
      index = 0
      return cdataOpenInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      kind = 4
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code)
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code)
      return index === buffer.length
        ? self.interrupt
          ? ok
          : continuation
        : cdataOpenInside
    }

    return nok(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      buffer = fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  function tagName(code) {
    if (
      code === null ||
      code === 47 ||
      code === 62 ||
      markdownLineEndingOrSpace(code)
    ) {
      if (
        code !== 47 &&
        startTag &&
        htmlRawNames.indexOf(buffer.toLowerCase()) > -1
      ) {
        kind = 1
        return self.interrupt ? ok(code) : continuation(code)
      }

      if (htmlBlockNames.indexOf(buffer.toLowerCase()) > -1) {
        kind = 6

        if (code === 47) {
          effects.consume(code)
          return basicSelfClosing
        }

        return self.interrupt ? ok(code) : continuation(code)
      }

      kind = 7 // Do not support complete HTML when interrupting.

      return self.interrupt
        ? nok(code)
        : startTag
        ? completeAttributeNameBefore(code)
        : completeClosingTagAfter(code)
    }

    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      buffer += fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code)
      return self.interrupt ? ok : continuation
    }

    return nok(code)
  }

  function completeClosingTagAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code)
      return completeClosingTagAfter
    }

    return completeEnd(code)
  }

  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code)
      return completeEnd
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code)
      return completeAttributeName
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeNameBefore
    }

    return completeEnd(code)
  }

  function completeAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return completeAttributeName
    }

    return completeAttributeNameAfter(code)
  }

  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeNameAfter
    }

    return completeAttributeNameBefore(code)
  }

  function completeAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code)
      marker = code
      return completeAttributeValueQuoted
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    marker = undefined
    return completeAttributeValueUnquoted(code)
  }

  function completeAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      return completeAttributeValueQuotedAfter
    }

    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    effects.consume(code)
    return completeAttributeValueQuoted
  }

  function completeAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96 ||
      markdownLineEndingOrSpace(code)
    ) {
      return completeAttributeNameAfter(code)
    }

    effects.consume(code)
    return completeAttributeValueUnquoted
  }

  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace(code)) {
      return completeAttributeNameBefore(code)
    }

    return nok(code)
  }

  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code)
      return completeAfter
    }

    return nok(code)
  }

  function completeAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAfter
    }

    return code === null || markdownLineEnding(code)
      ? continuation(code)
      : nok(code)
  }

  function continuation(code) {
    if (code === 45 && kind === 2) {
      effects.consume(code)
      return continuationCommentInside
    }

    if (code === 60 && kind === 1) {
      effects.consume(code)
      return continuationRawTagOpen
    }

    if (code === 62 && kind === 4) {
      effects.consume(code)
      return continuationClose
    }

    if (code === 63 && kind === 3) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    if (code === 93 && kind === 5) {
      effects.consume(code)
      return continuationCharacterDataInside
    }

    if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
      return effects.check(
        nextBlankConstruct,
        continuationClose,
        continuationAtLineEnding
      )(code)
    }

    if (code === null || markdownLineEnding(code)) {
      return continuationAtLineEnding(code)
    }

    effects.consume(code)
    return continuation
  }

  function continuationAtLineEnding(code) {
    effects.exit('htmlFlowData')
    return htmlContinueStart(code)
  }

  function htmlContinueStart(code) {
    if (code === null) {
      return done(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return htmlContinueStart
    }

    effects.enter('htmlFlowData')
    return continuation(code)
  }

  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code)
      buffer = ''
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationRawEndTag(code) {
    if (code === 62 && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
      effects.consume(code)
      return continuationClose
    }

    if (asciiAlpha(code) && buffer.length < 8) {
      effects.consume(code)
      buffer += fromCharCode(code)
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code)
      return continuationClose
    }

    return continuation(code)
  }

  function continuationClose(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('htmlFlowData')
      return done(code)
    }

    effects.consume(code)
    return continuationClose
  }

  function done(code) {
    effects.exit('htmlFlow')
    return ok(code)
  }
}

function tokenizeNextBlank(effects, ok, nok) {
  return start

  function start(code) {
    effects.exit('htmlFlowData')
    effects.enter('lineEndingBlank')
    effects.consume(code)
    effects.exit('lineEndingBlank')
    return effects.attempt(partialBlankLine, ok, nok)
  }
}

module.exports = htmlFlow


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/html-text.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/html-text.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha.js */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric.js */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var htmlText = {
  name: 'htmlText',
  tokenize: tokenizeHtmlText
}

function tokenizeHtmlText(effects, ok, nok) {
  var self = this
  var marker
  var buffer
  var index
  var returnState
  return start

  function start(code) {
    effects.enter('htmlText')
    effects.enter('htmlTextData')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (code === 33) {
      effects.consume(code)
      return declarationOpen
    }

    if (code === 47) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code)
      return instruction
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagOpen
    }

    return nok(code)
  }

  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code)
      return commentOpen
    }

    if (code === 91) {
      effects.consume(code)
      buffer = 'CDATA['
      index = 0
      return cdataOpen
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return declaration
    }

    return nok(code)
  }

  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code)
      return commentStart
    }

    return nok(code)
  }

  function commentStart(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code)
      return commentStartDash
    }

    return comment(code)
  }

  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    return comment(code)
  }

  function comment(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code)
      return commentClose
    }

    if (markdownLineEnding(code)) {
      returnState = comment
      return atLineEnding(code)
    }

    effects.consume(code)
    return comment
  }

  function commentClose(code) {
    if (code === 45) {
      effects.consume(code)
      return end
    }

    return comment(code)
  }

  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code)
      return index === buffer.length ? cdata : cdataOpen
    }

    return nok(code)
  }

  function cdata(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 93) {
      effects.consume(code)
      return cdataClose
    }

    if (markdownLineEnding(code)) {
      returnState = cdata
      return atLineEnding(code)
    }

    effects.consume(code)
    return cdata
  }

  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  function cdataEnd(code) {
    if (code === 62) {
      return end(code)
    }

    if (code === 93) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  function declaration(code) {
    if (code === null || code === 62) {
      return end(code)
    }

    if (markdownLineEnding(code)) {
      returnState = declaration
      return atLineEnding(code)
    }

    effects.consume(code)
    return declaration
  }

  function instruction(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 63) {
      effects.consume(code)
      return instructionClose
    }

    if (markdownLineEnding(code)) {
      returnState = instruction
      return atLineEnding(code)
    }

    effects.consume(code)
    return instruction
  }

  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagClose
    }

    return nok(code)
  }

  function tagClose(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagClose
    }

    return tagCloseBetween(code)
  }

  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagCloseBetween
    }

    return end(code)
  }

  function tagOpen(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagOpen
    }

    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code)
      return end
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenBetween
    }

    return end(code)
  }

  function tagOpenAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    return tagOpenAttributeNameAfter(code)
  }

  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeNameAfter
    }

    return tagOpenBetween(code)
  }

  function tagOpenAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code)
      marker = code
      return tagOpenAttributeValueQuoted
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    effects.consume(code)
    marker = undefined
    return tagOpenAttributeValueUnquoted
  }

  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      return tagOpenAttributeValueQuotedAfter
    }

    if (code === null) {
      return nok(code)
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted
      return atLineEnding(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueQuoted
  }

  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  function tagOpenAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueUnquoted
  } // We can’t have blank lines in content, so no need to worry about empty
  // tokens.

  function atLineEnding(code) {
    effects.exit('htmlTextData')
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return factorySpace(
      effects,
      afterPrefix,
      'linePrefix',
      self.parser.constructs.disable.null.indexOf('codeIndented') > -1
        ? undefined
        : 4
    )
  }

  function afterPrefix(code) {
    effects.enter('htmlTextData')
    return returnState(code)
  }

  function end(code) {
    if (code === 62) {
      effects.consume(code)
      effects.exit('htmlTextData')
      effects.exit('htmlText')
      return ok
    }

    return nok(code)
  }
}

module.exports = htmlText


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-end.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-end.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var chunkedPush = __webpack_require__(/*! ../util/chunked-push.js */ "./node_modules/micromark/dist/util/chunked-push.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var normalizeIdentifier = __webpack_require__(/*! ../util/normalize-identifier.js */ "./node_modules/micromark/dist/util/normalize-identifier.js")
var resolveAll = __webpack_require__(/*! ../util/resolve-all.js */ "./node_modules/micromark/dist/util/resolve-all.js")
var shallow = __webpack_require__(/*! ../util/shallow.js */ "./node_modules/micromark/dist/util/shallow.js")
var factoryDestination = __webpack_require__(/*! ./factory-destination.js */ "./node_modules/micromark/dist/tokenize/factory-destination.js")
var factoryLabel = __webpack_require__(/*! ./factory-label.js */ "./node_modules/micromark/dist/tokenize/factory-label.js")
var factoryTitle = __webpack_require__(/*! ./factory-title.js */ "./node_modules/micromark/dist/tokenize/factory-title.js")
var factoryWhitespace = __webpack_require__(/*! ./factory-whitespace.js */ "./node_modules/micromark/dist/tokenize/factory-whitespace.js")

var labelEnd = {
  name: 'labelEnd',
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
}
var resourceConstruct = {
  tokenize: tokenizeResource
}
var fullReferenceConstruct = {
  tokenize: tokenizeFullReference
}
var collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
}

function resolveAllLabelEnd(events) {
  var index = -1
  var token

  while (++index < events.length) {
    token = events[index][1]

    if (
      !token._used &&
      (token.type === 'labelImage' ||
        token.type === 'labelLink' ||
        token.type === 'labelEnd')
    ) {
      // Remove the marker.
      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2)
      token.type = 'data'
      index++
    }
  }

  return events
}

function resolveToLabelEnd(events, context) {
  var index = events.length
  var offset = 0
  var group
  var label
  var text
  var token
  var open
  var close
  var media // Find an opening.

  while (index--) {
    token = events[index][1]

    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (
        token.type === 'link' ||
        (token.type === 'labelLink' && token._inactive)
      ) {
        break
      } // Mark other link openings as inactive, as we can’t have links in
      // links.

      if (events[index][0] === 'enter' && token.type === 'labelLink') {
        token._inactive = true
      }
    } else if (close) {
      if (
        events[index][0] === 'enter' &&
        (token.type === 'labelImage' || token.type === 'labelLink') &&
        !token._balanced
      ) {
        open = index

        if (token.type !== 'labelLink') {
          offset = 2
          break
        }
      }
    } else if (token.type === 'labelEnd') {
      close = index
    }
  }

  group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: shallow(events[open][1].start),
    end: shallow(events[events.length - 1][1].end)
  }
  label = {
    type: 'label',
    start: shallow(events[open][1].start),
    end: shallow(events[close][1].end)
  }
  text = {
    type: 'labelText',
    start: shallow(events[open + offset + 2][1].end),
    end: shallow(events[close - 2][1].start)
  }
  media = [
    ['enter', group, context],
    ['enter', label, context]
  ] // Opening marker.

  media = chunkedPush(media, events.slice(open + 1, open + offset + 3)) // Text open.

  media = chunkedPush(media, [['enter', text, context]]) // Between.

  media = chunkedPush(
    media,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  ) // Text close, marker close, label close.

  media = chunkedPush(media, [
    ['exit', text, context],
    events[close - 2],
    events[close - 1],
    ['exit', label, context]
  ]) // Reference, resource, or so.

  media = chunkedPush(media, events.slice(close + 1)) // Media close.

  media = chunkedPush(media, [['exit', group, context]])
  chunkedSplice(events, open, events.length, media)
  return events
}

function tokenizeLabelEnd(effects, ok, nok) {
  var self = this
  var index = self.events.length
  var labelStart
  var defined // Find an opening.

  while (index--) {
    if (
      (self.events[index][1].type === 'labelImage' ||
        self.events[index][1].type === 'labelLink') &&
      !self.events[index][1]._balanced
    ) {
      labelStart = self.events[index][1]
      break
    }
  }

  return start

  function start(code) {
    if (!labelStart) {
      return nok(code)
    } // It’s a balanced bracket, but contains a link.

    if (labelStart._inactive) return balanced(code)
    defined =
      self.parser.defined.indexOf(
        normalizeIdentifier(
          self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
          })
        )
      ) > -1
    effects.enter('labelEnd')
    effects.enter('labelMarker')
    effects.consume(code)
    effects.exit('labelMarker')
    effects.exit('labelEnd')
    return afterLabelEnd
  }

  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === 40) {
      return effects.attempt(
        resourceConstruct,
        ok,
        defined ? ok : balanced
      )(code)
    } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?

    if (code === 91) {
      return effects.attempt(
        fullReferenceConstruct,
        ok,
        defined
          ? effects.attempt(collapsedReferenceConstruct, ok, balanced)
          : balanced
      )(code)
    } // Shortcut reference: `[asd]`?

    return defined ? ok(code) : balanced(code)
  }

  function balanced(code) {
    labelStart._balanced = true
    return nok(code)
  }
}

function tokenizeResource(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('resource')
    effects.enter('resourceMarker')
    effects.consume(code)
    effects.exit('resourceMarker')
    return factoryWhitespace(effects, open)
  }

  function open(code) {
    if (code === 41) {
      return end(code)
    }

    return factoryDestination(
      effects,
      destinationAfter,
      nok,
      'resourceDestination',
      'resourceDestinationLiteral',
      'resourceDestinationLiteralMarker',
      'resourceDestinationRaw',
      'resourceDestinationString',
      3
    )(code)
  }

  function destinationAfter(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, between)(code)
      : end(code)
  }

  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(
        effects,
        factoryWhitespace(effects, end),
        nok,
        'resourceTitle',
        'resourceTitleMarker',
        'resourceTitleString'
      )(code)
    }

    return end(code)
  }

  function end(code) {
    if (code === 41) {
      effects.enter('resourceMarker')
      effects.consume(code)
      effects.exit('resourceMarker')
      effects.exit('resource')
      return ok
    }

    return nok(code)
  }
}

function tokenizeFullReference(effects, ok, nok) {
  var self = this
  return start

  function start(code) {
    return factoryLabel.call(
      self,
      effects,
      afterLabel,
      nok,
      'reference',
      'referenceMarker',
      'referenceString'
    )(code)
  }

  function afterLabel(code) {
    return self.parser.defined.indexOf(
      normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    ) < 0
      ? nok(code)
      : ok(code)
  }
}

function tokenizeCollapsedReference(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('reference')
    effects.enter('referenceMarker')
    effects.consume(code)
    effects.exit('referenceMarker')
    return open
  }

  function open(code) {
    if (code === 93) {
      effects.enter('referenceMarker')
      effects.consume(code)
      effects.exit('referenceMarker')
      effects.exit('reference')
      return ok
    }

    return nok(code)
  }
}

module.exports = labelEnd


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-start-image.js":
/*!*******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-start-image.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var labelEnd = __webpack_require__(/*! ./label-end.js */ "./node_modules/micromark/dist/tokenize/label-end.js")

var labelStartImage = {
  name: 'labelStartImage',
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
}

function tokenizeLabelStartImage(effects, ok, nok) {
  var self = this
  return start

  function start(code) {
    effects.enter('labelImage')
    effects.enter('labelImageMarker')
    effects.consume(code)
    effects.exit('labelImageMarker')
    return open
  }

  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker')
      effects.consume(code)
      effects.exit('labelMarker')
      effects.exit('labelImage')
      return after
    }

    return nok(code)
  }

  function after(code) {
    /* c8 ignore next */
    return code === 94 &&
      /* c8 ignore next */
      '_hiddenFootnoteSupport' in self.parser.constructs
      ? /* c8 ignore next */
        nok(code)
      : ok(code)
  }
}

module.exports = labelStartImage


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-start-link.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-start-link.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var labelEnd = __webpack_require__(/*! ./label-end.js */ "./node_modules/micromark/dist/tokenize/label-end.js")

var labelStartLink = {
  name: 'labelStartLink',
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
}

function tokenizeLabelStartLink(effects, ok, nok) {
  var self = this
  return start

  function start(code) {
    effects.enter('labelLink')
    effects.enter('labelMarker')
    effects.consume(code)
    effects.exit('labelMarker')
    effects.exit('labelLink')
    return after
  }

  function after(code) {
    /* c8 ignore next */
    return code === 94 &&
      /* c8 ignore next */
      '_hiddenFootnoteSupport' in self.parser.constructs
      ? /* c8 ignore next */
        nok(code)
      : ok(code)
  }
}

module.exports = labelStartLink


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/line-ending.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/line-ending.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var lineEnding = {
  name: 'lineEnding',
  tokenize: tokenizeLineEnding
}

function tokenizeLineEnding(effects, ok) {
  return start

  function start(code) {
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return factorySpace(effects, ok, 'linePrefix')
  }
}

module.exports = lineEnding


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/list.js":
/*!******************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/list.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asciiDigit = __webpack_require__(/*! ../character/ascii-digit.js */ "./node_modules/micromark/dist/character/ascii-digit.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size.js */ "./node_modules/micromark/dist/util/prefix-size.js")
var sizeChunks = __webpack_require__(/*! ../util/size-chunks.js */ "./node_modules/micromark/dist/util/size-chunks.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var partialBlankLine = __webpack_require__(/*! ./partial-blank-line.js */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")
var thematicBreak = __webpack_require__(/*! ./thematic-break.js */ "./node_modules/micromark/dist/tokenize/thematic-break.js")

var list = {
  name: 'list',
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
}
var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
}
var indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
}

function tokenizeListStart(effects, ok, nok) {
  var self = this
  var initialSize = prefixSize(self.events, 'linePrefix')
  var size = 0
  return start

  function start(code) {
    var kind =
      self.containerState.type ||
      (code === 42 || code === 43 || code === 45
        ? 'listUnordered'
        : 'listOrdered')

    if (
      kind === 'listUnordered'
        ? !self.containerState.marker || code === self.containerState.marker
        : asciiDigit(code)
    ) {
      if (!self.containerState.type) {
        self.containerState.type = kind
        effects.enter(kind, {
          _container: true
        })
      }

      if (kind === 'listUnordered') {
        effects.enter('listItemPrefix')
        return code === 42 || code === 45
          ? effects.check(thematicBreak, nok, atMarker)(code)
          : atMarker(code)
      }

      if (!self.interrupt || code === 49) {
        effects.enter('listItemPrefix')
        effects.enter('listItemValue')
        return inside(code)
      }
    }

    return nok(code)
  }

  function inside(code) {
    if (asciiDigit(code) && ++size < 10) {
      effects.consume(code)
      return inside
    }

    if (
      (!self.interrupt || size < 2) &&
      (self.containerState.marker
        ? code === self.containerState.marker
        : code === 41 || code === 46)
    ) {
      effects.exit('listItemValue')
      return atMarker(code)
    }

    return nok(code)
  }

  function atMarker(code) {
    effects.enter('listItemMarker')
    effects.consume(code)
    effects.exit('listItemMarker')
    self.containerState.marker = self.containerState.marker || code
    return effects.check(
      partialBlankLine, // Can’t be empty when interrupting.
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    )
  }

  function onBlank(code) {
    self.containerState.initialBlankLine = true
    initialSize++
    return endOfPrefix(code)
  }

  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter('listItemPrefixWhitespace')
      effects.consume(code)
      effects.exit('listItemPrefixWhitespace')
      return endOfPrefix
    }

    return nok(code)
  }

  function endOfPrefix(code) {
    self.containerState.size =
      initialSize + sizeChunks(self.sliceStream(effects.exit('listItemPrefix')))
    return ok(code)
  }
}

function tokenizeListContinuation(effects, ok, nok) {
  var self = this
  self.containerState._closeFlow = undefined
  return effects.check(partialBlankLine, onBlank, notBlank)

  function onBlank(code) {
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines ||
      self.containerState.initialBlankLine // We have a blank line.
    // Still, try to consume at most the items size.

    return factorySpace(
      effects,
      ok,
      'listItemIndent',
      self.containerState.size + 1
    )(code)
  }

  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined
      return notInCurrentItem(code)
    }

    self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code)
  }

  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true // As we’re closing flow, we’re no longer interrupting.

    self.interrupt = undefined
    return factorySpace(
      effects,
      effects.attempt(list, ok, nok),
      'linePrefix',
      self.parser.constructs.disable.null.indexOf('codeIndented') > -1
        ? undefined
        : 4
    )(code)
  }
}

function tokenizeIndent(effects, ok, nok) {
  var self = this
  return factorySpace(
    effects,
    afterPrefix,
    'listItemIndent',
    self.containerState.size + 1
  )

  function afterPrefix(code) {
    return prefixSize(self.events, 'listItemIndent') ===
      self.containerState.size
      ? ok(code)
      : nok(code)
  }
}

function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type)
}

function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  var self = this
  return factorySpace(
    effects,
    afterPrefix,
    'listItemPrefixWhitespace',
    self.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : 4 + 1
  )

  function afterPrefix(code) {
    return markdownSpace(code) ||
      !prefixSize(self.events, 'listItemPrefixWhitespace')
      ? nok(code)
      : ok(code)
  }
}

module.exports = list


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/partial-blank-line.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/partial-blank-line.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var partialBlankLine = {
  tokenize: tokenizePartialBlankLine,
  partial: true
}

function tokenizePartialBlankLine(effects, ok, nok) {
  return factorySpace(effects, afterWhitespace, 'linePrefix')

  function afterWhitespace(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}

module.exports = partialBlankLine


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/setext-underline.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/setext-underline.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var shallow = __webpack_require__(/*! ../util/shallow.js */ "./node_modules/micromark/dist/util/shallow.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var setextUnderline = {
  name: 'setextUnderline',
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
}

function resolveToSetextUnderline(events, context) {
  var index = events.length
  var content
  var text
  var definition
  var heading // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.

  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === 'content') {
        content = index
        break
      }

      if (events[index][1].type === 'paragraph') {
        text = index
      }
    } // Exit
    else {
      if (events[index][1].type === 'content') {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1)
      }

      if (!definition && events[index][1].type === 'definition') {
        definition = index
      }
    }
  }

  heading = {
    type: 'setextHeading',
    start: shallow(events[text][1].start),
    end: shallow(events[events.length - 1][1].end)
  } // Change the paragraph to setext heading text.

  events[text][1].type = 'setextHeadingText' // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.

  if (definition) {
    events.splice(text, 0, ['enter', heading, context])
    events.splice(definition + 1, 0, ['exit', events[content][1], context])
    events[content][1].end = shallow(events[definition][1].end)
  } else {
    events[content][1] = heading
  } // Add the heading exit at the end.

  events.push(['exit', heading, context])
  return events
}

function tokenizeSetextUnderline(effects, ok, nok) {
  var self = this
  var index = self.events.length
  var marker
  var paragraph // Find an opening.

  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (
      self.events[index][1].type !== 'lineEnding' &&
      self.events[index][1].type !== 'linePrefix' &&
      self.events[index][1].type !== 'content'
    ) {
      paragraph = self.events[index][1].type === 'paragraph'
      break
    }
  }

  return start

  function start(code) {
    if (!self.lazy && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine')
      effects.enter('setextHeadingLineSequence')
      marker = code
      return closingSequence(code)
    }

    return nok(code)
  }

  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code)
      return closingSequence
    }

    effects.exit('setextHeadingLineSequence')
    return factorySpace(effects, closingSequenceEnd, 'lineSuffix')(code)
  }

  function closingSequenceEnd(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('setextHeadingLine')
      return ok(code)
    }

    return nok(code)
  }
}

module.exports = setextUnderline


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/thematic-break.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/thematic-break.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space.js */ "./node_modules/micromark/dist/character/markdown-space.js")
var factorySpace = __webpack_require__(/*! ./factory-space.js */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var thematicBreak = {
  name: 'thematicBreak',
  tokenize: tokenizeThematicBreak
}

function tokenizeThematicBreak(effects, ok, nok) {
  var size = 0
  var marker
  return start

  function start(code) {
    effects.enter('thematicBreak')
    marker = code
    return atBreak(code)
  }

  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence')
      return sequence(code)
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, atBreak, 'whitespace')(code)
    }

    if (size < 3 || (code !== null && !markdownLineEnding(code))) {
      return nok(code)
    }

    effects.exit('thematicBreak')
    return ok(code)
  }

  function sequence(code) {
    if (code === marker) {
      effects.consume(code)
      size++
      return sequence
    }

    effects.exit('thematicBreakSequence')
    return atBreak(code)
  }
}

module.exports = thematicBreak


/***/ }),

/***/ "./node_modules/micromark/dist/util/chunked-push.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark/dist/util/chunked-push.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chunkedSplice = __webpack_require__(/*! ./chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")

function chunkedPush(list, items) {
  if (list.length) {
    chunkedSplice(list, list.length, 0, items)
    return list
  }

  return items
}

module.exports = chunkedPush


/***/ }),

/***/ "./node_modules/micromark/dist/util/chunked-splice.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/util/chunked-splice.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var splice = __webpack_require__(/*! ../constant/splice.js */ "./node_modules/micromark/dist/constant/splice.js")

// causes a stack overflow in V8 when trying to insert 100k items for instance.

function chunkedSplice(list, start, remove, items) {
  var end = list.length
  var chunkStart = 0
  var parameters // Make start between zero and `end` (included).

  if (start < 0) {
    start = -start > end ? 0 : end + start
  } else {
    start = start > end ? end : start
  }

  remove = remove > 0 ? remove : 0 // No need to chunk the items if there’s only a couple (10k) items.

  if (items.length < 10000) {
    parameters = Array.from(items)
    parameters.unshift(start, remove)
    splice.apply(list, parameters)
  } else {
    // Delete `remove` items starting from `start`
    if (remove) splice.apply(list, [start, remove]) // Insert the items in chunks to not cause stack overflows.

    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 10000)
      parameters.unshift(start, 0)
      splice.apply(list, parameters)
      chunkStart += 10000
      start += 10000
    }
  }
}

module.exports = chunkedSplice


/***/ }),

/***/ "./node_modules/micromark/dist/util/classify-character.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/util/classify-character.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space.js */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var unicodePunctuation = __webpack_require__(/*! ../character/unicode-punctuation.js */ "./node_modules/micromark/dist/character/unicode-punctuation.js")
var unicodeWhitespace = __webpack_require__(/*! ../character/unicode-whitespace.js */ "./node_modules/micromark/dist/character/unicode-whitespace.js")

// Classify whether a character is unicode whitespace, unicode punctuation, or
// anything else.
// Used for attention (emphasis, strong), whose sequences can open or close
// based on the class of surrounding characters.
function classifyCharacter(code) {
  if (
    code === null ||
    markdownLineEndingOrSpace(code) ||
    unicodeWhitespace(code)
  ) {
    return 1
  }

  if (unicodePunctuation(code)) {
    return 2
  }
}

module.exports = classifyCharacter


/***/ }),

/***/ "./node_modules/micromark/dist/util/combine-extensions.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/util/combine-extensions.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = __webpack_require__(/*! ../constant/has-own-property.js */ "./node_modules/micromark/dist/constant/has-own-property.js")
var chunkedSplice = __webpack_require__(/*! ./chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var miniflat = __webpack_require__(/*! ./miniflat.js */ "./node_modules/micromark/dist/util/miniflat.js")

function combineExtensions(extensions) {
  var all = {}
  var index = -1

  while (++index < extensions.length) {
    extension(all, extensions[index])
  }

  return all
}

function extension(all, extension) {
  var hook
  var left
  var right
  var code

  for (hook in extension) {
    left = hasOwnProperty.call(all, hook) ? all[hook] : (all[hook] = {})
    right = extension[hook]

    for (code in right) {
      left[code] = constructs(
        miniflat(right[code]),
        hasOwnProperty.call(left, code) ? left[code] : []
      )
    }
  }
}

function constructs(list, existing) {
  var index = -1
  var before = []

  while (++index < list.length) {
    ;(list[index].add === 'after' ? existing : before).push(list[index])
  }

  chunkedSplice(existing, 0, 0, before)
  return existing
}

module.exports = combineExtensions


/***/ }),

/***/ "./node_modules/micromark/dist/util/create-tokenizer.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/util/create-tokenizer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! ../constant/assign.js */ "./node_modules/micromark/dist/constant/assign.js")
var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending.js */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var chunkedPush = __webpack_require__(/*! ./chunked-push.js */ "./node_modules/micromark/dist/util/chunked-push.js")
var chunkedSplice = __webpack_require__(/*! ./chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var miniflat = __webpack_require__(/*! ./miniflat.js */ "./node_modules/micromark/dist/util/miniflat.js")
var resolveAll = __webpack_require__(/*! ./resolve-all.js */ "./node_modules/micromark/dist/util/resolve-all.js")
var serializeChunks = __webpack_require__(/*! ./serialize-chunks.js */ "./node_modules/micromark/dist/util/serialize-chunks.js")
var shallow = __webpack_require__(/*! ./shallow.js */ "./node_modules/micromark/dist/util/shallow.js")
var sliceChunks = __webpack_require__(/*! ./slice-chunks.js */ "./node_modules/micromark/dist/util/slice-chunks.js")

// Create a tokenizer.
// Tokenizers deal with one type of data (e.g., containers, flow, text).
// The parser is the object dealing with it all.
// `initialize` works like other constructs, except that only its `tokenize`
// function is used, in which case it doesn’t receive an `ok` or `nok`.
// `from` can be given to set the point before the first character, although
// when further lines are indented, they must be set with `defineSkip`.
function createTokenizer(parser, initialize, from) {
  var point = from
    ? shallow(from)
    : {
        line: 1,
        column: 1,
        offset: 0
      }
  var columnStart = {}
  var resolveAllConstructs = []
  var chunks = []
  var stack = []

  var effects = {
    consume: consume,
    enter: enter,
    exit: exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    }),
    lazy: constructFactory(onsuccessfulcheck, {
      lazy: true
    })
  } // State and tools for resolving and serializing.

  var context = {
    previous: null,
    events: [],
    parser: parser,
    sliceStream: sliceStream,
    sliceSerialize: sliceSerialize,
    now: now,
    defineSkip: skip,
    write: write
  } // The state function.

  var state = initialize.tokenize.call(context, effects) // Track which character we expect to be consumed, to catch bugs.

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize)
  } // Store where we are in the input stream.

  point._index = 0
  point._bufferIndex = -1
  return context

  function write(slice) {
    chunks = chunkedPush(chunks, slice)
    main() // Exit if we’re not done, resolve might change stuff.

    if (chunks[chunks.length - 1] !== null) {
      return []
    }

    addResult(initialize, 0) // Otherwise, resolve, and exit.

    context.events = resolveAll(resolveAllConstructs, context.events, context)
    return context.events
  } //
  // Tools.
  //

  function sliceSerialize(token) {
    return serializeChunks(sliceStream(token))
  }

  function sliceStream(token) {
    return sliceChunks(chunks, token)
  }

  function now() {
    return shallow(point)
  }

  function skip(value) {
    columnStart[value.line] = value.column
    accountForPotentialSkip()
  } //
  // State management.
  //
  // Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
  // `consume`).
  // Here is where we walk through the chunks, which either include strings of
  // several characters, or numerical character codes.
  // The reason to do this in a loop instead of a call is so the stack can
  // drain.

  function main() {
    var chunkIndex
    var chunk

    while (point._index < chunks.length) {
      chunk = chunks[point._index] // If we’re in a buffer chunk, loop through it.

      if (typeof chunk === 'string') {
        chunkIndex = point._index

        if (point._bufferIndex < 0) {
          point._bufferIndex = 0
        }

        while (
          point._index === chunkIndex &&
          point._bufferIndex < chunk.length
        ) {
          go(chunk.charCodeAt(point._bufferIndex))
        }
      } else {
        go(chunk)
      }
    }
  } // Deal with one code.

  function go(code) {
    state = state(code)
  } // Move a character forward.

  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++
      point.column = 1
      point.offset += code === -3 ? 2 : 1
      accountForPotentialSkip()
    } else if (code !== -1) {
      point.column++
      point.offset++
    } // Not in a string chunk.

    if (point._bufferIndex < 0) {
      point._index++
    } else {
      point._bufferIndex++ // At end of string chunk.

      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1
        point._index++
      }
    } // Expose the previous character.

    context.previous = code // Mark as consumed.
  } // Start a token.

  function enter(type, fields) {
    var token = fields || {}
    token.type = type
    token.start = now()
    context.events.push(['enter', token, context])
    stack.push(token)
    return token
  } // Stop a token.

  function exit(type) {
    var token = stack.pop()
    token.end = now()
    context.events.push(['exit', token, context])
    return token
  } // Use results.

  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from)
  } // Discard results.

  function onsuccessfulcheck(construct, info) {
    info.restore()
  } // Factory to attempt/check/interrupt.

  function constructFactory(onreturn, fields) {
    return hook // Handle either an object mapping codes to constructs, a list of
    // constructs, or a single construct.

    function hook(constructs, returnState, bogusState) {
      var listOfConstructs
      var constructIndex
      var currentConstruct
      var info
      return constructs.tokenize || 'length' in constructs
        ? handleListOfConstructs(miniflat(constructs))
        : handleMapOfConstructs

      function handleMapOfConstructs(code) {
        if (code in constructs || null in constructs) {
          return handleListOfConstructs(
            constructs.null
              ? /* c8 ignore next */
                miniflat(constructs[code]).concat(miniflat(constructs.null))
              : constructs[code]
          )(code)
        }

        return bogusState(code)
      }

      function handleListOfConstructs(list) {
        listOfConstructs = list
        constructIndex = 0
        return handleConstruct(list[constructIndex])
      }

      function handleConstruct(construct) {
        return start

        function start(code) {
          // To do: not nede to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store()
          currentConstruct = construct

          if (!construct.partial) {
            context.currentConstruct = construct
          }

          if (
            construct.name &&
            context.parser.constructs.disable.null.indexOf(construct.name) > -1
          ) {
            return nok()
          }

          return construct.tokenize.call(
            fields ? assign({}, context, fields) : context,
            effects,
            ok,
            nok
          )(code)
        }
      }

      function ok(code) {
        onreturn(currentConstruct, info)
        return returnState
      }

      function nok(code) {
        info.restore()

        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex])
        }

        return bogusState
      }
    }
  }

  function addResult(construct, from) {
    if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
      resolveAllConstructs.push(construct)
    }

    if (construct.resolve) {
      chunkedSplice(
        context.events,
        from,
        context.events.length - from,
        construct.resolve(context.events.slice(from), context)
      )
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context)
    }
  }

  function store() {
    var startPoint = now()
    var startPrevious = context.previous
    var startCurrentConstruct = context.currentConstruct
    var startEventsIndex = context.events.length
    var startStack = Array.from(stack)
    return {
      restore: restore,
      from: startEventsIndex
    }

    function restore() {
      point = startPoint
      context.previous = startPrevious
      context.currentConstruct = startCurrentConstruct
      context.events.length = startEventsIndex
      stack = startStack
      accountForPotentialSkip()
    }
  }

  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line]
      point.offset += columnStart[point.line] - 1
    }
  }
}

module.exports = createTokenizer


/***/ }),

/***/ "./node_modules/micromark/dist/util/miniflat.js":
/*!******************************************************!*\
  !*** ./node_modules/micromark/dist/util/miniflat.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function miniflat(value) {
  return value === null || value === undefined
    ? []
    : 'length' in value
    ? value
    : [value]
}

module.exports = miniflat


/***/ }),

/***/ "./node_modules/micromark/dist/util/move-point.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/util/move-point.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// chunks (replacement characters, tabs, or line endings).

function movePoint(point, offset) {
  point.column += offset
  point.offset += offset
  point._bufferIndex += offset
  return point
}

module.exports = movePoint


/***/ }),

/***/ "./node_modules/micromark/dist/util/normalize-identifier.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/util/normalize-identifier.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function normalizeIdentifier(value) {
  return (
    value // Collapse Markdown whitespace.
      .replace(/[\t\n\r ]+/g, ' ') // Trim.
      .replace(/^ | $/g, '') // Some characters are considered “uppercase”, but if their lowercase
      // counterpart is uppercased will result in a different uppercase
      // character.
      // Hence, to get that form, we perform both lower- and uppercase.
      // Upper case makes sure keys will not interact with default prototypal
      // methods: no object method is uppercase.
      .toLowerCase()
      .toUpperCase()
  )
}

module.exports = normalizeIdentifier


/***/ }),

/***/ "./node_modules/micromark/dist/util/prefix-size.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/prefix-size.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sizeChunks = __webpack_require__(/*! ./size-chunks.js */ "./node_modules/micromark/dist/util/size-chunks.js")

function prefixSize(events, type) {
  var tail = events[events.length - 1]
  if (!tail || tail[1].type !== type) return 0
  return sizeChunks(tail[2].sliceStream(tail[1]))
}

module.exports = prefixSize


/***/ }),

/***/ "./node_modules/micromark/dist/util/regex-check.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/regex-check.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fromCharCode = __webpack_require__(/*! ../constant/from-char-code.js */ "./node_modules/micromark/dist/constant/from-char-code.js")

function regexCheck(regex) {
  return check

  function check(code) {
    return regex.test(fromCharCode(code))
  }
}

module.exports = regexCheck


/***/ }),

/***/ "./node_modules/micromark/dist/util/resolve-all.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/resolve-all.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function resolveAll(constructs, events, context) {
  var called = []
  var index = -1
  var resolve

  while (++index < constructs.length) {
    resolve = constructs[index].resolveAll

    if (resolve && called.indexOf(resolve) < 0) {
      events = resolve(events, context)
      called.push(resolve)
    }
  }

  return events
}

module.exports = resolveAll


/***/ }),

/***/ "./node_modules/micromark/dist/util/safe-from-int.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/util/safe-from-int.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fromCharCode = __webpack_require__(/*! ../constant/from-char-code.js */ "./node_modules/micromark/dist/constant/from-char-code.js")

function safeFromInt(value, base) {
  var code = parseInt(value, base)

  if (
    // C0 except for HT, LF, FF, CR, space
    code < 9 ||
    code === 11 ||
    (code > 13 && code < 32) || // Control character (DEL) of the basic block and C1 controls.
    (code > 126 && code < 160) || // Lone high surrogates and low surrogates.
    (code > 55295 && code < 57344) || // Noncharacters.
    (code > 64975 && code < 65008) ||
    (code & 65535) === 65535 ||
    (code & 65535) === 65534 || // Out of range
    code > 1114111
  ) {
    return '\uFFFD'
  }

  return fromCharCode(code)
}

module.exports = safeFromInt


/***/ }),

/***/ "./node_modules/micromark/dist/util/serialize-chunks.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/util/serialize-chunks.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fromCharCode = __webpack_require__(/*! ../constant/from-char-code.js */ "./node_modules/micromark/dist/constant/from-char-code.js")

function serializeChunks(chunks) {
  var index = -1
  var result = []
  var chunk
  var value
  var atTab

  while (++index < chunks.length) {
    chunk = chunks[index]

    if (typeof chunk === 'string') {
      value = chunk
    } else if (chunk === -5) {
      value = '\r'
    } else if (chunk === -4) {
      value = '\n'
    } else if (chunk === -3) {
      value = '\r' + '\n'
    } else if (chunk === -2) {
      value = '\t'
    } else if (chunk === -1) {
      if (atTab) continue
      value = ' '
    } else {
      // Currently only replacement character.
      value = fromCharCode(chunk)
    }

    atTab = chunk === -2
    result.push(value)
  }

  return result.join('')
}

module.exports = serializeChunks


/***/ }),

/***/ "./node_modules/micromark/dist/util/shallow.js":
/*!*****************************************************!*\
  !*** ./node_modules/micromark/dist/util/shallow.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! ../constant/assign.js */ "./node_modules/micromark/dist/constant/assign.js")

function shallow(object) {
  return assign({}, object)
}

module.exports = shallow


/***/ }),

/***/ "./node_modules/micromark/dist/util/size-chunks.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/size-chunks.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Counts tabs based on their expanded size, and CR+LF as one character.

function sizeChunks(chunks) {
  var index = -1
  var size = 0

  while (++index < chunks.length) {
    size += typeof chunks[index] === 'string' ? chunks[index].length : 1
  }

  return size
}

module.exports = sizeChunks


/***/ }),

/***/ "./node_modules/micromark/dist/util/slice-chunks.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark/dist/util/slice-chunks.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function sliceChunks(chunks, token) {
  var startIndex = token.start._index
  var startBufferIndex = token.start._bufferIndex
  var endIndex = token.end._index
  var endBufferIndex = token.end._bufferIndex
  var view

  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)]
  } else {
    view = chunks.slice(startIndex, endIndex)

    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex)
    }

    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex))
    }
  }

  return view
}

module.exports = sliceChunks


/***/ }),

/***/ "./node_modules/micromark/dist/util/subtokenize.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/subtokenize.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! ../constant/assign.js */ "./node_modules/micromark/dist/constant/assign.js")
var chunkedSplice = __webpack_require__(/*! ./chunked-splice.js */ "./node_modules/micromark/dist/util/chunked-splice.js")
var shallow = __webpack_require__(/*! ./shallow.js */ "./node_modules/micromark/dist/util/shallow.js")

function subtokenize(events) {
  var jumps = {}
  var index = -1
  var event
  var lineIndex
  var otherIndex
  var otherEvent
  var parameters
  var subevents
  var more

  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index]
    }

    event = events[index] // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.

    if (
      index &&
      event[1].type === 'chunkFlow' &&
      events[index - 1][1].type === 'listItemPrefix'
    ) {
      subevents = event[1]._tokenizer.events
      otherIndex = 0

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'lineEndingBlank'
      ) {
        otherIndex += 2
      }

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'content'
      ) {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === 'content') {
            break
          }

          if (subevents[otherIndex][1].type === 'chunkText') {
            subevents[otherIndex][1].isInFirstContentOfListItem = true
            otherIndex++
          }
        }
      }
    } // Enter.

    if (event[0] === 'enter') {
      if (event[1].contentType) {
        assign(jumps, subcontent(events, index))
        index = jumps[index]
        more = true
      }
    } // Exit.
    else if (event[1]._container || event[1]._movePreviousLineEndings) {
      otherIndex = index
      lineIndex = undefined

      while (otherIndex--) {
        otherEvent = events[otherIndex]

        if (
          otherEvent[1].type === 'lineEnding' ||
          otherEvent[1].type === 'lineEndingBlank'
        ) {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = 'lineEndingBlank'
            }

            otherEvent[1].type = 'lineEnding'
            lineIndex = otherIndex
          }
        } else {
          break
        }
      }

      if (lineIndex) {
        // Fix position.
        event[1].end = shallow(events[lineIndex][1].start) // Switch container exit w/ line endings.

        parameters = events.slice(lineIndex, index)
        parameters.unshift(event)
        chunkedSplice(events, lineIndex, index - lineIndex + 1, parameters)
      }
    }
  }

  return !more
}

function subcontent(events, eventIndex) {
  var token = events[eventIndex][1]
  var context = events[eventIndex][2]
  var startPosition = eventIndex - 1
  var startPositions = []
  var tokenizer =
    token._tokenizer || context.parser[token.contentType](token.start)
  var childEvents = tokenizer.events
  var jumps = []
  var gaps = {}
  var stream
  var previous
  var index
  var entered
  var end
  var adjust // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.

  while (token) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== token) {
      // Empty.
    }

    startPositions.push(startPosition)

    if (!token._tokenizer) {
      stream = context.sliceStream(token)

      if (!token.next) {
        stream.push(null)
      }

      if (previous) {
        tokenizer.defineSkip(token.start)
      }

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true
      }

      tokenizer.write(stream)

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined
      }
    } // Unravel the next token.

    previous = token
    token = token.next
  } // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.

  token = previous
  index = childEvents.length

  while (index--) {
    // Make sure we’ve at least seen something (final eol is part of the last
    // token).
    if (childEvents[index][0] === 'enter') {
      entered = true
    } else if (
      // Find a void token that includes a break.
      entered &&
      childEvents[index][1].type === childEvents[index - 1][1].type &&
      childEvents[index][1].start.line !== childEvents[index][1].end.line
    ) {
      add(childEvents.slice(index + 1, end))
      // Help GC.
      token._tokenizer = token.next = undefined
      token = token.previous
      end = index + 1
    }
  }

  // Help GC.
  tokenizer.events = token._tokenizer = token.next = undefined // Do head:

  add(childEvents.slice(0, end))
  index = -1
  adjust = 0

  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1]
    adjust += jumps[index][1] - jumps[index][0] - 1
  }

  return gaps

  function add(slice) {
    var start = startPositions.pop()
    jumps.unshift([start, start + slice.length - 1])
    chunkedSplice(events, start, 2, slice)
  }
}

module.exports = subtokenize


/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "./node_modules/react-markdown/lib/ast-to-react.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-markdown/lib/ast-to-react.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

function astToReact(node, options) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var renderer = options.renderers[node.type]; // Nodes created by plugins do not have positional info, in which case we set
  // an object that matches the positon interface.

  if (!node.position) {
    node.position = {
      start: {
        line: null,
        column: null,
        offset: null
      },
      end: {
        line: null,
        column: null,
        offset: null
      }
    };
  }

  var pos = node.position.start;
  var key = [node.type, pos.line, pos.column, index].join('-');

  if (!ReactIs.isValidElementType(renderer)) {
    throw new Error("Renderer for type `".concat(node.type, "` not defined or is not renderable"));
  }

  var nodeProps = getNodeProps(node, key, options, renderer, parent, index);
  return React.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || undefined);

  function resolveChildren() {
    return node.children && node.children.map(function (childNode, i) {
      return astToReact(childNode, options, {
        node: node,
        props: nodeProps
      }, i);
    });
  }
} // eslint-disable-next-line max-params, complexity


function getNodeProps(node, key, opts, renderer, parent, index) {
  var props = {
    key: key
  };
  var isSimpleRenderer = typeof renderer === 'string' || renderer === React.Fragment; // `sourcePos` is true if the user wants source information (line/column info from markdown source)

  if (opts.sourcePos && node.position) {
    props['data-sourcepos'] = flattenPosition(node.position);
  }

  if (opts.rawSourcePos && !isSimpleRenderer) {
    props.sourcePosition = node.position;
  } // If `includeNodeIndex` is true, pass node index info to all non-tag renderers


  if (opts.includeNodeIndex && parent.node && parent.node.children && !isSimpleRenderer) {
    props.index = parent.node.children.indexOf(node);
    props.parentChildCount = parent.node.children.length;
  }

  var ref = node.identifier !== null && node.identifier !== undefined ?
  /* istanbul ignore next - plugins could inject an undefined reference. */
  opts.definitions[node.identifier.toUpperCase()] || {} : null;

  switch (node.type) {
    case 'root':
      assignDefined(props, {
        className: opts.className
      });
      break;

    case 'text':
      props.nodeKey = key;
      props.children = node.value;
      break;

    case 'heading':
      props.level = node.depth;
      break;

    case 'list':
      props.start = node.start;
      props.ordered = node.ordered;
      props.spread = node.spread;
      props.depth = node.depth;
      break;

    case 'listItem':
      props.checked = node.checked;
      props.spread = node.spread;
      props.ordered = node.ordered;
      props.index = node.index;
      props.children = getListItemChildren(node, parent).map(function (childNode, i) {
        return astToReact(childNode, opts, {
          node: node,
          props: props
        }, i);
      });
      break;

    case 'definition':
      assignDefined(props, {
        identifier: node.identifier,
        title: node.title,
        url: node.url
      });
      break;

    case 'code':
      assignDefined(props, {
        language: node.lang && node.lang.split(/\s/, 1)[0]
      });
      break;

    case 'inlineCode':
      props.children = node.value;
      props.inline = true;
      break;

    case 'link':
      assignDefined(props, {
        title: node.title || undefined,
        target: typeof opts.linkTarget === 'function' ? opts.linkTarget(node.url, node.children, node.title) : opts.linkTarget,
        href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
      });
      break;

    case 'image':
      assignDefined(props, {
        src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url,
        alt: node.alt || '',
        title: node.title || undefined
      });
      break;

    case 'linkReference':
      assignDefined(props, xtend(ref, {
        href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
      }));
      break;

    case 'imageReference':
      assignDefined(props, {
        src: opts.transformImageUri && ref.href ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt) : ref.href,
        alt: node.alt || '',
        title: ref.title || undefined
      });
      break;

    case 'table':
    case 'tableHead':
    case 'tableBody':
      props.columnAlignment = node.align;
      break;

    case 'tableRow':
      props.isHeader = parent.node.type === 'tableHead';
      props.columnAlignment = parent.props.columnAlignment;
      break;

    case 'tableCell':
      assignDefined(props, {
        isHeader: parent.props.isHeader,
        align: parent.props.columnAlignment[index]
      });
      break;

    case 'virtualHtml':
      props.tag = node.tag;
      break;

    case 'html':
      // @todo find a better way than this
      props.isBlock = node.position.start.line !== node.position.end.line;
      props.allowDangerousHtml = opts.allowDangerousHtml;
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      break;

    case 'parsedHtml':
      {
        var parsedChildren;

        if (node.children) {
          parsedChildren = node.children.map(function (child, i) {
            return astToReact(child, opts, {
              node: node,
              props: props
            }, i);
          });
        }

        props.allowDangerousHtml = opts.allowDangerousHtml;
        props.escapeHtml = opts.escapeHtml;
        props.skipHtml = opts.skipHtml;
        props.element = node.element ? mergeNodeChildren(node, parsedChildren) : null;
        break;
      }

    default:
      assignDefined(props, xtend(node, {
        type: undefined,
        position: undefined,
        children: undefined
      }));
  }

  if (!isSimpleRenderer && node.value) {
    props.value = node.value;
  }

  if (!isSimpleRenderer) {
    props.node = node;
  }

  return props;
}

function assignDefined(target, attrs) {
  for (var key in attrs) {
    if (typeof attrs[key] !== 'undefined') {
      target[key] = attrs[key];
    }
  }
}

function mergeNodeChildren(node, parsedChildren) {
  var el = node.element;

  if (Array.isArray(el)) {
    /* istanbul ignore next - `div` fallback for old React. */
    var Fragment = React.Fragment || 'div';
    return React.createElement(Fragment, null, el);
  }

  if (el.props.children || parsedChildren) {
    var children = React.Children.toArray(el.props.children).concat(parsedChildren);
    return React.cloneElement(el, null, children);
  }

  return React.cloneElement(el, null);
}

function flattenPosition(pos) {
  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(String).join('');
}

function getListItemChildren(node, parent) {
  /* istanbul ignore next - list items are always in a list, but best to be sure. */
  var loose = parent && parent.node ? listLoose(parent.node) : listItemLoose(node);
  return loose ? node.children : unwrapParagraphs(node);
}

function unwrapParagraphs(node) {
  return node.children.reduce(function (array, child) {
    return array.concat(child.type === 'paragraph' ? child.children : [child]);
  }, []);
}

function listLoose(node) {
  var children = node.children;
  var loose = node.spread;
  var index = -1;

  while (!loose && ++index < children.length) {
    loose = listItemLoose(children[index]);
  }

  return loose;
}

function listItemLoose(node) {
  var spread = node.spread;
  /* istanbul ignore next - spread is present from remark-parse, but maybe plugins don’t set it. */

  return spread === undefined || spread === null ? node.children.length > 1 : spread;
}

module.exports = astToReact;

/***/ }),

/***/ "./node_modules/react-markdown/lib/get-definitions.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/get-definitions.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

module.exports = function getDefinitions(tree) {
  var definitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  visit(tree, 'definition', function (node) {
    var identifier = node.identifier.toUpperCase();
    if (identifier in definitions) return;
    definitions[identifier] = {
      href: node.url,
      title: node.title
    };
  });
  return definitions;
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/plugins/disallow-node.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-markdown/lib/plugins/disallow-node.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

var splice = [].splice;

exports.ofType = function (types, mode) {
  return ifNotMatch(allow, mode);

  function allow(node, index, parent) {
    return !types.includes(node.type);
  }
};

exports.ifNotMatch = ifNotMatch;

function ifNotMatch(allow, mode) {
  return transform;

  function transform(tree) {
    visit(tree, filter);
    return tree;
  } // eslint-disable-next-line consistent-return


  function filter(node, index, parent) {
    if (parent && !allow(node, index, parent)) {
      var parameters = [index, 1];

      if (mode === 'unwrap' && node.children) {
        parameters = parameters.concat(node.children);
      }

      splice.apply(parent.children, parameters);
      return index;
    }
  }
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/plugins/naive-html.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-markdown/lib/plugins/naive-html.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Naive, simple plugin to match inline nodes without attributes
 * This allows say <strong>foo</strong>, but not <strong class="very">foo</strong>
 * For proper HTML support, you'll want a different plugin
 **/
var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

var type = 'virtualHtml';
var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;

module.exports = function (tree) {
  var open;
  var currentParent;
  visit(tree, 'html', function (node, index, parent) {
    if (currentParent !== parent) {
      open = [];
      currentParent = parent;
    }

    var selfClosing = getSelfClosing(node);

    if (selfClosing) {
      parent.children.splice(index, 1, {
        type: type,
        tag: selfClosing,
        position: node.position
      });
      return true;
    }

    var current = getSimpleTag(node, parent);

    if (!current) {
      return true;
    }

    var matching = findAndPull(open, current.tag);

    if (matching) {
      parent.children.splice(index, 0, virtual(current, matching, parent));
    } else if (!current.opening) {
      open.push(current);
    }

    return true;
  }, true // Iterate in reverse
  );
  return tree;
};

function findAndPull(open, matchingTag) {
  var i = open.length;

  while (i--) {
    if (open[i].tag === matchingTag) {
      return open.splice(i, 1)[0];
    }
  }

  return false;
}

function getSimpleTag(node, parent) {
  var match = node.value.match(simpleTagRe);
  return match ? {
    tag: match[2],
    opening: !match[1],
    node: node
  } : false;
}

function getSelfClosing(node) {
  var match = node.value.match(selfClosingRe);
  return match ? match[1] : false;
}

function virtual(fromNode, toNode, parent) {
  var fromIndex = parent.children.indexOf(fromNode.node);
  var toIndex = parent.children.indexOf(toNode.node);
  var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
  var children = extracted.slice(1, -1);
  return {
    type: type,
    children: children,
    tag: fromNode.tag,
    position: {
      start: fromNode.node.position.start,
      end: toNode.node.position.end,
      indent: []
    }
  };
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/react-markdown.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-markdown/lib/react-markdown.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var unified = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");

var parse = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");

var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var addListMetadata = __webpack_require__(/*! mdast-add-list-metadata */ "./node_modules/mdast-add-list-metadata/index.js");

var naiveHtml = __webpack_require__(/*! ./plugins/naive-html */ "./node_modules/react-markdown/lib/plugins/naive-html.js");

var disallowNode = __webpack_require__(/*! ./plugins/disallow-node */ "./node_modules/react-markdown/lib/plugins/disallow-node.js");

var astToReact = __webpack_require__(/*! ./ast-to-react */ "./node_modules/react-markdown/lib/ast-to-react.js");

var wrapTableRows = __webpack_require__(/*! ./wrap-table-rows */ "./node_modules/react-markdown/lib/wrap-table-rows.js");

var getDefinitions = __webpack_require__(/*! ./get-definitions */ "./node_modules/react-markdown/lib/get-definitions.js");

var uriTransformer = __webpack_require__(/*! ./uri-transformer */ "./node_modules/react-markdown/lib/uri-transformer.js");

var defaultRenderers = __webpack_require__(/*! ./renderers */ "./node_modules/react-markdown/lib/renderers.js");

var symbols = __webpack_require__(/*! ./symbols */ "./node_modules/react-markdown/lib/symbols.js");

var allTypes = Object.keys(defaultRenderers);

var ReactMarkdown = function ReactMarkdown(props) {
  // To do in next major: remove `source`.
  var src = props.source || props.children || '';

  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
  }

  var renderers = xtend(defaultRenderers, props.renderers);
  var processor = unified().use(parse).use(props.plugins || []); // eslint-disable-next-line no-sync

  var tree = processor.runSync(processor.parse(src));
  var renderProps = xtend(props, {
    renderers: renderers,
    definitions: getDefinitions(tree)
  });
  determineAstToReactTransforms(props).forEach(function (transform) {
    tree = transform(tree, renderProps);
  });
  return tree;
};

function determineAstToReactTransforms(props) {
  var transforms = [wrapTableRows, addListMetadata()];
  var disallowedTypes = props.disallowedTypes;

  if (props.allowedTypes) {
    disallowedTypes = allTypes.filter(function (type) {
      return type !== 'root' && props.allowedTypes.indexOf(type) === -1;
    });
  }

  var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove';

  if (disallowedTypes && disallowedTypes.length > 0) {
    transforms.push(disallowNode.ofType(disallowedTypes, removalMethod));
  }

  if (props.allowNode) {
    transforms.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
  } // To do in next major: remove `escapeHtml`.


  var renderHtml = (props.allowDangerousHtml || props.escapeHtml === false) && !props.skipHtml;
  var hasHtmlParser = (props.astPlugins || []).some(function (transform) {
    return transform.identity === symbols.HtmlParser;
  });

  if (renderHtml && !hasHtmlParser) {
    transforms.push(naiveHtml);
  }

  if (props.astPlugins) {
    transforms = transforms.concat(props.astPlugins);
  } // Add the final transform to turn everything into React.


  transforms.push(astToReact);
  return transforms;
}

ReactMarkdown.defaultProps = {
  transformLinkUri: uriTransformer
};
ReactMarkdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.string,
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  allowDangerousHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  astPlugins: PropTypes.arrayOf(PropTypes.func),
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object,
  plugins: PropTypes.array
};
ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = defaultRenderers;
ReactMarkdown.uriTransformer = uriTransformer;
module.exports = ReactMarkdown;

/***/ }),

/***/ "./node_modules/react-markdown/lib/renderers.js":
/*!******************************************************!*\
  !*** ./node_modules/react-markdown/lib/renderers.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types, react/no-multi-comp */


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* istanbul ignore next - Don’t crash on old React. */


var supportsStringRender = parseInt((React.version || '16').slice(0, 2), 10) >= 16;
var createElement = React.createElement;
module.exports = {
  break: 'br',
  paragraph: 'p',
  emphasis: 'em',
  strong: 'strong',
  thematicBreak: 'hr',
  blockquote: 'blockquote',
  delete: 'del',
  link: 'a',
  image: 'img',
  linkReference: 'a',
  imageReference: 'img',
  table: SimpleRenderer.bind(null, 'table'),
  tableHead: SimpleRenderer.bind(null, 'thead'),
  tableBody: SimpleRenderer.bind(null, 'tbody'),
  tableRow: SimpleRenderer.bind(null, 'tr'),
  tableCell: TableCell,
  root: Root,
  text: TextRenderer,
  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml,
  parsedHtml: ParsedHtml
};

function TextRenderer(props) {
  /* istanbul ignore next - a text node w/o a value could be injected by plugins */
  var children = props.children || '';
  /* istanbul ignore next - `span` is a fallback for old React. */

  return supportsStringRender ? children : createElement('span', null, children);
}

function Root(props) {
  var className = props.className;
  var root = !className && React.Fragment || 'div';
  return createElement(root, className ? {
    className: className
  } : null, props.children);
}

function SimpleRenderer(tag, props) {
  return createElement(tag, getCoreProps(props), props.children);
}

function TableCell(props) {
  var style = props.align ? {
    textAlign: props.align
  } : undefined;
  var coreProps = getCoreProps(props);
  return createElement(props.isHeader ? 'th' : 'td', style ? xtend({
    style: style
  }, coreProps) : coreProps, props.children);
}

function Heading(props) {
  return createElement("h".concat(props.level), getCoreProps(props), props.children);
}

function List(props) {
  var attrs = getCoreProps(props);

  if (props.start !== null && props.start !== 1 && props.start !== undefined) {
    attrs.start = props.start.toString();
  }

  return createElement(props.ordered ? 'ol' : 'ul', attrs, props.children);
}

function ListItem(props) {
  var checkbox = null;

  if (props.checked !== null && props.checked !== undefined) {
    var checked = props.checked;
    checkbox = createElement('input', {
      type: 'checkbox',
      checked: checked,
      readOnly: true
    });
  }

  return createElement('li', getCoreProps(props), checkbox, props.children);
}

function CodeBlock(props) {
  var className = props.language && "language-".concat(props.language);
  var code = createElement('code', className ? {
    className: className
  } : null, props.value);
  return createElement('pre', getCoreProps(props), code);
}

function InlineCode(props) {
  return createElement('code', getCoreProps(props), props.children);
}

function Html(props) {
  if (props.skipHtml) {
    return null;
  }

  var dangerous = props.allowDangerousHtml || props.escapeHtml === false;
  var tag = props.isBlock ? 'div' : 'span';

  if (!dangerous) {
    /* istanbul ignore next - `tag` is a fallback for old React. */
    return createElement(React.Fragment || tag, null, props.value);
  }

  var nodeProps = {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  };
  return createElement(tag, nodeProps);
}

function ParsedHtml(props) {
  /* To do: `React.cloneElement` is slow, is it really needed? */
  return props['data-sourcepos'] ? React.cloneElement(props.element, {
    'data-sourcepos': props['data-sourcepos']
  }) : props.element;
}

function VirtualHtml(props) {
  return createElement(props.tag, getCoreProps(props), props.children);
}

function NullRenderer() {
  return null;
}

function getCoreProps(props) {
  var source = props['data-sourcepos'];
  /* istanbul ignore next - nodes from plugins w/o position */

  return source ? {
    'data-sourcepos': source
  } : {};
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/symbols.js":
/*!****************************************************!*\
  !*** ./node_modules/react-markdown/lib/symbols.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var HtmlParser = '__RMD_HTML_PARSER__';
/* istanbul ignore next - Fallback for `Symbol`. */

exports.HtmlParser = typeof Symbol === 'undefined' ? HtmlParser : Symbol(HtmlParser);

/***/ }),

/***/ "./node_modules/react-markdown/lib/uri-transformer.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/uri-transformer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocols = ['http', 'https', 'mailto', 'tel'];

module.exports = function uriTransformer(uri) {
  var url = (uri || '').trim();
  var first = url.charAt(0);

  if (first === '#' || first === '/') {
    return url;
  }

  var colon = url.indexOf(':');

  if (colon === -1) {
    return url;
  }

  var length = protocols.length;
  var index = -1;

  while (++index < length) {
    var protocol = protocols[index];

    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }

  index = url.indexOf('?');

  if (index !== -1 && colon > index) {
    return url;
  }

  index = url.indexOf('#');

  if (index !== -1 && colon > index) {
    return url;
  } // eslint-disable-next-line no-script-url


  return 'javascript:void(0)';
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/wrap-table-rows.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/wrap-table-rows.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

module.exports = function (node) {
  visit(node, 'table', wrap);
  return node;
};

function wrap(table) {
  var children = table.children;
  table.children = [{
    type: 'tableHead',
    align: table.align,
    children: [children[0]],
    position: children[0].position
  }];

  if (children.length > 1) {
    table.children.push({
      type: 'tableBody',
      align: table.align,
      children: children.slice(1),
      position: {
        start: children[1].position.start,
        end: children[children.length - 1].position.end
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/index.js":
/*!********************************************!*\
  !*** ./node_modules/remark-parse/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parse

var fromMarkdown = __webpack_require__(/*! mdast-util-from-markdown */ "./node_modules/mdast-util-from-markdown/index.js")

function parse(options) {
  var self = this

  this.Parser = parse

  function parse(doc) {
    return fromMarkdown(
      doc,
      Object.assign({}, self.data('settings'), options, {
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: self.data('micromarkExtensions') || [],
        mdastExtensions: self.data('fromMarkdownExtensions') || []
      })
    )
  }
}


/***/ }),

/***/ "./node_modules/trough/index.js":
/*!**************************************!*\
  !*** ./node_modules/trough/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wrap = __webpack_require__(/*! ./wrap.js */ "./node_modules/trough/wrap.js")

module.exports = trough

trough.wrap = wrap

var slice = [].slice

// Create new middleware.
function trough() {
  var fns = []
  var middleware = {}

  middleware.run = run
  middleware.use = use

  return middleware

  // Run `fns`.  Last argument must be a completion handler.
  function run() {
    var index = -1
    var input = slice.call(arguments, 0, -1)
    var done = arguments[arguments.length - 1]

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done)
    }

    next.apply(null, [null].concat(input))

    // Run the next `fn`, if any.
    function next(err) {
      var fn = fns[++index]
      var params = slice.call(arguments, 0)
      var values = params.slice(1)
      var length = input.length
      var pos = -1

      if (err) {
        done(err)
        return
      }

      // Copy non-nully input into values.
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos]
        }
      }

      input = values

      // Next or done.
      if (fn) {
        wrap(fn, next).apply(null, input)
      } else {
        done.apply(null, [null].concat(input))
      }
    }
  }

  // Add `fn` to the list.
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn)
    }

    fns.push(fn)

    return middleware
  }
}


/***/ }),

/***/ "./node_modules/trough/wrap.js":
/*!*************************************!*\
  !*** ./node_modules/trough/wrap.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = [].slice

module.exports = wrap

// Wrap `fn`.
// Can be sync or async; return a promise, receive a completion handler, return
// new values and errors.
function wrap(fn, callback) {
  var invoked

  return wrapped

  function wrapped() {
    var params = slice.call(arguments, 0)
    var callback = fn.length > params.length
    var result

    if (callback) {
      params.push(done)
    }

    try {
      result = fn.apply(null, params)
    } catch (error) {
      // Well, this is quite the pickle.
      // `fn` received a callback and invoked it (thus continuing the pipeline),
      // but later also threw an error.
      // We’re not about to restart the pipeline again, so the only thing left
      // to do is to throw the thing instead.
      if (callback && invoked) {
        throw error
      }

      return done(error)
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  // Invoke `next`, only once.
  function done() {
    if (!invoked) {
      invoked = true

      callback.apply(null, arguments)
    }
  }

  // Invoke `done` with one value.
  // Tracks if an error is passed, too.
  function then(value) {
    done(null, value)
  }
}


/***/ }),

/***/ "./node_modules/unified/index.js":
/*!***************************************!*\
  !*** ./node_modules/unified/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bail = __webpack_require__(/*! bail */ "./node_modules/bail/index.js")
var buffer = __webpack_require__(/*! is-buffer */ "./node_modules/unified/node_modules/is-buffer/index.js")
var extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js")
var plain = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js")
var trough = __webpack_require__(/*! trough */ "./node_modules/trough/index.js")
var vfile = __webpack_require__(/*! vfile */ "./node_modules/vfile/index.js")

// Expose a frozen processor.
module.exports = unified().freeze()

var slice = [].slice
var own = {}.hasOwnProperty

// Process pipeline.
var pipeline = trough()
  .use(pipelineParse)
  .use(pipelineRun)
  .use(pipelineStringify)

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file)
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done)

  function done(error, tree, file) {
    if (error) {
      next(error)
    } else {
      ctx.tree = tree
      ctx.file = file
      next()
    }
  }
}

function pipelineStringify(p, ctx) {
  var result = p.stringify(ctx.tree, ctx.file)

  if (result === undefined || result === null) {
    // Empty.
  } else if (typeof result === 'string' || buffer(result)) {
    ctx.file.contents = result
  } else {
    ctx.file.result = result
  }
}

// Function to create the first processor.
function unified() {
  var attachers = []
  var transformers = trough()
  var namespace = {}
  var freezeIndex = -1
  var frozen

  // Data management.
  processor.data = data

  // Lock.
  processor.freeze = freeze

  // Plugins.
  processor.attachers = attachers
  processor.use = use

  // API.
  processor.parse = parse
  processor.stringify = stringify
  processor.run = run
  processor.runSync = runSync
  processor.process = process
  processor.processSync = processSync

  // Expose.
  return processor

  // Create a new processor based on the processor in the current scope.
  function processor() {
    var destination = unified()
    var index = -1

    while (++index < attachers.length) {
      destination.use.apply(null, attachers[index])
    }

    destination.data(extend(true, {}, namespace))

    return destination
  }

  // Freeze: used to signal a processor that has finished configuration.
  //
  // For example, take unified itself: it’s frozen.
  // Plugins should not be added to it.
  // Rather, it should be extended, by invoking it, before modifying it.
  //
  // In essence, always invoke this when exporting a processor.
  function freeze() {
    var values
    var transformer

    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex]

      if (values[1] === false) {
        continue
      }

      if (values[1] === true) {
        values[1] = undefined
      }

      transformer = values[0].apply(processor, values.slice(1))

      if (typeof transformer === 'function') {
        transformers.use(transformer)
      }
    }

    frozen = true
    freezeIndex = Infinity

    return processor
  }

  // Data management.
  // Getter / setter for processor-specific informtion.
  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen)
        namespace[key] = value
        return processor
      }

      // Get `key`.
      return (own.call(namespace, key) && namespace[key]) || null
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', frozen)
      namespace = key
      return processor
    }

    // Get space.
    return namespace
  }

  // Plugin management.
  //
  // Pass it:
  // *   an attacher and options,
  // *   a preset,
  // *   a list of presets, attachers, and arguments (list of attachers and
  //     options).
  function use(value) {
    var settings

    assertUnfrozen('use', frozen)

    if (value === null || value === undefined) {
      // Empty.
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments)
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings)
    }

    return processor

    function addPreset(result) {
      addList(result.plugins)

      if (result.settings) {
        settings = extend(settings || {}, result.settings)
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value)
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value)
        } else {
          addPreset(value)
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`')
      }
    }

    function addList(plugins) {
      var index = -1

      if (plugins === null || plugins === undefined) {
        // Empty.
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        while (++index < plugins.length) {
          add(plugins[index])
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin)

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(true, entry[1], value)
        }

        entry[1] = value
      } else {
        attachers.push(slice.call(arguments))
      }
    }
  }

  function find(plugin) {
    var index = -1

    while (++index < attachers.length) {
      if (attachers[index][0] === plugin) {
        return attachers[index]
      }
    }
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor.
  function parse(doc) {
    var file = vfile(doc)
    var Parser

    freeze()
    Parser = processor.Parser
    assertParser('parse', Parser)

    if (newable(Parser, 'parse')) {
      return new Parser(String(file), file).parse()
    }

    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), async.
  function run(node, file, cb) {
    assertNode(node)
    freeze()

    if (!cb && typeof file === 'function') {
      cb = file
      file = null
    }

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done)

      function done(error, tree, file) {
        tree = tree || node
        if (error) {
          reject(error)
        } else if (resolve) {
          resolve(tree)
        } else {
          cb(null, tree, file)
        }
      }
    }
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), sync.
  function runSync(node, file) {
    var result
    var complete

    run(node, file, done)

    assertDone('runSync', 'run', complete)

    return result

    function done(error, tree) {
      complete = true
      result = tree
      bail(error)
    }
  }

  // Stringify a unist node representation of a file (in string or vfile
  // representation) into a string using the `Compiler` on the processor.
  function stringify(node, doc) {
    var file = vfile(doc)
    var Compiler

    freeze()
    Compiler = processor.Compiler
    assertCompiler('stringify', Compiler)
    assertNode(node)

    if (newable(Compiler, 'compile')) {
      return new Compiler(node, file).compile()
    }

    return Compiler(node, file) // eslint-disable-line new-cap
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor, then run transforms on that node, and
  // compile the resulting node using the `Compiler` on the processor, and
  // store that result on the vfile.
  function process(doc, cb) {
    freeze()
    assertParser('process', processor.Parser)
    assertCompiler('process', processor.Compiler)

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      var file = vfile(doc)

      pipeline.run(processor, {file: file}, done)

      function done(error) {
        if (error) {
          reject(error)
        } else if (resolve) {
          resolve(file)
        } else {
          cb(null, file)
        }
      }
    }
  }

  // Process the given document (in string or vfile representation), sync.
  function processSync(doc) {
    var file
    var complete

    freeze()
    assertParser('processSync', processor.Parser)
    assertCompiler('processSync', processor.Compiler)
    file = vfile(doc)

    process(file, done)

    assertDone('processSync', 'process', complete)

    return file

    function done(error) {
      complete = true
      bail(error)
    }
  }
}

// Check if `value` is a constructor.
function newable(value, name) {
  return (
    typeof value === 'function' &&
    value.prototype &&
    // A function with keys in its prototype is probably a constructor.
    // Classes’ prototype methods are not enumerable, so we check if some value
    // exists in the prototype.
    (keys(value.prototype) || name in value.prototype)
  )
}

// Check if `value` is an object with keys.
function keys(value) {
  var key
  for (key in value) {
    return true
  }

  return false
}

// Assert a parser is available.
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`')
  }
}

// Assert a compiler is available.
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`')
  }
}

// Assert the processor is not frozen.
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot invoke `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
    )
  }
}

// Assert `node` is a unist node.
function assertNode(node) {
  if (!node || typeof node.type !== 'string') {
    throw new Error('Expected node, got `' + node + '`')
  }
}

// Assert that `complete` is `true`.
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}


/***/ }),

/***/ "./node_modules/unified/node_modules/is-buffer/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/unified/node_modules/is-buffer/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/unist-util-is/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/unist-util-is/convert.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert

function convert(test) {
  if (test == null) {
    return ok
  }

  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (typeof test === 'object') {
    return 'length' in test ? anyFactory(test) : allFactory(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function allFactory(test) {
  return all

  function all(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) return false
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = []
  var index = -1

  while (++index < tests.length) {
    checks[index] = convert(tests[index])
  }

  return any

  function any() {
    var index = -1

    while (++index < checks.length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "./node_modules/unist-util-stringify-position/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/unist-util-stringify-position/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty

module.exports = stringify

function stringify(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position)
  }

  // Position.
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value)
  }

  // Point.
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value)
  }

  // ?
  return ''
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {}
  }

  return index(point.line) + ':' + index(point.column)
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {}
  }

  return point(pos.start) + '-' + point(pos.end)
}

function index(value) {
  return value && typeof value === 'number' ? value : 1
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */
module.exports = visitParents

/* Visit. */
function visitParents(tree, type, visitor) {
  var stack = []

  if (typeof type === 'function') {
    visitor = type
    type = null
  }

  one(tree)

  /* Visit a single node. */
  function one(node) {
    var result

    if (!type || node.type === type) {
      result = visitor(node, stack.concat())
    }

    if (node.children && result !== false) {
      return all(node.children, node)
    }

    return result
  }

  /* Visit children in `parent`. */
  function all(children, parent) {
    var length = children.length
    var index = -1
    var child

    stack.push(parent)

    while (++index < length) {
      child = children[index]

      if (child && one(child) === false) {
        return false
      }
    }

    stack.pop()

    return true
  }
}


/***/ }),

/***/ "./node_modules/unist-util-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/unist-util-visit/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/color.browser.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/color.browser.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = identity
function identity(d) {
  return d
}


/***/ }),

/***/ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents

var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")
var color = __webpack_require__(/*! ./color */ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/color.browser.js")

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var step
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)
  step = reverse ? -1 : 1

  factory(tree, null, [])()

  function factory(node, index, parents) {
    var value = typeof node === 'object' && node !== null ? node : {}
    var name

    if (typeof value.type === 'string') {
      name =
        typeof value.tagName === 'string'
          ? value.tagName
          : typeof value.name === 'string'
          ? value.name
          : undefined

      visit.displayName =
        'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'
    }

    return visit

    function visit() {
      var grandparents = parents.concat(node)
      var result = []
      var subresult
      var offset

      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents))

        if (result[0] === EXIT) {
          return result
        }
      }

      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step

        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)()

          if (subresult[0] === EXIT) {
            return subresult
          }

          offset =
            typeof subresult[1] === 'number' ? subresult[1] : offset + step
        }
      }

      return result
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ "./node_modules/vfile-message/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vfile-message/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/index.js")

module.exports = VMessage

// Inherit from `Error#`.
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype
VMessage.prototype = new VMessagePrototype()

// Message properties.
var proto = VMessage.prototype

proto.file = ''
proto.name = ''
proto.reason = ''
proto.message = ''
proto.stack = ''
proto.fatal = null
proto.column = null
proto.line = null

// Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.
function VMessage(reason, position, origin) {
  var parts
  var range
  var location

  if (typeof position === 'string') {
    origin = position
    position = null
  }

  parts = parseOrigin(origin)
  range = stringify(position) || '1:1'

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  }

  // Node.
  if (position && position.position) {
    position = position.position
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position
      position = position.start
    } else {
      // Point.
      location.start = position
    }
  }

  if (reason.stack) {
    this.stack = reason.stack
    reason = reason.message
  }

  this.message = reason
  this.name = range
  this.reason = reason
  this.line = position ? position.line : null
  this.column = position ? position.column : null
  this.location = location
  this.source = parts[0]
  this.ruleId = parts[1]
}

function parseOrigin(origin) {
  var result = [null, null]
  var index

  if (typeof origin === 'string') {
    index = origin.indexOf(':')

    if (index === -1) {
      result[1] = origin
    } else {
      result[0] = origin.slice(0, index)
      result[1] = origin.slice(index + 1)
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/vfile/index.js":
/*!*************************************!*\
  !*** ./node_modules/vfile/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./lib */ "./node_modules/vfile/lib/index.js")


/***/ }),

/***/ "./node_modules/vfile/lib/core.js":
/*!****************************************!*\
  !*** ./node_modules/vfile/lib/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var p = __webpack_require__(/*! ./minpath */ "./node_modules/vfile/lib/minpath.browser.js")
var proc = __webpack_require__(/*! ./minproc */ "./node_modules/vfile/lib/minproc.browser.js")
var buffer = __webpack_require__(/*! is-buffer */ "./node_modules/vfile/node_modules/is-buffer/index.js")

module.exports = VFile

var own = {}.hasOwnProperty

// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']

VFile.prototype.toString = toString

// Access full path (`~/index.min.js`).
Object.defineProperty(VFile.prototype, 'path', {get: getPath, set: setPath})

// Access parent path (`~`).
Object.defineProperty(VFile.prototype, 'dirname', {
  get: getDirname,
  set: setDirname
})

// Access basename (`index.min.js`).
Object.defineProperty(VFile.prototype, 'basename', {
  get: getBasename,
  set: setBasename
})

// Access extname (`.js`).
Object.defineProperty(VFile.prototype, 'extname', {
  get: getExtname,
  set: setExtname
})

// Access stem (`index.min`).
Object.defineProperty(VFile.prototype, 'stem', {get: getStem, set: setStem})

// Construct a new file.
function VFile(options) {
  var prop
  var index

  if (!options) {
    options = {}
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options}
  } else if ('message' in options && 'messages' in options) {
    return options
  }

  if (!(this instanceof VFile)) {
    return new VFile(options)
  }

  this.data = {}
  this.messages = []
  this.history = []
  this.cwd = proc.cwd()

  // Set path related properties in the correct order.
  index = -1

  while (++index < order.length) {
    prop = order[index]

    if (own.call(options, prop)) {
      this[prop] = options[prop]
    }
  }

  // Set non-path related properties.
  for (prop in options) {
    if (order.indexOf(prop) < 0) {
      this[prop] = options[prop]
    }
  }
}

function getPath() {
  return this.history[this.history.length - 1]
}

function setPath(path) {
  assertNonEmpty(path, 'path')

  if (this.path !== path) {
    this.history.push(path)
  }
}

function getDirname() {
  return typeof this.path === 'string' ? p.dirname(this.path) : undefined
}

function setDirname(dirname) {
  assertPath(this.path, 'dirname')
  this.path = p.join(dirname || '', this.basename)
}

function getBasename() {
  return typeof this.path === 'string' ? p.basename(this.path) : undefined
}

function setBasename(basename) {
  assertNonEmpty(basename, 'basename')
  assertPart(basename, 'basename')
  this.path = p.join(this.dirname || '', basename)
}

function getExtname() {
  return typeof this.path === 'string' ? p.extname(this.path) : undefined
}

function setExtname(extname) {
  assertPart(extname, 'extname')
  assertPath(this.path, 'extname')

  if (extname) {
    if (extname.charCodeAt(0) !== 46 /* `.` */) {
      throw new Error('`extname` must start with `.`')
    }

    if (extname.indexOf('.', 1) > -1) {
      throw new Error('`extname` cannot contain multiple dots')
    }
  }

  this.path = p.join(this.dirname, this.stem + (extname || ''))
}

function getStem() {
  return typeof this.path === 'string'
    ? p.basename(this.path, this.extname)
    : undefined
}

function setStem(stem) {
  assertNonEmpty(stem, 'stem')
  assertPart(stem, 'stem')
  this.path = p.join(this.dirname || '', stem + (this.extname || ''))
}

// Get the value of the file.
function toString(encoding) {
  return (this.contents || '').toString(encoding)
}

// Assert that `part` is not a path (i.e., does not contain `p.sep`).
function assertPart(part, name) {
  if (part && part.indexOf(p.sep) > -1) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + p.sep + '`'
    )
  }
}

// Assert that `part` is not empty.
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

// Assert `path` exists.
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}


/***/ }),

/***/ "./node_modules/vfile/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/vfile/lib/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VMessage = __webpack_require__(/*! vfile-message */ "./node_modules/vfile-message/index.js")
var VFile = __webpack_require__(/*! ./core.js */ "./node_modules/vfile/lib/core.js")

module.exports = VFile

VFile.prototype.message = message
VFile.prototype.info = info
VFile.prototype.fail = fail

// Create a message with `reason` at `position`.
// When an error is passed in as `reason`, copies the stack.
function message(reason, position, origin) {
  var message = new VMessage(reason, position, origin)

  if (this.path) {
    message.name = this.path + ':' + message.name
    message.file = this.path
  }

  message.fatal = false

  this.messages.push(message)

  return message
}

// Fail: creates a vmessage, associates it with the file, and throws it.
function fail() {
  var message = this.message.apply(this, arguments)

  message.fatal = true

  throw message
}

// Info: creates a vmessage, associates it with the file, and marks the fatality
// as null.
function info() {
  var message = this.message.apply(this, arguments)

  message.fatal = null

  return message
}


/***/ }),

/***/ "./node_modules/vfile/lib/minpath.browser.js":
/*!***************************************************!*\
  !*** ./node_modules/vfile/lib/minpath.browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// A derivative work based on:
// <https://github.com/browserify/path-browserify>.
// Which is licensed:
//
// MIT License
//
// Copyright (c) 2013 James Halliday
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// A derivative work based on:
//
// Parts of that are extracted from Node’s internal `path` module:
// <https://github.com/nodejs/node/blob/master/lib/path.js>.
// Which is licensed:
//
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

exports.basename = basename
exports.dirname = dirname
exports.extname = extname
exports.join = join
exports.sep = '/'

function basename(path, ext) {
  var start = 0
  var end = -1
  var index
  var firstNonSlashEnd
  var seenNonSlash
  var extIndex

  if (ext !== undefined && typeof ext !== 'string') {
    throw new TypeError('"ext" argument must be a string')
  }

  assertPath(path)
  index = path.length

  if (ext === undefined || !ext.length || ext.length > path.length) {
    while (index--) {
      if (path.charCodeAt(index) === 47 /* `/` */) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now.
        if (seenNonSlash) {
          start = index + 1
          break
        }
      } else if (end < 0) {
        // We saw the first non-path separator, mark this as the end of our
        // path component.
        seenNonSlash = true
        end = index + 1
      }
    }

    return end < 0 ? '' : path.slice(start, end)
  }

  if (ext === path) {
    return ''
  }

  firstNonSlashEnd = -1
  extIndex = ext.length - 1

  while (index--) {
    if (path.charCodeAt(index) === 47 /* `/` */) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (seenNonSlash) {
        start = index + 1
        break
      }
    } else {
      if (firstNonSlashEnd < 0) {
        // We saw the first non-path separator, remember this index in case
        // we need it if the extension ends up not matching.
        seenNonSlash = true
        firstNonSlashEnd = index + 1
      }

      if (extIndex > -1) {
        // Try to match the explicit extension.
        if (path.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
          if (extIndex < 0) {
            // We matched the extension, so mark this as the end of our path
            // component
            end = index
          }
        } else {
          // Extension does not match, so our result is the entire path
          // component
          extIndex = -1
          end = firstNonSlashEnd
        }
      }
    }
  }

  if (start === end) {
    end = firstNonSlashEnd
  } else if (end < 0) {
    end = path.length
  }

  return path.slice(start, end)
}

function dirname(path) {
  var end
  var unmatchedSlash
  var index

  assertPath(path)

  if (!path.length) {
    return '.'
  }

  end = -1
  index = path.length

  // Prefix `--` is important to not run on `0`.
  while (--index) {
    if (path.charCodeAt(index) === 47 /* `/` */) {
      if (unmatchedSlash) {
        end = index
        break
      }
    } else if (!unmatchedSlash) {
      // We saw the first non-path separator
      unmatchedSlash = true
    }
  }

  return end < 0
    ? path.charCodeAt(0) === 47 /* `/` */
      ? '/'
      : '.'
    : end === 1 && path.charCodeAt(0) === 47 /* `/` */
    ? '//'
    : path.slice(0, end)
}

function extname(path) {
  var startDot = -1
  var startPart = 0
  var end = -1
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find.
  var preDotState = 0
  var unmatchedSlash
  var code
  var index

  assertPath(path)

  index = path.length

  while (index--) {
    code = path.charCodeAt(index)

    if (code === 47 /* `/` */) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (unmatchedSlash) {
        startPart = index + 1
        break
      }

      continue
    }

    if (end < 0) {
      // We saw the first non-path separator, mark this as the end of our
      // extension.
      unmatchedSlash = true
      end = index + 1
    }

    if (code === 46 /* `.` */) {
      // If this is our first dot, mark it as the start of our extension.
      if (startDot < 0) {
        startDot = index
      } else if (preDotState !== 1) {
        preDotState = 1
      }
    } else if (startDot > -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension.
      preDotState = -1
    }
  }

  if (
    startDot < 0 ||
    end < 0 ||
    // We saw a non-dot character immediately before the dot.
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly `..`.
    (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
  ) {
    return ''
  }

  return path.slice(startDot, end)
}

function join() {
  var index = -1
  var joined

  while (++index < arguments.length) {
    assertPath(arguments[index])

    if (arguments[index]) {
      joined =
        joined === undefined
          ? arguments[index]
          : joined + '/' + arguments[index]
    }
  }

  return joined === undefined ? '.' : normalize(joined)
}

// Note: `normalize` is not exposed as `path.normalize`, so some code is
// manually removed from it.
function normalize(path) {
  var absolute
  var value

  assertPath(path)

  absolute = path.charCodeAt(0) === 47 /* `/` */

  // Normalize the path according to POSIX rules.
  value = normalizeString(path, !absolute)

  if (!value.length && !absolute) {
    value = '.'
  }

  if (value.length && path.charCodeAt(path.length - 1) === 47 /* / */) {
    value += '/'
  }

  return absolute ? '/' + value : value
}

// Resolve `.` and `..` elements in a path with directory names.
function normalizeString(path, allowAboveRoot) {
  var result = ''
  var lastSegmentLength = 0
  var lastSlash = -1
  var dots = 0
  var index = -1
  var code
  var lastSlashIndex

  while (++index <= path.length) {
    if (index < path.length) {
      code = path.charCodeAt(index)
    } else if (code === 47 /* `/` */) {
      break
    } else {
      code = 47 /* `/` */
    }

    if (code === 47 /* `/` */) {
      if (lastSlash === index - 1 || dots === 1) {
        // Empty.
      } else if (lastSlash !== index - 1 && dots === 2) {
        if (
          result.length < 2 ||
          lastSegmentLength !== 2 ||
          result.charCodeAt(result.length - 1) !== 46 /* `.` */ ||
          result.charCodeAt(result.length - 2) !== 46 /* `.` */
        ) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf('/')

            /* istanbul ignore else - No clue how to cover it. */
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = ''
                lastSegmentLength = 0
              } else {
                result = result.slice(0, lastSlashIndex)
                lastSegmentLength = result.length - 1 - result.lastIndexOf('/')
              }

              lastSlash = index
              dots = 0
              continue
            }
          } else if (result.length) {
            result = ''
            lastSegmentLength = 0
            lastSlash = index
            dots = 0
            continue
          }
        }

        if (allowAboveRoot) {
          result = result.length ? result + '/..' : '..'
          lastSegmentLength = 2
        }
      } else {
        if (result.length) {
          result += '/' + path.slice(lastSlash + 1, index)
        } else {
          result = path.slice(lastSlash + 1, index)
        }

        lastSegmentLength = index - lastSlash - 1
      }

      lastSlash = index
      dots = 0
    } else if (code === 46 /* `.` */ && dots > -1) {
      dots++
    } else {
      dots = -1
    }
  }

  return result
}

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError(
      'Path must be a string. Received ' + JSON.stringify(path)
    )
  }
}


/***/ }),

/***/ "./node_modules/vfile/lib/minproc.browser.js":
/*!***************************************************!*\
  !*** ./node_modules/vfile/lib/minproc.browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Somewhat based on:
// <https://github.com/defunctzombie/node-process/blob/master/browser.js>.
// But I don’t think one tiny line of code can be copyrighted. 😅
exports.cwd = cwd

function cwd() {
  return '/'
}


/***/ }),

/***/ "./node_modules/vfile/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vfile/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./pages/casinos/[pid].js":
/*!********************************!*\
  !*** ./pages/casinos/[pid].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.scss */ "./pages/casinos/post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_WebLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/WebLayout */ "./components/WebLayout/index.jsx");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ContactForm */ "./components/ContactForm/index.jsx");
/* harmony import */ var _components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/CasinoWrapper */ "./components/CasinoWrapper/index.jsx");
/* harmony import */ var react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/Ai */ "./node_modules/react-icons/Ai/index.esm.js");
/* harmony import */ var react_icons_Bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/Bs */ "./node_modules/react-icons/Bs/index.esm.js");
/* harmony import */ var react_icons_Ri__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/Ri */ "./node_modules/react-icons/Ri/index.esm.js");
/* harmony import */ var react_icons_Gi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/Gi */ "./node_modules/react-icons/Gi/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_BreadCrumps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/BreadCrumps */ "./components/BreadCrumps/index.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_16__);




var _jsxFileName = "C:\\Users\\varekai\\Documents\\GitHub\\project-x\\frontend\\pages\\casinos\\[pid].js",
    _s = $RefreshSig$();
















function Post() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      show = _useState2[0],
      handleShow = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var name = router.query.pid;

  var transitionNavBar = function transitionNavBar() {
    if (window.scrollY > 200) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response, _data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("http://localhost:1337/casinos/".concat(name));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.data;

          case 6:
            _data = _context.sent;
            setData(_data);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  })), [name]);
  console.log(data);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener("scroll", transitionNavBar);
    return function () {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WebLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "post",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "post__inner",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__title",
            style: {
              backgroundImage: "url(http://localhost:1337".concat(data.Overlay.url, ")")
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__title-overlay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__title-text",
              children: [" ", data.title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__left",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: ["Opinions on ", data.title]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_16___default.a, {
                  source: data.mainContent,
                  escapeHtml: false
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__right",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__company-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Quickfacts "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Gi__WEBPACK_IMPORTED_MODULE_12__["GiLaurelCrown"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 25
                    }, this), " Owner"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "Somebody"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Bs__WEBPACK_IMPORTED_MODULE_10__["BsCalendar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 25
                    }, this), "Founded"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "2020-01-01"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ri__WEBPACK_IMPORTED_MODULE_11__["RiMoneyEuroCircleLine"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 25
                    }, this), "Min. deposit"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "\u20AC30"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__rating",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: ["What we think about ", data.title]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Bonuses"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Website"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Game providers"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Payment providers"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Support"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-global",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "Note global"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "8.20 / 10"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__contactform",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])("post__fixed", show && "active")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

_s(Post, "KTSDW9ikdJImJR5FI7fOSuZpHts=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JhaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9leHRlbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmovaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC1hZGQtbGlzdC1tZXRhZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktYWxwaGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktYWxwaGFudW1lcmljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWF0ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktZGlnaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktaGV4LWRpZ2l0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLXB1bmN0dWF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL3VuaWNvZGUtcHVuY3R1YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvdW5pY29kZS13aGl0ZXNwYWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvZnJvbS1jaGFyLWNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdGFudC9oYXMtb3duLXByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvaHRtbC1ibG9jay1uYW1lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NvbnN0YW50L2h0bWwtcmF3LW5hbWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvc3BsaWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvdW5pY29kZS1wdW5jdHVhdGlvbi1yZWdleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NvbnN0cnVjdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9pbml0aWFsaXplL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9pbml0aWFsaXplL2RvY3VtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvaW5pdGlhbGl6ZS9mbG93LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvaW5pdGlhbGl6ZS90ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9wb3N0cHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3ByZXByb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9hdHRlbnRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9hdXRvbGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2Jsb2NrLXF1b3RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvY2hhcmFjdGVyLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2NoYXJhY3Rlci1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jb2RlLWZlbmNlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2NvZGUtaW5kZW50ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jb2RlLXRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jb250ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2ZhY3RvcnktZGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LWxhYmVsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvZmFjdG9yeS1zcGFjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2ZhY3RvcnktdGl0bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LXdoaXRlc3BhY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9oYXJkLWJyZWFrLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2hlYWRpbmctYXR4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvaHRtbC1mbG93LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvaHRtbC10ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvbGFiZWwtZW5kLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvbGFiZWwtc3RhcnQtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9sYWJlbC1zdGFydC1saW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvbGluZS1lbmRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9saXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvcGFydGlhbC1ibGFuay1saW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvc2V0ZXh0LXVuZGVybGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9jaHVua2VkLXB1c2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL2NodW5rZWQtc3BsaWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9jbGFzc2lmeS1jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL2NvbWJpbmUtZXh0ZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvY3JlYXRlLXRva2VuaXplci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvbWluaWZsYXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL21vdmUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL25vcm1hbGl6ZS1pZGVudGlmaWVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9wcmVmaXgtc2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvcmVnZXgtY2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3Jlc29sdmUtYWxsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9zYWZlLWZyb20taW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9zZXJpYWxpemUtY2h1bmtzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9zaGFsbG93LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9zaXplLWNodW5rcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvc2xpY2UtY2h1bmtzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9zdWJ0b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3BhcnNlLWVudGl0aWVzL2RlY29kZS1lbnRpdHkuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi9hc3QtdG8tcmVhY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvZ2V0LWRlZmluaXRpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3BsdWdpbnMvZGlzYWxsb3ctbm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi9wbHVnaW5zL25haXZlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvcmVhY3QtbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvcmVuZGVyZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3N5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvdXJpLXRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3dyYXAtdGFibGUtcm93cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Ryb3VnaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Ryb3VnaC93cmFwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pZmllZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VuaWZpZWQvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtaXMvY29udmVydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9jb2xvci5icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ZmaWxlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdmZpbGUvbGliL2NvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy92ZmlsZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy92ZmlsZS9saWIvbWlucGF0aC5icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdmZpbGUvbGliL21pbnByb2MuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ZmaWxlL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Nhc2lub3MvW3BpZF0uanMiXSwibmFtZXMiOlsiUG9zdCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJzaG93IiwiaGFuZGxlU2hvdyIsInJvdXRlciIsInVzZVJvdXRlciIsIm5hbWUiLCJxdWVyeSIsInBpZCIsInRyYW5zaXRpb25OYXZCYXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmFja2dyb3VuZEltYWdlIiwiT3ZlcmxheSIsInVybCIsInRpdGxlIiwibWFpbkNvbnRlbnQiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGtEQUFrRDs7QUFFN0U7QUFDQSxNQUFNO0FBQ04sMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BIYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBLHVCQUF1QixtQkFBTyxDQUFDLGtGQUEwQjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwQlk7O0FBRVo7O0FBRUE7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLDBFQUFzQjtBQUM3QyxhQUFhLG1CQUFPLENBQUMsd0ZBQWdDO0FBQ3JELFVBQVUsbUJBQU8sQ0FBQyw0R0FBMEM7QUFDNUQsMEJBQTBCLG1CQUFPLENBQUMsNEdBQTBDO0FBQzVFLGtCQUFrQixtQkFBTyxDQUFDLDhGQUFtQztBQUM3RCxhQUFhLG1CQUFPLENBQUMsb0VBQXNCO0FBQzNDLG1CQUFtQixtQkFBTyxDQUFDLDhFQUEyQjtBQUN0RCxrQkFBa0IsbUJBQU8sQ0FBQyxnRkFBNEI7QUFDdEQsYUFBYSxtQkFBTyxDQUFDLDRGQUE4QjtBQUNuRCx3QkFBd0IsbUJBQU8sQ0FBQyw0RkFBK0I7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQWdEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsK0JBQStCO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1DQUFtQztBQUNoRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1DQUFtQztBQUNoRTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUNBQWlDO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFD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bEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMzRFk7O0FBRVosOENBQThDLFlBQVk7O0FBRTFELGFBQWEsbUJBQU8sQ0FBQywrRUFBdUI7QUFDNUMsY0FBYyxtQkFBTyxDQUFDLHlFQUFvQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hNWTs7QUFFWixjQUFjLG1CQUFPLENBQUMsb0ZBQXlCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyxzRkFBMEI7QUFDakQsV0FBVyxtQkFBTyxDQUFDLDhFQUFzQjtBQUN6QyxXQUFXLG1CQUFPLENBQUMsOEVBQXNCO0FBQ3pDLHdCQUF3QixtQkFBTyxDQUFDLDhGQUE4QjtBQUM5RCxzQkFBc0IsbUJBQU8sQ0FBQywwRkFBNEI7QUFDMUQsZUFBZSxtQkFBTyxDQUFDLDBFQUFvQjtBQUMzQyxpQkFBaUIsbUJBQU8sQ0FBQyxvRUFBaUI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkNZOztBQUVaLGtCQUFrQixtQkFBTyxDQUFDLGdGQUF1Qjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1pZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdEZZOztBQUVaLGtCQUFrQixtQkFBTyxDQUFDLG1GQUF5QjtBQUNuRCxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBMkI7QUFDdkQsd0JBQXdCLG1CQUFPLENBQUMsK0ZBQStCO0FBQy9ELGdCQUFnQixtQkFBTyxDQUFDLCtFQUF1QjtBQUMvQyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBd0I7QUFDakQsY0FBYyxtQkFBTyxDQUFDLHlFQUFvQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3pMWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQywyRkFBNkI7QUFDdEQsd0JBQXdCLG1CQUFPLENBQUMseUdBQW9DO0FBQ3BFLGlCQUFpQixtQkFBTyxDQUFDLDJGQUE2QjtBQUN0RCxtQkFBbUIsbUJBQU8sQ0FBQywrRkFBK0I7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUM1SFk7O0FBRVosb0JBQW9CLG1CQUFPLENBQUMsaUdBQWdDO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLG1GQUFvQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsRVk7O0FBRVosdUJBQXVCLG1CQUFPLENBQUMsdUdBQW1DOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDakNZOztBQUVaLG1CQUFtQixtQkFBTyxDQUFDLCtGQUFpQztBQUM1RCx3QkFBd0IsbUJBQU8sQ0FBQyx5R0FBb0M7QUFDcEUsaUJBQWlCLG1CQUFPLENBQUMsMkZBQTZCO0FBQ3RELG9CQUFvQixtQkFBTyxDQUFDLG1HQUFpQzs7QUFFN0Q7QUFDQSw2REFBNkQ7QUFDN0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUM3Rlk7O0FBRVoseUJBQXlCLG1CQUFPLENBQUMsNkdBQXNDO0FBQ3ZFLGdDQUFnQyxtQkFBTyxDQUFDLCtIQUErQztBQUN2RixpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBd0I7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMsbUZBQW9COztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDL0tZOztBQUVaLHlCQUF5QixtQkFBTyxDQUFDLDZHQUFzQztBQUN2RSxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBMkI7QUFDdkQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQXdCO0FBQ2pELG1CQUFtQixtQkFBTyxDQUFDLG1GQUFvQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN2RVk7O0FBRVoseUJBQXlCLG1CQUFPLENBQUMsNkdBQXNDOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDaktZOztBQUVaLHlCQUF5QixtQkFBTyxDQUFDLDZHQUFzQztBQUN2RSxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBd0I7QUFDakQsa0JBQWtCLG1CQUFPLENBQUMsaUZBQXdCO0FBQ2xELG1CQUFtQixtQkFBTyxDQUFDLG1GQUFvQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2xHWTs7QUFFWix5QkFBeUIsbUJBQU8sQ0FBQyw2R0FBc0M7QUFDdkUsZ0NBQWdDLG1CQUFPLENBQUMsK0hBQStDO0FBQ3ZGLDBCQUEwQixtQkFBTyxDQUFDLG1HQUFpQztBQUNuRSx5QkFBeUIsbUJBQU8sQ0FBQywrRkFBMEI7QUFDM0QsbUJBQW1CLG1CQUFPLENBQUMsbUZBQW9CO0FBQy9DLG1CQUFtQixtQkFBTyxDQUFDLG1GQUFvQjtBQUMvQyx3QkFBd0IsbUJBQU8sQ0FBQyw2RkFBeUI7QUFDekQsbUJBQW1CLG1CQUFPLENBQUMsbUZBQW9COztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsSFk7O0FBRVosbUJBQW1CLG1CQUFPLENBQUMsK0ZBQStCO0FBQzFELGdDQUFnQyxtQkFBTyxDQUFDLCtIQUErQztBQUN2Rix5QkFBeUIsbUJBQU8sQ0FBQyw2R0FBc0M7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbElZOztBQUVaLHlCQUF5QixtQkFBTyxDQUFDLDZHQUFzQztBQUN2RSxvQkFBb0IsbUJBQU8sQ0FBQyxpR0FBZ0M7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdkZZOztBQUVaLG9CQUFvQixtQkFBTyxDQUFDLGlHQUFnQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUM3Qlk7O0FBRVoseUJBQXlCLG1CQUFPLENBQUMsNkdBQXNDO0FBQ3ZFLG1CQUFtQixtQkFBTyxDQUFDLG1GQUFvQjs7QUFFL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDMUVZOztBQUVaLHlCQUF5QixtQkFBTyxDQUFDLDZHQUFzQztBQUN2RSxvQkFBb0IsbUJBQU8sQ0FBQyxpR0FBZ0M7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsbUZBQW9COztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMvQlk7O0FBRVoseUJBQXlCLG1CQUFPLENBQUMsNkdBQXNDOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDOUJZOztBQUVaLHlCQUF5QixtQkFBTyxDQUFDLDZHQUFzQztBQUN2RSxnQ0FBZ0MsbUJBQU8sQ0FBQywrSEFBK0M7QUFDdkYsb0JBQW9CLG1CQUFPLENBQUMsaUdBQWdDO0FBQzVELG9CQUFvQixtQkFBTyxDQUFDLHVGQUEyQjtBQUN2RCxtQkFBbUIsbUJBQU8sQ0FBQyxtRkFBb0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDaElZOztBQUVaLGlCQUFpQixtQkFBTyxDQUFDLDJGQUE2QjtBQUN0RCx3QkFBd0IsbUJBQU8sQ0FBQyx5R0FBb0M7QUFDcEUseUJBQXlCLG1CQUFPLENBQUMsNkdBQXNDO0FBQ3ZFLGdDQUFnQyxtQkFBTyxDQUFDLCtIQUErQztBQUN2RixvQkFBb0IsbUJBQU8sQ0FBQyxpR0FBZ0M7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsK0ZBQStCO0FBQzFELHFCQUFxQixtQkFBTyxDQUFDLG1HQUFpQztBQUM5RCxtQkFBbUIsbUJBQU8sQ0FBQywrRkFBK0I7QUFDMUQsdUJBQXVCLG1CQUFPLENBQUMsNkZBQXlCOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDcmVZOztBQUVaLGlCQUFpQixtQkFBTyxDQUFDLDJGQUE2QjtBQUN0RCx3QkFBd0IsbUJBQU8sQ0FBQyx5R0FBb0M7QUFDcEUseUJBQXlCLG1CQUFPLENBQUMsNkdBQXNDO0FBQ3ZFLGdDQUFnQyxtQkFBTyxDQUFDLCtIQUErQztBQUN2RixvQkFBb0IsbUJBQU8sQ0FBQyxpR0FBZ0M7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsbUZBQW9COztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsYlk7O0FBRVosZ0NBQWdDLG1CQUFPLENBQUMsK0hBQStDO0FBQ3ZGLGtCQUFrQixtQkFBTyxDQUFDLG1GQUF5QjtBQUNuRCxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBMkI7QUFDdkQsMEJBQTBCLG1CQUFPLENBQUMsbUdBQWlDO0FBQ25FLGlCQUFpQixtQkFBTyxDQUFDLGlGQUF3QjtBQUNqRCxjQUFjLG1CQUFPLENBQUMseUVBQW9CO0FBQzFDLHlCQUF5QixtQkFBTyxDQUFDLCtGQUEwQjtBQUMzRCxtQkFBbUIsbUJBQU8sQ0FBQyxtRkFBb0I7QUFDL0MsbUJBQW1CLG1CQUFPLENBQUMsbUZBQW9CO0FBQy9DLHdCQUF3QixtQkFBTyxDQUFDLDZGQUF5Qjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDelVZOztBQUVaLGVBQWUsbUJBQU8sQ0FBQywyRUFBZ0I7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzdDWTs7QUFFWixlQUFlLG1CQUFPLENBQUMsMkVBQWdCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbENZOztBQUVaLG1CQUFtQixtQkFBTyxDQUFDLG1GQUFvQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3BCWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQywyRkFBNkI7QUFDdEQsb0JBQW9CLG1CQUFPLENBQUMsaUdBQWdDO0FBQzVELGlCQUFpQixtQkFBTyxDQUFDLGlGQUF3QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBd0I7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMsbUZBQW9CO0FBQy9DLHVCQUF1QixtQkFBTyxDQUFDLDZGQUF5QjtBQUN4RCxvQkFBb0IsbUJBQU8sQ0FBQyxxRkFBcUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNyTlk7O0FBRVoseUJBQXlCLG1CQUFPLENBQUMsNkdBQXND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QSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzNUWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0Qjs7Ozs7Ozs7Ozs7O0FDaFNhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrRUFBa0I7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2ZhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrRUFBa0I7O0FBRXRDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFPLENBQUMsa0VBQWtCOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzlGYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsZ0RBQU87O0FBRTNCLGNBQWMsbUJBQU8sQ0FBQyxnREFBUzs7QUFFL0IsWUFBWSxtQkFBTyxDQUFDLDBEQUFjOztBQUVsQyxnQkFBZ0IsbUJBQU8sQ0FBQyxzREFBWTs7QUFFcEMsc0JBQXNCLG1CQUFPLENBQUMsZ0ZBQXlCOztBQUV2RCxnQkFBZ0IsbUJBQU8sQ0FBQyxxRkFBc0I7O0FBRTlDLG1CQUFtQixtQkFBTyxDQUFDLDJGQUF5Qjs7QUFFcEQsaUJBQWlCLG1CQUFPLENBQUMseUVBQWdCOztBQUV6QyxvQkFBb0IsbUJBQU8sQ0FBQywrRUFBbUI7O0FBRS9DLHFCQUFxQixtQkFBTyxDQUFDLCtFQUFtQjs7QUFFaEQscUJBQXFCLG1CQUFPLENBQUMsK0VBQW1COztBQUVoRCx1QkFBdUIsbUJBQU8sQ0FBQyxtRUFBYTs7QUFFNUMsY0FBYyxtQkFBTyxDQUFDLCtEQUFXOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCOzs7Ozs7Ozs7Ozs7QUNySEE7QUFDYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsZ0RBQU87O0FBRTNCLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQzNKYTs7QUFFYjtBQUNBOztBQUVBLHFGOzs7Ozs7Ozs7Ozs7QUNMYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzNDYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsa0VBQWtCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0JZOztBQUVaOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLGtGQUEwQjs7QUFFckQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2Qlk7O0FBRVosV0FBVyxtQkFBTyxDQUFDLGdEQUFXOztBQUU5Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6RVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9EWTs7QUFFWixXQUFXLG1CQUFPLENBQUMsMENBQU07QUFDekIsYUFBYSxtQkFBTyxDQUFDLHlFQUFXO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyw4Q0FBUTtBQUM3QixZQUFZLG1CQUFPLENBQUMsMERBQWM7QUFDbEMsYUFBYSxtQkFBTyxDQUFDLDhDQUFRO0FBQzdCLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0IsV0FBVzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdmNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVFWTs7QUFFWixZQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtB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OztBQUVEO0FBQ0EsZ0RBQWdELDJCQUEyQjs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxlQUFlO0FBQ2YsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1S1k7O0FBRVosZUFBZSxtQkFBTyxDQUFDLDREQUFlO0FBQ3RDLFlBQVksbUJBQU8sQ0FBQyxtREFBVzs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdDWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDclhZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFaRixlQXNCRTtBQUFLLDJCQUFTLEVBQUMsbUJBQWY7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUFLLDZCQUFTLEVBQUMsbUJBQWY7QUFBQSw0Q0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBRUUscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRixlQUdFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSEYsZUFJRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpGLGVBS0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXRCRixlQWdDRTtBQUFLLDJCQUFTLEVBQUMsbUJBQWY7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUFLLDZCQUFTLEVBQUMsbUJBQWY7QUFBQSw0Q0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBRUUscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRixlQUdFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSEYsZUFJRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpGLGVBS0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWhDRixlQTBDRTtBQUFLLDJCQUFTLEVBQUMsbUJBQWY7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUFLLDZCQUFTLEVBQUMsbUJBQWY7QUFBQSw0Q0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBRUUscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRixlQUdFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSEYsZUFJRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpGLGVBS0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTFDRixlQW9ERTtBQUFLLDJCQUFTLEVBQUMscUJBQWY7QUFBQSwwQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQUEsNENBQ0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUVFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkYsZUFHRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhGLGVBSUUscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKRixlQUtFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBeEJGLGVBeUZFO0FBQUsseUJBQVMsRUFBQyxtQkFBZjtBQUFBLHVDQUNFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXpGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpGLGVBdUhFO0FBQUsscUJBQVMsRUFBRUUscURBQUksQ0FBQyxhQUFELEVBQWdCeEIsSUFBSSxJQUFJLFFBQXhCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUlEOztHQWxLUUosSTtVQUdRTyxxRDs7O0tBSFJQLEk7QUFvS01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nhc2lub3MvW3BpZF0uODgzMDI2NjExZTE2NGYwZGNhZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhaWxcblxuZnVuY3Rpb24gYmFpbChlcnIpIHtcbiAgaWYgKGVycikge1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7IC8qKi8gfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG4vLyBJZiBuYW1lIGlzICdfX3Byb3RvX18nLCBhbmQgT2JqZWN0LmRlZmluZVByb3BlcnR5IGlzIGF2YWlsYWJsZSwgZGVmaW5lIF9fcHJvdG9fXyBhcyBhbiBvd24gcHJvcGVydHkgb24gdGFyZ2V0XG52YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiBzZXRQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMpIHtcblx0aWYgKGRlZmluZVByb3BlcnR5ICYmIG9wdGlvbnMubmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMubmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBvcHRpb25zLm5ld1ZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR0YXJnZXRbb3B0aW9ucy5uYW1lXSA9IG9wdGlvbnMubmV3VmFsdWU7XG5cdH1cbn07XG5cbi8vIFJldHVybiB1bmRlZmluZWQgaW5zdGVhZCBvZiBfX3Byb3RvX18gaWYgJ19fcHJvdG9fXycgaXMgbm90IGFuIG93biBwcm9wZXJ0eVxudmFyIGdldFByb3BlcnR5ID0gZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBuYW1lKSB7XG5cdGlmIChuYW1lID09PSAnX19wcm90b19fJykge1xuXHRcdGlmICghaGFzT3duLmNhbGwob2JqLCBuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9IGVsc2UgaWYgKGdPUEQpIHtcblx0XHRcdC8vIEluIGVhcmx5IHZlcnNpb25zIG9mIG5vZGUsIG9ialsnX19wcm90b19fJ10gaXMgYnVnZ3kgd2hlbiBvYmogaGFzXG5cdFx0XHQvLyBfX3Byb3RvX18gYXMgYW4gb3duIHByb3BlcnR5LiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkgd29ya3MuXG5cdFx0XHRyZXR1cm4gZ09QRChvYmosIG5hbWUpLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvYmpbbmFtZV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lO1xuXHR2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgaSA9IDE7XG5cdHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHR2YXIgZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXHRpZiAodGFyZ2V0ID09IG51bGwgfHwgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gZ2V0UHJvcGVydHkodGFyZ2V0LCBuYW1lKTtcblx0XHRcdFx0Y29weSA9IGdldFByb3BlcnR5KG9wdGlvbnMsIG5hbWUpO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHsgbmFtZTogbmFtZSwgbmV3VmFsdWU6IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSkgfSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHNldFByb3BlcnR5KHRhcmdldCwgeyBuYW1lOiBuYW1lLCBuZXdWYWx1ZTogY29weSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB2YWx1ZSA9PiB7XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG5cdHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xufTtcbiIsInZhciB2aXNpdFdpdGhQYXJlbnRzID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJyk7XG5cbmZ1bmN0aW9uIGFkZExpc3RNZXRhZGF0YSgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhc3QpIHtcbiAgICB2aXNpdFdpdGhQYXJlbnRzKGFzdCwgJ2xpc3QnLCBmdW5jdGlvbiAobGlzdE5vZGUsIHBhcmVudHMpIHtcbiAgICAgIHZhciBkZXB0aCA9IDAsIGksIG47XG4gICAgICBmb3IgKGkgPSAwLCBuID0gcGFyZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaWYgKHBhcmVudHNbaV0udHlwZSA9PT0gJ2xpc3QnKSBkZXB0aCArPSAxO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMCwgbiA9IGxpc3ROb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBsaXN0Tm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgY2hpbGQuaW5kZXggPSBpO1xuICAgICAgICBjaGlsZC5vcmRlcmVkID0gbGlzdE5vZGUub3JkZXJlZDtcbiAgICAgIH1cbiAgICAgIGxpc3ROb2RlLmRlcHRoID0gZGVwdGg7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFzdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRMaXN0TWV0YWRhdGE7XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmcm9tTWFya2Rvd25cblxuLy8gVGhlc2UgdGhyZWUgYXJlIGNvbXBpbGVkIGF3YXkgaW4gdGhlIGBkaXN0L2BcblxudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnbWRhc3QtdXRpbC10by1zdHJpbmcnKVxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L2NvbnN0YW50L2Fzc2lnbicpXG52YXIgb3duID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvaGFzLW93bi1wcm9wZXJ0eScpXG52YXIgbm9ybWFsaXplSWRlbnRpZmllciA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3V0aWwvbm9ybWFsaXplLWlkZW50aWZpZXInKVxudmFyIHNhZmVGcm9tSW50ID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdXRpbC9zYWZlLWZyb20taW50JylcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9wYXJzZScpXG52YXIgcHJlcHJvY2Vzc29yID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvcHJlcHJvY2VzcycpXG52YXIgcG9zdHByb2Nlc3MgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9wb3N0cHJvY2VzcycpXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMvZGVjb2RlLWVudGl0eScpXG52YXIgc3RyaW5naWZ5UG9zaXRpb24gPSByZXF1aXJlKCd1bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbicpXG5cbmZ1bmN0aW9uIGZyb21NYXJrZG93bih2YWx1ZSwgZW5jb2RpbmcsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIGNvbXBpbGVyKG9wdGlvbnMpKFxuICAgIHBvc3Rwcm9jZXNzKFxuICAgICAgcGFyc2VyKG9wdGlvbnMpLmRvY3VtZW50KCkud3JpdGUocHJlcHJvY2Vzc29yKCkodmFsdWUsIGVuY29kaW5nLCB0cnVlKSlcbiAgICApXG4gIClcbn1cblxuLy8gTm90ZSB0aGlzIGNvbXBpbGVyIG9ubHkgdW5kZXJzdGFuZCBjb21wbGV0ZSBidWZmZXJpbmcsIG5vdCBzdHJlYW1pbmcuXG5mdW5jdGlvbiBjb21waWxlcihvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGNvbmZpZyA9IGNvbmZpZ3VyZShcbiAgICB7XG4gICAgICB0cmFuc2Zvcm1zOiBbXSxcbiAgICAgIGNhbkNvbnRhaW5Fb2xzOiBbXG4gICAgICAgICdlbXBoYXNpcycsXG4gICAgICAgICdmcmFnbWVudCcsXG4gICAgICAgICdoZWFkaW5nJyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICdzdHJvbmcnXG4gICAgICBdLFxuXG4gICAgICBlbnRlcjoge1xuICAgICAgICBhdXRvbGluazogb3BlbmVyKGxpbmspLFxuICAgICAgICBhdXRvbGlua1Byb3RvY29sOiBvbmVudGVyZGF0YSxcbiAgICAgICAgYXV0b2xpbmtFbWFpbDogb25lbnRlcmRhdGEsXG4gICAgICAgIGF0eEhlYWRpbmc6IG9wZW5lcihoZWFkaW5nKSxcbiAgICAgICAgYmxvY2tRdW90ZTogb3BlbmVyKGJsb2NrUXVvdGUpLFxuICAgICAgICBjaGFyYWN0ZXJFc2NhcGU6IG9uZW50ZXJkYXRhLFxuICAgICAgICBjaGFyYWN0ZXJSZWZlcmVuY2U6IG9uZW50ZXJkYXRhLFxuICAgICAgICBjb2RlRmVuY2VkOiBvcGVuZXIoY29kZUZsb3cpLFxuICAgICAgICBjb2RlRmVuY2VkRmVuY2VJbmZvOiBidWZmZXIsXG4gICAgICAgIGNvZGVGZW5jZWRGZW5jZU1ldGE6IGJ1ZmZlcixcbiAgICAgICAgY29kZUluZGVudGVkOiBvcGVuZXIoY29kZUZsb3csIGJ1ZmZlciksXG4gICAgICAgIGNvZGVUZXh0OiBvcGVuZXIoY29kZVRleHQsIGJ1ZmZlciksXG4gICAgICAgIGNvZGVUZXh0RGF0YTogb25lbnRlcmRhdGEsXG4gICAgICAgIGRhdGE6IG9uZW50ZXJkYXRhLFxuICAgICAgICBjb2RlRmxvd1ZhbHVlOiBvbmVudGVyZGF0YSxcbiAgICAgICAgZGVmaW5pdGlvbjogb3BlbmVyKGRlZmluaXRpb24pLFxuICAgICAgICBkZWZpbml0aW9uRGVzdGluYXRpb25TdHJpbmc6IGJ1ZmZlcixcbiAgICAgICAgZGVmaW5pdGlvbkxhYmVsU3RyaW5nOiBidWZmZXIsXG4gICAgICAgIGRlZmluaXRpb25UaXRsZVN0cmluZzogYnVmZmVyLFxuICAgICAgICBlbXBoYXNpczogb3BlbmVyKGVtcGhhc2lzKSxcbiAgICAgICAgaGFyZEJyZWFrRXNjYXBlOiBvcGVuZXIoaGFyZEJyZWFrKSxcbiAgICAgICAgaGFyZEJyZWFrVHJhaWxpbmc6IG9wZW5lcihoYXJkQnJlYWspLFxuICAgICAgICBodG1sRmxvdzogb3BlbmVyKGh0bWwsIGJ1ZmZlciksXG4gICAgICAgIGh0bWxGbG93RGF0YTogb25lbnRlcmRhdGEsXG4gICAgICAgIGh0bWxUZXh0OiBvcGVuZXIoaHRtbCwgYnVmZmVyKSxcbiAgICAgICAgaHRtbFRleHREYXRhOiBvbmVudGVyZGF0YSxcbiAgICAgICAgaW1hZ2U6IG9wZW5lcihpbWFnZSksXG4gICAgICAgIGxhYmVsOiBidWZmZXIsXG4gICAgICAgIGxpbms6IG9wZW5lcihsaW5rKSxcbiAgICAgICAgbGlzdEl0ZW06IG9wZW5lcihsaXN0SXRlbSksXG4gICAgICAgIGxpc3RJdGVtVmFsdWU6IG9uZW50ZXJsaXN0aXRlbXZhbHVlLFxuICAgICAgICBsaXN0T3JkZXJlZDogb3BlbmVyKGxpc3QsIG9uZW50ZXJsaXN0b3JkZXJlZCksXG4gICAgICAgIGxpc3RVbm9yZGVyZWQ6IG9wZW5lcihsaXN0KSxcbiAgICAgICAgcGFyYWdyYXBoOiBvcGVuZXIocGFyYWdyYXBoKSxcbiAgICAgICAgcmVmZXJlbmNlOiBvbmVudGVycmVmZXJlbmNlLFxuICAgICAgICByZWZlcmVuY2VTdHJpbmc6IGJ1ZmZlcixcbiAgICAgICAgcmVzb3VyY2VEZXN0aW5hdGlvblN0cmluZzogYnVmZmVyLFxuICAgICAgICByZXNvdXJjZVRpdGxlU3RyaW5nOiBidWZmZXIsXG4gICAgICAgIHNldGV4dEhlYWRpbmc6IG9wZW5lcihoZWFkaW5nKSxcbiAgICAgICAgc3Ryb25nOiBvcGVuZXIoc3Ryb25nKSxcbiAgICAgICAgdGhlbWF0aWNCcmVhazogb3BlbmVyKHRoZW1hdGljQnJlYWspXG4gICAgICB9LFxuXG4gICAgICBleGl0OiB7XG4gICAgICAgIGF0eEhlYWRpbmc6IGNsb3NlcigpLFxuICAgICAgICBhdHhIZWFkaW5nU2VxdWVuY2U6IG9uZXhpdGF0eGhlYWRpbmdzZXF1ZW5jZSxcbiAgICAgICAgYXV0b2xpbms6IGNsb3NlcigpLFxuICAgICAgICBhdXRvbGlua0VtYWlsOiBvbmV4aXRhdXRvbGlua2VtYWlsLFxuICAgICAgICBhdXRvbGlua1Byb3RvY29sOiBvbmV4aXRhdXRvbGlua3Byb3RvY29sLFxuICAgICAgICBibG9ja1F1b3RlOiBjbG9zZXIoKSxcbiAgICAgICAgY2hhcmFjdGVyRXNjYXBlVmFsdWU6IG9uZXhpdGRhdGEsXG4gICAgICAgIGNoYXJhY3RlclJlZmVyZW5jZU1hcmtlckhleGFkZWNpbWFsOiBvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2VtYXJrZXIsXG4gICAgICAgIGNoYXJhY3RlclJlZmVyZW5jZU1hcmtlck51bWVyaWM6IG9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZW1hcmtlcixcbiAgICAgICAgY2hhcmFjdGVyUmVmZXJlbmNlVmFsdWU6IG9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZXZhbHVlLFxuICAgICAgICBjb2RlRmVuY2VkOiBjbG9zZXIob25leGl0Y29kZWZlbmNlZCksXG4gICAgICAgIGNvZGVGZW5jZWRGZW5jZTogb25leGl0Y29kZWZlbmNlZGZlbmNlLFxuICAgICAgICBjb2RlRmVuY2VkRmVuY2VJbmZvOiBvbmV4aXRjb2RlZmVuY2VkZmVuY2VpbmZvLFxuICAgICAgICBjb2RlRmVuY2VkRmVuY2VNZXRhOiBvbmV4aXRjb2RlZmVuY2VkZmVuY2VtZXRhLFxuICAgICAgICBjb2RlRmxvd1ZhbHVlOiBvbmV4aXRkYXRhLFxuICAgICAgICBjb2RlSW5kZW50ZWQ6IGNsb3NlcihvbmV4aXRjb2RlaW5kZW50ZWQpLFxuICAgICAgICBjb2RlVGV4dDogY2xvc2VyKG9uZXhpdGNvZGV0ZXh0KSxcbiAgICAgICAgY29kZVRleHREYXRhOiBvbmV4aXRkYXRhLFxuICAgICAgICBkYXRhOiBvbmV4aXRkYXRhLFxuICAgICAgICBkZWZpbml0aW9uOiBjbG9zZXIoKSxcbiAgICAgICAgZGVmaW5pdGlvbkRlc3RpbmF0aW9uU3RyaW5nOiBvbmV4aXRkZWZpbml0aW9uZGVzdGluYXRpb25zdHJpbmcsXG4gICAgICAgIGRlZmluaXRpb25MYWJlbFN0cmluZzogb25leGl0ZGVmaW5pdGlvbmxhYmVsc3RyaW5nLFxuICAgICAgICBkZWZpbml0aW9uVGl0bGVTdHJpbmc6IG9uZXhpdGRlZmluaXRpb250aXRsZXN0cmluZyxcbiAgICAgICAgZW1waGFzaXM6IGNsb3NlcigpLFxuICAgICAgICBoYXJkQnJlYWtFc2NhcGU6IGNsb3NlcihvbmV4aXRoYXJkYnJlYWspLFxuICAgICAgICBoYXJkQnJlYWtUcmFpbGluZzogY2xvc2VyKG9uZXhpdGhhcmRicmVhayksXG4gICAgICAgIGh0bWxGbG93OiBjbG9zZXIob25leGl0aHRtbGZsb3cpLFxuICAgICAgICBodG1sRmxvd0RhdGE6IG9uZXhpdGRhdGEsXG4gICAgICAgIGh0bWxUZXh0OiBjbG9zZXIob25leGl0aHRtbHRleHQpLFxuICAgICAgICBodG1sVGV4dERhdGE6IG9uZXhpdGRhdGEsXG4gICAgICAgIGltYWdlOiBjbG9zZXIob25leGl0aW1hZ2UpLFxuICAgICAgICBsYWJlbDogb25leGl0bGFiZWwsXG4gICAgICAgIGxhYmVsVGV4dDogb25leGl0bGFiZWx0ZXh0LFxuICAgICAgICBsaW5lRW5kaW5nOiBvbmV4aXRsaW5lZW5kaW5nLFxuICAgICAgICBsaW5rOiBjbG9zZXIob25leGl0bGluayksXG4gICAgICAgIGxpc3RJdGVtOiBjbG9zZXIoKSxcbiAgICAgICAgbGlzdE9yZGVyZWQ6IGNsb3NlcigpLFxuICAgICAgICBsaXN0VW5vcmRlcmVkOiBjbG9zZXIoKSxcbiAgICAgICAgcGFyYWdyYXBoOiBjbG9zZXIoKSxcbiAgICAgICAgcmVmZXJlbmNlU3RyaW5nOiBvbmV4aXRyZWZlcmVuY2VzdHJpbmcsXG4gICAgICAgIHJlc291cmNlRGVzdGluYXRpb25TdHJpbmc6IG9uZXhpdHJlc291cmNlZGVzdGluYXRpb25zdHJpbmcsXG4gICAgICAgIHJlc291cmNlVGl0bGVTdHJpbmc6IG9uZXhpdHJlc291cmNldGl0bGVzdHJpbmcsXG4gICAgICAgIHJlc291cmNlOiBvbmV4aXRyZXNvdXJjZSxcbiAgICAgICAgc2V0ZXh0SGVhZGluZzogY2xvc2VyKG9uZXhpdHNldGV4dGhlYWRpbmcpLFxuICAgICAgICBzZXRleHRIZWFkaW5nTGluZVNlcXVlbmNlOiBvbmV4aXRzZXRleHRoZWFkaW5nbGluZXNlcXVlbmNlLFxuICAgICAgICBzZXRleHRIZWFkaW5nVGV4dDogb25leGl0c2V0ZXh0aGVhZGluZ3RleHQsXG4gICAgICAgIHN0cm9uZzogY2xvc2VyKCksXG4gICAgICAgIHRoZW1hdGljQnJlYWs6IGNsb3NlcigpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHNldHRpbmdzLm1kYXN0RXh0ZW5zaW9ucyB8fCBbXVxuICApXG5cbiAgdmFyIGRhdGEgPSB7fVxuXG4gIHJldHVybiBjb21waWxlXG5cbiAgZnVuY3Rpb24gY29tcGlsZShldmVudHMpIHtcbiAgICB2YXIgdHJlZSA9IHt0eXBlOiAncm9vdCcsIGNoaWxkcmVuOiBbXX1cbiAgICB2YXIgc3RhY2sgPSBbdHJlZV1cbiAgICB2YXIgdG9rZW5TdGFjayA9IFtdXG4gICAgdmFyIGxpc3RTdGFjayA9IFtdXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgaGFuZGxlclxuICAgIHZhciBsaXN0U3RhcnRcblxuICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgc3RhY2s6IHN0YWNrLFxuICAgICAgdG9rZW5TdGFjazogdG9rZW5TdGFjayxcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgZW50ZXI6IGVudGVyLFxuICAgICAgZXhpdDogZXhpdCxcbiAgICAgIGJ1ZmZlcjogYnVmZmVyLFxuICAgICAgcmVzdW1lOiByZXN1bWUsXG4gICAgICBzZXREYXRhOiBzZXREYXRhLFxuICAgICAgZ2V0RGF0YTogZ2V0RGF0YVxuICAgIH1cblxuICAgIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgLy8gV2UgcHJlcHJvY2VzcyBsaXN0cyB0byBhZGQgYGxpc3RJdGVtYCB0b2tlbnMsIGFuZCB0byBpbmZlciB3aGV0aGVyXG4gICAgICAvLyBpdGVtcyB0aGUgbGlzdCBpdHNlbGYgYXJlIHNwcmVhZCBvdXQuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2xpc3RPcmRlcmVkJyB8fFxuICAgICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdsaXN0VW5vcmRlcmVkJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgbGlzdFN0YWNrLnB1c2goaW5kZXgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdFN0YXJ0ID0gbGlzdFN0YWNrLnBvcChpbmRleClcbiAgICAgICAgICBpbmRleCA9IHByZXBhcmVMaXN0KGV2ZW50cywgbGlzdFN0YXJ0LCBpbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgaGFuZGxlciA9IGNvbmZpZ1tldmVudHNbaW5kZXhdWzBdXVxuXG4gICAgICBpZiAob3duLmNhbGwoaGFuZGxlciwgZXZlbnRzW2luZGV4XVsxXS50eXBlKSkge1xuICAgICAgICBoYW5kbGVyW2V2ZW50c1tpbmRleF1bMV0udHlwZV0uY2FsbChcbiAgICAgICAgICBhc3NpZ24oe3NsaWNlU2VyaWFsaXplOiBldmVudHNbaW5kZXhdWzJdLnNsaWNlU2VyaWFsaXplfSwgY29udGV4dCksXG4gICAgICAgICAgZXZlbnRzW2luZGV4XVsxXVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRva2VuU3RhY2subGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW5ub3QgY2xvc2UgZG9jdW1lbnQsIGEgdG9rZW4gKGAnICtcbiAgICAgICAgICB0b2tlblN0YWNrW3Rva2VuU3RhY2subGVuZ3RoIC0gMV0udHlwZSArXG4gICAgICAgICAgJ2AsICcgK1xuICAgICAgICAgIHN0cmluZ2lmeVBvc2l0aW9uKHtcbiAgICAgICAgICAgIHN0YXJ0OiB0b2tlblN0YWNrW3Rva2VuU3RhY2subGVuZ3RoIC0gMV0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHRva2VuU3RhY2tbdG9rZW5TdGFjay5sZW5ndGggLSAxXS5lbmRcbiAgICAgICAgICB9KSArXG4gICAgICAgICAgJykgaXMgc3RpbGwgb3BlbidcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBGaWd1cmUgb3V0IGByb290YCBwb3NpdGlvbi5cbiAgICB0cmVlLnBvc2l0aW9uID0ge1xuICAgICAgc3RhcnQ6IHBvaW50KFxuICAgICAgICBldmVudHMubGVuZ3RoID8gZXZlbnRzWzBdWzFdLnN0YXJ0IDoge2xpbmU6IDEsIGNvbHVtbjogMSwgb2Zmc2V0OiAwfVxuICAgICAgKSxcblxuICAgICAgZW5kOiBwb2ludChcbiAgICAgICAgZXZlbnRzLmxlbmd0aFxuICAgICAgICAgID8gZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAyXVsxXS5lbmRcbiAgICAgICAgICA6IHtsaW5lOiAxLCBjb2x1bW46IDEsIG9mZnNldDogMH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBpbmRleCA9IC0xXG4gICAgd2hpbGUgKCsraW5kZXggPCBjb25maWcudHJhbnNmb3Jtcy5sZW5ndGgpIHtcbiAgICAgIHRyZWUgPSBjb25maWcudHJhbnNmb3Jtc1tpbmRleF0odHJlZSkgfHwgdHJlZVxuICAgIH1cblxuICAgIHJldHVybiB0cmVlXG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlTGlzdChldmVudHMsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgICB2YXIgaW5kZXggPSBzdGFydCAtIDFcbiAgICB2YXIgY29udGFpbmVyQmFsYW5jZSA9IC0xXG4gICAgdmFyIGxpc3RTcHJlYWQgPSBmYWxzZVxuICAgIHZhciBsaXN0SXRlbVxuICAgIHZhciB0YWlsSW5kZXhcbiAgICB2YXIgbGluZUluZGV4XG4gICAgdmFyIHRhaWxFdmVudFxuICAgIHZhciBldmVudFxuICAgIHZhciBmaXJzdEJsYW5rTGluZUluZGV4XG4gICAgdmFyIGF0TWFya2VyXG5cbiAgICB3aGlsZSAoKytpbmRleCA8PSBsZW5ndGgpIHtcbiAgICAgIGV2ZW50ID0gZXZlbnRzW2luZGV4XVxuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0VW5vcmRlcmVkJyB8fFxuICAgICAgICBldmVudFsxXS50eXBlID09PSAnbGlzdE9yZGVyZWQnIHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdibG9ja1F1b3RlJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChldmVudFswXSA9PT0gJ2VudGVyJykge1xuICAgICAgICAgIGNvbnRhaW5lckJhbGFuY2UrK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lckJhbGFuY2UtLVxuICAgICAgICB9XG5cbiAgICAgICAgYXRNYXJrZXIgPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnRbMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmdCbGFuaycpIHtcbiAgICAgICAgaWYgKGV2ZW50WzBdID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbGlzdEl0ZW0gJiZcbiAgICAgICAgICAgICFhdE1hcmtlciAmJlxuICAgICAgICAgICAgIWNvbnRhaW5lckJhbGFuY2UgJiZcbiAgICAgICAgICAgICFmaXJzdEJsYW5rTGluZUluZGV4XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBmaXJzdEJsYW5rTGluZUluZGV4ID0gaW5kZXhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhdE1hcmtlciA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBldmVudFsxXS50eXBlID09PSAnbGluZVByZWZpeCcgfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RJdGVtVmFsdWUnIHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0SXRlbU1hcmtlcicgfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RJdGVtUHJlZml4JyB8fFxuICAgICAgICBldmVudFsxXS50eXBlID09PSAnbGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlJ1xuICAgICAgKSB7XG4gICAgICAgIC8vIEVtcHR5LlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXRNYXJrZXIgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAoIWNvbnRhaW5lckJhbGFuY2UgJiZcbiAgICAgICAgICBldmVudFswXSA9PT0gJ2VudGVyJyAmJlxuICAgICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0SXRlbVByZWZpeCcpIHx8XG4gICAgICAgIChjb250YWluZXJCYWxhbmNlID09PSAtMSAmJlxuICAgICAgICAgIGV2ZW50WzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICAoZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RVbm9yZGVyZWQnIHx8XG4gICAgICAgICAgICBldmVudFsxXS50eXBlID09PSAnbGlzdE9yZGVyZWQnKSlcbiAgICAgICkge1xuICAgICAgICBpZiAobGlzdEl0ZW0pIHtcbiAgICAgICAgICB0YWlsSW5kZXggPSBpbmRleFxuICAgICAgICAgIGxpbmVJbmRleCA9IHVuZGVmaW5lZFxuXG4gICAgICAgICAgd2hpbGUgKHRhaWxJbmRleC0tKSB7XG4gICAgICAgICAgICB0YWlsRXZlbnQgPSBldmVudHNbdGFpbEluZGV4XVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID09PSAnbGluZUVuZGluZycgfHxcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nQmxhbmsnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKHRhaWxFdmVudFswXSA9PT0gJ2V4aXQnKSBjb250aW51ZVxuXG4gICAgICAgICAgICAgIGlmIChsaW5lSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBldmVudHNbbGluZUluZGV4XVsxXS50eXBlID0gJ2xpbmVFbmRpbmdCbGFuaydcbiAgICAgICAgICAgICAgICBsaXN0U3ByZWFkID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPSAnbGluZUVuZGluZydcbiAgICAgICAgICAgICAgbGluZUluZGV4ID0gdGFpbEluZGV4XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gJ2xpbmVQcmVmaXgnIHx8XG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID09PSAnYmxvY2tRdW90ZVByZWZpeCcgfHxcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09ICdibG9ja1F1b3RlUHJlZml4V2hpdGVzcGFjZScgfHxcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09ICdibG9ja1F1b3RlTWFya2VyJyB8fFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RJdGVtSW5kZW50J1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIC8vIEVtcHR5XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGZpcnN0QmxhbmtMaW5lSW5kZXggJiZcbiAgICAgICAgICAgICghbGluZUluZGV4IHx8IGZpcnN0QmxhbmtMaW5lSW5kZXggPCBsaW5lSW5kZXgpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBsaXN0SXRlbS5fc3ByZWFkID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEZpeCBwb3NpdGlvbi5cbiAgICAgICAgICBsaXN0SXRlbS5lbmQgPSBwb2ludChcbiAgICAgICAgICAgIGxpbmVJbmRleCA/IGV2ZW50c1tsaW5lSW5kZXhdWzFdLnN0YXJ0IDogZXZlbnRbMV0uZW5kXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgZXZlbnRzLnNwbGljZShsaW5lSW5kZXggfHwgaW5kZXgsIDAsIFsnZXhpdCcsIGxpc3RJdGVtLCBldmVudFsyXV0pXG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICAgIGxlbmd0aCsrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbGlzdCBpdGVtLlxuICAgICAgICBpZiAoZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RJdGVtUHJlZml4Jykge1xuICAgICAgICAgIGxpc3RJdGVtID0ge1xuICAgICAgICAgICAgdHlwZTogJ2xpc3RJdGVtJyxcbiAgICAgICAgICAgIF9zcHJlYWQ6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnQ6IHBvaW50KGV2ZW50WzFdLnN0YXJ0KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2ZW50cy5zcGxpY2UoaW5kZXgsIDAsIFsnZW50ZXInLCBsaXN0SXRlbSwgZXZlbnRbMl1dKVxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBsZW5ndGgrK1xuICAgICAgICAgIGZpcnN0QmxhbmtMaW5lSW5kZXggPSB1bmRlZmluZWRcbiAgICAgICAgICBhdE1hcmtlciA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50c1tzdGFydF1bMV0uX3NwcmVhZCA9IGxpc3RTcHJlYWRcbiAgICByZXR1cm4gbGVuZ3RoXG4gIH1cblxuICBmdW5jdGlvbiBzZXREYXRhKGtleSwgdmFsdWUpIHtcbiAgICBkYXRhW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YShrZXkpIHtcbiAgICByZXR1cm4gZGF0YVtrZXldXG4gIH1cblxuICBmdW5jdGlvbiBwb2ludChkKSB7XG4gICAgcmV0dXJuIHtsaW5lOiBkLmxpbmUsIGNvbHVtbjogZC5jb2x1bW4sIG9mZnNldDogZC5vZmZzZXR9XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuZXIoY3JlYXRlLCBhbmQpIHtcbiAgICByZXR1cm4gb3BlblxuXG4gICAgZnVuY3Rpb24gb3Blbih0b2tlbikge1xuICAgICAgZW50ZXIuY2FsbCh0aGlzLCBjcmVhdGUodG9rZW4pLCB0b2tlbilcbiAgICAgIGlmIChhbmQpIGFuZC5jYWxsKHRoaXMsIHRva2VuKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlcigpIHtcbiAgICB0aGlzLnN0YWNrLnB1c2goe3R5cGU6ICdmcmFnbWVudCcsIGNoaWxkcmVuOiBbXX0pXG4gIH1cblxuICBmdW5jdGlvbiBlbnRlcihub2RlLCB0b2tlbikge1xuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5jaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgdGhpcy5zdGFjay5wdXNoKG5vZGUpXG4gICAgdGhpcy50b2tlblN0YWNrLnB1c2godG9rZW4pXG4gICAgbm9kZS5wb3NpdGlvbiA9IHtzdGFydDogcG9pbnQodG9rZW4uc3RhcnQpfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZXIoYW5kKSB7XG4gICAgcmV0dXJuIGNsb3NlXG5cbiAgICBmdW5jdGlvbiBjbG9zZSh0b2tlbikge1xuICAgICAgaWYgKGFuZCkgYW5kLmNhbGwodGhpcywgdG9rZW4pXG4gICAgICBleGl0LmNhbGwodGhpcywgdG9rZW4pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXhpdCh0b2tlbikge1xuICAgIHZhciBub2RlID0gdGhpcy5zdGFjay5wb3AoKVxuICAgIHZhciBvcGVuID0gdGhpcy50b2tlblN0YWNrLnBvcCgpXG5cbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBjbG9zZSBgJyArXG4gICAgICAgICAgdG9rZW4udHlwZSArXG4gICAgICAgICAgJ2AgKCcgK1xuICAgICAgICAgIHN0cmluZ2lmeVBvc2l0aW9uKHtzdGFydDogdG9rZW4uc3RhcnQsIGVuZDogdG9rZW4uZW5kfSkgK1xuICAgICAgICAgICcpOiBpdOKAmXMgbm90IG9wZW4nXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChvcGVuLnR5cGUgIT09IHRva2VuLnR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBjbG9zZSBgJyArXG4gICAgICAgICAgdG9rZW4udHlwZSArXG4gICAgICAgICAgJ2AgKCcgK1xuICAgICAgICAgIHN0cmluZ2lmeVBvc2l0aW9uKHtzdGFydDogdG9rZW4uc3RhcnQsIGVuZDogdG9rZW4uZW5kfSkgK1xuICAgICAgICAgICcpOiBhIGRpZmZlcmVudCB0b2tlbiAoYCcgK1xuICAgICAgICAgIG9wZW4udHlwZSArXG4gICAgICAgICAgJ2AsICcgK1xuICAgICAgICAgIHN0cmluZ2lmeVBvc2l0aW9uKHtzdGFydDogb3Blbi5zdGFydCwgZW5kOiBvcGVuLmVuZH0pICtcbiAgICAgICAgICAnKSBpcyBvcGVuJ1xuICAgICAgKVxuICAgIH1cblxuICAgIG5vZGUucG9zaXRpb24uZW5kID0gcG9pbnQodG9rZW4uZW5kKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nKHRoaXMuc3RhY2sucG9wKCkpXG4gIH1cblxuICAvL1xuICAvLyBIYW5kbGVycy5cbiAgLy9cblxuICBmdW5jdGlvbiBvbmVudGVybGlzdG9yZGVyZWQoKSB7XG4gICAgc2V0RGF0YSgnZXhwZWN0aW5nRmlyc3RMaXN0SXRlbVZhbHVlJywgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZW50ZXJsaXN0aXRlbXZhbHVlKHRva2VuKSB7XG4gICAgaWYgKGdldERhdGEoJ2V4cGVjdGluZ0ZpcnN0TGlzdEl0ZW1WYWx1ZScpKSB7XG4gICAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMl0uc3RhcnQgPSBwYXJzZUludChcbiAgICAgICAgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbiksXG4gICAgICAgIDEwXG4gICAgICApXG5cbiAgICAgIHNldERhdGEoJ2V4cGVjdGluZ0ZpcnN0TGlzdEl0ZW1WYWx1ZScpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZWZlbmNlZGZlbmNlaW5mbygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0ubGFuZyA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGNvZGVmZW5jZWRmZW5jZW1ldGEoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLm1ldGEgPSBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRjb2RlZmVuY2VkZmVuY2UoKSB7XG4gICAgLy8gRXhpdCBpZiB0aGlzIGlzIHRoZSBjbG9zaW5nIGZlbmNlLlxuICAgIGlmIChnZXREYXRhKCdmbG93Q29kZUluc2lkZScpKSByZXR1cm5cbiAgICB0aGlzLmJ1ZmZlcigpXG4gICAgc2V0RGF0YSgnZmxvd0NvZGVJbnNpZGUnLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZWZlbmNlZCgpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udmFsdWUgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAvXihcXHI/XFxufFxccil8KFxccj9cXG58XFxyKSQvZyxcbiAgICAgICcnXG4gICAgKVxuXG4gICAgc2V0RGF0YSgnZmxvd0NvZGVJbnNpZGUnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZWluZGVudGVkKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGRlZmluaXRpb25sYWJlbHN0cmluZyh0b2tlbikge1xuICAgIC8vIERpc2NhcmQgbGFiZWwsIHVzZSB0aGUgc291cmNlIGNvbnRlbnQgaW5zdGVhZC5cbiAgICB2YXIgbGFiZWwgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmxhYmVsID0gbGFiZWxcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uaWRlbnRpZmllciA9IG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICAgICkudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0ZGVmaW5pdGlvbnRpdGxlc3RyaW5nKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS50aXRsZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGRlZmluaXRpb25kZXN0aW5hdGlvbnN0cmluZygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udXJsID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0YXR4aGVhZGluZ3NlcXVlbmNlKHRva2VuKSB7XG4gICAgaWYgKCF0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uZGVwdGgpIHtcbiAgICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5kZXB0aCA9IHRoaXMuc2xpY2VTZXJpYWxpemUoXG4gICAgICAgIHRva2VuXG4gICAgICApLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdHNldGV4dGhlYWRpbmd0ZXh0KCkge1xuICAgIHNldERhdGEoJ3NldGV4dEhlYWRpbmdTbHVycExpbmVFbmRpbmcnLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0c2V0ZXh0aGVhZGluZ2xpbmVzZXF1ZW5jZSh0b2tlbikge1xuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5kZXB0aCA9XG4gICAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKS5jaGFyQ29kZUF0KDApID09PSA2MSA/IDEgOiAyXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRzZXRleHRoZWFkaW5nKCkge1xuICAgIHNldERhdGEoJ3NldGV4dEhlYWRpbmdTbHVycExpbmVFbmRpbmcnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25lbnRlcmRhdGEodG9rZW4pIHtcbiAgICB2YXIgc2libGluZ3MgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uY2hpbGRyZW5cbiAgICB2YXIgdGFpbCA9IHNpYmxpbmdzW3NpYmxpbmdzLmxlbmd0aCAtIDFdXG5cbiAgICBpZiAoIXRhaWwgfHwgdGFpbC50eXBlICE9PSAndGV4dCcpIHtcbiAgICAgIC8vIEFkZCBhIG5ldyB0ZXh0IG5vZGUuXG4gICAgICB0YWlsID0gdGV4dCgpXG4gICAgICB0YWlsLnBvc2l0aW9uID0ge3N0YXJ0OiBwb2ludCh0b2tlbi5zdGFydCl9XG4gICAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaCh0YWlsKVxuICAgIH1cblxuICAgIHRoaXMuc3RhY2sucHVzaCh0YWlsKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0ZGF0YSh0b2tlbikge1xuICAgIHZhciB0YWlsID0gdGhpcy5zdGFjay5wb3AoKVxuICAgIHRhaWwudmFsdWUgKz0gdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgICB0YWlsLnBvc2l0aW9uLmVuZCA9IHBvaW50KHRva2VuLmVuZClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGxpbmVlbmRpbmcodG9rZW4pIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuXG4gICAgLy8gSWYgd2XigJlyZSBhdCBhIGhhcmQgYnJlYWssIGluY2x1ZGUgdGhlIGxpbmUgZW5kaW5nIGluIHRoZXJlLlxuICAgIGlmIChnZXREYXRhKCdhdEhhcmRCcmVhaycpKSB7XG4gICAgICBjb250ZXh0LmNoaWxkcmVuW2NvbnRleHQuY2hpbGRyZW4ubGVuZ3RoIC0gMV0ucG9zaXRpb24uZW5kID0gcG9pbnQoXG4gICAgICAgIHRva2VuLmVuZFxuICAgICAgKVxuXG4gICAgICBzZXREYXRhKCdhdEhhcmRCcmVhaycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhZ2V0RGF0YSgnc2V0ZXh0SGVhZGluZ1NsdXJwTGluZUVuZGluZycpICYmXG4gICAgICBjb25maWcuY2FuQ29udGFpbkVvbHMuaW5kZXhPZihjb250ZXh0LnR5cGUpID4gLTFcbiAgICApIHtcbiAgICAgIG9uZW50ZXJkYXRhLmNhbGwodGhpcywgdG9rZW4pXG4gICAgICBvbmV4aXRkYXRhLmNhbGwodGhpcywgdG9rZW4pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0aGFyZGJyZWFrKCkge1xuICAgIHNldERhdGEoJ2F0SGFyZEJyZWFrJywgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGh0bWxmbG93KCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGh0bWx0ZXh0KCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGNvZGV0ZXh0KCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGxpbmsoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cblxuICAgIC8vIFRvIGRvOiBjbGVhbi5cbiAgICBpZiAoZ2V0RGF0YSgnaW5SZWZlcmVuY2UnKSkge1xuICAgICAgY29udGV4dC50eXBlICs9ICdSZWZlcmVuY2UnXG4gICAgICBjb250ZXh0LnJlZmVyZW5jZVR5cGUgPSBnZXREYXRhKCdyZWZlcmVuY2VUeXBlJykgfHwgJ3Nob3J0Y3V0J1xuICAgICAgZGVsZXRlIGNvbnRleHQudXJsXG4gICAgICBkZWxldGUgY29udGV4dC50aXRsZVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgY29udGV4dC5pZGVudGlmaWVyXG4gICAgICBkZWxldGUgY29udGV4dC5sYWJlbFxuICAgICAgZGVsZXRlIGNvbnRleHQucmVmZXJlbmNlVHlwZVxuICAgIH1cblxuICAgIHNldERhdGEoJ3JlZmVyZW5jZVR5cGUnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0aW1hZ2UoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cblxuICAgIC8vIFRvIGRvOiBjbGVhbi5cbiAgICBpZiAoZ2V0RGF0YSgnaW5SZWZlcmVuY2UnKSkge1xuICAgICAgY29udGV4dC50eXBlICs9ICdSZWZlcmVuY2UnXG4gICAgICBjb250ZXh0LnJlZmVyZW5jZVR5cGUgPSBnZXREYXRhKCdyZWZlcmVuY2VUeXBlJykgfHwgJ3Nob3J0Y3V0J1xuICAgICAgZGVsZXRlIGNvbnRleHQudXJsXG4gICAgICBkZWxldGUgY29udGV4dC50aXRsZVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgY29udGV4dC5pZGVudGlmaWVyXG4gICAgICBkZWxldGUgY29udGV4dC5sYWJlbFxuICAgICAgZGVsZXRlIGNvbnRleHQucmVmZXJlbmNlVHlwZVxuICAgIH1cblxuICAgIHNldERhdGEoJ3JlZmVyZW5jZVR5cGUnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0bGFiZWx0ZXh0KHRva2VuKSB7XG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDJdLmlkZW50aWZpZXIgPSBub3JtYWxpemVJZGVudGlmaWVyKFxuICAgICAgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgICApLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGxhYmVsKCkge1xuICAgIHZhciBmcmFnbWVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIHZhciB2YWx1ZSA9IHRoaXMucmVzdW1lKClcblxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5sYWJlbCA9IHZhbHVlXG5cbiAgICAvLyBBc3N1bWUgYSByZWZlcmVuY2UuXG4gICAgc2V0RGF0YSgnaW5SZWZlcmVuY2UnLCB0cnVlKVxuXG4gICAgaWYgKHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS50eXBlID09PSAnbGluaycpIHtcbiAgICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5jaGlsZHJlbiA9IGZyYWdtZW50LmNoaWxkcmVuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5hbHQgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdHJlc291cmNlZGVzdGluYXRpb25zdHJpbmcoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnVybCA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdHJlc291cmNldGl0bGVzdHJpbmcoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnRpdGxlID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0cmVzb3VyY2UoKSB7XG4gICAgc2V0RGF0YSgnaW5SZWZlcmVuY2UnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25lbnRlcnJlZmVyZW5jZSgpIHtcbiAgICBzZXREYXRhKCdyZWZlcmVuY2VUeXBlJywgJ2NvbGxhcHNlZCcpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRyZWZlcmVuY2VzdHJpbmcodG9rZW4pIHtcbiAgICB2YXIgbGFiZWwgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmxhYmVsID0gbGFiZWxcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uaWRlbnRpZmllciA9IG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICAgICkudG9Mb3dlckNhc2UoKVxuICAgIHNldERhdGEoJ3JlZmVyZW5jZVR5cGUnLCAnZnVsbCcpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2VtYXJrZXIodG9rZW4pIHtcbiAgICBzZXREYXRhKCdjaGFyYWN0ZXJSZWZlcmVuY2VUeXBlJywgdG9rZW4udHlwZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZXZhbHVlKHRva2VuKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICAgIHZhciB0eXBlID0gZ2V0RGF0YSgnY2hhcmFjdGVyUmVmZXJlbmNlVHlwZScpXG4gICAgdmFyIHZhbHVlXG4gICAgdmFyIHRhaWxcblxuICAgIGlmICh0eXBlKSB7XG4gICAgICB2YWx1ZSA9IHNhZmVGcm9tSW50KFxuICAgICAgICBkYXRhLFxuICAgICAgICB0eXBlID09PSAnY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyTnVtZXJpYycgPyAxMCA6IDE2XG4gICAgICApXG5cbiAgICAgIHNldERhdGEoJ2NoYXJhY3RlclJlZmVyZW5jZVR5cGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGRlY29kZShkYXRhKVxuICAgIH1cblxuICAgIHRhaWwgPSB0aGlzLnN0YWNrLnBvcCgpXG4gICAgdGFpbC52YWx1ZSArPSB2YWx1ZVxuICAgIHRhaWwucG9zaXRpb24uZW5kID0gcG9pbnQodG9rZW4uZW5kKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0YXV0b2xpbmtwcm90b2NvbCh0b2tlbikge1xuICAgIG9uZXhpdGRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udXJsID0gdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGF1dG9saW5rZW1haWwodG9rZW4pIHtcbiAgICBvbmV4aXRkYXRhLmNhbGwodGhpcywgdG9rZW4pXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnVybCA9XG4gICAgICAnbWFpbHRvOicgKyB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICB9XG5cbiAgLy9cbiAgLy8gQ3JlYXRlcnMuXG4gIC8vXG5cbiAgZnVuY3Rpb24gYmxvY2tRdW90ZSgpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdibG9ja3F1b3RlJywgY2hpbGRyZW46IFtdfVxuICB9XG5cbiAgZnVuY3Rpb24gY29kZUZsb3coKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnY29kZScsIGxhbmc6IG51bGwsIG1ldGE6IG51bGwsIHZhbHVlOiAnJ31cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvZGVUZXh0KCkge1xuICAgIHJldHVybiB7dHlwZTogJ2lubGluZUNvZGUnLCB2YWx1ZTogJyd9XG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnZGVmaW5pdGlvbicsXG4gICAgICBpZGVudGlmaWVyOiAnJyxcbiAgICAgIGxhYmVsOiBudWxsLFxuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICB1cmw6ICcnXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW1waGFzaXMoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnZW1waGFzaXMnLCBjaGlsZHJlbjogW119XG4gIH1cblxuICBmdW5jdGlvbiBoZWFkaW5nKCkge1xuICAgIHJldHVybiB7dHlwZTogJ2hlYWRpbmcnLCBkZXB0aDogdW5kZWZpbmVkLCBjaGlsZHJlbjogW119XG4gIH1cblxuICBmdW5jdGlvbiBoYXJkQnJlYWsoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnYnJlYWsnfVxuICB9XG5cbiAgZnVuY3Rpb24gaHRtbCgpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdodG1sJywgdmFsdWU6ICcnfVxuICB9XG5cbiAgZnVuY3Rpb24gaW1hZ2UoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnaW1hZ2UnLCB0aXRsZTogbnVsbCwgdXJsOiAnJywgYWx0OiBudWxsfVxuICB9XG5cbiAgZnVuY3Rpb24gbGluaygpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdsaW5rJywgdGl0bGU6IG51bGwsIHVybDogJycsIGNoaWxkcmVuOiBbXX1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3QodG9rZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2xpc3QnLFxuICAgICAgb3JkZXJlZDogdG9rZW4udHlwZSA9PT0gJ2xpc3RPcmRlcmVkJyxcbiAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgc3ByZWFkOiB0b2tlbi5fc3ByZWFkLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlzdEl0ZW0odG9rZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2xpc3RJdGVtJyxcbiAgICAgIHNwcmVhZDogdG9rZW4uX3NwcmVhZCxcbiAgICAgIGNoZWNrZWQ6IG51bGwsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXJhZ3JhcGgoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAncGFyYWdyYXBoJywgY2hpbGRyZW46IFtdfVxuICB9XG5cbiAgZnVuY3Rpb24gc3Ryb25nKCkge1xuICAgIHJldHVybiB7dHlwZTogJ3N0cm9uZycsIGNoaWxkcmVuOiBbXX1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRleHQoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAnJ31cbiAgfVxuXG4gIGZ1bmN0aW9uIHRoZW1hdGljQnJlYWsoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAndGhlbWF0aWNCcmVhayd9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZywgZXh0ZW5zaW9ucykge1xuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgZXh0ZW5zaW9ucy5sZW5ndGgpIHtcbiAgICBleHRlbnNpb24oY29uZmlnLCBleHRlbnNpb25zW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBjb25maWdcbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uKGNvbmZpZywgZXh0ZW5zaW9uKSB7XG4gIHZhciBrZXlcbiAgdmFyIGxlZnRcblxuICBmb3IgKGtleSBpbiBleHRlbnNpb24pIHtcbiAgICBsZWZ0ID0gb3duLmNhbGwoY29uZmlnLCBrZXkpID8gY29uZmlnW2tleV0gOiAoY29uZmlnW2tleV0gPSB7fSlcblxuICAgIGlmIChrZXkgPT09ICdjYW5Db250YWluRW9scycgfHwga2V5ID09PSAndHJhbnNmb3JtcycpIHtcbiAgICAgIGNvbmZpZ1trZXldID0gW10uY29uY2F0KGxlZnQsIGV4dGVuc2lvbltrZXldKVxuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuYXNzaWduKGxlZnQsIGV4dGVuc2lvbltrZXldKVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0JylcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nXG5cbi8vIEdldCB0aGUgdGV4dCBjb250ZW50IG9mIGEgbm9kZS5cbi8vIFByZWZlciB0aGUgbm9kZeKAmXMgcGxhaW4tdGV4dCBmaWVsZHMsIG90aGVyd2lzZSBzZXJpYWxpemUgaXRzIGNoaWxkcmVuLFxuLy8gYW5kIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBhcnJheSwgc2VyaWFsaXplIHRoZSBub2RlcyBpbiBpdC5cbmZ1bmN0aW9uIHRvU3RyaW5nKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICAobm9kZSAmJlxuICAgICAgKG5vZGUudmFsdWUgfHxcbiAgICAgICAgbm9kZS5hbHQgfHxcbiAgICAgICAgbm9kZS50aXRsZSB8fFxuICAgICAgICAoJ2NoaWxkcmVuJyBpbiBub2RlICYmIGFsbChub2RlLmNoaWxkcmVuKSkgfHxcbiAgICAgICAgKCdsZW5ndGgnIGluIG5vZGUgJiYgYWxsKG5vZGUpKSkpIHx8XG4gICAgJydcbiAgKVxufVxuXG5mdW5jdGlvbiBhbGwodmFsdWVzKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSB0b1N0cmluZyh2YWx1ZXNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZWdleENoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjay5qcycpXG5cbnZhciBhc2NpaUFscGhhID0gcmVnZXhDaGVjaygvW0EtWmEtel0vKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpQWxwaGFcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVnZXhDaGVjayA9IHJlcXVpcmUoJy4uL3V0aWwvcmVnZXgtY2hlY2suanMnKVxuXG52YXIgYXNjaWlBbHBoYW51bWVyaWMgPSByZWdleENoZWNrKC9bXFxkQS1aYS16XS8pXG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlBbHBoYW51bWVyaWNcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVnZXhDaGVjayA9IHJlcXVpcmUoJy4uL3V0aWwvcmVnZXgtY2hlY2suanMnKVxuXG52YXIgYXNjaWlBdGV4dCA9IHJlZ2V4Q2hlY2soL1sjLScqK1xcLS05PT9BLVpeLX5dLylcblxubW9kdWxlLmV4cG9ydHMgPSBhc2NpaUF0ZXh0XG4iLCIndXNlIHN0cmljdCdcblxuLy8gTm90ZTogRU9GIGlzIHNlZW4gYXMgQVNDSUkgY29udHJvbCBoZXJlLCBiZWNhdXNlIGBudWxsIDwgMzIgPT0gdHJ1ZWAuXG5mdW5jdGlvbiBhc2NpaUNvbnRyb2woY29kZSkge1xuICByZXR1cm4gKFxuICAgIC8vIFNwZWNpYWwgd2hpdGVzcGFjZSBjb2RlcyAod2hpY2ggaGF2ZSBuZWdhdGl2ZSB2YWx1ZXMpLCBDMCBhbmQgQ29udHJvbFxuICAgIC8vIGNoYXJhY3RlciBERUxcbiAgICBjb2RlIDwgMzIgfHwgY29kZSA9PT0gMTI3XG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc2NpaUNvbnRyb2xcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVnZXhDaGVjayA9IHJlcXVpcmUoJy4uL3V0aWwvcmVnZXgtY2hlY2suanMnKVxuXG52YXIgYXNjaWlEaWdpdCA9IHJlZ2V4Q2hlY2soL1xcZC8pXG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlEaWdpdFxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZWdleENoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjay5qcycpXG5cbnZhciBhc2NpaUhleERpZ2l0ID0gcmVnZXhDaGVjaygvW1xcZEEtRmEtZl0vKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpSGV4RGlnaXRcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVnZXhDaGVjayA9IHJlcXVpcmUoJy4uL3V0aWwvcmVnZXgtY2hlY2suanMnKVxuXG52YXIgYXNjaWlQdW5jdHVhdGlvbiA9IHJlZ2V4Q2hlY2soL1shLS86LUBbLWB7LX5dLylcblxubW9kdWxlLmV4cG9ydHMgPSBhc2NpaVB1bmN0dWF0aW9uXG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSB7XG4gIHJldHVybiBjb2RlIDwgMCB8fCBjb2RlID09PSAzMlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2VcbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkge1xuICByZXR1cm4gY29kZSA8IC0yXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd25MaW5lRW5kaW5nXG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gbWFya2Rvd25TcGFjZShjb2RlKSB7XG4gIHJldHVybiBjb2RlID09PSAtMiB8fCBjb2RlID09PSAtMSB8fCBjb2RlID09PSAzMlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcmtkb3duU3BhY2VcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdW5pY29kZVB1bmN0dWF0aW9uUmVnZXggPSByZXF1aXJlKCcuLi9jb25zdGFudC91bmljb2RlLXB1bmN0dWF0aW9uLXJlZ2V4LmpzJylcbnZhciByZWdleENoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjay5qcycpXG5cbi8vIEluIGZhY3QgYWRkcyB0byB0aGUgYnVuZGxlIHNpemUuXG5cbnZhciB1bmljb2RlUHVuY3R1YXRpb24gPSByZWdleENoZWNrKHVuaWNvZGVQdW5jdHVhdGlvblJlZ2V4KVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVQdW5jdHVhdGlvblxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZWdleENoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjay5qcycpXG5cbnZhciB1bmljb2RlV2hpdGVzcGFjZSA9IHJlZ2V4Q2hlY2soL1xccy8pXG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVdoaXRlc3BhY2VcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnblxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG5cbm1vZHVsZS5leHBvcnRzID0gZnJvbUNoYXJDb2RlXG4iLCIndXNlIHN0cmljdCdcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbm1vZHVsZS5leHBvcnRzID0gb3duXG4iLCIndXNlIHN0cmljdCdcblxuLy8gVGhpcyBtb2R1bGUgaXMgY29waWVkIGZyb20gPGh0dHBzOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjI5LyNodG1sLWJsb2Nrcz4uXG52YXIgYmFzaWNzID0gW1xuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2Jhc2UnLFxuICAnYmFzZWZvbnQnLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2NhcHRpb24nLFxuICAnY2VudGVyJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkZCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RpYWxvZycsXG4gICdkaXInLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2ZyYW1lJyxcbiAgJ2ZyYW1lc2V0JyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hyJyxcbiAgJ2h0bWwnLFxuICAnaWZyYW1lJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdsaW5rJyxcbiAgJ21haW4nLFxuICAnbWVudScsXG4gICdtZW51aXRlbScsXG4gICduYXYnLFxuICAnbm9mcmFtZXMnLFxuICAnb2wnLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgJ3AnLFxuICAncGFyYW0nLFxuICAnc2VjdGlvbicsXG4gICdzb3VyY2UnLFxuICAnc3VtbWFyeScsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aXRsZScsXG4gICd0cicsXG4gICd0cmFjaycsXG4gICd1bCdcbl1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNpY3NcbiIsIid1c2Ugc3RyaWN0J1xuXG4vLyBUaGlzIG1vZHVsZSBpcyBjb3BpZWQgZnJvbSA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2h0bWwtYmxvY2tzPi5cbnZhciByYXdzID0gWydwcmUnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3RleHRhcmVhJ11cblxubW9kdWxlLmV4cG9ydHMgPSByYXdzXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHNwbGljZSA9IFtdLnNwbGljZVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNwbGljZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIFRoaXMgbW9kdWxlIGlzIGdlbmVyYXRlZCBieSBgc2NyaXB0L2AuXG4vL1xuLy8gQ29tbW9uTWFyayBoYW5kbGVzIGF0dGVudGlvbiAoZW1waGFzaXMsIHN0cm9uZykgbWFya2VycyBiYXNlZCBvbiB3aGF0IGNvbWVzXG4vLyBiZWZvcmUgb3IgYWZ0ZXIgdGhlbS5cbi8vIE9uZSBzdWNoIGRpZmZlcmVuY2UgaXMgaWYgdGhvc2UgY2hhcmFjdGVycyBhcmUgVW5pY29kZSBwdW5jdHVhdGlvbi5cbi8vIFRoaXMgc2NyaXB0IGlzIGdlbmVyYXRlZCBmcm9tIHRoZSBVbmljb2RlIGRhdGEuXG52YXIgdW5pY29kZVB1bmN0dWF0aW9uID0gL1shLVxcLzotQFxcWy1gXFx7LX5cXHhBMVxceEE3XFx4QUJcXHhCNlxceEI3XFx4QkJcXHhCRlxcdTAzN0VcXHUwMzg3XFx1MDU1QS1cXHUwNTVGXFx1MDU4OVxcdTA1OEFcXHUwNUJFXFx1MDVDMFxcdTA1QzNcXHUwNUM2XFx1MDVGM1xcdTA1RjRcXHUwNjA5XFx1MDYwQVxcdTA2MENcXHUwNjBEXFx1MDYxQlxcdTA2MUVcXHUwNjFGXFx1MDY2QS1cXHUwNjZEXFx1MDZENFxcdTA3MDAtXFx1MDcwRFxcdTA3RjctXFx1MDdGOVxcdTA4MzAtXFx1MDgzRVxcdTA4NUVcXHUwOTY0XFx1MDk2NVxcdTA5NzBcXHUwOUZEXFx1MEE3NlxcdTBBRjBcXHUwQzc3XFx1MEM4NFxcdTBERjRcXHUwRTRGXFx1MEU1QVxcdTBFNUJcXHUwRjA0LVxcdTBGMTJcXHUwRjE0XFx1MEYzQS1cXHUwRjNEXFx1MEY4NVxcdTBGRDAtXFx1MEZENFxcdTBGRDlcXHUwRkRBXFx1MTA0QS1cXHUxMDRGXFx1MTBGQlxcdTEzNjAtXFx1MTM2OFxcdTE0MDBcXHUxNjZFXFx1MTY5QlxcdTE2OUNcXHUxNkVCLVxcdTE2RURcXHUxNzM1XFx1MTczNlxcdTE3RDQtXFx1MTdENlxcdTE3RDgtXFx1MTdEQVxcdTE4MDAtXFx1MTgwQVxcdTE5NDRcXHUxOTQ1XFx1MUExRVxcdTFBMUZcXHUxQUEwLVxcdTFBQTZcXHUxQUE4LVxcdTFBQURcXHUxQjVBLVxcdTFCNjBcXHUxQkZDLVxcdTFCRkZcXHUxQzNCLVxcdTFDM0ZcXHUxQzdFXFx1MUM3RlxcdTFDQzAtXFx1MUNDN1xcdTFDRDNcXHUyMDEwLVxcdTIwMjdcXHUyMDMwLVxcdTIwNDNcXHUyMDQ1LVxcdTIwNTFcXHUyMDUzLVxcdTIwNUVcXHUyMDdEXFx1MjA3RVxcdTIwOERcXHUyMDhFXFx1MjMwOC1cXHUyMzBCXFx1MjMyOVxcdTIzMkFcXHUyNzY4LVxcdTI3NzVcXHUyN0M1XFx1MjdDNlxcdTI3RTYtXFx1MjdFRlxcdTI5ODMtXFx1Mjk5OFxcdTI5RDgtXFx1MjlEQlxcdTI5RkNcXHUyOUZEXFx1MkNGOS1cXHUyQ0ZDXFx1MkNGRVxcdTJDRkZcXHUyRDcwXFx1MkUwMC1cXHUyRTJFXFx1MkUzMC1cXHUyRTRGXFx1MkU1MlxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAxMVxcdTMwMTQtXFx1MzAxRlxcdTMwMzBcXHUzMDNEXFx1MzBBMFxcdTMwRkJcXHVBNEZFXFx1QTRGRlxcdUE2MEQtXFx1QTYwRlxcdUE2NzNcXHVBNjdFXFx1QTZGMi1cXHVBNkY3XFx1QTg3NC1cXHVBODc3XFx1QThDRVxcdUE4Q0ZcXHVBOEY4LVxcdUE4RkFcXHVBOEZDXFx1QTkyRVxcdUE5MkZcXHVBOTVGXFx1QTlDMS1cXHVBOUNEXFx1QTlERVxcdUE5REZcXHVBQTVDLVxcdUFBNUZcXHVBQURFXFx1QUFERlxcdUFBRjBcXHVBQUYxXFx1QUJFQlxcdUZEM0VcXHVGRDNGXFx1RkUxMC1cXHVGRTE5XFx1RkUzMC1cXHVGRTUyXFx1RkU1NC1cXHVGRTYxXFx1RkU2M1xcdUZFNjhcXHVGRTZBXFx1RkU2QlxcdUZGMDEtXFx1RkYwM1xcdUZGMDUtXFx1RkYwQVxcdUZGMEMtXFx1RkYwRlxcdUZGMUFcXHVGRjFCXFx1RkYxRlxcdUZGMjBcXHVGRjNCLVxcdUZGM0RcXHVGRjNGXFx1RkY1QlxcdUZGNURcXHVGRjVGLVxcdUZGNjVdL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVQdW5jdHVhdGlvblxuIiwiJ3VzZSBzdHJpY3QnXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pXG5cbnZhciB0ZXh0JDEgPSByZXF1aXJlKCcuL2luaXRpYWxpemUvdGV4dC5qcycpXG52YXIgYXR0ZW50aW9uID0gcmVxdWlyZSgnLi90b2tlbml6ZS9hdHRlbnRpb24uanMnKVxudmFyIGF1dG9saW5rID0gcmVxdWlyZSgnLi90b2tlbml6ZS9hdXRvbGluay5qcycpXG52YXIgYmxvY2tRdW90ZSA9IHJlcXVpcmUoJy4vdG9rZW5pemUvYmxvY2stcXVvdGUuanMnKVxudmFyIGNoYXJhY3RlckVzY2FwZSA9IHJlcXVpcmUoJy4vdG9rZW5pemUvY2hhcmFjdGVyLWVzY2FwZS5qcycpXG52YXIgY2hhcmFjdGVyUmVmZXJlbmNlID0gcmVxdWlyZSgnLi90b2tlbml6ZS9jaGFyYWN0ZXItcmVmZXJlbmNlLmpzJylcbnZhciBjb2RlRmVuY2VkID0gcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLWZlbmNlZC5qcycpXG52YXIgY29kZUluZGVudGVkID0gcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLWluZGVudGVkLmpzJylcbnZhciBjb2RlVGV4dCA9IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS10ZXh0LmpzJylcbnZhciBkZWZpbml0aW9uID0gcmVxdWlyZSgnLi90b2tlbml6ZS9kZWZpbml0aW9uLmpzJylcbnZhciBoYXJkQnJlYWtFc2NhcGUgPSByZXF1aXJlKCcuL3Rva2VuaXplL2hhcmQtYnJlYWstZXNjYXBlLmpzJylcbnZhciBoZWFkaW5nQXR4ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9oZWFkaW5nLWF0eC5qcycpXG52YXIgaHRtbEZsb3cgPSByZXF1aXJlKCcuL3Rva2VuaXplL2h0bWwtZmxvdy5qcycpXG52YXIgaHRtbFRleHQgPSByZXF1aXJlKCcuL3Rva2VuaXplL2h0bWwtdGV4dC5qcycpXG52YXIgbGFiZWxFbmQgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xhYmVsLWVuZC5qcycpXG52YXIgbGFiZWxTdGFydEltYWdlID0gcmVxdWlyZSgnLi90b2tlbml6ZS9sYWJlbC1zdGFydC1pbWFnZS5qcycpXG52YXIgbGFiZWxTdGFydExpbmsgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xhYmVsLXN0YXJ0LWxpbmsuanMnKVxudmFyIGxpbmVFbmRpbmcgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xpbmUtZW5kaW5nLmpzJylcbnZhciBsaXN0ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9saXN0LmpzJylcbnZhciBzZXRleHRVbmRlcmxpbmUgPSByZXF1aXJlKCcuL3Rva2VuaXplL3NldGV4dC11bmRlcmxpbmUuanMnKVxudmFyIHRoZW1hdGljQnJlYWsgPSByZXF1aXJlKCcuL3Rva2VuaXplL3RoZW1hdGljLWJyZWFrLmpzJylcblxudmFyIGRvY3VtZW50ID0ge1xuICA0MjogbGlzdCxcbiAgLy8gQXN0ZXJpc2tcbiAgNDM6IGxpc3QsXG4gIC8vIFBsdXMgc2lnblxuICA0NTogbGlzdCxcbiAgLy8gRGFzaFxuICA0ODogbGlzdCxcbiAgLy8gMFxuICA0OTogbGlzdCxcbiAgLy8gMVxuICA1MDogbGlzdCxcbiAgLy8gMlxuICA1MTogbGlzdCxcbiAgLy8gM1xuICA1MjogbGlzdCxcbiAgLy8gNFxuICA1MzogbGlzdCxcbiAgLy8gNVxuICA1NDogbGlzdCxcbiAgLy8gNlxuICA1NTogbGlzdCxcbiAgLy8gN1xuICA1NjogbGlzdCxcbiAgLy8gOFxuICA1NzogbGlzdCxcbiAgLy8gOVxuICA2MjogYmxvY2tRdW90ZSAvLyBHcmVhdGVyIHRoYW5cbn1cbnZhciBjb250ZW50SW5pdGlhbCA9IHtcbiAgOTE6IGRlZmluaXRpb24gLy8gTGVmdCBzcXVhcmUgYnJhY2tldFxufVxudmFyIGZsb3dJbml0aWFsID0ge1xuICAnLTInOiBjb2RlSW5kZW50ZWQsXG4gIC8vIEhvcml6b250YWwgdGFiXG4gICctMSc6IGNvZGVJbmRlbnRlZCxcbiAgLy8gVmlydHVhbCBzcGFjZVxuICAzMjogY29kZUluZGVudGVkIC8vIFNwYWNlXG59XG52YXIgZmxvdyA9IHtcbiAgMzU6IGhlYWRpbmdBdHgsXG4gIC8vIE51bWJlciBzaWduXG4gIDQyOiB0aGVtYXRpY0JyZWFrLFxuICAvLyBBc3Rlcmlza1xuICA0NTogW3NldGV4dFVuZGVybGluZSwgdGhlbWF0aWNCcmVha10sXG4gIC8vIERhc2hcbiAgNjA6IGh0bWxGbG93LFxuICAvLyBMZXNzIHRoYW5cbiAgNjE6IHNldGV4dFVuZGVybGluZSxcbiAgLy8gRXF1YWxzIHRvXG4gIDk1OiB0aGVtYXRpY0JyZWFrLFxuICAvLyBVbmRlcnNjb3JlXG4gIDk2OiBjb2RlRmVuY2VkLFxuICAvLyBHcmF2ZSBhY2NlbnRcbiAgMTI2OiBjb2RlRmVuY2VkIC8vIFRpbGRlXG59XG52YXIgc3RyaW5nID0ge1xuICAzODogY2hhcmFjdGVyUmVmZXJlbmNlLFxuICAvLyBBbXBlcnNhbmRcbiAgOTI6IGNoYXJhY3RlckVzY2FwZSAvLyBCYWNrc2xhc2hcbn1cbnZhciB0ZXh0ID0ge1xuICAnLTUnOiBsaW5lRW5kaW5nLFxuICAvLyBDYXJyaWFnZSByZXR1cm5cbiAgJy00JzogbGluZUVuZGluZyxcbiAgLy8gTGluZSBmZWVkXG4gICctMyc6IGxpbmVFbmRpbmcsXG4gIC8vIENhcnJpYWdlIHJldHVybiArIGxpbmUgZmVlZFxuICAzMzogbGFiZWxTdGFydEltYWdlLFxuICAvLyBFeGNsYW1hdGlvbiBtYXJrXG4gIDM4OiBjaGFyYWN0ZXJSZWZlcmVuY2UsXG4gIC8vIEFtcGVyc2FuZFxuICA0MjogYXR0ZW50aW9uLFxuICAvLyBBc3Rlcmlza1xuICA2MDogW2F1dG9saW5rLCBodG1sVGV4dF0sXG4gIC8vIExlc3MgdGhhblxuICA5MTogbGFiZWxTdGFydExpbmssXG4gIC8vIExlZnQgc3F1YXJlIGJyYWNrZXRcbiAgOTI6IFtoYXJkQnJlYWtFc2NhcGUsIGNoYXJhY3RlckVzY2FwZV0sXG4gIC8vIEJhY2tzbGFzaFxuICA5MzogbGFiZWxFbmQsXG4gIC8vIFJpZ2h0IHNxdWFyZSBicmFja2V0XG4gIDk1OiBhdHRlbnRpb24sXG4gIC8vIFVuZGVyc2NvcmVcbiAgOTY6IGNvZGVUZXh0IC8vIEdyYXZlIGFjY2VudFxufVxudmFyIGluc2lkZVNwYW4gPSB7XG4gIG51bGw6IFthdHRlbnRpb24sIHRleHQkMS5yZXNvbHZlcl1cbn1cbnZhciBkaXNhYmxlID0ge1xuICBudWxsOiBbXVxufVxuXG5leHBvcnRzLmNvbnRlbnRJbml0aWFsID0gY29udGVudEluaXRpYWxcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGVcbmV4cG9ydHMuZG9jdW1lbnQgPSBkb2N1bWVudFxuZXhwb3J0cy5mbG93ID0gZmxvd1xuZXhwb3J0cy5mbG93SW5pdGlhbCA9IGZsb3dJbml0aWFsXG5leHBvcnRzLmluc2lkZVNwYW4gPSBpbnNpZGVTcGFuXG5leHBvcnRzLnN0cmluZyA9IHN0cmluZ1xuZXhwb3J0cy50ZXh0ID0gdGV4dFxuIiwiJ3VzZSBzdHJpY3QnXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcuanMnKVxudmFyIGZhY3RvcnlTcGFjZSA9IHJlcXVpcmUoJy4uL3Rva2VuaXplL2ZhY3Rvcnktc3BhY2UuanMnKVxuXG52YXIgdG9rZW5pemUgPSBpbml0aWFsaXplQ29udGVudFxuXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udGVudChlZmZlY3RzKSB7XG4gIHZhciBjb250ZW50U3RhcnQgPSBlZmZlY3RzLmF0dGVtcHQoXG4gICAgdGhpcy5wYXJzZXIuY29uc3RydWN0cy5jb250ZW50SW5pdGlhbCxcbiAgICBhZnRlckNvbnRlbnRTdGFydENvbnN0cnVjdCxcbiAgICBwYXJhZ3JhcGhJbml0aWFsXG4gIClcbiAgdmFyIHByZXZpb3VzXG4gIHJldHVybiBjb250ZW50U3RhcnRcblxuICBmdW5jdGlvbiBhZnRlckNvbnRlbnRTdGFydENvbnN0cnVjdChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICByZXR1cm4gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGNvbnRlbnRTdGFydCwgJ2xpbmVQcmVmaXgnKVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyYWdyYXBoSW5pdGlhbChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigncGFyYWdyYXBoJylcbiAgICByZXR1cm4gbGluZVN0YXJ0KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBsaW5lU3RhcnQoY29kZSkge1xuICAgIHZhciB0b2tlbiA9IGVmZmVjdHMuZW50ZXIoJ2NodW5rVGV4dCcsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAndGV4dCcsXG4gICAgICBwcmV2aW91czogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5uZXh0ID0gdG9rZW5cbiAgICB9XG5cbiAgICBwcmV2aW91cyA9IHRva2VuXG4gICAgcmV0dXJuIGRhdGEoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGEoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rVGV4dCcpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3BhcmFncmFwaCcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1RleHQnKVxuICAgICAgcmV0dXJuIGxpbmVTdGFydFxuICAgIH0gLy8gRGF0YS5cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBkYXRhXG4gIH1cbn1cblxuZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplXG4iLCIndXNlIHN0cmljdCdcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSlcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy5qcycpXG52YXIgZmFjdG9yeVNwYWNlID0gcmVxdWlyZSgnLi4vdG9rZW5pemUvZmFjdG9yeS1zcGFjZS5qcycpXG52YXIgcGFydGlhbEJsYW5rTGluZSA9IHJlcXVpcmUoJy4uL3Rva2VuaXplL3BhcnRpYWwtYmxhbmstbGluZS5qcycpXG5cbnZhciB0b2tlbml6ZSA9IGluaXRpYWxpemVEb2N1bWVudFxudmFyIGNvbnRhaW5lckNvbnN0cnVjdCA9IHtcbiAgdG9rZW5pemU6IHRva2VuaXplQ29udGFpbmVyXG59XG52YXIgbGF6eUZsb3dDb25zdHJ1Y3QgPSB7XG4gIHRva2VuaXplOiB0b2tlbml6ZUxhenlGbG93XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVEb2N1bWVudChlZmZlY3RzKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc3RhY2sgPSBbXVxuICB2YXIgY29udGludWVkID0gMFxuICB2YXIgaW5zcGVjdENvbnN0cnVjdCA9IHtcbiAgICB0b2tlbml6ZTogdG9rZW5pemVJbnNwZWN0LFxuICAgIHBhcnRpYWw6IHRydWVcbiAgfVxuICB2YXIgaW5zcGVjdFJlc3VsdFxuICB2YXIgY2hpbGRGbG93XG4gIHZhciBjaGlsZFRva2VuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29udGludWVkIDwgc3RhY2subGVuZ3RoKSB7XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0gc3RhY2tbY29udGludWVkXVsxXVxuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgc3RhY2tbY29udGludWVkXVswXS5jb250aW51YXRpb24sXG4gICAgICAgIGRvY3VtZW50Q29udGludWUsXG4gICAgICAgIGRvY3VtZW50Q29udGludWVkXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50Q29udGludWVkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkb2N1bWVudENvbnRpbnVlKGNvZGUpIHtcbiAgICBjb250aW51ZWQrK1xuICAgIHJldHVybiBzdGFydChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZG9jdW1lbnRDb250aW51ZWQoY29kZSkge1xuICAgIC8vIElmIHdl4oCZcmUgaW4gYSBjb25jcmV0ZSBjb25zdHJ1Y3QgKHN1Y2ggYXMgd2hlbiBleHBlY3RpbmcgYW5vdGhlciBsaW5lIG9mXG4gICAgLy8gSFRNTCwgb3Igd2UgcmVzdWx0ZWQgaW4gbGF6eSBjb250ZW50KSwgd2UgY2FuIGltbWVkaWF0ZWx5IHN0YXJ0IGZsb3cuXG4gICAgaWYgKGluc3BlY3RSZXN1bHQgJiYgaW5zcGVjdFJlc3VsdC5mbG93Q29udGludWUpIHtcbiAgICAgIHJldHVybiBmbG93U3RhcnQoY29kZSlcbiAgICB9XG5cbiAgICBzZWxmLmludGVycnVwdCA9XG4gICAgICBjaGlsZEZsb3cgJiZcbiAgICAgIGNoaWxkRmxvdy5jdXJyZW50Q29uc3RydWN0ICYmXG4gICAgICBjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdC5pbnRlcnJ1cHRpYmxlXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHt9XG4gICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgIGNvbnRhaW5lckNvbnN0cnVjdCxcbiAgICAgIGNvbnRhaW5lckNvbnRpbnVlLFxuICAgICAgZmxvd1N0YXJ0XG4gICAgKShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGFpbmVyQ29udGludWUoY29kZSkge1xuICAgIHN0YWNrLnB1c2goW3NlbGYuY3VycmVudENvbnN0cnVjdCwgc2VsZi5jb250YWluZXJTdGF0ZV0pXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBkb2N1bWVudENvbnRpbnVlZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZmxvd1N0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgZXhpdENvbnRhaW5lcnMoMCwgdHJ1ZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2hpbGRGbG93ID0gY2hpbGRGbG93IHx8IHNlbGYucGFyc2VyLmZsb3coc2VsZi5ub3coKSlcbiAgICBlZmZlY3RzLmVudGVyKCdjaHVua0Zsb3cnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ2Zsb3cnLFxuICAgICAgcHJldmlvdXM6IGNoaWxkVG9rZW4sXG4gICAgICBfdG9rZW5pemVyOiBjaGlsZEZsb3dcbiAgICB9KVxuICAgIHJldHVybiBmbG93Q29udGludWUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsb3dDb250aW51ZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlRmxvdyhlZmZlY3RzLmV4aXQoJ2NodW5rRmxvdycpKVxuICAgICAgcmV0dXJuIGZsb3dTdGFydChjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgY29udGludWVGbG93KGVmZmVjdHMuZXhpdCgnY2h1bmtGbG93JykpXG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhpbnNwZWN0Q29uc3RydWN0LCBkb2N1bWVudEFmdGVyUGVlaylcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZmxvd0NvbnRpbnVlXG4gIH1cblxuICBmdW5jdGlvbiBkb2N1bWVudEFmdGVyUGVlayhjb2RlKSB7XG4gICAgZXhpdENvbnRhaW5lcnMoXG4gICAgICBpbnNwZWN0UmVzdWx0LmNvbnRpbnVlZCxcbiAgICAgIGluc3BlY3RSZXN1bHQgJiYgaW5zcGVjdFJlc3VsdC5mbG93RW5kXG4gICAgKVxuICAgIGNvbnRpbnVlZCA9IDBcbiAgICByZXR1cm4gc3RhcnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVlRmxvdyh0b2tlbikge1xuICAgIGlmIChjaGlsZFRva2VuKSBjaGlsZFRva2VuLm5leHQgPSB0b2tlblxuICAgIGNoaWxkVG9rZW4gPSB0b2tlblxuICAgIGNoaWxkRmxvdy5sYXp5ID0gaW5zcGVjdFJlc3VsdCAmJiBpbnNwZWN0UmVzdWx0LmxhenlcbiAgICBjaGlsZEZsb3cuZGVmaW5lU2tpcCh0b2tlbi5zdGFydClcbiAgICBjaGlsZEZsb3cud3JpdGUoc2VsZi5zbGljZVN0cmVhbSh0b2tlbikpXG4gIH1cblxuICBmdW5jdGlvbiBleGl0Q29udGFpbmVycyhzaXplLCBlbmQpIHtcbiAgICB2YXIgaW5kZXggPSBzdGFjay5sZW5ndGggLy8gQ2xvc2UgdGhlIGZsb3cuXG5cbiAgICBpZiAoY2hpbGRGbG93ICYmIGVuZCkge1xuICAgICAgY2hpbGRGbG93LndyaXRlKFtudWxsXSlcbiAgICAgIGNoaWxkVG9rZW4gPSBjaGlsZEZsb3cgPSB1bmRlZmluZWRcbiAgICB9IC8vIEV4aXQgb3BlbiBjb250YWluZXJzLlxuXG4gICAgd2hpbGUgKGluZGV4LS0gPiBzaXplKSB7XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0gc3RhY2tbaW5kZXhdWzFdXG4gICAgICBzdGFja1tpbmRleF1bMF0uZXhpdC5jYWxsKHNlbGYsIGVmZmVjdHMpXG4gICAgfVxuXG4gICAgc3RhY2subGVuZ3RoID0gc2l6ZVxuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5pemVJbnNwZWN0KGVmZmVjdHMsIG9rKSB7XG4gICAgdmFyIHN1YmNvbnRpbnVlZCA9IDBcbiAgICBpbnNwZWN0UmVzdWx0ID0ge31cbiAgICByZXR1cm4gaW5zcGVjdFN0YXJ0XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0U3RhcnQoY29kZSkge1xuICAgICAgaWYgKHN1YmNvbnRpbnVlZCA8IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0gc3RhY2tbc3ViY29udGludWVkXVsxXVxuICAgICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICAgIHN0YWNrW3N1YmNvbnRpbnVlZF1bMF0uY29udGludWF0aW9uLFxuICAgICAgICAgIGluc3BlY3RDb250aW51ZSxcbiAgICAgICAgICBpbnNwZWN0TGVzc1xuICAgICAgICApKGNvZGUpXG4gICAgICB9IC8vIElmIHdl4oCZcmUgY29udGludWVkIGJ1dCBpbiBhIGNvbmNyZXRlIGZsb3csIHdlIGNhbuKAmXQgaGF2ZSBtb3JlXG4gICAgICAvLyBjb250YWluZXJzLlxuXG4gICAgICBpZiAoY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QgJiYgY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QuY29uY3JldGUpIHtcbiAgICAgICAgaW5zcGVjdFJlc3VsdC5mbG93Q29udGludWUgPSB0cnVlXG4gICAgICAgIHJldHVybiBpbnNwZWN0RG9uZShjb2RlKVxuICAgICAgfVxuXG4gICAgICBzZWxmLmludGVycnVwdCA9XG4gICAgICAgIGNoaWxkRmxvdy5jdXJyZW50Q29uc3RydWN0ICYmIGNoaWxkRmxvdy5jdXJyZW50Q29uc3RydWN0LmludGVycnVwdGlibGVcbiAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUgPSB7fVxuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgY29udGFpbmVyQ29uc3RydWN0LFxuICAgICAgICBpbnNwZWN0Rmxvd0VuZCxcbiAgICAgICAgaW5zcGVjdERvbmVcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0Q29udGludWUoY29kZSkge1xuICAgICAgc3ViY29udGludWVkKytcbiAgICAgIHJldHVybiBzZWxmLmNvbnRhaW5lclN0YXRlLl9jbG9zZUZsb3dcbiAgICAgICAgPyBpbnNwZWN0Rmxvd0VuZChjb2RlKVxuICAgICAgICA6IGluc3BlY3RTdGFydChjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3BlY3RMZXNzKGNvZGUpIHtcbiAgICAgIGlmIChjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdCAmJiBjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdC5sYXp5KSB7XG4gICAgICAgIC8vIE1heWJlIGFub3RoZXIgY29udGFpbmVyP1xuICAgICAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0ge31cbiAgICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgICBjb250YWluZXJDb25zdHJ1Y3QsXG4gICAgICAgICAgaW5zcGVjdEZsb3dFbmQsIC8vIE1heWJlIGZsb3csIG9yIGEgYmxhbmsgbGluZT9cbiAgICAgICAgICBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgICAgICBsYXp5Rmxvd0NvbnN0cnVjdCxcbiAgICAgICAgICAgIGluc3BlY3RGbG93RW5kLFxuICAgICAgICAgICAgZWZmZWN0cy5jaGVjayhwYXJ0aWFsQmxhbmtMaW5lLCBpbnNwZWN0Rmxvd0VuZCwgaW5zcGVjdExhenkpXG4gICAgICAgICAgKVxuICAgICAgICApKGNvZGUpXG4gICAgICB9IC8vIE90aGVyd2lzZSB3ZeKAmXJlIGludGVycnVwdGluZy5cblxuICAgICAgcmV0dXJuIGluc3BlY3RGbG93RW5kKGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zcGVjdExhenkoY29kZSkge1xuICAgICAgLy8gQWN0IGFzIGlmIGFsbCBjb250YWluZXJzIGFyZSBjb250aW51ZWQuXG4gICAgICBzdWJjb250aW51ZWQgPSBzdGFjay5sZW5ndGhcbiAgICAgIGluc3BlY3RSZXN1bHQubGF6eSA9IHRydWVcbiAgICAgIGluc3BlY3RSZXN1bHQuZmxvd0NvbnRpbnVlID0gdHJ1ZVxuICAgICAgcmV0dXJuIGluc3BlY3REb25lKGNvZGUpXG4gICAgfSAvLyBXZeKAmXJlIGRvbmUgd2l0aCBmbG93IGlmIHdlIGhhdmUgbW9yZSBjb250YWluZXJzLCBvciBhbiBpbnRlcnJ1cHRpb24uXG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0Rmxvd0VuZChjb2RlKSB7XG4gICAgICBpbnNwZWN0UmVzdWx0LmZsb3dFbmQgPSB0cnVlXG4gICAgICByZXR1cm4gaW5zcGVjdERvbmUoY29kZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0RG9uZShjb2RlKSB7XG4gICAgICBpbnNwZWN0UmVzdWx0LmNvbnRpbnVlZCA9IHN1YmNvbnRpbnVlZFxuICAgICAgc2VsZi5pbnRlcnJ1cHQgPSBzZWxmLmNvbnRhaW5lclN0YXRlID0gdW5kZWZpbmVkXG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVDb250YWluZXIoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gZmFjdG9yeVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgZWZmZWN0cy5hdHRlbXB0KHRoaXMucGFyc2VyLmNvbnN0cnVjdHMuZG9jdW1lbnQsIG9rLCBub2spLFxuICAgICdsaW5lUHJlZml4JyxcbiAgICB0aGlzLnBhcnNlci5jb25zdHJ1Y3RzLmRpc2FibGUubnVsbC5pbmRleE9mKCdjb2RlSW5kZW50ZWQnKSA+IC0xXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiA0XG4gIClcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMYXp5RmxvdyhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBmYWN0b3J5U3BhY2UoXG4gICAgZWZmZWN0cyxcbiAgICBlZmZlY3RzLmxhenkodGhpcy5wYXJzZXIuY29uc3RydWN0cy5mbG93LCBvaywgbm9rKSxcbiAgICAnbGluZVByZWZpeCcsXG4gICAgdGhpcy5wYXJzZXIuY29uc3RydWN0cy5kaXNhYmxlLm51bGwuaW5kZXhPZignY29kZUluZGVudGVkJykgPiAtMVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogNFxuICApXG59XG5cbmV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pXG5cbnZhciBjb250ZW50ID0gcmVxdWlyZSgnLi4vdG9rZW5pemUvY29udGVudC5qcycpXG52YXIgZmFjdG9yeVNwYWNlID0gcmVxdWlyZSgnLi4vdG9rZW5pemUvZmFjdG9yeS1zcGFjZS5qcycpXG52YXIgcGFydGlhbEJsYW5rTGluZSA9IHJlcXVpcmUoJy4uL3Rva2VuaXplL3BhcnRpYWwtYmxhbmstbGluZS5qcycpXG5cbnZhciB0b2tlbml6ZSA9IGluaXRpYWxpemVGbG93XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVGbG93KGVmZmVjdHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbml0aWFsID0gZWZmZWN0cy5hdHRlbXB0KFxuICAgIC8vIFRyeSB0byBwYXJzZSBhIGJsYW5rIGxpbmUuXG4gICAgcGFydGlhbEJsYW5rTGluZSxcbiAgICBhdEJsYW5rRW5kaW5nLCAvLyBUcnkgdG8gcGFyc2UgaW5pdGlhbCBmbG93IChlc3NlbnRpYWxseSwgb25seSBjb2RlKS5cbiAgICBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICB0aGlzLnBhcnNlci5jb25zdHJ1Y3RzLmZsb3dJbml0aWFsLFxuICAgICAgYWZ0ZXJDb25zdHJ1Y3QsXG4gICAgICBmYWN0b3J5U3BhY2UoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgICB0aGlzLnBhcnNlci5jb25zdHJ1Y3RzLmZsb3csXG4gICAgICAgICAgYWZ0ZXJDb25zdHJ1Y3QsXG4gICAgICAgICAgZWZmZWN0cy5hdHRlbXB0KGNvbnRlbnQsIGFmdGVyQ29uc3RydWN0KVxuICAgICAgICApLFxuICAgICAgICAnbGluZVByZWZpeCdcbiAgICAgIClcbiAgICApXG4gIClcbiAgcmV0dXJuIGluaXRpYWxcblxuICBmdW5jdGlvbiBhdEJsYW5rRW5kaW5nKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nQmxhbmsnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZ0JsYW5rJylcbiAgICBzZWxmLmN1cnJlbnRDb25zdHJ1Y3QgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gaW5pdGlhbFxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJDb25zdHJ1Y3QoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgc2VsZi5jdXJyZW50Q29uc3RydWN0ID0gdW5kZWZpbmVkXG4gICAgcmV0dXJuIGluaXRpYWxcbiAgfVxufVxuXG5leHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVcbiIsIid1c2Ugc3RyaWN0J1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KVxuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvYXNzaWduLmpzJylcbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnLi4vdXRpbC9zaGFsbG93LmpzJylcblxudmFyIHRleHQgPSBpbml0aWFsaXplRmFjdG9yeSgndGV4dCcpXG52YXIgc3RyaW5nID0gaW5pdGlhbGl6ZUZhY3RvcnkoJ3N0cmluZycpXG52YXIgcmVzb2x2ZXIgPSB7XG4gIHJlc29sdmVBbGw6IGNyZWF0ZVJlc29sdmVyKClcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUZhY3RvcnkoZmllbGQpIHtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbml6ZTogaW5pdGlhbGl6ZVRleHQsXG4gICAgcmVzb2x2ZUFsbDogY3JlYXRlUmVzb2x2ZXIoXG4gICAgICBmaWVsZCA9PT0gJ3RleHQnID8gcmVzb2x2ZUFsbExpbmVTdWZmaXhlcyA6IHVuZGVmaW5lZFxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVUZXh0KGVmZmVjdHMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgY29uc3RydWN0cyA9IHRoaXMucGFyc2VyLmNvbnN0cnVjdHNbZmllbGRdXG4gICAgdmFyIHRleHQgPSBlZmZlY3RzLmF0dGVtcHQoY29uc3RydWN0cywgc3RhcnQsIG5vdFRleHQpXG4gICAgcmV0dXJuIHN0YXJ0XG5cbiAgICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgICByZXR1cm4gYXRCcmVhayhjb2RlKSA/IHRleHQoY29kZSkgOiBub3RUZXh0KGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm90VGV4dChjb2RlKSB7XG4gICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2RhdGEnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRhdGEoY29kZSkge1xuICAgICAgaWYgKGF0QnJlYWsoY29kZSkpIHtcbiAgICAgICAgZWZmZWN0cy5leGl0KCdkYXRhJylcbiAgICAgICAgcmV0dXJuIHRleHQoY29kZSlcbiAgICAgIH0gLy8gRGF0YS5cblxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0QnJlYWsoY29kZSkge1xuICAgICAgdmFyIGxpc3QgPSBjb25zdHJ1Y3RzW2NvZGVdXG4gICAgICB2YXIgaW5kZXggPSAtMVxuXG4gICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAobGlzdCkge1xuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWxpc3RbaW5kZXhdLnByZXZpb3VzIHx8XG4gICAgICAgICAgICBsaXN0W2luZGV4XS5wcmV2aW91cy5jYWxsKHNlbGYsIHNlbGYucHJldmlvdXMpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXNvbHZlcihleHRyYVJlc29sdmVyKSB7XG4gIHJldHVybiByZXNvbHZlQWxsVGV4dFxuXG4gIGZ1bmN0aW9uIHJlc29sdmVBbGxUZXh0KGV2ZW50cywgY29udGV4dCkge1xuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGVudGVyIC8vIEEgcmF0aGVyIGJvcmluZyBjb21wdXRhdGlvbiAodG8gbWVyZ2UgYWRqYWNlbnQgYGRhdGFgIGV2ZW50cykgd2hpY2hcbiAgICAvLyBpbXByb3ZlcyBtbSBwZXJmb3JtYW5jZSBieSAyOSUuXG5cbiAgICB3aGlsZSAoKytpbmRleCA8PSBldmVudHMubGVuZ3RoKSB7XG4gICAgICBpZiAoZW50ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZXZlbnRzW2luZGV4XSAmJiBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdkYXRhJykge1xuICAgICAgICAgIGVudGVyID0gaW5kZXhcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWV2ZW50c1tpbmRleF0gfHwgZXZlbnRzW2luZGV4XVsxXS50eXBlICE9PSAnZGF0YScpIHtcbiAgICAgICAgLy8gRG9u4oCZdCBkbyBhbnl0aGluZyBpZiB0aGVyZSBpcyBvbmUgZGF0YSB0b2tlbi5cbiAgICAgICAgaWYgKGluZGV4ICE9PSBlbnRlciArIDIpIHtcbiAgICAgICAgICBldmVudHNbZW50ZXJdWzFdLmVuZCA9IGV2ZW50c1tpbmRleCAtIDFdWzFdLmVuZFxuICAgICAgICAgIGV2ZW50cy5zcGxpY2UoZW50ZXIgKyAyLCBpbmRleCAtIGVudGVyIC0gMilcbiAgICAgICAgICBpbmRleCA9IGVudGVyICsgMlxuICAgICAgICB9XG5cbiAgICAgICAgZW50ZXIgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXh0cmFSZXNvbHZlciA/IGV4dHJhUmVzb2x2ZXIoZXZlbnRzLCBjb250ZXh0KSA6IGV2ZW50c1xuICB9XG59IC8vIEEgcmF0aGVyIHVnbHkgc2V0IG9mIGluc3RydWN0aW9ucyB3aGljaCBhZ2FpbiBsb29rcyBhdCBjaHVua3MgaW4gdGhlIGlucHV0XG4vLyBzdHJlYW0uXG4vLyBUaGUgcmVhc29uIHRvIGRvIHRoaXMgaGVyZSBpcyB0aGF0IGl0IGlzICptdWNoKiBmYXN0ZXIgdG8gcGFyc2UgaW4gcmV2ZXJzZS5cbi8vIEFuZCB0aGF0IHdlIGNhbuKAmXQgaG9vayBpbnRvIGBudWxsYCB0byBzcGxpdCB0aGUgbGluZSBzdWZmaXggYmVmb3JlIGFuIEVPRi5cbi8vIFRvIGRvOiBmaWd1cmUgb3V0IGlmIHdlIGNhbiBtYWtlIHRoaXMgaW50byBhIGNsZWFuIHV0aWxpdHksIG9yIGV2ZW4gaW4gY29yZS5cbi8vIEFzIGl0IHdpbGwgYmUgdXNlZnVsIGZvciBHRk1zIGxpdGVyYWwgYXV0b2xpbmsgZXh0ZW5zaW9uIChhbmQgbWF5YmUgZXZlblxuLy8gdGFibGVzPylcblxuZnVuY3Rpb24gcmVzb2x2ZUFsbExpbmVTdWZmaXhlcyhldmVudHMsIGNvbnRleHQpIHtcbiAgdmFyIGV2ZW50SW5kZXggPSAtMVxuICB2YXIgY2h1bmtzXG4gIHZhciBkYXRhXG4gIHZhciBjaHVua1xuICB2YXIgaW5kZXhcbiAgdmFyIGJ1ZmZlckluZGV4XG4gIHZhciBzaXplXG4gIHZhciB0YWJzXG4gIHZhciB0b2tlblxuXG4gIHdoaWxlICgrK2V2ZW50SW5kZXggPD0gZXZlbnRzLmxlbmd0aCkge1xuICAgIGlmIChcbiAgICAgIChldmVudEluZGV4ID09PSBldmVudHMubGVuZ3RoIHx8XG4gICAgICAgIGV2ZW50c1tldmVudEluZGV4XVsxXS50eXBlID09PSAnbGluZUVuZGluZycpICYmXG4gICAgICBldmVudHNbZXZlbnRJbmRleCAtIDFdWzFdLnR5cGUgPT09ICdkYXRhJ1xuICAgICkge1xuICAgICAgZGF0YSA9IGV2ZW50c1tldmVudEluZGV4IC0gMV1bMV1cbiAgICAgIGNodW5rcyA9IGNvbnRleHQuc2xpY2VTdHJlYW0oZGF0YSlcbiAgICAgIGluZGV4ID0gY2h1bmtzLmxlbmd0aFxuICAgICAgYnVmZmVySW5kZXggPSAtMVxuICAgICAgc2l6ZSA9IDBcbiAgICAgIHRhYnMgPSB1bmRlZmluZWRcblxuICAgICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgICAgY2h1bmsgPSBjaHVua3NbaW5kZXhdXG5cbiAgICAgICAgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBidWZmZXJJbmRleCA9IGNodW5rLmxlbmd0aFxuXG4gICAgICAgICAgd2hpbGUgKGNodW5rLmNoYXJDb2RlQXQoYnVmZmVySW5kZXggLSAxKSA9PT0gMzIpIHtcbiAgICAgICAgICAgIHNpemUrK1xuICAgICAgICAgICAgYnVmZmVySW5kZXgtLVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChidWZmZXJJbmRleCkgYnJlYWtcbiAgICAgICAgICBidWZmZXJJbmRleCA9IC0xXG4gICAgICAgIH0gLy8gTnVtYmVyXG4gICAgICAgIGVsc2UgaWYgKGNodW5rID09PSAtMikge1xuICAgICAgICAgIHRhYnMgPSB0cnVlXG4gICAgICAgICAgc2l6ZSsrXG4gICAgICAgIH0gZWxzZSBpZiAoY2h1bmsgPT09IC0xKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gUmVwbGFjZW1lbnQgY2hhcmFjdGVyLCBleGl0LlxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIHRva2VuID0ge1xuICAgICAgICAgIHR5cGU6XG4gICAgICAgICAgICBldmVudEluZGV4ID09PSBldmVudHMubGVuZ3RoIHx8IHRhYnMgfHwgc2l6ZSA8IDJcbiAgICAgICAgICAgICAgPyAnbGluZVN1ZmZpeCdcbiAgICAgICAgICAgICAgOiAnaGFyZEJyZWFrVHJhaWxpbmcnLFxuICAgICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICBsaW5lOiBkYXRhLmVuZC5saW5lLFxuICAgICAgICAgICAgY29sdW1uOiBkYXRhLmVuZC5jb2x1bW4gLSBzaXplLFxuICAgICAgICAgICAgb2Zmc2V0OiBkYXRhLmVuZC5vZmZzZXQgLSBzaXplLFxuICAgICAgICAgICAgX2luZGV4OiBkYXRhLnN0YXJ0Ll9pbmRleCArIGluZGV4LFxuICAgICAgICAgICAgX2J1ZmZlckluZGV4OiBpbmRleFxuICAgICAgICAgICAgICA/IGJ1ZmZlckluZGV4XG4gICAgICAgICAgICAgIDogZGF0YS5zdGFydC5fYnVmZmVySW5kZXggKyBidWZmZXJJbmRleFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW5kOiBzaGFsbG93KGRhdGEuZW5kKVxuICAgICAgICB9XG4gICAgICAgIGRhdGEuZW5kID0gc2hhbGxvdyh0b2tlbi5zdGFydClcblxuICAgICAgICBpZiAoZGF0YS5zdGFydC5vZmZzZXQgPT09IGRhdGEuZW5kLm9mZnNldCkge1xuICAgICAgICAgIGFzc2lnbihkYXRhLCB0b2tlbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVudHMuc3BsaWNlKFxuICAgICAgICAgICAgZXZlbnRJbmRleCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBbJ2VudGVyJywgdG9rZW4sIGNvbnRleHRdLFxuICAgICAgICAgICAgWydleGl0JywgdG9rZW4sIGNvbnRleHRdXG4gICAgICAgICAgKVxuICAgICAgICAgIGV2ZW50SW5kZXggKz0gMlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2ZW50SW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZXhwb3J0cy5yZXNvbHZlciA9IHJlc29sdmVyXG5leHBvcnRzLnN0cmluZyA9IHN0cmluZ1xuZXhwb3J0cy50ZXh0ID0gdGV4dFxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjb250ZW50ID0gcmVxdWlyZSgnLi9pbml0aWFsaXplL2NvbnRlbnQuanMnKVxudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9pbml0aWFsaXplL2RvY3VtZW50LmpzJylcbnZhciBmbG93ID0gcmVxdWlyZSgnLi9pbml0aWFsaXplL2Zsb3cuanMnKVxudmFyIHRleHQgPSByZXF1aXJlKCcuL2luaXRpYWxpemUvdGV4dC5qcycpXG52YXIgY29tYmluZUV4dGVuc2lvbnMgPSByZXF1aXJlKCcuL3V0aWwvY29tYmluZS1leHRlbnNpb25zLmpzJylcbnZhciBjcmVhdGVUb2tlbml6ZXIgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlLXRva2VuaXplci5qcycpXG52YXIgbWluaWZsYXQgPSByZXF1aXJlKCcuL3V0aWwvbWluaWZsYXQuanMnKVxudmFyIGNvbnN0cnVjdHMgPSByZXF1aXJlKCcuL2NvbnN0cnVjdHMuanMnKVxuXG5mdW5jdGlvbiBwYXJzZShvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIHBhcnNlciA9IHtcbiAgICBkZWZpbmVkOiBbXSxcbiAgICBjb25zdHJ1Y3RzOiBjb21iaW5lRXh0ZW5zaW9ucyhcbiAgICAgIFtjb25zdHJ1Y3RzXS5jb25jYXQobWluaWZsYXQoc2V0dGluZ3MuZXh0ZW5zaW9ucykpXG4gICAgKSxcbiAgICBjb250ZW50OiBjcmVhdGUoY29udGVudCksXG4gICAgZG9jdW1lbnQ6IGNyZWF0ZShkb2N1bWVudCksXG4gICAgZmxvdzogY3JlYXRlKGZsb3cpLFxuICAgIHN0cmluZzogY3JlYXRlKHRleHQuc3RyaW5nKSxcbiAgICB0ZXh0OiBjcmVhdGUodGV4dC50ZXh0KVxuICB9XG4gIHJldHVybiBwYXJzZXJcblxuICBmdW5jdGlvbiBjcmVhdGUoaW5pdGlhbGl6ZXIpIHtcbiAgICByZXR1cm4gY3JlYXRvclxuXG4gICAgZnVuY3Rpb24gY3JlYXRvcihmcm9tKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVG9rZW5pemVyKHBhcnNlciwgaW5pdGlhbGl6ZXIsIGZyb20pXG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgc3VidG9rZW5pemUgPSByZXF1aXJlKCcuL3V0aWwvc3VidG9rZW5pemUuanMnKVxuXG5mdW5jdGlvbiBwb3N0cHJvY2VzcyhldmVudHMpIHtcbiAgd2hpbGUgKCFzdWJ0b2tlbml6ZShldmVudHMpKSB7XG4gICAgLy8gRW1wdHlcbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb3N0cHJvY2Vzc1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzZWFyY2ggPSAvW1xcMFxcdFxcblxccl0vZ1xuXG5mdW5jdGlvbiBwcmVwcm9jZXNzKCkge1xuICB2YXIgc3RhcnQgPSB0cnVlXG4gIHZhciBjb2x1bW4gPSAxXG4gIHZhciBidWZmZXIgPSAnJ1xuICB2YXIgYXRDYXJyaWFnZVJldHVyblxuICByZXR1cm4gcHJlcHJvY2Vzc29yXG5cbiAgZnVuY3Rpb24gcHJlcHJvY2Vzc29yKHZhbHVlLCBlbmNvZGluZywgZW5kKSB7XG4gICAgdmFyIGNodW5rcyA9IFtdXG4gICAgdmFyIG1hdGNoXG4gICAgdmFyIG5leHRcbiAgICB2YXIgc3RhcnRQb3NpdGlvblxuICAgIHZhciBlbmRQb3NpdGlvblxuICAgIHZhciBjb2RlXG4gICAgdmFsdWUgPSBidWZmZXIgKyB2YWx1ZS50b1N0cmluZyhlbmNvZGluZylcbiAgICBzdGFydFBvc2l0aW9uID0gMFxuICAgIGJ1ZmZlciA9ICcnXG5cbiAgICBpZiAoc3RhcnQpIHtcbiAgICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KDApID09PSA2NTI3OSkge1xuICAgICAgICBzdGFydFBvc2l0aW9uKytcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICB3aGlsZSAoc3RhcnRQb3NpdGlvbiA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgc2VhcmNoLmxhc3RJbmRleCA9IHN0YXJ0UG9zaXRpb25cbiAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWModmFsdWUpXG4gICAgICBlbmRQb3NpdGlvbiA9IG1hdGNoID8gbWF0Y2guaW5kZXggOiB2YWx1ZS5sZW5ndGhcbiAgICAgIGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGVuZFBvc2l0aW9uKVxuXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIGJ1ZmZlciA9IHZhbHVlLnNsaWNlKHN0YXJ0UG9zaXRpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2RlID09PSAxMCAmJiBzdGFydFBvc2l0aW9uID09PSBlbmRQb3NpdGlvbiAmJiBhdENhcnJpYWdlUmV0dXJuKSB7XG4gICAgICAgIGNodW5rcy5wdXNoKC0zKVxuICAgICAgICBhdENhcnJpYWdlUmV0dXJuID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYXRDYXJyaWFnZVJldHVybikge1xuICAgICAgICAgIGNodW5rcy5wdXNoKC01KVxuICAgICAgICAgIGF0Q2FycmlhZ2VSZXR1cm4gPSB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydFBvc2l0aW9uIDwgZW5kUG9zaXRpb24pIHtcbiAgICAgICAgICBjaHVua3MucHVzaCh2YWx1ZS5zbGljZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikpXG4gICAgICAgICAgY29sdW1uICs9IGVuZFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IDApIHtcbiAgICAgICAgICBjaHVua3MucHVzaCg2NTUzMylcbiAgICAgICAgICBjb2x1bW4rK1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDkpIHtcbiAgICAgICAgICBuZXh0ID0gTWF0aC5jZWlsKGNvbHVtbiAvIDQpICogNFxuICAgICAgICAgIGNodW5rcy5wdXNoKC0yKVxuXG4gICAgICAgICAgd2hpbGUgKGNvbHVtbisrIDwgbmV4dCkgY2h1bmtzLnB1c2goLTEpXG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMTApIHtcbiAgICAgICAgICBjaHVua3MucHVzaCgtNClcbiAgICAgICAgICBjb2x1bW4gPSAxXG4gICAgICAgIH0gLy8gTXVzdCBiZSBjYXJyaWFnZSByZXR1cm4uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGF0Q2FycmlhZ2VSZXR1cm4gPSB0cnVlXG4gICAgICAgICAgY29sdW1uID0gMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBlbmRQb3NpdGlvbiArIDFcbiAgICB9XG5cbiAgICBpZiAoZW5kKSB7XG4gICAgICBpZiAoYXRDYXJyaWFnZVJldHVybikgY2h1bmtzLnB1c2goLTUpXG4gICAgICBpZiAoYnVmZmVyKSBjaHVua3MucHVzaChidWZmZXIpXG4gICAgICBjaHVua3MucHVzaChudWxsKVxuICAgIH1cblxuICAgIHJldHVybiBjaHVua3NcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByZXByb2Nlc3NcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY2h1bmtlZFB1c2ggPSByZXF1aXJlKCcuLi91dGlsL2NodW5rZWQtcHVzaC5qcycpXG52YXIgY2h1bmtlZFNwbGljZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2h1bmtlZC1zcGxpY2UuanMnKVxudmFyIGNsYXNzaWZ5Q2hhcmFjdGVyID0gcmVxdWlyZSgnLi4vdXRpbC9jbGFzc2lmeS1jaGFyYWN0ZXIuanMnKVxudmFyIG1vdmVQb2ludCA9IHJlcXVpcmUoJy4uL3V0aWwvbW92ZS1wb2ludC5qcycpXG52YXIgcmVzb2x2ZUFsbCA9IHJlcXVpcmUoJy4uL3V0aWwvcmVzb2x2ZS1hbGwuanMnKVxudmFyIHNoYWxsb3cgPSByZXF1aXJlKCcuLi91dGlsL3NoYWxsb3cuanMnKVxuXG52YXIgYXR0ZW50aW9uID0ge1xuICBuYW1lOiAnYXR0ZW50aW9uJyxcbiAgdG9rZW5pemU6IHRva2VuaXplQXR0ZW50aW9uLFxuICByZXNvbHZlQWxsOiByZXNvbHZlQWxsQXR0ZW50aW9uXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBbGxBdHRlbnRpb24oZXZlbnRzLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBvcGVuXG4gIHZhciBncm91cFxuICB2YXIgdGV4dFxuICB2YXIgb3BlbmluZ1NlcXVlbmNlXG4gIHZhciBjbG9zaW5nU2VxdWVuY2VcbiAgdmFyIHVzZVxuICB2YXIgbmV4dEV2ZW50c1xuICB2YXIgb2Zmc2V0IC8vIFdhbGsgdGhyb3VnaCBhbGwgZXZlbnRzLlxuICAvL1xuICAvLyBOb3RlOiBwZXJmb3JtYW5jZSBvZiB0aGlzIGlzIGZpbmUgb24gYW4gbWIgb2Ygbm9ybWFsIG1hcmtkb3duLCBidXQgaXTigJlzXG4gIC8vIGEgYm90dGxlbmVjayBmb3IgbWFsaWNpb3VzIHN0dWZmLlxuXG4gIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBjbG9zZS5cbiAgICBpZiAoXG4gICAgICBldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmXG4gICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdhdHRlbnRpb25TZXF1ZW5jZScgJiZcbiAgICAgIGV2ZW50c1tpbmRleF1bMV0uX2Nsb3NlXG4gICAgKSB7XG4gICAgICBvcGVuID0gaW5kZXggLy8gTm93IHdhbGsgYmFjayB0byBmaW5kIGFuIG9wZW5lci5cblxuICAgICAgd2hpbGUgKG9wZW4tLSkge1xuICAgICAgICAvLyBGaW5kIGEgdG9rZW4gdGhhdCBjYW4gb3BlbiB0aGUgY2xvc2VyLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgZXZlbnRzW29wZW5dWzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICBldmVudHNbb3Blbl1bMV0udHlwZSA9PT0gJ2F0dGVudGlvblNlcXVlbmNlJyAmJlxuICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5fb3BlbiAmJiAvLyBJZiB0aGUgbWFya2VycyBhcmUgdGhlIHNhbWU6XG4gICAgICAgICAgY29udGV4dC5zbGljZVNlcmlhbGl6ZShldmVudHNbb3Blbl1bMV0pLmNoYXJDb2RlQXQoMCkgPT09XG4gICAgICAgICAgICBjb250ZXh0LnNsaWNlU2VyaWFsaXplKGV2ZW50c1tpbmRleF1bMV0pLmNoYXJDb2RlQXQoMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIG9wZW5pbmcgY2FuIGNsb3NlIG9yIHRoZSBjbG9zaW5nIGNhbiBvcGVuLFxuICAgICAgICAgIC8vIGFuZCB0aGUgY2xvc2Ugc2l6ZSAqaXMgbm90KiBhIG11bHRpcGxlIG9mIHRocmVlLFxuICAgICAgICAgIC8vIGJ1dCB0aGUgc3VtIG9mIHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHNpemUgKmlzKiBtdWx0aXBsZSBvZiB0aHJlZSxcbiAgICAgICAgICAvLyB0aGVuIGRvbuKAmXQgbWF0Y2guXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGV2ZW50c1tvcGVuXVsxXS5fY2xvc2UgfHwgZXZlbnRzW2luZGV4XVsxXS5fb3BlbikgJiZcbiAgICAgICAgICAgIChldmVudHNbaW5kZXhdWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbaW5kZXhdWzFdLnN0YXJ0Lm9mZnNldCkgJSAzICYmXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAoZXZlbnRzW29wZW5dWzFdLmVuZC5vZmZzZXQgLVxuICAgICAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5zdGFydC5vZmZzZXQgK1xuICAgICAgICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0uZW5kLm9mZnNldCAtXG4gICAgICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQpICVcbiAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IC8vIE51bWJlciBvZiBtYXJrZXJzIHRvIHVzZSBmcm9tIHRoZSBzZXF1ZW5jZS5cblxuICAgICAgICAgIHVzZSA9XG4gICAgICAgICAgICBldmVudHNbb3Blbl1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tvcGVuXVsxXS5zdGFydC5vZmZzZXQgPiAxICYmXG4gICAgICAgICAgICBldmVudHNbaW5kZXhdWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbaW5kZXhdWzFdLnN0YXJ0Lm9mZnNldCA+IDFcbiAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgIDogMVxuICAgICAgICAgIG9wZW5pbmdTZXF1ZW5jZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IHVzZSA+IDEgPyAnc3Ryb25nU2VxdWVuY2UnIDogJ2VtcGhhc2lzU2VxdWVuY2UnLFxuICAgICAgICAgICAgc3RhcnQ6IG1vdmVQb2ludChzaGFsbG93KGV2ZW50c1tvcGVuXVsxXS5lbmQpLCAtdXNlKSxcbiAgICAgICAgICAgIGVuZDogc2hhbGxvdyhldmVudHNbb3Blbl1bMV0uZW5kKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjbG9zaW5nU2VxdWVuY2UgPSB7XG4gICAgICAgICAgICB0eXBlOiB1c2UgPiAxID8gJ3N0cm9uZ1NlcXVlbmNlJyA6ICdlbXBoYXNpc1NlcXVlbmNlJyxcbiAgICAgICAgICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1tpbmRleF1bMV0uc3RhcnQpLFxuICAgICAgICAgICAgZW5kOiBtb3ZlUG9pbnQoc2hhbGxvdyhldmVudHNbaW5kZXhdWzFdLnN0YXJ0KSwgdXNlKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0ID0ge1xuICAgICAgICAgICAgdHlwZTogdXNlID4gMSA/ICdzdHJvbmdUZXh0JyA6ICdlbXBoYXNpc1RleHQnLFxuICAgICAgICAgICAgc3RhcnQ6IHNoYWxsb3coZXZlbnRzW29wZW5dWzFdLmVuZCksXG4gICAgICAgICAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2luZGV4XVsxXS5zdGFydClcbiAgICAgICAgICB9XG4gICAgICAgICAgZ3JvdXAgPSB7XG4gICAgICAgICAgICB0eXBlOiB1c2UgPiAxID8gJ3N0cm9uZycgOiAnZW1waGFzaXMnLFxuICAgICAgICAgICAgc3RhcnQ6IHNoYWxsb3cob3BlbmluZ1NlcXVlbmNlLnN0YXJ0KSxcbiAgICAgICAgICAgIGVuZDogc2hhbGxvdyhjbG9zaW5nU2VxdWVuY2UuZW5kKVxuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudHNbb3Blbl1bMV0uZW5kID0gc2hhbGxvdyhvcGVuaW5nU2VxdWVuY2Uuc3RhcnQpXG4gICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5zdGFydCA9IHNoYWxsb3coY2xvc2luZ1NlcXVlbmNlLmVuZClcbiAgICAgICAgICBuZXh0RXZlbnRzID0gW10gLy8gSWYgdGhlcmUgYXJlIG1vcmUgbWFya2VycyBpbiB0aGUgb3BlbmluZywgYWRkIHRoZW0gYmVmb3JlLlxuXG4gICAgICAgICAgaWYgKGV2ZW50c1tvcGVuXVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW29wZW5dWzFdLnN0YXJ0Lm9mZnNldCkge1xuICAgICAgICAgICAgbmV4dEV2ZW50cyA9IGNodW5rZWRQdXNoKG5leHRFdmVudHMsIFtcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSAvLyBPcGVuaW5nLlxuXG4gICAgICAgICAgbmV4dEV2ZW50cyA9IGNodW5rZWRQdXNoKG5leHRFdmVudHMsIFtcbiAgICAgICAgICAgIFsnZW50ZXInLCBncm91cCwgY29udGV4dF0sXG4gICAgICAgICAgICBbJ2VudGVyJywgb3BlbmluZ1NlcXVlbmNlLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZXhpdCcsIG9wZW5pbmdTZXF1ZW5jZSwgY29udGV4dF0sXG4gICAgICAgICAgICBbJ2VudGVyJywgdGV4dCwgY29udGV4dF1cbiAgICAgICAgICBdKSAvLyBCZXR3ZWVuLlxuXG4gICAgICAgICAgbmV4dEV2ZW50cyA9IGNodW5rZWRQdXNoKFxuICAgICAgICAgICAgbmV4dEV2ZW50cyxcbiAgICAgICAgICAgIHJlc29sdmVBbGwoXG4gICAgICAgICAgICAgIGNvbnRleHQucGFyc2VyLmNvbnN0cnVjdHMuaW5zaWRlU3Bhbi5udWxsLFxuICAgICAgICAgICAgICBldmVudHMuc2xpY2Uob3BlbiArIDEsIGluZGV4KSxcbiAgICAgICAgICAgICAgY29udGV4dFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgLy8gQ2xvc2luZy5cblxuICAgICAgICAgIG5leHRFdmVudHMgPSBjaHVua2VkUHVzaChuZXh0RXZlbnRzLCBbXG4gICAgICAgICAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZW50ZXInLCBjbG9zaW5nU2VxdWVuY2UsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydleGl0JywgY2xvc2luZ1NlcXVlbmNlLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZXhpdCcsIGdyb3VwLCBjb250ZXh0XVxuICAgICAgICAgIF0pIC8vIElmIHRoZXJlIGFyZSBtb3JlIG1hcmtlcnMgaW4gdGhlIGNsb3NpbmcsIGFkZCB0aGVtIGFmdGVyLlxuXG4gICAgICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQub2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAyXG4gICAgICAgICAgICBuZXh0RXZlbnRzID0gY2h1bmtlZFB1c2gobmV4dEV2ZW50cywgW1xuICAgICAgICAgICAgICBbJ2VudGVyJywgZXZlbnRzW2luZGV4XVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2h1bmtlZFNwbGljZShldmVudHMsIG9wZW4gLSAxLCBpbmRleCAtIG9wZW4gKyAzLCBuZXh0RXZlbnRzKVxuICAgICAgICAgIGluZGV4ID0gb3BlbiArIG5leHRFdmVudHMubGVuZ3RoIC0gb2Zmc2V0IC0gMlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUmVtb3ZlIHJlbWFpbmluZyBzZXF1ZW5jZXMuXG5cbiAgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdhdHRlbnRpb25TZXF1ZW5jZScpIHtcbiAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9ICdkYXRhJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVBdHRlbnRpb24oZWZmZWN0cywgb2spIHtcbiAgdmFyIGJlZm9yZSA9IGNsYXNzaWZ5Q2hhcmFjdGVyKHRoaXMucHJldmlvdXMpXG4gIHZhciBtYXJrZXJcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2F0dGVudGlvblNlcXVlbmNlJylcbiAgICBtYXJrZXIgPSBjb2RlXG4gICAgcmV0dXJuIHNlcXVlbmNlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBzZXF1ZW5jZShjb2RlKSB7XG4gICAgdmFyIHRva2VuXG4gICAgdmFyIGFmdGVyXG4gICAgdmFyIG9wZW5cbiAgICB2YXIgY2xvc2VcblxuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlXG4gICAgfVxuXG4gICAgdG9rZW4gPSBlZmZlY3RzLmV4aXQoJ2F0dGVudGlvblNlcXVlbmNlJylcbiAgICBhZnRlciA9IGNsYXNzaWZ5Q2hhcmFjdGVyKGNvZGUpXG4gICAgb3BlbiA9ICFhZnRlciB8fCAoYWZ0ZXIgPT09IDIgJiYgYmVmb3JlKVxuICAgIGNsb3NlID0gIWJlZm9yZSB8fCAoYmVmb3JlID09PSAyICYmIGFmdGVyKVxuICAgIHRva2VuLl9vcGVuID0gbWFya2VyID09PSA0MiA/IG9wZW4gOiBvcGVuICYmIChiZWZvcmUgfHwgIWNsb3NlKVxuICAgIHRva2VuLl9jbG9zZSA9IG1hcmtlciA9PT0gNDIgPyBjbG9zZSA6IGNsb3NlICYmIChhZnRlciB8fCAhb3BlbilcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGF0dGVudGlvblxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhc2NpaUFscGhhID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWFscGhhLmpzJylcbnZhciBhc2NpaUFscGhhbnVtZXJpYyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYW51bWVyaWMuanMnKVxudmFyIGFzY2lpQXRleHQgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktYXRleHQuanMnKVxudmFyIGFzY2lpQ29udHJvbCA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1jb250cm9sLmpzJylcblxudmFyIGF1dG9saW5rID0ge1xuICBuYW1lOiAnYXV0b2xpbmsnLFxuICB0b2tlbml6ZTogdG9rZW5pemVBdXRvbGlua1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUF1dG9saW5rKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNpemUgPSAxXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdhdXRvbGluaycpXG4gICAgZWZmZWN0cy5lbnRlcignYXV0b2xpbmtNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtNYXJrZXInKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2F1dG9saW5rUHJvdG9jb2wnKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2NoZW1lT3JFbWFpbEF0ZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzY2lpQXRleHQoY29kZSkgPyBlbWFpbEF0ZXh0KGNvZGUpIDogbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBzY2hlbWVPckVtYWlsQXRleHQoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSA0MyB8fCBjb2RlID09PSA0NSB8fCBjb2RlID09PSA0NiB8fCBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKVxuICAgICAgPyBzY2hlbWVJbnNpZGVPckVtYWlsQXRleHQoY29kZSlcbiAgICAgIDogZW1haWxBdGV4dChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gc2NoZW1lSW5zaWRlT3JFbWFpbEF0ZXh0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNTgpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHVybEluc2lkZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIChjb2RlID09PSA0MyB8fCBjb2RlID09PSA0NSB8fCBjb2RlID09PSA0NiB8fCBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKSkgJiZcbiAgICAgIHNpemUrKyA8IDMyXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBzY2hlbWVJbnNpZGVPckVtYWlsQXRleHRcbiAgICB9XG5cbiAgICByZXR1cm4gZW1haWxBdGV4dChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXJsSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtQcm90b2NvbCcpXG4gICAgICByZXR1cm4gZW5kKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDMyIHx8IGNvZGUgPT09IDYwIHx8IGFzY2lpQ29udHJvbChjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiB1cmxJbnNpZGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtYWlsQXRleHQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2NCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplID0gMFxuICAgICAgcmV0dXJuIGVtYWlsQXRTaWduT3JEb3RcbiAgICB9XG5cbiAgICBpZiAoYXNjaWlBdGV4dChjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZW1haWxBdGV4dFxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtYWlsQXRTaWduT3JEb3QoY29kZSkge1xuICAgIHJldHVybiBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKSA/IGVtYWlsTGFiZWwoY29kZSkgOiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtYWlsTGFiZWwoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0Nikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplID0gMFxuICAgICAgcmV0dXJuIGVtYWlsQXRTaWduT3JEb3RcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIC8vIEV4aXQsIHRoZW4gY2hhbmdlIHRoZSB0eXBlLlxuICAgICAgZWZmZWN0cy5leGl0KCdhdXRvbGlua1Byb3RvY29sJykudHlwZSA9ICdhdXRvbGlua0VtYWlsJ1xuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBlbWFpbFZhbHVlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbWFpbFZhbHVlKGNvZGUpIHtcbiAgICBpZiAoKGNvZGUgPT09IDQ1IHx8IGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSAmJiBzaXplKysgPCA2Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29kZSA9PT0gNDUgPyBlbWFpbFZhbHVlIDogZW1haWxMYWJlbFxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignYXV0b2xpbmtNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtNYXJrZXInKVxuICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmsnKVxuICAgIHJldHVybiBva1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXV0b2xpbmtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZS5qcycpXG52YXIgZmFjdG9yeVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlLmpzJylcblxudmFyIGJsb2NrUXVvdGUgPSB7XG4gIG5hbWU6ICdibG9ja1F1b3RlJyxcbiAgdG9rZW5pemU6IHRva2VuaXplQmxvY2tRdW90ZVN0YXJ0LFxuICBjb250aW51YXRpb246IHtcbiAgICB0b2tlbml6ZTogdG9rZW5pemVCbG9ja1F1b3RlQ29udGludWF0aW9uXG4gIH0sXG4gIGV4aXQ6IGV4aXRcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVCbG9ja1F1b3RlU3RhcnQoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgaWYgKCFzZWxmLmNvbnRhaW5lclN0YXRlLm9wZW4pIHtcbiAgICAgICAgZWZmZWN0cy5lbnRlcignYmxvY2tRdW90ZScsIHtcbiAgICAgICAgICBfY29udGFpbmVyOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUub3BlbiA9IHRydWVcbiAgICAgIH1cblxuICAgICAgZWZmZWN0cy5lbnRlcignYmxvY2tRdW90ZVByZWZpeCcpXG4gICAgICBlZmZlY3RzLmVudGVyKCdibG9ja1F1b3RlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdibG9ja1F1b3RlTWFya2VyJylcbiAgICAgIHJldHVybiBhZnRlclxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignYmxvY2tRdW90ZVByZWZpeFdoaXRlc3BhY2UnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2Jsb2NrUXVvdGVQcmVmaXhXaGl0ZXNwYWNlJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnYmxvY2tRdW90ZVByZWZpeCcpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQoJ2Jsb2NrUXVvdGVQcmVmaXgnKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplQmxvY2tRdW90ZUNvbnRpbnVhdGlvbihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBmYWN0b3J5U3BhY2UoXG4gICAgZWZmZWN0cyxcbiAgICBlZmZlY3RzLmF0dGVtcHQoYmxvY2tRdW90ZSwgb2ssIG5vayksXG4gICAgJ2xpbmVQcmVmaXgnLFxuICAgIHRoaXMucGFyc2VyLmNvbnN0cnVjdHMuZGlzYWJsZS5udWxsLmluZGV4T2YoJ2NvZGVJbmRlbnRlZCcpID4gLTFcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IDRcbiAgKVxufVxuXG5mdW5jdGlvbiBleGl0KGVmZmVjdHMpIHtcbiAgZWZmZWN0cy5leGl0KCdibG9ja1F1b3RlJylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja1F1b3RlXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGFzY2lpUHVuY3R1YXRpb24gPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktcHVuY3R1YXRpb24uanMnKVxuXG52YXIgY2hhcmFjdGVyRXNjYXBlID0ge1xuICBuYW1lOiAnY2hhcmFjdGVyRXNjYXBlJyxcbiAgdG9rZW5pemU6IHRva2VuaXplQ2hhcmFjdGVyRXNjYXBlXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplQ2hhcmFjdGVyRXNjYXBlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlckVzY2FwZScpXG4gICAgZWZmZWN0cy5lbnRlcignZXNjYXBlTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2VzY2FwZU1hcmtlcicpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChhc2NpaVB1bmN0dWF0aW9uKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJFc2NhcGVWYWx1ZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyRXNjYXBlVmFsdWUnKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJFc2NhcGUnKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhcmFjdGVyRXNjYXBlXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGRlY29kZUVudGl0eSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzL2RlY29kZS1lbnRpdHkuanMnKVxudmFyIGFzY2lpQWxwaGFudW1lcmljID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWFscGhhbnVtZXJpYy5qcycpXG52YXIgYXNjaWlEaWdpdCA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1kaWdpdC5qcycpXG52YXIgYXNjaWlIZXhEaWdpdCA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1oZXgtZGlnaXQuanMnKVxuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3koZSkge1xuICByZXR1cm4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDoge2RlZmF1bHQ6IGV9XG59XG5cbnZhciBkZWNvZGVFbnRpdHlfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wRGVmYXVsdExlZ2FjeShkZWNvZGVFbnRpdHkpXG5cbnZhciBjaGFyYWN0ZXJSZWZlcmVuY2UgPSB7XG4gIG5hbWU6ICdjaGFyYWN0ZXJSZWZlcmVuY2UnLFxuICB0b2tlbml6ZTogdG9rZW5pemVDaGFyYWN0ZXJSZWZlcmVuY2Vcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVDaGFyYWN0ZXJSZWZlcmVuY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHNpemUgPSAwXG4gIHZhciBtYXhcbiAgdmFyIHRlc3RcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZScpXG4gICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlcicpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzNSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyTnVtZXJpYycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyTnVtZXJpYycpXG4gICAgICByZXR1cm4gbnVtZXJpY1xuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZVZhbHVlJylcbiAgICBtYXggPSAzMVxuICAgIHRlc3QgPSBhc2NpaUFscGhhbnVtZXJpY1xuICAgIHJldHVybiB2YWx1ZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gbnVtZXJpYyhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDg4IHx8IGNvZGUgPT09IDEyMCkge1xuICAgICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VySGV4YWRlY2ltYWwnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlckhleGFkZWNpbWFsJylcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZVZhbHVlJylcbiAgICAgIG1heCA9IDZcbiAgICAgIHRlc3QgPSBhc2NpaUhleERpZ2l0XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VWYWx1ZScpXG4gICAgbWF4ID0gN1xuICAgIHRlc3QgPSBhc2NpaURpZ2l0XG4gICAgcmV0dXJuIHZhbHVlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB2YWx1ZShjb2RlKSB7XG4gICAgdmFyIHRva2VuXG5cbiAgICBpZiAoY29kZSA9PT0gNTkgJiYgc2l6ZSkge1xuICAgICAgdG9rZW4gPSBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlclJlZmVyZW5jZVZhbHVlJylcblxuICAgICAgaWYgKFxuICAgICAgICB0ZXN0ID09PSBhc2NpaUFscGhhbnVtZXJpYyAmJlxuICAgICAgICAhZGVjb2RlRW50aXR5X19kZWZhdWx0WydkZWZhdWx0J10oc2VsZi5zbGljZVNlcmlhbGl6ZSh0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlclJlZmVyZW5jZScpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICBpZiAodGVzdChjb2RlKSAmJiBzaXplKysgPCBtYXgpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhcmFjdGVyUmVmZXJlbmNlXG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy5qcycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZS5qcycpXG52YXIgcHJlZml4U2l6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvcHJlZml4LXNpemUuanMnKVxudmFyIGZhY3RvcnlTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZS5qcycpXG5cbnZhciBjb2RlRmVuY2VkID0ge1xuICBuYW1lOiAnY29kZUZlbmNlZCcsXG4gIHRva2VuaXplOiB0b2tlbml6ZUNvZGVGZW5jZWQsXG4gIGNvbmNyZXRlOiB0cnVlXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplQ29kZUZlbmNlZChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgY2xvc2luZ0ZlbmNlQ29uc3RydWN0ID0ge1xuICAgIHRva2VuaXplOiB0b2tlbml6ZUNsb3NpbmdGZW5jZSxcbiAgICBwYXJ0aWFsOiB0cnVlXG4gIH1cbiAgdmFyIGluaXRpYWxQcmVmaXggPSBwcmVmaXhTaXplKHRoaXMuZXZlbnRzLCAnbGluZVByZWZpeCcpXG4gIHZhciBzaXplT3BlbiA9IDBcbiAgdmFyIG1hcmtlclxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZCcpXG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlJylcbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2VTZXF1ZW5jZScpXG4gICAgbWFya2VyID0gY29kZVxuICAgIHJldHVybiBzZXF1ZW5jZU9wZW4oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcXVlbmNlT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplT3BlbisrXG4gICAgICByZXR1cm4gc2VxdWVuY2VPcGVuXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2VTZXF1ZW5jZScpXG4gICAgcmV0dXJuIHNpemVPcGVuIDwgM1xuICAgICAgPyBub2soY29kZSlcbiAgICAgIDogZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGluZm9PcGVuLCAnd2hpdGVzcGFjZScpKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbmZvT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gb3BlbkFmdGVyKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlSW5mbycpXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ3N0cmluZydcbiAgICB9KVxuICAgIHJldHVybiBpbmZvKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbmZvKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZEZlbmNlSW5mbycpXG4gICAgICByZXR1cm4gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGluZm9BZnRlciwgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5NiAmJiBjb2RlID09PSBtYXJrZXIpIHJldHVybiBub2soY29kZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gaW5mb1xuICB9XG5cbiAgZnVuY3Rpb24gaW5mb0FmdGVyKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBvcGVuQWZ0ZXIoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2VNZXRhJylcbiAgICBlZmZlY3RzLmVudGVyKCdjaHVua1N0cmluZycsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnc3RyaW5nJ1xuICAgIH0pXG4gICAgcmV0dXJuIG1ldGEoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ldGEoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGZW5jZWRGZW5jZU1ldGEnKVxuICAgICAgcmV0dXJuIG9wZW5BZnRlcihjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5NiAmJiBjb2RlID09PSBtYXJrZXIpIHJldHVybiBub2soY29kZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gbWV0YVxuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkFmdGVyKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGZW5jZWRGZW5jZScpXG4gICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0ID8gb2soY29kZSkgOiBjb250ZW50KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250ZW50KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFmdGVyKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICBjbG9zaW5nRmVuY2VDb25zdHJ1Y3QsXG4gICAgICAgIGFmdGVyLFxuICAgICAgICBpbml0aWFsUHJlZml4XG4gICAgICAgICAgPyBmYWN0b3J5U3BhY2UoZWZmZWN0cywgY29udGVudCwgJ2xpbmVQcmVmaXgnLCBpbml0aWFsUHJlZml4ICsgMSlcbiAgICAgICAgICA6IGNvbnRlbnRcbiAgICAgIClcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmxvd1ZhbHVlJylcbiAgICByZXR1cm4gY29udGVudENvbnRpbnVlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250ZW50Q29udGludWUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlRmxvd1ZhbHVlJylcbiAgICAgIHJldHVybiBjb250ZW50KGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvbnRlbnRDb250aW51ZVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZCcpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0b2tlbml6ZUNsb3NpbmdGZW5jZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gICAgdmFyIHNpemUgPSAwXG4gICAgcmV0dXJuIGZhY3RvcnlTcGFjZShcbiAgICAgIGVmZmVjdHMsXG4gICAgICBjbG9zaW5nU2VxdWVuY2VTdGFydCxcbiAgICAgICdsaW5lUHJlZml4JyxcbiAgICAgIHRoaXMucGFyc2VyLmNvbnN0cnVjdHMuZGlzYWJsZS5udWxsLmluZGV4T2YoJ2NvZGVJbmRlbnRlZCcpID4gLTFcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiA0XG4gICAgKVxuXG4gICAgZnVuY3Rpb24gY2xvc2luZ1NlcXVlbmNlU3RhcnQoY29kZSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlJylcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGZW5jZWRGZW5jZVNlcXVlbmNlJylcbiAgICAgIHJldHVybiBjbG9zaW5nU2VxdWVuY2UoY29kZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zaW5nU2VxdWVuY2UoY29kZSkge1xuICAgICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgICAgc2l6ZSsrXG4gICAgICAgIHJldHVybiBjbG9zaW5nU2VxdWVuY2VcbiAgICAgIH1cblxuICAgICAgaWYgKHNpemUgPCBzaXplT3BlbikgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2VTZXF1ZW5jZScpXG4gICAgICByZXR1cm4gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGNsb3NpbmdTZXF1ZW5jZUVuZCwgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NpbmdTZXF1ZW5jZUVuZChjb2RlKSB7XG4gICAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2UnKVxuICAgICAgICByZXR1cm4gb2soY29kZSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGVGZW5jZWRcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLmpzJylcbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi4vdXRpbC9jaHVua2VkLXNwbGljZS5qcycpXG52YXIgcHJlZml4U2l6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvcHJlZml4LXNpemUuanMnKVxudmFyIGZhY3RvcnlTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZS5qcycpXG5cbnZhciBjb2RlSW5kZW50ZWQgPSB7XG4gIG5hbWU6ICdjb2RlSW5kZW50ZWQnLFxuICB0b2tlbml6ZTogdG9rZW5pemVDb2RlSW5kZW50ZWQsXG4gIHJlc29sdmU6IHJlc29sdmVDb2RlSW5kZW50ZWRcbn1cbnZhciBpbmRlbnRlZENvbnRlbnRDb25zdHJ1Y3QgPSB7XG4gIHRva2VuaXplOiB0b2tlbml6ZUluZGVudGVkQ29udGVudCxcbiAgcGFydGlhbDogdHJ1ZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ29kZUluZGVudGVkKGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgY29kZSA9IHtcbiAgICB0eXBlOiAnY29kZUluZGVudGVkJyxcbiAgICBzdGFydDogZXZlbnRzWzBdWzFdLnN0YXJ0LFxuICAgIGVuZDogZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVsxXS5lbmRcbiAgfVxuICBjaHVua2VkU3BsaWNlKGV2ZW50cywgMCwgMCwgW1snZW50ZXInLCBjb2RlLCBjb250ZXh0XV0pXG4gIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBldmVudHMubGVuZ3RoLCAwLCBbWydleGl0JywgY29kZSwgY29udGV4dF1dKVxuICByZXR1cm4gZXZlbnRzXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplQ29kZUluZGVudGVkKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChpbmRlbnRlZENvbnRlbnRDb25zdHJ1Y3QsIGFmdGVyUHJlZml4LCBub2spXG5cbiAgZnVuY3Rpb24gYWZ0ZXJQcmVmaXgoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KGluZGVudGVkQ29udGVudENvbnN0cnVjdCwgYWZ0ZXJQcmVmaXgsIG9rKShjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGbG93VmFsdWUnKVxuICAgIHJldHVybiBjb250ZW50KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250ZW50KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZsb3dWYWx1ZScpXG4gICAgICByZXR1cm4gYWZ0ZXJQcmVmaXgoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29udGVudFxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplSW5kZW50ZWRDb250ZW50KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHJldHVybiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgYWZ0ZXJQcmVmaXgsICdsaW5lUHJlZml4JywgNCArIDEpXG5cbiAgZnVuY3Rpb24gYWZ0ZXJQcmVmaXgoY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhZnRlclByZWZpeCwgJ2xpbmVQcmVmaXgnLCA0ICsgMSlcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4U2l6ZShzZWxmLmV2ZW50cywgJ2xpbmVQcmVmaXgnKSA8IDQgPyBub2soY29kZSkgOiBvayhjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29kZUluZGVudGVkXG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy5qcycpXG5cbnZhciBjb2RlVGV4dCA9IHtcbiAgbmFtZTogJ2NvZGVUZXh0JyxcbiAgdG9rZW5pemU6IHRva2VuaXplQ29kZVRleHQsXG4gIHJlc29sdmU6IHJlc29sdmVDb2RlVGV4dCxcbiAgcHJldmlvdXM6IHByZXZpb3VzXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVDb2RlVGV4dChldmVudHMpIHtcbiAgdmFyIHRhaWxFeGl0SW5kZXggPSBldmVudHMubGVuZ3RoIC0gNFxuICB2YXIgaGVhZEVudGVySW5kZXggPSAzXG4gIHZhciBpbmRleFxuICB2YXIgZW50ZXIgLy8gSWYgd2Ugc3RhcnQgYW5kIGVuZCB3aXRoIGFuIEVPTCBvciBhIHNwYWNlLlxuXG4gIGlmIChcbiAgICAoZXZlbnRzW2hlYWRFbnRlckluZGV4XVsxXS50eXBlID09PSAnbGluZUVuZGluZycgfHxcbiAgICAgIGV2ZW50c1toZWFkRW50ZXJJbmRleF1bMV0udHlwZSA9PT0gJ3NwYWNlJykgJiZcbiAgICAoZXZlbnRzW3RhaWxFeGl0SW5kZXhdWzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nJyB8fFxuICAgICAgZXZlbnRzW3RhaWxFeGl0SW5kZXhdWzFdLnR5cGUgPT09ICdzcGFjZScpXG4gICkge1xuICAgIGluZGV4ID0gaGVhZEVudGVySW5kZXggLy8gQW5kIHdlIGhhdmUgZGF0YS5cblxuICAgIHdoaWxlICgrK2luZGV4IDwgdGFpbEV4aXRJbmRleCkge1xuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2NvZGVUZXh0RGF0YScpIHtcbiAgICAgICAgLy8gVGhlbiB3ZSBoYXZlIHBhZGRpbmcuXG4gICAgICAgIGV2ZW50c1t0YWlsRXhpdEluZGV4XVsxXS50eXBlID0gZXZlbnRzW2hlYWRFbnRlckluZGV4XVsxXS50eXBlID1cbiAgICAgICAgICAnY29kZVRleHRQYWRkaW5nJ1xuICAgICAgICBoZWFkRW50ZXJJbmRleCArPSAyXG4gICAgICAgIHRhaWxFeGl0SW5kZXggLT0gMlxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBNZXJnZSBhZGphY2VudCBzcGFjZXMgYW5kIGRhdGEuXG5cbiAgaW5kZXggPSBoZWFkRW50ZXJJbmRleCAtIDFcbiAgdGFpbEV4aXRJbmRleCsrXG5cbiAgd2hpbGUgKCsraW5kZXggPD0gdGFpbEV4aXRJbmRleCkge1xuICAgIGlmIChlbnRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoaW5kZXggIT09IHRhaWxFeGl0SW5kZXggJiYgZXZlbnRzW2luZGV4XVsxXS50eXBlICE9PSAnbGluZUVuZGluZycpIHtcbiAgICAgICAgZW50ZXIgPSBpbmRleFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpbmRleCA9PT0gdGFpbEV4aXRJbmRleCB8fFxuICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnbGluZUVuZGluZydcbiAgICApIHtcbiAgICAgIGV2ZW50c1tlbnRlcl1bMV0udHlwZSA9ICdjb2RlVGV4dERhdGEnXG5cbiAgICAgIGlmIChpbmRleCAhPT0gZW50ZXIgKyAyKSB7XG4gICAgICAgIGV2ZW50c1tlbnRlcl1bMV0uZW5kID0gZXZlbnRzW2luZGV4IC0gMV1bMV0uZW5kXG4gICAgICAgIGV2ZW50cy5zcGxpY2UoZW50ZXIgKyAyLCBpbmRleCAtIGVudGVyIC0gMilcbiAgICAgICAgdGFpbEV4aXRJbmRleCAtPSBpbmRleCAtIGVudGVyIC0gMlxuICAgICAgICBpbmRleCA9IGVudGVyICsgMlxuICAgICAgfVxuXG4gICAgICBlbnRlciA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gcHJldmlvdXMoY29kZSkge1xuICAvLyBJZiB0aGVyZSBpcyBhIHByZXZpb3VzIGNvZGUsIHRoZXJlIHdpbGwgYWx3YXlzIGJlIGEgdGFpbC5cbiAgcmV0dXJuIChcbiAgICBjb2RlICE9PSA5NiB8fFxuICAgIHRoaXMuZXZlbnRzW3RoaXMuZXZlbnRzLmxlbmd0aCAtIDFdWzFdLnR5cGUgPT09ICdjaGFyYWN0ZXJFc2NhcGUnXG4gIClcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVDb2RlVGV4dChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzaXplT3BlbiA9IDBcbiAgdmFyIHNpemVcbiAgdmFyIHRva2VuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlVGV4dCcpXG4gICAgZWZmZWN0cy5lbnRlcignY29kZVRleHRTZXF1ZW5jZScpXG4gICAgcmV0dXJuIG9wZW5pbmdTZXF1ZW5jZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gb3BlbmluZ1NlcXVlbmNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gOTYpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZU9wZW4rK1xuICAgICAgcmV0dXJuIG9wZW5pbmdTZXF1ZW5jZVxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnY29kZVRleHRTZXF1ZW5jZScpXG4gICAgcmV0dXJuIGdhcChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2FwKGNvZGUpIHtcbiAgICAvLyBFT0YuXG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9IC8vIENsb3NpbmcgZmVuY2U/XG4gICAgLy8gQ291bGQgYWxzbyBiZSBkYXRhLlxuXG4gICAgaWYgKGNvZGUgPT09IDk2KSB7XG4gICAgICB0b2tlbiA9IGVmZmVjdHMuZW50ZXIoJ2NvZGVUZXh0U2VxdWVuY2UnKVxuICAgICAgc2l6ZSA9IDBcbiAgICAgIHJldHVybiBjbG9zaW5nU2VxdWVuY2UoY29kZSlcbiAgICB9IC8vIFRhYnMgZG9u4oCZdCB3b3JrLCBhbmQgdmlydHVhbCBzcGFjZXMgZG9u4oCZdCBtYWtlIHNlbnNlLlxuXG4gICAgaWYgKGNvZGUgPT09IDMyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnc3BhY2UnKVxuICAgICAgcmV0dXJuIGdhcFxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGdhcFxuICAgIH0gLy8gRGF0YS5cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVUZXh0RGF0YScpXG4gICAgcmV0dXJuIGRhdGEoY29kZSlcbiAgfSAvLyBJbiBjb2RlLlxuXG4gIGZ1bmN0aW9uIGRhdGEoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDMyIHx8XG4gICAgICBjb2RlID09PSA5NiB8fFxuICAgICAgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVUZXh0RGF0YScpXG4gICAgICByZXR1cm4gZ2FwKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRhdGFcbiAgfSAvLyBDbG9zaW5nIGZlbmNlLlxuXG4gIGZ1bmN0aW9uIGNsb3NpbmdTZXF1ZW5jZShjb2RlKSB7XG4gICAgLy8gTW9yZS5cbiAgICBpZiAoY29kZSA9PT0gOTYpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSsrXG4gICAgICByZXR1cm4gY2xvc2luZ1NlcXVlbmNlXG4gICAgfSAvLyBEb25lIVxuXG4gICAgaWYgKHNpemUgPT09IHNpemVPcGVuKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVUZXh0U2VxdWVuY2UnKVxuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlVGV4dCcpXG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9IC8vIE1vcmUgb3IgbGVzcyBhY2NlbnRzOiBtYXJrIGFzIGRhdGEuXG5cbiAgICB0b2tlbi50eXBlID0gJ2NvZGVUZXh0RGF0YSdcbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29kZVRleHRcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLmpzJylcbnZhciBwcmVmaXhTaXplID0gcmVxdWlyZSgnLi4vdXRpbC9wcmVmaXgtc2l6ZS5qcycpXG52YXIgc3VidG9rZW5pemUgPSByZXF1aXJlKCcuLi91dGlsL3N1YnRva2VuaXplLmpzJylcbnZhciBmYWN0b3J5U3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UuanMnKVxuXG4vLyBObyBuYW1lIGJlY2F1c2UgaXQgbXVzdCBub3QgYmUgdHVybmVkIG9mZi5cbnZhciBjb250ZW50ID0ge1xuICB0b2tlbml6ZTogdG9rZW5pemVDb250ZW50LFxuICByZXNvbHZlOiByZXNvbHZlQ29udGVudCxcbiAgaW50ZXJydXB0aWJsZTogdHJ1ZSxcbiAgbGF6eTogdHJ1ZVxufVxudmFyIGNvbnRpbnVhdGlvbkNvbnN0cnVjdCA9IHtcbiAgdG9rZW5pemU6IHRva2VuaXplQ29udGludWF0aW9uLFxuICBwYXJ0aWFsOiB0cnVlXG59IC8vIENvbnRlbnQgaXMgdHJhbnNwYXJlbnQ6IGl04oCZcyBwYXJzZWQgcmlnaHQgbm93LiBUaGF0IHdheSwgZGVmaW5pdGlvbnMgYXJlIGFsc29cbi8vIHBhcnNlZCByaWdodCBub3c6IGJlZm9yZSB0ZXh0IGluIHBhcmFncmFwaHMgKHNwZWNpZmljYWxseSwgbWVkaWEpIGFyZSBwYXJzZWQuXG5cbmZ1bmN0aW9uIHJlc29sdmVDb250ZW50KGV2ZW50cykge1xuICBzdWJ0b2tlbml6ZShldmVudHMpXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVDb250ZW50KGVmZmVjdHMsIG9rKSB7XG4gIHZhciBwcmV2aW91c1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignY29udGVudCcpXG4gICAgcHJldmlvdXMgPSBlZmZlY3RzLmVudGVyKCdjaHVua0NvbnRlbnQnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ2NvbnRlbnQnXG4gICAgfSlcbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZGF0YShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb250ZW50RW5kKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIGNvbnRpbnVhdGlvbkNvbnN0cnVjdCxcbiAgICAgICAgY29udGVudENvbnRpbnVlLFxuICAgICAgICBjb250ZW50RW5kXG4gICAgICApKGNvZGUpXG4gICAgfSAvLyBEYXRhLlxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRlbnRFbmQoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtDb250ZW50JylcbiAgICBlZmZlY3RzLmV4aXQoJ2NvbnRlbnQnKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGVudENvbnRpbnVlKGNvZGUpIHtcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2NodW5rQ29udGVudCcpXG4gICAgcHJldmlvdXMgPSBwcmV2aW91cy5uZXh0ID0gZWZmZWN0cy5lbnRlcignY2h1bmtDb250ZW50Jywge1xuICAgICAgY29udGVudFR5cGU6ICdjb250ZW50JyxcbiAgICAgIHByZXZpb3VzOiBwcmV2aW91c1xuICAgIH0pXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNvbnRpbnVhdGlvbihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICByZXR1cm4gc3RhcnRMb29rYWhlYWRcblxuICBmdW5jdGlvbiBzdGFydExvb2thaGVhZChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICByZXR1cm4gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIHByZWZpeGVkLCAnbGluZVByZWZpeCcpXG4gIH1cblxuICBmdW5jdGlvbiBwcmVmaXhlZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc2VsZi5wYXJzZXIuY29uc3RydWN0cy5kaXNhYmxlLm51bGwuaW5kZXhPZignY29kZUluZGVudGVkJykgPiAtMSB8fFxuICAgICAgcHJlZml4U2l6ZShzZWxmLmV2ZW50cywgJ2xpbmVQcmVmaXgnKSA8IDRcbiAgICApIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmludGVycnVwdChzZWxmLnBhcnNlci5jb25zdHJ1Y3RzLmZsb3csIG5vaywgb2spKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy5qcycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZS5qcycpXG52YXIgbm9ybWFsaXplSWRlbnRpZmllciA9IHJlcXVpcmUoJy4uL3V0aWwvbm9ybWFsaXplLWlkZW50aWZpZXIuanMnKVxudmFyIGZhY3RvcnlEZXN0aW5hdGlvbiA9IHJlcXVpcmUoJy4vZmFjdG9yeS1kZXN0aW5hdGlvbi5qcycpXG52YXIgZmFjdG9yeUxhYmVsID0gcmVxdWlyZSgnLi9mYWN0b3J5LWxhYmVsLmpzJylcbnZhciBmYWN0b3J5U3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UuanMnKVxudmFyIGZhY3RvcnlXaGl0ZXNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXdoaXRlc3BhY2UuanMnKVxudmFyIGZhY3RvcnlUaXRsZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS10aXRsZS5qcycpXG5cbnZhciBkZWZpbml0aW9uID0ge1xuICBuYW1lOiAnZGVmaW5pdGlvbicsXG4gIHRva2VuaXplOiB0b2tlbml6ZURlZmluaXRpb25cbn1cbnZhciB0aXRsZUNvbnN0cnVjdCA9IHtcbiAgdG9rZW5pemU6IHRva2VuaXplVGl0bGUsXG4gIHBhcnRpYWw6IHRydWVcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVEZWZpbml0aW9uKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpZGVudGlmaWVyXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdkZWZpbml0aW9uJylcbiAgICByZXR1cm4gZmFjdG9yeUxhYmVsLmNhbGwoXG4gICAgICBzZWxmLFxuICAgICAgZWZmZWN0cyxcbiAgICAgIGxhYmVsQWZ0ZXIsXG4gICAgICBub2ssXG4gICAgICAnZGVmaW5pdGlvbkxhYmVsJyxcbiAgICAgICdkZWZpbml0aW9uTGFiZWxNYXJrZXInLFxuICAgICAgJ2RlZmluaXRpb25MYWJlbFN0cmluZydcbiAgICApKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBsYWJlbEFmdGVyKGNvZGUpIHtcbiAgICBpZGVudGlmaWVyID0gbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgIHNlbGYuc2xpY2VTZXJpYWxpemUoc2VsZi5ldmVudHNbc2VsZi5ldmVudHMubGVuZ3RoIC0gMV1bMV0pLnNsaWNlKDEsIC0xKVxuICAgIClcblxuICAgIGlmIChjb2RlID09PSA1OCkge1xuICAgICAgZWZmZWN0cy5lbnRlcignZGVmaW5pdGlvbk1hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnZGVmaW5pdGlvbk1hcmtlcicpIC8vIE5vdGU6IGJsYW5rIGxpbmVzIGNhbuKAmXQgZXhpc3QgaW4gY29udGVudC5cblxuICAgICAgcmV0dXJuIGZhY3RvcnlXaGl0ZXNwYWNlKFxuICAgICAgICBlZmZlY3RzLFxuICAgICAgICBmYWN0b3J5RGVzdGluYXRpb24oXG4gICAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgICBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgICAgICB0aXRsZUNvbnN0cnVjdCxcbiAgICAgICAgICAgIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhZnRlciwgJ3doaXRlc3BhY2UnKSxcbiAgICAgICAgICAgIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhZnRlciwgJ3doaXRlc3BhY2UnKVxuICAgICAgICAgICksXG4gICAgICAgICAgbm9rLFxuICAgICAgICAgICdkZWZpbml0aW9uRGVzdGluYXRpb24nLFxuICAgICAgICAgICdkZWZpbml0aW9uRGVzdGluYXRpb25MaXRlcmFsJyxcbiAgICAgICAgICAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uTGl0ZXJhbE1hcmtlcicsXG4gICAgICAgICAgJ2RlZmluaXRpb25EZXN0aW5hdGlvblJhdycsXG4gICAgICAgICAgJ2RlZmluaXRpb25EZXN0aW5hdGlvblN0cmluZydcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnZGVmaW5pdGlvbicpXG5cbiAgICAgIGlmIChzZWxmLnBhcnNlci5kZWZpbmVkLmluZGV4T2YoaWRlbnRpZmllcikgPCAwKSB7XG4gICAgICAgIHNlbGYucGFyc2VyLmRlZmluZWQucHVzaChpZGVudGlmaWVyKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVUaXRsZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICByZXR1cm4gbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKVxuICAgICAgPyBmYWN0b3J5V2hpdGVzcGFjZShlZmZlY3RzLCBiZWZvcmUpKGNvZGUpXG4gICAgICA6IG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3JlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMzQgfHwgY29kZSA9PT0gMzkgfHwgY29kZSA9PT0gNDApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5VGl0bGUoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhZnRlciwgJ3doaXRlc3BhY2UnKSxcbiAgICAgICAgbm9rLFxuICAgICAgICAnZGVmaW5pdGlvblRpdGxlJyxcbiAgICAgICAgJ2RlZmluaXRpb25UaXRsZU1hcmtlcicsXG4gICAgICAgICdkZWZpbml0aW9uVGl0bGVTdHJpbmcnXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSA/IG9rKGNvZGUpIDogbm9rKGNvZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGFzY2lpQ29udHJvbCA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1jb250cm9sLmpzJylcbnZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlLmpzJylcbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcuanMnKVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuZnVuY3Rpb24gZGVzdGluYXRpb25GYWN0b3J5KFxuICBlZmZlY3RzLFxuICBvayxcbiAgbm9rLFxuICB0eXBlLFxuICBsaXRlcmFsVHlwZSxcbiAgbGl0ZXJhbE1hcmtlclR5cGUsXG4gIHJhd1R5cGUsXG4gIHN0cmluZ1R5cGUsXG4gIG1heFxuKSB7XG4gIHZhciBsaW1pdCA9IG1heCB8fCBJbmZpbml0eVxuICB2YXIgYmFsYW5jZSA9IDBcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MCkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsVHlwZSlcbiAgICAgIGVmZmVjdHMuZW50ZXIobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIHJldHVybiBkZXN0aW5hdGlvbkVuY2xvc2VkQmVmb3JlXG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQ29udHJvbChjb2RlKSB8fCBjb2RlID09PSA0MSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHJhd1R5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge1xuICAgICAgY29udGVudFR5cGU6ICdzdHJpbmcnXG4gICAgfSlcbiAgICByZXR1cm4gZGVzdGluYXRpb25SYXcoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uRW5jbG9zZWRCZWZvcmUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KGxpdGVyYWxNYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KGxpdGVyYWxUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ3N0cmluZydcbiAgICB9KVxuICAgIHJldHVybiBkZXN0aW5hdGlvbkVuY2xvc2VkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZXN0aW5hdGlvbkVuY2xvc2VkKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtTdHJpbmcnKVxuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICByZXR1cm4gZGVzdGluYXRpb25FbmNsb3NlZEJlZm9yZShjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDYwIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb2RlID09PSA5MiA/IGRlc3RpbmF0aW9uRW5jbG9zZWRFc2NhcGUgOiBkZXN0aW5hdGlvbkVuY2xvc2VkXG4gIH1cblxuICBmdW5jdGlvbiBkZXN0aW5hdGlvbkVuY2xvc2VkRXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjAgfHwgY29kZSA9PT0gNjIgfHwgY29kZSA9PT0gOTIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uRW5jbG9zZWRcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdGluYXRpb25FbmNsb3NlZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdGluYXRpb25SYXcoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0MCkge1xuICAgICAgaWYgKCsrYmFsYW5jZSA+IGxpbWl0KSByZXR1cm4gbm9rKGNvZGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZXN0aW5hdGlvblJhd1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA0MSkge1xuICAgICAgaWYgKCFiYWxhbmNlLS0pIHtcbiAgICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgICBlZmZlY3RzLmV4aXQocmF3VHlwZSlcbiAgICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICAgIHJldHVybiBvayhjb2RlKVxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZXN0aW5hdGlvblJhd1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIGlmIChiYWxhbmNlKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHJhd1R5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChhc2NpaUNvbnRyb2woY29kZSkpIHJldHVybiBub2soY29kZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gOTIgPyBkZXN0aW5hdGlvblJhd0VzY2FwZSA6IGRlc3RpbmF0aW9uUmF3XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0aW5hdGlvblJhd0VzY2FwZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQwIHx8IGNvZGUgPT09IDQxIHx8IGNvZGUgPT09IDkyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZXN0aW5hdGlvblJhd1xuICAgIH1cblxuICAgIHJldHVybiBkZXN0aW5hdGlvblJhdyhjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVzdGluYXRpb25GYWN0b3J5XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy5qcycpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZS5qcycpXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5mdW5jdGlvbiBsYWJlbEZhY3RvcnkoZWZmZWN0cywgb2ssIG5vaywgdHlwZSwgbWFya2VyVHlwZSwgc3RyaW5nVHlwZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHNpemUgPSAwXG4gIHZhciBkYXRhXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoc3RyaW5nVHlwZSlcbiAgICByZXR1cm4gYXRCcmVha1xuICB9XG5cbiAgZnVuY3Rpb24gYXRCcmVhayhjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gOTEgfHxcbiAgICAgIChjb2RlID09PSA5MyAmJiAhZGF0YSkgfHxcbiAgICAgIC8qIGM4IGlnbm9yZSBuZXh0ICovXG4gICAgICAoY29kZSA9PT0gOTQgJiZcbiAgICAgICAgLyogYzggaWdub3JlIG5leHQgKi9cbiAgICAgICAgIXNpemUgJiZcbiAgICAgICAgLyogYzggaWdub3JlIG5leHQgKi9cbiAgICAgICAgJ19oaWRkZW5Gb290bm90ZVN1cHBvcnQnIGluIHNlbGYucGFyc2VyLmNvbnN0cnVjdHMpIHx8XG4gICAgICBzaXplID4gOTk5XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIGVmZmVjdHMuZW50ZXIobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGF0QnJlYWtcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjaHVua1N0cmluZycsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnc3RyaW5nJ1xuICAgIH0pXG4gICAgcmV0dXJuIGxhYmVsKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBsYWJlbChjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gOTEgfHxcbiAgICAgIGNvZGUgPT09IDkzIHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkgfHxcbiAgICAgIHNpemUrKyA+IDk5OVxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICByZXR1cm4gYXRCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGRhdGEgPSBkYXRhIHx8ICFtYXJrZG93blNwYWNlKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gbGFiZWxFc2NhcGUgOiBsYWJlbFxuICB9XG5cbiAgZnVuY3Rpb24gbGFiZWxFc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA5MSB8fCBjb2RlID09PSA5MiB8fCBjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplKytcbiAgICAgIHJldHVybiBsYWJlbFxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbChjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFiZWxGYWN0b3J5XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1hcmtkb3duU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tc3BhY2UuanMnKVxuXG5mdW5jdGlvbiBzcGFjZUZhY3RvcnkoZWZmZWN0cywgb2ssIHR5cGUsIG1heCkge1xuICB2YXIgbGltaXQgPSBtYXggPyBtYXggLSAxIDogSW5maW5pdHlcbiAgdmFyIHNpemUgPSAwXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgcmV0dXJuIHByZWZpeChjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlZml4KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSAmJiBzaXplKysgPCBsaW1pdCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gcHJlZml4XG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzcGFjZUZhY3RvcnlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLmpzJylcbnZhciBmYWN0b3J5U3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UuanMnKVxuXG5mdW5jdGlvbiB0aXRsZUZhY3RvcnkoZWZmZWN0cywgb2ssIG5vaywgdHlwZSwgbWFya2VyVHlwZSwgc3RyaW5nVHlwZSkge1xuICB2YXIgbWFya2VyXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgIG1hcmtlciA9IGNvZGUgPT09IDQwID8gNDEgOiBjb2RlXG4gICAgcmV0dXJuIGF0Rmlyc3RUaXRsZUJyZWFrXG4gIH1cblxuICBmdW5jdGlvbiBhdEZpcnN0VGl0bGVCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIHJldHVybiBhdFRpdGxlQnJlYWsoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0VGl0bGVCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICByZXR1cm4gYXRGaXJzdFRpdGxlQnJlYWsobWFya2VyKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfSAvLyBOb3RlOiBibGFuayBsaW5lcyBjYW7igJl0IGV4aXN0IGluIGNvbnRlbnQuXG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICAgIHJldHVybiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgYXRUaXRsZUJyZWFrLCAnbGluZVByZWZpeCcpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ3N0cmluZydcbiAgICB9KVxuICAgIHJldHVybiB0aXRsZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGl0bGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIgfHwgY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtTdHJpbmcnKVxuICAgICAgcmV0dXJuIGF0VGl0bGVCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb2RlID09PSA5MiA/IHRpdGxlRXNjYXBlIDogdGl0bGVcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpdGxlRXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyIHx8IGNvZGUgPT09IDkyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0aXRsZVxuICAgIH1cblxuICAgIHJldHVybiB0aXRsZShjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGl0bGVGYWN0b3J5XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy5qcycpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZS5qcycpXG52YXIgZmFjdG9yeVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlLmpzJylcblxuZnVuY3Rpb24gd2hpdGVzcGFjZUZhY3RvcnkoZWZmZWN0cywgb2spIHtcbiAgdmFyIHNlZW5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgc2VlbiA9IHRydWVcbiAgICAgIHJldHVybiBzdGFydFxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeVNwYWNlKFxuICAgICAgICBlZmZlY3RzLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc2VlbiA/ICdsaW5lUHJlZml4JyA6ICdsaW5lU3VmZml4J1xuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2hpdGVzcGFjZUZhY3RvcnlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLmpzJylcblxudmFyIGhhcmRCcmVha0VzY2FwZSA9IHtcbiAgbmFtZTogJ2hhcmRCcmVha0VzY2FwZScsXG4gIHRva2VuaXplOiB0b2tlbml6ZUhhcmRCcmVha0VzY2FwZVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUhhcmRCcmVha0VzY2FwZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdoYXJkQnJlYWtFc2NhcGUnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2VzY2FwZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnZXNjYXBlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnaGFyZEJyZWFrRXNjYXBlJylcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhcmRCcmVha0VzY2FwZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcuanMnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmctb3Itc3BhY2UuanMnKVxudmFyIG1hcmtkb3duU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tc3BhY2UuanMnKVxudmFyIGNodW5rZWRTcGxpY2UgPSByZXF1aXJlKCcuLi91dGlsL2NodW5rZWQtc3BsaWNlLmpzJylcbnZhciBmYWN0b3J5U3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UuanMnKVxuXG52YXIgaGVhZGluZ0F0eCA9IHtcbiAgbmFtZTogJ2hlYWRpbmdBdHgnLFxuICB0b2tlbml6ZTogdG9rZW5pemVIZWFkaW5nQXR4LFxuICByZXNvbHZlOiByZXNvbHZlSGVhZGluZ0F0eFxufVxuXG5mdW5jdGlvbiByZXNvbHZlSGVhZGluZ0F0eChldmVudHMsIGNvbnRleHQpIHtcbiAgdmFyIGNvbnRlbnRFbmQgPSBldmVudHMubGVuZ3RoIC0gMlxuICB2YXIgY29udGVudFN0YXJ0ID0gM1xuICB2YXIgY29udGVudFxuICB2YXIgdGV4dCAvLyBQcmVmaXggd2hpdGVzcGFjZSwgcGFydCBvZiB0aGUgb3BlbmluZy5cblxuICBpZiAoZXZlbnRzW2NvbnRlbnRTdGFydF1bMV0udHlwZSA9PT0gJ3doaXRlc3BhY2UnKSB7XG4gICAgY29udGVudFN0YXJ0ICs9IDJcbiAgfSAvLyBTdWZmaXggd2hpdGVzcGFjZSwgcGFydCBvZiB0aGUgY2xvc2luZy5cblxuICBpZiAoXG4gICAgY29udGVudEVuZCAtIDIgPiBjb250ZW50U3RhcnQgJiZcbiAgICBldmVudHNbY29udGVudEVuZF1bMV0udHlwZSA9PT0gJ3doaXRlc3BhY2UnXG4gICkge1xuICAgIGNvbnRlbnRFbmQgLT0gMlxuICB9XG5cbiAgaWYgKFxuICAgIGV2ZW50c1tjb250ZW50RW5kXVsxXS50eXBlID09PSAnYXR4SGVhZGluZ1NlcXVlbmNlJyAmJlxuICAgIChjb250ZW50U3RhcnQgPT09IGNvbnRlbnRFbmQgLSAxIHx8XG4gICAgICAoY29udGVudEVuZCAtIDQgPiBjb250ZW50U3RhcnQgJiZcbiAgICAgICAgZXZlbnRzW2NvbnRlbnRFbmQgLSAyXVsxXS50eXBlID09PSAnd2hpdGVzcGFjZScpKVxuICApIHtcbiAgICBjb250ZW50RW5kIC09IGNvbnRlbnRTdGFydCArIDEgPT09IGNvbnRlbnRFbmQgPyAyIDogNFxuICB9XG5cbiAgaWYgKGNvbnRlbnRFbmQgPiBjb250ZW50U3RhcnQpIHtcbiAgICBjb250ZW50ID0ge1xuICAgICAgdHlwZTogJ2F0eEhlYWRpbmdUZXh0JyxcbiAgICAgIHN0YXJ0OiBldmVudHNbY29udGVudFN0YXJ0XVsxXS5zdGFydCxcbiAgICAgIGVuZDogZXZlbnRzW2NvbnRlbnRFbmRdWzFdLmVuZFxuICAgIH1cbiAgICB0ZXh0ID0ge1xuICAgICAgdHlwZTogJ2NodW5rVGV4dCcsXG4gICAgICBzdGFydDogZXZlbnRzW2NvbnRlbnRTdGFydF1bMV0uc3RhcnQsXG4gICAgICBlbmQ6IGV2ZW50c1tjb250ZW50RW5kXVsxXS5lbmQsXG4gICAgICBjb250ZW50VHlwZTogJ3RleHQnXG4gICAgfVxuICAgIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBjb250ZW50U3RhcnQsIGNvbnRlbnRFbmQgLSBjb250ZW50U3RhcnQgKyAxLCBbXG4gICAgICBbJ2VudGVyJywgY29udGVudCwgY29udGV4dF0sXG4gICAgICBbJ2VudGVyJywgdGV4dCwgY29udGV4dF0sXG4gICAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICAgIFsnZXhpdCcsIGNvbnRlbnQsIGNvbnRleHRdXG4gICAgXSlcbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVIZWFkaW5nQXR4KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzaXplID0gMFxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignYXR4SGVhZGluZycpXG4gICAgZWZmZWN0cy5lbnRlcignYXR4SGVhZGluZ1NlcXVlbmNlJylcbiAgICByZXR1cm4gZmVuY2VPcGVuSW5zaWRlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBmZW5jZU9wZW5JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzNSAmJiBzaXplKysgPCA2KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBmZW5jZU9wZW5JbnNpZGVcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2F0eEhlYWRpbmdTZXF1ZW5jZScpXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayhjb2RlKSA6IGhlYWRpbmdCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhlYWRpbmdCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM1KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdhdHhIZWFkaW5nU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2F0eEhlYWRpbmcnKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgaGVhZGluZ0JyZWFrLCAnd2hpdGVzcGFjZScpKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignYXR4SGVhZGluZ1RleHQnKVxuICAgIHJldHVybiBkYXRhKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBzZXF1ZW5jZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBzZXF1ZW5jZVxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnYXR4SGVhZGluZ1NlcXVlbmNlJylcbiAgICByZXR1cm4gaGVhZGluZ0JyZWFrKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkYXRhKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSAzNSB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2F0eEhlYWRpbmdUZXh0JylcbiAgICAgIHJldHVybiBoZWFkaW5nQnJlYWsoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZGF0YVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGVhZGluZ0F0eFxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhc2NpaUFscGhhID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWFscGhhLmpzJylcbnZhciBhc2NpaUFscGhhbnVtZXJpYyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYW51bWVyaWMuanMnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy5qcycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZS5qcycpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZS5qcycpXG52YXIgZnJvbUNoYXJDb2RlID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvZnJvbS1jaGFyLWNvZGUuanMnKVxudmFyIGh0bWxCbG9ja05hbWVzID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvaHRtbC1ibG9jay1uYW1lcy5qcycpXG52YXIgaHRtbFJhd05hbWVzID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvaHRtbC1yYXctbmFtZXMuanMnKVxudmFyIHBhcnRpYWxCbGFua0xpbmUgPSByZXF1aXJlKCcuL3BhcnRpYWwtYmxhbmstbGluZS5qcycpXG5cbnZhciBodG1sRmxvdyA9IHtcbiAgbmFtZTogJ2h0bWxGbG93JyxcbiAgdG9rZW5pemU6IHRva2VuaXplSHRtbEZsb3csXG4gIHJlc29sdmVUbzogcmVzb2x2ZVRvSHRtbEZsb3csXG4gIGNvbmNyZXRlOiB0cnVlXG59XG52YXIgbmV4dEJsYW5rQ29uc3RydWN0ID0ge1xuICB0b2tlbml6ZTogdG9rZW5pemVOZXh0QmxhbmssXG4gIHBhcnRpYWw6IHRydWVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRvSHRtbEZsb3coZXZlbnRzKSB7XG4gIHZhciBpbmRleCA9IGV2ZW50cy5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGlmIChldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2h0bWxGbG93Jykge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoaW5kZXggPiAxICYmIGV2ZW50c1tpbmRleCAtIDJdWzFdLnR5cGUgPT09ICdsaW5lUHJlZml4Jykge1xuICAgIC8vIEFkZCB0aGUgcHJlZml4IHN0YXJ0IHRvIHRoZSBIVE1MIHRva2VuLlxuICAgIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQgPSBldmVudHNbaW5kZXggLSAyXVsxXS5zdGFydCAvLyBBZGQgdGhlIHByZWZpeCBzdGFydCB0byB0aGUgSFRNTCBsaW5lIHRva2VuLlxuXG4gICAgZXZlbnRzW2luZGV4ICsgMV1bMV0uc3RhcnQgPSBldmVudHNbaW5kZXggLSAyXVsxXS5zdGFydCAvLyBSZW1vdmUgdGhlIGxpbmUgcHJlZml4LlxuXG4gICAgZXZlbnRzLnNwbGljZShpbmRleCAtIDIsIDIpXG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplSHRtbEZsb3coZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGtpbmRcbiAgdmFyIHN0YXJ0VGFnXG4gIHZhciBidWZmZXJcbiAgdmFyIGluZGV4XG4gIHZhciBtYXJrZXJcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2h0bWxGbG93JylcbiAgICBlZmZlY3RzLmVudGVyKCdodG1sRmxvd0RhdGEnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMzMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uU3RhcnRcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ0Nsb3NlU3RhcnRcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNjMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAga2luZCA9IDMgLy8gV2hpbGUgd2XigJlyZSBpbiBhbiBpbnN0cnVjdGlvbiBpbnN0ZWFkIG9mIGEgZGVjbGFyYXRpb24sIHdl4oCZcmUgb24gYSBgP2BcbiAgICAgIC8vIHJpZ2h0IG5vdywgc28gd2UgZG8gbmVlZCB0byBzZWFyY2ggZm9yIGA+YCwgc2ltaWxhciB0byBkZWNsYXJhdGlvbnMuXG5cbiAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rIDogY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGVcbiAgICB9XG5cbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBidWZmZXIgPSBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHN0YXJ0VGFnID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRhZ05hbWVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZWNsYXJhdGlvblN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAga2luZCA9IDJcbiAgICAgIHJldHVybiBjb21tZW50T3Blbkluc2lkZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5MSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBraW5kID0gNVxuICAgICAgYnVmZmVyID0gJ0NEQVRBWydcbiAgICAgIGluZGV4ID0gMFxuICAgICAgcmV0dXJuIGNkYXRhT3Blbkluc2lkZVxuICAgIH1cblxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGtpbmQgPSA0XG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tbWVudE9wZW5JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGFPcGVuSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gYnVmZmVyLmNoYXJDb2RlQXQoaW5kZXgrKykpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluZGV4ID09PSBidWZmZXIubGVuZ3RoXG4gICAgICAgID8gc2VsZi5pbnRlcnJ1cHRcbiAgICAgICAgICA/IG9rXG4gICAgICAgICAgOiBjb250aW51YXRpb25cbiAgICAgICAgOiBjZGF0YU9wZW5JbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdDbG9zZVN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBidWZmZXIgPSBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHJldHVybiB0YWdOYW1lXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFnTmFtZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gNDcgfHxcbiAgICAgIGNvZGUgPT09IDYyIHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNvZGUgIT09IDQ3ICYmXG4gICAgICAgIHN0YXJ0VGFnICYmXG4gICAgICAgIGh0bWxSYXdOYW1lcy5pbmRleE9mKGJ1ZmZlci50b0xvd2VyQ2FzZSgpKSA+IC0xXG4gICAgICApIHtcbiAgICAgICAga2luZCA9IDFcbiAgICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0ID8gb2soY29kZSkgOiBjb250aW51YXRpb24oY29kZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGh0bWxCbG9ja05hbWVzLmluZGV4T2YoYnVmZmVyLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgICAga2luZCA9IDZcblxuICAgICAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgICAgICByZXR1cm4gYmFzaWNTZWxmQ2xvc2luZ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0ID8gb2soY29kZSkgOiBjb250aW51YXRpb24oY29kZSlcbiAgICAgIH1cblxuICAgICAga2luZCA9IDcgLy8gRG8gbm90IHN1cHBvcnQgY29tcGxldGUgSFRNTCB3aGVuIGludGVycnVwdGluZy5cblxuICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0XG4gICAgICAgID8gbm9rKGNvZGUpXG4gICAgICAgIDogc3RhcnRUYWdcbiAgICAgICAgPyBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVCZWZvcmUoY29kZSlcbiAgICAgICAgOiBjb21wbGV0ZUNsb3NpbmdUYWdBZnRlcihjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA0NSB8fCBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBidWZmZXIgKz0gZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgICByZXR1cm4gdGFnTmFtZVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGJhc2ljU2VsZkNsb3NpbmcoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvblxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQ2xvc2luZ1RhZ0FmdGVyKGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVDbG9zaW5nVGFnQWZ0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGxldGVFbmQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQXR0cmlidXRlTmFtZUJlZm9yZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUVuZFxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA1OCB8fCBjb2RlID09PSA5NSB8fCBhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lQmVmb3JlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlRW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IDQ1IHx8XG4gICAgICBjb2RlID09PSA0NiB8fFxuICAgICAgY29kZSA9PT0gNTggfHxcbiAgICAgIGNvZGUgPT09IDk1IHx8XG4gICAgICBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKVxuICAgICkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUFmdGVyKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVBZnRlcihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYxKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlQmVmb3JlXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUJlZm9yZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZUJlZm9yZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gNjAgfHxcbiAgICAgIGNvZGUgPT09IDYxIHx8XG4gICAgICBjb2RlID09PSA2MiB8fFxuICAgICAgY29kZSA9PT0gOTZcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMzQgfHwgY29kZSA9PT0gMzkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgbWFya2VyID0gY29kZVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVRdW90ZWRcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgIH1cblxuICAgIG1hcmtlciA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlVW5xdW90ZWQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVRdW90ZWQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVRdW90ZWRBZnRlclxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlVW5xdW90ZWQoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDM0IHx8XG4gICAgICBjb2RlID09PSAzOSB8fFxuICAgICAgY29kZSA9PT0gNjAgfHxcbiAgICAgIGNvZGUgPT09IDYxIHx8XG4gICAgICBjb2RlID09PSA2MiB8fFxuICAgICAgY29kZSA9PT0gOTYgfHxcbiAgICAgIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVBZnRlcihjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlVW5xdW90ZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVRdW90ZWRBZnRlcihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ3IHx8IGNvZGUgPT09IDYyIHx8IG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVCZWZvcmUoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUVuZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVBZnRlcihjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQWZ0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSlcbiAgICAgID8gY29udGludWF0aW9uKGNvZGUpXG4gICAgICA6IG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUgJiYga2luZCA9PT0gMikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uQ29tbWVudEluc2lkZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA2MCAmJiBraW5kID09PSAxKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25SYXdUYWdPcGVuXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYyICYmIGtpbmQgPT09IDQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNsb3NlXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYzICYmIGtpbmQgPT09IDMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDkzICYmIGtpbmQgPT09IDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNoYXJhY3RlckRhdGFJbnNpZGVcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpICYmIChraW5kID09PSA2IHx8IGtpbmQgPT09IDcpKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgICAgbmV4dEJsYW5rQ29uc3RydWN0LFxuICAgICAgICBjb250aW51YXRpb25DbG9zZSxcbiAgICAgICAgY29udGludWF0aW9uQXRMaW5lRW5kaW5nXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gY29udGludWF0aW9uQXRMaW5lRW5kaW5nKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uQXRMaW5lRW5kaW5nKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2h0bWxGbG93RGF0YScpXG4gICAgcmV0dXJuIGh0bWxDb250aW51ZVN0YXJ0KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBodG1sQ29udGludWVTdGFydChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBkb25lKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICByZXR1cm4gaHRtbENvbnRpbnVlU3RhcnRcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdodG1sRmxvd0RhdGEnKVxuICAgIHJldHVybiBjb250aW51YXRpb24oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbkNvbW1lbnRJbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25SYXdUYWdPcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYnVmZmVyID0gJydcbiAgICAgIHJldHVybiBjb250aW51YXRpb25SYXdFbmRUYWdcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25SYXdFbmRUYWcoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MiAmJiBodG1sUmF3TmFtZXMuaW5kZXhPZihidWZmZXIudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uQ2xvc2VcbiAgICB9XG5cbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSAmJiBidWZmZXIubGVuZ3RoIDwgOCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBidWZmZXIgKz0gZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uUmF3RW5kVGFnXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uQ2hhcmFjdGVyRGF0YUluc2lkZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25EZWNsYXJhdGlvbkluc2lkZVxuICAgIH1cblxuICAgIHJldHVybiBjb250aW51YXRpb24oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNsb3NlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uQ2xvc2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdodG1sRmxvd0RhdGEnKVxuICAgICAgcmV0dXJuIGRvbmUoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29udGludWF0aW9uQ2xvc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgnaHRtbEZsb3cnKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplTmV4dEJsYW5rKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgnaHRtbEZsb3dEYXRhJylcbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nQmxhbmsnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZ0JsYW5rJylcbiAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KHBhcnRpYWxCbGFua0xpbmUsIG9rLCBub2spXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBodG1sRmxvd1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhc2NpaUFscGhhID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWFscGhhLmpzJylcbnZhciBhc2NpaUFscGhhbnVtZXJpYyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYW51bWVyaWMuanMnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy5qcycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZS5qcycpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZS5qcycpXG52YXIgZmFjdG9yeVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlLmpzJylcblxudmFyIGh0bWxUZXh0ID0ge1xuICBuYW1lOiAnaHRtbFRleHQnLFxuICB0b2tlbml6ZTogdG9rZW5pemVIdG1sVGV4dFxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUh0bWxUZXh0KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBtYXJrZXJcbiAgdmFyIGJ1ZmZlclxuICB2YXIgaW5kZXhcbiAgdmFyIHJldHVyblN0YXRlXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdodG1sVGV4dCcpXG4gICAgZWZmZWN0cy5lbnRlcignaHRtbFRleHREYXRhJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDMzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZWNsYXJhdGlvbk9wZW5cbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ0Nsb3NlU3RhcnRcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNjMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluc3RydWN0aW9uXG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQWxwaGEoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5cbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZWNsYXJhdGlvbk9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tbWVudE9wZW5cbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gOTEpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYnVmZmVyID0gJ0NEQVRBWydcbiAgICAgIGluZGV4ID0gMFxuICAgICAgcmV0dXJuIGNkYXRhT3BlblxuICAgIH1cblxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZWNsYXJhdGlvblxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbW1lbnRPcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbW1lbnRTdGFydFxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbW1lbnRTdGFydChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gNjIpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbW1lbnRTdGFydERhc2hcbiAgICB9XG5cbiAgICByZXR1cm4gY29tbWVudChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tbWVudFN0YXJ0RGFzaChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gNjIpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY29tbWVudChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tbWVudChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbW1lbnRDbG9zZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gY29tbWVudFxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb21tZW50XG4gIH1cblxuICBmdW5jdGlvbiBjb21tZW50Q2xvc2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZW5kXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbW1lbnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNkYXRhT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IGJ1ZmZlci5jaGFyQ29kZUF0KGluZGV4KyspKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbmRleCA9PT0gYnVmZmVyLmxlbmd0aCA/IGNkYXRhIDogY2RhdGFPcGVuXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGEoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjZGF0YUNsb3NlXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSBjZGF0YVxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGFDbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjZGF0YUVuZFxuICAgIH1cblxuICAgIHJldHVybiBjZGF0YShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGFFbmQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY2RhdGFFbmRcbiAgICB9XG5cbiAgICByZXR1cm4gY2RhdGEoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY2xhcmF0aW9uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSA2Mikge1xuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gZGVjbGFyYXRpb25cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZGVjbGFyYXRpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc3RydWN0aW9uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA2Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5zdHJ1Y3Rpb25DbG9zZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gaW5zdHJ1Y3Rpb25cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gaW5zdHJ1Y3Rpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc3RydWN0aW9uQ2xvc2UoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSA2MiA/IGVuZChjb2RlKSA6IGluc3RydWN0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdDbG9zZVN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnQ2xvc2VcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdDbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1IHx8IGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZVxuICAgIH1cblxuICAgIHJldHVybiB0YWdDbG9zZUJldHdlZW4oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ0Nsb3NlQmV0d2Vlbihjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSB0YWdDbG9zZUJldHdlZW5cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnQ2xvc2VCZXR3ZWVuXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFnT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1IHx8IGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ3IHx8IGNvZGUgPT09IDYyIHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiB0YWdPcGVuQmV0d2Vlbihjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ09wZW5CZXR3ZWVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVuZFxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA1OCB8fCBjb2RlID09PSA5NSB8fCBhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkJldHdlZW5cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnT3BlbkJldHdlZW5cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlTmFtZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gNDUgfHxcbiAgICAgIGNvZGUgPT09IDQ2IHx8XG4gICAgICBjb2RlID09PSA1OCB8fFxuICAgICAgY29kZSA9PT0gOTUgfHxcbiAgICAgIGFzY2lpQWxwaGFudW1lcmljKGNvZGUpXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZVxuICAgIH1cblxuICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjEpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkF0dHJpYnV0ZU5hbWVBZnRlclxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ09wZW5CZXR3ZWVuKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlVmFsdWVCZWZvcmUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gNjIgfHxcbiAgICAgIGNvZGUgPT09IDk2XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDM0IHx8IGNvZGUgPT09IDM5KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIG1hcmtlciA9IGNvZGVcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVRdW90ZWRcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm5TdGF0ZSA9IHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVCZWZvcmVcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBtYXJrZXIgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlVW5xdW90ZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVF1b3RlZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXJcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkXG4gICAgICByZXR1cm4gYXRMaW5lRW5kaW5nKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVF1b3RlZFxuICB9XG5cbiAgZnVuY3Rpb24gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MiB8fCBjb2RlID09PSA0NyB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gdGFnT3BlbkJldHdlZW4oY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlVmFsdWVVbnF1b3RlZChjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gMzQgfHxcbiAgICAgIGNvZGUgPT09IDM5IHx8XG4gICAgICBjb2RlID09PSA2MCB8fFxuICAgICAgY29kZSA9PT0gNjEgfHxcbiAgICAgIGNvZGUgPT09IDk2XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYyIHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiB0YWdPcGVuQmV0d2Vlbihjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVVbnF1b3RlZFxuICB9IC8vIFdlIGNhbuKAmXQgaGF2ZSBibGFuayBsaW5lcyBpbiBjb250ZW50LCBzbyBubyBuZWVkIHRvIHdvcnJ5IGFib3V0IGVtcHR5XG4gIC8vIHRva2Vucy5cblxuICBmdW5jdGlvbiBhdExpbmVFbmRpbmcoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgnaHRtbFRleHREYXRhJylcbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBmYWN0b3J5U3BhY2UoXG4gICAgICBlZmZlY3RzLFxuICAgICAgYWZ0ZXJQcmVmaXgsXG4gICAgICAnbGluZVByZWZpeCcsXG4gICAgICBzZWxmLnBhcnNlci5jb25zdHJ1Y3RzLmRpc2FibGUubnVsbC5pbmRleE9mKCdjb2RlSW5kZW50ZWQnKSA+IC0xXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogNFxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyUHJlZml4KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdodG1sVGV4dERhdGEnKVxuICAgIHJldHVybiByZXR1cm5TdGF0ZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdodG1sVGV4dERhdGEnKVxuICAgICAgZWZmZWN0cy5leGl0KCdodG1sVGV4dCcpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBodG1sVGV4dFxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlLmpzJylcbnZhciBjaHVua2VkUHVzaCA9IHJlcXVpcmUoJy4uL3V0aWwvY2h1bmtlZC1wdXNoLmpzJylcbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi4vdXRpbC9jaHVua2VkLXNwbGljZS5qcycpXG52YXIgbm9ybWFsaXplSWRlbnRpZmllciA9IHJlcXVpcmUoJy4uL3V0aWwvbm9ybWFsaXplLWlkZW50aWZpZXIuanMnKVxudmFyIHJlc29sdmVBbGwgPSByZXF1aXJlKCcuLi91dGlsL3Jlc29sdmUtYWxsLmpzJylcbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnLi4vdXRpbC9zaGFsbG93LmpzJylcbnZhciBmYWN0b3J5RGVzdGluYXRpb24gPSByZXF1aXJlKCcuL2ZhY3RvcnktZGVzdGluYXRpb24uanMnKVxudmFyIGZhY3RvcnlMYWJlbCA9IHJlcXVpcmUoJy4vZmFjdG9yeS1sYWJlbC5qcycpXG52YXIgZmFjdG9yeVRpdGxlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXRpdGxlLmpzJylcbnZhciBmYWN0b3J5V2hpdGVzcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS13aGl0ZXNwYWNlLmpzJylcblxudmFyIGxhYmVsRW5kID0ge1xuICBuYW1lOiAnbGFiZWxFbmQnLFxuICB0b2tlbml6ZTogdG9rZW5pemVMYWJlbEVuZCxcbiAgcmVzb2x2ZVRvOiByZXNvbHZlVG9MYWJlbEVuZCxcbiAgcmVzb2x2ZUFsbDogcmVzb2x2ZUFsbExhYmVsRW5kXG59XG52YXIgcmVzb3VyY2VDb25zdHJ1Y3QgPSB7XG4gIHRva2VuaXplOiB0b2tlbml6ZVJlc291cmNlXG59XG52YXIgZnVsbFJlZmVyZW5jZUNvbnN0cnVjdCA9IHtcbiAgdG9rZW5pemU6IHRva2VuaXplRnVsbFJlZmVyZW5jZVxufVxudmFyIGNvbGxhcHNlZFJlZmVyZW5jZUNvbnN0cnVjdCA9IHtcbiAgdG9rZW5pemU6IHRva2VuaXplQ29sbGFwc2VkUmVmZXJlbmNlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBbGxMYWJlbEVuZChldmVudHMpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHRva2VuXG5cbiAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgdG9rZW4gPSBldmVudHNbaW5kZXhdWzFdXG5cbiAgICBpZiAoXG4gICAgICAhdG9rZW4uX3VzZWQgJiZcbiAgICAgICh0b2tlbi50eXBlID09PSAnbGFiZWxJbWFnZScgfHxcbiAgICAgICAgdG9rZW4udHlwZSA9PT0gJ2xhYmVsTGluaycgfHxcbiAgICAgICAgdG9rZW4udHlwZSA9PT0gJ2xhYmVsRW5kJylcbiAgICApIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgbWFya2VyLlxuICAgICAgZXZlbnRzLnNwbGljZShpbmRleCArIDEsIHRva2VuLnR5cGUgPT09ICdsYWJlbEltYWdlJyA/IDQgOiAyKVxuICAgICAgdG9rZW4udHlwZSA9ICdkYXRhJ1xuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRvTGFiZWxFbmQoZXZlbnRzLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IGV2ZW50cy5sZW5ndGhcbiAgdmFyIG9mZnNldCA9IDBcbiAgdmFyIGdyb3VwXG4gIHZhciBsYWJlbFxuICB2YXIgdGV4dFxuICB2YXIgdG9rZW5cbiAgdmFyIG9wZW5cbiAgdmFyIGNsb3NlXG4gIHZhciBtZWRpYSAvLyBGaW5kIGFuIG9wZW5pbmcuXG5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB0b2tlbiA9IGV2ZW50c1tpbmRleF1bMV1cblxuICAgIGlmIChvcGVuKSB7XG4gICAgICAvLyBJZiB3ZSBzZWUgYW5vdGhlciBsaW5rLCBvciBpbmFjdGl2ZSBsaW5rIGxhYmVsLCB3ZeKAmXZlIGJlZW4gaGVyZSBiZWZvcmUuXG4gICAgICBpZiAoXG4gICAgICAgIHRva2VuLnR5cGUgPT09ICdsaW5rJyB8fFxuICAgICAgICAodG9rZW4udHlwZSA9PT0gJ2xhYmVsTGluaycgJiYgdG9rZW4uX2luYWN0aXZlKVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vIE1hcmsgb3RoZXIgbGluayBvcGVuaW5ncyBhcyBpbmFjdGl2ZSwgYXMgd2UgY2Fu4oCZdCBoYXZlIGxpbmtzIGluXG4gICAgICAvLyBsaW5rcy5cblxuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicgJiYgdG9rZW4udHlwZSA9PT0gJ2xhYmVsTGluaycpIHtcbiAgICAgICAgdG9rZW4uX2luYWN0aXZlID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2xvc2UpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJyAmJlxuICAgICAgICAodG9rZW4udHlwZSA9PT0gJ2xhYmVsSW1hZ2UnIHx8IHRva2VuLnR5cGUgPT09ICdsYWJlbExpbmsnKSAmJlxuICAgICAgICAhdG9rZW4uX2JhbGFuY2VkXG4gICAgICApIHtcbiAgICAgICAgb3BlbiA9IGluZGV4XG5cbiAgICAgICAgaWYgKHRva2VuLnR5cGUgIT09ICdsYWJlbExpbmsnKSB7XG4gICAgICAgICAgb2Zmc2V0ID0gMlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09ICdsYWJlbEVuZCcpIHtcbiAgICAgIGNsb3NlID0gaW5kZXhcbiAgICB9XG4gIH1cblxuICBncm91cCA9IHtcbiAgICB0eXBlOiBldmVudHNbb3Blbl1bMV0udHlwZSA9PT0gJ2xhYmVsTGluaycgPyAnbGluaycgOiAnaW1hZ2UnLFxuICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1tvcGVuXVsxXS5zdGFydCksXG4gICAgZW5kOiBzaGFsbG93KGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0uZW5kKVxuICB9XG4gIGxhYmVsID0ge1xuICAgIHR5cGU6ICdsYWJlbCcsXG4gICAgc3RhcnQ6IHNoYWxsb3coZXZlbnRzW29wZW5dWzFdLnN0YXJ0KSxcbiAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2Nsb3NlXVsxXS5lbmQpXG4gIH1cbiAgdGV4dCA9IHtcbiAgICB0eXBlOiAnbGFiZWxUZXh0JyxcbiAgICBzdGFydDogc2hhbGxvdyhldmVudHNbb3BlbiArIG9mZnNldCArIDJdWzFdLmVuZCksXG4gICAgZW5kOiBzaGFsbG93KGV2ZW50c1tjbG9zZSAtIDJdWzFdLnN0YXJ0KVxuICB9XG4gIG1lZGlhID0gW1xuICAgIFsnZW50ZXInLCBncm91cCwgY29udGV4dF0sXG4gICAgWydlbnRlcicsIGxhYmVsLCBjb250ZXh0XVxuICBdIC8vIE9wZW5pbmcgbWFya2VyLlxuXG4gIG1lZGlhID0gY2h1bmtlZFB1c2gobWVkaWEsIGV2ZW50cy5zbGljZShvcGVuICsgMSwgb3BlbiArIG9mZnNldCArIDMpKSAvLyBUZXh0IG9wZW4uXG5cbiAgbWVkaWEgPSBjaHVua2VkUHVzaChtZWRpYSwgW1snZW50ZXInLCB0ZXh0LCBjb250ZXh0XV0pIC8vIEJldHdlZW4uXG5cbiAgbWVkaWEgPSBjaHVua2VkUHVzaChcbiAgICBtZWRpYSxcbiAgICByZXNvbHZlQWxsKFxuICAgICAgY29udGV4dC5wYXJzZXIuY29uc3RydWN0cy5pbnNpZGVTcGFuLm51bGwsXG4gICAgICBldmVudHMuc2xpY2Uob3BlbiArIG9mZnNldCArIDQsIGNsb3NlIC0gMyksXG4gICAgICBjb250ZXh0XG4gICAgKVxuICApIC8vIFRleHQgY2xvc2UsIG1hcmtlciBjbG9zZSwgbGFiZWwgY2xvc2UuXG5cbiAgbWVkaWEgPSBjaHVua2VkUHVzaChtZWRpYSwgW1xuICAgIFsnZXhpdCcsIHRleHQsIGNvbnRleHRdLFxuICAgIGV2ZW50c1tjbG9zZSAtIDJdLFxuICAgIGV2ZW50c1tjbG9zZSAtIDFdLFxuICAgIFsnZXhpdCcsIGxhYmVsLCBjb250ZXh0XVxuICBdKSAvLyBSZWZlcmVuY2UsIHJlc291cmNlLCBvciBzby5cblxuICBtZWRpYSA9IGNodW5rZWRQdXNoKG1lZGlhLCBldmVudHMuc2xpY2UoY2xvc2UgKyAxKSkgLy8gTWVkaWEgY2xvc2UuXG5cbiAgbWVkaWEgPSBjaHVua2VkUHVzaChtZWRpYSwgW1snZXhpdCcsIGdyb3VwLCBjb250ZXh0XV0pXG4gIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBvcGVuLCBldmVudHMubGVuZ3RoLCBtZWRpYSlcbiAgcmV0dXJuIGV2ZW50c1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUxhYmVsRW5kKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbmRleCA9IHNlbGYuZXZlbnRzLmxlbmd0aFxuICB2YXIgbGFiZWxTdGFydFxuICB2YXIgZGVmaW5lZCAvLyBGaW5kIGFuIG9wZW5pbmcuXG5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBpZiAoXG4gICAgICAoc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdsYWJlbEltYWdlJyB8fFxuICAgICAgICBzZWxmLmV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2xhYmVsTGluaycpICYmXG4gICAgICAhc2VsZi5ldmVudHNbaW5kZXhdWzFdLl9iYWxhbmNlZFxuICAgICkge1xuICAgICAgbGFiZWxTdGFydCA9IHNlbGYuZXZlbnRzW2luZGV4XVsxXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKCFsYWJlbFN0YXJ0KSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfSAvLyBJdOKAmXMgYSBiYWxhbmNlZCBicmFja2V0LCBidXQgY29udGFpbnMgYSBsaW5rLlxuXG4gICAgaWYgKGxhYmVsU3RhcnQuX2luYWN0aXZlKSByZXR1cm4gYmFsYW5jZWQoY29kZSlcbiAgICBkZWZpbmVkID1cbiAgICAgIHNlbGYucGFyc2VyLmRlZmluZWQuaW5kZXhPZihcbiAgICAgICAgbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgICAgICBzZWxmLnNsaWNlU2VyaWFsaXplKHtcbiAgICAgICAgICAgIHN0YXJ0OiBsYWJlbFN0YXJ0LmVuZCxcbiAgICAgICAgICAgIGVuZDogc2VsZi5ub3coKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICkgPiAtMVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsRW5kJylcbiAgICBlZmZlY3RzLmVudGVyKCdsYWJlbE1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbE1hcmtlcicpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbEVuZCcpXG4gICAgcmV0dXJuIGFmdGVyTGFiZWxFbmRcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyTGFiZWxFbmQoY29kZSkge1xuICAgIC8vIFJlc291cmNlOiBgW2FzZF0oZmdoKWAuXG4gICAgaWYgKGNvZGUgPT09IDQwKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICByZXNvdXJjZUNvbnN0cnVjdCxcbiAgICAgICAgb2ssXG4gICAgICAgIGRlZmluZWQgPyBvayA6IGJhbGFuY2VkXG4gICAgICApKGNvZGUpXG4gICAgfSAvLyBDb2xsYXBzZWQgKGBbYXNkXVtdYCkgb3IgZnVsbCAoYFthc2RdW2ZnaF1gKSByZWZlcmVuY2U/XG5cbiAgICBpZiAoY29kZSA9PT0gOTEpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgIGZ1bGxSZWZlcmVuY2VDb25zdHJ1Y3QsXG4gICAgICAgIG9rLFxuICAgICAgICBkZWZpbmVkXG4gICAgICAgICAgPyBlZmZlY3RzLmF0dGVtcHQoY29sbGFwc2VkUmVmZXJlbmNlQ29uc3RydWN0LCBvaywgYmFsYW5jZWQpXG4gICAgICAgICAgOiBiYWxhbmNlZFxuICAgICAgKShjb2RlKVxuICAgIH0gLy8gU2hvcnRjdXQgcmVmZXJlbmNlOiBgW2FzZF1gP1xuXG4gICAgcmV0dXJuIGRlZmluZWQgPyBvayhjb2RlKSA6IGJhbGFuY2VkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBiYWxhbmNlZChjb2RlKSB7XG4gICAgbGFiZWxTdGFydC5fYmFsYW5jZWQgPSB0cnVlXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplUmVzb3VyY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigncmVzb3VyY2UnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ3Jlc291cmNlTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ3Jlc291cmNlTWFya2VyJylcbiAgICByZXR1cm4gZmFjdG9yeVdoaXRlc3BhY2UoZWZmZWN0cywgb3BlbilcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0MSkge1xuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBmYWN0b3J5RGVzdGluYXRpb24oXG4gICAgICBlZmZlY3RzLFxuICAgICAgZGVzdGluYXRpb25BZnRlcixcbiAgICAgIG5vayxcbiAgICAgICdyZXNvdXJjZURlc3RpbmF0aW9uJyxcbiAgICAgICdyZXNvdXJjZURlc3RpbmF0aW9uTGl0ZXJhbCcsXG4gICAgICAncmVzb3VyY2VEZXN0aW5hdGlvbkxpdGVyYWxNYXJrZXInLFxuICAgICAgJ3Jlc291cmNlRGVzdGluYXRpb25SYXcnLFxuICAgICAgJ3Jlc291cmNlRGVzdGluYXRpb25TdHJpbmcnLFxuICAgICAgM1xuICAgICkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uQWZ0ZXIoY29kZSkge1xuICAgIHJldHVybiBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgICA/IGZhY3RvcnlXaGl0ZXNwYWNlKGVmZmVjdHMsIGJldHdlZW4pKGNvZGUpXG4gICAgICA6IGVuZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYmV0d2Vlbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM0IHx8IGNvZGUgPT09IDM5IHx8IGNvZGUgPT09IDQwKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeVRpdGxlKFxuICAgICAgICBlZmZlY3RzLFxuICAgICAgICBmYWN0b3J5V2hpdGVzcGFjZShlZmZlY3RzLCBlbmQpLFxuICAgICAgICBub2ssXG4gICAgICAgICdyZXNvdXJjZVRpdGxlJyxcbiAgICAgICAgJ3Jlc291cmNlVGl0bGVNYXJrZXInLFxuICAgICAgICAncmVzb3VyY2VUaXRsZVN0cmluZydcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbmQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0MSkge1xuICAgICAgZWZmZWN0cy5lbnRlcigncmVzb3VyY2VNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Jlc291cmNlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgncmVzb3VyY2UnKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplRnVsbFJlZmVyZW5jZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgcmV0dXJuIGZhY3RvcnlMYWJlbC5jYWxsKFxuICAgICAgc2VsZixcbiAgICAgIGVmZmVjdHMsXG4gICAgICBhZnRlckxhYmVsLFxuICAgICAgbm9rLFxuICAgICAgJ3JlZmVyZW5jZScsXG4gICAgICAncmVmZXJlbmNlTWFya2VyJyxcbiAgICAgICdyZWZlcmVuY2VTdHJpbmcnXG4gICAgKShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJMYWJlbChjb2RlKSB7XG4gICAgcmV0dXJuIHNlbGYucGFyc2VyLmRlZmluZWQuaW5kZXhPZihcbiAgICAgIG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgICAgIHNlbGYuc2xpY2VTZXJpYWxpemUoc2VsZi5ldmVudHNbc2VsZi5ldmVudHMubGVuZ3RoIC0gMV1bMV0pLnNsaWNlKDEsIC0xKVxuICAgICAgKVxuICAgICkgPCAwXG4gICAgICA/IG5vayhjb2RlKVxuICAgICAgOiBvayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplQ29sbGFwc2VkUmVmZXJlbmNlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ3JlZmVyZW5jZScpXG4gICAgZWZmZWN0cy5lbnRlcigncmVmZXJlbmNlTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ3JlZmVyZW5jZU1hcmtlcicpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5lbnRlcigncmVmZXJlbmNlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdyZWZlcmVuY2VNYXJrZXInKVxuICAgICAgZWZmZWN0cy5leGl0KCdyZWZlcmVuY2UnKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFiZWxFbmRcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbGFiZWxFbmQgPSByZXF1aXJlKCcuL2xhYmVsLWVuZC5qcycpXG5cbnZhciBsYWJlbFN0YXJ0SW1hZ2UgPSB7XG4gIG5hbWU6ICdsYWJlbFN0YXJ0SW1hZ2UnLFxuICB0b2tlbml6ZTogdG9rZW5pemVMYWJlbFN0YXJ0SW1hZ2UsXG4gIHJlc29sdmVBbGw6IGxhYmVsRW5kLnJlc29sdmVBbGxcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMYWJlbFN0YXJ0SW1hZ2UoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsSW1hZ2UnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsSW1hZ2VNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxJbWFnZU1hcmtlcicpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSA5MSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGFiZWxNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xhYmVsTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxJbWFnZScpXG4gICAgICByZXR1cm4gYWZ0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgLyogYzggaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gY29kZSA9PT0gOTQgJiZcbiAgICAgIC8qIGM4IGlnbm9yZSBuZXh0ICovXG4gICAgICAnX2hpZGRlbkZvb3Rub3RlU3VwcG9ydCcgaW4gc2VsZi5wYXJzZXIuY29uc3RydWN0c1xuICAgICAgPyAvKiBjOCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBub2soY29kZSlcbiAgICAgIDogb2soY29kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhYmVsU3RhcnRJbWFnZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsYWJlbEVuZCA9IHJlcXVpcmUoJy4vbGFiZWwtZW5kLmpzJylcblxudmFyIGxhYmVsU3RhcnRMaW5rID0ge1xuICBuYW1lOiAnbGFiZWxTdGFydExpbmsnLFxuICB0b2tlbml6ZTogdG9rZW5pemVMYWJlbFN0YXJ0TGluayxcbiAgcmVzb2x2ZUFsbDogbGFiZWxFbmQucmVzb2x2ZUFsbFxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUxhYmVsU3RhcnRMaW5rKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdsYWJlbExpbmsnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xhYmVsTWFya2VyJylcbiAgICBlZmZlY3RzLmV4aXQoJ2xhYmVsTGluaycpXG4gICAgcmV0dXJuIGFmdGVyXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgLyogYzggaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gY29kZSA9PT0gOTQgJiZcbiAgICAgIC8qIGM4IGlnbm9yZSBuZXh0ICovXG4gICAgICAnX2hpZGRlbkZvb3Rub3RlU3VwcG9ydCcgaW4gc2VsZi5wYXJzZXIuY29uc3RydWN0c1xuICAgICAgPyAvKiBjOCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBub2soY29kZSlcbiAgICAgIDogb2soY29kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhYmVsU3RhcnRMaW5rXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGZhY3RvcnlTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZS5qcycpXG5cbnZhciBsaW5lRW5kaW5nID0ge1xuICBuYW1lOiAnbGluZUVuZGluZycsXG4gIHRva2VuaXplOiB0b2tlbml6ZUxpbmVFbmRpbmdcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMaW5lRW5kaW5nKGVmZmVjdHMsIG9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgb2ssICdsaW5lUHJlZml4JylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmVFbmRpbmdcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYXNjaWlEaWdpdCA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1kaWdpdC5qcycpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZS5qcycpXG52YXIgcHJlZml4U2l6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvcHJlZml4LXNpemUuanMnKVxudmFyIHNpemVDaHVua3MgPSByZXF1aXJlKCcuLi91dGlsL3NpemUtY2h1bmtzLmpzJylcbnZhciBmYWN0b3J5U3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UuanMnKVxudmFyIHBhcnRpYWxCbGFua0xpbmUgPSByZXF1aXJlKCcuL3BhcnRpYWwtYmxhbmstbGluZS5qcycpXG52YXIgdGhlbWF0aWNCcmVhayA9IHJlcXVpcmUoJy4vdGhlbWF0aWMtYnJlYWsuanMnKVxuXG52YXIgbGlzdCA9IHtcbiAgbmFtZTogJ2xpc3QnLFxuICB0b2tlbml6ZTogdG9rZW5pemVMaXN0U3RhcnQsXG4gIGNvbnRpbnVhdGlvbjoge1xuICAgIHRva2VuaXplOiB0b2tlbml6ZUxpc3RDb250aW51YXRpb25cbiAgfSxcbiAgZXhpdDogdG9rZW5pemVMaXN0RW5kXG59XG52YXIgbGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlQ29uc3RydWN0ID0ge1xuICB0b2tlbml6ZTogdG9rZW5pemVMaXN0SXRlbVByZWZpeFdoaXRlc3BhY2UsXG4gIHBhcnRpYWw6IHRydWVcbn1cbnZhciBpbmRlbnRDb25zdHJ1Y3QgPSB7XG4gIHRva2VuaXplOiB0b2tlbml6ZUluZGVudCxcbiAgcGFydGlhbDogdHJ1ZVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUxpc3RTdGFydChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5pdGlhbFNpemUgPSBwcmVmaXhTaXplKHNlbGYuZXZlbnRzLCAnbGluZVByZWZpeCcpXG4gIHZhciBzaXplID0gMFxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgdmFyIGtpbmQgPVxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS50eXBlIHx8XG4gICAgICAoY29kZSA9PT0gNDIgfHwgY29kZSA9PT0gNDMgfHwgY29kZSA9PT0gNDVcbiAgICAgICAgPyAnbGlzdFVub3JkZXJlZCdcbiAgICAgICAgOiAnbGlzdE9yZGVyZWQnKVxuXG4gICAgaWYgKFxuICAgICAga2luZCA9PT0gJ2xpc3RVbm9yZGVyZWQnXG4gICAgICAgID8gIXNlbGYuY29udGFpbmVyU3RhdGUubWFya2VyIHx8IGNvZGUgPT09IHNlbGYuY29udGFpbmVyU3RhdGUubWFya2VyXG4gICAgICAgIDogYXNjaWlEaWdpdChjb2RlKVxuICAgICkge1xuICAgICAgaWYgKCFzZWxmLmNvbnRhaW5lclN0YXRlLnR5cGUpIHtcbiAgICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS50eXBlID0ga2luZFxuICAgICAgICBlZmZlY3RzLmVudGVyKGtpbmQsIHtcbiAgICAgICAgICBfY29udGFpbmVyOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChraW5kID09PSAnbGlzdFVub3JkZXJlZCcpIHtcbiAgICAgICAgZWZmZWN0cy5lbnRlcignbGlzdEl0ZW1QcmVmaXgnKVxuICAgICAgICByZXR1cm4gY29kZSA9PT0gNDIgfHwgY29kZSA9PT0gNDVcbiAgICAgICAgICA/IGVmZmVjdHMuY2hlY2sodGhlbWF0aWNCcmVhaywgbm9rLCBhdE1hcmtlcikoY29kZSlcbiAgICAgICAgICA6IGF0TWFya2VyKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZi5pbnRlcnJ1cHQgfHwgY29kZSA9PT0gNDkpIHtcbiAgICAgICAgZWZmZWN0cy5lbnRlcignbGlzdEl0ZW1QcmVmaXgnKVxuICAgICAgICBlZmZlY3RzLmVudGVyKCdsaXN0SXRlbVZhbHVlJylcbiAgICAgICAgcmV0dXJuIGluc2lkZShjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2lkZShjb2RlKSB7XG4gICAgaWYgKGFzY2lpRGlnaXQoY29kZSkgJiYgKytzaXplIDwgMTApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluc2lkZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICghc2VsZi5pbnRlcnJ1cHQgfHwgc2l6ZSA8IDIpICYmXG4gICAgICAoc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXJcbiAgICAgICAgPyBjb2RlID09PSBzZWxmLmNvbnRhaW5lclN0YXRlLm1hcmtlclxuICAgICAgICA6IGNvZGUgPT09IDQxIHx8IGNvZGUgPT09IDQ2KVxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KCdsaXN0SXRlbVZhbHVlJylcbiAgICAgIHJldHVybiBhdE1hcmtlcihjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0TWFya2VyKGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdsaXN0SXRlbU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaXN0SXRlbU1hcmtlcicpXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIgPSBzZWxmLmNvbnRhaW5lclN0YXRlLm1hcmtlciB8fCBjb2RlXG4gICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICBwYXJ0aWFsQmxhbmtMaW5lLCAvLyBDYW7igJl0IGJlIGVtcHR5IHdoZW4gaW50ZXJydXB0aW5nLlxuICAgICAgc2VsZi5pbnRlcnJ1cHQgPyBub2sgOiBvbkJsYW5rLFxuICAgICAgZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICBsaXN0SXRlbVByZWZpeFdoaXRlc3BhY2VDb25zdHJ1Y3QsXG4gICAgICAgIGVuZE9mUHJlZml4LFxuICAgICAgICBvdGhlclByZWZpeFxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmxhbmsoY29kZSkge1xuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuaW5pdGlhbEJsYW5rTGluZSA9IHRydWVcbiAgICBpbml0aWFsU2l6ZSsrXG4gICAgcmV0dXJuIGVuZE9mUHJlZml4KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBvdGhlclByZWZpeChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlJylcbiAgICAgIHJldHVybiBlbmRPZlByZWZpeFxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZE9mUHJlZml4KGNvZGUpIHtcbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnNpemUgPVxuICAgICAgaW5pdGlhbFNpemUgKyBzaXplQ2h1bmtzKHNlbGYuc2xpY2VTdHJlYW0oZWZmZWN0cy5leGl0KCdsaXN0SXRlbVByZWZpeCcpKSlcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUxpc3RDb250aW51YXRpb24oZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgc2VsZi5jb250YWluZXJTdGF0ZS5fY2xvc2VGbG93ID0gdW5kZWZpbmVkXG4gIHJldHVybiBlZmZlY3RzLmNoZWNrKHBhcnRpYWxCbGFua0xpbmUsIG9uQmxhbmssIG5vdEJsYW5rKVxuXG4gIGZ1bmN0aW9uIG9uQmxhbmsoY29kZSkge1xuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuZnVydGhlckJsYW5rTGluZXMgPVxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5mdXJ0aGVyQmxhbmtMaW5lcyB8fFxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5pbml0aWFsQmxhbmtMaW5lIC8vIFdlIGhhdmUgYSBibGFuayBsaW5lLlxuICAgIC8vIFN0aWxsLCB0cnkgdG8gY29uc3VtZSBhdCBtb3N0IHRoZSBpdGVtcyBzaXplLlxuXG4gICAgcmV0dXJuIGZhY3RvcnlTcGFjZShcbiAgICAgIGVmZmVjdHMsXG4gICAgICBvayxcbiAgICAgICdsaXN0SXRlbUluZGVudCcsXG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnNpemUgKyAxXG4gICAgKShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gbm90QmxhbmsoY29kZSkge1xuICAgIGlmIChzZWxmLmNvbnRhaW5lclN0YXRlLmZ1cnRoZXJCbGFua0xpbmVzIHx8ICFtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLmZ1cnRoZXJCbGFua0xpbmVzID0gc2VsZi5jb250YWluZXJTdGF0ZS5pbml0aWFsQmxhbmtMaW5lID0gdW5kZWZpbmVkXG4gICAgICByZXR1cm4gbm90SW5DdXJyZW50SXRlbShjb2RlKVxuICAgIH1cblxuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuZnVydGhlckJsYW5rTGluZXMgPSBzZWxmLmNvbnRhaW5lclN0YXRlLmluaXRpYWxCbGFua0xpbmUgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KGluZGVudENvbnN0cnVjdCwgb2ssIG5vdEluQ3VycmVudEl0ZW0pKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBub3RJbkN1cnJlbnRJdGVtKGNvZGUpIHtcbiAgICAvLyBXaGlsZSB3ZSBkbyBjb250aW51ZSwgd2Ugc2lnbmFsIHRoYXQgdGhlIGZsb3cgc2hvdWxkIGJlIGNsb3NlZC5cbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLl9jbG9zZUZsb3cgPSB0cnVlIC8vIEFzIHdl4oCZcmUgY2xvc2luZyBmbG93LCB3ZeKAmXJlIG5vIGxvbmdlciBpbnRlcnJ1cHRpbmcuXG5cbiAgICBzZWxmLmludGVycnVwdCA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBmYWN0b3J5U3BhY2UoXG4gICAgICBlZmZlY3RzLFxuICAgICAgZWZmZWN0cy5hdHRlbXB0KGxpc3QsIG9rLCBub2spLFxuICAgICAgJ2xpbmVQcmVmaXgnLFxuICAgICAgc2VsZi5wYXJzZXIuY29uc3RydWN0cy5kaXNhYmxlLm51bGwuaW5kZXhPZignY29kZUluZGVudGVkJykgPiAtMVxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IDRcbiAgICApKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVJbmRlbnQoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgcmV0dXJuIGZhY3RvcnlTcGFjZShcbiAgICBlZmZlY3RzLFxuICAgIGFmdGVyUHJlZml4LFxuICAgICdsaXN0SXRlbUluZGVudCcsXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5zaXplICsgMVxuICApXG5cbiAgZnVuY3Rpb24gYWZ0ZXJQcmVmaXgoY29kZSkge1xuICAgIHJldHVybiBwcmVmaXhTaXplKHNlbGYuZXZlbnRzLCAnbGlzdEl0ZW1JbmRlbnQnKSA9PT1cbiAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUuc2l6ZVxuICAgICAgPyBvayhjb2RlKVxuICAgICAgOiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUxpc3RFbmQoZWZmZWN0cykge1xuICBlZmZlY3RzLmV4aXQodGhpcy5jb250YWluZXJTdGF0ZS50eXBlKVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUxpc3RJdGVtUHJlZml4V2hpdGVzcGFjZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICByZXR1cm4gZmFjdG9yeVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgYWZ0ZXJQcmVmaXgsXG4gICAgJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScsXG4gICAgc2VsZi5wYXJzZXIuY29uc3RydWN0cy5kaXNhYmxlLm51bGwuaW5kZXhPZignY29kZUluZGVudGVkJykgPiAtMVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogNCArIDFcbiAgKVxuXG4gIGZ1bmN0aW9uIGFmdGVyUHJlZml4KGNvZGUpIHtcbiAgICByZXR1cm4gbWFya2Rvd25TcGFjZShjb2RlKSB8fFxuICAgICAgIXByZWZpeFNpemUoc2VsZi5ldmVudHMsICdsaXN0SXRlbVByZWZpeFdoaXRlc3BhY2UnKVxuICAgICAgPyBub2soY29kZSlcbiAgICAgIDogb2soY29kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLmpzJylcbnZhciBmYWN0b3J5U3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UuanMnKVxuXG52YXIgcGFydGlhbEJsYW5rTGluZSA9IHtcbiAgdG9rZW5pemU6IHRva2VuaXplUGFydGlhbEJsYW5rTGluZSxcbiAgcGFydGlhbDogdHJ1ZVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVBhcnRpYWxCbGFua0xpbmUoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGFmdGVyV2hpdGVzcGFjZSwgJ2xpbmVQcmVmaXgnKVxuXG4gIGZ1bmN0aW9uIGFmdGVyV2hpdGVzcGFjZShjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpID8gb2soY29kZSkgOiBub2soY29kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnRpYWxCbGFua0xpbmVcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLmpzJylcbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnLi4vdXRpbC9zaGFsbG93LmpzJylcbnZhciBmYWN0b3J5U3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UuanMnKVxuXG52YXIgc2V0ZXh0VW5kZXJsaW5lID0ge1xuICBuYW1lOiAnc2V0ZXh0VW5kZXJsaW5lJyxcbiAgdG9rZW5pemU6IHRva2VuaXplU2V0ZXh0VW5kZXJsaW5lLFxuICByZXNvbHZlVG86IHJlc29sdmVUb1NldGV4dFVuZGVybGluZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlVG9TZXRleHRVbmRlcmxpbmUoZXZlbnRzLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IGV2ZW50cy5sZW5ndGhcbiAgdmFyIGNvbnRlbnRcbiAgdmFyIHRleHRcbiAgdmFyIGRlZmluaXRpb25cbiAgdmFyIGhlYWRpbmcgLy8gRmluZCB0aGUgb3BlbmluZyBvZiB0aGUgY29udGVudC5cbiAgLy8gSXTigJlsbCBhbHdheXMgZXhpc3Q6IHdlIGRvbuKAmXQgdG9rZW5pemUgaWYgaXQgaXNu4oCZdCB0aGVyZS5cblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGlmIChldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInKSB7XG4gICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnY29udGVudCcpIHtcbiAgICAgICAgY29udGVudCA9IGluZGV4XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgIHRleHQgPSBpbmRleFxuICAgICAgfVxuICAgIH0gLy8gRXhpdFxuICAgIGVsc2Uge1xuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY29udGVudCBlbmQgKGlmIG5lZWRlZCB3ZeKAmWxsIGFkZCBpdCBsYXRlcilcbiAgICAgICAgZXZlbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFkZWZpbml0aW9uICYmIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2RlZmluaXRpb24nKSB7XG4gICAgICAgIGRlZmluaXRpb24gPSBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhlYWRpbmcgPSB7XG4gICAgdHlwZTogJ3NldGV4dEhlYWRpbmcnLFxuICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1t0ZXh0XVsxXS5zdGFydCksXG4gICAgZW5kOiBzaGFsbG93KGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0uZW5kKVxuICB9IC8vIENoYW5nZSB0aGUgcGFyYWdyYXBoIHRvIHNldGV4dCBoZWFkaW5nIHRleHQuXG5cbiAgZXZlbnRzW3RleHRdWzFdLnR5cGUgPSAnc2V0ZXh0SGVhZGluZ1RleHQnIC8vIElmIHdlIGhhdmUgZGVmaW5pdGlvbnMgaW4gdGhlIGNvbnRlbnQsIHdl4oCZbGwga2VlcCBvbiBoYXZpbmcgY29udGVudCxcbiAgLy8gYnV0IHdlIG5lZWQgbW92ZSBpdC5cblxuICBpZiAoZGVmaW5pdGlvbikge1xuICAgIGV2ZW50cy5zcGxpY2UodGV4dCwgMCwgWydlbnRlcicsIGhlYWRpbmcsIGNvbnRleHRdKVxuICAgIGV2ZW50cy5zcGxpY2UoZGVmaW5pdGlvbiArIDEsIDAsIFsnZXhpdCcsIGV2ZW50c1tjb250ZW50XVsxXSwgY29udGV4dF0pXG4gICAgZXZlbnRzW2NvbnRlbnRdWzFdLmVuZCA9IHNoYWxsb3coZXZlbnRzW2RlZmluaXRpb25dWzFdLmVuZClcbiAgfSBlbHNlIHtcbiAgICBldmVudHNbY29udGVudF1bMV0gPSBoZWFkaW5nXG4gIH0gLy8gQWRkIHRoZSBoZWFkaW5nIGV4aXQgYXQgdGhlIGVuZC5cblxuICBldmVudHMucHVzaChbJ2V4aXQnLCBoZWFkaW5nLCBjb250ZXh0XSlcbiAgcmV0dXJuIGV2ZW50c1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVNldGV4dFVuZGVybGluZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5kZXggPSBzZWxmLmV2ZW50cy5sZW5ndGhcbiAgdmFyIG1hcmtlclxuICB2YXIgcGFyYWdyYXBoIC8vIEZpbmQgYW4gb3BlbmluZy5cblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIC8vIFNraXAgZW50ZXIvZXhpdCBvZiBsaW5lIGVuZGluZywgbGluZSBwcmVmaXgsIGFuZCBjb250ZW50LlxuICAgIC8vIFdlIGNhbiBub3cgZWl0aGVyIGhhdmUgYSBkZWZpbml0aW9uIG9yIGEgcGFyYWdyYXBoLlxuICAgIGlmIChcbiAgICAgIHNlbGYuZXZlbnRzW2luZGV4XVsxXS50eXBlICE9PSAnbGluZUVuZGluZycgJiZcbiAgICAgIHNlbGYuZXZlbnRzW2luZGV4XVsxXS50eXBlICE9PSAnbGluZVByZWZpeCcgJiZcbiAgICAgIHNlbGYuZXZlbnRzW2luZGV4XVsxXS50eXBlICE9PSAnY29udGVudCdcbiAgICApIHtcbiAgICAgIHBhcmFncmFwaCA9IHNlbGYuZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAncGFyYWdyYXBoJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKCFzZWxmLmxhenkgJiYgKHNlbGYuaW50ZXJydXB0IHx8IHBhcmFncmFwaCkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3NldGV4dEhlYWRpbmdMaW5lJylcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3NldGV4dEhlYWRpbmdMaW5lU2VxdWVuY2UnKVxuICAgICAgbWFya2VyID0gY29kZVxuICAgICAgcmV0dXJuIGNsb3NpbmdTZXF1ZW5jZShjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NpbmdTZXF1ZW5jZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY2xvc2luZ1NlcXVlbmNlXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCdzZXRleHRIZWFkaW5nTGluZVNlcXVlbmNlJylcbiAgICByZXR1cm4gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGNsb3NpbmdTZXF1ZW5jZUVuZCwgJ2xpbmVTdWZmaXgnKShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2luZ1NlcXVlbmNlRW5kKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnc2V0ZXh0SGVhZGluZ0xpbmUnKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0ZXh0VW5kZXJsaW5lXG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy5qcycpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZS5qcycpXG52YXIgZmFjdG9yeVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlLmpzJylcblxudmFyIHRoZW1hdGljQnJlYWsgPSB7XG4gIG5hbWU6ICd0aGVtYXRpY0JyZWFrJyxcbiAgdG9rZW5pemU6IHRva2VuaXplVGhlbWF0aWNCcmVha1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVRoZW1hdGljQnJlYWsoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2l6ZSA9IDBcbiAgdmFyIG1hcmtlclxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigndGhlbWF0aWNCcmVhaycpXG4gICAgbWFya2VyID0gY29kZVxuICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0aGVtYXRpY0JyZWFrU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgYXRCcmVhaywgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgIH1cblxuICAgIGlmIChzaXplIDwgMyB8fCAoY29kZSAhPT0gbnVsbCAmJiAhbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgndGhlbWF0aWNCcmVhaycpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBzZXF1ZW5jZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplKytcbiAgICAgIHJldHVybiBzZXF1ZW5jZVxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgndGhlbWF0aWNCcmVha1NlcXVlbmNlJylcbiAgICByZXR1cm4gYXRCcmVhayhjb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhlbWF0aWNCcmVha1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi9jaHVua2VkLXNwbGljZS5qcycpXG5cbmZ1bmN0aW9uIGNodW5rZWRQdXNoKGxpc3QsIGl0ZW1zKSB7XG4gIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgIGNodW5rZWRTcGxpY2UobGlzdCwgbGlzdC5sZW5ndGgsIDAsIGl0ZW1zKVxuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICByZXR1cm4gaXRlbXNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaHVua2VkUHVzaFxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzcGxpY2UgPSByZXF1aXJlKCcuLi9jb25zdGFudC9zcGxpY2UuanMnKVxuXG4vLyBjYXVzZXMgYSBzdGFjayBvdmVyZmxvdyBpbiBWOCB3aGVuIHRyeWluZyB0byBpbnNlcnQgMTAwayBpdGVtcyBmb3IgaW5zdGFuY2UuXG5cbmZ1bmN0aW9uIGNodW5rZWRTcGxpY2UobGlzdCwgc3RhcnQsIHJlbW92ZSwgaXRlbXMpIHtcbiAgdmFyIGVuZCA9IGxpc3QubGVuZ3RoXG4gIHZhciBjaHVua1N0YXJ0ID0gMFxuICB2YXIgcGFyYW1ldGVycyAvLyBNYWtlIHN0YXJ0IGJldHdlZW4gemVybyBhbmQgYGVuZGAgKGluY2x1ZGVkKS5cblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBlbmQgPyAwIDogZW5kICsgc3RhcnRcbiAgfSBlbHNlIHtcbiAgICBzdGFydCA9IHN0YXJ0ID4gZW5kID8gZW5kIDogc3RhcnRcbiAgfVxuXG4gIHJlbW92ZSA9IHJlbW92ZSA+IDAgPyByZW1vdmUgOiAwIC8vIE5vIG5lZWQgdG8gY2h1bmsgdGhlIGl0ZW1zIGlmIHRoZXJl4oCZcyBvbmx5IGEgY291cGxlICgxMGspIGl0ZW1zLlxuXG4gIGlmIChpdGVtcy5sZW5ndGggPCAxMDAwMCkge1xuICAgIHBhcmFtZXRlcnMgPSBBcnJheS5mcm9tKGl0ZW1zKVxuICAgIHBhcmFtZXRlcnMudW5zaGlmdChzdGFydCwgcmVtb3ZlKVxuICAgIHNwbGljZS5hcHBseShsaXN0LCBwYXJhbWV0ZXJzKVxuICB9IGVsc2Uge1xuICAgIC8vIERlbGV0ZSBgcmVtb3ZlYCBpdGVtcyBzdGFydGluZyBmcm9tIGBzdGFydGBcbiAgICBpZiAocmVtb3ZlKSBzcGxpY2UuYXBwbHkobGlzdCwgW3N0YXJ0LCByZW1vdmVdKSAvLyBJbnNlcnQgdGhlIGl0ZW1zIGluIGNodW5rcyB0byBub3QgY2F1c2Ugc3RhY2sgb3ZlcmZsb3dzLlxuXG4gICAgd2hpbGUgKGNodW5rU3RhcnQgPCBpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHBhcmFtZXRlcnMgPSBpdGVtcy5zbGljZShjaHVua1N0YXJ0LCBjaHVua1N0YXJ0ICsgMTAwMDApXG4gICAgICBwYXJhbWV0ZXJzLnVuc2hpZnQoc3RhcnQsIDApXG4gICAgICBzcGxpY2UuYXBwbHkobGlzdCwgcGFyYW1ldGVycylcbiAgICAgIGNodW5rU3RhcnQgKz0gMTAwMDBcbiAgICAgIHN0YXJ0ICs9IDEwMDAwXG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2h1bmtlZFNwbGljZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlLmpzJylcbnZhciB1bmljb2RlUHVuY3R1YXRpb24gPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvdW5pY29kZS1wdW5jdHVhdGlvbi5qcycpXG52YXIgdW5pY29kZVdoaXRlc3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvdW5pY29kZS13aGl0ZXNwYWNlLmpzJylcblxuLy8gQ2xhc3NpZnkgd2hldGhlciBhIGNoYXJhY3RlciBpcyB1bmljb2RlIHdoaXRlc3BhY2UsIHVuaWNvZGUgcHVuY3R1YXRpb24sIG9yXG4vLyBhbnl0aGluZyBlbHNlLlxuLy8gVXNlZCBmb3IgYXR0ZW50aW9uIChlbXBoYXNpcywgc3Ryb25nKSwgd2hvc2Ugc2VxdWVuY2VzIGNhbiBvcGVuIG9yIGNsb3NlXG4vLyBiYXNlZCBvbiB0aGUgY2xhc3Mgb2Ygc3Vycm91bmRpbmcgY2hhcmFjdGVycy5cbmZ1bmN0aW9uIGNsYXNzaWZ5Q2hhcmFjdGVyKGNvZGUpIHtcbiAgaWYgKFxuICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpIHx8XG4gICAgdW5pY29kZVdoaXRlc3BhY2UoY29kZSlcbiAgKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIGlmICh1bmljb2RlUHVuY3R1YXRpb24oY29kZSkpIHtcbiAgICByZXR1cm4gMlxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3NpZnlDaGFyYWN0ZXJcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSByZXF1aXJlKCcuLi9jb25zdGFudC9oYXMtb3duLXByb3BlcnR5LmpzJylcbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi9jaHVua2VkLXNwbGljZS5qcycpXG52YXIgbWluaWZsYXQgPSByZXF1aXJlKCcuL21pbmlmbGF0LmpzJylcblxuZnVuY3Rpb24gY29tYmluZUV4dGVuc2lvbnMoZXh0ZW5zaW9ucykge1xuICB2YXIgYWxsID0ge31cbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGV4dGVuc2lvbnMubGVuZ3RoKSB7XG4gICAgZXh0ZW5zaW9uKGFsbCwgZXh0ZW5zaW9uc1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gYWxsXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbihhbGwsIGV4dGVuc2lvbikge1xuICB2YXIgaG9va1xuICB2YXIgbGVmdFxuICB2YXIgcmlnaHRcbiAgdmFyIGNvZGVcblxuICBmb3IgKGhvb2sgaW4gZXh0ZW5zaW9uKSB7XG4gICAgbGVmdCA9IGhhc093blByb3BlcnR5LmNhbGwoYWxsLCBob29rKSA/IGFsbFtob29rXSA6IChhbGxbaG9va10gPSB7fSlcbiAgICByaWdodCA9IGV4dGVuc2lvbltob29rXVxuXG4gICAgZm9yIChjb2RlIGluIHJpZ2h0KSB7XG4gICAgICBsZWZ0W2NvZGVdID0gY29uc3RydWN0cyhcbiAgICAgICAgbWluaWZsYXQocmlnaHRbY29kZV0pLFxuICAgICAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKGxlZnQsIGNvZGUpID8gbGVmdFtjb2RlXSA6IFtdXG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdHMobGlzdCwgZXhpc3RpbmcpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGJlZm9yZSA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsaXN0Lmxlbmd0aCkge1xuICAgIDsobGlzdFtpbmRleF0uYWRkID09PSAnYWZ0ZXInID8gZXhpc3RpbmcgOiBiZWZvcmUpLnB1c2gobGlzdFtpbmRleF0pXG4gIH1cblxuICBjaHVua2VkU3BsaWNlKGV4aXN0aW5nLCAwLCAwLCBiZWZvcmUpXG4gIHJldHVybiBleGlzdGluZ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVFeHRlbnNpb25zXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2Fzc2lnbi5qcycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLmpzJylcbnZhciBjaHVua2VkUHVzaCA9IHJlcXVpcmUoJy4vY2h1bmtlZC1wdXNoLmpzJylcbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi9jaHVua2VkLXNwbGljZS5qcycpXG52YXIgbWluaWZsYXQgPSByZXF1aXJlKCcuL21pbmlmbGF0LmpzJylcbnZhciByZXNvbHZlQWxsID0gcmVxdWlyZSgnLi9yZXNvbHZlLWFsbC5qcycpXG52YXIgc2VyaWFsaXplQ2h1bmtzID0gcmVxdWlyZSgnLi9zZXJpYWxpemUtY2h1bmtzLmpzJylcbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnLi9zaGFsbG93LmpzJylcbnZhciBzbGljZUNodW5rcyA9IHJlcXVpcmUoJy4vc2xpY2UtY2h1bmtzLmpzJylcblxuLy8gQ3JlYXRlIGEgdG9rZW5pemVyLlxuLy8gVG9rZW5pemVycyBkZWFsIHdpdGggb25lIHR5cGUgb2YgZGF0YSAoZS5nLiwgY29udGFpbmVycywgZmxvdywgdGV4dCkuXG4vLyBUaGUgcGFyc2VyIGlzIHRoZSBvYmplY3QgZGVhbGluZyB3aXRoIGl0IGFsbC5cbi8vIGBpbml0aWFsaXplYCB3b3JrcyBsaWtlIG90aGVyIGNvbnN0cnVjdHMsIGV4Y2VwdCB0aGF0IG9ubHkgaXRzIGB0b2tlbml6ZWBcbi8vIGZ1bmN0aW9uIGlzIHVzZWQsIGluIHdoaWNoIGNhc2UgaXQgZG9lc27igJl0IHJlY2VpdmUgYW4gYG9rYCBvciBgbm9rYC5cbi8vIGBmcm9tYCBjYW4gYmUgZ2l2ZW4gdG8gc2V0IHRoZSBwb2ludCBiZWZvcmUgdGhlIGZpcnN0IGNoYXJhY3RlciwgYWx0aG91Z2hcbi8vIHdoZW4gZnVydGhlciBsaW5lcyBhcmUgaW5kZW50ZWQsIHRoZXkgbXVzdCBiZSBzZXQgd2l0aCBgZGVmaW5lU2tpcGAuXG5mdW5jdGlvbiBjcmVhdGVUb2tlbml6ZXIocGFyc2VyLCBpbml0aWFsaXplLCBmcm9tKSB7XG4gIHZhciBwb2ludCA9IGZyb21cbiAgICA/IHNoYWxsb3coZnJvbSlcbiAgICA6IHtcbiAgICAgICAgbGluZTogMSxcbiAgICAgICAgY29sdW1uOiAxLFxuICAgICAgICBvZmZzZXQ6IDBcbiAgICAgIH1cbiAgdmFyIGNvbHVtblN0YXJ0ID0ge31cbiAgdmFyIHJlc29sdmVBbGxDb25zdHJ1Y3RzID0gW11cbiAgdmFyIGNodW5rcyA9IFtdXG4gIHZhciBzdGFjayA9IFtdXG5cbiAgdmFyIGVmZmVjdHMgPSB7XG4gICAgY29uc3VtZTogY29uc3VtZSxcbiAgICBlbnRlcjogZW50ZXIsXG4gICAgZXhpdDogZXhpdCxcbiAgICBhdHRlbXB0OiBjb25zdHJ1Y3RGYWN0b3J5KG9uc3VjY2Vzc2Z1bGNvbnN0cnVjdCksXG4gICAgY2hlY2s6IGNvbnN0cnVjdEZhY3Rvcnkob25zdWNjZXNzZnVsY2hlY2spLFxuICAgIGludGVycnVwdDogY29uc3RydWN0RmFjdG9yeShvbnN1Y2Nlc3NmdWxjaGVjaywge1xuICAgICAgaW50ZXJydXB0OiB0cnVlXG4gICAgfSksXG4gICAgbGF6eTogY29uc3RydWN0RmFjdG9yeShvbnN1Y2Nlc3NmdWxjaGVjaywge1xuICAgICAgbGF6eTogdHJ1ZVxuICAgIH0pXG4gIH0gLy8gU3RhdGUgYW5kIHRvb2xzIGZvciByZXNvbHZpbmcgYW5kIHNlcmlhbGl6aW5nLlxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgIHByZXZpb3VzOiBudWxsLFxuICAgIGV2ZW50czogW10sXG4gICAgcGFyc2VyOiBwYXJzZXIsXG4gICAgc2xpY2VTdHJlYW06IHNsaWNlU3RyZWFtLFxuICAgIHNsaWNlU2VyaWFsaXplOiBzbGljZVNlcmlhbGl6ZSxcbiAgICBub3c6IG5vdyxcbiAgICBkZWZpbmVTa2lwOiBza2lwLFxuICAgIHdyaXRlOiB3cml0ZVxuICB9IC8vIFRoZSBzdGF0ZSBmdW5jdGlvbi5cblxuICB2YXIgc3RhdGUgPSBpbml0aWFsaXplLnRva2VuaXplLmNhbGwoY29udGV4dCwgZWZmZWN0cykgLy8gVHJhY2sgd2hpY2ggY2hhcmFjdGVyIHdlIGV4cGVjdCB0byBiZSBjb25zdW1lZCwgdG8gY2F0Y2ggYnVncy5cblxuICBpZiAoaW5pdGlhbGl6ZS5yZXNvbHZlQWxsKSB7XG4gICAgcmVzb2x2ZUFsbENvbnN0cnVjdHMucHVzaChpbml0aWFsaXplKVxuICB9IC8vIFN0b3JlIHdoZXJlIHdlIGFyZSBpbiB0aGUgaW5wdXQgc3RyZWFtLlxuXG4gIHBvaW50Ll9pbmRleCA9IDBcbiAgcG9pbnQuX2J1ZmZlckluZGV4ID0gLTFcbiAgcmV0dXJuIGNvbnRleHRcblxuICBmdW5jdGlvbiB3cml0ZShzbGljZSkge1xuICAgIGNodW5rcyA9IGNodW5rZWRQdXNoKGNodW5rcywgc2xpY2UpXG4gICAgbWFpbigpIC8vIEV4aXQgaWYgd2XigJlyZSBub3QgZG9uZSwgcmVzb2x2ZSBtaWdodCBjaGFuZ2Ugc3R1ZmYuXG5cbiAgICBpZiAoY2h1bmtzW2NodW5rcy5sZW5ndGggLSAxXSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgYWRkUmVzdWx0KGluaXRpYWxpemUsIDApIC8vIE90aGVyd2lzZSwgcmVzb2x2ZSwgYW5kIGV4aXQuXG5cbiAgICBjb250ZXh0LmV2ZW50cyA9IHJlc29sdmVBbGwocmVzb2x2ZUFsbENvbnN0cnVjdHMsIGNvbnRleHQuZXZlbnRzLCBjb250ZXh0KVxuICAgIHJldHVybiBjb250ZXh0LmV2ZW50c1xuICB9IC8vXG4gIC8vIFRvb2xzLlxuICAvL1xuXG4gIGZ1bmN0aW9uIHNsaWNlU2VyaWFsaXplKHRva2VuKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZUNodW5rcyhzbGljZVN0cmVhbSh0b2tlbikpXG4gIH1cblxuICBmdW5jdGlvbiBzbGljZVN0cmVhbSh0b2tlbikge1xuICAgIHJldHVybiBzbGljZUNodW5rcyhjaHVua3MsIHRva2VuKVxuICB9XG5cbiAgZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiBzaGFsbG93KHBvaW50KVxuICB9XG5cbiAgZnVuY3Rpb24gc2tpcCh2YWx1ZSkge1xuICAgIGNvbHVtblN0YXJ0W3ZhbHVlLmxpbmVdID0gdmFsdWUuY29sdW1uXG4gICAgYWNjb3VudEZvclBvdGVudGlhbFNraXAoKVxuICB9IC8vXG4gIC8vIFN0YXRlIG1hbmFnZW1lbnQuXG4gIC8vXG4gIC8vIE1haW4gbG9vcCAobm90ZSB0aGF0IGBfaW5kZXhgIGFuZCBgX2J1ZmZlckluZGV4YCBpbiBgcG9pbnRgIGFyZSBtb2RpZmllZCBieVxuICAvLyBgY29uc3VtZWApLlxuICAvLyBIZXJlIGlzIHdoZXJlIHdlIHdhbGsgdGhyb3VnaCB0aGUgY2h1bmtzLCB3aGljaCBlaXRoZXIgaW5jbHVkZSBzdHJpbmdzIG9mXG4gIC8vIHNldmVyYWwgY2hhcmFjdGVycywgb3IgbnVtZXJpY2FsIGNoYXJhY3RlciBjb2Rlcy5cbiAgLy8gVGhlIHJlYXNvbiB0byBkbyB0aGlzIGluIGEgbG9vcCBpbnN0ZWFkIG9mIGEgY2FsbCBpcyBzbyB0aGUgc3RhY2sgY2FuXG4gIC8vIGRyYWluLlxuXG4gIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgdmFyIGNodW5rSW5kZXhcbiAgICB2YXIgY2h1bmtcblxuICAgIHdoaWxlIChwb2ludC5faW5kZXggPCBjaHVua3MubGVuZ3RoKSB7XG4gICAgICBjaHVuayA9IGNodW5rc1twb2ludC5faW5kZXhdIC8vIElmIHdl4oCZcmUgaW4gYSBidWZmZXIgY2h1bmssIGxvb3AgdGhyb3VnaCBpdC5cblxuICAgICAgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2h1bmtJbmRleCA9IHBvaW50Ll9pbmRleFxuXG4gICAgICAgIGlmIChwb2ludC5fYnVmZmVySW5kZXggPCAwKSB7XG4gICAgICAgICAgcG9pbnQuX2J1ZmZlckluZGV4ID0gMFxuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgIHBvaW50Ll9pbmRleCA9PT0gY2h1bmtJbmRleCAmJlxuICAgICAgICAgIHBvaW50Ll9idWZmZXJJbmRleCA8IGNodW5rLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICBnbyhjaHVuay5jaGFyQ29kZUF0KHBvaW50Ll9idWZmZXJJbmRleCkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdvKGNodW5rKVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBEZWFsIHdpdGggb25lIGNvZGUuXG5cbiAgZnVuY3Rpb24gZ28oY29kZSkge1xuICAgIHN0YXRlID0gc3RhdGUoY29kZSlcbiAgfSAvLyBNb3ZlIGEgY2hhcmFjdGVyIGZvcndhcmQuXG5cbiAgZnVuY3Rpb24gY29uc3VtZShjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcG9pbnQubGluZSsrXG4gICAgICBwb2ludC5jb2x1bW4gPSAxXG4gICAgICBwb2ludC5vZmZzZXQgKz0gY29kZSA9PT0gLTMgPyAyIDogMVxuICAgICAgYWNjb3VudEZvclBvdGVudGlhbFNraXAoKVxuICAgIH0gZWxzZSBpZiAoY29kZSAhPT0gLTEpIHtcbiAgICAgIHBvaW50LmNvbHVtbisrXG4gICAgICBwb2ludC5vZmZzZXQrK1xuICAgIH0gLy8gTm90IGluIGEgc3RyaW5nIGNodW5rLlxuXG4gICAgaWYgKHBvaW50Ll9idWZmZXJJbmRleCA8IDApIHtcbiAgICAgIHBvaW50Ll9pbmRleCsrXG4gICAgfSBlbHNlIHtcbiAgICAgIHBvaW50Ll9idWZmZXJJbmRleCsrIC8vIEF0IGVuZCBvZiBzdHJpbmcgY2h1bmsuXG5cbiAgICAgIGlmIChwb2ludC5fYnVmZmVySW5kZXggPT09IGNodW5rc1twb2ludC5faW5kZXhdLmxlbmd0aCkge1xuICAgICAgICBwb2ludC5fYnVmZmVySW5kZXggPSAtMVxuICAgICAgICBwb2ludC5faW5kZXgrK1xuICAgICAgfVxuICAgIH0gLy8gRXhwb3NlIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIuXG5cbiAgICBjb250ZXh0LnByZXZpb3VzID0gY29kZSAvLyBNYXJrIGFzIGNvbnN1bWVkLlxuICB9IC8vIFN0YXJ0IGEgdG9rZW4uXG5cbiAgZnVuY3Rpb24gZW50ZXIodHlwZSwgZmllbGRzKSB7XG4gICAgdmFyIHRva2VuID0gZmllbGRzIHx8IHt9XG4gICAgdG9rZW4udHlwZSA9IHR5cGVcbiAgICB0b2tlbi5zdGFydCA9IG5vdygpXG4gICAgY29udGV4dC5ldmVudHMucHVzaChbJ2VudGVyJywgdG9rZW4sIGNvbnRleHRdKVxuICAgIHN0YWNrLnB1c2godG9rZW4pXG4gICAgcmV0dXJuIHRva2VuXG4gIH0gLy8gU3RvcCBhIHRva2VuLlxuXG4gIGZ1bmN0aW9uIGV4aXQodHlwZSkge1xuICAgIHZhciB0b2tlbiA9IHN0YWNrLnBvcCgpXG4gICAgdG9rZW4uZW5kID0gbm93KClcbiAgICBjb250ZXh0LmV2ZW50cy5wdXNoKFsnZXhpdCcsIHRva2VuLCBjb250ZXh0XSlcbiAgICByZXR1cm4gdG9rZW5cbiAgfSAvLyBVc2UgcmVzdWx0cy5cblxuICBmdW5jdGlvbiBvbnN1Y2Nlc3NmdWxjb25zdHJ1Y3QoY29uc3RydWN0LCBpbmZvKSB7XG4gICAgYWRkUmVzdWx0KGNvbnN0cnVjdCwgaW5mby5mcm9tKVxuICB9IC8vIERpc2NhcmQgcmVzdWx0cy5cblxuICBmdW5jdGlvbiBvbnN1Y2Nlc3NmdWxjaGVjayhjb25zdHJ1Y3QsIGluZm8pIHtcbiAgICBpbmZvLnJlc3RvcmUoKVxuICB9IC8vIEZhY3RvcnkgdG8gYXR0ZW1wdC9jaGVjay9pbnRlcnJ1cHQuXG5cbiAgZnVuY3Rpb24gY29uc3RydWN0RmFjdG9yeShvbnJldHVybiwgZmllbGRzKSB7XG4gICAgcmV0dXJuIGhvb2sgLy8gSGFuZGxlIGVpdGhlciBhbiBvYmplY3QgbWFwcGluZyBjb2RlcyB0byBjb25zdHJ1Y3RzLCBhIGxpc3Qgb2ZcbiAgICAvLyBjb25zdHJ1Y3RzLCBvciBhIHNpbmdsZSBjb25zdHJ1Y3QuXG5cbiAgICBmdW5jdGlvbiBob29rKGNvbnN0cnVjdHMsIHJldHVyblN0YXRlLCBib2d1c1N0YXRlKSB7XG4gICAgICB2YXIgbGlzdE9mQ29uc3RydWN0c1xuICAgICAgdmFyIGNvbnN0cnVjdEluZGV4XG4gICAgICB2YXIgY3VycmVudENvbnN0cnVjdFxuICAgICAgdmFyIGluZm9cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RzLnRva2VuaXplIHx8ICdsZW5ndGgnIGluIGNvbnN0cnVjdHNcbiAgICAgICAgPyBoYW5kbGVMaXN0T2ZDb25zdHJ1Y3RzKG1pbmlmbGF0KGNvbnN0cnVjdHMpKVxuICAgICAgICA6IGhhbmRsZU1hcE9mQ29uc3RydWN0c1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVNYXBPZkNvbnN0cnVjdHMoY29kZSkge1xuICAgICAgICBpZiAoY29kZSBpbiBjb25zdHJ1Y3RzIHx8IG51bGwgaW4gY29uc3RydWN0cykge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVMaXN0T2ZDb25zdHJ1Y3RzKFxuICAgICAgICAgICAgY29uc3RydWN0cy5udWxsXG4gICAgICAgICAgICAgID8gLyogYzggaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgICAgICBtaW5pZmxhdChjb25zdHJ1Y3RzW2NvZGVdKS5jb25jYXQobWluaWZsYXQoY29uc3RydWN0cy5udWxsKSlcbiAgICAgICAgICAgICAgOiBjb25zdHJ1Y3RzW2NvZGVdXG4gICAgICAgICAgKShjb2RlKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZ3VzU3RhdGUoY29kZSlcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGFuZGxlTGlzdE9mQ29uc3RydWN0cyhsaXN0KSB7XG4gICAgICAgIGxpc3RPZkNvbnN0cnVjdHMgPSBsaXN0XG4gICAgICAgIGNvbnN0cnVjdEluZGV4ID0gMFxuICAgICAgICByZXR1cm4gaGFuZGxlQ29uc3RydWN0KGxpc3RbY29uc3RydWN0SW5kZXhdKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDb25zdHJ1Y3QoY29uc3RydWN0KSB7XG4gICAgICAgIHJldHVybiBzdGFydFxuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAgICAgICAvLyBUbyBkbzogbm90IG5lZGUgdG8gc3RvcmUgaWYgdGhlcmUgaXMgbm8gYm9ndXMgc3RhdGUsIHByb2JhYmx5P1xuICAgICAgICAgIC8vIEN1cnJlbnRseSBkb2VzbuKAmXQgd29yayBiZWNhdXNlIGBpbnNwZWN0YCBpbiBkb2N1bWVudCBkb2VzIGEgY2hlY2tcbiAgICAgICAgICAvLyB3L28gYSBib2d1cywgd2hpY2ggZG9lc27igJl0IG1ha2Ugc2Vuc2UuIEJ1dCBpdCBkb2VzIHNlZW0gdG8gaGVscCBwZXJmXG4gICAgICAgICAgLy8gYnkgbm90IHN0b3JpbmcuXG4gICAgICAgICAgaW5mbyA9IHN0b3JlKClcbiAgICAgICAgICBjdXJyZW50Q29uc3RydWN0ID0gY29uc3RydWN0XG5cbiAgICAgICAgICBpZiAoIWNvbnN0cnVjdC5wYXJ0aWFsKSB7XG4gICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRDb25zdHJ1Y3QgPSBjb25zdHJ1Y3RcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb25zdHJ1Y3QubmFtZSAmJlxuICAgICAgICAgICAgY29udGV4dC5wYXJzZXIuY29uc3RydWN0cy5kaXNhYmxlLm51bGwuaW5kZXhPZihjb25zdHJ1Y3QubmFtZSkgPiAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG5vaygpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdC50b2tlbml6ZS5jYWxsKFxuICAgICAgICAgICAgZmllbGRzID8gYXNzaWduKHt9LCBjb250ZXh0LCBmaWVsZHMpIDogY29udGV4dCxcbiAgICAgICAgICAgIGVmZmVjdHMsXG4gICAgICAgICAgICBvayxcbiAgICAgICAgICAgIG5va1xuICAgICAgICAgICkoY29kZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvayhjb2RlKSB7XG4gICAgICAgIG9ucmV0dXJuKGN1cnJlbnRDb25zdHJ1Y3QsIGluZm8pXG4gICAgICAgIHJldHVybiByZXR1cm5TdGF0ZVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBub2soY29kZSkge1xuICAgICAgICBpbmZvLnJlc3RvcmUoKVxuXG4gICAgICAgIGlmICgrK2NvbnN0cnVjdEluZGV4IDwgbGlzdE9mQ29uc3RydWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlQ29uc3RydWN0KGxpc3RPZkNvbnN0cnVjdHNbY29uc3RydWN0SW5kZXhdKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZ3VzU3RhdGVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRSZXN1bHQoY29uc3RydWN0LCBmcm9tKSB7XG4gICAgaWYgKGNvbnN0cnVjdC5yZXNvbHZlQWxsICYmIHJlc29sdmVBbGxDb25zdHJ1Y3RzLmluZGV4T2YoY29uc3RydWN0KSA8IDApIHtcbiAgICAgIHJlc29sdmVBbGxDb25zdHJ1Y3RzLnB1c2goY29uc3RydWN0KVxuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3QucmVzb2x2ZSkge1xuICAgICAgY2h1bmtlZFNwbGljZShcbiAgICAgICAgY29udGV4dC5ldmVudHMsXG4gICAgICAgIGZyb20sXG4gICAgICAgIGNvbnRleHQuZXZlbnRzLmxlbmd0aCAtIGZyb20sXG4gICAgICAgIGNvbnN0cnVjdC5yZXNvbHZlKGNvbnRleHQuZXZlbnRzLnNsaWNlKGZyb20pLCBjb250ZXh0KVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3QucmVzb2x2ZVRvKSB7XG4gICAgICBjb250ZXh0LmV2ZW50cyA9IGNvbnN0cnVjdC5yZXNvbHZlVG8oY29udGV4dC5ldmVudHMsIGNvbnRleHQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcmUoKSB7XG4gICAgdmFyIHN0YXJ0UG9pbnQgPSBub3coKVxuICAgIHZhciBzdGFydFByZXZpb3VzID0gY29udGV4dC5wcmV2aW91c1xuICAgIHZhciBzdGFydEN1cnJlbnRDb25zdHJ1Y3QgPSBjb250ZXh0LmN1cnJlbnRDb25zdHJ1Y3RcbiAgICB2YXIgc3RhcnRFdmVudHNJbmRleCA9IGNvbnRleHQuZXZlbnRzLmxlbmd0aFxuICAgIHZhciBzdGFydFN0YWNrID0gQXJyYXkuZnJvbShzdGFjaylcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdG9yZTogcmVzdG9yZSxcbiAgICAgIGZyb206IHN0YXJ0RXZlbnRzSW5kZXhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0b3JlKCkge1xuICAgICAgcG9pbnQgPSBzdGFydFBvaW50XG4gICAgICBjb250ZXh0LnByZXZpb3VzID0gc3RhcnRQcmV2aW91c1xuICAgICAgY29udGV4dC5jdXJyZW50Q29uc3RydWN0ID0gc3RhcnRDdXJyZW50Q29uc3RydWN0XG4gICAgICBjb250ZXh0LmV2ZW50cy5sZW5ndGggPSBzdGFydEV2ZW50c0luZGV4XG4gICAgICBzdGFjayA9IHN0YXJ0U3RhY2tcbiAgICAgIGFjY291bnRGb3JQb3RlbnRpYWxTa2lwKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhY2NvdW50Rm9yUG90ZW50aWFsU2tpcCgpIHtcbiAgICBpZiAocG9pbnQubGluZSBpbiBjb2x1bW5TdGFydCAmJiBwb2ludC5jb2x1bW4gPCAyKSB7XG4gICAgICBwb2ludC5jb2x1bW4gPSBjb2x1bW5TdGFydFtwb2ludC5saW5lXVxuICAgICAgcG9pbnQub2Zmc2V0ICs9IGNvbHVtblN0YXJ0W3BvaW50LmxpbmVdIC0gMVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVRva2VuaXplclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIG1pbmlmbGF0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBbXVxuICAgIDogJ2xlbmd0aCcgaW4gdmFsdWVcbiAgICA/IHZhbHVlXG4gICAgOiBbdmFsdWVdXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWluaWZsYXRcbiIsIid1c2Ugc3RyaWN0J1xuXG4vLyBjaHVua3MgKHJlcGxhY2VtZW50IGNoYXJhY3RlcnMsIHRhYnMsIG9yIGxpbmUgZW5kaW5ncykuXG5cbmZ1bmN0aW9uIG1vdmVQb2ludChwb2ludCwgb2Zmc2V0KSB7XG4gIHBvaW50LmNvbHVtbiArPSBvZmZzZXRcbiAgcG9pbnQub2Zmc2V0ICs9IG9mZnNldFxuICBwb2ludC5fYnVmZmVySW5kZXggKz0gb2Zmc2V0XG4gIHJldHVybiBwb2ludFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vdmVQb2ludFxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUlkZW50aWZpZXIodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSAvLyBDb2xsYXBzZSBNYXJrZG93biB3aGl0ZXNwYWNlLlxuICAgICAgLnJlcGxhY2UoL1tcXHRcXG5cXHIgXSsvZywgJyAnKSAvLyBUcmltLlxuICAgICAgLnJlcGxhY2UoL14gfCAkL2csICcnKSAvLyBTb21lIGNoYXJhY3RlcnMgYXJlIGNvbnNpZGVyZWQg4oCcdXBwZXJjYXNl4oCdLCBidXQgaWYgdGhlaXIgbG93ZXJjYXNlXG4gICAgICAvLyBjb3VudGVycGFydCBpcyB1cHBlcmNhc2VkIHdpbGwgcmVzdWx0IGluIGEgZGlmZmVyZW50IHVwcGVyY2FzZVxuICAgICAgLy8gY2hhcmFjdGVyLlxuICAgICAgLy8gSGVuY2UsIHRvIGdldCB0aGF0IGZvcm0sIHdlIHBlcmZvcm0gYm90aCBsb3dlci0gYW5kIHVwcGVyY2FzZS5cbiAgICAgIC8vIFVwcGVyIGNhc2UgbWFrZXMgc3VyZSBrZXlzIHdpbGwgbm90IGludGVyYWN0IHdpdGggZGVmYXVsdCBwcm90b3R5cGFsXG4gICAgICAvLyBtZXRob2RzOiBubyBvYmplY3QgbWV0aG9kIGlzIHVwcGVyY2FzZS5cbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAudG9VcHBlckNhc2UoKVxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplSWRlbnRpZmllclxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzaXplQ2h1bmtzID0gcmVxdWlyZSgnLi9zaXplLWNodW5rcy5qcycpXG5cbmZ1bmN0aW9uIHByZWZpeFNpemUoZXZlbnRzLCB0eXBlKSB7XG4gIHZhciB0YWlsID0gZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVxuICBpZiAoIXRhaWwgfHwgdGFpbFsxXS50eXBlICE9PSB0eXBlKSByZXR1cm4gMFxuICByZXR1cm4gc2l6ZUNodW5rcyh0YWlsWzJdLnNsaWNlU3RyZWFtKHRhaWxbMV0pKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByZWZpeFNpemVcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZnJvbUNoYXJDb2RlID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvZnJvbS1jaGFyLWNvZGUuanMnKVxuXG5mdW5jdGlvbiByZWdleENoZWNrKHJlZ2V4KSB7XG4gIHJldHVybiBjaGVja1xuXG4gIGZ1bmN0aW9uIGNoZWNrKGNvZGUpIHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChmcm9tQ2hhckNvZGUoY29kZSkpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWdleENoZWNrXG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gcmVzb2x2ZUFsbChjb25zdHJ1Y3RzLCBldmVudHMsIGNvbnRleHQpIHtcbiAgdmFyIGNhbGxlZCA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciByZXNvbHZlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBjb25zdHJ1Y3RzLmxlbmd0aCkge1xuICAgIHJlc29sdmUgPSBjb25zdHJ1Y3RzW2luZGV4XS5yZXNvbHZlQWxsXG5cbiAgICBpZiAocmVzb2x2ZSAmJiBjYWxsZWQuaW5kZXhPZihyZXNvbHZlKSA8IDApIHtcbiAgICAgIGV2ZW50cyA9IHJlc29sdmUoZXZlbnRzLCBjb250ZXh0KVxuICAgICAgY2FsbGVkLnB1c2gocmVzb2x2ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzb2x2ZUFsbFxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBmcm9tQ2hhckNvZGUgPSByZXF1aXJlKCcuLi9jb25zdGFudC9mcm9tLWNoYXItY29kZS5qcycpXG5cbmZ1bmN0aW9uIHNhZmVGcm9tSW50KHZhbHVlLCBiYXNlKSB7XG4gIHZhciBjb2RlID0gcGFyc2VJbnQodmFsdWUsIGJhc2UpXG5cbiAgaWYgKFxuICAgIC8vIEMwIGV4Y2VwdCBmb3IgSFQsIExGLCBGRiwgQ1IsIHNwYWNlXG4gICAgY29kZSA8IDkgfHxcbiAgICBjb2RlID09PSAxMSB8fFxuICAgIChjb2RlID4gMTMgJiYgY29kZSA8IDMyKSB8fCAvLyBDb250cm9sIGNoYXJhY3RlciAoREVMKSBvZiB0aGUgYmFzaWMgYmxvY2sgYW5kIEMxIGNvbnRyb2xzLlxuICAgIChjb2RlID4gMTI2ICYmIGNvZGUgPCAxNjApIHx8IC8vIExvbmUgaGlnaCBzdXJyb2dhdGVzIGFuZCBsb3cgc3Vycm9nYXRlcy5cbiAgICAoY29kZSA+IDU1Mjk1ICYmIGNvZGUgPCA1NzM0NCkgfHwgLy8gTm9uY2hhcmFjdGVycy5cbiAgICAoY29kZSA+IDY0OTc1ICYmIGNvZGUgPCA2NTAwOCkgfHxcbiAgICAoY29kZSAmIDY1NTM1KSA9PT0gNjU1MzUgfHxcbiAgICAoY29kZSAmIDY1NTM1KSA9PT0gNjU1MzQgfHwgLy8gT3V0IG9mIHJhbmdlXG4gICAgY29kZSA+IDExMTQxMTFcbiAgKSB7XG4gICAgcmV0dXJuICdcXHVGRkZEJ1xuICB9XG5cbiAgcmV0dXJuIGZyb21DaGFyQ29kZShjb2RlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNhZmVGcm9tSW50XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGZyb21DaGFyQ29kZSA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2Zyb20tY2hhci1jb2RlLmpzJylcblxuZnVuY3Rpb24gc2VyaWFsaXplQ2h1bmtzKGNodW5rcykge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGNodW5rXG4gIHZhciB2YWx1ZVxuICB2YXIgYXRUYWJcblxuICB3aGlsZSAoKytpbmRleCA8IGNodW5rcy5sZW5ndGgpIHtcbiAgICBjaHVuayA9IGNodW5rc1tpbmRleF1cblxuICAgIGlmICh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IGNodW5rXG4gICAgfSBlbHNlIGlmIChjaHVuayA9PT0gLTUpIHtcbiAgICAgIHZhbHVlID0gJ1xccidcbiAgICB9IGVsc2UgaWYgKGNodW5rID09PSAtNCkge1xuICAgICAgdmFsdWUgPSAnXFxuJ1xuICAgIH0gZWxzZSBpZiAoY2h1bmsgPT09IC0zKSB7XG4gICAgICB2YWx1ZSA9ICdcXHInICsgJ1xcbidcbiAgICB9IGVsc2UgaWYgKGNodW5rID09PSAtMikge1xuICAgICAgdmFsdWUgPSAnXFx0J1xuICAgIH0gZWxzZSBpZiAoY2h1bmsgPT09IC0xKSB7XG4gICAgICBpZiAoYXRUYWIpIGNvbnRpbnVlXG4gICAgICB2YWx1ZSA9ICcgJ1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDdXJyZW50bHkgb25seSByZXBsYWNlbWVudCBjaGFyYWN0ZXIuXG4gICAgICB2YWx1ZSA9IGZyb21DaGFyQ29kZShjaHVuaylcbiAgICB9XG5cbiAgICBhdFRhYiA9IGNodW5rID09PSAtMlxuICAgIHJlc3VsdC5wdXNoKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcmlhbGl6ZUNodW5rc1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9jb25zdGFudC9hc3NpZ24uanMnKVxuXG5mdW5jdGlvbiBzaGFsbG93KG9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBvYmplY3QpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhbGxvd1xuIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIENvdW50cyB0YWJzIGJhc2VkIG9uIHRoZWlyIGV4cGFuZGVkIHNpemUsIGFuZCBDUitMRiBhcyBvbmUgY2hhcmFjdGVyLlxuXG5mdW5jdGlvbiBzaXplQ2h1bmtzKGNodW5rcykge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgc2l6ZSA9IDBcblxuICB3aGlsZSAoKytpbmRleCA8IGNodW5rcy5sZW5ndGgpIHtcbiAgICBzaXplICs9IHR5cGVvZiBjaHVua3NbaW5kZXhdID09PSAnc3RyaW5nJyA/IGNodW5rc1tpbmRleF0ubGVuZ3RoIDogMVxuICB9XG5cbiAgcmV0dXJuIHNpemVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaXplQ2h1bmtzXG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gc2xpY2VDaHVua3MoY2h1bmtzLCB0b2tlbikge1xuICB2YXIgc3RhcnRJbmRleCA9IHRva2VuLnN0YXJ0Ll9pbmRleFxuICB2YXIgc3RhcnRCdWZmZXJJbmRleCA9IHRva2VuLnN0YXJ0Ll9idWZmZXJJbmRleFxuICB2YXIgZW5kSW5kZXggPSB0b2tlbi5lbmQuX2luZGV4XG4gIHZhciBlbmRCdWZmZXJJbmRleCA9IHRva2VuLmVuZC5fYnVmZmVySW5kZXhcbiAgdmFyIHZpZXdcblxuICBpZiAoc3RhcnRJbmRleCA9PT0gZW5kSW5kZXgpIHtcbiAgICB2aWV3ID0gW2NodW5rc1tzdGFydEluZGV4XS5zbGljZShzdGFydEJ1ZmZlckluZGV4LCBlbmRCdWZmZXJJbmRleCldXG4gIH0gZWxzZSB7XG4gICAgdmlldyA9IGNodW5rcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcblxuICAgIGlmIChzdGFydEJ1ZmZlckluZGV4ID4gLTEpIHtcbiAgICAgIHZpZXdbMF0gPSB2aWV3WzBdLnNsaWNlKHN0YXJ0QnVmZmVySW5kZXgpXG4gICAgfVxuXG4gICAgaWYgKGVuZEJ1ZmZlckluZGV4ID4gMCkge1xuICAgICAgdmlldy5wdXNoKGNodW5rc1tlbmRJbmRleF0uc2xpY2UoMCwgZW5kQnVmZmVySW5kZXgpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2aWV3XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2xpY2VDaHVua3NcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvYXNzaWduLmpzJylcbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi9jaHVua2VkLXNwbGljZS5qcycpXG52YXIgc2hhbGxvdyA9IHJlcXVpcmUoJy4vc2hhbGxvdy5qcycpXG5cbmZ1bmN0aW9uIHN1YnRva2VuaXplKGV2ZW50cykge1xuICB2YXIganVtcHMgPSB7fVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgZXZlbnRcbiAgdmFyIGxpbmVJbmRleFxuICB2YXIgb3RoZXJJbmRleFxuICB2YXIgb3RoZXJFdmVudFxuICB2YXIgcGFyYW1ldGVyc1xuICB2YXIgc3ViZXZlbnRzXG4gIHZhciBtb3JlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKGluZGV4IGluIGp1bXBzKSB7XG4gICAgICBpbmRleCA9IGp1bXBzW2luZGV4XVxuICAgIH1cblxuICAgIGV2ZW50ID0gZXZlbnRzW2luZGV4XSAvLyBBZGQgYSBob29rIGZvciB0aGUgR0ZNIHRhc2tsaXN0IGV4dGVuc2lvbiwgd2hpY2ggbmVlZHMgdG8ga25vdyBpZiB0ZXh0XG4gICAgLy8gaXMgaW4gdGhlIGZpcnN0IGNvbnRlbnQgb2YgYSBsaXN0IGl0ZW0uXG5cbiAgICBpZiAoXG4gICAgICBpbmRleCAmJlxuICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2NodW5rRmxvdycgJiZcbiAgICAgIGV2ZW50c1tpbmRleCAtIDFdWzFdLnR5cGUgPT09ICdsaXN0SXRlbVByZWZpeCdcbiAgICApIHtcbiAgICAgIHN1YmV2ZW50cyA9IGV2ZW50WzFdLl90b2tlbml6ZXIuZXZlbnRzXG4gICAgICBvdGhlckluZGV4ID0gMFxuXG4gICAgICBpZiAoXG4gICAgICAgIG90aGVySW5kZXggPCBzdWJldmVudHMubGVuZ3RoICYmXG4gICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSAnbGluZUVuZGluZ0JsYW5rJ1xuICAgICAgKSB7XG4gICAgICAgIG90aGVySW5kZXggKz0gMlxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG90aGVySW5kZXggPCBzdWJldmVudHMubGVuZ3RoICYmXG4gICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSAnY29udGVudCdcbiAgICAgICkge1xuICAgICAgICB3aGlsZSAoKytvdGhlckluZGV4IDwgc3ViZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChzdWJldmVudHNbb3RoZXJJbmRleF1bMV0udHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdWJldmVudHNbb3RoZXJJbmRleF1bMV0udHlwZSA9PT0gJ2NodW5rVGV4dCcpIHtcbiAgICAgICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS5pc0luRmlyc3RDb250ZW50T2ZMaXN0SXRlbSA9IHRydWVcbiAgICAgICAgICAgIG90aGVySW5kZXgrK1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gRW50ZXIuXG5cbiAgICBpZiAoZXZlbnRbMF0gPT09ICdlbnRlcicpIHtcbiAgICAgIGlmIChldmVudFsxXS5jb250ZW50VHlwZSkge1xuICAgICAgICBhc3NpZ24oanVtcHMsIHN1YmNvbnRlbnQoZXZlbnRzLCBpbmRleCkpXG4gICAgICAgIGluZGV4ID0ganVtcHNbaW5kZXhdXG4gICAgICAgIG1vcmUgPSB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBFeGl0LlxuICAgIGVsc2UgaWYgKGV2ZW50WzFdLl9jb250YWluZXIgfHwgZXZlbnRbMV0uX21vdmVQcmV2aW91c0xpbmVFbmRpbmdzKSB7XG4gICAgICBvdGhlckluZGV4ID0gaW5kZXhcbiAgICAgIGxpbmVJbmRleCA9IHVuZGVmaW5lZFxuXG4gICAgICB3aGlsZSAob3RoZXJJbmRleC0tKSB7XG4gICAgICAgIG90aGVyRXZlbnQgPSBldmVudHNbb3RoZXJJbmRleF1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgb3RoZXJFdmVudFsxXS50eXBlID09PSAnbGluZUVuZGluZycgfHxcbiAgICAgICAgICBvdGhlckV2ZW50WzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nQmxhbmsnXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChvdGhlckV2ZW50WzBdID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgICBpZiAobGluZUluZGV4KSB7XG4gICAgICAgICAgICAgIGV2ZW50c1tsaW5lSW5kZXhdWzFdLnR5cGUgPSAnbGluZUVuZGluZ0JsYW5rJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdGhlckV2ZW50WzFdLnR5cGUgPSAnbGluZUVuZGluZydcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IG90aGVySW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGluZUluZGV4KSB7XG4gICAgICAgIC8vIEZpeCBwb3NpdGlvbi5cbiAgICAgICAgZXZlbnRbMV0uZW5kID0gc2hhbGxvdyhldmVudHNbbGluZUluZGV4XVsxXS5zdGFydCkgLy8gU3dpdGNoIGNvbnRhaW5lciBleGl0IHcvIGxpbmUgZW5kaW5ncy5cblxuICAgICAgICBwYXJhbWV0ZXJzID0gZXZlbnRzLnNsaWNlKGxpbmVJbmRleCwgaW5kZXgpXG4gICAgICAgIHBhcmFtZXRlcnMudW5zaGlmdChldmVudClcbiAgICAgICAgY2h1bmtlZFNwbGljZShldmVudHMsIGxpbmVJbmRleCwgaW5kZXggLSBsaW5lSW5kZXggKyAxLCBwYXJhbWV0ZXJzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAhbW9yZVxufVxuXG5mdW5jdGlvbiBzdWJjb250ZW50KGV2ZW50cywgZXZlbnRJbmRleCkge1xuICB2YXIgdG9rZW4gPSBldmVudHNbZXZlbnRJbmRleF1bMV1cbiAgdmFyIGNvbnRleHQgPSBldmVudHNbZXZlbnRJbmRleF1bMl1cbiAgdmFyIHN0YXJ0UG9zaXRpb24gPSBldmVudEluZGV4IC0gMVxuICB2YXIgc3RhcnRQb3NpdGlvbnMgPSBbXVxuICB2YXIgdG9rZW5pemVyID1cbiAgICB0b2tlbi5fdG9rZW5pemVyIHx8IGNvbnRleHQucGFyc2VyW3Rva2VuLmNvbnRlbnRUeXBlXSh0b2tlbi5zdGFydClcbiAgdmFyIGNoaWxkRXZlbnRzID0gdG9rZW5pemVyLmV2ZW50c1xuICB2YXIganVtcHMgPSBbXVxuICB2YXIgZ2FwcyA9IHt9XG4gIHZhciBzdHJlYW1cbiAgdmFyIHByZXZpb3VzXG4gIHZhciBpbmRleFxuICB2YXIgZW50ZXJlZFxuICB2YXIgZW5kXG4gIHZhciBhZGp1c3QgLy8gTG9vcCBmb3J3YXJkIHRocm91Z2ggdGhlIGxpbmtlZCB0b2tlbnMgdG8gcGFzcyB0aGVtIGluIG9yZGVyIHRvIHRoZVxuICAvLyBzdWJ0b2tlbml6ZXIuXG5cbiAgd2hpbGUgKHRva2VuKSB7XG4gICAgLy8gRmluZCB0aGUgcG9zaXRpb24gb2YgdGhlIGV2ZW50IGZvciB0aGlzIHRva2VuLlxuICAgIHdoaWxlIChldmVudHNbKytzdGFydFBvc2l0aW9uXVsxXSAhPT0gdG9rZW4pIHtcbiAgICAgIC8vIEVtcHR5LlxuICAgIH1cblxuICAgIHN0YXJ0UG9zaXRpb25zLnB1c2goc3RhcnRQb3NpdGlvbilcblxuICAgIGlmICghdG9rZW4uX3Rva2VuaXplcikge1xuICAgICAgc3RyZWFtID0gY29udGV4dC5zbGljZVN0cmVhbSh0b2tlbilcblxuICAgICAgaWYgKCF0b2tlbi5uZXh0KSB7XG4gICAgICAgIHN0cmVhbS5wdXNoKG51bGwpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICB0b2tlbml6ZXIuZGVmaW5lU2tpcCh0b2tlbi5zdGFydClcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLmlzSW5GaXJzdENvbnRlbnRPZkxpc3RJdGVtKSB7XG4gICAgICAgIHRva2VuaXplci5fZ2ZtVGFza2xpc3RGaXJzdENvbnRlbnRPZkxpc3RJdGVtID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICB0b2tlbml6ZXIud3JpdGUoc3RyZWFtKVxuXG4gICAgICBpZiAodG9rZW4uaXNJbkZpcnN0Q29udGVudE9mTGlzdEl0ZW0pIHtcbiAgICAgICAgdG9rZW5pemVyLl9nZm1UYXNrbGlzdEZpcnN0Q29udGVudE9mTGlzdEl0ZW0gPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9IC8vIFVucmF2ZWwgdGhlIG5leHQgdG9rZW4uXG5cbiAgICBwcmV2aW91cyA9IHRva2VuXG4gICAgdG9rZW4gPSB0b2tlbi5uZXh0XG4gIH0gLy8gTm93LCBsb29wIGJhY2sgdGhyb3VnaCBhbGwgZXZlbnRzIChhbmQgbGlua2VkIHRva2VucyksIHRvIGZpZ3VyZSBvdXQgd2hpY2hcbiAgLy8gcGFydHMgYmVsb25nIHdoZXJlLlxuXG4gIHRva2VuID0gcHJldmlvdXNcbiAgaW5kZXggPSBjaGlsZEV2ZW50cy5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZeKAmXZlIGF0IGxlYXN0IHNlZW4gc29tZXRoaW5nIChmaW5hbCBlb2wgaXMgcGFydCBvZiB0aGUgbGFzdFxuICAgIC8vIHRva2VuKS5cbiAgICBpZiAoY2hpbGRFdmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInKSB7XG4gICAgICBlbnRlcmVkID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBGaW5kIGEgdm9pZCB0b2tlbiB0aGF0IGluY2x1ZGVzIGEgYnJlYWsuXG4gICAgICBlbnRlcmVkICYmXG4gICAgICBjaGlsZEV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gY2hpbGRFdmVudHNbaW5kZXggLSAxXVsxXS50eXBlICYmXG4gICAgICBjaGlsZEV2ZW50c1tpbmRleF1bMV0uc3RhcnQubGluZSAhPT0gY2hpbGRFdmVudHNbaW5kZXhdWzFdLmVuZC5saW5lXG4gICAgKSB7XG4gICAgICBhZGQoY2hpbGRFdmVudHMuc2xpY2UoaW5kZXggKyAxLCBlbmQpKVxuICAgICAgLy8gSGVscCBHQy5cbiAgICAgIHRva2VuLl90b2tlbml6ZXIgPSB0b2tlbi5uZXh0ID0gdW5kZWZpbmVkXG4gICAgICB0b2tlbiA9IHRva2VuLnByZXZpb3VzXG4gICAgICBlbmQgPSBpbmRleCArIDFcbiAgICB9XG4gIH1cblxuICAvLyBIZWxwIEdDLlxuICB0b2tlbml6ZXIuZXZlbnRzID0gdG9rZW4uX3Rva2VuaXplciA9IHRva2VuLm5leHQgPSB1bmRlZmluZWQgLy8gRG8gaGVhZDpcblxuICBhZGQoY2hpbGRFdmVudHMuc2xpY2UoMCwgZW5kKSlcbiAgaW5kZXggPSAtMVxuICBhZGp1c3QgPSAwXG5cbiAgd2hpbGUgKCsraW5kZXggPCBqdW1wcy5sZW5ndGgpIHtcbiAgICBnYXBzW2FkanVzdCArIGp1bXBzW2luZGV4XVswXV0gPSBhZGp1c3QgKyBqdW1wc1tpbmRleF1bMV1cbiAgICBhZGp1c3QgKz0ganVtcHNbaW5kZXhdWzFdIC0ganVtcHNbaW5kZXhdWzBdIC0gMVxuICB9XG5cbiAgcmV0dXJuIGdhcHNcblxuICBmdW5jdGlvbiBhZGQoc2xpY2UpIHtcbiAgICB2YXIgc3RhcnQgPSBzdGFydFBvc2l0aW9ucy5wb3AoKVxuICAgIGp1bXBzLnVuc2hpZnQoW3N0YXJ0LCBzdGFydCArIHNsaWNlLmxlbmd0aCAtIDFdKVxuICAgIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBzdGFydCwgMiwgc2xpY2UpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJ0b2tlbml6ZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG52YXIgZWxcblxudmFyIHNlbWljb2xvbiA9IDU5IC8vICAnOydcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVFbnRpdHlcblxuZnVuY3Rpb24gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIHtcbiAgdmFyIGVudGl0eSA9ICcmJyArIGNoYXJhY3RlcnMgKyAnOydcbiAgdmFyIGNoYXJcblxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICBlbC5pbm5lckhUTUwgPSBlbnRpdHlcbiAgY2hhciA9IGVsLnRleHRDb250ZW50XG5cbiAgLy8gU29tZSBlbnRpdGllcyBkbyBub3QgcmVxdWlyZSB0aGUgY2xvc2luZyBzZW1pY29sb24gKGAmbm90YCAtIGZvciBpbnN0YW5jZSksXG4gIC8vIHdoaWNoIGxlYWRzIHRvIHNpdHVhdGlvbnMgd2hlcmUgcGFyc2luZyB0aGUgYXNzdW1lZCBlbnRpdHkgb2YgJm5vdGl0OyB3aWxsXG4gIC8vIHJlc3VsdCBpbiB0aGUgc3RyaW5nIGDCrGl0O2AuICBXaGVuIHdlIGVuY291bnRlciBhIHRyYWlsaW5nIHNlbWljb2xvbiBhZnRlclxuICAvLyBwYXJzaW5nIGFuZCB0aGUgZW50aXR5IHRvIGRlY29kZSB3YXMgbm90IGEgc2VtaWNvbG9uIChgJnNlbWk7YCksIHdlIGNhblxuICAvLyBhc3N1bWUgdGhhdCB0aGUgbWF0Y2hpbmcgd2FzIGluY29tcGxldGVcbiAgaWYgKGNoYXIuY2hhckNvZGVBdChjaGFyLmxlbmd0aCAtIDEpID09PSBzZW1pY29sb24gJiYgY2hhcmFjdGVycyAhPT0gJ3NlbWknKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBJZiB0aGUgZGVjb2RlZCBzdHJpbmcgaXMgZXF1YWwgdG8gdGhlIGlucHV0LCB0aGUgZW50aXR5IHdhcyBub3QgdmFsaWRcbiAgcmV0dXJuIGNoYXIgPT09IGVudGl0eSA/IGZhbHNlIDogY2hhclxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbmZ1bmN0aW9uIGFzdFRvUmVhY3Qobm9kZSwgb3B0aW9ucykge1xuICB2YXIgcGFyZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuICB2YXIgcmVuZGVyZXIgPSBvcHRpb25zLnJlbmRlcmVyc1tub2RlLnR5cGVdOyAvLyBOb2RlcyBjcmVhdGVkIGJ5IHBsdWdpbnMgZG8gbm90IGhhdmUgcG9zaXRpb25hbCBpbmZvLCBpbiB3aGljaCBjYXNlIHdlIHNldFxuICAvLyBhbiBvYmplY3QgdGhhdCBtYXRjaGVzIHRoZSBwb3NpdG9uIGludGVyZmFjZS5cblxuICBpZiAoIW5vZGUucG9zaXRpb24pIHtcbiAgICBub2RlLnBvc2l0aW9uID0ge1xuICAgICAgc3RhcnQ6IHtcbiAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgICBvZmZzZXQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBlbmQ6IHtcbiAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgICBvZmZzZXQ6IG51bGxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIHBvcyA9IG5vZGUucG9zaXRpb24uc3RhcnQ7XG4gIHZhciBrZXkgPSBbbm9kZS50eXBlLCBwb3MubGluZSwgcG9zLmNvbHVtbiwgaW5kZXhdLmpvaW4oJy0nKTtcblxuICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHJlbmRlcmVyKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlbmRlcmVyIGZvciB0eXBlIGBcIi5jb25jYXQobm9kZS50eXBlLCBcImAgbm90IGRlZmluZWQgb3IgaXMgbm90IHJlbmRlcmFibGVcIikpO1xuICB9XG5cbiAgdmFyIG5vZGVQcm9wcyA9IGdldE5vZGVQcm9wcyhub2RlLCBrZXksIG9wdGlvbnMsIHJlbmRlcmVyLCBwYXJlbnQsIGluZGV4KTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVuZGVyZXIsIG5vZGVQcm9wcywgbm9kZVByb3BzLmNoaWxkcmVuIHx8IHJlc29sdmVDaGlsZHJlbigpIHx8IHVuZGVmaW5lZCk7XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZE5vZGUsIGkpIHtcbiAgICAgIHJldHVybiBhc3RUb1JlYWN0KGNoaWxkTm9kZSwgb3B0aW9ucywge1xuICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICBwcm9wczogbm9kZVByb3BzXG4gICAgICB9LCBpKTtcbiAgICB9KTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtcywgY29tcGxleGl0eVxuXG5cbmZ1bmN0aW9uIGdldE5vZGVQcm9wcyhub2RlLCBrZXksIG9wdHMsIHJlbmRlcmVyLCBwYXJlbnQsIGluZGV4KSB7XG4gIHZhciBwcm9wcyA9IHtcbiAgICBrZXk6IGtleVxuICB9O1xuICB2YXIgaXNTaW1wbGVSZW5kZXJlciA9IHR5cGVvZiByZW5kZXJlciA9PT0gJ3N0cmluZycgfHwgcmVuZGVyZXIgPT09IFJlYWN0LkZyYWdtZW50OyAvLyBgc291cmNlUG9zYCBpcyB0cnVlIGlmIHRoZSB1c2VyIHdhbnRzIHNvdXJjZSBpbmZvcm1hdGlvbiAobGluZS9jb2x1bW4gaW5mbyBmcm9tIG1hcmtkb3duIHNvdXJjZSlcblxuICBpZiAob3B0cy5zb3VyY2VQb3MgJiYgbm9kZS5wb3NpdGlvbikge1xuICAgIHByb3BzWydkYXRhLXNvdXJjZXBvcyddID0gZmxhdHRlblBvc2l0aW9uKG5vZGUucG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKG9wdHMucmF3U291cmNlUG9zICYmICFpc1NpbXBsZVJlbmRlcmVyKSB7XG4gICAgcHJvcHMuc291cmNlUG9zaXRpb24gPSBub2RlLnBvc2l0aW9uO1xuICB9IC8vIElmIGBpbmNsdWRlTm9kZUluZGV4YCBpcyB0cnVlLCBwYXNzIG5vZGUgaW5kZXggaW5mbyB0byBhbGwgbm9uLXRhZyByZW5kZXJlcnNcblxuXG4gIGlmIChvcHRzLmluY2x1ZGVOb2RlSW5kZXggJiYgcGFyZW50Lm5vZGUgJiYgcGFyZW50Lm5vZGUuY2hpbGRyZW4gJiYgIWlzU2ltcGxlUmVuZGVyZXIpIHtcbiAgICBwcm9wcy5pbmRleCA9IHBhcmVudC5ub2RlLmNoaWxkcmVuLmluZGV4T2Yobm9kZSk7XG4gICAgcHJvcHMucGFyZW50Q2hpbGRDb3VudCA9IHBhcmVudC5ub2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgfVxuXG4gIHZhciByZWYgPSBub2RlLmlkZW50aWZpZXIgIT09IG51bGwgJiYgbm9kZS5pZGVudGlmaWVyICE9PSB1bmRlZmluZWQgP1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIHBsdWdpbnMgY291bGQgaW5qZWN0IGFuIHVuZGVmaW5lZCByZWZlcmVuY2UuICovXG4gIG9wdHMuZGVmaW5pdGlvbnNbbm9kZS5pZGVudGlmaWVyLnRvVXBwZXJDYXNlKCldIHx8IHt9IDogbnVsbDtcblxuICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgIGNhc2UgJ3Jvb3QnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IG9wdHMuY2xhc3NOYW1lXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndGV4dCc6XG4gICAgICBwcm9wcy5ub2RlS2V5ID0ga2V5O1xuICAgICAgcHJvcHMuY2hpbGRyZW4gPSBub2RlLnZhbHVlO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdoZWFkaW5nJzpcbiAgICAgIHByb3BzLmxldmVsID0gbm9kZS5kZXB0aDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbGlzdCc6XG4gICAgICBwcm9wcy5zdGFydCA9IG5vZGUuc3RhcnQ7XG4gICAgICBwcm9wcy5vcmRlcmVkID0gbm9kZS5vcmRlcmVkO1xuICAgICAgcHJvcHMuc3ByZWFkID0gbm9kZS5zcHJlYWQ7XG4gICAgICBwcm9wcy5kZXB0aCA9IG5vZGUuZGVwdGg7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpc3RJdGVtJzpcbiAgICAgIHByb3BzLmNoZWNrZWQgPSBub2RlLmNoZWNrZWQ7XG4gICAgICBwcm9wcy5zcHJlYWQgPSBub2RlLnNwcmVhZDtcbiAgICAgIHByb3BzLm9yZGVyZWQgPSBub2RlLm9yZGVyZWQ7XG4gICAgICBwcm9wcy5pbmRleCA9IG5vZGUuaW5kZXg7XG4gICAgICBwcm9wcy5jaGlsZHJlbiA9IGdldExpc3RJdGVtQ2hpbGRyZW4obm9kZSwgcGFyZW50KS5tYXAoZnVuY3Rpb24gKGNoaWxkTm9kZSwgaSkge1xuICAgICAgICByZXR1cm4gYXN0VG9SZWFjdChjaGlsZE5vZGUsIG9wdHMsIHtcbiAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICB9LCBpKTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdkZWZpbml0aW9uJzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHtcbiAgICAgICAgaWRlbnRpZmllcjogbm9kZS5pZGVudGlmaWVyLFxuICAgICAgICB0aXRsZTogbm9kZS50aXRsZSxcbiAgICAgICAgdXJsOiBub2RlLnVybFxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2NvZGUnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywge1xuICAgICAgICBsYW5ndWFnZTogbm9kZS5sYW5nICYmIG5vZGUubGFuZy5zcGxpdCgvXFxzLywgMSlbMF1cbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdpbmxpbmVDb2RlJzpcbiAgICAgIHByb3BzLmNoaWxkcmVuID0gbm9kZS52YWx1ZTtcbiAgICAgIHByb3BzLmlubGluZSA9IHRydWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpbmsnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywge1xuICAgICAgICB0aXRsZTogbm9kZS50aXRsZSB8fCB1bmRlZmluZWQsXG4gICAgICAgIHRhcmdldDogdHlwZW9mIG9wdHMubGlua1RhcmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMubGlua1RhcmdldChub2RlLnVybCwgbm9kZS5jaGlsZHJlbiwgbm9kZS50aXRsZSkgOiBvcHRzLmxpbmtUYXJnZXQsXG4gICAgICAgIGhyZWY6IG9wdHMudHJhbnNmb3JtTGlua1VyaSA/IG9wdHMudHJhbnNmb3JtTGlua1VyaShub2RlLnVybCwgbm9kZS5jaGlsZHJlbiwgbm9kZS50aXRsZSkgOiBub2RlLnVybFxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHtcbiAgICAgICAgc3JjOiBvcHRzLnRyYW5zZm9ybUltYWdlVXJpID8gb3B0cy50cmFuc2Zvcm1JbWFnZVVyaShub2RlLnVybCwgbm9kZS5jaGlsZHJlbiwgbm9kZS50aXRsZSwgbm9kZS5hbHQpIDogbm9kZS51cmwsXG4gICAgICAgIGFsdDogbm9kZS5hbHQgfHwgJycsXG4gICAgICAgIHRpdGxlOiBub2RlLnRpdGxlIHx8IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpbmtSZWZlcmVuY2UnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywgeHRlbmQocmVmLCB7XG4gICAgICAgIGhyZWY6IG9wdHMudHJhbnNmb3JtTGlua1VyaSA/IG9wdHMudHJhbnNmb3JtTGlua1VyaShyZWYuaHJlZikgOiByZWYuaHJlZlxuICAgICAgfSkpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdpbWFnZVJlZmVyZW5jZSc6XG4gICAgICBhc3NpZ25EZWZpbmVkKHByb3BzLCB7XG4gICAgICAgIHNyYzogb3B0cy50cmFuc2Zvcm1JbWFnZVVyaSAmJiByZWYuaHJlZiA/IG9wdHMudHJhbnNmb3JtSW1hZ2VVcmkocmVmLmhyZWYsIG5vZGUuY2hpbGRyZW4sIHJlZi50aXRsZSwgbm9kZS5hbHQpIDogcmVmLmhyZWYsXG4gICAgICAgIGFsdDogbm9kZS5hbHQgfHwgJycsXG4gICAgICAgIHRpdGxlOiByZWYudGl0bGUgfHwgdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndGFibGUnOlxuICAgIGNhc2UgJ3RhYmxlSGVhZCc6XG4gICAgY2FzZSAndGFibGVCb2R5JzpcbiAgICAgIHByb3BzLmNvbHVtbkFsaWdubWVudCA9IG5vZGUuYWxpZ247XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RhYmxlUm93JzpcbiAgICAgIHByb3BzLmlzSGVhZGVyID0gcGFyZW50Lm5vZGUudHlwZSA9PT0gJ3RhYmxlSGVhZCc7XG4gICAgICBwcm9wcy5jb2x1bW5BbGlnbm1lbnQgPSBwYXJlbnQucHJvcHMuY29sdW1uQWxpZ25tZW50O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0YWJsZUNlbGwnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywge1xuICAgICAgICBpc0hlYWRlcjogcGFyZW50LnByb3BzLmlzSGVhZGVyLFxuICAgICAgICBhbGlnbjogcGFyZW50LnByb3BzLmNvbHVtbkFsaWdubWVudFtpbmRleF1cbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd2aXJ0dWFsSHRtbCc6XG4gICAgICBwcm9wcy50YWcgPSBub2RlLnRhZztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaHRtbCc6XG4gICAgICAvLyBAdG9kbyBmaW5kIGEgYmV0dGVyIHdheSB0aGFuIHRoaXNcbiAgICAgIHByb3BzLmlzQmxvY2sgPSBub2RlLnBvc2l0aW9uLnN0YXJ0LmxpbmUgIT09IG5vZGUucG9zaXRpb24uZW5kLmxpbmU7XG4gICAgICBwcm9wcy5hbGxvd0Rhbmdlcm91c0h0bWwgPSBvcHRzLmFsbG93RGFuZ2Vyb3VzSHRtbDtcbiAgICAgIHByb3BzLmVzY2FwZUh0bWwgPSBvcHRzLmVzY2FwZUh0bWw7XG4gICAgICBwcm9wcy5za2lwSHRtbCA9IG9wdHMuc2tpcEh0bWw7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BhcnNlZEh0bWwnOlxuICAgICAge1xuICAgICAgICB2YXIgcGFyc2VkQ2hpbGRyZW47XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICBwYXJzZWRDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGFzdFRvUmVhY3QoY2hpbGQsIG9wdHMsIHtcbiAgICAgICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgICAgICB9LCBpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLmFsbG93RGFuZ2Vyb3VzSHRtbCA9IG9wdHMuYWxsb3dEYW5nZXJvdXNIdG1sO1xuICAgICAgICBwcm9wcy5lc2NhcGVIdG1sID0gb3B0cy5lc2NhcGVIdG1sO1xuICAgICAgICBwcm9wcy5za2lwSHRtbCA9IG9wdHMuc2tpcEh0bWw7XG4gICAgICAgIHByb3BzLmVsZW1lbnQgPSBub2RlLmVsZW1lbnQgPyBtZXJnZU5vZGVDaGlsZHJlbihub2RlLCBwYXJzZWRDaGlsZHJlbikgOiBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICBhc3NpZ25EZWZpbmVkKHByb3BzLCB4dGVuZChub2RlLCB7XG4gICAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgcG9zaXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZFxuICAgICAgfSkpO1xuICB9XG5cbiAgaWYgKCFpc1NpbXBsZVJlbmRlcmVyICYmIG5vZGUudmFsdWUpIHtcbiAgICBwcm9wcy52YWx1ZSA9IG5vZGUudmFsdWU7XG4gIH1cblxuICBpZiAoIWlzU2ltcGxlUmVuZGVyZXIpIHtcbiAgICBwcm9wcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cblxuZnVuY3Rpb24gYXNzaWduRGVmaW5lZCh0YXJnZXQsIGF0dHJzKSB7XG4gIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgIGlmICh0eXBlb2YgYXR0cnNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRhcmdldFtrZXldID0gYXR0cnNba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VOb2RlQ2hpbGRyZW4obm9kZSwgcGFyc2VkQ2hpbGRyZW4pIHtcbiAgdmFyIGVsID0gbm9kZS5lbGVtZW50O1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gYGRpdmAgZmFsbGJhY2sgZm9yIG9sZCBSZWFjdC4gKi9cbiAgICB2YXIgRnJhZ21lbnQgPSBSZWFjdC5GcmFnbWVudCB8fCAnZGl2JztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgZWwpO1xuICB9XG5cbiAgaWYgKGVsLnByb3BzLmNoaWxkcmVuIHx8IHBhcnNlZENoaWxkcmVuKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShlbC5wcm9wcy5jaGlsZHJlbikuY29uY2F0KHBhcnNlZENoaWxkcmVuKTtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGVsLCBudWxsLCBjaGlsZHJlbik7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGVsLCBudWxsKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlblBvc2l0aW9uKHBvcykge1xuICByZXR1cm4gW3Bvcy5zdGFydC5saW5lLCAnOicsIHBvcy5zdGFydC5jb2x1bW4sICctJywgcG9zLmVuZC5saW5lLCAnOicsIHBvcy5lbmQuY29sdW1uXS5tYXAoU3RyaW5nKS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGlzdEl0ZW1DaGlsZHJlbihub2RlLCBwYXJlbnQpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBsaXN0IGl0ZW1zIGFyZSBhbHdheXMgaW4gYSBsaXN0LCBidXQgYmVzdCB0byBiZSBzdXJlLiAqL1xuICB2YXIgbG9vc2UgPSBwYXJlbnQgJiYgcGFyZW50Lm5vZGUgPyBsaXN0TG9vc2UocGFyZW50Lm5vZGUpIDogbGlzdEl0ZW1Mb29zZShub2RlKTtcbiAgcmV0dXJuIGxvb3NlID8gbm9kZS5jaGlsZHJlbiA6IHVud3JhcFBhcmFncmFwaHMobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcFBhcmFncmFwaHMobm9kZSkge1xuICByZXR1cm4gbm9kZS5jaGlsZHJlbi5yZWR1Y2UoZnVuY3Rpb24gKGFycmF5LCBjaGlsZCkge1xuICAgIHJldHVybiBhcnJheS5jb25jYXQoY2hpbGQudHlwZSA9PT0gJ3BhcmFncmFwaCcgPyBjaGlsZC5jaGlsZHJlbiA6IFtjaGlsZF0pO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGxpc3RMb29zZShub2RlKSB7XG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gIHZhciBsb29zZSA9IG5vZGUuc3ByZWFkO1xuICB2YXIgaW5kZXggPSAtMTtcblxuICB3aGlsZSAoIWxvb3NlICYmICsraW5kZXggPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBsb29zZSA9IGxpc3RJdGVtTG9vc2UoY2hpbGRyZW5baW5kZXhdKTtcbiAgfVxuXG4gIHJldHVybiBsb29zZTtcbn1cblxuZnVuY3Rpb24gbGlzdEl0ZW1Mb29zZShub2RlKSB7XG4gIHZhciBzcHJlYWQgPSBub2RlLnNwcmVhZDtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBzcHJlYWQgaXMgcHJlc2VudCBmcm9tIHJlbWFyay1wYXJzZSwgYnV0IG1heWJlIHBsdWdpbnMgZG9u4oCZdCBzZXQgaXQuICovXG5cbiAgcmV0dXJuIHNwcmVhZCA9PT0gdW5kZWZpbmVkIHx8IHNwcmVhZCA9PT0gbnVsbCA/IG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMSA6IHNwcmVhZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3RUb1JlYWN0OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldERlZmluaXRpb25zKHRyZWUpIHtcbiAgdmFyIGRlZmluaXRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmlzaXQodHJlZSwgJ2RlZmluaXRpb24nLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gbm9kZS5pZGVudGlmaWVyLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKGlkZW50aWZpZXIgaW4gZGVmaW5pdGlvbnMpIHJldHVybjtcbiAgICBkZWZpbml0aW9uc1tpZGVudGlmaWVyXSA9IHtcbiAgICAgIGhyZWY6IG5vZGUudXJsLFxuICAgICAgdGl0bGU6IG5vZGUudGl0bGVcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpO1xuXG52YXIgc3BsaWNlID0gW10uc3BsaWNlO1xuXG5leHBvcnRzLm9mVHlwZSA9IGZ1bmN0aW9uICh0eXBlcywgbW9kZSkge1xuICByZXR1cm4gaWZOb3RNYXRjaChhbGxvdywgbW9kZSk7XG5cbiAgZnVuY3Rpb24gYWxsb3cobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIHJldHVybiAhdHlwZXMuaW5jbHVkZXMobm9kZS50eXBlKTtcbiAgfVxufTtcblxuZXhwb3J0cy5pZk5vdE1hdGNoID0gaWZOb3RNYXRjaDtcblxuZnVuY3Rpb24gaWZOb3RNYXRjaChhbGxvdywgbW9kZSkge1xuICByZXR1cm4gdHJhbnNmb3JtO1xuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmVlKSB7XG4gICAgdmlzaXQodHJlZSwgZmlsdGVyKTtcbiAgICByZXR1cm4gdHJlZTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cblxuXG4gIGZ1bmN0aW9uIGZpbHRlcihub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgaWYgKHBhcmVudCAmJiAhYWxsb3cobm9kZSwgaW5kZXgsIHBhcmVudCkpIHtcbiAgICAgIHZhciBwYXJhbWV0ZXJzID0gW2luZGV4LCAxXTtcblxuICAgICAgaWYgKG1vZGUgPT09ICd1bndyYXAnICYmIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMuY29uY2F0KG5vZGUuY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICBzcGxpY2UuYXBwbHkocGFyZW50LmNoaWxkcmVuLCBwYXJhbWV0ZXJzKTtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBOYWl2ZSwgc2ltcGxlIHBsdWdpbiB0byBtYXRjaCBpbmxpbmUgbm9kZXMgd2l0aG91dCBhdHRyaWJ1dGVzXG4gKiBUaGlzIGFsbG93cyBzYXkgPHN0cm9uZz5mb288L3N0cm9uZz4sIGJ1dCBub3QgPHN0cm9uZyBjbGFzcz1cInZlcnlcIj5mb288L3N0cm9uZz5cbiAqIEZvciBwcm9wZXIgSFRNTCBzdXBwb3J0LCB5b3UnbGwgd2FudCBhIGRpZmZlcmVudCBwbHVnaW5cbiAqKi9cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKTtcblxudmFyIHR5cGUgPSAndmlydHVhbEh0bWwnO1xudmFyIHNlbGZDbG9zaW5nUmUgPSAvXjwoYXJlYXxiYXNlfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8a2V5Z2VufGxpbmt8bWV0YXxwYXJhbXxzb3VyY2V8dHJhY2t8d2JyKVxccypcXC8/PiQvaTtcbnZhciBzaW1wbGVUYWdSZSA9IC9ePChcXC8/KShbYS16XSspXFxzKj4kLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHJlZSkge1xuICB2YXIgb3BlbjtcbiAgdmFyIGN1cnJlbnRQYXJlbnQ7XG4gIHZpc2l0KHRyZWUsICdodG1sJywgZnVuY3Rpb24gKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgICBpZiAoY3VycmVudFBhcmVudCAhPT0gcGFyZW50KSB7XG4gICAgICBvcGVuID0gW107XG4gICAgICBjdXJyZW50UGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIHZhciBzZWxmQ2xvc2luZyA9IGdldFNlbGZDbG9zaW5nKG5vZGUpO1xuXG4gICAgaWYgKHNlbGZDbG9zaW5nKSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxLCB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHRhZzogc2VsZkNsb3NpbmcsXG4gICAgICAgIHBvc2l0aW9uOiBub2RlLnBvc2l0aW9uXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50ID0gZ2V0U2ltcGxlVGFnKG5vZGUsIHBhcmVudCk7XG5cbiAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGluZyA9IGZpbmRBbmRQdWxsKG9wZW4sIGN1cnJlbnQudGFnKTtcblxuICAgIGlmIChtYXRjaGluZykge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgdmlydHVhbChjdXJyZW50LCBtYXRjaGluZywgcGFyZW50KSk7XG4gICAgfSBlbHNlIGlmICghY3VycmVudC5vcGVuaW5nKSB7XG4gICAgICBvcGVuLnB1c2goY3VycmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sIHRydWUgLy8gSXRlcmF0ZSBpbiByZXZlcnNlXG4gICk7XG4gIHJldHVybiB0cmVlO1xufTtcblxuZnVuY3Rpb24gZmluZEFuZFB1bGwob3BlbiwgbWF0Y2hpbmdUYWcpIHtcbiAgdmFyIGkgPSBvcGVuLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKG9wZW5baV0udGFnID09PSBtYXRjaGluZ1RhZykge1xuICAgICAgcmV0dXJuIG9wZW4uc3BsaWNlKGksIDEpWzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0U2ltcGxlVGFnKG5vZGUsIHBhcmVudCkge1xuICB2YXIgbWF0Y2ggPSBub2RlLnZhbHVlLm1hdGNoKHNpbXBsZVRhZ1JlKTtcbiAgcmV0dXJuIG1hdGNoID8ge1xuICAgIHRhZzogbWF0Y2hbMl0sXG4gICAgb3BlbmluZzogIW1hdGNoWzFdLFxuICAgIG5vZGU6IG5vZGVcbiAgfSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRTZWxmQ2xvc2luZyhub2RlKSB7XG4gIHZhciBtYXRjaCA9IG5vZGUudmFsdWUubWF0Y2goc2VsZkNsb3NpbmdSZSk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHZpcnR1YWwoZnJvbU5vZGUsIHRvTm9kZSwgcGFyZW50KSB7XG4gIHZhciBmcm9tSW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihmcm9tTm9kZS5ub2RlKTtcbiAgdmFyIHRvSW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0b05vZGUubm9kZSk7XG4gIHZhciBleHRyYWN0ZWQgPSBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGZyb21JbmRleCwgdG9JbmRleCAtIGZyb21JbmRleCArIDEpO1xuICB2YXIgY2hpbGRyZW4gPSBleHRyYWN0ZWQuc2xpY2UoMSwgLTEpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIHRhZzogZnJvbU5vZGUudGFnLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICBzdGFydDogZnJvbU5vZGUubm9kZS5wb3NpdGlvbi5zdGFydCxcbiAgICAgIGVuZDogdG9Ob2RlLm5vZGUucG9zaXRpb24uZW5kLFxuICAgICAgaW5kZW50OiBbXVxuICAgIH1cbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciB1bmlmaWVkID0gcmVxdWlyZSgndW5pZmllZCcpO1xuXG52YXIgcGFyc2UgPSByZXF1aXJlKCdyZW1hcmstcGFyc2UnKTtcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIGFkZExpc3RNZXRhZGF0YSA9IHJlcXVpcmUoJ21kYXN0LWFkZC1saXN0LW1ldGFkYXRhJyk7XG5cbnZhciBuYWl2ZUh0bWwgPSByZXF1aXJlKCcuL3BsdWdpbnMvbmFpdmUtaHRtbCcpO1xuXG52YXIgZGlzYWxsb3dOb2RlID0gcmVxdWlyZSgnLi9wbHVnaW5zL2Rpc2FsbG93LW5vZGUnKTtcblxudmFyIGFzdFRvUmVhY3QgPSByZXF1aXJlKCcuL2FzdC10by1yZWFjdCcpO1xuXG52YXIgd3JhcFRhYmxlUm93cyA9IHJlcXVpcmUoJy4vd3JhcC10YWJsZS1yb3dzJyk7XG5cbnZhciBnZXREZWZpbml0aW9ucyA9IHJlcXVpcmUoJy4vZ2V0LWRlZmluaXRpb25zJyk7XG5cbnZhciB1cmlUcmFuc2Zvcm1lciA9IHJlcXVpcmUoJy4vdXJpLXRyYW5zZm9ybWVyJyk7XG5cbnZhciBkZWZhdWx0UmVuZGVyZXJzID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMnKTtcblxudmFyIHN5bWJvbHMgPSByZXF1aXJlKCcuL3N5bWJvbHMnKTtcblxudmFyIGFsbFR5cGVzID0gT2JqZWN0LmtleXMoZGVmYXVsdFJlbmRlcmVycyk7XG5cbnZhciBSZWFjdE1hcmtkb3duID0gZnVuY3Rpb24gUmVhY3RNYXJrZG93bihwcm9wcykge1xuICAvLyBUbyBkbyBpbiBuZXh0IG1ham9yOiByZW1vdmUgYHNvdXJjZWAuXG4gIHZhciBzcmMgPSBwcm9wcy5zb3VyY2UgfHwgcHJvcHMuY2hpbGRyZW4gfHwgJyc7XG5cbiAgaWYgKHByb3BzLmFsbG93ZWRUeXBlcyAmJiBwcm9wcy5kaXNhbGxvd2VkVHlwZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgb25lIG9mIGBhbGxvd2VkVHlwZXNgIGFuZCBgZGlzYWxsb3dlZFR5cGVzYCBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHJlbmRlcmVycyA9IHh0ZW5kKGRlZmF1bHRSZW5kZXJlcnMsIHByb3BzLnJlbmRlcmVycyk7XG4gIHZhciBwcm9jZXNzb3IgPSB1bmlmaWVkKCkudXNlKHBhcnNlKS51c2UocHJvcHMucGx1Z2lucyB8fCBbXSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zeW5jXG5cbiAgdmFyIHRyZWUgPSBwcm9jZXNzb3IucnVuU3luYyhwcm9jZXNzb3IucGFyc2Uoc3JjKSk7XG4gIHZhciByZW5kZXJQcm9wcyA9IHh0ZW5kKHByb3BzLCB7XG4gICAgcmVuZGVyZXJzOiByZW5kZXJlcnMsXG4gICAgZGVmaW5pdGlvbnM6IGdldERlZmluaXRpb25zKHRyZWUpXG4gIH0pO1xuICBkZXRlcm1pbmVBc3RUb1JlYWN0VHJhbnNmb3Jtcyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAodHJhbnNmb3JtKSB7XG4gICAgdHJlZSA9IHRyYW5zZm9ybSh0cmVlLCByZW5kZXJQcm9wcyk7XG4gIH0pO1xuICByZXR1cm4gdHJlZTtcbn07XG5cbmZ1bmN0aW9uIGRldGVybWluZUFzdFRvUmVhY3RUcmFuc2Zvcm1zKHByb3BzKSB7XG4gIHZhciB0cmFuc2Zvcm1zID0gW3dyYXBUYWJsZVJvd3MsIGFkZExpc3RNZXRhZGF0YSgpXTtcbiAgdmFyIGRpc2FsbG93ZWRUeXBlcyA9IHByb3BzLmRpc2FsbG93ZWRUeXBlcztcblxuICBpZiAocHJvcHMuYWxsb3dlZFR5cGVzKSB7XG4gICAgZGlzYWxsb3dlZFR5cGVzID0gYWxsVHlwZXMuZmlsdGVyKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICByZXR1cm4gdHlwZSAhPT0gJ3Jvb3QnICYmIHByb3BzLmFsbG93ZWRUeXBlcy5pbmRleE9mKHR5cGUpID09PSAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciByZW1vdmFsTWV0aG9kID0gcHJvcHMudW53cmFwRGlzYWxsb3dlZCA/ICd1bndyYXAnIDogJ3JlbW92ZSc7XG5cbiAgaWYgKGRpc2FsbG93ZWRUeXBlcyAmJiBkaXNhbGxvd2VkVHlwZXMubGVuZ3RoID4gMCkge1xuICAgIHRyYW5zZm9ybXMucHVzaChkaXNhbGxvd05vZGUub2ZUeXBlKGRpc2FsbG93ZWRUeXBlcywgcmVtb3ZhbE1ldGhvZCkpO1xuICB9XG5cbiAgaWYgKHByb3BzLmFsbG93Tm9kZSkge1xuICAgIHRyYW5zZm9ybXMucHVzaChkaXNhbGxvd05vZGUuaWZOb3RNYXRjaChwcm9wcy5hbGxvd05vZGUsIHJlbW92YWxNZXRob2QpKTtcbiAgfSAvLyBUbyBkbyBpbiBuZXh0IG1ham9yOiByZW1vdmUgYGVzY2FwZUh0bWxgLlxuXG5cbiAgdmFyIHJlbmRlckh0bWwgPSAocHJvcHMuYWxsb3dEYW5nZXJvdXNIdG1sIHx8IHByb3BzLmVzY2FwZUh0bWwgPT09IGZhbHNlKSAmJiAhcHJvcHMuc2tpcEh0bWw7XG4gIHZhciBoYXNIdG1sUGFyc2VyID0gKHByb3BzLmFzdFBsdWdpbnMgfHwgW10pLnNvbWUoZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuICAgIHJldHVybiB0cmFuc2Zvcm0uaWRlbnRpdHkgPT09IHN5bWJvbHMuSHRtbFBhcnNlcjtcbiAgfSk7XG5cbiAgaWYgKHJlbmRlckh0bWwgJiYgIWhhc0h0bWxQYXJzZXIpIHtcbiAgICB0cmFuc2Zvcm1zLnB1c2gobmFpdmVIdG1sKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5hc3RQbHVnaW5zKSB7XG4gICAgdHJhbnNmb3JtcyA9IHRyYW5zZm9ybXMuY29uY2F0KHByb3BzLmFzdFBsdWdpbnMpO1xuICB9IC8vIEFkZCB0aGUgZmluYWwgdHJhbnNmb3JtIHRvIHR1cm4gZXZlcnl0aGluZyBpbnRvIFJlYWN0LlxuXG5cbiAgdHJhbnNmb3Jtcy5wdXNoKGFzdFRvUmVhY3QpO1xuICByZXR1cm4gdHJhbnNmb3Jtcztcbn1cblxuUmVhY3RNYXJrZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYW5zZm9ybUxpbmtVcmk6IHVyaVRyYW5zZm9ybWVyXG59O1xuUmVhY3RNYXJrZG93bi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc291cmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc291cmNlUG9zOiBQcm9wVHlwZXMuYm9vbCxcbiAgcmF3U291cmNlUG9zOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXNjYXBlSHRtbDogUHJvcFR5cGVzLmJvb2wsXG4gIGFsbG93RGFuZ2Vyb3VzSHRtbDogUHJvcFR5cGVzLmJvb2wsXG4gIHNraXBIdG1sOiBQcm9wVHlwZXMuYm9vbCxcbiAgYWxsb3dOb2RlOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWxsb3dlZFR5cGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2YoYWxsVHlwZXMpKSxcbiAgZGlzYWxsb3dlZFR5cGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2YoYWxsVHlwZXMpKSxcbiAgdHJhbnNmb3JtTGlua1VyaTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ib29sXSksXG4gIGxpbmtUYXJnZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHRyYW5zZm9ybUltYWdlVXJpOiBQcm9wVHlwZXMuZnVuYyxcbiAgYXN0UGx1Z2luczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmZ1bmMpLFxuICB1bndyYXBEaXNhbGxvd2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcmVuZGVyZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwbHVnaW5zOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5SZWFjdE1hcmtkb3duLnR5cGVzID0gYWxsVHlwZXM7XG5SZWFjdE1hcmtkb3duLnJlbmRlcmVycyA9IGRlZmF1bHRSZW5kZXJlcnM7XG5SZWFjdE1hcmtkb3duLnVyaVRyYW5zZm9ybWVyID0gdXJpVHJhbnNmb3JtZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0TWFya2Rvd247IiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcywgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBEb27igJl0IGNyYXNoIG9uIG9sZCBSZWFjdC4gKi9cblxuXG52YXIgc3VwcG9ydHNTdHJpbmdSZW5kZXIgPSBwYXJzZUludCgoUmVhY3QudmVyc2lvbiB8fCAnMTYnKS5zbGljZSgwLCAyKSwgMTApID49IDE2O1xudmFyIGNyZWF0ZUVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJyZWFrOiAnYnInLFxuICBwYXJhZ3JhcGg6ICdwJyxcbiAgZW1waGFzaXM6ICdlbScsXG4gIHN0cm9uZzogJ3N0cm9uZycsXG4gIHRoZW1hdGljQnJlYWs6ICdocicsXG4gIGJsb2NrcXVvdGU6ICdibG9ja3F1b3RlJyxcbiAgZGVsZXRlOiAnZGVsJyxcbiAgbGluazogJ2EnLFxuICBpbWFnZTogJ2ltZycsXG4gIGxpbmtSZWZlcmVuY2U6ICdhJyxcbiAgaW1hZ2VSZWZlcmVuY2U6ICdpbWcnLFxuICB0YWJsZTogU2ltcGxlUmVuZGVyZXIuYmluZChudWxsLCAndGFibGUnKSxcbiAgdGFibGVIZWFkOiBTaW1wbGVSZW5kZXJlci5iaW5kKG51bGwsICd0aGVhZCcpLFxuICB0YWJsZUJvZHk6IFNpbXBsZVJlbmRlcmVyLmJpbmQobnVsbCwgJ3Rib2R5JyksXG4gIHRhYmxlUm93OiBTaW1wbGVSZW5kZXJlci5iaW5kKG51bGwsICd0cicpLFxuICB0YWJsZUNlbGw6IFRhYmxlQ2VsbCxcbiAgcm9vdDogUm9vdCxcbiAgdGV4dDogVGV4dFJlbmRlcmVyLFxuICBsaXN0OiBMaXN0LFxuICBsaXN0SXRlbTogTGlzdEl0ZW0sXG4gIGRlZmluaXRpb246IE51bGxSZW5kZXJlcixcbiAgaGVhZGluZzogSGVhZGluZyxcbiAgaW5saW5lQ29kZTogSW5saW5lQ29kZSxcbiAgY29kZTogQ29kZUJsb2NrLFxuICBodG1sOiBIdG1sLFxuICB2aXJ0dWFsSHRtbDogVmlydHVhbEh0bWwsXG4gIHBhcnNlZEh0bWw6IFBhcnNlZEh0bWxcbn07XG5cbmZ1bmN0aW9uIFRleHRSZW5kZXJlcihwcm9wcykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGEgdGV4dCBub2RlIHcvbyBhIHZhbHVlIGNvdWxkIGJlIGluamVjdGVkIGJ5IHBsdWdpbnMgKi9cbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4gfHwgJyc7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gYHNwYW5gIGlzIGEgZmFsbGJhY2sgZm9yIG9sZCBSZWFjdC4gKi9cblxuICByZXR1cm4gc3VwcG9ydHNTdHJpbmdSZW5kZXIgPyBjaGlsZHJlbiA6IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBudWxsLCBjaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIFJvb3QocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgdmFyIHJvb3QgPSAhY2xhc3NOYW1lICYmIFJlYWN0LkZyYWdtZW50IHx8ICdkaXYnO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChyb290LCBjbGFzc05hbWUgPyB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSA6IG51bGwsIHByb3BzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gU2ltcGxlUmVuZGVyZXIodGFnLCBwcm9wcykge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCh0YWcsIGdldENvcmVQcm9wcyhwcm9wcyksIHByb3BzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gVGFibGVDZWxsKHByb3BzKSB7XG4gIHZhciBzdHlsZSA9IHByb3BzLmFsaWduID8ge1xuICAgIHRleHRBbGlnbjogcHJvcHMuYWxpZ25cbiAgfSA6IHVuZGVmaW5lZDtcbiAgdmFyIGNvcmVQcm9wcyA9IGdldENvcmVQcm9wcyhwcm9wcyk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KHByb3BzLmlzSGVhZGVyID8gJ3RoJyA6ICd0ZCcsIHN0eWxlID8geHRlbmQoe1xuICAgIHN0eWxlOiBzdHlsZVxuICB9LCBjb3JlUHJvcHMpIDogY29yZVByb3BzLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIEhlYWRpbmcocHJvcHMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJoXCIuY29uY2F0KHByb3BzLmxldmVsKSwgZ2V0Q29yZVByb3BzKHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gIHZhciBhdHRycyA9IGdldENvcmVQcm9wcyhwcm9wcyk7XG5cbiAgaWYgKHByb3BzLnN0YXJ0ICE9PSBudWxsICYmIHByb3BzLnN0YXJ0ICE9PSAxICYmIHByb3BzLnN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBhdHRycy5zdGFydCA9IHByb3BzLnN0YXJ0LnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChwcm9wcy5vcmRlcmVkID8gJ29sJyA6ICd1bCcsIGF0dHJzLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIExpc3RJdGVtKHByb3BzKSB7XG4gIHZhciBjaGVja2JveCA9IG51bGw7XG5cbiAgaWYgKHByb3BzLmNoZWNrZWQgIT09IG51bGwgJiYgcHJvcHMuY2hlY2tlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGNoZWNrZWQgPSBwcm9wcy5jaGVja2VkO1xuICAgIGNoZWNrYm94ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgIHJlYWRPbmx5OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLCBnZXRDb3JlUHJvcHMocHJvcHMpLCBjaGVja2JveCwgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBDb2RlQmxvY2socHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmxhbmd1YWdlICYmIFwibGFuZ3VhZ2UtXCIuY29uY2F0KHByb3BzLmxhbmd1YWdlKTtcbiAgdmFyIGNvZGUgPSBjcmVhdGVFbGVtZW50KCdjb2RlJywgY2xhc3NOYW1lID8ge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0gOiBudWxsLCBwcm9wcy52YWx1ZSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdwcmUnLCBnZXRDb3JlUHJvcHMocHJvcHMpLCBjb2RlKTtcbn1cblxuZnVuY3Rpb24gSW5saW5lQ29kZShwcm9wcykge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnY29kZScsIGdldENvcmVQcm9wcyhwcm9wcyksIHByb3BzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gSHRtbChwcm9wcykge1xuICBpZiAocHJvcHMuc2tpcEh0bWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBkYW5nZXJvdXMgPSBwcm9wcy5hbGxvd0Rhbmdlcm91c0h0bWwgfHwgcHJvcHMuZXNjYXBlSHRtbCA9PT0gZmFsc2U7XG4gIHZhciB0YWcgPSBwcm9wcy5pc0Jsb2NrID8gJ2RpdicgOiAnc3Bhbic7XG5cbiAgaWYgKCFkYW5nZXJvdXMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGB0YWdgIGlzIGEgZmFsbGJhY2sgZm9yIG9sZCBSZWFjdC4gKi9cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCB8fCB0YWcsIG51bGwsIHByb3BzLnZhbHVlKTtcbiAgfVxuXG4gIHZhciBub2RlUHJvcHMgPSB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogcHJvcHMudmFsdWVcbiAgICB9XG4gIH07XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KHRhZywgbm9kZVByb3BzKTtcbn1cblxuZnVuY3Rpb24gUGFyc2VkSHRtbChwcm9wcykge1xuICAvKiBUbyBkbzogYFJlYWN0LmNsb25lRWxlbWVudGAgaXMgc2xvdywgaXMgaXQgcmVhbGx5IG5lZWRlZD8gKi9cbiAgcmV0dXJuIHByb3BzWydkYXRhLXNvdXJjZXBvcyddID8gUmVhY3QuY2xvbmVFbGVtZW50KHByb3BzLmVsZW1lbnQsIHtcbiAgICAnZGF0YS1zb3VyY2Vwb3MnOiBwcm9wc1snZGF0YS1zb3VyY2Vwb3MnXVxuICB9KSA6IHByb3BzLmVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIFZpcnR1YWxIdG1sKHByb3BzKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KHByb3BzLnRhZywgZ2V0Q29yZVByb3BzKHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBOdWxsUmVuZGVyZXIoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRDb3JlUHJvcHMocHJvcHMpIHtcbiAgdmFyIHNvdXJjZSA9IHByb3BzWydkYXRhLXNvdXJjZXBvcyddO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIG5vZGVzIGZyb20gcGx1Z2lucyB3L28gcG9zaXRpb24gKi9cblxuICByZXR1cm4gc291cmNlID8ge1xuICAgICdkYXRhLXNvdXJjZXBvcyc6IHNvdXJjZVxuICB9IDoge307XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBIdG1sUGFyc2VyID0gJ19fUk1EX0hUTUxfUEFSU0VSX18nO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBGYWxsYmFjayBmb3IgYFN5bWJvbGAuICovXG5cbmV4cG9ydHMuSHRtbFBhcnNlciA9IHR5cGVvZiBTeW1ib2wgPT09ICd1bmRlZmluZWQnID8gSHRtbFBhcnNlciA6IFN5bWJvbChIdG1sUGFyc2VyKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHByb3RvY29scyA9IFsnaHR0cCcsICdodHRwcycsICdtYWlsdG8nLCAndGVsJ107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXJpVHJhbnNmb3JtZXIodXJpKSB7XG4gIHZhciB1cmwgPSAodXJpIHx8ICcnKS50cmltKCk7XG4gIHZhciBmaXJzdCA9IHVybC5jaGFyQXQoMCk7XG5cbiAgaWYgKGZpcnN0ID09PSAnIycgfHwgZmlyc3QgPT09ICcvJykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgY29sb24gPSB1cmwuaW5kZXhPZignOicpO1xuXG4gIGlmIChjb2xvbiA9PT0gLTEpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IHByb3RvY29scy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IC0xO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHByb3RvY29sID0gcHJvdG9jb2xzW2luZGV4XTtcblxuICAgIGlmIChjb2xvbiA9PT0gcHJvdG9jb2wubGVuZ3RoICYmIHVybC5zbGljZSgwLCBwcm90b2NvbC5sZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IHByb3RvY29sKSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgfVxuXG4gIGluZGV4ID0gdXJsLmluZGV4T2YoJz8nKTtcblxuICBpZiAoaW5kZXggIT09IC0xICYmIGNvbG9uID4gaW5kZXgpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgaW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuXG4gIGlmIChpbmRleCAhPT0gLTEgJiYgY29sb24gPiBpbmRleCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNjcmlwdC11cmxcblxuXG4gIHJldHVybiAnamF2YXNjcmlwdDp2b2lkKDApJztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmlzaXQobm9kZSwgJ3RhYmxlJywgd3JhcCk7XG4gIHJldHVybiBub2RlO1xufTtcblxuZnVuY3Rpb24gd3JhcCh0YWJsZSkge1xuICB2YXIgY2hpbGRyZW4gPSB0YWJsZS5jaGlsZHJlbjtcbiAgdGFibGUuY2hpbGRyZW4gPSBbe1xuICAgIHR5cGU6ICd0YWJsZUhlYWQnLFxuICAgIGFsaWduOiB0YWJsZS5hbGlnbixcbiAgICBjaGlsZHJlbjogW2NoaWxkcmVuWzBdXSxcbiAgICBwb3NpdGlvbjogY2hpbGRyZW5bMF0ucG9zaXRpb25cbiAgfV07XG5cbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICB0YWJsZS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgIHR5cGU6ICd0YWJsZUJvZHknLFxuICAgICAgYWxpZ246IHRhYmxlLmFsaWduLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLnNsaWNlKDEpLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgc3RhcnQ6IGNoaWxkcmVuWzFdLnBvc2l0aW9uLnN0YXJ0LFxuICAgICAgICBlbmQ6IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdLnBvc2l0aW9uLmVuZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcblxudmFyIGZyb21NYXJrZG93biA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpXG5cbmZ1bmN0aW9uIHBhcnNlKG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgdGhpcy5QYXJzZXIgPSBwYXJzZVxuXG4gIGZ1bmN0aW9uIHBhcnNlKGRvYykge1xuICAgIHJldHVybiBmcm9tTWFya2Rvd24oXG4gICAgICBkb2MsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBzZWxmLmRhdGEoJ3NldHRpbmdzJyksIG9wdGlvbnMsIHtcbiAgICAgICAgLy8gTm90ZTogdGhlc2Ugb3B0aW9ucyBhcmUgbm90IGluIHRoZSByZWFkbWUuXG4gICAgICAgIC8vIFRoZSBnb2FsIGlzIGZvciB0aGVtIHRvIGJlIHNldCBieSBwbHVnaW5zIG9uIGBkYXRhYCBpbnN0ZWFkIG9mIGJlaW5nXG4gICAgICAgIC8vIHBhc3NlZCBieSB1c2Vycy5cbiAgICAgICAgZXh0ZW5zaW9uczogc2VsZi5kYXRhKCdtaWNyb21hcmtFeHRlbnNpb25zJykgfHwgW10sXG4gICAgICAgIG1kYXN0RXh0ZW5zaW9uczogc2VsZi5kYXRhKCdmcm9tTWFya2Rvd25FeHRlbnNpb25zJykgfHwgW11cbiAgICAgIH0pXG4gICAgKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuL3dyYXAuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyb3VnaFxuXG50cm91Z2gud3JhcCA9IHdyYXBcblxudmFyIHNsaWNlID0gW10uc2xpY2VcblxuLy8gQ3JlYXRlIG5ldyBtaWRkbGV3YXJlLlxuZnVuY3Rpb24gdHJvdWdoKCkge1xuICB2YXIgZm5zID0gW11cbiAgdmFyIG1pZGRsZXdhcmUgPSB7fVxuXG4gIG1pZGRsZXdhcmUucnVuID0gcnVuXG4gIG1pZGRsZXdhcmUudXNlID0gdXNlXG5cbiAgcmV0dXJuIG1pZGRsZXdhcmVcblxuICAvLyBSdW4gYGZuc2AuICBMYXN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wbGV0aW9uIGhhbmRsZXIuXG4gIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBpbnB1dCA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCAtMSlcbiAgICB2YXIgZG9uZSA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV1cblxuICAgIGlmICh0eXBlb2YgZG9uZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiBhcyBsYXN0IGFyZ3VtZW50LCBub3QgJyArIGRvbmUpXG4gICAgfVxuXG4gICAgbmV4dC5hcHBseShudWxsLCBbbnVsbF0uY29uY2F0KGlucHV0KSlcblxuICAgIC8vIFJ1biB0aGUgbmV4dCBgZm5gLCBpZiBhbnkuXG4gICAgZnVuY3Rpb24gbmV4dChlcnIpIHtcbiAgICAgIHZhciBmbiA9IGZuc1srK2luZGV4XVxuICAgICAgdmFyIHBhcmFtcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuICAgICAgdmFyIHZhbHVlcyA9IHBhcmFtcy5zbGljZSgxKVxuICAgICAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aFxuICAgICAgdmFyIHBvcyA9IC0xXG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZG9uZShlcnIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBDb3B5IG5vbi1udWxseSBpbnB1dCBpbnRvIHZhbHVlcy5cbiAgICAgIHdoaWxlICgrK3BvcyA8IGxlbmd0aCkge1xuICAgICAgICBpZiAodmFsdWVzW3Bvc10gPT09IG51bGwgfHwgdmFsdWVzW3Bvc10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbHVlc1twb3NdID0gaW5wdXRbcG9zXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlucHV0ID0gdmFsdWVzXG5cbiAgICAgIC8vIE5leHQgb3IgZG9uZS5cbiAgICAgIGlmIChmbikge1xuICAgICAgICB3cmFwKGZuLCBuZXh0KS5hcHBseShudWxsLCBpbnB1dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUuYXBwbHkobnVsbCwgW251bGxdLmNvbmNhdChpbnB1dCkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGBmbmAgdG8gdGhlIGxpc3QuXG4gIGZ1bmN0aW9uIHVzZShmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYGZuYCB0byBiZSBhIGZ1bmN0aW9uLCBub3QgJyArIGZuKVxuICAgIH1cblxuICAgIGZucy5wdXNoKGZuKVxuXG4gICAgcmV0dXJuIG1pZGRsZXdhcmVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcFxuXG4vLyBXcmFwIGBmbmAuXG4vLyBDYW4gYmUgc3luYyBvciBhc3luYzsgcmV0dXJuIGEgcHJvbWlzZSwgcmVjZWl2ZSBhIGNvbXBsZXRpb24gaGFuZGxlciwgcmV0dXJuXG4vLyBuZXcgdmFsdWVzIGFuZCBlcnJvcnMuXG5mdW5jdGlvbiB3cmFwKGZuLCBjYWxsYmFjaykge1xuICB2YXIgaW52b2tlZFxuXG4gIHJldHVybiB3cmFwcGVkXG5cbiAgZnVuY3Rpb24gd3JhcHBlZCgpIHtcbiAgICB2YXIgcGFyYW1zID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgdmFyIGNhbGxiYWNrID0gZm4ubGVuZ3RoID4gcGFyYW1zLmxlbmd0aFxuICAgIHZhciByZXN1bHRcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcGFyYW1zLnB1c2goZG9uZSlcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gZm4uYXBwbHkobnVsbCwgcGFyYW1zKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBXZWxsLCB0aGlzIGlzIHF1aXRlIHRoZSBwaWNrbGUuXG4gICAgICAvLyBgZm5gIHJlY2VpdmVkIGEgY2FsbGJhY2sgYW5kIGludm9rZWQgaXQgKHRodXMgY29udGludWluZyB0aGUgcGlwZWxpbmUpLFxuICAgICAgLy8gYnV0IGxhdGVyIGFsc28gdGhyZXcgYW4gZXJyb3IuXG4gICAgICAvLyBXZeKAmXJlIG5vdCBhYm91dCB0byByZXN0YXJ0IHRoZSBwaXBlbGluZSBhZ2Fpbiwgc28gdGhlIG9ubHkgdGhpbmcgbGVmdFxuICAgICAgLy8gdG8gZG8gaXMgdG8gdGhyb3cgdGhlIHRoaW5nIGluc3RlYWQuXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaW52b2tlZCkge1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZG9uZShlcnJvcilcbiAgICB9XG5cbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHQudGhlbih0aGVuLCBkb25lKVxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBkb25lKHJlc3VsdClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW4ocmVzdWx0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEludm9rZSBgbmV4dGAsIG9ubHkgb25jZS5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpZiAoIWludm9rZWQpIHtcbiAgICAgIGludm9rZWQgPSB0cnVlXG5cbiAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cblxuICAvLyBJbnZva2UgYGRvbmVgIHdpdGggb25lIHZhbHVlLlxuICAvLyBUcmFja3MgaWYgYW4gZXJyb3IgaXMgcGFzc2VkLCB0b28uXG4gIGZ1bmN0aW9uIHRoZW4odmFsdWUpIHtcbiAgICBkb25lKG51bGwsIHZhbHVlKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGJhaWwgPSByZXF1aXJlKCdiYWlsJylcbnZhciBidWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKVxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpXG52YXIgcGxhaW4gPSByZXF1aXJlKCdpcy1wbGFpbi1vYmonKVxudmFyIHRyb3VnaCA9IHJlcXVpcmUoJ3Ryb3VnaCcpXG52YXIgdmZpbGUgPSByZXF1aXJlKCd2ZmlsZScpXG5cbi8vIEV4cG9zZSBhIGZyb3plbiBwcm9jZXNzb3IuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWZpZWQoKS5mcmVlemUoKVxuXG52YXIgc2xpY2UgPSBbXS5zbGljZVxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIFByb2Nlc3MgcGlwZWxpbmUuXG52YXIgcGlwZWxpbmUgPSB0cm91Z2goKVxuICAudXNlKHBpcGVsaW5lUGFyc2UpXG4gIC51c2UocGlwZWxpbmVSdW4pXG4gIC51c2UocGlwZWxpbmVTdHJpbmdpZnkpXG5cbmZ1bmN0aW9uIHBpcGVsaW5lUGFyc2UocCwgY3R4KSB7XG4gIGN0eC50cmVlID0gcC5wYXJzZShjdHguZmlsZSlcbn1cblxuZnVuY3Rpb24gcGlwZWxpbmVSdW4ocCwgY3R4LCBuZXh0KSB7XG4gIHAucnVuKGN0eC50cmVlLCBjdHguZmlsZSwgZG9uZSlcblxuICBmdW5jdGlvbiBkb25lKGVycm9yLCB0cmVlLCBmaWxlKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBuZXh0KGVycm9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBjdHgudHJlZSA9IHRyZWVcbiAgICAgIGN0eC5maWxlID0gZmlsZVxuICAgICAgbmV4dCgpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBpcGVsaW5lU3RyaW5naWZ5KHAsIGN0eCkge1xuICB2YXIgcmVzdWx0ID0gcC5zdHJpbmdpZnkoY3R4LnRyZWUsIGN0eC5maWxlKVxuXG4gIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCB8fCByZXN1bHQgPT09IG51bGwpIHtcbiAgICAvLyBFbXB0eS5cbiAgfSBlbHNlIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJyB8fCBidWZmZXIocmVzdWx0KSkge1xuICAgIGN0eC5maWxlLmNvbnRlbnRzID0gcmVzdWx0XG4gIH0gZWxzZSB7XG4gICAgY3R4LmZpbGUucmVzdWx0ID0gcmVzdWx0XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmaXJzdCBwcm9jZXNzb3IuXG5mdW5jdGlvbiB1bmlmaWVkKCkge1xuICB2YXIgYXR0YWNoZXJzID0gW11cbiAgdmFyIHRyYW5zZm9ybWVycyA9IHRyb3VnaCgpXG4gIHZhciBuYW1lc3BhY2UgPSB7fVxuICB2YXIgZnJlZXplSW5kZXggPSAtMVxuICB2YXIgZnJvemVuXG5cbiAgLy8gRGF0YSBtYW5hZ2VtZW50LlxuICBwcm9jZXNzb3IuZGF0YSA9IGRhdGFcblxuICAvLyBMb2NrLlxuICBwcm9jZXNzb3IuZnJlZXplID0gZnJlZXplXG5cbiAgLy8gUGx1Z2lucy5cbiAgcHJvY2Vzc29yLmF0dGFjaGVycyA9IGF0dGFjaGVyc1xuICBwcm9jZXNzb3IudXNlID0gdXNlXG5cbiAgLy8gQVBJLlxuICBwcm9jZXNzb3IucGFyc2UgPSBwYXJzZVxuICBwcm9jZXNzb3Iuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG4gIHByb2Nlc3Nvci5ydW4gPSBydW5cbiAgcHJvY2Vzc29yLnJ1blN5bmMgPSBydW5TeW5jXG4gIHByb2Nlc3Nvci5wcm9jZXNzID0gcHJvY2Vzc1xuICBwcm9jZXNzb3IucHJvY2Vzc1N5bmMgPSBwcm9jZXNzU3luY1xuXG4gIC8vIEV4cG9zZS5cbiAgcmV0dXJuIHByb2Nlc3NvclxuXG4gIC8vIENyZWF0ZSBhIG5ldyBwcm9jZXNzb3IgYmFzZWQgb24gdGhlIHByb2Nlc3NvciBpbiB0aGUgY3VycmVudCBzY29wZS5cbiAgZnVuY3Rpb24gcHJvY2Vzc29yKCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHVuaWZpZWQoKVxuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGF0dGFjaGVycy5sZW5ndGgpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnVzZS5hcHBseShudWxsLCBhdHRhY2hlcnNbaW5kZXhdKVxuICAgIH1cblxuICAgIGRlc3RpbmF0aW9uLmRhdGEoZXh0ZW5kKHRydWUsIHt9LCBuYW1lc3BhY2UpKVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG4gIH1cblxuICAvLyBGcmVlemU6IHVzZWQgdG8gc2lnbmFsIGEgcHJvY2Vzc29yIHRoYXQgaGFzIGZpbmlzaGVkIGNvbmZpZ3VyYXRpb24uXG4gIC8vXG4gIC8vIEZvciBleGFtcGxlLCB0YWtlIHVuaWZpZWQgaXRzZWxmOiBpdOKAmXMgZnJvemVuLlxuICAvLyBQbHVnaW5zIHNob3VsZCBub3QgYmUgYWRkZWQgdG8gaXQuXG4gIC8vIFJhdGhlciwgaXQgc2hvdWxkIGJlIGV4dGVuZGVkLCBieSBpbnZva2luZyBpdCwgYmVmb3JlIG1vZGlmeWluZyBpdC5cbiAgLy9cbiAgLy8gSW4gZXNzZW5jZSwgYWx3YXlzIGludm9rZSB0aGlzIHdoZW4gZXhwb3J0aW5nIGEgcHJvY2Vzc29yLlxuICBmdW5jdGlvbiBmcmVlemUoKSB7XG4gICAgdmFyIHZhbHVlc1xuICAgIHZhciB0cmFuc2Zvcm1lclxuXG4gICAgaWYgKGZyb3plbikge1xuICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgIH1cblxuICAgIHdoaWxlICgrK2ZyZWV6ZUluZGV4IDwgYXR0YWNoZXJzLmxlbmd0aCkge1xuICAgICAgdmFsdWVzID0gYXR0YWNoZXJzW2ZyZWV6ZUluZGV4XVxuXG4gICAgICBpZiAodmFsdWVzWzFdID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzWzFdID09PSB0cnVlKSB7XG4gICAgICAgIHZhbHVlc1sxXSA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICB0cmFuc2Zvcm1lciA9IHZhbHVlc1swXS5hcHBseShwcm9jZXNzb3IsIHZhbHVlcy5zbGljZSgxKSlcblxuICAgICAgaWYgKHR5cGVvZiB0cmFuc2Zvcm1lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cmFuc2Zvcm1lcnMudXNlKHRyYW5zZm9ybWVyKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZyb3plbiA9IHRydWVcbiAgICBmcmVlemVJbmRleCA9IEluZmluaXR5XG5cbiAgICByZXR1cm4gcHJvY2Vzc29yXG4gIH1cblxuICAvLyBEYXRhIG1hbmFnZW1lbnQuXG4gIC8vIEdldHRlciAvIHNldHRlciBmb3IgcHJvY2Vzc29yLXNwZWNpZmljIGluZm9ybXRpb24uXG4gIGZ1bmN0aW9uIGRhdGEoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gU2V0IGBrZXlgLlxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgYXNzZXJ0VW5mcm96ZW4oJ2RhdGEnLCBmcm96ZW4pXG4gICAgICAgIG5hbWVzcGFjZVtrZXldID0gdmFsdWVcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgICAgfVxuXG4gICAgICAvLyBHZXQgYGtleWAuXG4gICAgICByZXR1cm4gKG93bi5jYWxsKG5hbWVzcGFjZSwga2V5KSAmJiBuYW1lc3BhY2Vba2V5XSkgfHwgbnVsbFxuICAgIH1cblxuICAgIC8vIFNldCBzcGFjZS5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcbiAgICAgIG5hbWVzcGFjZSA9IGtleVxuICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgIH1cblxuICAgIC8vIEdldCBzcGFjZS5cbiAgICByZXR1cm4gbmFtZXNwYWNlXG4gIH1cblxuICAvLyBQbHVnaW4gbWFuYWdlbWVudC5cbiAgLy9cbiAgLy8gUGFzcyBpdDpcbiAgLy8gKiAgIGFuIGF0dGFjaGVyIGFuZCBvcHRpb25zLFxuICAvLyAqICAgYSBwcmVzZXQsXG4gIC8vICogICBhIGxpc3Qgb2YgcHJlc2V0cywgYXR0YWNoZXJzLCBhbmQgYXJndW1lbnRzIChsaXN0IG9mIGF0dGFjaGVycyBhbmRcbiAgLy8gICAgIG9wdGlvbnMpLlxuICBmdW5jdGlvbiB1c2UodmFsdWUpIHtcbiAgICB2YXIgc2V0dGluZ3NcblxuICAgIGFzc2VydFVuZnJvemVuKCd1c2UnLCBmcm96ZW4pXG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRW1wdHkuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFkZFBsdWdpbi5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgYWRkTGlzdCh2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgbmFtZXNwYWNlLnNldHRpbmdzID0gZXh0ZW5kKG5hbWVzcGFjZS5zZXR0aW5ncyB8fCB7fSwgc2V0dGluZ3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NvclxuXG4gICAgZnVuY3Rpb24gYWRkUHJlc2V0KHJlc3VsdCkge1xuICAgICAgYWRkTGlzdChyZXN1bHQucGx1Z2lucylcblxuICAgICAgaWYgKHJlc3VsdC5zZXR0aW5ncykge1xuICAgICAgICBzZXR0aW5ncyA9IGV4dGVuZChzZXR0aW5ncyB8fCB7fSwgcmVzdWx0LnNldHRpbmdzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhZGRQbHVnaW4odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgICAgYWRkUGx1Z2luLmFwcGx5KG51bGwsIHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZExpc3QocGx1Z2lucykge1xuICAgICAgdmFyIGluZGV4ID0gLTFcblxuICAgICAgaWYgKHBsdWdpbnMgPT09IG51bGwgfHwgcGx1Z2lucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIEVtcHR5LlxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gcGx1Z2lucykge1xuICAgICAgICB3aGlsZSAoKytpbmRleCA8IHBsdWdpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgYWRkKHBsdWdpbnNbaW5kZXhdKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgbGlzdCBvZiBwbHVnaW5zLCBub3QgYCcgKyBwbHVnaW5zICsgJ2AnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBsdWdpbihwbHVnaW4sIHZhbHVlKSB7XG4gICAgICB2YXIgZW50cnkgPSBmaW5kKHBsdWdpbilcblxuICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmIChwbGFpbihlbnRyeVsxXSkgJiYgcGxhaW4odmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSBleHRlbmQodHJ1ZSwgZW50cnlbMV0sIHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgZW50cnlbMV0gPSB2YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0YWNoZXJzLnB1c2goc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQocGx1Z2luKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgYXR0YWNoZXJzLmxlbmd0aCkge1xuICAgICAgaWYgKGF0dGFjaGVyc1tpbmRleF1bMF0gPT09IHBsdWdpbikge1xuICAgICAgICByZXR1cm4gYXR0YWNoZXJzW2luZGV4XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIHZmaWxlIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgdW5pc3Qgbm9kZSB1c2luZ1xuICAvLyB0aGUgYFBhcnNlcmAgb24gdGhlIHByb2Nlc3Nvci5cbiAgZnVuY3Rpb24gcGFyc2UoZG9jKSB7XG4gICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG4gICAgdmFyIFBhcnNlclxuXG4gICAgZnJlZXplKClcbiAgICBQYXJzZXIgPSBwcm9jZXNzb3IuUGFyc2VyXG4gICAgYXNzZXJ0UGFyc2VyKCdwYXJzZScsIFBhcnNlcilcblxuICAgIGlmIChuZXdhYmxlKFBhcnNlciwgJ3BhcnNlJykpIHtcbiAgICAgIHJldHVybiBuZXcgUGFyc2VyKFN0cmluZyhmaWxlKSwgZmlsZSkucGFyc2UoKVxuICAgIH1cblxuICAgIHJldHVybiBQYXJzZXIoU3RyaW5nKGZpbGUpLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8vIFJ1biB0cmFuc2Zvcm1zIG9uIGEgdW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGUgKGluIHN0cmluZyBvclxuICAvLyB2ZmlsZSByZXByZXNlbnRhdGlvbiksIGFzeW5jLlxuICBmdW5jdGlvbiBydW4obm9kZSwgZmlsZSwgY2IpIHtcbiAgICBhc3NlcnROb2RlKG5vZGUpXG4gICAgZnJlZXplKClcblxuICAgIGlmICghY2IgJiYgdHlwZW9mIGZpbGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gZmlsZVxuICAgICAgZmlsZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRyYW5zZm9ybWVycy5ydW4obm9kZSwgdmZpbGUoZmlsZSksIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyb3IsIHRyZWUsIGZpbGUpIHtcbiAgICAgICAgdHJlZSA9IHRyZWUgfHwgbm9kZVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUodHJlZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihudWxsLCB0cmVlLCBmaWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUnVuIHRyYW5zZm9ybXMgb24gYSB1bmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZSAoaW4gc3RyaW5nIG9yXG4gIC8vIHZmaWxlIHJlcHJlc2VudGF0aW9uKSwgc3luYy5cbiAgZnVuY3Rpb24gcnVuU3luYyhub2RlLCBmaWxlKSB7XG4gICAgdmFyIHJlc3VsdFxuICAgIHZhciBjb21wbGV0ZVxuXG4gICAgcnVuKG5vZGUsIGZpbGUsIGRvbmUpXG5cbiAgICBhc3NlcnREb25lKCdydW5TeW5jJywgJ3J1bicsIGNvbXBsZXRlKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG4gICAgZnVuY3Rpb24gZG9uZShlcnJvciwgdHJlZSkge1xuICAgICAgY29tcGxldGUgPSB0cnVlXG4gICAgICByZXN1bHQgPSB0cmVlXG4gICAgICBiYWlsKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0cmluZ2lmeSBhIHVuaXN0IG5vZGUgcmVwcmVzZW50YXRpb24gb2YgYSBmaWxlIChpbiBzdHJpbmcgb3IgdmZpbGVcbiAgLy8gcmVwcmVzZW50YXRpb24pIGludG8gYSBzdHJpbmcgdXNpbmcgdGhlIGBDb21waWxlcmAgb24gdGhlIHByb2Nlc3Nvci5cbiAgZnVuY3Rpb24gc3RyaW5naWZ5KG5vZGUsIGRvYykge1xuICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuICAgIHZhciBDb21waWxlclxuXG4gICAgZnJlZXplKClcbiAgICBDb21waWxlciA9IHByb2Nlc3Nvci5Db21waWxlclxuICAgIGFzc2VydENvbXBpbGVyKCdzdHJpbmdpZnknLCBDb21waWxlcilcbiAgICBhc3NlcnROb2RlKG5vZGUpXG5cbiAgICBpZiAobmV3YWJsZShDb21waWxlciwgJ2NvbXBpbGUnKSkge1xuICAgICAgcmV0dXJuIG5ldyBDb21waWxlcihub2RlLCBmaWxlKS5jb21waWxlKClcbiAgICB9XG5cbiAgICByZXR1cm4gQ29tcGlsZXIobm9kZSwgZmlsZSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG4gIH1cblxuICAvLyBQYXJzZSBhIGZpbGUgKGluIHN0cmluZyBvciB2ZmlsZSByZXByZXNlbnRhdGlvbikgaW50byBhIHVuaXN0IG5vZGUgdXNpbmdcbiAgLy8gdGhlIGBQYXJzZXJgIG9uIHRoZSBwcm9jZXNzb3IsIHRoZW4gcnVuIHRyYW5zZm9ybXMgb24gdGhhdCBub2RlLCBhbmRcbiAgLy8gY29tcGlsZSB0aGUgcmVzdWx0aW5nIG5vZGUgdXNpbmcgdGhlIGBDb21waWxlcmAgb24gdGhlIHByb2Nlc3NvciwgYW5kXG4gIC8vIHN0b3JlIHRoYXQgcmVzdWx0IG9uIHRoZSB2ZmlsZS5cbiAgZnVuY3Rpb24gcHJvY2Vzcyhkb2MsIGNiKSB7XG4gICAgZnJlZXplKClcbiAgICBhc3NlcnRQYXJzZXIoJ3Byb2Nlc3MnLCBwcm9jZXNzb3IuUGFyc2VyKVxuICAgIGFzc2VydENvbXBpbGVyKCdwcm9jZXNzJywgcHJvY2Vzc29yLkNvbXBpbGVyKVxuXG4gICAgaWYgKCFjYikge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yKVxuICAgIH1cblxuICAgIGV4ZWN1dG9yKG51bGwsIGNiKVxuXG4gICAgZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZmlsZSA9IHZmaWxlKGRvYylcblxuICAgICAgcGlwZWxpbmUucnVuKHByb2Nlc3Nvciwge2ZpbGU6IGZpbGV9LCBkb25lKVxuXG4gICAgICBmdW5jdGlvbiBkb25lKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgcmVzb2x2ZShmaWxlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKG51bGwsIGZpbGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQcm9jZXNzIHRoZSBnaXZlbiBkb2N1bWVudCAoaW4gc3RyaW5nIG9yIHZmaWxlIHJlcHJlc2VudGF0aW9uKSwgc3luYy5cbiAgZnVuY3Rpb24gcHJvY2Vzc1N5bmMoZG9jKSB7XG4gICAgdmFyIGZpbGVcbiAgICB2YXIgY29tcGxldGVcblxuICAgIGZyZWV6ZSgpXG4gICAgYXNzZXJ0UGFyc2VyKCdwcm9jZXNzU3luYycsIHByb2Nlc3Nvci5QYXJzZXIpXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3Byb2Nlc3NTeW5jJywgcHJvY2Vzc29yLkNvbXBpbGVyKVxuICAgIGZpbGUgPSB2ZmlsZShkb2MpXG5cbiAgICBwcm9jZXNzKGZpbGUsIGRvbmUpXG5cbiAgICBhc3NlcnREb25lKCdwcm9jZXNzU3luYycsICdwcm9jZXNzJywgY29tcGxldGUpXG5cbiAgICByZXR1cm4gZmlsZVxuXG4gICAgZnVuY3Rpb24gZG9uZShlcnJvcikge1xuICAgICAgY29tcGxldGUgPSB0cnVlXG4gICAgICBiYWlsKGVycm9yKVxuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgdmFsdWVgIGlzIGEgY29uc3RydWN0b3IuXG5mdW5jdGlvbiBuZXdhYmxlKHZhbHVlLCBuYW1lKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmXG4gICAgdmFsdWUucHJvdG90eXBlICYmXG4gICAgLy8gQSBmdW5jdGlvbiB3aXRoIGtleXMgaW4gaXRzIHByb3RvdHlwZSBpcyBwcm9iYWJseSBhIGNvbnN0cnVjdG9yLlxuICAgIC8vIENsYXNzZXPigJkgcHJvdG90eXBlIG1ldGhvZHMgYXJlIG5vdCBlbnVtZXJhYmxlLCBzbyB3ZSBjaGVjayBpZiBzb21lIHZhbHVlXG4gICAgLy8gZXhpc3RzIGluIHRoZSBwcm90b3R5cGUuXG4gICAgKGtleXModmFsdWUucHJvdG90eXBlKSB8fCBuYW1lIGluIHZhbHVlLnByb3RvdHlwZSlcbiAgKVxufVxuXG4vLyBDaGVjayBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCB3aXRoIGtleXMuXG5mdW5jdGlvbiBrZXlzKHZhbHVlKSB7XG4gIHZhciBrZXlcbiAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIEFzc2VydCBhIHBhcnNlciBpcyBhdmFpbGFibGUuXG5mdW5jdGlvbiBhc3NlcnRQYXJzZXIobmFtZSwgUGFyc2VyKSB7XG4gIGlmICh0eXBlb2YgUGFyc2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYCcgKyBuYW1lICsgJ2Agd2l0aG91dCBgUGFyc2VyYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGEgY29tcGlsZXIgaXMgYXZhaWxhYmxlLlxuZnVuY3Rpb24gYXNzZXJ0Q29tcGlsZXIobmFtZSwgQ29tcGlsZXIpIHtcbiAgaWYgKHR5cGVvZiBDb21waWxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGAnICsgbmFtZSArICdgIHdpdGhvdXQgYENvbXBpbGVyYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IHRoZSBwcm9jZXNzb3IgaXMgbm90IGZyb3plbi5cbmZ1bmN0aW9uIGFzc2VydFVuZnJvemVuKG5hbWUsIGZyb3plbikge1xuICBpZiAoZnJvemVuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0Nhbm5vdCBpbnZva2UgYCcgK1xuICAgICAgICBuYW1lICtcbiAgICAgICAgJ2Agb24gYSBmcm96ZW4gcHJvY2Vzc29yLlxcbkNyZWF0ZSBhIG5ldyBwcm9jZXNzb3IgZmlyc3QsIGJ5IGludm9raW5nIGl0OiB1c2UgYHByb2Nlc3NvcigpYCBpbnN0ZWFkIG9mIGBwcm9jZXNzb3JgLidcbiAgICApXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGBub2RlYCBpcyBhIHVuaXN0IG5vZGUuXG5mdW5jdGlvbiBhc3NlcnROb2RlKG5vZGUpIHtcbiAgaWYgKCFub2RlIHx8IHR5cGVvZiBub2RlLnR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBnb3QgYCcgKyBub2RlICsgJ2AnKVxuICB9XG59XG5cbi8vIEFzc2VydCB0aGF0IGBjb21wbGV0ZWAgaXMgYHRydWVgLlxuZnVuY3Rpb24gYXNzZXJ0RG9uZShuYW1lLCBhc3luY05hbWUsIGNvbXBsZXRlKSB7XG4gIGlmICghY29tcGxldGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnYCcgKyBuYW1lICsgJ2AgZmluaXNoZWQgYXN5bmMuIFVzZSBgJyArIGFzeW5jTmFtZSArICdgIGluc3RlYWQnXG4gICAgKVxuICB9XG59XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0XG5cbmZ1bmN0aW9uIGNvbnZlcnQodGVzdCkge1xuICBpZiAodGVzdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG9rXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGVGYWN0b3J5KHRlc3QpXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICdsZW5ndGgnIGluIHRlc3QgPyBhbnlGYWN0b3J5KHRlc3QpIDogYWxsRmFjdG9yeSh0ZXN0KVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRlc3RcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24sIHN0cmluZywgb3Igb2JqZWN0IGFzIHRlc3QnKVxufVxuXG4vLyBVdGlsaXR5IGFzc2VydCBlYWNoIHByb3BlcnR5IGluIGB0ZXN0YCBpcyByZXByZXNlbnRlZCBpbiBgbm9kZWAsIGFuZCBlYWNoXG4vLyB2YWx1ZXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuZnVuY3Rpb24gYWxsRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiBhbGxcblxuICBmdW5jdGlvbiBhbGwobm9kZSkge1xuICAgIHZhciBrZXlcblxuICAgIGZvciAoa2V5IGluIHRlc3QpIHtcbiAgICAgIGlmIChub2RlW2tleV0gIT09IHRlc3Rba2V5XSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBhbnlGYWN0b3J5KHRlc3RzKSB7XG4gIHZhciBjaGVja3MgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgdGVzdHMubGVuZ3RoKSB7XG4gICAgY2hlY2tzW2luZGV4XSA9IGNvbnZlcnQodGVzdHNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGFueVxuXG4gIGZ1bmN0aW9uIGFueSgpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjaGVja3MubGVuZ3RoKSB7XG4gICAgICBpZiAoY2hlY2tzW2luZGV4XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgYSBnaXZlbiBub2Rl4oCZcyB0eXBlXG4vLyBmb3Igc2FpZCBzdHJpbmcuXG5mdW5jdGlvbiB0eXBlRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiB0eXBlXG5cbiAgZnVuY3Rpb24gdHlwZShub2RlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4obm9kZSAmJiBub2RlLnR5cGUgPT09IHRlc3QpXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byByZXR1cm4gdHJ1ZS5cbmZ1bmN0aW9uIG9rKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgLy8gTm90aGluZy5cbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBOb2RlLlxuICBpZiAob3duLmNhbGwodmFsdWUsICdwb3NpdGlvbicpIHx8IG93bi5jYWxsKHZhbHVlLCAndHlwZScpKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uKHZhbHVlLnBvc2l0aW9uKVxuICB9XG5cbiAgLy8gUG9zaXRpb24uXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ3N0YXJ0JykgfHwgb3duLmNhbGwodmFsdWUsICdlbmQnKSkge1xuICAgIHJldHVybiBwb3NpdGlvbih2YWx1ZSlcbiAgfVxuXG4gIC8vIFBvaW50LlxuICBpZiAob3duLmNhbGwodmFsdWUsICdsaW5lJykgfHwgb3duLmNhbGwodmFsdWUsICdjb2x1bW4nKSkge1xuICAgIHJldHVybiBwb2ludCh2YWx1ZSlcbiAgfVxuXG4gIC8vID9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIHBvaW50KHBvaW50KSB7XG4gIGlmICghcG9pbnQgfHwgdHlwZW9mIHBvaW50ICE9PSAnb2JqZWN0Jykge1xuICAgIHBvaW50ID0ge31cbiAgfVxuXG4gIHJldHVybiBpbmRleChwb2ludC5saW5lKSArICc6JyArIGluZGV4KHBvaW50LmNvbHVtbilcbn1cblxuZnVuY3Rpb24gcG9zaXRpb24ocG9zKSB7XG4gIGlmICghcG9zIHx8IHR5cGVvZiBwb3MgIT09ICdvYmplY3QnKSB7XG4gICAgcG9zID0ge31cbiAgfVxuXG4gIHJldHVybiBwb2ludChwb3Muc3RhcnQpICsgJy0nICsgcG9pbnQocG9zLmVuZClcbn1cblxuZnVuY3Rpb24gaW5kZXgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IDFcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKiBFeHBvc2UuICovXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0UGFyZW50c1xuXG4vKiBWaXNpdC4gKi9cbmZ1bmN0aW9uIHZpc2l0UGFyZW50cyh0cmVlLCB0eXBlLCB2aXNpdG9yKSB7XG4gIHZhciBzdGFjayA9IFtdXG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmlzaXRvciA9IHR5cGVcbiAgICB0eXBlID0gbnVsbFxuICB9XG5cbiAgb25lKHRyZWUpXG5cbiAgLyogVmlzaXQgYSBzaW5nbGUgbm9kZS4gKi9cbiAgZnVuY3Rpb24gb25lKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0XG5cbiAgICBpZiAoIXR5cGUgfHwgbm9kZS50eXBlID09PSB0eXBlKSB7XG4gICAgICByZXN1bHQgPSB2aXNpdG9yKG5vZGUsIHN0YWNrLmNvbmNhdCgpKVxuICAgIH1cblxuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBhbGwobm9kZS5jaGlsZHJlbiwgbm9kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKiBWaXNpdCBjaGlsZHJlbiBpbiBgcGFyZW50YC4gKi9cbiAgZnVuY3Rpb24gYWxsKGNoaWxkcmVuLCBwYXJlbnQpIHtcbiAgICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgY2hpbGRcblxuICAgIHN0YWNrLnB1c2gocGFyZW50KVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG5cbiAgICAgIGlmIChjaGlsZCAmJiBvbmUoY2hpbGQpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFjay5wb3AoKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRcblxudmFyIHZpc2l0UGFyZW50cyA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpXG5cbnZhciBDT05USU5VRSA9IHZpc2l0UGFyZW50cy5DT05USU5VRVxudmFyIFNLSVAgPSB2aXNpdFBhcmVudHMuU0tJUFxudmFyIEVYSVQgPSB2aXNpdFBhcmVudHMuRVhJVFxuXG52aXNpdC5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdC5TS0lQID0gU0tJUFxudmlzaXQuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXQodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgIHZhciBpbmRleCA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbFxuICAgIHJldHVybiB2aXNpdG9yKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHlcbmZ1bmN0aW9uIGlkZW50aXR5KGQpIHtcbiAgcmV0dXJuIGRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0UGFyZW50c1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG52YXIgY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJylcblxudmFyIENPTlRJTlVFID0gdHJ1ZVxudmFyIFNLSVAgPSAnc2tpcCdcbnZhciBFWElUID0gZmFsc2VcblxudmlzaXRQYXJlbnRzLkNPTlRJTlVFID0gQ09OVElOVUVcbnZpc2l0UGFyZW50cy5TS0lQID0gU0tJUFxudmlzaXRQYXJlbnRzLkVYSVQgPSBFWElUXG5cbmZ1bmN0aW9uIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gIHZhciBzdGVwXG4gIHZhciBpc1xuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgdmlzaXRvciA9IHRlc3RcbiAgICB0ZXN0ID0gbnVsbFxuICB9XG5cbiAgaXMgPSBjb252ZXJ0KHRlc3QpXG4gIHN0ZXAgPSByZXZlcnNlID8gLTEgOiAxXG5cbiAgZmFjdG9yeSh0cmVlLCBudWxsLCBbXSkoKVxuXG4gIGZ1bmN0aW9uIGZhY3Rvcnkobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgbm9kZSAhPT0gbnVsbCA/IG5vZGUgOiB7fVxuICAgIHZhciBuYW1lXG5cbiAgICBpZiAodHlwZW9mIHZhbHVlLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID1cbiAgICAgICAgdHlwZW9mIHZhbHVlLnRhZ05hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyB2YWx1ZS50YWdOYW1lXG4gICAgICAgICAgOiB0eXBlb2YgdmFsdWUubmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHZhbHVlLm5hbWVcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICB2aXNpdC5kaXNwbGF5TmFtZSA9XG4gICAgICAgICdub2RlICgnICsgY29sb3IodmFsdWUudHlwZSArIChuYW1lID8gJzwnICsgbmFtZSArICc+JyA6ICcnKSkgKyAnKSdcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRcblxuICAgIGZ1bmN0aW9uIHZpc2l0KCkge1xuICAgICAgdmFyIGdyYW5kcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KG5vZGUpXG4gICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgIHZhciBzdWJyZXN1bHRcbiAgICAgIHZhciBvZmZzZXRcblxuICAgICAgaWYgKCF0ZXN0IHx8IGlzKG5vZGUsIGluZGV4LCBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0gfHwgbnVsbCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgICBpZiAocmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmNoaWxkcmVuICYmIHJlc3VsdFswXSAhPT0gU0tJUCkge1xuICAgICAgICBvZmZzZXQgPSAocmV2ZXJzZSA/IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIDogLTEpICsgc3RlcFxuXG4gICAgICAgIHdoaWxlIChvZmZzZXQgPiAtMSAmJiBvZmZzZXQgPCBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHN1YnJlc3VsdCA9IGZhY3Rvcnkobm9kZS5jaGlsZHJlbltvZmZzZXRdLCBvZmZzZXQsIGdyYW5kcGFyZW50cykoKVxuXG4gICAgICAgICAgaWYgKHN1YnJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnJlc3VsdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIG9mZnNldCA9XG4gICAgICAgICAgICB0eXBlb2Ygc3VicmVzdWx0WzFdID09PSAnbnVtYmVyJyA/IHN1YnJlc3VsdFsxXSA6IG9mZnNldCArIHN0ZXBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvUmVzdWx0KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbQ09OVElOVUUsIHZhbHVlXVxuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZNZXNzYWdlXG5cbi8vIEluaGVyaXQgZnJvbSBgRXJyb3IjYC5cbmZ1bmN0aW9uIFZNZXNzYWdlUHJvdG90eXBlKCkge31cblZNZXNzYWdlUHJvdG90eXBlLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZVxuVk1lc3NhZ2UucHJvdG90eXBlID0gbmV3IFZNZXNzYWdlUHJvdG90eXBlKClcblxuLy8gTWVzc2FnZSBwcm9wZXJ0aWVzLlxudmFyIHByb3RvID0gVk1lc3NhZ2UucHJvdG90eXBlXG5cbnByb3RvLmZpbGUgPSAnJ1xucHJvdG8ubmFtZSA9ICcnXG5wcm90by5yZWFzb24gPSAnJ1xucHJvdG8ubWVzc2FnZSA9ICcnXG5wcm90by5zdGFjayA9ICcnXG5wcm90by5mYXRhbCA9IG51bGxcbnByb3RvLmNvbHVtbiA9IG51bGxcbnByb3RvLmxpbmUgPSBudWxsXG5cbi8vIENvbnN0cnVjdCBhIG5ldyBWTWVzc2FnZS5cbi8vXG4vLyBOb3RlOiBXZSBjYW5ub3QgaW52b2tlIGBFcnJvcmAgb24gdGhlIGNyZWF0ZWQgY29udGV4dCwgYXMgdGhhdCBhZGRzIHJlYWRvbmx5XG4vLyBgbGluZWAgYW5kIGBjb2x1bW5gIGF0dHJpYnV0ZXMgb24gU2FmYXJpIDksIHRodXMgdGhyb3dpbmcgYW5kIGZhaWxpbmcgdGhlXG4vLyBkYXRhLlxuZnVuY3Rpb24gVk1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbiwgb3JpZ2luKSB7XG4gIHZhciBwYXJ0c1xuICB2YXIgcmFuZ2VcbiAgdmFyIGxvY2F0aW9uXG5cbiAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICBvcmlnaW4gPSBwb3NpdGlvblxuICAgIHBvc2l0aW9uID0gbnVsbFxuICB9XG5cbiAgcGFydHMgPSBwYXJzZU9yaWdpbihvcmlnaW4pXG4gIHJhbmdlID0gc3RyaW5naWZ5KHBvc2l0aW9uKSB8fCAnMToxJ1xuXG4gIGxvY2F0aW9uID0ge1xuICAgIHN0YXJ0OiB7bGluZTogbnVsbCwgY29sdW1uOiBudWxsfSxcbiAgICBlbmQ6IHtsaW5lOiBudWxsLCBjb2x1bW46IG51bGx9XG4gIH1cblxuICAvLyBOb2RlLlxuICBpZiAocG9zaXRpb24gJiYgcG9zaXRpb24ucG9zaXRpb24pIHtcbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnBvc2l0aW9uXG4gIH1cblxuICBpZiAocG9zaXRpb24pIHtcbiAgICAvLyBQb3NpdGlvbi5cbiAgICBpZiAocG9zaXRpb24uc3RhcnQpIHtcbiAgICAgIGxvY2F0aW9uID0gcG9zaXRpb25cbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc3RhcnRcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUG9pbnQuXG4gICAgICBsb2NhdGlvbi5zdGFydCA9IHBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaWYgKHJlYXNvbi5zdGFjaykge1xuICAgIHRoaXMuc3RhY2sgPSByZWFzb24uc3RhY2tcbiAgICByZWFzb24gPSByZWFzb24ubWVzc2FnZVxuICB9XG5cbiAgdGhpcy5tZXNzYWdlID0gcmVhc29uXG4gIHRoaXMubmFtZSA9IHJhbmdlXG4gIHRoaXMucmVhc29uID0gcmVhc29uXG4gIHRoaXMubGluZSA9IHBvc2l0aW9uID8gcG9zaXRpb24ubGluZSA6IG51bGxcbiAgdGhpcy5jb2x1bW4gPSBwb3NpdGlvbiA/IHBvc2l0aW9uLmNvbHVtbiA6IG51bGxcbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG4gIHRoaXMuc291cmNlID0gcGFydHNbMF1cbiAgdGhpcy5ydWxlSWQgPSBwYXJ0c1sxXVxufVxuXG5mdW5jdGlvbiBwYXJzZU9yaWdpbihvcmlnaW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtudWxsLCBudWxsXVxuICB2YXIgaW5kZXhcblxuICBpZiAodHlwZW9mIG9yaWdpbiA9PT0gJ3N0cmluZycpIHtcbiAgICBpbmRleCA9IG9yaWdpbi5pbmRleE9mKCc6JylcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdFsxXSA9IG9yaWdpblxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbMF0gPSBvcmlnaW4uc2xpY2UoMCwgaW5kZXgpXG4gICAgICByZXN1bHRbMV0gPSBvcmlnaW4uc2xpY2UoaW5kZXggKyAxKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliJylcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcCA9IHJlcXVpcmUoJy4vbWlucGF0aCcpXG52YXIgcHJvYyA9IHJlcXVpcmUoJy4vbWlucHJvYycpXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxubW9kdWxlLmV4cG9ydHMgPSBWRmlsZVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gT3JkZXIgb2Ygc2V0dGluZyAobGVhc3Qgc3BlY2lmaWMgdG8gbW9zdCksIHdlIG5lZWQgdGhpcyBiZWNhdXNlIG90aGVyd2lzZVxuLy8gYHtzdGVtOiAnYScsIHBhdGg6ICd+L2IuanMnfWAgd291bGQgdGhyb3csIGFzIGEgcGF0aCBpcyBuZWVkZWQgYmVmb3JlIGFcbi8vIHN0ZW0gY2FuIGJlIHNldC5cbnZhciBvcmRlciA9IFsnaGlzdG9yeScsICdwYXRoJywgJ2Jhc2VuYW1lJywgJ3N0ZW0nLCAnZXh0bmFtZScsICdkaXJuYW1lJ11cblxuVkZpbGUucHJvdG90eXBlLnRvU3RyaW5nID0gdG9TdHJpbmdcblxuLy8gQWNjZXNzIGZ1bGwgcGF0aCAoYH4vaW5kZXgubWluLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVkZpbGUucHJvdG90eXBlLCAncGF0aCcsIHtnZXQ6IGdldFBhdGgsIHNldDogc2V0UGF0aH0pXG5cbi8vIEFjY2VzcyBwYXJlbnQgcGF0aCAoYH5gKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWRmlsZS5wcm90b3R5cGUsICdkaXJuYW1lJywge1xuICBnZXQ6IGdldERpcm5hbWUsXG4gIHNldDogc2V0RGlybmFtZVxufSlcblxuLy8gQWNjZXNzIGJhc2VuYW1lIChgaW5kZXgubWluLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVkZpbGUucHJvdG90eXBlLCAnYmFzZW5hbWUnLCB7XG4gIGdldDogZ2V0QmFzZW5hbWUsXG4gIHNldDogc2V0QmFzZW5hbWVcbn0pXG5cbi8vIEFjY2VzcyBleHRuYW1lIChgLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVkZpbGUucHJvdG90eXBlLCAnZXh0bmFtZScsIHtcbiAgZ2V0OiBnZXRFeHRuYW1lLFxuICBzZXQ6IHNldEV4dG5hbWVcbn0pXG5cbi8vIEFjY2VzcyBzdGVtIChgaW5kZXgubWluYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVkZpbGUucHJvdG90eXBlLCAnc3RlbScsIHtnZXQ6IGdldFN0ZW0sIHNldDogc2V0U3RlbX0pXG5cbi8vIENvbnN0cnVjdCBhIG5ldyBmaWxlLlxuZnVuY3Rpb24gVkZpbGUob3B0aW9ucykge1xuICB2YXIgcHJvcFxuICB2YXIgaW5kZXhcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgfHwgYnVmZmVyKG9wdGlvbnMpKSB7XG4gICAgb3B0aW9ucyA9IHtjb250ZW50czogb3B0aW9uc31cbiAgfSBlbHNlIGlmICgnbWVzc2FnZScgaW4gb3B0aW9ucyAmJiAnbWVzc2FnZXMnIGluIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZGaWxlKSkge1xuICAgIHJldHVybiBuZXcgVkZpbGUob3B0aW9ucylcbiAgfVxuXG4gIHRoaXMuZGF0YSA9IHt9XG4gIHRoaXMubWVzc2FnZXMgPSBbXVxuICB0aGlzLmhpc3RvcnkgPSBbXVxuICB0aGlzLmN3ZCA9IHByb2MuY3dkKClcblxuICAvLyBTZXQgcGF0aCByZWxhdGVkIHByb3BlcnRpZXMgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuXG4gIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IG9yZGVyLmxlbmd0aCkge1xuICAgIHByb3AgPSBvcmRlcltpbmRleF1cblxuICAgIGlmIChvd24uY2FsbChvcHRpb25zLCBwcm9wKSkge1xuICAgICAgdGhpc1twcm9wXSA9IG9wdGlvbnNbcHJvcF1cbiAgICB9XG4gIH1cblxuICAvLyBTZXQgbm9uLXBhdGggcmVsYXRlZCBwcm9wZXJ0aWVzLlxuICBmb3IgKHByb3AgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcmRlci5pbmRleE9mKHByb3ApIDwgMCkge1xuICAgICAgdGhpc1twcm9wXSA9IG9wdGlvbnNbcHJvcF1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aCgpIHtcbiAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV1cbn1cblxuZnVuY3Rpb24gc2V0UGF0aChwYXRoKSB7XG4gIGFzc2VydE5vbkVtcHR5KHBhdGgsICdwYXRoJylcblxuICBpZiAodGhpcy5wYXRoICE9PSBwYXRoKSB7XG4gICAgdGhpcy5oaXN0b3J5LnB1c2gocGF0aClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREaXJuYW1lKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZycgPyBwLmRpcm5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXREaXJuYW1lKGRpcm5hbWUpIHtcbiAgYXNzZXJ0UGF0aCh0aGlzLnBhdGgsICdkaXJuYW1lJylcbiAgdGhpcy5wYXRoID0gcC5qb2luKGRpcm5hbWUgfHwgJycsIHRoaXMuYmFzZW5hbWUpXG59XG5cbmZ1bmN0aW9uIGdldEJhc2VuYW1lKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZycgPyBwLmJhc2VuYW1lKHRoaXMucGF0aCkgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0QmFzZW5hbWUoYmFzZW5hbWUpIHtcbiAgYXNzZXJ0Tm9uRW1wdHkoYmFzZW5hbWUsICdiYXNlbmFtZScpXG4gIGFzc2VydFBhcnQoYmFzZW5hbWUsICdiYXNlbmFtZScpXG4gIHRoaXMucGF0aCA9IHAuam9pbih0aGlzLmRpcm5hbWUgfHwgJycsIGJhc2VuYW1lKVxufVxuXG5mdW5jdGlvbiBnZXRFeHRuYW1lKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZycgPyBwLmV4dG5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXRFeHRuYW1lKGV4dG5hbWUpIHtcbiAgYXNzZXJ0UGFydChleHRuYW1lLCAnZXh0bmFtZScpXG4gIGFzc2VydFBhdGgodGhpcy5wYXRoLCAnZXh0bmFtZScpXG5cbiAgaWYgKGV4dG5hbWUpIHtcbiAgICBpZiAoZXh0bmFtZS5jaGFyQ29kZUF0KDApICE9PSA0NiAvKiBgLmAgKi8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGV4dG5hbWVgIG11c3Qgc3RhcnQgd2l0aCBgLmAnKVxuICAgIH1cblxuICAgIGlmIChleHRuYW1lLmluZGV4T2YoJy4nLCAxKSA+IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BleHRuYW1lYCBjYW5ub3QgY29udGFpbiBtdWx0aXBsZSBkb3RzJylcbiAgICB9XG4gIH1cblxuICB0aGlzLnBhdGggPSBwLmpvaW4odGhpcy5kaXJuYW1lLCB0aGlzLnN0ZW0gKyAoZXh0bmFtZSB8fCAnJykpXG59XG5cbmZ1bmN0aW9uIGdldFN0ZW0oKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJ1xuICAgID8gcC5iYXNlbmFtZSh0aGlzLnBhdGgsIHRoaXMuZXh0bmFtZSlcbiAgICA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXRTdGVtKHN0ZW0pIHtcbiAgYXNzZXJ0Tm9uRW1wdHkoc3RlbSwgJ3N0ZW0nKVxuICBhc3NlcnRQYXJ0KHN0ZW0sICdzdGVtJylcbiAgdGhpcy5wYXRoID0gcC5qb2luKHRoaXMuZGlybmFtZSB8fCAnJywgc3RlbSArICh0aGlzLmV4dG5hbWUgfHwgJycpKVxufVxuXG4vLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSBmaWxlLlxuZnVuY3Rpb24gdG9TdHJpbmcoZW5jb2RpbmcpIHtcbiAgcmV0dXJuICh0aGlzLmNvbnRlbnRzIHx8ICcnKS50b1N0cmluZyhlbmNvZGluZylcbn1cblxuLy8gQXNzZXJ0IHRoYXQgYHBhcnRgIGlzIG5vdCBhIHBhdGggKGkuZS4sIGRvZXMgbm90IGNvbnRhaW4gYHAuc2VwYCkuXG5mdW5jdGlvbiBhc3NlcnRQYXJ0KHBhcnQsIG5hbWUpIHtcbiAgaWYgKHBhcnQgJiYgcGFydC5pbmRleE9mKHAuc2VwKSA+IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ2AnICsgbmFtZSArICdgIGNhbm5vdCBiZSBhIHBhdGg6IGRpZCBub3QgZXhwZWN0IGAnICsgcC5zZXAgKyAnYCdcbiAgICApXG4gIH1cbn1cblxuLy8gQXNzZXJ0IHRoYXQgYHBhcnRgIGlzIG5vdCBlbXB0eS5cbmZ1bmN0aW9uIGFzc2VydE5vbkVtcHR5KHBhcnQsIG5hbWUpIHtcbiAgaWYgKCFwYXJ0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG5hbWUgKyAnYCBjYW5ub3QgYmUgZW1wdHknKVxuICB9XG59XG5cbi8vIEFzc2VydCBgcGF0aGAgZXhpc3RzLlxuZnVuY3Rpb24gYXNzZXJ0UGF0aChwYXRoLCBuYW1lKSB7XG4gIGlmICghcGF0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2V0dGluZyBgJyArIG5hbWUgKyAnYCByZXF1aXJlcyBgcGF0aGAgdG8gYmUgc2V0IHRvbycpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgVk1lc3NhZ2UgPSByZXF1aXJlKCd2ZmlsZS1tZXNzYWdlJylcbnZhciBWRmlsZSA9IHJlcXVpcmUoJy4vY29yZS5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gVkZpbGVcblxuVkZpbGUucHJvdG90eXBlLm1lc3NhZ2UgPSBtZXNzYWdlXG5WRmlsZS5wcm90b3R5cGUuaW5mbyA9IGluZm9cblZGaWxlLnByb3RvdHlwZS5mYWlsID0gZmFpbFxuXG4vLyBDcmVhdGUgYSBtZXNzYWdlIHdpdGggYHJlYXNvbmAgYXQgYHBvc2l0aW9uYC5cbi8vIFdoZW4gYW4gZXJyb3IgaXMgcGFzc2VkIGluIGFzIGByZWFzb25gLCBjb3BpZXMgdGhlIHN0YWNrLlxuZnVuY3Rpb24gbWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pIHtcbiAgdmFyIG1lc3NhZ2UgPSBuZXcgVk1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbiwgb3JpZ2luKVxuXG4gIGlmICh0aGlzLnBhdGgpIHtcbiAgICBtZXNzYWdlLm5hbWUgPSB0aGlzLnBhdGggKyAnOicgKyBtZXNzYWdlLm5hbWVcbiAgICBtZXNzYWdlLmZpbGUgPSB0aGlzLnBhdGhcbiAgfVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSBmYWxzZVxuXG4gIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKVxuXG4gIHJldHVybiBtZXNzYWdlXG59XG5cbi8vIEZhaWw6IGNyZWF0ZXMgYSB2bWVzc2FnZSwgYXNzb2NpYXRlcyBpdCB3aXRoIHRoZSBmaWxlLCBhbmQgdGhyb3dzIGl0LlxuZnVuY3Rpb24gZmFpbCgpIHtcbiAgdmFyIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSB0cnVlXG5cbiAgdGhyb3cgbWVzc2FnZVxufVxuXG4vLyBJbmZvOiBjcmVhdGVzIGEgdm1lc3NhZ2UsIGFzc29jaWF0ZXMgaXQgd2l0aCB0aGUgZmlsZSwgYW5kIG1hcmtzIHRoZSBmYXRhbGl0eVxuLy8gYXMgbnVsbC5cbmZ1bmN0aW9uIGluZm8oKSB7XG4gIHZhciBtZXNzYWdlID0gdGhpcy5tZXNzYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcblxuICBtZXNzYWdlLmZhdGFsID0gbnVsbFxuXG4gIHJldHVybiBtZXNzYWdlXG59XG4iLCIndXNlIHN0cmljdCdcblxuLy8gQSBkZXJpdmF0aXZlIHdvcmsgYmFzZWQgb246XG4vLyA8aHR0cHM6Ly9naXRodWIuY29tL2Jyb3dzZXJpZnkvcGF0aC1icm93c2VyaWZ5Pi5cbi8vIFdoaWNoIGlzIGxpY2Vuc2VkOlxuLy9cbi8vIE1JVCBMaWNlbnNlXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDEzIEphbWVzIEhhbGxpZGF5XG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8gQSBkZXJpdmF0aXZlIHdvcmsgYmFzZWQgb246XG4vL1xuLy8gUGFydHMgb2YgdGhhdCBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZeKAmXMgaW50ZXJuYWwgYHBhdGhgIG1vZHVsZTpcbi8vIDxodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9tYXN0ZXIvbGliL3BhdGguanM+LlxuLy8gV2hpY2ggaXMgbGljZW5zZWQ6XG4vL1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmV4cG9ydHMuYmFzZW5hbWUgPSBiYXNlbmFtZVxuZXhwb3J0cy5kaXJuYW1lID0gZGlybmFtZVxuZXhwb3J0cy5leHRuYW1lID0gZXh0bmFtZVxuZXhwb3J0cy5qb2luID0gam9pblxuZXhwb3J0cy5zZXAgPSAnLydcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCwgZXh0KSB7XG4gIHZhciBzdGFydCA9IDBcbiAgdmFyIGVuZCA9IC0xXG4gIHZhciBpbmRleFxuICB2YXIgZmlyc3ROb25TbGFzaEVuZFxuICB2YXIgc2Vlbk5vblNsYXNoXG4gIHZhciBleHRJbmRleFxuXG4gIGlmIChleHQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZXh0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZXh0XCIgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpXG4gIH1cblxuICBhc3NlcnRQYXRoKHBhdGgpXG4gIGluZGV4ID0gcGF0aC5sZW5ndGhcblxuICBpZiAoZXh0ID09PSB1bmRlZmluZWQgfHwgIWV4dC5sZW5ndGggfHwgZXh0Lmxlbmd0aCA+IHBhdGgubGVuZ3RoKSB7XG4gICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaW5kZXgpID09PSA0NyAvKiBgL2AgKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93LlxuICAgICAgICBpZiAoc2Vlbk5vblNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpbmRleCArIDFcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA8IDApIHtcbiAgICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgICAvLyBwYXRoIGNvbXBvbmVudC5cbiAgICAgICAgc2Vlbk5vblNsYXNoID0gdHJ1ZVxuICAgICAgICBlbmQgPSBpbmRleCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kIDwgMCA/ICcnIDogcGF0aC5zbGljZShzdGFydCwgZW5kKVxuICB9XG5cbiAgaWYgKGV4dCA9PT0gcGF0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgZmlyc3ROb25TbGFzaEVuZCA9IC0xXG4gIGV4dEluZGV4ID0gZXh0Lmxlbmd0aCAtIDFcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaW5kZXgpID09PSA0NyAvKiBgL2AgKi8pIHtcbiAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3cuXG4gICAgICBpZiAoc2Vlbk5vblNsYXNoKSB7XG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmaXJzdE5vblNsYXNoRW5kIDwgMCkge1xuICAgICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgcmVtZW1iZXIgdGhpcyBpbmRleCBpbiBjYXNlXG4gICAgICAgIC8vIHdlIG5lZWQgaXQgaWYgdGhlIGV4dGVuc2lvbiBlbmRzIHVwIG5vdCBtYXRjaGluZy5cbiAgICAgICAgc2Vlbk5vblNsYXNoID0gdHJ1ZVxuICAgICAgICBmaXJzdE5vblNsYXNoRW5kID0gaW5kZXggKyAxXG4gICAgICB9XG5cbiAgICAgIGlmIChleHRJbmRleCA+IC0xKSB7XG4gICAgICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZXhwbGljaXQgZXh0ZW5zaW9uLlxuICAgICAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGluZGV4KSA9PT0gZXh0LmNoYXJDb2RlQXQoZXh0SW5kZXgtLSkpIHtcbiAgICAgICAgICBpZiAoZXh0SW5kZXggPCAwKSB7XG4gICAgICAgICAgICAvLyBXZSBtYXRjaGVkIHRoZSBleHRlbnNpb24sIHNvIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91ciBwYXRoXG4gICAgICAgICAgICAvLyBjb21wb25lbnRcbiAgICAgICAgICAgIGVuZCA9IGluZGV4XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEV4dGVuc2lvbiBkb2VzIG5vdCBtYXRjaCwgc28gb3VyIHJlc3VsdCBpcyB0aGUgZW50aXJlIHBhdGhcbiAgICAgICAgICAvLyBjb21wb25lbnRcbiAgICAgICAgICBleHRJbmRleCA9IC0xXG4gICAgICAgICAgZW5kID0gZmlyc3ROb25TbGFzaEVuZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSBlbmQpIHtcbiAgICBlbmQgPSBmaXJzdE5vblNsYXNoRW5kXG4gIH0gZWxzZSBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCA9IHBhdGgubGVuZ3RoXG4gIH1cblxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBkaXJuYW1lKHBhdGgpIHtcbiAgdmFyIGVuZFxuICB2YXIgdW5tYXRjaGVkU2xhc2hcbiAgdmFyIGluZGV4XG5cbiAgYXNzZXJ0UGF0aChwYXRoKVxuXG4gIGlmICghcGF0aC5sZW5ndGgpIHtcbiAgICByZXR1cm4gJy4nXG4gIH1cblxuICBlbmQgPSAtMVxuICBpbmRleCA9IHBhdGgubGVuZ3RoXG5cbiAgLy8gUHJlZml4IGAtLWAgaXMgaW1wb3J0YW50IHRvIG5vdCBydW4gb24gYDBgLlxuICB3aGlsZSAoLS1pbmRleCkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaW5kZXgpID09PSA0NyAvKiBgL2AgKi8pIHtcbiAgICAgIGlmICh1bm1hdGNoZWRTbGFzaCkge1xuICAgICAgICBlbmQgPSBpbmRleFxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXVubWF0Y2hlZFNsYXNoKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgdW5tYXRjaGVkU2xhc2ggPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVuZCA8IDBcbiAgICA/IHBhdGguY2hhckNvZGVBdCgwKSA9PT0gNDcgLyogYC9gICovXG4gICAgICA/ICcvJ1xuICAgICAgOiAnLidcbiAgICA6IGVuZCA9PT0gMSAmJiBwYXRoLmNoYXJDb2RlQXQoMCkgPT09IDQ3IC8qIGAvYCAqL1xuICAgID8gJy8vJ1xuICAgIDogcGF0aC5zbGljZSgwLCBlbmQpXG59XG5cbmZ1bmN0aW9uIGV4dG5hbWUocGF0aCkge1xuICB2YXIgc3RhcnREb3QgPSAtMVxuICB2YXIgc3RhcnRQYXJ0ID0gMFxuICB2YXIgZW5kID0gLTFcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZC5cbiAgdmFyIHByZURvdFN0YXRlID0gMFxuICB2YXIgdW5tYXRjaGVkU2xhc2hcbiAgdmFyIGNvZGVcbiAgdmFyIGluZGV4XG5cbiAgYXNzZXJ0UGF0aChwYXRoKVxuXG4gIGluZGV4ID0gcGF0aC5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAoY29kZSA9PT0gNDcgLyogYC9gICovKSB7XG4gICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93LlxuICAgICAgaWYgKHVubWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgIHN0YXJ0UGFydCA9IGluZGV4ICsgMVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChlbmQgPCAwKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb24uXG4gICAgICB1bm1hdGNoZWRTbGFzaCA9IHRydWVcbiAgICAgIGVuZCA9IGluZGV4ICsgMVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA0NiAvKiBgLmAgKi8pIHtcbiAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvbi5cbiAgICAgIGlmIChzdGFydERvdCA8IDApIHtcbiAgICAgICAgc3RhcnREb3QgPSBpbmRleFxuICAgICAgfSBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSkge1xuICAgICAgICBwcmVEb3RTdGF0ZSA9IDFcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ID4gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvbi5cbiAgICAgIHByZURvdFN0YXRlID0gLTFcbiAgICB9XG4gIH1cblxuICBpZiAoXG4gICAgc3RhcnREb3QgPCAwIHx8XG4gICAgZW5kIDwgMCB8fFxuICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90LlxuICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgYC4uYC5cbiAgICAocHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpXG4gICkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZClcbn1cblxuZnVuY3Rpb24gam9pbigpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGpvaW5lZFxuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGFzc2VydFBhdGgoYXJndW1lbnRzW2luZGV4XSlcblxuICAgIGlmIChhcmd1bWVudHNbaW5kZXhdKSB7XG4gICAgICBqb2luZWQgPVxuICAgICAgICBqb2luZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gYXJndW1lbnRzW2luZGV4XVxuICAgICAgICAgIDogam9pbmVkICsgJy8nICsgYXJndW1lbnRzW2luZGV4XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBqb2luZWQgPT09IHVuZGVmaW5lZCA/ICcuJyA6IG5vcm1hbGl6ZShqb2luZWQpXG59XG5cbi8vIE5vdGU6IGBub3JtYWxpemVgIGlzIG5vdCBleHBvc2VkIGFzIGBwYXRoLm5vcm1hbGl6ZWAsIHNvIHNvbWUgY29kZSBpc1xuLy8gbWFudWFsbHkgcmVtb3ZlZCBmcm9tIGl0LlxuZnVuY3Rpb24gbm9ybWFsaXplKHBhdGgpIHtcbiAgdmFyIGFic29sdXRlXG4gIHZhciB2YWx1ZVxuXG4gIGFzc2VydFBhdGgocGF0aClcblxuICBhYnNvbHV0ZSA9IHBhdGguY2hhckNvZGVBdCgwKSA9PT0gNDcgLyogYC9gICovXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoIGFjY29yZGluZyB0byBQT1NJWCBydWxlcy5cbiAgdmFsdWUgPSBub3JtYWxpemVTdHJpbmcocGF0aCwgIWFic29sdXRlKVxuXG4gIGlmICghdmFsdWUubGVuZ3RoICYmICFhYnNvbHV0ZSkge1xuICAgIHZhbHVlID0gJy4nXG4gIH1cblxuICBpZiAodmFsdWUubGVuZ3RoICYmIHBhdGguY2hhckNvZGVBdChwYXRoLmxlbmd0aCAtIDEpID09PSA0NyAvKiAvICovKSB7XG4gICAgdmFsdWUgKz0gJy8nXG4gIH1cblxuICByZXR1cm4gYWJzb2x1dGUgPyAnLycgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbi8vIFJlc29sdmUgYC5gIGFuZCBgLi5gIGVsZW1lbnRzIGluIGEgcGF0aCB3aXRoIGRpcmVjdG9yeSBuYW1lcy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZyhwYXRoLCBhbGxvd0Fib3ZlUm9vdCkge1xuICB2YXIgcmVzdWx0ID0gJydcbiAgdmFyIGxhc3RTZWdtZW50TGVuZ3RoID0gMFxuICB2YXIgbGFzdFNsYXNoID0gLTFcbiAgdmFyIGRvdHMgPSAwXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBjb2RlXG4gIHZhciBsYXN0U2xhc2hJbmRleFxuXG4gIHdoaWxlICgrK2luZGV4IDw9IHBhdGgubGVuZ3RoKSB7XG4gICAgaWYgKGluZGV4IDwgcGF0aC5sZW5ndGgpIHtcbiAgICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaW5kZXgpXG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA0NyAvKiBgL2AgKi8pIHtcbiAgICAgIGJyZWFrXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvZGUgPSA0NyAvKiBgL2AgKi9cbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDcgLyogYC9gICovKSB7XG4gICAgICBpZiAobGFzdFNsYXNoID09PSBpbmRleCAtIDEgfHwgZG90cyA9PT0gMSkge1xuICAgICAgICAvLyBFbXB0eS5cbiAgICAgIH0gZWxzZSBpZiAobGFzdFNsYXNoICE9PSBpbmRleCAtIDEgJiYgZG90cyA9PT0gMikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcmVzdWx0Lmxlbmd0aCA8IDIgfHxcbiAgICAgICAgICBsYXN0U2VnbWVudExlbmd0aCAhPT0gMiB8fFxuICAgICAgICAgIHJlc3VsdC5jaGFyQ29kZUF0KHJlc3VsdC5sZW5ndGggLSAxKSAhPT0gNDYgLyogYC5gICovIHx8XG4gICAgICAgICAgcmVzdWx0LmNoYXJDb2RlQXQocmVzdWx0Lmxlbmd0aCAtIDIpICE9PSA0NiAvKiBgLmAgKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBsYXN0U2xhc2hJbmRleCA9IHJlc3VsdC5sYXN0SW5kZXhPZignLycpXG5cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlIC0gTm8gY2x1ZSBob3cgdG8gY292ZXIgaXQuICovXG4gICAgICAgICAgICBpZiAobGFzdFNsYXNoSW5kZXggIT09IHJlc3VsdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIGlmIChsYXN0U2xhc2hJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnJ1xuICAgICAgICAgICAgICAgIGxhc3RTZWdtZW50TGVuZ3RoID0gMFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCBsYXN0U2xhc2hJbmRleClcbiAgICAgICAgICAgICAgICBsYXN0U2VnbWVudExlbmd0aCA9IHJlc3VsdC5sZW5ndGggLSAxIC0gcmVzdWx0Lmxhc3RJbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxhc3RTbGFzaCA9IGluZGV4XG4gICAgICAgICAgICAgIGRvdHMgPSAwXG4gICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnJ1xuICAgICAgICAgICAgbGFzdFNlZ21lbnRMZW5ndGggPSAwXG4gICAgICAgICAgICBsYXN0U2xhc2ggPSBpbmRleFxuICAgICAgICAgICAgZG90cyA9IDBcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdCArICcvLi4nIDogJy4uJ1xuICAgICAgICAgIGxhc3RTZWdtZW50TGVuZ3RoID0gMlxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdCArPSAnLycgKyBwYXRoLnNsaWNlKGxhc3RTbGFzaCArIDEsIGluZGV4KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHBhdGguc2xpY2UobGFzdFNsYXNoICsgMSwgaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBsYXN0U2VnbWVudExlbmd0aCA9IGluZGV4IC0gbGFzdFNsYXNoIC0gMVxuICAgICAgfVxuXG4gICAgICBsYXN0U2xhc2ggPSBpbmRleFxuICAgICAgZG90cyA9IDBcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDQ2IC8qIGAuYCAqLyAmJiBkb3RzID4gLTEpIHtcbiAgICAgIGRvdHMrK1xuICAgIH0gZWxzZSB7XG4gICAgICBkb3RzID0gLTFcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGFzc2VydFBhdGgocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdQYXRoIG11c3QgYmUgYSBzdHJpbmcuIFJlY2VpdmVkICcgKyBKU09OLnN0cmluZ2lmeShwYXRoKVxuICAgIClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIFNvbWV3aGF0IGJhc2VkIG9uOlxuLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1bmN0em9tYmllL25vZGUtcHJvY2Vzcy9ibG9iL21hc3Rlci9icm93c2VyLmpzPi5cbi8vIEJ1dCBJIGRvbuKAmXQgdGhpbmsgb25lIHRpbnkgbGluZSBvZiBjb2RlIGNhbiBiZSBjb3B5cmlnaHRlZC4g8J+YhVxuZXhwb3J0cy5jd2QgPSBjd2RcblxuZnVuY3Rpb24gY3dkKCkge1xuICByZXR1cm4gJy8nXG59XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBcIi4vcG9zdC5zY3NzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2ViTGF5b3V0XCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybVwiO1xyXG5pbXBvcnQgQ2FzaW5vV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYXNpbm9XcmFwcGVyXCI7XHJcbmltcG9ydCB7IEFpVHdvdG9uZVN0YXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvQWlcIjtcclxuaW1wb3J0IHsgQnNDYWxlbmRhciB9IGZyb20gXCJyZWFjdC1pY29ucy9Cc1wiO1xyXG5pbXBvcnQgeyBSaU1vbmV5RXVyb0NpcmNsZUxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvUmlcIjtcclxuaW1wb3J0IHsgR2lMYXVyZWxDcm93biB9IGZyb20gXCJyZWFjdC1pY29ucy9HaVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgQnJlYWRDcnVtcHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnJlYWRDcnVtcHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3QoKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Nob3csIGhhbmRsZVNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG5hbWUgPSByb3V0ZXIucXVlcnkucGlkO1xyXG4gIGNvbnN0IHRyYW5zaXRpb25OYXZCYXIgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDApIHtcclxuICAgICAgaGFuZGxlU2hvdyh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhhbmRsZVNob3coZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjEzMzcvY2FzaW5vcy8ke25hbWV9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgICBzZXREYXRhKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH0sIFtuYW1lXSk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRyYW5zaXRpb25OYXZCYXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdHJhbnNpdGlvbk5hdkJhcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIHtkYXRhICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faW5uZXJcIj5cclxuICAgICAgICAgICAgICB7LyogPEJyZWFkQ3J1bXBzIG5hbWU9e2RhdGEudGl0bGV9IC8+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfX3RpdGxlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwOi8vbG9jYWxob3N0OjEzMzcke2RhdGEuT3ZlcmxheS51cmx9KWAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdGl0bGUtb3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X190aXRsZS10ZXh0XCI+IHtkYXRhLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPENhc2lub1dyYXBwZXIgcG9zdD17dHJ1ZX0gcmV2aWV3PXtmYWxzZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+T3BpbmlvbnMgb24ge2RhdGEudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtkYXRhLm1haW5Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb21wYW55LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UXVpY2tmYWN0cyA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdpTGF1cmVsQ3Jvd24gLz4gT3duZXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lLXJpZ2h0XCI+U29tZWJvZHk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0NhbGVuZGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvdW5kZWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lLXJpZ2h0XCI+MjAyMC0wMS0wMTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpTW9uZXlFdXJvQ2lyY2xlTGluZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNaW4uIGRlcG9zaXRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lLXJpZ2h0XCI+4oKsMzA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPldoYXQgd2UgdGhpbmsgYWJvdXQge2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5Cb251c2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5XZWJzaXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5HYW1lIHByb3ZpZGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmctbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1sZWZ0XCI+UGF5bWVudCBwcm92aWRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmF0aW5nLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtbGVmdFwiPlN1cHBvcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmF0aW5nLWdsb2JhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ob3RlIGdsb2JhbDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj44LjIwIC8gMTA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRhY3Rmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJwb3N0X19maXhlZFwiLCBzaG93ICYmIFwiYWN0aXZlXCIpfT5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q2FzaW5vV3JhcHBlciBwb3N0PXt0cnVlfSByZXZpZXc9e2ZhbHNlfSAvPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=