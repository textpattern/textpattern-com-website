/*!
* PreloadJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/


//##############################################################################
// version.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";

	var s = createjs.PreloadJS = createjs.PreloadJS || {};
})();

//##############################################################################
// extend.js
//##############################################################################

this.createjs = this.createjs||{};

/**
 * @class Utility Methods
 */

/**
 * Sets up the prototype chain and constructor property for a new class.
 *
 * This should be called right after creating the class constructor.
 *
 * 	function MySubClass() {}
 * 	createjs.extend(MySubClass, MySuperClass);
 * 	MySubClass.prototype.doSomething = function() { }
 *
 * 	var foo = new MySubClass();
 * 	console.log(foo instanceof MySuperClass); // true
 * 	console.log(foo.prototype.constructor === MySubClass); // true
 *
 * @method extend
 * @param {Function} subclass The subclass.
 * @param {Function} superclass The superclass to extend.
 * @return {Function} Returns the subclass's new prototype.
 */
createjs.extend = function(subclass, superclass) {
	"use strict";

	function o() { this.constructor = subclass; }
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o());
};

//##############################################################################
// promote.js
//##############################################################################

this.createjs = this.createjs||{};

/**
 * @class Utility Methods
 */

/**
 * Promotes any methods on the super class that were overridden, by creating an alias in the format `prefix_methodName`.
 * It is recommended to use the super class's name as the prefix.
 * An alias to the super class's constructor is always added in the format `prefix_constructor`.
 * This allows the subclass to call super class methods without using `function.call`, providing better performance.
 *
 * For example, if `MySubClass` extends `MySuperClass`, and both define a `draw` method, then calling `promote(MySubClass, "MySuperClass")`
 * would add a `MySuperClass_constructor` method to MySubClass and promote the `draw` method on `MySuperClass` to the
 * prototype of `MySubClass` as `MySuperClass_draw`.
 *
 * This should be called after the class's prototype is fully defined.
 *
 * 	function ClassA(name) {
 * 		this.name = name;
 * 	}
 * 	ClassA.prototype.greet = function() {
 * 		return "Hello "+this.name;
 * 	}
 *
 * 	function ClassB(name, punctuation) {
 * 		this.ClassA_constructor(name);
 * 		this.punctuation = punctuation;
 * 	}
 * 	createjs.extend(ClassB, ClassA);
 * 	ClassB.prototype.greet = function() {
 * 		return this.ClassA_greet()+this.punctuation;
 * 	}
 * 	createjs.promote(ClassB, "ClassA");
 *
 * 	var foo = new ClassB("World", "!?!");
 * 	console.log(foo.greet()); // Hello World!?!
 *
 * @method promote
 * @param {Function} subclass The class to promote super class methods on.
 * @param {String} prefix The prefix to add to the promoted method names. Usually the name of the superclass.
 * @return {Function} Returns the subclass.
 */
createjs.promote = function(subclass, prefix) {
	"use strict";

	var subP = subclass.prototype, supP = (Object.getPrototypeOf&&Object.getPrototypeOf(subP))||subP.__proto__;
	if (supP) {
		subP[(prefix+="_") + "constructor"] = supP.constructor; // constructor is not always innumerable
		for (var n in supP) {
			if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) { subP[prefix + n] = supP[n]; }
		}
	}
	return subclass;
};

//##############################################################################
// proxy.js
//##############################################################################

this.createjs = this.createjs||{};

/**
 * Various utilities that the CreateJS Suite uses. Utilities are created as separate files, and will be available on the
 * createjs namespace directly.
 *
 * <h4>Example</h4>
 *
 *      myObject.addEventListener("change", createjs.proxy(myMethod, scope));
 *
 * @class Utility Methods
 * @main Utility Methods
 */

(function() {
	"use strict";

	/**
	 * A function proxy for methods. By default, JavaScript methods do not maintain scope, so passing a method as a
	 * callback will result in the method getting called in the scope of the caller. Using a proxy ensures that the
	 * method gets called in the correct scope.
	 *
	 * Additional arguments can be passed that will be applied to the function when it is called.
	 *
	 * <h4>Example</h4>
	 *
	 *      myObject.addEventListener("event", createjs.proxy(myHandler, this, arg1, arg2));
	 *
	 *      function myHandler(arg1, arg2) {
	 *           // This gets called when myObject.myCallback is executed.
	 *      }
	 *
	 * @method proxy
	 * @param {Function} method The function to call
	 * @param {Object} scope The scope to call the method name on
	 * @param {mixed} [arg] * Arguments that are appended to the callback for additional params.
	 * @public
	 * @static
	 */
	createjs.proxy = function (method, scope) {
		var aArgs = Array.prototype.slice.call(arguments, 2);
		return function () {
			return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs));
		};
	}

}());

//##############################################################################
// indexOf.js
//##############################################################################

this.createjs = this.createjs||{};

/**
 * @class Utility Methods
 */

/**
 * Finds the first occurrence of a specified value searchElement in the passed in array, and returns the index of
 * that value.  Returns -1 if value is not found.
 *
 *      var i = createjs.indexOf(myArray, myElementToFind);
 *
 * @method indexOf
 * @param {Array} array Array to search for searchElement
 * @param searchElement Element to find in array.
 * @return {Number} The first index of searchElement in array.
 */
createjs.indexOf = function (array, searchElement){
	"use strict";

	for (var i = 0,l=array.length; i < l; i++) {
		if (searchElement === array[i]) {
			return i;
		}
	}
	return -1;
};

//##############################################################################
// Event.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";

// constructor:
	/**
	 * Contains properties and methods shared by all events for use with
	 * {{#crossLink "EventDispatcher"}}{{/crossLink}}.
	 *
	 * Note that Event objects are often reused, so you should never
	 * rely on an event object's state outside of the call stack it was received in.
	 * @class Event
	 * @param {String} type The event type.
	 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
	 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
	 * @constructor
	 **/
	function Event(type, bubbles, cancelable) {


	// public properties:
		/**
		 * The type of event.
		 * @property type
		 * @type String
		 **/
		this.type = type;

		/**
		 * The object that generated an event.
		 * @property target
		 * @type Object
		 * @default null
		 * @readonly
		*/
		this.target = null;

		/**
		 * The current target that a bubbling event is being dispatched from. For non-bubbling events, this will
		 * always be the same as target. For example, if childObj.parent = parentObj, and a bubbling event
		 * is generated from childObj, then a listener on parentObj would receive the event with
		 * target=childObj (the original target) and currentTarget=parentObj (where the listener was added).
		 * @property currentTarget
		 * @type Object
		 * @default null
		 * @readonly
		*/
		this.currentTarget = null;

		/**
		 * For bubbling events, this indicates the current event phase:<OL>
		 * 	<LI> capture phase: starting from the top parent to the target</LI>
		 * 	<LI> at target phase: currently being dispatched from the target</LI>
		 * 	<LI> bubbling phase: from the target to the top parent</LI>
		 * </OL>
		 * @property eventPhase
		 * @type Number
		 * @default 0
		 * @readonly
		*/
		this.eventPhase = 0;

		/**
		 * Indicates whether the event will bubble through the display list.
		 * @property bubbles
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.bubbles = !!bubbles;

		/**
		 * Indicates whether the default behaviour of this event can be cancelled via
		 * {{#crossLink "Event/preventDefault"}}{{/crossLink}}. This is set via the Event constructor.
		 * @property cancelable
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.cancelable = !!cancelable;

		/**
		 * Indicates if {{#crossLink "Event/preventDefault"}}{{/crossLink}} has been called
		 * on this event.
		 * @property defaultPrevented
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.defaultPrevented = false;

		/**
		 * Indicates if {{#crossLink "Event/stopPropagation"}}{{/crossLink}} or
		 * {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called on this event.
		 * @property propagationStopped
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.propagationStopped = false;

		/**
		 * Indicates if {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called
		 * on this event.
		 * @property immediatePropagationStopped
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.immediatePropagationStopped = false;

		/**
		 * Indicates if {{#crossLink "Event/remove"}}{{/crossLink}} has been called on this event.
		 * @property removed
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.removed = false;
	}
	var p = Event.prototype;

	createjs.Event = Event;
}());

//##############################################################################
// ErrorEvent.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";

	/**
	 * A general error {{#crossLink "Event"}}{{/crossLink}}, that describes an error that occurred, as well as any details.
	 * @class ErrorEvent
	 * @param {String} [title] The error title
	 * @param {String} [message] The error description
	 * @param {Object} [data] Additional error data
	 * @constructor
	 */
	function ErrorEvent(title, message, data) {
		this.Event_constructor("error");

		/**
		 * The short error title, which indicates the type of error that occurred.
		 * @property title
		 * @type String
		 */
		this.title = title;

		/**
		 * The verbose error message, containing details about the error.
		 * @property message
		 * @type String
		 */
		this.message = message;

		/**
		 * Additional data attached to an error.
		 * @property data
		 * @type {Object}
		 */
		this.data = data;
	}

	var p = createjs.extend(ErrorEvent, createjs.Event);

	p.clone = function() {
		return new createjs.ErrorEvent(this.title, this.message, this.data);
	};

	createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event");

}());

//##############################################################################
// EventDispatcher.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";

	function EventDispatcher() {


	// private properties:
		/**
		 * @protected
		 * @property _listeners
		 * @type Object
		 **/
		this._listeners = null;

		/**
		 * @protected
		 * @property _captureListeners
		 * @type Object
		 **/
		this._captureListeners = null;
	}
	var p = EventDispatcher.prototype;

// static public methods:
	/**
	 * Static initializer to mix EventDispatcher methods into a target object or prototype.
	 *
	 * 		EventDispatcher.initialize(MyClass.prototype); // add to the prototype of the class
	 * 		EventDispatcher.initialize(myObject); // add to a specific instance
	 *
	 * @method initialize
	 * @static
	 * @param {Object} target The target object to inject EventDispatcher methods into. This can be an instance or a
	 * prototype.
	 **/
	EventDispatcher.initialize = function(target) {
		target.addEventListener = p.addEventListener;
		target.on = p.on;
		target.hasEventListener = p.hasEventListener;
		target.dispatchEvent = p.dispatchEvent;
		target._dispatchEvent = p._dispatchEvent;
	};


// public methods:
	/**
	 * Adds the specified event listener. Note that adding multiple listeners to the same function will result in
	 * multiple callbacks getting fired.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.addEventListener("click", handleClick);
	 *      function handleClick(event) {
	 *         // Click happened.
	 *      }
	 *
	 * @method addEventListener
	 * @param {String} type The string type of the event.
	 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
	 * the event is dispatched.
	 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	 * @return {Function | Object} Returns the listener for chaining or assignment.
	 **/
	p.addEventListener = function(type, listener, useCapture) {
		var listeners;
		if (useCapture) {
			listeners = this._captureListeners = this._captureListeners||{};
		} else {
			listeners = this._listeners = this._listeners||{};
		}
		var arr = listeners[type];
		arr = listeners[type]; // remove may have deleted the array
		if (!arr) { listeners[type] = [listener];  }
		else { arr.push(listener); }
		return listener;
	};

	/**
	 * A shortcut method for using addEventListener that makes it easier to specify an execution scope, have a listener
	 * only run once, associate arbitrary data with the listener, and remove the listener.
	 *
	 * <b>IMPORTANT:</b> To remove a listener added with `on`, you must pass in the returned wrapper function as the listener, or use
	 * {{#crossLink "Event/remove"}}{{/crossLink}}. Likewise, each time you call `on` a NEW wrapper function is subscribed, so multiple calls
	 * to `on` with the same params will create multiple listeners.
	 *
	 * <h4>Example</h4>
	 *
	 * 		var listener = myBtn.on("click", handleClick, null, false, {count:3});
	 * 		function handleClick(evt, data) {
	 * 			data.count -= 1;
	 * 			console.log(this == myBtn); // true - scope defaults to the dispatcher
	 * 			if (data.count == 0) {
	 * 				alert("clicked 3 times!");
	 * 				myBtn.off("click", listener);
	 * 				// alternately: evt.remove();
	 * 			}
	 * 		}
	 *
	 * @method on
	 * @param {String} type The string type of the event.
	 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
	 * the event is dispatched.
	 * @param {Object} [scope] The scope to execute the listener in. Defaults to the dispatcher/currentTarget for function listeners, and to the listener itself for object listeners (ie. using handleEvent).
	 * @param {Boolean} [once=false] If true, the listener will remove itself after the first time it is triggered.
	 * @param {*} [data] Arbitrary data that will be included as the second parameter when the listener is called.
	 * @param {Boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	 **/
	p.on = function(type, listener, scope, once, data, useCapture) {
		if (listener.handleEvent) {
			scope = scope||listener;
			listener = listener.handleEvent;
		}
		scope = scope||this;
		return this.addEventListener(type, function(evt) {
				listener.call(scope, evt, data);
				once&&evt.remove();
			}, useCapture);
	};

	/**
	 * Dispatches the specified event to all listeners.
	 *
	 * <h4>Example</h4>
	 *
	 *      // Use a string event
	 *      this.dispatchEvent("complete");
	 *
	 *      // Use an Event instance
	 *      var event = new createjs.Event("progress");
	 *      this.dispatchEvent(event);
	 *
	 * @method dispatchEvent
	 * @param {Object | String | Event} eventObj An object with a "type" property, or a string type.
	 * While a generic object will work, it is recommended to use a CreateJS Event instance. If a string is used,
	 * dispatchEvent will construct an Event instance if necessary with the specified type. This latter approach can
	 * be used to avoid event object instantiation for non-bubbling events that may not have any listeners.
	 * @param {Boolean} [bubbles] Specifies the `bubbles` value when a string was passed to eventObj.
	 * @param {Boolean} [cancelable] Specifies the `cancelable` value when a string was passed to eventObj.
	 * @return {Boolean} Returns false if `preventDefault()` was called on a cancelable event, true otherwise.
	 **/
	p.dispatchEvent = function(eventObj, bubbles, cancelable) {
		if (typeof eventObj == "string") {
			// skip everything if there's no listeners and it doesn't bubble:
			var listeners = this._listeners;
			if (!bubbles && (!listeners || !listeners[eventObj])) { return true; }
			eventObj = new createjs.Event(eventObj, bubbles, cancelable);
		} else if (eventObj.target && eventObj.clone) {
			// redispatching an active event object, so clone it:
			eventObj = eventObj.clone();
		}

		// TODO: it would be nice to eliminate this. Maybe in favour of evtObj instanceof Event? Or !!evtObj.createEvent
		try { eventObj.target = this; } catch (e) {} // try/catch allows redispatching of native events

		if (!eventObj.bubbles || !this.parent) {
			this._dispatchEvent(eventObj, 2);
		} else {
			var top=this, list=[top];
			while (top.parent) { list.push(top = top.parent); }
			var i, l=list.length;

			// capture & atTarget
			for (i=l-1; i>=0 && !eventObj.propagationStopped; i--) {
				list[i]._dispatchEvent(eventObj, 1+(i==0));
			}
			// bubbling
			for (i=1; i<l && !eventObj.propagationStopped; i++) {
				list[i]._dispatchEvent(eventObj, 3);
			}
		}
		return !eventObj.defaultPrevented;
	};

	/**
	 * Indicates whether there is at least one listener for the specified event type.
	 * @method hasEventListener
	 * @param {String} type The string type of the event.
	 * @return {Boolean} Returns true if there is at least one listener for the specified event.
	 **/
	p.hasEventListener = function(type) {
		var listeners = this._listeners, captureListeners = this._captureListeners;
		return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
	};

// private methods:
	/**
	 * @method _dispatchEvent
	 * @param {Object | Event} eventObj
	 * @param {Object} eventPhase
	 * @protected
	 **/
	p._dispatchEvent = function(eventObj, eventPhase) {
		var l, arr, listeners = (eventPhase <= 2) ? this._captureListeners : this._listeners;
		if (eventObj && listeners && (arr = listeners[eventObj.type]) && (l=arr.length)) {
			try { eventObj.currentTarget = this; } catch (e) {}
			try { eventObj.eventPhase = eventPhase|0; } catch (e) {}
			eventObj.removed = false;

			arr = arr.slice(); // to avoid issues with items being removed or added during the dispatch
			for (var i=0; i<l && !eventObj.immediatePropagationStopped; i++) {
				var o = arr[i];
				if (o.handleEvent) { o.handleEvent(eventObj); }
				else { o(eventObj); }
				if (eventObj.removed) {
					this.off(eventObj.type, o, eventPhase==1);
					eventObj.removed = false;
				}
			}
		}
		if (eventPhase === 2) { this._dispatchEvent(eventObj, 2.1); }
	};


	createjs.EventDispatcher = EventDispatcher;
}());

//##############################################################################
// ProgressEvent.js
//##############################################################################

this.createjs = this.createjs || {};

(function (scope) {
	"use strict";

	// constructor
	/**
	 * A CreateJS {{#crossLink "Event"}}{{/crossLink}} that is dispatched when progress changes.
	 * @class ProgressEvent
	 * @param {Number} loaded The amount that has been loaded. This can be any number relative to the total.
	 * @param {Number} [total=1] The total amount that will load. This will default to 1, so if the `loaded` value is
	 * a percentage (between 0 and 1), it can be omitted.
	 * @todo Consider having this event be a "fileprogress" event as well
	 * @constructor
	 */
	function ProgressEvent(loaded, total) {
		this.Event_constructor("progress");

		/**
		 * The amount that has been loaded (out of a total amount)
		 * @property loaded
		 * @type {Number}
		 */
		this.loaded = loaded;

		/**
		 * The total "size" of the load.
		 * @property total
		 * @type {Number}
		 * @default 1
		 */
		this.total = (total == null) ? 1 : total;

		/**
		 * The percentage (out of 1) that the load has been completed. This is calculated using `loaded/total`.
		 * @property progress
		 * @type {Number}
		 * @default 0
		 */
		this.progress = (total == 0) ? 0 : this.loaded / this.total;
	};

	var p = createjs.extend(ProgressEvent, createjs.Event);

	/**
	 * Returns a clone of the ProgressEvent instance.
	 * @method clone
	 * @return {ProgressEvent} a clone of the Event instance.
	 **/
	p.clone = function() {
		return new createjs.ProgressEvent(this.loaded, this.total);
	};

	createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event");

}(window));

//##############################################################################
// Elements.js
//##############################################################################

(function () {

	/**
	 * Convenience methods for creating various elements used by PrelaodJS.
	 *
	 * @class DomUtils
	 */
	var s = {};

	s.a = function() {
		return s.el("a");
	}

	s.img = function() {
		return s.el("img");
	}

	s.el = function(name) {
		return document.createElement(name);
	}

	createjs.Elements = s;

}());

//##############################################################################
// URLUtils.js
//##############################################################################

(function () {

	/**
	 * Utilities that assist with parsing load items, and determining file types, etc.
	 * @class URLUtils
	 */
	var s = {};

	/**
	 * The Regular Expression used to test file URLS for an absolute path.
	 * @property ABSOLUTE_PATH
	 * @type {RegExp}
	 * @static
	 */
	s.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i;

	/**
	 * The Regular Expression used to test file URLS for a relative path.
	 * @property RELATIVE_PATH
	 * @type {RegExp}
	 * @static
	 */
	s.RELATIVE_PATT = (/^[./]*?\//i);

	/**
	 * The Regular Expression used to test file URLS for an extension. Note that URIs must already have the query string
	 * removed.
	 * @property EXTENSION_PATT
	 * @type {RegExp}
	 * @static
	 */
	s.EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i;

	/**
	 * Parse a file path to determine the information we need to work with it. Currently, PreloadJS needs to know:
	 * <ul>
	 *     <li>If the path is absolute. Absolute paths start with a protocol (such as `http://`, `file://`, or
	 *     `//networkPath`)</li>
	 *     <li>If the path is relative. Relative paths start with `../` or `/path` (or similar)</li>
	 *     <li>The file extension. This is determined by the filename with an extension. Query strings are dropped, and
	 *     the file path is expected to follow the format `name.ext`.</li>
	 * </ul>
	 *
	 * @method parseURI
	 * @param {String} path
	 * @returns {Object} An Object with an `absolute` and `relative` Boolean values,
	 * 	the pieces of the path (protocol, hostname, port, pathname, search, hash, host)
	 * 	as well as an optional 'extension` property, which is the lowercase extension.
	 *
	 * @static
	 */
	s.parseURI = function (path) {
		var info = {
			absolute: false,
			relative: false,
			protocol: null,
			hostname: null,
			port: null,
			pathname: null,
			search: null,
			hash: null,
			host: null
		};

		if (path == null) { return info; }

		// Inject the path parts.
		var parser = createjs.Elements.a();
		parser.href = path;

		for (var n in info) {
			if (n in parser) {
				info[n] = parser[n];
			}
		}

		// Drop the query string
		var queryIndex = path.indexOf("?");
		if (queryIndex > -1) {
			path = path.substr(0, queryIndex);
		}

		// Absolute
		var match;
		if (s.ABSOLUTE_PATT.test(path)) {
			info.absolute = true;

			// Relative
		} else if (s.RELATIVE_PATT.test(path)) {
			info.relative = true;
		}

		// Extension
		if (match = path.match(s.EXTENSION_PATT)) {
			info.extension = match[1].toLowerCase();
		}

		return info;
	};

	createjs.URLUtils = s;

}());

//##############################################################################
// DomUtils.js
//##############################################################################

(function () {

	/**
	 * A few utilities for interacting with the dom.
	 * @class DomUtils
	 */
	var s = {
		container: null
	};

	s.appendToHead = function (el) {
		s.getHead().appendChild(el);
	}

	s.appendToBody = function (el) {
		if (s.container == null) {
			s.container = document.createElement("div");
			s.container.id = "preloadjs-container";
			var style = s.container.style;
			style.visibility = "hidden";
			style.position = "absolute";
			style.width = s.container.style.height = "10px";
			style.overflow = "hidden";
			style.transform = style.msTransform = style.webkitTransform = style.oTransform = "translate(-10px, -10px)"; //LM: Not working
			s.getBody().appendChild(s.container);
		}
		s.container.appendChild(el);
	}

	s.getBody = function () {
		return document.body || document.getElementsByTagName("body")[0];
	}

	s.isImageTag = function(item) {
		return item instanceof HTMLImageElement;
	};

	createjs.DomUtils = s;

}());

//##############################################################################
// Types.js
//##############################################################################

this.createjs = this.createjs || {};

(function() {
	var s = {};

	/**
	 * The preload type for generic binary types. Note that images are loaded as binary files when using XHR.
	 * @property BINARY
	 * @type {String}
	 * @default binary
	 * @static
	 * @since 0.6.0
	 */
	s.BINARY = "binary";

	/**
	 * The preload type for css files. CSS files are loaded using a &lt;link&gt; when loaded with XHR, or a
	 * &lt;style&gt; tag when loaded with tags.
	 * @property CSS
	 * @type {String}
	 * @default css
	 * @static
	 * @since 0.6.0
	 */
	s.CSS = "css";

	/**
	 * The preload type for font files.
	 * @property FONT
	 * @type {String}
	 * @default font
	 * @static
	 * @since 0.9.0
	 */
	s.FONT = "font";

	/**
	 * The preload type for fonts specified with CSS (such as Google fonts)
	 * @property FONTCSS
	 * @type {String}
	 * @default fontcss
	 * @static
	 * @since 0.9.0
	 */
	s.FONTCSS = "fontcss";

	/**
	 * The preload type for image files, usually png, gif, or jpg/jpeg. Images are loaded into an &lt;image&gt; tag.
	 * @property IMAGE
	 * @type {String}
	 * @default image
	 * @static
	 * @since 0.6.0
	 */
	s.IMAGE = "image";

	/**
	 * The preload type for javascript files, usually with the "js" file extension. JavaScript files are loaded into a
	 * &lt;script&gt; tag.
	 *
	 * Since version 0.4.1+, due to how tag-loaded scripts work, all JavaScript files are automatically injected into
	 * the body of the document to maintain parity between XHR and tag-loaded scripts. In version 0.4.0 and earlier,
	 * only tag-loaded scripts are injected.
	 * @property JAVASCRIPT
	 * @type {String}
	 * @default javascript
	 * @static
	 * @since 0.6.0
	 */
	s.JAVASCRIPT = "javascript";

	/**
	 * The preload type for json files, usually with the "json" file extension. JSON data is loaded and parsed into a
	 * JavaScript object. Note that if a `callback` is present on the load item, the file will be loaded with JSONP,
	 * no matter what the {{#crossLink "LoadQueue/preferXHR:property"}}{{/crossLink}} property is set to, and the JSON
	 * must contain a matching wrapper function.
	 * @property JSON
	 * @type {String}
	 * @default json
	 * @static
	 * @since 0.6.0
	 */
	s.JSON = "json";

	/**
	 * The preload type for jsonp files, usually with the "json" file extension. JSON data is loaded and parsed into a
	 * JavaScript object. You are required to pass a callback parameter that matches the function wrapper in the JSON.
	 * Note that JSONP will always be used if there is a callback present, no matter what the {{#crossLink "LoadQueue/preferXHR:property"}}{{/crossLink}}
	 * property is set to.
	 * @property JSONP
	 * @type {String}
	 * @default jsonp
	 * @static
	 * @since 0.6.0
	 */
	s.JSONP = "jsonp";

	/**
	 * The preload type for json-based manifest files, usually with the "json" file extension. The JSON data is loaded
	 * and parsed into a JavaScript object. PreloadJS will then look for a "manifest" property in the JSON, which is an
	 * Array of files to load, following the same format as the {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}
	 * method. If a "callback" is specified on the manifest object, then it will be loaded using JSONP instead,
	 * regardless of what the {{#crossLink "LoadQueue/preferXHR:property"}}{{/crossLink}} property is set to.
	 * @property MANIFEST
	 * @type {String}
	 * @default manifest
	 * @static
	 * @since 0.6.0
	 */
	s.MANIFEST = "manifest";

	/**
	 * The preload type for sound files, usually mp3, ogg, or wav. When loading via tags, audio is loaded into an
	 * &lt;audio&gt; tag.
	 * @property SOUND
	 * @type {String}
	 * @default sound
	 * @static
	 * @since 0.6.0
	 */
	s.SOUND = "sound";

	/**
	 * The preload type for video files, usually mp4, ts, or ogg. When loading via tags, video is loaded into an
	 * &lt;video&gt; tag.
	 * @property VIDEO
	 * @type {String}
	 * @default video
	 * @static
	 * @since 0.6.0
	 */
	s.VIDEO = "video";

	/**
	 * The preload type for SpriteSheet files. SpriteSheet files are JSON files that contain string image paths.
	 * @property SPRITESHEET
	 * @type {String}
	 * @default spritesheet
	 * @static
	 * @since 0.6.0
	 */
	s.SPRITESHEET = "spritesheet";

	/**
	 * The preload type for SVG files.
	 * @property SVG
	 * @type {String}
	 * @default svg
	 * @static
	 * @since 0.6.0
	 */
	s.SVG = "svg";

	/**
	 * The preload type for text files, which is also the default file type if the type can not be determined. Text is
	 * loaded as raw text.
	 * @property TEXT
	 * @type {String}
	 * @default text
	 * @static
	 * @since 0.6.0
	 */
	s.TEXT = "text";

	/**
	 * The preload type for xml files. XML is loaded into an XML document.
	 * @property XML
	 * @type {String}
	 * @default xml
	 * @static
	 * @since 0.6.0
	 */
	s.XML = "xml";

	createjs.Types = s;
}());

//##############################################################################
// Methods.js
//##############################################################################

this.createjs = this.createjs || {};

(function() {
	var s = {};

	/**
	 * Defines a POST request, use for a method value when loading data.
	 * @property POST
	 * @type {string}
	 * @default post
	 * @static
	 */
	s.POST = "POST";

	/**
	 * Defines a GET request, use for a method value when loading data.
	 * @property GET
	 * @type {string}
	 * @default get
	 * @static
	 */
	s.GET = "GET";

	createjs.Methods = s;
}());

//##############################################################################
// LoadItem.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";

	/**
	 * All loaders accept an item containing the properties defined in this class. If a raw object is passed instead,
	 * it will not be affected, but it must contain at least a {{#crossLink "src:property"}}{{/crossLink}} property. A
	 * string path or HTML tag is also acceptable, but it will be automatically converted to a LoadItem using the
	 * {{#crossLink "create"}}{{/crossLink}} method by {{#crossLink "AbstractLoader"}}{{/crossLink}}
	 * @class LoadItem
	 * @constructor
	 * @since 0.6.0
	 */
	function LoadItem() {
		/**
		 * The source of the file that is being loaded. This property is <b>required</b>. The source can either be a
		 * string (recommended), or an HTML tag.
		 * This can also be an object, but in that case it has to include a type and be handled by a plugin.
		 * @property src
		 * @type {String}
		 * @default null
		 */
		this.src = null;

		/**
		 * The type file that is being loaded. The type of the file is usually inferred by the extension, but can also
		 * be set manually. This is helpful in cases where a file does not have an extension.
		 * @property type
		 * @type {String}
		 * @default null
		 */
		this.type = null;

		/**
		 * A string identifier which can be used to reference the loaded object. If none is provided, this will be
		 * automatically set to the {{#crossLink "src:property"}}{{/crossLink}}.
		 * @property id
		 * @type {String}
		 * @default null
		 */
		this.id = null;

		/**
		 * Determines if a manifest will maintain the order of this item, in relation to other items in the manifest
		 * that have also set the `maintainOrder` property to `true`. This only applies when the max connections has
		 * been set above 1 (using {{#crossLink "LoadQueue/setMaxConnections"}}{{/crossLink}}). Everything with this
		 * property set to `false` will finish as it is loaded. Ordered items are combined with script tags loading in
		 * order when {{#crossLink "LoadQueue/maintainScriptOrder:property"}}{{/crossLink}} is set to `true`.
		 * @property maintainOrder
		 * @type {Boolean}
		 * @default false
		 */
		this.maintainOrder = false;

		/**
		 * A callback used by JSONP requests that defines what global method to call when the JSONP content is loaded.
		 * @property callback
		 * @type {String}
		 * @default null
		 */
		this.callback = null;

		/**
		 * An arbitrary data object, which is included with the loaded object.
		 * @property data
		 * @type {Object}
		 * @default null
		 */
		this.data = null;

		/**
		 * The request method used for HTTP calls. Both {{#crossLink "Methods/GET:property"}}{{/crossLink}} or
		 * {{#crossLink "Methods/POST:property"}}{{/crossLink}} request types are supported, and are defined as
		 * constants on {{#crossLink "AbstractLoader"}}{{/crossLink}}.
		 * @property method
		 * @type {String}
		 * @default GET
		 */
		this.method = createjs.Methods.GET;

		/**
		 * An object hash of name/value pairs to send to the server.
		 * @property values
		 * @type {Object}
		 * @default null
		 */
		this.values = null;

		/**
		 * An object hash of headers to attach to an XHR request. PreloadJS will automatically attach some default
		 * headers when required, including "Origin", "Content-Type", and "X-Requested-With". You may override the
		 * default headers by including them in your headers object.
		 * @property headers
		 * @type {Object}
		 * @default null
		 */
		this.headers = null;

		/**
		 * Enable credentials for XHR requests.
		 * @property withCredentials
		 * @type {Boolean}
		 * @default false
		 */
		this.withCredentials = false;

		/**
		 * Set the mime type of XHR-based requests. This is automatically set to "text/plain; charset=utf-8" for text
		 * based files (json, xml, text, css, js).
		 * @property mimeType
		 * @type {String}
		 * @default null
		 */
		this.mimeType = null;

		/**
		 * Sets the crossOrigin attribute for CORS-enabled images loading cross-domain.
		 * @property crossOrigin
		 * @type {boolean}
		 * @default Anonymous
		 */
		this.crossOrigin = null;

		/**
		 * The duration in milliseconds to wait before a request times out. This only applies to tag-based and and XHR
		 * (level one) loading, as XHR (level 2) provides its own timeout event.
		 * @property loadTimeout
		 * @type {Number}
		 * @default 8000 (8 seconds)
		 */
		this.loadTimeout = s.LOAD_TIMEOUT_DEFAULT;
	};

	var p = LoadItem.prototype = {};
	var s = LoadItem;

	/**
	 * Default duration in milliseconds to wait before a request times out. This only applies to tag-based and and XHR
	 * (level one) loading, as XHR (level 2) provides its own timeout event.
	 * @property LOAD_TIMEOUT_DEFAULT
	 * @type {number}
	 * @static
	 */
	s.LOAD_TIMEOUT_DEFAULT = 8000;

	/**
	 * Create a LoadItem.
	 * <ul>
	 *     <li>String-based items are converted to a LoadItem with a populated {{#crossLink "src:property"}}{{/crossLink}}.</li>
	 *     <li>LoadItem instances are returned as-is</li>
	 *     <li>Objects are returned with any needed properties added</li>
	 * </ul>
	 * @method create
	 * @param {LoadItem|String|Object} value The load item value
	 * @returns {LoadItem|Object}
	 * @static
	 */
	s.create = function (value) {
		if (typeof value == "string") {
			var item = new LoadItem();
			item.src = value;
			return item;
		} else if (value instanceof s) {
			return value;
		} else if (value instanceof Object && value.src) {
			if (value.loadTimeout == null) {
				value.loadTimeout = s.LOAD_TIMEOUT_DEFAULT;
			}
			return value;
		} else {
			throw new Error("Type not recognized.");
		}
	};

	/**
	 * Provides a chainable shortcut method for setting a number of properties on the instance.
	 *
	 * <h4>Example</h4>
	 *
	 *      var loadItem = new createjs.LoadItem().set({src:"image.png", maintainOrder:true});
	 *
	 * @method set
	 * @param {Object} props A generic object containing properties to copy to the LoadItem instance.
	 * @return {LoadItem} Returns the instance the method is called on (useful for chaining calls.)
	*/
	p.set = function(props) {
		for (var n in props) { this[n] = props[n]; }
		return this;
	};

	createjs.LoadItem = s;

}());

//##############################################################################
// RequestUtils.js
//##############################################################################

(function () {

	/**
	 * Utilities that assist with parsing load items, and determining file types, etc.
	 * @class RequestUtils
	 */
	var s = {};

	/**
	 * Determine the type of the object using common extensions. Note that the type can be passed in with the load item
	 * if it is an unusual extension.
	 * @method getTypeByExtension
	 * @param {String} extension The file extension to use to determine the load type.
	 * @return {String} The determined load type (for example, `createjs.Types.IMAGE`). Will return `null` if
	 * the type can not be determined by the extension.
	 * @static
	 */
	s.getTypeByExtension = function (extension) {
		if (extension == null) {
			return createjs.Types.TEXT;
		}

		switch (extension.toLowerCase()) {
			case "jpeg":
			case "jpg":
			case "gif":
			case "png":
			case "webp":
			case "bmp":
				return createjs.Types.IMAGE;
			case "ogg":
			case "mp3":
			case "webm":
				return createjs.Types.SOUND;
			case "mp4":
			case "webm":
			case "ts":
				return createjs.Types.VIDEO;
			case "json":
				return createjs.Types.JSON;
			case "xml":
				return createjs.Types.XML;
			case "css":
				return createjs.Types.CSS;
			case "js":
				return createjs.Types.JAVASCRIPT;
			case 'svg':
				return createjs.Types.SVG;
			default:
				return createjs.Types.TEXT;
		}
	};

	createjs.RequestUtils = s;

}());

//##############################################################################
// AbstractLoader.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";

// constructor
	/**
	 * The base loader, which defines all the generic methods, properties, and events. All loaders extend this class,
	 * including the {{#crossLink "LoadQueue"}}{{/crossLink}}.
	 * @class AbstractLoader
	 * @param {LoadItem|object|string} loadItem The item to be loaded.
	 * @param {Boolean} [preferXHR] Determines if the LoadItem should <em>try</em> and load using XHR, or take a
	 * tag-based approach, which can be better in cross-domain situations. Not all loaders can load using one or the
	 * other, so this is a suggested directive.
	 * @param {String} [type] The type of loader. Loader types are defined as constants on the AbstractLoader class,
	 * such as {{#crossLink "IMAGE:property"}}{{/crossLink}}, {{#crossLink "CSS:property"}}{{/crossLink}}, etc.
	 * @extends EventDispatcher
	 */
	function AbstractLoader(loadItem, preferXHR, type) {
		this.EventDispatcher_constructor();

		// public properties
		/**
		 * If the loader has completed loading. This provides a quick check, but also ensures that the different approaches
		 * used for loading do not pile up resulting in more than one `complete` {{#crossLink "Event"}}{{/crossLink}}.
		 * @property loaded
		 * @type {Boolean}
		 * @default false
		 */
		this.loaded = false;

		/**
		 * Determine if the loader was canceled. Canceled loads will not fire complete events. Note that this property
		 * is readonly, so {{#crossLink "LoadQueue"}}{{/crossLink}} queues should be closed using {{#crossLink "LoadQueue/close"}}{{/crossLink}}
		 * instead.
		 * @property canceled
		 * @type {Boolean}
		 * @default false
		 * @readonly
		 */
		this.canceled = false;

		/**
		 * The current load progress (percentage) for this item. This will be a number between 0 and 1.
		 *
		 * <h4>Example</h4>
		 *
		 *     var queue = new createjs.LoadQueue();
		 *     queue.loadFile("largeImage.png");
		 *     queue.on("progress", function() {
		 *         console.log("Progress:", queue.progress, event.progress);
		 *     });
		 *
		 * @property progress
		 * @type {Number}
		 * @default 0
		 */
		this.progress = 0;

		/**
		 * The type of item this loader will load. See {{#crossLink "AbstractLoader"}}{{/crossLink}} for a full list of
		 * supported types.
		 * @property type
		 * @type {String}
		 */
		this.type = type;

		/**
		 * A formatter function that converts the loaded raw result into the final result. For example, the JSONLoader
		 * converts a string of text into a JavaScript object. Not all loaders have a resultFormatter, and this property
		 * can be overridden to provide custom formatting.
		 *
		 * Optionally, a resultFormatter can return a callback function in cases where the formatting needs to be
		 * asynchronous, such as creating a new image. The callback function is passed 2 parameters, which are callbacks
		 * to handle success and error conditions in the resultFormatter. Note that the resultFormatter method is
		 * called in the current scope, as well as the success and error callbacks.
		 *
		 * <h4>Example asynchronous resultFormatter</h4>
		 *
		 * 	function _formatResult(loader) {
		 * 		return function(success, error) {
		 * 			if (errorCondition) { error(errorDetailEvent); }
		 * 			success(result);
		 * 		}
		 * 	}
		 * @property resultFormatter
		 * @type {Function}
		 * @default null
		 */
		this.resultFormatter = null;

		// protected properties
		/**
		 * The {{#crossLink "LoadItem"}}{{/crossLink}} this loader represents. Note that this is null in a {{#crossLink "LoadQueue"}}{{/crossLink}},
		 * but will be available on loaders such as {{#crossLink "XMLLoader"}}{{/crossLink}} and {{#crossLink "ImageLoader"}}{{/crossLink}}.
		 * @property _item
		 * @type {LoadItem|Object}
		 * @private
		 */
		if (loadItem) {
			this._item = createjs.LoadItem.create(loadItem);
		} else {
			this._item = null;
		}

		/**
		 * Whether the loader will try and load content using XHR (true) or HTML tags (false).
		 * @property _preferXHR
		 * @type {Boolean}
		 * @private
		 */
		this._preferXHR = preferXHR;

		/**
		 * The loaded result after it is formatted by an optional {{#crossLink "resultFormatter"}}{{/crossLink}}. For
		 * items that are not formatted, this will be the same as the {{#crossLink "_rawResult:property"}}{{/crossLink}}.
		 * The result is accessed using the {{#crossLink "getResult"}}{{/crossLink}} method.
		 * @property _result
		 * @type {Object|String}
		 * @private
		 */
		this._result = null;

		/**
		 * The loaded result before it is formatted. The rawResult is accessed using the {{#crossLink "getResult"}}{{/crossLink}}
		 * method, and passing `true`.
		 * @property _rawResult
		 * @type {Object|String}
		 * @private
		 */
		this._rawResult = null;

		/**
		 * A list of items that loaders load behind the scenes. This does not include the main item the loader is
		 * responsible for loading. Examples of loaders that have sub-items include the {{#crossLink "SpriteSheetLoader"}}{{/crossLink}} and
		 * {{#crossLink "ManifestLoader"}}{{/crossLink}}.
		 * @property _loadItems
		 * @type {null}
		 * @protected
		 */
		this._loadedItems = null;

		/**
		 * The attribute the items loaded using tags use for the source.
		 * @type {string}
		 * @default null
		 * @private
		 */
		this._tagSrcAttribute = null;

		/**
		 * An HTML tag (or similar) that a loader may use to load HTML content, such as images, scripts, etc.
		 * @property _tag
		 * @type {Object}
		 * @private
		 */
		this._tag = null;
	};

	var p = createjs.extend(AbstractLoader, createjs.EventDispatcher);
	var s = AbstractLoader;

// Events
	/**
	 * The {{#crossLink "ProgressEvent"}}{{/crossLink}} that is fired when the overall progress changes. Prior to
	 * version 0.6.0, this was just a regular {{#crossLink "Event"}}{{/crossLink}}.
	 * @event progress
	 * @since 0.3.0
	 */

	/**
	 * The {{#crossLink "Event"}}{{/crossLink}} that is fired when a load starts.
	 * @event loadstart
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @since 0.3.1
	 */

	/**
	 * The {{#crossLink "Event"}}{{/crossLink}} that is fired when the entire queue has been loaded.
	 * @event complete
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @since 0.3.0
	 */

	/**
	 * The {{#crossLink "ErrorEvent"}}{{/crossLink}} that is fired when the loader encounters an error. If the error was
	 * encountered by a file, the event will contain the item that caused the error. Prior to version 0.6.0, this was
	 * just a regular {{#crossLink "Event"}}{{/crossLink}}.
	 * @event error
	 * @since 0.3.0
	 */

	/**
	 * The {{#crossLink "Event"}}{{/crossLink}} that is fired when the loader encounters an internal file load error.
	 * This enables loaders to maintain internal queues, and surface file load errors.
	 * @event fileerror
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type ("fileerror")
	 * @param {LoadItem|object} The item that encountered the error
	 * @since 0.6.0
	 */

	/**
	 * The {{#crossLink "Event"}}{{/crossLink}} that is fired when a loader internally loads a file. This enables
	 * loaders such as {{#crossLink "ManifestLoader"}}{{/crossLink}} to maintain internal {{#crossLink "LoadQueue"}}{{/crossLink}}s
	 * and notify when they have loaded a file. The {{#crossLink "LoadQueue"}}{{/crossLink}} class dispatches a
	 * slightly different {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}} event.
	 * @event fileload
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type ("fileload")
	 * @param {Object} item The file item which was specified in the {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}}
	 * or {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}} call. If only a string path or tag was specified, the
	 * object will contain that value as a `src` property.
	 * @param {Object} result The HTML tag or parsed result of the loaded item.
	 * @param {Object} rawResult The unprocessed result, usually the raw text or binary data before it is converted
	 * to a usable object.
	 * @since 0.6.0
	 */

	/**
	 * The {{#crossLink "Event"}}{{/crossLink}} that is fired after the internal request is created, but before a load.
	 * This allows updates to the loader for specific loading needs, such as binary or XHR image loading.
	 * @event initialize
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type ("initialize")
	 * @param {AbstractLoader} loader The loader that has been initialized.
	 */


	/**
	 * Get a reference to the manifest item that is loaded by this loader. In some cases this will be the value that was
	 * passed into {{#crossLink "LoadQueue"}}{{/crossLink}} using {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}} or
	 * {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}. However if only a String path was passed in, then it will
	 * be a {{#crossLink "LoadItem"}}{{/crossLink}}.
	 * @method getItem
	 * @return {Object} The manifest item that this loader is responsible for loading.
	 * @since 0.6.0
	 */
	p.getItem = function () {
		return this._item;
	};

	/**
	 * Get a reference to the content that was loaded by the loader (only available after the {{#crossLink "complete:event"}}{{/crossLink}}
	 * event is dispatched.
	 * @method getResult
	 * @param {Boolean} [raw=false] Determines if the returned result will be the formatted content, or the raw loaded
	 * data (if it exists).
	 * @return {Object}
	 * @since 0.6.0
	 */
	p.getResult = function (raw) {
		return raw ? this._rawResult : this._result;
	};

	/**
	 * Begin loading the item. This method is required when using a loader by itself.
	 *
	 * <h4>Example</h4>
	 *
	 *      var queue = new createjs.LoadQueue();
	 *      queue.on("complete", handleComplete);
	 *      queue.loadManifest(fileArray, false); // Note the 2nd argument that tells the queue not to start loading yet
	 *      queue.load();
	 *
	 * @method load
	 */
	p.load = function () {
		this._createRequest();

		this._request.on("complete", this, this);
		this._request.on("progress", this, this);
		this._request.on("loadStart", this, this);
		this._request.on("abort", this, this);
		this._request.on("timeout", this, this);
		this._request.on("error", this, this);

		var evt = new createjs.Event("initialize");
		evt.loader = this._request;
		this.dispatchEvent(evt);

		this._request.load();
	};

	/**
	 * Get any items loaded internally by the loader. The enables loaders such as {{#crossLink "ManifestLoader"}}{{/crossLink}}
	 * to expose items it loads internally.
	 * @method getLoadedItems
	 * @return {Array} A list of the items loaded by the loader.
	 * @since 0.6.0
	 */
	p.getLoadedItems = function () {
		return this._loadedItems;
	};


	// Private methods
	/**
	 * Create an internal request used for loading. By default, an {{#crossLink "XHRRequest"}}{{/crossLink}} or
	 * {{#crossLink "TagRequest"}}{{/crossLink}} is created, depending on the value of {{#crossLink "preferXHR:property"}}{{/crossLink}}.
	 * Other loaders may override this to use different request types, such as {{#crossLink "ManifestLoader"}}{{/crossLink}},
	 * which uses {{#crossLink "JSONLoader"}}{{/crossLink}} or {{#crossLink "JSONPLoader"}}{{/crossLink}} under the hood.
	 * @method _createRequest
	 * @protected
	 */
	p._createRequest = function() {
		if (!this._preferXHR) {
			this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
		} else {
			this._request = new createjs.XHRRequest(this._item);
		}
	};

	/**
	 * Dispatch a loadstart {{#crossLink "Event"}}{{/crossLink}}. Please see the {{#crossLink "AbstractLoader/loadstart:event"}}{{/crossLink}}
	 * event for details on the event payload.
	 * @method _sendLoadStart
	 * @protected
	 */
	p._sendLoadStart = function () {
		if (this._isCanceled()) { return; }
		this.dispatchEvent("loadstart");
	};

	/**
	 * Dispatch a {{#crossLink "ProgressEvent"}}{{/crossLink}}.
	 * @method _sendProgress
	 * @param {Number | Object} value The progress of the loaded item, or an object containing <code>loaded</code>
	 * and <code>total</code> properties.
	 * @protected
	 */
	p._sendProgress = function (value) {
		if (this._isCanceled()) { return; }
		var event = null;
		if (typeof(value) == "number") {
			this.progress = value;
			event = new createjs.ProgressEvent(this.progress);
		} else {
			event = value;
			this.progress = value.loaded / value.total;
			event.progress = this.progress;
			if (isNaN(this.progress) || this.progress == Infinity) { this.progress = 0; }
		}
		this.hasEventListener("progress") && this.dispatchEvent(event);
	};

	/**
	 * Dispatch a complete {{#crossLink "Event"}}{{/crossLink}}. Please see the {{#crossLink "AbstractLoader/complete:event"}}{{/crossLink}} event
	 * @method _sendComplete
	 * @protected
	 */
	p._sendComplete = function () {
		if (this._isCanceled()) { return; }

		this.loaded = true;

		var event = new createjs.Event("complete");
		event.rawResult = this._rawResult;

		if (this._result != null) {
			event.result = this._result;
		}

		this.dispatchEvent(event);
	};

	/**
	 * Determine if the load has been canceled. This is important to ensure that method calls or asynchronous events
	 * do not cause issues after the queue has been cleaned up.
	 * @method _isCanceled
	 * @return {Boolean} If the loader has been canceled.
	 * @protected
	 */
	p._isCanceled = function () {
		if (window.createjs == null || this.canceled) {
			return true;
		}
		return false;
	};

	/**
	 * A custom result formatter function, which is called just before a request dispatches its complete event. Most
	 * loader types already have an internal formatter, but this can be user-overridden for custom formatting. The
	 * formatted result will be available on Loaders using {{#crossLink "getResult"}}{{/crossLink}}, and passing `true`.
	 * @property resultFormatter
	 * @type Function
	 * @return {Object} The formatted result
	 * @since 0.6.0
	 */
	p.resultFormatter = null;

	/**
	 * Handle events from internal requests. By default, loaders will handle, and redispatch the necessary events, but
	 * this method can be overridden for custom behaviours.
	 * @method handleEvent
	 * @param {Event} event The event that the internal request dispatches.
	 * @protected
	 * @since 0.6.0
	 */
	p.handleEvent = function (event) {
		switch (event.type) {
			case "complete":
				this._rawResult = event.target._response;
				var result = this.resultFormatter && this.resultFormatter(this);
				// The resultFormatter is asynchronous
				if (result instanceof Function) {
					result.call(this,
							createjs.proxy(this._resultFormatSuccess, this),
							createjs.proxy(this._resultFormatFailed, this)
					);
				// The result formatter is synchronous
				} else {
					this._result =  result || this._rawResult;
					this._sendComplete();
				}
				break;
			case "progress":
				this._sendProgress(event);
				break;
			case "error":
				this._sendError(event);
				break;
			case "loadstart":
				this._sendLoadStart();
				break;
			case "abort":
			case "timeout":
				if (!this._isCanceled()) {
					this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + event.type.toUpperCase() + "_ERROR"));
				}
				break;
		}
	};

	/**
	 * The "success" callback passed to {{#crossLink "AbstractLoader/resultFormatter"}}{{/crossLink}} asynchronous
	 * functions.
	 * @method _resultFormatSuccess
	 * @param {Object} result The formatted result
	 * @private
	 */
	p._resultFormatSuccess = function (result) {
		this._result = result;
		this._sendComplete();
	};

	/**
	 * The "error" callback passed to {{#crossLink "AbstractLoader/resultFormatter"}}{{/crossLink}} asynchronous
	 * functions.
	 * @method _resultFormatSuccess
	 * @param {Object} error The error event
	 * @private
	 */
	p._resultFormatFailed = function (event) {
		this._sendError(event);
	};

	createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher");

}());

//##############################################################################
// AbstractMediaLoader.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";

	// constructor
	/**
	 * The AbstractMediaLoader is a base class that handles some of the shared methods and properties of loaders that
	 * handle HTML media elements, such as Video and Audio.
	 * @class AbstractMediaLoader
	 * @param {LoadItem|Object} loadItem
	 * @param {Boolean} preferXHR
	 * @param {String} type The type of media to load. Usually "video" or "audio".
	 * @extends AbstractLoader
	 * @constructor
	 */
	function AbstractMediaLoader(loadItem, preferXHR, type) {
		this.AbstractLoader_constructor(loadItem, preferXHR, type);

		// public properties
		this.resultFormatter = this._formatResult;

		// protected properties
		this._tagSrcAttribute = "src";

        this.on("initialize", this._updateXHR, this);
	};

	var p = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);

	// static properties
	// public methods
	p.load = function () {
		// TagRequest will handle most of this, but Sound / Video need a few custom properties, so just handle them here.
		if (!this._tag) {
			this._tag = this._createTag(this._item.src);
		}

		this._tag.preload = "auto";
		this._tag.load();

		this.AbstractLoader_load();
	};

	// protected methods
	/**
	 * Creates a new tag for loading if it doesn't exist yet.
	 * @method _createTag
	 * @private
	 */
	p._createTag = function () {};


	p._createRequest = function() {
		if (!this._preferXHR) {
			this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
		} else {
			this._request = new createjs.XHRRequest(this._item);
		}
	};

    // protected methods
    /**
     * Before the item loads, set its mimeType and responseType.
     * @property _updateXHR
     * @param {Event} event
     * @private
     */
    p._updateXHR = function (event) {
        // Only exists for XHR
        if (event.loader.setResponseType) {
            event.loader.setResponseType("blob");
        }
    };

	createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader");

}());

//##############################################################################
// AbstractRequest.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";

	/**
	 * A base class for actual data requests, such as {{#crossLink "XHRRequest"}}{{/crossLink}}, {{#crossLink "TagRequest"}}{{/crossLink}},
	 * and {{#crossLink "MediaRequest"}}{{/crossLink}}. PreloadJS loaders will typically use a data loader under the
	 * hood to get data.
	 * @class AbstractRequest
	 * @param {LoadItem} item
	 * @constructor
	 */
	var AbstractRequest = function (item) {
		this._item = item;
	};

	var p = createjs.extend(AbstractRequest, createjs.EventDispatcher);

	// public methods
	/**
	 * Begin a load.
	 * @method load
	 */
	p.load =  function() {};

	createjs.AbstractRequest = createjs.promote(AbstractRequest, "EventDispatcher");

}());

//##############################################################################
// TagRequest.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";

	// constructor
	/**
	 * An {{#crossLink "AbstractRequest"}}{{/crossLink}} that loads HTML tags, such as images and scripts.
	 * @class TagRequest
	 * @param {LoadItem} loadItem
	 * @param {HTMLElement} tag
	 * @param {String} srcAttribute The tag attribute that specifies the source, such as "src", "href", etc.
	 */
	function TagRequest(loadItem, tag, srcAttribute) {
		this.AbstractRequest_constructor(loadItem);

		// protected properties
		/**
		 * The HTML tag instance that is used to load.
		 * @property _tag
		 * @type {HTMLElement}
		 * @protected
		 */
		this._tag = tag;

		/**
		 * The tag attribute that specifies the source, such as "src", "href", etc.
		 * @property _tagSrcAttribute
		 * @type {String}
		 * @protected
		 */
		this._tagSrcAttribute = srcAttribute;

		/**
		 * A method closure used for handling the tag load event.
		 * @property _loadedHandler
		 * @type {Function}
		 * @private
		 */
		this._loadedHandler = createjs.proxy(this._handleTagComplete, this);

		/**
		 * Determines if the element was added to the DOM automatically by PreloadJS, so it can be cleaned up after.
		 * @property _addedToDOM
		 * @type {Boolean}
		 * @private
		 */
		this._addedToDOM = false;

	};

	var p = createjs.extend(TagRequest, createjs.AbstractRequest);

	// public methods
	p.load = function () {
		this._tag.onload = createjs.proxy(this._handleTagComplete, this);

		var evt = new createjs.Event("initialize");
		evt.loader = this._tag;

		this.dispatchEvent(evt);

		this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);

		this._tag[this._tagSrcAttribute] = this._item.src;

		// wdg:: Append the tag AFTER setting the src, or SVG loading on iOS will fail.
		if (this._tag.parentNode == null) {
			createjs.DomUtils.appendToBody(this._tag);
			this._addedToDOM = true;
		}
	};

	// private methods
	/**
	 * Handle the tag's onload callback.
	 * @method _handleTagComplete
	 * @private
	 */
	p._handleTagComplete = function () {
		this._rawResult = this._tag;
		this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult;

		this._clean();

		this.dispatchEvent("complete");
	};

	/**
	 * The tag request has not loaded within the time specified in loadTimeout.
	 * @method _handleError
	 * @param {Object} event The XHR error event.
	 * @private
	 */
	p._handleTimeout = function () {
		this._clean();
		this.dispatchEvent(new createjs.Event("timeout"));
	};

	/**
	 * Remove event listeners, but don't destroy the request object
	 * @method _clean
	 * @private
	 */
	p._clean = function() {
		this._tag.onload = null;
		this._tag.onreadystatechange = null;
		this._tag.onerror = null;
		if (this._addedToDOM && this._tag.parentNode != null) {
			this._tag.parentNode.removeChild(this._tag);
		}
		clearTimeout(this._loadTimeout);
	};

	/**
	 * Handle a stalled audio event. The main place this happens is with HTMLAudio in Chrome when playing back audio
	 * that is already in a load, but not complete.
	 * @method _handleStalled
	 * @private
	 */
	p._handleStalled = function () {
		//Ignore, let the timeout take care of it. Sometimes its not really stopped.
	};

	createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest");

}());

//##############################################################################
// LoadQueue.js
//##############################################################################

this.createjs = this.createjs || {};

/*
 TODO: WINDOWS ISSUES
 * No error for HTML audio in IE 678
 * SVG no failure error in IE 67 (maybe 8) TAGS AND XHR
 * No script complete handler in IE 67 TAGS (XHR is fine)
 * No XML/JSON in IE6 TAGS
 * Need to hide loading SVG in Opera TAGS
 * No CSS onload/readystatechange in Safari or Android TAGS (requires rule checking)
 * SVG no load or failure in Opera XHR
 * Reported issues with IE7/8
 */

(function () {
	"use strict";

// constructor
	/**
	 * The LoadQueue class is the main API for preloading content. LoadQueue is a load manager, which can preload either
	 * a single file, or queue of files.
	 *
	 * <b>Creating a Queue</b><br />
	 * To use LoadQueue, create a LoadQueue instance. If you want to force tag loading where possible, set the preferXHR
	 * argument to false.
	 *
	 *      var queue = new createjs.LoadQueue(true);
	 *
	 * <b>Listening for Events</b><br />
	 * Add any listeners you want to the queue. Since PreloadJS 0.3.0, the {{#crossLink "EventDispatcher"}}{{/crossLink}}
	 * lets you add as many listeners as you want for events. You can subscribe to the following events:<ul>
	 *     <li>{{#crossLink "AbstractLoader/complete:event"}}{{/crossLink}}: fired when a queue completes loading all
	 *     files</li>
	 *     <li>{{#crossLink "AbstractLoader/error:event"}}{{/crossLink}}: fired when the queue encounters an error with
	 *     any file.</li>
	 *     <li>{{#crossLink "AbstractLoader/progress:event"}}{{/crossLink}}: Progress for the entire queue has
	 *     changed.</li>
	 *     <li>{{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}}: A single file has completed loading.</li>
	 *     <li>{{#crossLink "LoadQueue/fileprogress:event"}}{{/crossLink}}: Progress for a single file has changes. Note
	 *     that only files loaded with XHR (or possibly by plugins) will fire progress events other than 0 or 100%.</li>
	 * </ul>
	 *
	 *      queue.on("fileload", handleFileLoad, this);
	 *      queue.on("complete", handleComplete, this);
	 *
	 * <b>Adding files and manifests</b><br />
	 * Add files you want to load using {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}} or add multiple files at a
	 * time using a list or a manifest definition using {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}. Files are
	 * appended to the end of the active queue, so you can use these methods as many times as you like, whenever you
	 * like.
	 *
	 *      queue.loadFile("filePath/file.jpg");
	 *      queue.loadFile({id:"image", src:"filePath/file.jpg"});
	 *      queue.loadManifest(["filePath/file.jpg", {id:"image", src:"filePath/file.jpg"}]);
	 *
	 *      // Use an external manifest
	 *      queue.loadManifest("path/to/manifest.json");
	 *      queue.loadManifest({src:"manifest.json", type:"manifest"});
	 *
	 * If you pass `false` as the `loadNow` parameter, the queue will not kick of the load of the files, but it will not
	 * stop if it has already been started. Call the {{#crossLink "AbstractLoader/load"}}{{/crossLink}} method to begin
	 * a paused queue. Note that a paused queue will automatically resume when new files are added to it with a
	 * `loadNow` argument of `true`.
	 *
	 *      queue.load();
	 *
	 * <b>File Types</b><br />
	 * The file type of a manifest item is auto-determined by the file extension. The pattern matching in PreloadJS
	 * should handle the majority of standard file and url formats, and works with common file extensions. If you have
	 * either a non-standard file extension, or are serving the file using a proxy script, then you can pass in a
	 * <code>type</code> property with any manifest item.
	 *
	 *      queue.loadFile({src:"path/to/myFile.mp3x", type:createjs.Types.SOUND});
	 *
	 *      // Note that PreloadJS will not read a file extension from the query string
	 *      queue.loadFile({src:"http://server.com/proxy?file=image.jpg", type:createjs.Types.IMAGE});
	 *
	 * Supported types are defined on the {{#crossLink "AbstractLoader"}}{{/crossLink}} class, and include:
	 * <ul>
	 *     <li>{{#crossLink "Types/BINARY:property"}}{{/crossLink}}: Raw binary data via XHR</li>
	 *     <li>{{#crossLink "Types/CSS:property"}}{{/crossLink}}: CSS files</li>
	 *     <li>{{#crossLink "Types/IMAGE:property"}}{{/crossLink}}: Common image formats</li>
	 *     <li>{{#crossLink "Types/JAVASCRIPT:property"}}{{/crossLink}}: JavaScript files</li>
	 *     <li>{{#crossLink "Types/JSON:property"}}{{/crossLink}}: JSON data</li>
	 *     <li>{{#crossLink "Types/JSONP:property"}}{{/crossLink}}: JSON files cross-domain</li>
	 *     <li>{{#crossLink "Types/MANIFEST:property"}}{{/crossLink}}: A list of files to load in JSON format, see
	 *     {{#crossLink "AbstractLoader/loadManifest"}}{{/crossLink}}</li>
	 *     <li>{{#crossLink "Types/SOUND:property"}}{{/crossLink}}: Audio file formats</li>
	 *     <li>{{#crossLink "Types/SPRITESHEET:property"}}{{/crossLink}}: JSON SpriteSheet definitions. This
	 *     will also load sub-images, and provide a {{#crossLink "SpriteSheet"}}{{/crossLink}} instance.</li>
	 *     <li>{{#crossLink "Types/SVG:property"}}{{/crossLink}}: SVG files</li>
	 *     <li>{{#crossLink "Types/TEXT:property"}}{{/crossLink}}: Text files - XHR only</li>
     *     <li>{{#crossLink "Types/VIDEO:property"}}{{/crossLink}}: Video objects</li>
	 *     <li>{{#crossLink "Types/XML:property"}}{{/crossLink}}: XML data</li>
	 * </ul>
	 *
	 * <em>Note: Loader types used to be defined on LoadQueue, but have been moved to the Types class</em>
	 *
	 * <b>Handling Results</b><br />
	 * When a file is finished downloading, a {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}} event is
	 * dispatched. In an example above, there is an event listener snippet for fileload. Loaded files are usually a
	 * formatted object that can be used immediately, including:
	 * <ul>
	 *     <li>Binary: The binary loaded result</li>
	 *     <li>CSS: A &lt;link /&gt; tag</li>
	 *     <li>Image: An &lt;img /&gt; tag</li>
	 *     <li>JavaScript: A &lt;script /&gt; tag</li>
	 *     <li>JSON/JSONP: A formatted JavaScript Object</li>
	 *     <li>Manifest: A JavaScript object.
	 *     <li>Sound: An &lt;audio /&gt; tag</a>
	 *     <li>SpriteSheet: A {{#crossLink "SpriteSheet"}}{{/crossLink}} instance, containing loaded images.
	 *     <li>SVG: An &lt;object /&gt; tag</li>
	 *     <li>Text: Raw text</li>
     *     <li>Video: A Video DOM node</li>
	 *     <li>XML: An XML DOM node</li>
	 * </ul>
	 *
	 *      function handleFileLoad(event) {
	 *          var item = event.item; // A reference to the item that was passed in to the LoadQueue
	 *          var type = item.type;
	 *
	 *          // Add any images to the page body.
	 *          if (type == createjs.Types.IMAGE) {
	 *              document.body.appendChild(event.result);
	 *          }
	 *      }
	 *
	 * At any time after the file has been loaded (usually after the queue has completed), any result can be looked up
	 * via its "id" using {{#crossLink "LoadQueue/getResult"}}{{/crossLink}}. If no id was provided, then the
	 * "src" or file path can be used instead, including the `path` defined by a manifest, but <strong>not including</strong>
	 * a base path defined on the LoadQueue. It is recommended to always pass an id if you want to look up content.
	 *
	 *      var image = queue.getResult("image");
	 *      document.body.appendChild(image);
	 *
	 * Raw loaded content can be accessed using the <code>rawResult</code> property of the {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}}
	 * event, or can be looked up using {{#crossLink "LoadQueue/getResult"}}{{/crossLink}}, passing `true` as the 2nd
	 * argument. This is only applicable for content that has been parsed for the browser, specifically: JavaScript,
	 * CSS, XML, SVG, and JSON objects, or anything loaded with XHR.
	 *
	 *      var image = queue.getResult("image", true); // load the binary image data loaded with XHR.
	 *
	 * <b>Plugins</b><br />
	 * LoadQueue has a simple plugin architecture to help process and preload content. For example, to preload audio,
	 * make sure to install the <a href="http://soundjs.com">SoundJS</a> Sound class, which will help load HTML audio,
	 * Flash audio, and WebAudio files. This should be installed <strong>before</strong> loading any audio files.
	 *
	 *      queue.installPlugin(createjs.Sound);
	 *
	 * <h4>Known Browser Issues</h4>
	 * <ul>
	 *     <li>Browsers without audio support can not load audio files.</li>
	 *     <li>Safari on Mac OS X can only play HTML audio if QuickTime is installed</li>
	 *     <li>HTML Audio tags will only download until their <code>canPlayThrough</code> event is fired. Browsers other
	 *     than Chrome will continue to download in the background.</li>
	 *     <li>When loading scripts using tags, they are automatically added to the document.</li>
	 *     <li>Scripts loaded via XHR may not be properly inspectable with browser tools.</li>
	 *     <li>IE6 and IE7 (and some other browsers) may not be able to load XML, Text, or JSON, since they require
	 *     XHR to work.</li>
	 *     <li>Content loaded via tags will not show progress, and will continue to download in the background when
	 *     canceled, although no events will be dispatched.</li>
	 * </ul>
	 *
	 * @class LoadQueue
	 * @param {Boolean} [preferXHR=true] Determines whether the preload instance will favor loading with XHR (XML HTTP
	 * Requests), or HTML tags. When this is `false`, the queue will use tag loading when possible, and fall back on XHR
	 * when necessary.
	 * @param {String} [basePath=""] A path that will be prepended on to the source parameter of all items in the queue
	 * before they are loaded.  Sources beginning with a protocol such as `http://` or a relative path such as `../`
	 * will not receive a base path.
	 * @param {String|Boolean} [crossOrigin=""] An optional flag to support images loaded from a CORS-enabled server. To
	 * use it, set this value to `true`, which will default the crossOrigin property on images to "Anonymous". Any
	 * string value will be passed through, but only "" and "Anonymous" are recommended. <strong>Note: The crossOrigin
	 * parameter is deprecated. Use LoadItem.crossOrigin instead</strong>
	 *
	 * @constructor
	 * @extends AbstractLoader
	 */
	function LoadQueue (preferXHR, basePath, crossOrigin) {
		this.AbstractLoader_constructor();

		/**
		 * An array of the plugins registered using {{#crossLink "LoadQueue/installPlugin"}}{{/crossLink}}.
		 * @property _plugins
		 * @type {Array}
		 * @private
		 * @since 0.6.1
		 */
		this._plugins = [];

		/**
		 * An object hash of callbacks that are fired for each file type before the file is loaded, giving plugins the
		 * ability to override properties of the load. Please see the {{#crossLink "LoadQueue/installPlugin"}}{{/crossLink}}
		 * method for more information.
		 * @property _typeCallbacks
		 * @type {Object}
		 * @private
		 */
		this._typeCallbacks = {};

		/**
		 * An object hash of callbacks that are fired for each file extension before the file is loaded, giving plugins the
		 * ability to override properties of the load. Please see the {{#crossLink "LoadQueue/installPlugin"}}{{/crossLink}}
		 * method for more information.
		 * @property _extensionCallbacks
		 * @type {null}
		 * @private
		 */
		this._extensionCallbacks = {};

		/**
		 * The next preload queue to process when this one is complete. If an error is thrown in the current queue, and
		 * {{#crossLink "LoadQueue/stopOnError:property"}}{{/crossLink}} is `true`, the next queue will not be processed.
		 * @property next
		 * @type {LoadQueue}
		 * @default null
		 */
		this.next = null;

		/**
		 * Ensure loaded scripts "complete" in the order they are specified. Loaded scripts are added to the document head
		 * once they are loaded. Scripts loaded via tags will load one-at-a-time when this property is `true`, whereas
		 * scripts loaded using XHR can load in any order, but will "finish" and be added to the document in the order
		 * specified.
		 *
		 * Any items can be set to load in order by setting the {{#crossLink "maintainOrder:property"}}{{/crossLink}}
		 * property on the load item, or by ensuring that only one connection can be open at a time using
		 * {{#crossLink "LoadQueue/setMaxConnections"}}{{/crossLink}}. Note that when the `maintainScriptOrder` property
		 * is set to `true`, scripts items are automatically set to `maintainOrder=true`, and changing the
		 * `maintainScriptOrder` to `false` during a load will not change items already in a queue.
		 *
		 * <h4>Example</h4>
		 *
		 *      var queue = new createjs.LoadQueue();
		 *      queue.setMaxConnections(3); // Set a higher number to load multiple items at once
		 *      queue.maintainScriptOrder = true; // Ensure scripts are loaded in order
		 *      queue.loadManifest([
		 *          "script1.js",
		 *          "script2.js",
		 *          "image.png", // Load any time
		 *          {src: "image2.png", maintainOrder: true} // Will wait for script2.js
		 *          "image3.png",
		 *          "script3.js" // Will wait for image2.png before loading (or completing when loading with XHR)
		 *      ]);
		 *
		 * @property maintainScriptOrder
		 * @type {Boolean}
		 * @default true
		 */
		this.maintainScriptOrder = true;

		/**
		 * Determines if the LoadQueue will stop processing the current queue when an error is encountered.
		 * @property stopOnError
		 * @type {Boolean}
		 * @default false
		 */
		this.stopOnError = false;

		/**
		 * The number of maximum open connections that a loadQueue tries to maintain. Please see
		 * {{#crossLink "LoadQueue/setMaxConnections"}}{{/crossLink}} for more information.
		 * @property _maxConnections
		 * @type {Number}
		 * @default 1
		 * @private
		 */
		this._maxConnections = 1;

		/**
		 * An internal list of all the default Loaders that are included with PreloadJS. Before an item is loaded, the
		 * available loader list is iterated, in the order they are included, and as soon as a loader indicates it can
		 * handle the content, it will be selected. The default loader, ({{#crossLink "TextLoader"}}{{/crossLink}} is
		 * last in the list, so it will be used if no other match is found. Typically, loaders will match based on the
		 * {{#crossLink "LoadItem/type"}}{{/crossLink}}, which is automatically determined using the file extension of
		 * the {{#crossLink "LoadItem/src:property"}}{{/crossLink}}.
		 *
		 * Loaders can be removed from PreloadJS by simply not including them.
		 *
		 * Custom loaders installed using {{#crossLink "registerLoader"}}{{/crossLink}} will be prepended to this list
		 * so that they are checked first.
		 * @property _availableLoaders
		 * @type {Array}
		 * @private
		 * @since 0.6.0
		 */
		this._availableLoaders = [
            createjs.FontLoader,
			createjs.ImageLoader,
			createjs.JavaScriptLoader,
			createjs.CSSLoader,
			createjs.JSONLoader,
			createjs.JSONPLoader,
			createjs.SoundLoader,
			createjs.ManifestLoader,
			createjs.SpriteSheetLoader,
			createjs.XMLLoader,
			createjs.SVGLoader,
			createjs.BinaryLoader,
			createjs.VideoLoader,
			createjs.TextLoader
		];

		/**
		 * The number of built in loaders, so they can't be removed by {{#crossLink "unregisterLoader"}}{{/crossLink}.
				 * @property _defaultLoaderLength
		 * @type {Number}
		 * @private
		 * @since 0.6.0
		 */
		this._defaultLoaderLength = this._availableLoaders.length;

		this.init(preferXHR, basePath, crossOrigin);
	}

	var p = createjs.extend(LoadQueue, createjs.AbstractLoader);
	var s = LoadQueue;

	/**
	 * An internal initialization method, which is used for initial set up, but also to reset the LoadQueue.
	 * @method init
	 * @param preferXHR
	 * @param basePath
	 * @param crossOrigin
	 * @private
	 */
	p.init = function (preferXHR, basePath, crossOrigin) {

		// public properties

		/**
		 * Try and use XMLHttpRequest (XHR) when possible. Note that LoadQueue will default to tag loading or XHR
		 * loading depending on the requirements for a media type. For example, HTML audio can not be loaded with XHR,
		 * and plain text can not be loaded with tags, so it will default the the correct type instead of using the
		 * user-defined type.
		 * @type {Boolean}
		 * @default true
		 * @since 0.6.0
		 */
		this.preferXHR = true; //TODO: Get/Set
		this._preferXHR = true;
		this.setPreferXHR(preferXHR);

		// protected properties
		/**
		 * Whether the queue is currently paused or not.
		 * @property _paused
		 * @type {boolean}
		 * @private
		 */
		this._paused = false;

		/**
		 * A path that will be prepended on to the item's {{#crossLink "LoadItem/src:property"}}{{/crossLink}}. The
		 * `_basePath` property will only be used if an item's source is relative, and does not include a protocol such
		 * as `http://`, or a relative path such as `../`.
		 * @property _basePath
		 * @type {String}
		 * @private
		 * @since 0.3.1
		 */
		this._basePath = basePath;

		/**
		 * An optional flag to set on images that are loaded using PreloadJS, which enables CORS support. Images loaded
		 * cross-domain by servers that support CORS require the crossOrigin flag to be loaded and interacted with by
		 * a canvas. When loading locally, or with a server with no CORS support, this flag can cause other security issues,
		 * so it is recommended to only set it if you are sure the server supports it. Currently, supported values are ""
		 * and "Anonymous".
		 * @property _crossOrigin
		 * @type {String}
		 * @default ""
		 * @private
		 * @since 0.4.1
		 */
		this._crossOrigin = crossOrigin;

		/**
		 * Determines if the loadStart event was dispatched already. This event is only fired one time, when the first
		 * file is requested.
		 * @property _loadStartWasDispatched
		 * @type {Boolean}
		 * @default false
		 * @private
		 */
		this._loadStartWasDispatched = false;

		/**
		 * Determines if there is currently a script loading. This helps ensure that only a single script loads at once when
		 * using a script tag to do preloading.
		 * @property _currentlyLoadingScript
		 * @type {Boolean}
		 * @private
		 */
		this._currentlyLoadingScript = null;

		/**
		 * An array containing the currently downloading files.
		 * @property _currentLoads
		 * @type {Array}
		 * @private
		 */
		this._currentLoads = [];

		/**
		 * An array containing the queued items that have not yet started downloading.
		 * @property _loadQueue
		 * @type {Array}
		 * @private
		 */
		this._loadQueue = [];

		/**
		 * An array containing downloads that have not completed, so that the LoadQueue can be properly reset.
		 * @property _loadQueueBackup
		 * @type {Array}
		 * @private
		 */
		this._loadQueueBackup = [];

		/**
		 * An object hash of items that have finished downloading, indexed by the {{#crossLink "LoadItem"}}{{/crossLink}}
		 * id.
		 * @property _loadItemsById
		 * @type {Object}
		 * @private
		 */
		this._loadItemsById = {};

		/**
		 * An object hash of items that have finished downloading, indexed by {{#crossLink "LoadItem"}}{{/crossLink}}
		 * source.
		 * @property _loadItemsBySrc
		 * @type {Object}
		 * @private
		 */
		this._loadItemsBySrc = {};

		/**
		 * An object hash of loaded items, indexed by the ID of the {{#crossLink "LoadItem"}}{{/crossLink}}.
		 * @property _loadedResults
		 * @type {Object}
		 * @private
		 */
		this._loadedResults = {};

		/**
		 * An object hash of un-parsed loaded items, indexed by the ID of the {{#crossLink "LoadItem"}}{{/crossLink}}.
		 * @property _loadedRawResults
		 * @type {Object}
		 * @private
		 */
		this._loadedRawResults = {};

		/**
		 * The number of items that have been requested. This helps manage an overall progress without knowing how large
		 * the files are before they are downloaded. This does not include items inside of loaders such as the
		 * {{#crossLink "ManifestLoader"}}{{/crossLink}}.
		 * @property _numItems
		 * @type {Number}
		 * @default 0
		 * @private
		 */
		this._numItems = 0;

		/**
		 * The number of items that have completed loaded. This helps manage an overall progress without knowing how large
		 * the files are before they are downloaded.
		 * @property _numItemsLoaded
		 * @type {Number}
		 * @default 0
		 * @private
		 */
		this._numItemsLoaded = 0;

		/**
		 * A list of scripts in the order they were requested. This helps ensure that scripts are "completed" in the right
		 * order.
		 * @property _scriptOrder
		 * @type {Array}
		 * @private
		 */
		this._scriptOrder = [];

		/**
		 * A list of scripts that have been loaded. Items are added to this list as <code>null</code> when they are
		 * requested, contain the loaded item if it has completed, but not been dispatched to the user, and <code>true</true>
		 * once they are complete and have been dispatched.
		 * @property _loadedScripts
		 * @type {Array}
		 * @private
		 */
		this._loadedScripts = [];

		/**
		 * The last progress amount. This is used to suppress duplicate progress events.
		 * @property _lastProgress
		 * @type {Number}
		 * @private
		 * @since 0.6.0
		 */
		this._lastProgress = NaN;

	};

// static properties

// events
	/**
	 * This event is fired when an individual file has loaded, and been processed.
	 * @event fileload
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @param {Object} item The file item which was specified in the {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}}
	 * or {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}} call. If only a string path or tag was specified, the
	 * object will contain that value as a `src` property.
	 * @param {Object} result The HTML tag or parsed result of the loaded item.
	 * @param {Object} rawResult The unprocessed result, usually the raw text or binary data before it is converted
	 * to a usable object.
	 * @since 0.3.0
	 */

	/**
	 * This {{#crossLink "ProgressEvent"}}{{/crossLink}} that is fired when an an individual file's progress changes.
	 * @event fileprogress
	 * @since 0.3.0
	 */

	/**
	 * This event is fired when an individual file starts to load.
	 * @event filestart
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @param {Object} item The file item which was specified in the {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}}
	 * or {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}} call. If only a string path or tag was specified, the
	 * object will contain that value as a property.
	 */

	/**
	 * Although it extends {{#crossLink "AbstractLoader"}}{{/crossLink}}, the `initialize` event is never fired from
	 * a LoadQueue instance.
	 * @event initialize
	 * @private
	 */

// public methods
	/**
	 * Change the {{#crossLink "preferXHR:property"}}{{/crossLink}} value. Note that if this is set to `true`, it may
	 * fail, or be ignored depending on the browser's capabilities and the load type.
	 * @method setPreferXHR
	 * @param {Boolean} value
	 * @returns {Boolean} The value of {{#crossLink "preferXHR"}}{{/crossLink}} that was successfully set.
	 * @since 0.6.0
	 */
	p.setPreferXHR = function (value) {
		// Determine if we can use XHR. XHR defaults to TRUE, but the browser may not support it.
		//TODO: Should we be checking for the other XHR types? Might have to do a try/catch on the different types similar to createXHR.
		this.preferXHR = (value != false && window.XMLHttpRequest != null);
		return this.preferXHR;
	};

	/**
	 * Load an array of files. To load a single file, use the {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}} method.
	 * The files in the manifest are requested in the same order, but may complete in a different order if the max
	 * connections are set above 1 using {{#crossLink "LoadQueue/setMaxConnections"}}{{/crossLink}}. Scripts will load
	 * in the right order as long as {{#crossLink "LoadQueue/maintainScriptOrder"}}{{/crossLink}} is true (which is
	 * default).
	 *
	 * Files are always appended to the current queue, so this method can be used multiple times to add files.
	 * To clear the queue first, use the {{#crossLink "AbstractLoader/close"}}{{/crossLink}} method.
	 * @method loadManifest
	 * @param {Array|String|Object} manifest An list of files to load. The loadManifest call supports four types of
	 * manifests:
	 * <ol>
	 *     <li>A string path, which points to a manifest file, which is a JSON file that contains a "manifest" property,
	 *     which defines the list of files to load, and can optionally contain a "path" property, which will be
	 *     prepended to each file in the list.</li>
	 *     <li>An object which defines a "src", which is a JSON or JSONP file. A "callback" can be defined for JSONP
	 *     file. The JSON/JSONP file should contain a "manifest" property, which defines the list of files to load,
	 *     and can optionally contain a "path" property, which will be prepended to each file in the list.</li>
	 *     <li>An object which contains a "manifest" property, which defines the list of files to load, and can
	 *     optionally contain a "path" property, which will be prepended to each file in the list.</li>
	 *     <li>An Array of files to load.</li>
	 * </ol>
	 *
	 * Each "file" in a manifest can be either:
	 * <ul>
	 *     <li>A {{#crossLink "LoadItem"}}{{/crossLink}} instance</li>
	 *     <li>An object containing properties defined by {{#crossLink "LoadItem"}}{{/crossLink}}</li>
	 *     <li>OR A string path to a resource. Note that this kind of load item will be converted to a {{#crossLink "LoadItem"}}{{/crossLink}}
	 *     in the background.</li>
	 * </ul>
	 *
	 * @param {Boolean} [loadNow=true] Kick off an immediate load (true) or wait for a load call (false). The default
	 * value is true. If the queue is paused using {{#crossLink "LoadQueue/setPaused"}}{{/crossLink}} and this value is
	 * `true`, the queue will resume automatically.
	 * @param {String} [basePath] A base path that will be prepended to each file. The basePath argument overrides the
	 * path specified in the constructor. Note that if you load a manifest using a file of type {{#crossLink "LoadQueue/MANIFEST:property"}}{{/crossLink}},
	 * its files will <strong>NOT</strong> use the basePath parameter. <strong>The basePath parameter is deprecated.</strong>
	 * This parameter will be removed in a future version. Please either use the `basePath` parameter in the LoadQueue
	 * constructor, or a `path` property in a manifest definition.
	 */
	p.loadManifest = function (manifest, loadNow, basePath) {
		var fileList = null;
		var path = null;

		// Array-based list of items
		if (Array.isArray(manifest)) {
			if (manifest.length == 0) {
				var event = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
				this._sendError(event);
				return;
			}
			fileList = manifest;

			// String-based. Only file manifests can be specified this way. Any other types will cause an error when loaded.
		} else if (typeof(manifest) === "string") {
			fileList = [
				{
					src: manifest,
					type: s.MANIFEST
				}
			];

		} else if (typeof(manifest) == "object") {

			// An object that defines a manifest path
			if (manifest.src !== undefined) {
				if (manifest.type == null) {
					manifest.type = s.MANIFEST;
				} else if (manifest.type != s.MANIFEST) {
					var event = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
					this._sendError(event);
				}
				fileList = [manifest];

				// An object that defines a manifest
			} else if (manifest.manifest !== undefined) {
				fileList = manifest.manifest;
				path = manifest.path;
			}

			// Unsupported. This will throw an error.
		} else {
			var event = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
			this._sendError(event);
			return;
		}

		for (var i = 0, l = fileList.length; i < l; i++) {
			this._addItem(fileList[i], path, basePath);
		}

		if (loadNow !== false) {
			this.setPaused(false);
		} else {
			this.setPaused(true);
		}

	};

	/**
	 * Look up a loaded result using either the "id" or "src" that was specified when loading it. Note that if no "id"
	 * was supplied with the load item, the ID will be the "src", including a `path` property defined by a manifest. The
	 * `basePath` will not be part of the ID.
	 * @method getResult
	 * @param {String} value The <code>id</code> or <code>src</code> of the load item.
	 * @param {Boolean} [rawResult=false] Return a raw result instead of a formatted result. This applies to content
	 * loaded via XHR such as scripts, XML, CSS, and Images. If there is no raw result, the formatted result will be
	 * returned instead.
	 * @return {Object} A result object containing the content that was loaded, such as:
	 * <ul>
	 *      <li>An image tag (&lt;image /&gt;) for images</li>
	 *      <li>A script tag for JavaScript (&lt;script /&gt;). Note that scripts are automatically added to the HTML
	 *      DOM.</li>
	 *      <li>A style tag for CSS (&lt;style /&gt; or &lt;link &gt;)</li>
	 *      <li>Raw text for TEXT</li>
	 *      <li>A formatted JavaScript object defined by JSON</li>
	 *      <li>An XML document</li>
	 *      <li>A binary arraybuffer loaded by XHR</li>
	 *      <li>An audio tag (&lt;audio &gt;) for HTML audio. Note that it is recommended to use SoundJS APIs to play
	 *      loaded audio. Specifically, audio loaded by Flash and WebAudio will return a loader object using this method
	 *      which can not be used to play audio back.</li>
	 * </ul>
	 * This object is also returned via the {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}} event as the 'item`
	 * parameter. Note that if a raw result is requested, but not found, the result will be returned instead.
	 */
	p.getResult = function (value, rawResult) {
		var item = this._loadItemsById[value] || this._loadItemsBySrc[value];
		if (item == null) {
			return null;
		}
		var id = item.id;
		if (rawResult && this._loadedRawResults[id]) {
			return this._loadedRawResults[id];
		}
		return this._loadedResults[id];
	};

	/**
	 * Pause or resume the current load. Active loads will not be cancelled, but the next items in the queue will not
	 * be processed when active loads complete. LoadQueues are not paused by default.
	 *
	 * Note that if new items are added to the queue using {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}} or
	 * {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}, a paused queue will be resumed, unless the `loadNow`
	 * argument is `false`.
	 * @method setPaused
	 * @param {Boolean} value Whether the queue should be paused or not.
	 */
	p.setPaused = function (value) {
		this._paused = value;
		if (!this._paused) {
			this._loadNext();
		}
	};

// protected methods
	/**
	 * Add an item to the queue. Items are formatted into a usable object containing all the properties necessary to
	 * load the content. The load queue is populated with the loader instance that handles preloading, and not the load
	 * item that was passed in by the user. To look up the load item by id or src, use the {{#crossLink "LoadQueue.getItem"}}{{/crossLink}}
	 * method.
	 * @method _addItem
	 * @param {String|Object} value The item to add to the queue.
	 * @param {String} [path] An optional path prepended to the `src`. The path will only be prepended if the src is
	 * relative, and does not start with a protocol such as `http://`, or a path like `../`. If the LoadQueue was
	 * provided a {{#crossLink "_basePath"}}{{/crossLink}}, then it will optionally be prepended after.
	 * @param {String} [basePath] <strong>Deprecated</strong>An optional basePath passed into a {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}
	 * or {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}} call. This parameter will be removed in a future tagged
	 * version.
	 * @private
	 */
	p._addItem = function (value, path, basePath) {
		var item = this._createLoadItem(value, path, basePath); // basePath and manifest path are added to the src.
		if (item == null) {
			return;
		} // Sometimes plugins or types should be skipped.
		var loader = this._createLoader(item);
		if (loader != null) {
			if ("plugins" in loader) {
				loader.plugins = this._plugins;
			}
			item._loader = loader;
			this._loadQueue.push(loader);
			this._loadQueueBackup.push(loader);

			this._numItems++;
			this._updateProgress();

			// Only worry about script order when using XHR to load scripts. Tags are only loading one at a time.
			if ((this.maintainScriptOrder
					&& item.type == createjs.Types.JAVASCRIPT
						//&& loader instanceof createjs.XHRLoader //NOTE: Have to track all JS files this way
					)
					|| item.maintainOrder === true) {
				this._scriptOrder.push(item);
				this._loadedScripts.push(null);
			}
		}
	};

	/**
	 * Create a refined {{#crossLink "LoadItem"}}{{/crossLink}}, which contains all the required properties. The type of
	 * item is determined by browser support, requirements based on the file type, and developer settings. For example,
	 * XHR is only used for file types that support it in new browsers.
	 *
	 * Before the item is returned, any plugins registered to handle the type or extension will be fired, which may
	 * alter the load item.
	 * @method _createLoadItem
	 * @param {String | Object | HTMLAudioElement | HTMLImageElement} value The item that needs to be preloaded.
	 * @param {String} [path] A path to prepend to the item's source. Sources beginning with http:// or similar will
	 * not receive a path. Since PreloadJS 0.4.1, the src will be modified to include the `path` and {{#crossLink "LoadQueue/_basePath:property"}}{{/crossLink}}
	 * when it is added.
	 * @param {String} [basePath] <strong>Deprectated</strong> A base path to prepend to the items source in addition to
	 * the path argument.
	 * @return {Object} The loader instance that will be used.
	 * @private
	 */
	p._createLoadItem = function (value, path, basePath) {
		var item = createjs.LoadItem.create(value);
		if (item == null) {
			return null;
		}

		var bp = ""; // Store the generated basePath
		var useBasePath = basePath || this._basePath;

		if (item.src instanceof Object) {
			if (!item.type) {
				return null;
			} // the the src is an object, type is required to pass off to plugin
			if (path) {
				bp = path;
				var pathMatch = createjs.URLUtils.parseURI(path);
				// Also append basePath
				if (useBasePath != null && !pathMatch.absolute && !pathMatch.relative) {
					bp = useBasePath + bp;
				}
			} else if (useBasePath != null) {
				bp = useBasePath;
			}
		} else {
			// Determine Extension, etc.
			var match = createjs.URLUtils.parseURI(item.src);
			if (match.extension) {
				item.ext = match.extension;
			}
			if (item.type == null) {
				item.type = createjs.RequestUtils.getTypeByExtension(item.ext);
			}

			// Inject path & basePath
			var autoId = item.src;
			if (!match.absolute && !match.relative) {
				if (path) {
					bp = path;
					var pathMatch = createjs.URLUtils.parseURI(path);
					autoId = path + autoId;
					// Also append basePath
					if (useBasePath != null && !pathMatch.absolute && !pathMatch.relative) {
						bp = useBasePath + bp;
					}
				} else if (useBasePath != null) {
					bp = useBasePath;
				}
			}
			item.src = bp + item.src;
		}
		item.path = bp;

		// If there's no id, set one now.
		if (item.id === undefined || item.id === null || item.id === "") {
			item.id = autoId;
		}

		// Give plugins a chance to modify the loadItem:
		var customHandler = this._typeCallbacks[item.type] || this._extensionCallbacks[item.ext];
		if (customHandler) {
			// Plugins are now passed both the full source, as well as a combined path+basePath (appropriately)
			var result = customHandler.callback.call(customHandler.scope, item, this);

			// The plugin will handle the load, or has canceled it. Ignore it.
			if (result === false) {
				return null;

				// Load as normal:
			} else if (result === true) {
				// Do Nothing

				// Result is a loader class:
			} else if (result != null) {
				item._loader = result;
			}

			// Update the extension in case the type changed:
			match = createjs.URLUtils.parseURI(item.src);
			if (match.extension != null) {
				item.ext = match.extension;
			}
		}

		// Store the item for lookup. This also helps clean-up later.
		this._loadItemsById[item.id] = item;
		this._loadItemsBySrc[item.src] = item;

		if (item.crossOrigin == null) {
			item.crossOrigin = this._crossOrigin;
		}

		return item;
	};

	/**
	 * Create a loader for a load item.
	 * @method _createLoader
	 * @param {Object} item A formatted load item that can be used to generate a loader.
	 * @return {AbstractLoader} A loader that can be used to load content.
	 * @private
	 */
	p._createLoader = function (item) {
		if (item._loader != null) { // A plugin already specified a loader
			return item._loader;
		}

		// Initially, try and use the provided/supported XHR mode:
		var preferXHR = this.preferXHR;

		for (var i = 0; i < this._availableLoaders.length; i++) {
			var loader = this._availableLoaders[i];
			if (loader && loader.canLoadItem(item)) {
				return new loader(item, preferXHR);
			}
		}

		// TODO: Log error (requires createjs.log)
		return null;
	};

	/**
	 * Load the next item in the queue. If the queue is empty (all items have been loaded), then the complete event
	 * is processed. The queue will "fill up" any empty slots, up to the max connection specified using
	 * {{#crossLink "LoadQueue.setMaxConnections"}}{{/crossLink}} method. The only exception is scripts that are loaded
	 * using tags, which have to be loaded one at a time to maintain load order.
	 * @method _loadNext
	 * @private
	 */
	p._loadNext = function () {
		if (this._paused) {
			return;
		}

		// Only dispatch loadstart event when the first file is loaded.
		if (!this._loadStartWasDispatched) {
			this._sendLoadStart();
			this._loadStartWasDispatched = true;
		}

		// The queue has completed.
		if (this._numItems == this._numItemsLoaded) {
			this.loaded = true;
			this._sendComplete();

			// Load the next queue, if it has been defined.
			if (this.next && this.next.load) {
				this.next.load();
			}
		} else {
			this.loaded = false;
		}

		// Must iterate forwards to load in the right order.
		for (var i = 0; i < this._loadQueue.length; i++) {
			if (this._currentLoads.length >= this._maxConnections) {
				break;
			}
			var loader = this._loadQueue[i];

			// Determine if we should be only loading one tag-script at a time:
			// Note: maintainOrder items don't do anything here because we can hold onto their loaded value
			if (!this._canStartLoad(loader)) {
				continue;
			}
			this._loadQueue.splice(i, 1);
			i--;
			this._loadItem(loader);
		}
	};

	/**
	 * Begin loading an item. Event listeners are not added to the loaders until the load starts.
	 * @method _loadItem
	 * @param {AbstractLoader} loader The loader instance to start. Currently, this will be an XHRLoader or TagLoader.
	 * @private
	 */
	p._loadItem = function (loader) {
		loader.on("fileload", this._handleFileLoad, this);
		loader.on("progress", this._handleProgress, this);
		loader.on("complete", this._handleFileComplete, this);
		loader.on("error", this._handleError, this);
		loader.on("fileerror", this._handleFileError, this);
		this._currentLoads.push(loader);
		this._sendFileStart(loader.getItem());
		loader.load();
	};

	/**
	 * The callback that is fired when a loader loads a file. This enables loaders like {{#crossLink "ManifestLoader"}}{{/crossLink}}
	 * to maintain internal queues, but for this queue to dispatch the {{#crossLink "fileload:event"}}{{/crossLink}}
	 * events.
	 * @param {Event} event The {{#crossLink "AbstractLoader/fileload:event"}}{{/crossLink}} event from the loader.
	 * @private
	 * @since 0.6.0
	 */
	p._handleFileLoad = function (event) {
		event.target = null;
		this.dispatchEvent(event);
	};

	/**
	 * The callback that is fired when a loader encounters an error from an internal file load operation. This enables
	 * loaders like M
	 * @param event
	 * @private
	 */
	p._handleFileError = function (event) {
		var newEvent = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, event.item);
		this._sendError(newEvent);
	};

	/**
	 * The callback that is fired when a loader encounters an error. The queue will continue loading unless {{#crossLink "LoadQueue/stopOnError:property"}}{{/crossLink}}
	 * is set to `true`.
	 * @method _handleError
	 * @param {ErrorEvent} event The error event, containing relevant error information.
	 * @private
	 */
	p._handleError = function (event) {
		var loader = event.target;
		this._numItemsLoaded++;

		this._finishOrderedItem(loader, true);
		this._updateProgress();

		var newEvent = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, loader.getItem());
		// TODO: Propagate actual error message.

		this._sendError(newEvent);

		if (!this.stopOnError) {
			this._removeLoadItem(loader);
			this._cleanLoadItem(loader);
			this._loadNext();
		} else {
			this.setPaused(true);
		}
	};

	/**
	 * An item has finished loading. We can assume that it is totally loaded, has been parsed for immediate use, and
	 * is available as the "result" property on the load item. The raw text result for a parsed item (such as JSON, XML,
	 * CSS, JavaScript, etc) is available as the "rawResult" property, and can also be looked up using {{#crossLink "LoadQueue/getResult"}}{{/crossLink}}.
	 * @method _handleFileComplete
	 * @param {Event} event The event object from the loader.
	 * @private
	 */
	p._handleFileComplete = function (event) {
		var loader = event.target;
		var item = loader.getItem();

		var result = loader.getResult();
		this._loadedResults[item.id] = result;
		var rawResult = loader.getResult(true);
		if (rawResult != null && rawResult !== result) {
			this._loadedRawResults[item.id] = rawResult;
		}

		this._saveLoadedItems(loader);

		// Remove the load item
		this._removeLoadItem(loader);

		if (!this._finishOrderedItem(loader)) {
			// The item was NOT managed, so process it now
			this._processFinishedLoad(item, loader);
		}

		// Clean up the load item
		this._cleanLoadItem(loader);
	};

	/**
	 * Some loaders might load additional content, other than the item they were passed (such as {{#crossLink "ManifestLoader"}}{{/crossLink}}).
	 * Any items exposed by the loader using {{#crossLink "AbstractLoader/getLoadItems"}}{{/crossLink}} are added to the
	 * LoadQueue's look-ups, including {{#crossLink "getItem"}}{{/crossLink}} and {{#crossLink "getResult"}}{{/crossLink}}
	 * methods.
	 * @method _saveLoadedItems
	 * @param {AbstractLoader} loader
	 * @protected
	 * @since 0.6.0
	 */
	p._saveLoadedItems = function (loader) {
		// TODO: Not sure how to handle this. Would be nice to expose the items.
		// Loaders may load sub-items. This adds them to this queue
		var list = loader.getLoadedItems();
		if (list === null) {
			return;
		}

		for (var i = 0; i < list.length; i++) {
			var item = list[i].item;

			// Store item lookups
			this._loadItemsBySrc[item.src] = item;
			this._loadItemsById[item.id] = item;

			// Store loaded content
			this._loadedResults[item.id] = list[i].result;
			this._loadedRawResults[item.id] = list[i].rawResult;
		}
	};

	/**
	 * Flag an item as finished. If the item's order is being managed, then ensure that it is allowed to finish, and if
	 * so, trigger prior items to trigger as well.
	 * @method _finishOrderedItem
	 * @param {AbstractLoader} loader
	 * @param {Boolean} loadFailed
	 * @return {Boolean} If the item's order is being managed. This allows the caller to take an alternate
	 * behaviour if it is.
	 * @private
	 */
	p._finishOrderedItem = function (loader, loadFailed) {
		var item = loader.getItem();

		if ((this.maintainScriptOrder && item.type == createjs.Types.JAVASCRIPT)
				|| item.maintainOrder) {

			//TODO: Evaluate removal of the _currentlyLoadingScript
			if (loader instanceof createjs.JavaScriptLoader) {
				this._currentlyLoadingScript = false;
			}

			var index = createjs.indexOf(this._scriptOrder, item);
			if (index == -1) {
				return false;
			} // This loader no longer exists
			this._loadedScripts[index] = (loadFailed === true) ? true : item;

			return true;
		}

		return false;
	};

	/**
	 * A file has completed loading, and the LoadQueue can move on. This triggers the complete event, and kick-starts
	 * the next item.
	 * @method _processFinishedLoad
	 * @param {LoadItem|Object} item
	 * @param {AbstractLoader} loader
	 * @protected
	 */
	p._processFinishedLoad = function (item, loader) {
		this._numItemsLoaded++;
		this._updateProgress();
		this._sendFileComplete(item, loader);
		this._loadNext();
	};

	/**
	 * Ensure items with `maintainOrder=true` that are before the specified item have loaded. This only applies to
	 * JavaScript items that are being loaded with a TagLoader, since they have to be loaded and completed <strong>before</strong>
	 * the script can even be started, since it exist in the DOM while loading.
	 * @method _canStartLoad
	 * @param {AbstractLoader} loader The loader for the item
	 * @return {Boolean} Whether the item can start a load or not.
	 * @private
	 */
	p._canStartLoad = function (loader) {
		if (!this.maintainScriptOrder || loader.preferXHR) {
			return true;
		}
		var item = loader.getItem();
		if (item.type != createjs.Types.JAVASCRIPT) {
			return true;
		}
		if (this._currentlyLoadingScript) {
			return false;
		}

		var index = this._scriptOrder.indexOf(item);
		var i = 0;
		while (i < index) {
			var checkItem = this._loadedScripts[i];
			if (checkItem == null) {
				return false;
			}
			i++;
		}
		this._currentlyLoadingScript = true;
		return true;
	};

	/**
	 * A load item is completed or was canceled, and needs to be removed from the LoadQueue.
	 * @method _removeLoadItem
	 * @param {AbstractLoader} loader A loader instance to remove.
	 * @private
	 */
	p._removeLoadItem = function (loader) {
		var l = this._currentLoads.length;
		for (var i = 0; i < l; i++) {
			if (this._currentLoads[i] == loader) {
				this._currentLoads.splice(i, 1);
				break;
			}
		}
	};

	/**
	 * Remove unneeded references from a loader.
	 *
	 * @param loader
	 * @private
	 */
	p._cleanLoadItem = function(loader) {
		var item = loader.getItem();
		if (item) {
			delete item._loader;
		}
	}

	/**
	 * An item has dispatched progress. Propagate that progress, and update the LoadQueue's overall progress.
	 * @method _handleProgress
	 * @param {ProgressEvent} event The progress event from the item.
	 * @private
	 */
	p._handleProgress = function (event) {
		var loader = event.target;
		this._sendFileProgress(loader.getItem(), loader.progress);
		this._updateProgress();
	};

	/**
	 * Overall progress has changed, so determine the new progress amount and dispatch it. This changes any time an
	 * item dispatches progress or completes. Note that since we don't always know the actual filesize of items before
	 * they are loaded. In this case, we define a "slot" for each item (1 item in 10 would get 10%), and then append
	 * loaded progress on top of the already-loaded items.
	 *
	 * For example, if 5/10 items have loaded, and item 6 is 20% loaded, the total progress would be:
	 * <ul>
	 *      <li>5/10 of the items in the queue (50%)</li>
	 *      <li>plus 20% of item 6's slot (2%)</li>
	 *      <li>equals 52%</li>
	 * </ul>
	 * @method _updateProgress
	 * @private
	 */
	p._updateProgress = function () {
		var loaded = this._numItemsLoaded / this._numItems; // Fully Loaded Progress
		var remaining = this._numItems - this._numItemsLoaded;
		if (remaining > 0) {
			var chunk = 0;
			for (var i = 0, l = this._currentLoads.length; i < l; i++) {
				chunk += this._currentLoads[i].progress;
			}
			loaded += (chunk / remaining) * (remaining / this._numItems);
		}

		if (this._lastProgress != loaded) {
			this._sendProgress(loaded);
			this._lastProgress = loaded;
		}
	};

	/**
	 * Dispatch a fileload {{#crossLink "Event"}}{{/crossLink}}. Please see the {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}} event for
	 * details on the event payload.
	 * @method _sendFileComplete
	 * @param {LoadItemObject} item The item that is being loaded.
	 * @param {AbstractLoader} loader
	 * @protected
	 */
	p._sendFileComplete = function (item, loader) {
		if (this._isCanceled() || this._paused) {
			return;
		}

		var event = new createjs.Event("fileload");
		event.loader = loader;
		event.item = item;
		event.result = this._loadedResults[item.id];
		event.rawResult = this._loadedRawResults[item.id];

		// This calls a handler specified on the actual load item. Currently, the SoundJS plugin uses this.
		if (item.completeHandler) {
			item.completeHandler(event);
		}

		this.hasEventListener("fileload") && this.dispatchEvent(event);
	};

	/**
	 * Dispatch a filestart {{#crossLink "Event"}}{{/crossLink}} immediately before a file starts to load. Please see
	 * the {{#crossLink "LoadQueue/filestart:event"}}{{/crossLink}} event for details on the event payload.
	 * @method _sendFileStart
	 * @param {LoadItem|Object} item The item that is being loaded.
	 * @protected
	 */
	p._sendFileStart = function (item) {
		var event = new createjs.Event("filestart");
		event.item = item;
		this.hasEventListener("filestart") && this.dispatchEvent(event);
	};

	createjs.LoadQueue = createjs.promote(LoadQueue, "AbstractLoader");
}());

//##############################################################################
// ImageLoader.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";

	// constructor
	/**
	 * A loader for image files.
	 * @class ImageLoader
	 * @param {LoadItem|Object} loadItem
	 * @param {Boolean} preferXHR
	 * @extends AbstractLoader
	 * @constructor
	 */
	function ImageLoader (loadItem, preferXHR) {
		this.AbstractLoader_constructor(loadItem, preferXHR, createjs.Types.IMAGE);

		// public properties
		this.resultFormatter = this._formatResult;

		// protected properties
		this._tagSrcAttribute = "src";

		// Check if the preload item is already a tag.
		if (createjs.DomUtils.isImageTag(loadItem)) {
			this._tag = loadItem;
		} else if (createjs.DomUtils.isImageTag(loadItem.src)) {
			this._tag = loadItem.src;
		} else if (createjs.DomUtils.isImageTag(loadItem.tag)) {
			this._tag = loadItem.tag;
		}

		if (this._tag != null) {
			this._preferXHR = false;
		} else {
			this._tag = createjs.Elements.img();
		}

		this.on("initialize", this._updateXHR, this);
	};

	var p = createjs.extend(ImageLoader, createjs.AbstractLoader);
	var s = ImageLoader;

	// static methods
	/**
	 * Determines if the loader can load a specific item. This loader can only load items that are of type
	 * {{#crossLink "Types/IMAGE:property"}}{{/crossLink}}.
	 * @method canLoadItem
	 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
	 * @returns {Boolean} Whether the loader can load the item.
	 * @static
	 */
	s.canLoadItem = function (item) {
		return item.type == createjs.Types.IMAGE;
	};

	// public methods
	p.load = function () {
		if (this._tag.src != "" && this._tag.complete) {
			this._sendComplete();
			return;
		}

		var crossOrigin = this._item.crossOrigin;
		if (crossOrigin == true) { crossOrigin = "Anonymous"; }
		if (crossOrigin != null && !createjs.URLUtils.isLocal(this._item)) {
			this._tag.crossOrigin = crossOrigin;
		}

		this.AbstractLoader_load();
	};

	// protected methods
	/**
	 * Before the item loads, set its mimeType and responseType.
	 * @property _updateXHR
	 * @param {Event} event
	 * @private
	 */
	p._updateXHR = function (event) {
		event.loader.mimeType = 'text/plain; charset=x-user-defined-binary';

		// Only exists for XHR
		if (event.loader.setResponseType) {
			event.loader.setResponseType("blob");
		}
	};

	/**
	 * The result formatter for Image files.
	 * @method _formatResult
	 * @param {AbstractLoader} loader
	 * @returns {HTMLImageElement}
	 * @private
	 */
	p._formatResult = function (loader) {
		return this._formatImage;
	};

	/**
	 * The asynchronous image formatter function. This is required because images have
	 * a short delay before they are ready.
	 * @method _formatImage
	 * @param {Function} successCallback The method to call when the result has finished formatting
	 * @param {Function} errorCallback The method to call if an error occurs during formatting
	 * @private
	 */
	p._formatImage = function (successCallback, errorCallback) {
		var tag = this._tag;
		var URL = window.URL || window.webkitURL;

		if (!this._preferXHR) {

			//document.body.removeChild(tag);
		} else if (URL) {
			var objURL = URL.createObjectURL(this.getResult(true));
			tag.src = objURL;

			tag.addEventListener("load", this._cleanUpURL, false);
			tag.addEventListener("error", this._cleanUpURL, false);
		} else {
			tag.src = this._item.src;
		}

		if (tag.complete) {
			successCallback(tag);
		} else {
            tag.onload = createjs.proxy(function() {
                successCallback(this._tag);
                tag.onload = tag.onerror = null;
            }, this);

            tag.onerror = createjs.proxy(function(event) {
                errorCallback(new createjs.ErrorEvent('IMAGE_FORMAT', null, event));
                tag.onload = tag.onerror = null;
            }, this);
		}
	};

	/**
	 * Clean up the ObjectURL, the tag is done with it. Note that this function is run
	 * as an event listener without a proxy/closure, as it doesn't require it - so do not
	 * include any functionality that requires scope without changing it.
	 * @method _cleanUpURL
	 * @param event
	 * @private
	 */
	p._cleanUpURL = function (event) {
		var URL = window.URL || window.webkitURL;
		URL.revokeObjectURL(event.target.src);
	};

	createjs.ImageLoader = createjs.promote(ImageLoader, "AbstractLoader");

}());
