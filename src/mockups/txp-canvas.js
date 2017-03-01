(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {};
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"home-animation-sprite", frames: [[2302,0,343,312],[2647,0,228,210],[2877,0,210,206],[0,0,2300,240]]}
];



lib.updateListCache = function (cacheList) {
	for(var i = 0; i < cacheList.length; i++) {
		if(cacheList[i].cacheCanvas)
			cacheList[i].updateCache();
	}
};

lib.addElementsToCache = function (textInst, cacheList) {
	var cur = textInst;
	while(cur != exportRoot) {
		if(cacheList.indexOf(cur) != -1)
			break;
		cur = cur.parent;
	}
	if(cur != exportRoot) {
		var cur2 = textInst;
		var index = cacheList.indexOf(cur);
		while(cur2 != cur) {
			cacheList.splice(index, 0, cur2);
			cur2 = cur2.parent;
			index++;
		}
	}
	else {
		cur = textInst;
		while(cur != exportRoot) {
			cacheList.push(cur);
			cur = cur.parent;
		}
	}
};

lib.gfontAvailable = function(family, totalGoogleCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

	loadedGoogleCount++;
	if(loadedGoogleCount == totalGoogleCount) {
		lib.updateListCache(gFontsUpdateCacheList);
	}
};

lib.tfontAvailable = function(family, totalTypekitCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

	loadedTypekitCount++;
	if(loadedTypekitCount == totalTypekitCount) {
		lib.updateListCache(tFontsUpdateCacheList);
	}
};
// symbols:



(lib.flower1 = function() {
	this.spriteSheet = ss["home-animation-sprite"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flower2 = function() {
	this.spriteSheet = ss["home-animation-sprite"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flower3 = function() {
	this.spriteSheet = ss["home-animation-sprite"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ground = function() {
	this.spriteSheet = ss["home-animation-sprite"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.leaf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag4A7QgXgZAAgiQAAgIA1gDQA6gFAZAeQgYggghgGQgYgFg1ALQAHgcAVgSQAWgSAbAAQAhAAAYAZQAXAXAAAiQAAAigXAZQgYAYghAAQggAAgYgYg");
	this.shape.setTransform(8,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf2, new cjs.Rectangle(0,-6.3,16,16.6), null);


(lib.leaf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AggBeQgmgOgRgmQgRglAOgnQAOgnAkgRQAkgSAlAOQAgANASAeQARAdgEAiQg3gigfgGQgngHgoAbQAqgYA/AeQAVAJATAOQAQALgBACQgOAngkASQgUAKgVAAQgPAAgRgHg");
	this.shape.setTransform(-9.4,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf1, new cjs.Rectangle(-19.1,-12.2,19.4,20.2), null);


(lib.flower3head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flower3();
	this.instance.parent = this;
	this.instance.setTransform(-3,-1,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFF00").s().p("AAbDRQgNgKgFgQQgOAVgagBQgdgBgZgVQgYgUgIgeQgggCgXgYQgYgZgBghQgBgTANgPQgRgCgKgNQgKgNABgSQABgeAVgbQAUgaAcgKQAEgjAZgbQAagcAhgCQAOgBAMAJQAMAJADAOQAQgVAaAAQAdAAAbAVQAZAVAIAfQAiAFAaAaQAcAbABAiQABAWgRAPQARADAMAMQAMAOAAATQAAAhgXAbQgXAaggAHQgDAigaAZQgaAZgiAAQgQAAgNgKgAAgBZQgFAHAAAIQAAAIAIAHQAHAHAIAAQAIAAAGgIQAHgIAAgIQAAgIgIgHQgJgHgHAAQgIABgHAIgAgvBRQgGAJAAAHQAAAIAIAGQAHAHAHAAQAIgBAGgIQAGgIgBgIQABgIgIgGQgHgGgHAAQgIAAgGAIgAhjAPQgHAAgHAJQgHAIAAAHQABAIAHAGQAIAFAHAAQAHAAAHgIQAGgIAAgIQAAgIgIgGQgGgFgHAAIgBAAgABeAVQgHAHAAAIQAAAIAIAHQAHAHAJAAQAIAAAHgIQAHgHAAgIQAAgIgIgHQgIgHgIAAQgHAAgIAIgAh1hAQgIAAgGAIQgHAIAAAIQAAAHAIAGQAHAFAHAAQAIAAAGgIQAGgIABgIQgBgIgHgFQgGgFgHAAIgBAAgABThCQgIAIABAIQgBAIAJAGQAHAHAIgBQAIAAAHgHQAHgHAAgIQAAgIgIgHQgIgHgIAAQgHAAgHAIgAg/iDQgHAAgHAJQgGAIAAAHQAAAIAHAGQAIAGAHgBQAHAAAHgIQAGgIABgIQgBgIgHgGQgHgFgHAAIgBAAgAANh/QgFAIAAAIQAAAHAHAHQAIAGAHAAQAIAAAGgIQAHgIgBgIQAAgIgHgGQgIgHgHAAQgIABgHAIg");
	this.shape.setTransform(46.6,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAB800").s().p("AArEyQgVgQgIgaQgfAVgagBQgsgCgmgeQgjgdgSgsQgvgBgggnQggglgBgxQgBgkASgTQgYgEgNgSQgMgRABgZQADgrAYgjQAZgjAmgQQAHguAiglQAjgmArgEQAWgCAQALQASAMAFAVQALgOARgJQAQgIARgBQAuAAAoAgQAmAfAOAuQA0AHAkAbQAqAgAFAxQADAggCAOQgDAXgQAOQAYAGAQAQQASATgBAYQAAAxggAmQggAmguAKQgEAvgjAmQglAngtAAIgCAAQgZAAgVgPg");
	this.shape_1.setTransform(47.4,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower3head, new cjs.Rectangle(-3,-1,105,103), null);


(lib.flower2head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flower2();
	this.instance.parent = this;
	this.instance.setTransform(-1,0,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFF00").s().p("AhHCvQgVgOgCgXQgKALgQABQgOACgNgIQgagQgJghQgKgiAOgbQgWgUgFgfQgGggAOgaQAJgOAPgFQAPgFAPAGQgGgSAKgSQAPgaAkgJQAigIAbANQATgUAfgFQAggGAXAPQAWAOACAXQALgKAOgBQAOgCAMAIQAaAQAJAmQAIAkgOAcQATAVAFAgQAGAigOAYQgKAQgOAFQgOAFgRgIQAEASgKAQQgPAbghAHQghAGgagPQgTAUgdADIgKABQgYAAgTgMgAgYBHQgJABgEAGQgDAGABAKQABAKAFADQAGAEAJgBQAJgCADgGQAEgFgBgKQgCgKgFgDQgEgDgGAAIgEAAgAA2A6QgJABgDAGQgDAGABAKQACAKAFADQAGAEAIgBQAKAAADgGQADgGgBgKQgCgKgFgEQgFgDgIAAIgCAAgAhcAlQgKACgEAGQgDAGACAJQABAKAGADQAFAEAJgCQAKgBADgGQAEgGgCgJQgBgKgGgEQgDgCgGAAIgFAAgABsAEQgKAAgDAGQgEAGACAKQACAKAFAEQAGAEAJgBQAJAAADgHQAEgFgCgKQgCgLgFgDQgFgDgHAAIgCAAgAhvgsQgJACgEAFQgDAGACAKQADAJAFAEQAGADAJgBQAKgBADgGQAEgGgDgKQgCgJgGgEQgEgCgGAAIgFAAgABehLQgJABgEAGQgDAGABAKQABAKAGADQAGAEAJgBQAJgBAEgGQADgFgBgKQgCgLgFgDQgEgDgHAAIgEAAgAg+hrQgKACgDAGQgEAGADAJQACAJAGAEQAFAEAKgCQAJgBAEgGQADgGgCgJQgCgKgGgEQgDgCgGAAIgGAAgAAWh6QgKABgEAGQgDAGABAKQACAKAFADQAGAEAJgCQAKgBADgGQADgGgBgJQgBgLgFgDQgEgDgGAAIgFABg");
	this.shape.setTransform(56.9,51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAB800").s().p("AhtD8QgWgOgPghQgSASgYACQgYACgWgNQgigWgLgzQgLgyAUglQghgcgIguQgHguAWgmQALgUAWgGQAUgFAWAIQgGgTAHgUQAFgMARgYQAaglAxgFQArgEApAUQAfggAwgHQAzgIAkAWQAPAKAJAOQAKAQABASQAQgRAWgBQAVgCATAMQAjAWAMA1QALA0gTAnQAcAfAFArQAGAsgVAkQgOAYgUAGQgVAHgYgLQAGAZgRAfQgYApgxAMQgwAMgngaQghAbgrAFIgNAAQglAAgegSg");
	this.shape_1.setTransform(57.2,51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower2head, new cjs.Rectangle(-1,0,114,105), null);


(lib.flower1head = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flower1();
	this.instance.parent = this;
	this.instance.setTransform(-87,-70,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFF00").s().p("AgeE0QghAAgagRQgcgSgLgeQgZAagdABQgzgHgggvQgdgpgDg5QgBgRAGgWQgagWgPggQgPgegBgkQADgsAbgcQAdgdApAHQgFgOABgJQAGgyAtgcQAlgYA1gDQAUAAARAGQAsgyBIAAQBIAEAWA1QAVgZAfABQA3AJAfAyQAeAwgKA6QA1ArAEBHQgCAsgXAdQgbAhgogGQAEAOAAAKQgHA/g3AjQgzAgg9gNQgWAdgeAQQggARggAAIgCAAgAgoB0QgJALgBAPQABANAJALQALAKANAAQANAAAKgLQAKgLAAgOQgBgOgJgKQgJgLgNAAQgOAAgLALgAipBMQgKAKABANQAAAPALALQAKAKAPAAQAMAAAKgKQAKgLgBgNQAAgPgLgKQgKgLgOAAQgNAAgKALgABdBHQgKAKAAAPQAAANAKAKQAKAKANAAQAOAAAJgLQALgLgBgOQAAgNgKgKQgJgKgNAAQgOAAgKALgACpgiQgJAJgBAPQABAMAJAJQAJAJANABQAOAAAJgKQAKgKAAgOQgBgNgJgJQgKgJgNgBQgNABgJAKgAjQgwQgLAKAAANQAAAOALAKQALAKANAAQANAAALgKQAKgKAAgOQAAgNgLgKQgLgJgNAAQgMAAgLAJgAB9igQgJAJgBAOQACANAJAIQAJAJANABQANgBAJgJQAJgJABgOQgBgNgKgIQgJgJgNgBQgNABgJAJgAiEinQgKAJAAANQAAANAKAKQAKAJANAAQANAAAKgJQAKgKAAgNQAAgNgKgKQgKgJgNAAQgNAAgKAKgAAAjPQgKAJABANQAAANAKAJQAKAJAMAAQANAAAKgJQAJgJAAgOQAAgNgKgJQgKgIgNAAIgBAAQgMAAgJAJg");
	this.shape.setTransform(0.5,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAB800").s().p("AglG6Qg5gBgtgaQgzgcgRg0QglAkgnABQhHgJgtg/Qgpg4gHhNQABgbAIgfQgjgegVgrQgSgqgCgwQAEg2AegmQAfgnAzgGQAMgBATAFQgGgSABgQQAKhKBCgqQA4gjBQgFQAdAAAeAIQBBhHBrgBQAcABAUAGQAjALAVARQAYASANAdQAighAnACQA9ALApA1QAlAxAJBEQACAWgGAbQAnAgAWAsQAVAsADAyQAAA1gYAnQgdArgxAFQgNAAgQgFQgKBZg8A7Qg8A7hWAHQgWAAgZgFQgfApgmAWQgqAZgtAAIgBAAg");
	this.shape_1.setTransform(-1,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower1head, new cjs.Rectangle(-87,-70,171.5,156), null);


(lib.flower3_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"flower3-loop":20});

	// timeline functions:
	this.frame_140 = function() {
		this.gotoAndPlay("flower3-loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(140).call(this.frame_140).wait(1));

	// head
	this.instance = new lib.flower3head();
	this.instance.parent = this;
	this.instance.setTransform(-25.9,-271.1,0.999,0.999,-8.8,0,0,50.4,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:50.5,regY:50.6,scaleX:1,scaleY:1,rotation:0,x:5.3,y:-272.8},20,cjs.Ease.get(-0.5)).to({rotation:10,x:40.3,y:-270.8},30,cjs.Ease.get(1)).to({rotation:0,x:5.3,y:-272.8},30,cjs.Ease.get(-1)).to({regX:50.4,rotation:-10,x:-29.7,y:-270.8},30,cjs.Ease.get(1)).to({regX:50.5,rotation:0,x:5.3,y:-272.8},30,cjs.Ease.get(-1)).wait(1));

	// leaf1
	this.instance_1 = new lib.leaf2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.9,-192.8,0.999,0.999,-28.8,0,0,8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:8.1,scaleX:1,scaleY:1,rotation:-20,x:9.5,y:-194.6},20,cjs.Ease.get(-0.5)).to({regX:8,rotation:-10,x:29.3,y:-192.7},30,cjs.Ease.get(1)).to({regX:8.1,rotation:-20,x:9.5,y:-194.6},30,cjs.Ease.get(-1)).to({rotation:-30,x:-10,y:-192.6},30,cjs.Ease.get(1)).to({rotation:-20,x:9.5,y:-194.6},30,cjs.Ease.get(-1)).wait(1));

	// leaf2
	this.instance_2 = new lib.leaf1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16,-115.2,0.849,0.849,-27.1,0,0,-9.5,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-9.4,regY:-2.1,scaleX:0.85,scaleY:0.85,rotation:-20,x:-9.5,y:-116},20,cjs.Ease.get(-0.5)).to({regX:-9.3,regY:-2,rotation:-12,x:-2.6,y:-115},30,cjs.Ease.get(1)).to({regX:-9.4,regY:-2.1,rotation:-20,x:-9.5,y:-116},30,cjs.Ease.get(-1)).to({regX:-9.5,rotation:-28,x:-16.8,y:-115},30,cjs.Ease.get(1)).to({regX:-9.4,rotation:-20,x:-9.5,y:-116},30,cjs.Ease.get(-1)).wait(1));

	// stem
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AB1SgQAAytkHyMIAcgGQEKSPAASwg");
	this.shape.setTransform(-13.3,-118.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AByShQAAyukByMIAdgGQECSQAASwg");
	this.shape_1.setTransform(-13,-118.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABuShQAAytj5yOIAdgFQD6SQAASwg");
	this.shape_2.setTransform(-12.6,-118.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABqShQAAytjxyOIAdgGQDySSAASvg");
	this.shape_3.setTransform(-12.2,-118.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ABlShQABytjpyOIAegGQDpSSAASvg");
	this.shape_4.setTransform(-11.7,-118.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ABhShQAAysjfyPIAdgGQDgSTAASug");
	this.shape_5.setTransform(-11.3,-118.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ABcShQAAyrjVyRIAegFQDVSUAAStg");
	this.shape_6.setTransform(-10.8,-118.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("ABWSiQAAysjJySIAdgEQDKSUAASug");
	this.shape_7.setTransform(-10.2,-118.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("ABQSiQAAyri+yTIAegFQC/SWAAStg");
	this.shape_8.setTransform(-9.6,-118.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("ABKSiQAAyrixyUIAdgEQCySXAASsg");
	this.shape_9.setTransform(-9,-118.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("ABESiQAAyqilyVIAegEQClSYAASrg");
	this.shape_10.setTransform(-8.4,-118.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AA9SjQAAyqiXyWIAdgFQCYSaAASrg");
	this.shape_11.setTransform(-7.7,-118.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AA2SjQAAypiJyYIAegEQCJSbAASqg");
	this.shape_12.setTransform(-7,-118.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAuSjQAByoh6yaIAdgDQB6ScABSpg");
	this.shape_13.setTransform(-6.2,-118.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAnSjQAAyohrybIAegCQBrScAASpg");
	this.shape_14.setTransform(-5.5,-118.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAeSkQAByohbydIAegCQBbSfAASog");
	this.shape_15.setTransform(-4.6,-118.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAWSkQAAynhJyeIAegCQBJSfAASog");
	this.shape_16.setTransform(-3.8,-118.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AANSkQAAymg3ygIAdgBQA4ShAASmg");
	this.shape_17.setTransform(-2.9,-118.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAESlQAAymglyiIAeAAQAlSiAASmg");
	this.shape_18.setTransform(-2,-118.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgESlQAAylgUykIAdAAQAUSkAASlg");
	this.shape_19.setTransform(-1.1,-118.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgOSlMAAAglJIAdAAMAAAAlJg");
	this.shape_20.setTransform(-0.1,-118.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgYSlQAAylAUykIAdAAQgUSkAASlIgdAAg");
	this.shape_21.setTransform(0.9,-118.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AghSlQAAymAlyiIAeAAQglSiAASmIgeAAg");
	this.shape_22.setTransform(1.8,-118.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgqSkQAAymA4yhIAdABQg3SgAASmIgeAAg");
	this.shape_23.setTransform(2.7,-118.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgzSkQAAynBJygIAeACQhJSfAASmIgeAAg");
	this.shape_24.setTransform(3.6,-118.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("Ag8SkQAAyoBbyfIAeACQhaSeAASnIgfAAg");
	this.shape_25.setTransform(4.5,-118.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AhESjQAAypBrycIAeACQhrSbAASoIgeAAg");
	this.shape_26.setTransform(5.3,-118.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AhMSjQAAypB7ycIAdADQh5SaAASoIgfAAg");
	this.shape_27.setTransform(6.1,-118.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AhTSjQAAyqCJybIAeAEQiJSYAASpIgeAAg");
	this.shape_28.setTransform(6.8,-118.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AhaSjQAAyrCYyaIAdAFQiXSWAASqIgeAAg");
	this.shape_29.setTransform(7.5,-118.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AhhSiQAAyrClyYIAeAEQilSVAASqIgeAAg");
	this.shape_30.setTransform(8.2,-118.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AhnSiQAAysCyyXIAdAEQixSUAASrIgeAAg");
	this.shape_31.setTransform(8.8,-118.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AhtSiQAAytC+yWIAdAFQi9STAASrIgeAAg");
	this.shape_32.setTransform(9.4,-118.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AhzSiQAAyuDKyUIAdAEQjJSSAASsIgeAAg");
	this.shape_33.setTransform(10,-118.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("Ah5ShQAAytDVyUIAdAFQjUSRABSrIgfAAg");
	this.shape_34.setTransform(10.6,-118.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("Ah+ShQAAyuDgyTIAdAGQjfSPAASsIgeAAg");
	this.shape_35.setTransform(11.1,-118.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AiDShQAByvDoySIAdAGQjnSPAASsIgfAAg");
	this.shape_36.setTransform(11.6,-118.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AiHShQAAyvDyySIAdAGQjxSOAAStIgeAAg");
	this.shape_37.setTransform(12,-118.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AiLShQAAywD6yRIAdAHQj5SNAAStIgeAAg");
	this.shape_38.setTransform(12.4,-118.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AiPShQAAywECyQIAdAGQkBSMAASuIgeAAg");
	this.shape_39.setTransform(12.8,-118.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AiTSgQAAywEKyPIAcAGQkISMABStIgfAAg");
	this.shape_40.setTransform(13.2,-118.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AiWSgQAAywEPyPIAeAHQkOSLAAStIgfAAg");
	this.shape_41.setTransform(13.5,-118.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AiZSgQAAywEVyPIAdAHQkTSKAASuIgfAAg");
	this.shape_42.setTransform(13.8,-118.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AibSgQAAyxEZyOIAeAHQkZSKAASuIgeAAg");
	this.shape_43.setTransform(14,-118.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AidSgQAAyxEeyOIAdAHQkdSKAASuIgeAAg");
	this.shape_44.setTransform(14.2,-118.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AifSgQAAyxEiyOIAdAHQkhSKAASuIgeAAg");
	this.shape_45.setTransform(14.4,-118.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AigSgQAAyyEkyNIAdAHQkjSJAASvIgeAAg");
	this.shape_46.setTransform(14.5,-118.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AiiSgQAAyyEnyNIAdAIQkmSIABSvIgfAAg");
	this.shape_47.setTransform(14.7,-118.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AiiSgQAAyyEoyNIAdAIQknSIAASvIgeAAg");
	this.shape_48.setTransform(14.7,-118.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AijSgQAAyyEqyNIAdAIQkpSIAASvIgeAAg");
	this.shape_49.setTransform(14.8,-118.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AijSgQAAyyEqyNIAdAIQkpSIAASvg");
	this.shape_50.setTransform(14.8,-118.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AAWSkQAAymhJyfIAegCQBJSgAASng");
	this.shape_51.setTransform(-3.8,-118.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AAeSkQABynhbyeIAegCQBbSfAASog");
	this.shape_52.setTransform(-4.6,-118.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("ABQSiQAAyri9yTIAdgFQC+SWAAStg");
	this.shape_53.setTransform(-9.6,-118.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("ABbShQAAyrjTyRIAdgFQDVSUAAStg");
	this.shape_54.setTransform(-10.7,-118.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("ABhShQAAysjfyPIAegGQDfSTAASug");
	this.shape_55.setTransform(-11.3,-118.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("ABlShQABysjpyPIAegGQDpSSAASvg");
	this.shape_56.setTransform(-11.7,-118.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("ABuShQAAytj5yNIAdgHQD6SRAASwg");
	this.shape_57.setTransform(-12.6,-118.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AB4SgQAAytkOyLIAdgHQEPSPABSwg");
	this.shape_58.setTransform(-13.6,-118.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AB7SgQAByukVyKIAegHQEVSPAASwg");
	this.shape_59.setTransform(-13.9,-118.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AB+SgQAAyukZyKIAegHQEZSOAASxg");
	this.shape_60.setTransform(-14.2,-118.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("ACASgQAAyukdyKIAdgHQEeSOAASxg");
	this.shape_61.setTransform(-14.4,-118.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("ACCSgQAAyukhyKIAdgHQEiSOAASxg");
	this.shape_62.setTransform(-14.6,-118.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("ACDSgQAAyvkjyJIAdgHQEkSNAASyg");
	this.shape_63.setTransform(-14.7,-118.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("ACESgQAAyvkmyIIAegIQEnSNAASyg");
	this.shape_64.setTransform(-14.8,-118.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("ACFSgQAAyvknyIIAdgIQEoSNAASyg");
	this.shape_65.setTransform(-14.9,-118.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("ACGSgQAAyvkpyIIAdgIQEqSNAASyg");
	this.shape_66.setTransform(-15,-118.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-329.9,119.5,329.9);


(lib.flower2_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"flower2-loop":10});

	// timeline functions:
	this.frame_130 = function() {
		this.gotoAndPlay("flower2-loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(130).call(this.frame_130).wait(1));

	// head
	this.instance = new lib.flower2head();
	this.instance.parent = this;
	this.instance.setTransform(-6.8,-173.7,1,1,-5.5,0,0,56.8,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:2.1,y:-174.7},10,cjs.Ease.get(-0.33)).to({rotation:10,x:18.2,y:-172.7},30,cjs.Ease.get(1)).to({rotation:0,x:2.1,y:-174.7},30,cjs.Ease.get(-1)).to({rotation:-10,x:-13.9,y:-172.8},30,cjs.Ease.get(1)).to({rotation:0,x:2.1,y:-174.7},30,cjs.Ease.get(-1)).wait(1));

	// leaf
	this.instance_1 = new lib.leaf2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.3,-70.4,1,1,-5.5,0,0,8,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:8.3,rotation:0,x:9.3,y:-71},10,cjs.Ease.get(-0.33)).to({regY:8.2,rotation:10,x:10.9,y:-70},30,cjs.Ease.get(1)).to({regY:8.3,rotation:0,x:9.3,y:-71},30,cjs.Ease.get(-1)).to({regX:8.1,regY:8.2,rotation:-10,x:7.7,y:-70},30,cjs.Ease.get(1)).to({regX:8,regY:8.3,rotation:0,x:9.3,y:-71},30,cjs.Ease.get(-1)).wait(1));

	// stem
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAPLLQABrOg8rEIAegDQA8LIgBLNg");
	this.shape.setTransform(-2.9,-71.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AANLLQABrOg4rEIAegDQA4LJgBLMg");
	this.shape_1.setTransform(-2.7,-71.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAKLKQABrNgzrEIAegCQAzLIgBLLg");
	this.shape_2.setTransform(-2.5,-71.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAILKQABrNgurEIAegCQAuLIgBLLg");
	this.shape_3.setTransform(-2.2,-71.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAFLKQABrMgprFIAfgCQAoLIgBLLg");
	this.shape_4.setTransform(-2,-71.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AACLKQABrMgjrEIAegDQAjLIgBLLg");
	this.shape_5.setTransform(-1.7,-71.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAALJQAArKgdrGIAdgBQAeLIgBLJg");
	this.shape_6.setTransform(-1.4,-71.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgDLJQAArKgWrGIAdgBQAWLIAALJg");
	this.shape_7.setTransform(-1,-71.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgHLJQABrJgQrHIAdAAQAQLHgBLJg");
	this.shape_8.setTransform(-0.7,-71.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgKLIQAArIgIrHIAdAAQAILHAALIg");
	this.shape_9.setTransform(-0.3,-71.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgOLIIAA2PIAdAAIAAWPg");
	this.shape_10.setTransform(0.1,-71.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgRLIQgBrIAIrHIAdAAQgILHAALIIgcAAg");
	this.shape_11.setTransform(0.4,-71.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgVLJQAArJAOrHIAdABQgOLGAALJIgdAAg");
	this.shape_12.setTransform(0.7,-71.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgYLJQgBrJAVrIIAdABQgVLHABLJIgdAAg");
	this.shape_13.setTransform(1.1,-71.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgbLJQgBrJAcrIIAdABQgcLGABLKIgdAAg");
	this.shape_14.setTransform(1.4,-71.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgeLJQgBrJAhrIIAeABQghLGABLKIgeAAg");
	this.shape_15.setTransform(1.7,-71.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AghLKQgBrLAnrIIAeACQgnLFABLMIgeAAg");
	this.shape_16.setTransform(2,-71.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgkLKQgBrLAsrIIAeACQgsLFABLMIgeAAg");
	this.shape_17.setTransform(2.3,-71.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgnLKQgBrLAyrIIAeACQgyLFABLMIgeAAg");
	this.shape_18.setTransform(2.5,-71.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgpLLQgBrMA3rJIAeADQg3LEABLOIgeAAg");
	this.shape_19.setTransform(2.8,-71.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgsLLQgBrNA8rIIAeADQg8LEABLOIgeAAg");
	this.shape_20.setTransform(3,-71.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AguLLQgBrNBArIIAeADQhALEABLOIgeAAg");
	this.shape_21.setTransform(3.3,-71.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgwLLQgCrNBGrIIAeADQhGLDACLPIgeAAg");
	this.shape_22.setTransform(3.5,-71.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgzLLQgBrNBKrIIAeADQhKLDABLPIgeAAg");
	this.shape_23.setTransform(3.7,-71.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("Ag1LMQgBrOBOrJIAeAEQhOLDABLQIgeAAg");
	this.shape_24.setTransform(3.9,-71.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("Ag2LMQgCrPBSrIIAeAEQhSLCACLRIgeAAg");
	this.shape_25.setTransform(4.1,-71.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("Ag4LMQgCrPBVrIIAeAEQhVLCACLRIgeAAg");
	this.shape_26.setTransform(4.3,-71.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("Ag6LMQgBrPBYrIIAeAEQhYLCABLRIgeAAg");
	this.shape_27.setTransform(4.4,-71.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("Ag7LMQgCrPBbrIIAeAEQhbLBACLSIgeAAg");
	this.shape_28.setTransform(4.6,-71.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("Ag9LMQgBrPBerIIAeAEQheLBABLSIgeAAg");
	this.shape_29.setTransform(4.7,-71.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("Ag+LNQgCrQBhrIIAeAEQhhLBACLTIgeAAg");
	this.shape_30.setTransform(4.8,-71.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("Ag/LNQgCrQBjrIIAeAEQhjLAACLUIgeAAg");
	this.shape_31.setTransform(5,-71.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AhALNQgCrRBlrIIAeAFQhlLBACLTIgeAAg");
	this.shape_32.setTransform(5.1,-71.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AhBLNQgCrRBnrIIAeAFQhnLAACLUIgeAAg");
	this.shape_33.setTransform(5.1,-71.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AhCLNQgCrRBprIIAeAFQhpLAACLUIgeAAg");
	this.shape_34.setTransform(5.2,-71.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AhCLNQgCrRBqrIIAeAFQhqLAACLUIgeAAg");
	this.shape_35.setTransform(5.3,-71.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AhDLNQgCrRBrrIIAeAFQhrLAACLUIgeAAg");
	this.shape_36.setTransform(5.3,-71.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AhDLNQgCrRBsrIIAeAFQhsLAACLUIgeAAg");
	this.shape_37.setTransform(5.4,-71.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AhELNQgCrRBtrIIAeAFQhtLAACLUIgeAAg");
	this.shape_38.setTransform(5.4,-71.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AhELNQgCrRBtrIIAeAFQhtLAACLUg");
	this.shape_39.setTransform(5.4,-71.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgKLIQAArIgIrHIAdAAQAILHgBLIg");
	this.shape_40.setTransform(-0.3,-71.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgHLJQAArJgOrGIAdgBQAOLHAALJg");
	this.shape_41.setTransform(-0.6,-71.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgELJQABrJgVrHIAdgBQAVLIgBLJg");
	this.shape_42.setTransform(-1,-71.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgBLJQABrKgcrGIAdgBQAcLIgBLJg");
	this.shape_43.setTransform(-1.3,-71.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AABLJQABrKghrGIAfgBQAgLIgBLJg");
	this.shape_44.setTransform(-1.6,-71.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AAELKQABrMgmrFIAdgCQAnLIgBLLg");
	this.shape_45.setTransform(-1.9,-71.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AAHLKQABrMgsrFIAegCQAsLIgBLLg");
	this.shape_46.setTransform(-2.2,-71.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AAKLKQABrMgyrFIAegCQAyLIgBLLg");
	this.shape_47.setTransform(-2.4,-71.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AAMLLQABrOg3rEIAegDQA3LJgBLMg");
	this.shape_48.setTransform(-2.7,-71.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AARLLQABrOhArEIAegDQBALIgBLNg");
	this.shape_49.setTransform(-3.2,-71.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AATLLQACrPhGrDIAegDQBGLIgCLNg");
	this.shape_50.setTransform(-3.4,-71.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AAWLLQABrPhKrDIAegDQBKLIgBLNg");
	this.shape_51.setTransform(-3.6,-71.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AAYLMQABrQhOrDIAegEQBOLJgBLOg");
	this.shape_52.setTransform(-3.8,-71.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AAZLMQACrRhSrCIAegEQBSLIgCLPg");
	this.shape_53.setTransform(-4,-71.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AAbLMQACrRhVrCIAegEQBVLIgCLPg");
	this.shape_54.setTransform(-4.2,-71.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AAdLMQABrRhYrCIAegEQBYLIgBLPg");
	this.shape_55.setTransform(-4.3,-71.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AAeLMQACrShbrBIAegEQBbLIgCLPg");
	this.shape_56.setTransform(-4.5,-71.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AAgLMQABrSherBIAegEQBeLIgBLPg");
	this.shape_57.setTransform(-4.6,-71.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AAhLNQACrThhrBIAegEQBhLIgCLQg");
	this.shape_58.setTransform(-4.7,-71.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AAiLNQACrUhjrAIAegEQBjLIgCLQg");
	this.shape_59.setTransform(-4.9,-71.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AAjLNQACrThlrBIAegFQBlLIgCLRg");
	this.shape_60.setTransform(-5,-71.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AAkLNQACrUhnrAIAegFQBnLIgCLRg");
	this.shape_61.setTransform(-5,-71.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AAlLNQACrUhprAIAegFQBpLIgCLRg");
	this.shape_62.setTransform(-5.1,-71.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AAlLNQACrUhqrAIAegFQBqLIgCLRg");
	this.shape_63.setTransform(-5.2,-71.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AAmLNQACrUhrrAIAegFQBrLIgCLRg");
	this.shape_64.setTransform(-5.2,-71.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AAmLNQACrUhsrAIAegFQBsLIgCLRg");
	this.shape_65.setTransform(-5.3,-71.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AAnLNQACrUhtrAIAegFQBtLIgCLRg");
	this.shape_66.setTransform(-5.3,-71.7);
	this.shape_66._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_10}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(98).to({_off:false},0).wait(4).to({_off:true},1).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-231.3,123.6,231.4);


(lib.flower1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"flower1-loop":0});

	// timeline functions:
	this.frame_120 = function() {
		this.gotoAndPlay("flower1-loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

	// head
	this.instance = new lib.flower1head();
	this.instance.parent = this;
	this.instance.setTransform(89.7,-273.5,1,1,0,0,0,81.9,77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:77.7,rotation:10,x:111.7,y:-255.6},30,cjs.Ease.get(1)).to({regY:77.8,rotation:0,x:89.7,y:-273.5},30,cjs.Ease.get(-1)).to({regY:77.7,rotation:-10,x:63.7,y:-286.6},30,cjs.Ease.get(1)).to({regY:77.8,rotation:0,x:89.7,y:-273.5},30,cjs.Ease.get(-1)).wait(1));

	// leaf
	this.instance_1 = new lib.leaf1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.7,-223.3,1,1,0,0,0,9.7,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:10,rotation:10,x:23.6,y:-220.3},30,cjs.Ease.get(1)).to({regY:10.1,rotation:0,x:8.6,y:-223.3},30,cjs.Ease.get(-1)).to({rotation:-10,x:-6.6,y:-223.1},30,cjs.Ease.get(1)).to({rotation:0,x:8.6,y:-223.3},30,cjs.Ease.get(-1)).wait(1));

	// stem
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgOV6MAAAgrzIAdAAMAAAArzg");
	this.shape.setTransform(0.2,-140.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgWV6QgB16AR15IAdAAQgRV5ABV6IgdAAg");
	this.shape_1.setTransform(1,-140.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgeV6QgB16Ag15IAeABQggV4ABV6IgeAAg");
	this.shape_2.setTransform(1.8,-140.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgmV6QgB17Aw13IAeABQgwV2ABV7IgeAAg");
	this.shape_3.setTransform(2.6,-140.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgtV5QgC17A/12IAeABQg/V2ACV6IgeAAg");
	this.shape_4.setTransform(3.3,-140.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag0V5QgC18BN11IAeACQhNV1ACV6IgeAAg");
	this.shape_5.setTransform(4,-140.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ag7V5QgC18Bb11IAeACQhbV0ACV7IgeAAg");
	this.shape_6.setTransform(4.7,-140.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhBV5QgD19Bp10IAdACQhoVzADV8IgeAAg");
	this.shape_7.setTransform(5.3,-140.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhHV5QgE19B210IAeADQh2VyAEV8IgeAAg");
	this.shape_8.setTransform(5.9,-140.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhNV5QgE1+CC1yIAeACQiCVyAEV8IgeAAg");
	this.shape_9.setTransform(6.5,-140);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhTV5QgE1+CN1yIAeACQiNVxAEV9IgeAAg");
	this.shape_10.setTransform(7.1,-140);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhYV4QgF1+CZ1xIAeADQiZVwAFV8IgeAAg");
	this.shape_11.setTransform(7.6,-140);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AheV4QgF1/Ck1wIAeADQikVwAFV8IgeAAg");
	this.shape_12.setTransform(8.2,-140);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AhiV4QgF1/Ct1wIAeAEQitVvAFV8IgeAAg");
	this.shape_13.setTransform(8.6,-140);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AhnV4QgF1/C31wIAdAEQi2VuAFV9IgeAAg");
	this.shape_14.setTransform(9.1,-140);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AhrV4QgG1/DA1wIAeAFQjAVtAGV9IgeAAg");
	this.shape_15.setTransform(9.5,-140);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AhvV4QgG2ADI1vIAeAEQjIVtAGV+IgeAAg");
	this.shape_16.setTransform(9.9,-140);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhzV4QgG2BDQ1uIAdAFQjPVsAGV+IgeAAg");
	this.shape_17.setTransform(10.3,-140);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("Ah2V4QgH2BDX1uIAeAFQjXVsAHV+IgeAAg");
	this.shape_18.setTransform(10.6,-140);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("Ah6V4QgG2BDd1uIAeAFQjdVsAGV+IgeAAg");
	this.shape_19.setTransform(11,-139.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("Ah9V4QgG2BDj1uIAeAGQjjVqAGV/IgeAAg");
	this.shape_20.setTransform(11.3,-139.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("Ah/V4QgH2BDp1uIAdAGQjoVqAHV/IgeAAg");
	this.shape_21.setTransform(11.5,-139.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AiCV4QgH2CDu1tIAeAGQjuVqAHV/IgeAAg");
	this.shape_22.setTransform(11.8,-139.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AiEV4QgH2CDy1tIAeAGQjyVrAHV+IgeAAg");
	this.shape_23.setTransform(12,-139.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AiFV3QgH2BD11sIAeAFQj1VqAHV+IgeAAg");
	this.shape_24.setTransform(12.1,-139.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AiHV3QgH2BD51sIAdAFQj4VqAHV+IgeAAg");
	this.shape_25.setTransform(12.3,-139.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AiIV3QgI2CD81rIAdAFQj7VqAIV+IgeAAg");
	this.shape_26.setTransform(12.4,-139.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AiJV3QgI2CD+1rIAdAFQj9VqAIV+IgeAAg");
	this.shape_27.setTransform(12.5,-139.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AiKV3QgH2CD/1rIAdAFQj+VqAHV+IgeAAg");
	this.shape_28.setTransform(12.6,-139.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AiKV3QgI2CEA1rIAdAFQj/VqAIV+IgeAAg");
	this.shape_29.setTransform(12.6,-139.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AiKV3QgI2CEA1rIAeAFQkAVqAIV+g");
	this.shape_30.setTransform(12.6,-139.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgGV6QAB16gR15IAdAAQARV5gBV6g");
	this.shape_31.setTransform(-0.6,-140.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AABV6QAB16gg14IAegBQAgV5gBV6g");
	this.shape_32.setTransform(-1.4,-140.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAJV6QAB17gw12IAegBQAwV3gBV7g");
	this.shape_33.setTransform(-2.2,-140.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AAQV5QAC16g/12IAegBQA/V2gCV7g");
	this.shape_34.setTransform(-2.9,-140.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AAXV5QAC16hN11IAegCQBNV1gCV8g");
	this.shape_35.setTransform(-3.6,-140.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AAeV5QAC17hb10IAegCQBbV1gCV8g");
	this.shape_36.setTransform(-4.3,-140.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAkV5QAD18ho1zIAdgCQBpV0gDV9g");
	this.shape_37.setTransform(-4.9,-140.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AAqV5QAE18h21yIAegDQB2V0gEV9g");
	this.shape_38.setTransform(-5.5,-140.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AAwV5QAE18iC1yIAegCQCCVygEV+g");
	this.shape_39.setTransform(-6.1,-140);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AA2V5QAE19iN1xIAegCQCNVygEV+g");
	this.shape_40.setTransform(-6.7,-140);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AA7V4QAF18iZ1wIAegDQCZVxgFV+g");
	this.shape_41.setTransform(-7.2,-140);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("ABBV4QAF18ik1wIAegDQCkVwgFV/g");
	this.shape_42.setTransform(-7.8,-140);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("ABFV4QAF18it1vIAegEQCtVwgFV/g");
	this.shape_43.setTransform(-8.2,-140);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("ABKV4QAF19i21uIAdgEQC3VwgFV/g");
	this.shape_44.setTransform(-8.7,-140);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("ABOV4QAG19i/1tIAdgFQDAVwgGV/g");
	this.shape_45.setTransform(-9.1,-140);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("ABSV4QAG1+jI1tIAegEQDIVvgGWAg");
	this.shape_46.setTransform(-9.5,-140);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("ABWV4QAG1+jP1sIAdgFQDQVugGWBg");
	this.shape_47.setTransform(-9.9,-140);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("ABZV4QAH1+jX1sIAegFQDXVugHWBg");
	this.shape_48.setTransform(-10.2,-140);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("ABdV4QAG1+jd1sIAegFQDdVugGWBg");
	this.shape_49.setTransform(-10.6,-139.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("ABgV4QAG1/jj1qIAegGQDjVugGWBg");
	this.shape_50.setTransform(-10.9,-139.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("ABiV4QAH1/jo1qIAdgGQDpVugHWBg");
	this.shape_51.setTransform(-11.1,-139.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("ABlV4QAH1/ju1qIAegGQDuVtgHWCg");
	this.shape_52.setTransform(-11.4,-139.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("ABnV4QAH1+jy1rIAegGQDyVtgHWCg");
	this.shape_53.setTransform(-11.6,-139.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("ABoV3QAH1+j11qIAegFQD1VsgHWBg");
	this.shape_54.setTransform(-11.7,-139.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("ABqV3QAH1+j41qIAdgFQD5VsgHWBg");
	this.shape_55.setTransform(-11.9,-139.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("ABrV3QAI1+j71qIAdgFQD8VrgIWCg");
	this.shape_56.setTransform(-12,-139.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("ABsV3QAI1+j91qIAdgFQD+VrgIWCg");
	this.shape_57.setTransform(-12.1,-139.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("ABtV3QAH1+j+1qIAdgFQD/VrgHWCg");
	this.shape_58.setTransform(-12.2,-139.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("ABtV3QAI1+j/1qIAdgFQEAVrgIWCg");
	this.shape_59.setTransform(-12.2,-139.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("ABtV3QAI1+kA1qIAegFQEAVrgIWCg");
	this.shape_60.setTransform(-12.2,-139.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-421.3,171.5,421.4);


// stage content:
(lib.txpcanvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// flower2
	this.instance = new lib.flower2_1();
	this.instance.parent = this;
	this.instance.setTransform(948,351.2,1,1,0,0,0,12,-64.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flower1
	this.instance_1 = new lib.flower1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(886.6,288.3,1,1,0,0,0,14.6,-133.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// flower3
	this.instance_2 = new lib.flower3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1006.2,253.8,1,1,0,0,0,4.2,-162.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// ground
	this.instance_3 = new lib.ground();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,360,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(575,240,1150,480);
// library properties:
lib.properties = {
	width: 1150,
	height: 480,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/home-animation-sprite.png", id:"home-animation-sprite"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
