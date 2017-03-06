var lib, images, createjs, ss, AdobeAn;
(function (lib, img, cjs, ss, an)
{

var p; // shortcut to reference prototypes
lib.ssMetadata = [{name:'index-animation', frames: [[2302,0,343,312],[2647,0,228,210],[2877,0,210,206],[0,0,2300,240]]}];

// symbols

(lib.flower1 = function()
{
    this.spriteSheet = ss['index-animation'];
    this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();

(lib.flower2 = function()
{
    this.spriteSheet = ss['index-animation'];
    this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();

(lib.flower3 = function()
{
    this.spriteSheet = ss['index-animation'];
    this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();

(lib.ground = function()
{
    this.spriteSheet = ss['index-animation'];
    this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();

// helper functions

function mcSymbolClone()
{
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds)
{
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mcSymbolClone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
    }


(lib.leaf2 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#333').s().p('Ag4A7QgXgZAAgiQAAgIA1gDQA6gFAZAeQgYggghgGQgYgFg1ALQAHgcAVgSQAWgSAbAAQAhAAAYAZQAXAXAAAiQAAAigXAZQgYAYghAAQggAAgYgYg');
    this.shape.setTransform(8,2);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf2, new cjs.Rectangle(0,-6.3,16,16.6), null);


(lib.leaf1 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#333').s().p('AggBeQgmgOgRgmQgRglAOgnQAOgnAkgRQAkgSAlAOQAgANASAeQARAdgEAiQg3gigfgGQgngHgoAbQAqgYA/AeQAVAJATAOQAQALgBACQgOAngkASQgUAKgVAAQgPAAgRgHg');
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
    this.shape.graphics.f('#feff00').s().p('AAbDRQgNgKgFgQQgOAVgagBQgdgBgZgVQgYgUgIgeQgggCgXgYQgYgZgBghQgBgTANgPQgRgCgKgNQgKgNABgSQABgeAVgbQAUgaAcgKQAEgjAZgbQAagcAhgCQAOgBAMAJQAMAJADAOQAQgVAaAAQAdAAAbAVQAZAVAIAfQAiAFAaAaQAcAbABAiQABAWgRAPQARADAMAMQAMAOAAATQAAAhgXAbQgXAaggAHQgDAigaAZQgaAZgiAAQgQAAgNgKgAAgBZQgFAHAAAIQAAAIAIAHQAHAHAIAAQAIAAAGgIQAHgIAAgIQAAgIgIgHQgJgHgHAAQgIABgHAIgAgvBRQgGAJAAAHQAAAIAIAGQAHAHAHAAQAIgBAGgIQAGgIgBgIQABgIgIgGQgHgGgHAAQgIAAgGAIgAhjAPQgHAAgHAJQgHAIAAAHQABAIAHAGQAIAFAHAAQAHAAAHgIQAGgIAAgIQAAgIgIgGQgGgFgHAAIgBAAgABeAVQgHAHAAAIQAAAIAIAHQAHAHAJAAQAIAAAHgIQAHgHAAgIQAAgIgIgHQgIgHgIAAQgHAAgIAIgAh1hAQgIAAgGAIQgHAIAAAIQAAAHAIAGQAHAFAHAAQAIAAAGgIQAGgIABgIQgBgIgHgFQgGgFgHAAIgBAAgABThCQgIAIABAIQgBAIAJAGQAHAHAIgBQAIAAAHgHQAHgHAAgIQAAgIgIgHQgIgHgIAAQgHAAgHAIgAg/iDQgHAAgHAJQgGAIAAAHQAAAIAHAGQAIAGAHgBQAHAAAHgIQAGgIABgIQgBgIgHgGQgHgFgHAAIgBAAgAANh/QgFAIAAAIQAAAHAHAHQAIAGAHAAQAIAAAGgIQAHgIgBgIQAAgIgHgGQgIgHgHAAQgIABgHAIg');
    this.shape.setTransform(46.6,50);

    this.shape1 = new cjs.Shape();
    this.shape1.graphics.f('#fab800').s().p('AArEyQgVgQgIgaQgfAVgagBQgsgCgmgeQgjgdgSgsQgvgBgggnQggglgBgxQgBgkASgTQgYgEgNgSQgMgRABgZQADgrAYgjQAZgjAmgQQAHguAiglQAjgmArgEQAWgCAQALQASAMAFAVQALgOARgJQAQgIARgBQAuAAAoAgQAmAfAOAuQA0AHAkAbQAqAgAFAxQADAggCAOQgDAXgQAOQAYAGAQAQQASATgBAYQAAAxggAmQggAmguAKQgEAvgjAmQglAngtAAIgCAAQgZAAgVgPg');
    this.shape1.setTransform(47.4,50.5);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower3head, new cjs.Rectangle(-3,-1,105,103), null);


(lib.flower2head = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.instance = new lib.flower2();
    this.instance.parent = this;
    this.instance.setTransform(-1,0,0.5,0.5);

    this.shape = new cjs.Shape();
    this.shape.graphics.f('#feff00').s().p('AhHCvQgVgOgCgXQgKALgQABQgOACgNgIQgagQgJghQgKgiAOgbQgWgUgFgfQgGggAOgaQAJgOAPgFQAPgFAPAGQgGgSAKgSQAPgaAkgJQAigIAbANQATgUAfgFQAggGAXAPQAWAOACAXQALgKAOgBQAOgCAMAIQAaAQAJAmQAIAkgOAcQATAVAFAgQAGAigOAYQgKAQgOAFQgOAFgRgIQAEASgKAQQgPAbghAHQghAGgagPQgTAUgdADIgKABQgYAAgTgMgAgYBHQgJABgEAGQgDAGABAKQABAKAFADQAGAEAJgBQAJgCADgGQAEgFgBgKQgCgKgFgDQgEgDgGAAIgEAAgAA2A6QgJABgDAGQgDAGABAKQACAKAFADQAGAEAIgBQAKAAADgGQADgGgBgKQgCgKgFgEQgFgDgIAAIgCAAgAhcAlQgKACgEAGQgDAGACAJQABAKAGADQAFAEAJgCQAKgBADgGQAEgGgCgJQgBgKgGgEQgDgCgGAAIgFAAgABsAEQgKAAgDAGQgEAGACAKQACAKAFAEQAGAEAJgBQAJAAADgHQAEgFgCgKQgCgLgFgDQgFgDgHAAIgCAAgAhvgsQgJACgEAFQgDAGACAKQADAJAFAEQAGADAJgBQAKgBADgGQAEgGgDgKQgCgJgGgEQgEgCgGAAIgFAAgABehLQgJABgEAGQgDAGABAKQABAKAGADQAGAEAJgBQAJgBAEgGQADgFgBgKQgCgLgFgDQgEgDgHAAIgEAAgAg+hrQgKACgDAGQgEAGADAJQACAJAGAEQAFAEAKgCQAJgBAEgGQADgGgCgJQgCgKgGgEQgDgCgGAAIgGAAgAAWh6QgKABgEAGQgDAGABAKQACAKAFADQAGAEAJgCQAKgBADgGQADgGgBgJQgBgLgFgDQgEgDgGAAIgFABg');
    this.shape.setTransform(56.9,51.4);

    this.shape1 = new cjs.Shape();
    this.shape1.graphics.f('#fab800').s().p('AhtD8QgWgOgPghQgSASgYACQgYACgWgNQgigWgLgzQgLgyAUglQghgcgIguQgHguAWgmQALgUAWgGQAUgFAWAIQgGgTAHgUQAFgMARgYQAaglAxgFQArgEApAUQAfggAwgHQAzgIAkAWQAPAKAJAOQAKAQABASQAQgRAWgBQAVgCATAMQAjAWAMA1QALA0gTAnQAcAfAFArQAGAsgVAkQgOAYgUAGQgVAHgYgLQAGAZgRAfQgYApgxAMQgwAMgngaQghAbgrAFIgNAAQglAAgegSg');
    this.shape1.setTransform(57.2,51.1);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower2head, new cjs.Rectangle(-1,0,114,105), null);


(lib.flower1head = function(mode,startPosition,loop) {
    if (loop === null) {
        loop = false;
    }
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.instance = new lib.flower1();
    this.instance.parent = this;
    this.instance.setTransform(-87,-70,0.5,0.5);

    this.shape = new cjs.Shape();
    this.shape.graphics.f('#feff00').s().p('AgeE0QghAAgagRQgcgSgLgeQgZAagdABQgzgHgggvQgdgpgDg5QgBgRAGgWQgagWgPggQgPgegBgkQADgsAbgcQAdgdApAHQgFgOABgJQAGgyAtgcQAlgYA1gDQAUAAARAGQAsgyBIAAQBIAEAWA1QAVgZAfABQA3AJAfAyQAeAwgKA6QA1ArAEBHQgCAsgXAdQgbAhgogGQAEAOAAAKQgHA/g3AjQgzAgg9gNQgWAdgeAQQggARggAAIgCAAgAgoB0QgJALgBAPQABANAJALQALAKANAAQANAAAKgLQAKgLAAgOQgBgOgJgKQgJgLgNAAQgOAAgLALgAipBMQgKAKABANQAAAPALALQAKAKAPAAQAMAAAKgKQAKgLgBgNQAAgPgLgKQgKgLgOAAQgNAAgKALgABdBHQgKAKAAAPQAAANAKAKQAKAKANAAQAOAAAJgLQALgLgBgOQAAgNgKgKQgJgKgNAAQgOAAgKALgACpgiQgJAJgBAPQABAMAJAJQAJAJANABQAOAAAJgKQAKgKAAgOQgBgNgJgJQgKgJgNgBQgNABgJAKgAjQgwQgLAKAAANQAAAOALAKQALAKANAAQANAAALgKQAKgKAAgOQAAgNgLgKQgLgJgNAAQgMAAgLAJgAB9igQgJAJgBAOQACANAJAIQAJAJANABQANgBAJgJQAJgJABgOQgBgNgKgIQgJgJgNgBQgNABgJAJgAiEinQgKAJAAANQAAANAKAKQAKAJANAAQANAAAKgJQAKgKAAgNQAAgNgKgKQgKgJgNAAQgNAAgKAKgAAAjPQgKAJABANQAAANAKAJQAKAJAMAAQANAAAKgJQAJgJAAgOQAAgNgKgJQgKgIgNAAIgBAAQgMAAgJAJg');
    this.shape.setTransform(0.5,2.4);

    this.shape1 = new cjs.Shape();
    this.shape1.graphics.f('#feb800').s().p('AglG6Qg5gBgtgaQgzgcgRg0QglAkgnABQhHgJgtg/Qgpg4gHhNQABgbAIgfQgjgegVgrQgSgqgCgwQAEg2AegmQAfgnAzgGQAMgBATAFQgGgSABgQQAKhKBCgqQA4gjBQgFQAdAAAeAIQBBhHBrgBQAcABAUAGQAjALAVARQAYASANAdQAighAnACQA9ALApA1QAlAxAJBEQACAWgGAbQAnAgAWAsQAVAsADAyQAAA1gYAnQgdArgxAFQgNAAgQgFQgKBZg8A7Qg8A7hWAHQgWAAgZgFQgfApgmAWQgqAZgtAAIgBAAg');
    this.shape1.setTransform(-1,3.8);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower1head, new cjs.Rectangle(-87,-70,171.5,156), null);


(lib.flower3_1 = function(mode,startPosition,loop) {
    if (loop === null) {
        loop = false;
    }
    this.initialize(mode,startPosition,loop,{'flower3-loop':20});

    // timeline functions:
    this.frame_140 = function() {
        this.gotoAndPlay('flower3-loop');
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(140).call(this.frame_140).wait(1));

    // head
    this.instance = new lib.flower3head();
    this.instance.parent = this;
    this.instance.setTransform(-25.9,-271.1,0.999,0.999,-8.8,0,0,50.4,50.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:50.5,regY:50.6,scaleX:1,scaleY:1,rotation:0,x:5.3,y:-272.8},20,cjs.Ease.get(-0.5)).to({rotation:10,x:40.3,y:-270.8},30,cjs.Ease.get(1)).to({rotation:0,x:5.3,y:-272.8},30,cjs.Ease.get(-1)).to({regX:50.4,rotation:-10,x:-29.7,y:-270.8},30,cjs.Ease.get(1)).to({regX:50.5,rotation:0,x:5.3,y:-272.8},30,cjs.Ease.get(-1)).wait(1));

    // leaf1
    this.instance1 = new lib.leaf2();
    this.instance1.parent = this;
    this.instance1.setTransform(-7.9,-192.8,0.999,0.999,-28.8,0,0,8,1.9);

    this.timeline.addTween(cjs.Tween.get(this.instance1).to({regX:8.1,scaleX:1,scaleY:1,rotation:-20,x:9.5,y:-194.6},20,cjs.Ease.get(-0.5)).to({regX:8,rotation:-10,x:29.3,y:-192.7},30,cjs.Ease.get(1)).to({regX:8.1,rotation:-20,x:9.5,y:-194.6},30,cjs.Ease.get(-1)).to({rotation:-30,x:-10,y:-192.6},30,cjs.Ease.get(1)).to({rotation:-20,x:9.5,y:-194.6},30,cjs.Ease.get(-1)).wait(1));

    // leaf2
    this.instance2 = new lib.leaf1();
    this.instance2.parent = this;
    this.instance2.setTransform(-16,-115.2,0.849,0.849,-27.1,0,0,-9.5,-2.2);

    this.timeline.addTween(cjs.Tween.get(this.instance2).to({regX:-9.4,regY:-2.1,scaleX:0.85,scaleY:0.85,rotation:-20,x:-9.5,y:-116},20,cjs.Ease.get(-0.5)).to({regX:-9.3,regY:-2,rotation:-12,x:-2.6,y:-115},30,cjs.Ease.get(1)).to({regX:-9.4,regY:-2.1,rotation:-20,x:-9.5,y:-116},30,cjs.Ease.get(-1)).to({regX:-9.5,rotation:-28,x:-16.8,y:-115},30,cjs.Ease.get(1)).to({regX:-9.4,rotation:-20,x:-9.5,y:-116},30,cjs.Ease.get(-1)).wait(1));

    // stem
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#333').s().p('AB1SgQAAytkHyMIAcgGQEKSPAASwg');
    this.shape.setTransform(-13.3,-118.4);

    this.shape1 = new cjs.Shape();
    this.shape1.graphics.f('#333').s().p('AByShQAAyukByMIAdgGQECSQAASwg');
    this.shape1.setTransform(-13,-118.4);

    this.shape2 = new cjs.Shape();
    this.shape2.graphics.f('#333').s().p('ABuShQAAytj5yOIAdgFQD6SQAASwg');
    this.shape2.setTransform(-12.6,-118.4);

    this.shape3 = new cjs.Shape();
    this.shape3.graphics.f('#333').s().p('ABqShQAAytjxyOIAdgGQDySSAASvg');
    this.shape3.setTransform(-12.2,-118.5);

    this.shape4 = new cjs.Shape();
    this.shape4.graphics.f('#333').s().p('ABlShQABytjpyOIAegGQDpSSAASvg');
    this.shape4.setTransform(-11.7,-118.5);

    this.shape5 = new cjs.Shape();
    this.shape5.graphics.f('#333').s().p('ABhShQAAysjfyPIAdgGQDgSTAASug');
    this.shape5.setTransform(-11.3,-118.5);

    this.shape6 = new cjs.Shape();
    this.shape6.graphics.f('#333').s().p('ABcShQAAyrjVyRIAegFQDVSUAAStg');
    this.shape6.setTransform(-10.8,-118.5);

    this.shape7 = new cjs.Shape();
    this.shape7.graphics.f('#333').s().p('ABWSiQAAysjJySIAdgEQDKSUAASug');
    this.shape7.setTransform(-10.2,-118.5);

    this.shape8 = new cjs.Shape();
    this.shape8.graphics.f('#333').s().p('ABQSiQAAyri+yTIAegFQC/SWAAStg');
    this.shape8.setTransform(-9.6,-118.6);

    this.shape9 = new cjs.Shape();
    this.shape9.graphics.f('#333').s().p('ABKSiQAAyrixyUIAdgEQCySXAASsg');
    this.shape9.setTransform(-9,-118.6);

    this.shape10 = new cjs.Shape();
    this.shape10.graphics.f('#333').s().p('ABESiQAAyqilyVIAegEQClSYAASrg');
    this.shape10.setTransform(-8.4,-118.6);

    this.shape11 = new cjs.Shape();
    this.shape11.graphics.f('#333').s().p('AA9SjQAAyqiXyWIAdgFQCYSaAASrg');
    this.shape11.setTransform(-7.7,-118.6);

    this.shape12 = new cjs.Shape();
    this.shape12.graphics.f('#333').s().p('AA2SjQAAypiJyYIAegEQCJSbAASqg');
    this.shape12.setTransform(-7,-118.7);

    this.shape13 = new cjs.Shape();
    this.shape13.graphics.f('#333').s().p('AAuSjQAByoh6yaIAdgDQB6ScABSpg');
    this.shape13.setTransform(-6.2,-118.7);

    this.shape14 = new cjs.Shape();
    this.shape14.graphics.f('#333').s().p('AAnSjQAAyohrybIAegCQBrScAASpg');
    this.shape14.setTransform(-5.5,-118.7);

    this.shape15 = new cjs.Shape();
    this.shape15.graphics.f('#333').s().p('AAeSkQAByohbydIAegCQBbSfAASog');
    this.shape15.setTransform(-4.6,-118.7);

    this.shape16 = new cjs.Shape();
    this.shape16.graphics.f('#333').s().p('AAWSkQAAynhJyeIAegCQBJSfAASog');
    this.shape16.setTransform(-3.8,-118.8);

    this.shape17 = new cjs.Shape();
    this.shape17.graphics.f('#333').s().p('AANSkQAAymg3ygIAdgBQA4ShAASmg');
    this.shape17.setTransform(-2.9,-118.8);

    this.shape18 = new cjs.Shape();
    this.shape18.graphics.f('#333').s().p('AAESlQAAymglyiIAeAAQAlSiAASmg');
    this.shape18.setTransform(-2,-118.8);

    this.shape19 = new cjs.Shape();
    this.shape19.graphics.f('#333').s().p('AgESlQAAylgUykIAdAAQAUSkAASlg');
    this.shape19.setTransform(-1.1,-118.9);

    this.shape20 = new cjs.Shape();
    this.shape20.graphics.f('#333').s().p('AgOSlMAAAglJIAdAAMAAAAlJg');
    this.shape20.setTransform(-0.1,-118.9);

    this.shape21 = new cjs.Shape();
    this.shape21.graphics.f('#333').s().p('AgYSlQAAylAUykIAdAAQgUSkAASlIgdAAg');
    this.shape21.setTransform(0.9,-118.9);

    this.shape22 = new cjs.Shape();
    this.shape22.graphics.f('#333').s().p('AghSlQAAymAlyiIAeAAQglSiAASmIgeAAg');
    this.shape22.setTransform(1.8,-118.8);

    this.shape23 = new cjs.Shape();
    this.shape23.graphics.f('#333').s().p('AgqSkQAAymA4yhIAdABQg3SgAASmIgeAAg');
    this.shape23.setTransform(2.7,-118.8);

    this.shape24 = new cjs.Shape();
    this.shape24.graphics.f('#333').s().p('AgzSkQAAynBJygIAeACQhJSfAASmIgeAAg');
    this.shape24.setTransform(3.6,-118.8);

    this.shape25 = new cjs.Shape();
    this.shape25.graphics.f('#333').s().p('Ag8SkQAAyoBbyfIAeACQhaSeAASnIgfAAg');
    this.shape25.setTransform(4.5,-118.7);

    this.shape26 = new cjs.Shape();
    this.shape26.graphics.f('#333').s().p('AhESjQAAypBrycIAeACQhrSbAASoIgeAAg');
    this.shape26.setTransform(5.3,-118.7);

    this.shape27 = new cjs.Shape();
    this.shape27.graphics.f('#333').s().p('AhMSjQAAypB7ycIAdADQh5SaAASoIgfAAg');
    this.shape27.setTransform(6.1,-118.7);

    this.shape28 = new cjs.Shape();
    this.shape28.graphics.f('#333').s().p('AhTSjQAAyqCJybIAeAEQiJSYAASpIgeAAg');
    this.shape28.setTransform(6.8,-118.7);

    this.shape29 = new cjs.Shape();
    this.shape29.graphics.f('#333').s().p('AhaSjQAAyrCYyaIAdAFQiXSWAASqIgeAAg');
    this.shape29.setTransform(7.5,-118.6);

    this.shape30 = new cjs.Shape();
    this.shape30.graphics.f('#333').s().p('AhhSiQAAyrClyYIAeAEQilSVAASqIgeAAg');
    this.shape30.setTransform(8.2,-118.6);

    this.shape31 = new cjs.Shape();
    this.shape31.graphics.f('#333').s().p('AhnSiQAAysCyyXIAdAEQixSUAASrIgeAAg');
    this.shape31.setTransform(8.8,-118.6);

    this.shape32 = new cjs.Shape();
    this.shape32.graphics.f('#333').s().p('AhtSiQAAytC+yWIAdAFQi9STAASrIgeAAg');
    this.shape32.setTransform(9.4,-118.6);

    this.shape33 = new cjs.Shape();
    this.shape33.graphics.f('#333').s().p('AhzSiQAAyuDKyUIAdAEQjJSSAASsIgeAAg');
    this.shape33.setTransform(10,-118.5);

    this.shape34 = new cjs.Shape();
    this.shape34.graphics.f('#333').s().p('Ah5ShQAAytDVyUIAdAFQjUSRABSrIgfAAg');
    this.shape34.setTransform(10.6,-118.5);

    this.shape35 = new cjs.Shape();
    this.shape35.graphics.f('#333').s().p('Ah+ShQAAyuDgyTIAdAGQjfSPAASsIgeAAg');
    this.shape35.setTransform(11.1,-118.5);

    this.shape36 = new cjs.Shape();
    this.shape36.graphics.f('#333').s().p('AiDShQAByvDoySIAdAGQjnSPAASsIgfAAg');
    this.shape36.setTransform(11.6,-118.5);

    this.shape37 = new cjs.Shape();
    this.shape37.graphics.f('#333').s().p('AiHShQAAyvDyySIAdAGQjxSOAAStIgeAAg');
    this.shape37.setTransform(12,-118.5);

    this.shape38 = new cjs.Shape();
    this.shape38.graphics.f('#333').s().p('AiLShQAAywD6yRIAdAHQj5SNAAStIgeAAg');
    this.shape38.setTransform(12.4,-118.5);

    this.shape39 = new cjs.Shape();
    this.shape39.graphics.f('#333').s().p('AiPShQAAywECyQIAdAGQkBSMAASuIgeAAg');
    this.shape39.setTransform(12.8,-118.4);

    this.shape40 = new cjs.Shape();
    this.shape40.graphics.f('#333').s().p('AiTSgQAAywEKyPIAcAGQkISMABStIgfAAg');
    this.shape40.setTransform(13.2,-118.4);

    this.shape41 = new cjs.Shape();
    this.shape41.graphics.f('#333').s().p('AiWSgQAAywEPyPIAeAHQkOSLAAStIgfAAg');
    this.shape41.setTransform(13.5,-118.4);

    this.shape42 = new cjs.Shape();
    this.shape42.graphics.f('#333').s().p('AiZSgQAAywEVyPIAdAHQkTSKAASuIgfAAg');
    this.shape42.setTransform(13.8,-118.4);

    this.shape43 = new cjs.Shape();
    this.shape43.graphics.f('#333').s().p('AibSgQAAyxEZyOIAeAHQkZSKAASuIgeAAg');
    this.shape43.setTransform(14,-118.4);

    this.shape44 = new cjs.Shape();
    this.shape44.graphics.f('#333').s().p('AidSgQAAyxEeyOIAdAHQkdSKAASuIgeAAg');
    this.shape44.setTransform(14.2,-118.4);

    this.shape45 = new cjs.Shape();
    this.shape45.graphics.f('#333').s().p('AifSgQAAyxEiyOIAdAHQkhSKAASuIgeAAg');
    this.shape45.setTransform(14.4,-118.4);

    this.shape46 = new cjs.Shape();
    this.shape46.graphics.f('#333').s().p('AigSgQAAyyEkyNIAdAHQkjSJAASvIgeAAg');
    this.shape46.setTransform(14.5,-118.4);

    this.shape47 = new cjs.Shape();
    this.shape47.graphics.f('#333').s().p('AiiSgQAAyyEnyNIAdAIQkmSIABSvIgfAAg');
    this.shape47.setTransform(14.7,-118.4);

    this.shape48 = new cjs.Shape();
    this.shape48.graphics.f('#333').s().p('AiiSgQAAyyEoyNIAdAIQknSIAASvIgeAAg');
    this.shape48.setTransform(14.7,-118.4);

    this.shape49 = new cjs.Shape();
    this.shape49.graphics.f('#333').s().p('AijSgQAAyyEqyNIAdAIQkpSIAASvIgeAAg');
    this.shape49.setTransform(14.8,-118.4);

    this.shape50 = new cjs.Shape();
    this.shape50.graphics.f('#333').s().p('AijSgQAAyyEqyNIAdAIQkpSIAASvg');
    this.shape50.setTransform(14.8,-118.4);

    this.shape51 = new cjs.Shape();
    this.shape51.graphics.f('#333').s().p('AAWSkQAAymhJyfIAegCQBJSgAASng');
    this.shape51.setTransform(-3.8,-118.8);

    this.shape52 = new cjs.Shape();
    this.shape52.graphics.f('#333').s().p('AAeSkQABynhbyeIAegCQBbSfAASog');
    this.shape52.setTransform(-4.6,-118.7);

    this.shape53 = new cjs.Shape();
    this.shape53.graphics.f('#333').s().p('ABQSiQAAyri9yTIAdgFQC+SWAAStg');
    this.shape53.setTransform(-9.6,-118.6);

    this.shape54 = new cjs.Shape();
    this.shape54.graphics.f('#333').s().p('ABbShQAAyrjTyRIAdgFQDVSUAAStg');
    this.shape54.setTransform(-10.7,-118.5);

    this.shape55 = new cjs.Shape();
    this.shape55.graphics.f('#333').s().p('ABhShQAAysjfyPIAegGQDfSTAASug');
    this.shape55.setTransform(-11.3,-118.5);

    this.shape56 = new cjs.Shape();
    this.shape56.graphics.f('#333').s().p('ABlShQABysjpyPIAegGQDpSSAASvg');
    this.shape56.setTransform(-11.7,-118.5);

    this.shape57 = new cjs.Shape();
    this.shape57.graphics.f('#333').s().p('ABuShQAAytj5yNIAdgHQD6SRAASwg');
    this.shape57.setTransform(-12.6,-118.5);

    this.shape58 = new cjs.Shape();
    this.shape58.graphics.f('#333').s().p('AB4SgQAAytkOyLIAdgHQEPSPABSwg');
    this.shape58.setTransform(-13.6,-118.4);

    this.shape59 = new cjs.Shape();
    this.shape59.graphics.f('#333').s().p('AB7SgQAByukVyKIAegHQEVSPAASwg');
    this.shape59.setTransform(-13.9,-118.4);

    this.shape60 = new cjs.Shape();
    this.shape60.graphics.f('#333').s().p('AB+SgQAAyukZyKIAegHQEZSOAASxg');
    this.shape60.setTransform(-14.2,-118.4);

    this.shape61 = new cjs.Shape();
    this.shape61.graphics.f('#333').s().p('ACASgQAAyukdyKIAdgHQEeSOAASxg');
    this.shape61.setTransform(-14.4,-118.4);

    this.shape62 = new cjs.Shape();
    this.shape62.graphics.f('#333').s().p('ACCSgQAAyukhyKIAdgHQEiSOAASxg');
    this.shape62.setTransform(-14.6,-118.4);

    this.shape63 = new cjs.Shape();
    this.shape63.graphics.f('#333').s().p('ACDSgQAAyvkjyJIAdgHQEkSNAASyg');
    this.shape63.setTransform(-14.7,-118.4);

    this.shape64 = new cjs.Shape();
    this.shape64.graphics.f('#333').s().p('ACESgQAAyvkmyIIAegIQEnSNAASyg');
    this.shape64.setTransform(-14.8,-118.4);

    this.shape65 = new cjs.Shape();
    this.shape65.graphics.f('#333').s().p('ACFSgQAAyvknyIIAdgIQEoSNAASyg');
    this.shape65.setTransform(-14.9,-118.4);

    this.shape66 = new cjs.Shape();
    this.shape66.graphics.f('#333').s().p('ACGSgQAAyvkpyIIAdgIQEqSNAASyg');
    this.shape66.setTransform(-15,-118.4);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape1}]},1).to({state:[{t:this.shape2}]},1).to({state:[{t:this.shape3}]},1).to({state:[{t:this.shape4}]},1).to({state:[{t:this.shape5}]},1).to({state:[{t:this.shape6}]},1).to({state:[{t:this.shape7}]},1).to({state:[{t:this.shape8}]},1).to({state:[{t:this.shape9}]},1).to({state:[{t:this.shape10}]},1).to({state:[{t:this.shape11}]},1).to({state:[{t:this.shape12}]},1).to({state:[{t:this.shape13}]},1).to({state:[{t:this.shape14}]},1).to({state:[{t:this.shape15}]},1).to({state:[{t:this.shape16}]},1).to({state:[{t:this.shape17}]},1).to({state:[{t:this.shape18}]},1).to({state:[{t:this.shape19}]},1).to({state:[{t:this.shape20}]},1).to({state:[{t:this.shape21}]},1).to({state:[{t:this.shape22}]},1).to({state:[{t:this.shape23}]},1).to({state:[{t:this.shape24}]},1).to({state:[{t:this.shape25}]},1).to({state:[{t:this.shape26}]},1).to({state:[{t:this.shape27}]},1).to({state:[{t:this.shape28}]},1).to({state:[{t:this.shape29}]},1).to({state:[{t:this.shape30}]},1).to({state:[{t:this.shape31}]},1).to({state:[{t:this.shape32}]},1).to({state:[{t:this.shape33}]},1).to({state:[{t:this.shape34}]},1).to({state:[{t:this.shape35}]},1).to({state:[{t:this.shape36}]},1).to({state:[{t:this.shape37}]},1).to({state:[{t:this.shape38}]},1).to({state:[{t:this.shape39}]},1).to({state:[{t:this.shape40}]},1).to({state:[{t:this.shape41}]},1).to({state:[{t:this.shape42}]},1).to({state:[{t:this.shape43}]},1).to({state:[{t:this.shape44}]},1).to({state:[{t:this.shape45}]},1).to({state:[{t:this.shape46}]},1).to({state:[{t:this.shape47}]},1).to({state:[{t:this.shape48}]},1).to({state:[{t:this.shape49}]},1).to({state:[{t:this.shape50}]},1).to({state:[{t:this.shape49}]},1).to({state:[{t:this.shape48}]},1).to({state:[{t:this.shape47}]},1).to({state:[{t:this.shape46}]},1).to({state:[{t:this.shape45}]},1).to({state:[{t:this.shape44}]},1).to({state:[{t:this.shape43}]},1).to({state:[{t:this.shape42}]},1).to({state:[{t:this.shape41}]},1).to({state:[{t:this.shape40}]},1).to({state:[{t:this.shape39}]},1).to({state:[{t:this.shape38}]},1).to({state:[{t:this.shape37}]},1).to({state:[{t:this.shape36}]},1).to({state:[{t:this.shape35}]},1).to({state:[{t:this.shape34}]},1).to({state:[{t:this.shape33}]},1).to({state:[{t:this.shape32}]},1).to({state:[{t:this.shape31}]},1).to({state:[{t:this.shape30}]},1).to({state:[{t:this.shape29}]},1).to({state:[{t:this.shape28}]},1).to({state:[{t:this.shape27}]},1).to({state:[{t:this.shape26}]},1).to({state:[{t:this.shape25}]},1).to({state:[{t:this.shape24}]},1).to({state:[{t:this.shape23}]},1).to({state:[{t:this.shape22}]},1).to({state:[{t:this.shape21}]},1).to({state:[{t:this.shape20}]},1).to({state:[{t:this.shape19}]},1).to({state:[{t:this.shape18}]},1).to({state:[{t:this.shape17}]},1).to({state:[{t:this.shape51}]},1).to({state:[{t:this.shape52}]},1).to({state:[{t:this.shape14}]},1).to({state:[{t:this.shape13}]},1).to({state:[{t:this.shape12}]},1).to({state:[{t:this.shape11}]},1).to({state:[{t:this.shape10}]},1).to({state:[{t:this.shape9}]},1).to({state:[{t:this.shape53}]},1).to({state:[{t:this.shape7}]},1).to({state:[{t:this.shape54}]},1).to({state:[{t:this.shape55}]},1).to({state:[{t:this.shape56}]},1).to({state:[{t:this.shape3}]},1).to({state:[{t:this.shape57}]},1).to({state:[{t:this.shape1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape58}]},1).to({state:[{t:this.shape59}]},1).to({state:[{t:this.shape60}]},1).to({state:[{t:this.shape61}]},1).to({state:[{t:this.shape62}]},1).to({state:[{t:this.shape63}]},1).to({state:[{t:this.shape64}]},1).to({state:[{t:this.shape65}]},1).to({state:[{t:this.shape66}]},1).to({state:[{t:this.shape66}]},1).to({state:[{t:this.shape66}]},1).to({state:[{t:this.shape65}]},1).to({state:[{t:this.shape64}]},1).to({state:[{t:this.shape63}]},1).to({state:[{t:this.shape62}]},1).to({state:[{t:this.shape61}]},1).to({state:[{t:this.shape60}]},1).to({state:[{t:this.shape59}]},1).to({state:[{t:this.shape58}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape1}]},1).to({state:[{t:this.shape57}]},1).to({state:[{t:this.shape3}]},1).to({state:[{t:this.shape56}]},1).to({state:[{t:this.shape55}]},1).to({state:[{t:this.shape54}]},1).to({state:[{t:this.shape7}]},1).to({state:[{t:this.shape53}]},1).to({state:[{t:this.shape9}]},1).to({state:[{t:this.shape10}]},1).to({state:[{t:this.shape11}]},1).to({state:[{t:this.shape12}]},1).to({state:[{t:this.shape13}]},1).to({state:[{t:this.shape14}]},1).to({state:[{t:this.shape52}]},1).to({state:[{t:this.shape51}]},1).to({state:[{t:this.shape17}]},1).to({state:[{t:this.shape18}]},1).to({state:[{t:this.shape19}]},1).to({state:[{t:this.shape20}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-329.9,119.5,329.9);


(lib.flower2_1 = function(mode,startPosition,loop) {
    if (loop === null) {
        loop = false;
    }
    this.initialize(mode,startPosition,loop,{'flower2-loop':10});

    // timeline functions:
    this.frame_130 = function() {
        this.gotoAndPlay('flower2-loop');
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(130).call(this.frame_130).wait(1));

    // head
    this.instance = new lib.flower2head();
    this.instance.parent = this;
    this.instance.setTransform(-6.8,-173.7,1,1,-5.5,0,0,56.8,52.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:2.1,y:-174.7},10,cjs.Ease.get(-0.33)).to({rotation:10,x:18.2,y:-172.7},30,cjs.Ease.get(1)).to({rotation:0,x:2.1,y:-174.7},30,cjs.Ease.get(-1)).to({rotation:-10,x:-13.9,y:-172.8},30,cjs.Ease.get(1)).to({rotation:0,x:2.1,y:-174.7},30,cjs.Ease.get(-1)).wait(1));

    // leaf
    this.instance1 = new lib.leaf2();
    this.instance1.parent = this;
    this.instance1.setTransform(8.3,-70.4,1,1,-5.5,0,0,8,8.2);

    this.timeline.addTween(cjs.Tween.get(this.instance1).to({regY:8.3,rotation:0,x:9.3,y:-71},10,cjs.Ease.get(-0.33)).to({regY:8.2,rotation:10,x:10.9,y:-70},30,cjs.Ease.get(1)).to({regY:8.3,rotation:0,x:9.3,y:-71},30,cjs.Ease.get(-1)).to({regX:8.1,regY:8.2,rotation:-10,x:7.7,y:-70},30,cjs.Ease.get(1)).to({regX:8,regY:8.3,rotation:0,x:9.3,y:-71},30,cjs.Ease.get(-1)).wait(1));

    // stem
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#333').s().p('AAPLLQABrOg8rEIAegDQA8LIgBLNg');
    this.shape.setTransform(-2.9,-71.5);

    this.shape1 = new cjs.Shape();
    this.shape1.graphics.f('#333').s().p('AANLLQABrOg4rEIAegDQA4LJgBLMg');
    this.shape1.setTransform(-2.7,-71.4);

    this.shape2 = new cjs.Shape();
    this.shape2.graphics.f('#333').s().p('AAKLKQABrNgzrEIAegCQAzLIgBLLg');
    this.shape2.setTransform(-2.5,-71.4);

    this.shape3 = new cjs.Shape();
    this.shape3.graphics.f('#333').s().p('AAILKQABrNgurEIAegCQAuLIgBLLg');
    this.shape3.setTransform(-2.2,-71.4);

    this.shape4 = new cjs.Shape();
    this.shape4.graphics.f('#333').s().p('AAFLKQABrMgprFIAfgCQAoLIgBLLg');
    this.shape4.setTransform(-2,-71.4);

    this.shape5 = new cjs.Shape();
    this.shape5.graphics.f('#333').s().p('AACLKQABrMgjrEIAegDQAjLIgBLLg');
    this.shape5.setTransform(-1.7,-71.3);

    this.shape6 = new cjs.Shape();
    this.shape6.graphics.f('#333').s().p('AAALJQAArKgdrGIAdgBQAeLIgBLJg');
    this.shape6.setTransform(-1.4,-71.3);

    this.shape7 = new cjs.Shape();
    this.shape7.graphics.f('#333').s().p('AgDLJQAArKgWrGIAdgBQAWLIAALJg');
    this.shape7.setTransform(-1,-71.3);

    this.shape8 = new cjs.Shape();
    this.shape8.graphics.f('#333').s().p('AgHLJQABrJgQrHIAdAAQAQLHgBLJg');
    this.shape8.setTransform(-0.7,-71.2);

    this.shape9 = new cjs.Shape();
    this.shape9.graphics.f('#333').s().p('AgKLIQAArIgIrHIAdAAQAILHAALIg');
    this.shape9.setTransform(-0.3,-71.2);

    this.shape10 = new cjs.Shape();
    this.shape10.graphics.f('#333').s().p('AgOLIIAA2PIAdAAIAAWPg');
    this.shape10.setTransform(0.1,-71.2);

    this.shape11 = new cjs.Shape();
    this.shape11.graphics.f('#333').s().p('AgRLIQgBrIAIrHIAdAAQgILHAALIIgcAAg');
    this.shape11.setTransform(0.4,-71.2);

    this.shape12 = new cjs.Shape();
    this.shape12.graphics.f('#333').s().p('AgVLJQAArJAOrHIAdABQgOLGAALJIgdAAg');
    this.shape12.setTransform(0.7,-71.2);

    this.shape13 = new cjs.Shape();
    this.shape13.graphics.f('#333').s().p('AgYLJQgBrJAVrIIAdABQgVLHABLJIgdAAg');
    this.shape13.setTransform(1.1,-71.3);

    this.shape14 = new cjs.Shape();
    this.shape14.graphics.f('#333').s().p('AgbLJQgBrJAcrIIAdABQgcLGABLKIgdAAg');
    this.shape14.setTransform(1.4,-71.3);

    this.shape15 = new cjs.Shape();
    this.shape15.graphics.f('#333').s().p('AgeLJQgBrJAhrIIAeABQghLGABLKIgeAAg');
    this.shape15.setTransform(1.7,-71.3);

    this.shape16 = new cjs.Shape();
    this.shape16.graphics.f('#333').s().p('AghLKQgBrLAnrIIAeACQgnLFABLMIgeAAg');
    this.shape16.setTransform(2,-71.4);

    this.shape17 = new cjs.Shape();
    this.shape17.graphics.f('#333').s().p('AgkLKQgBrLAsrIIAeACQgsLFABLMIgeAAg');
    this.shape17.setTransform(2.3,-71.4);

    this.shape18 = new cjs.Shape();
    this.shape18.graphics.f('#333').s().p('AgnLKQgBrLAyrIIAeACQgyLFABLMIgeAAg');
    this.shape18.setTransform(2.5,-71.4);

    this.shape19 = new cjs.Shape();
    this.shape19.graphics.f('#333').s().p('AgpLLQgBrMA3rJIAeADQg3LEABLOIgeAAg');
    this.shape19.setTransform(2.8,-71.4);

    this.shape20 = new cjs.Shape();
    this.shape20.graphics.f('#333').s().p('AgsLLQgBrNA8rIIAeADQg8LEABLOIgeAAg');
    this.shape20.setTransform(3,-71.5);

    this.shape21 = new cjs.Shape();
    this.shape21.graphics.f('#333').s().p('AguLLQgBrNBArIIAeADQhALEABLOIgeAAg');
    this.shape21.setTransform(3.3,-71.5);

    this.shape22 = new cjs.Shape();
    this.shape22.graphics.f('#333').s().p('AgwLLQgCrNBGrIIAeADQhGLDACLPIgeAAg');
    this.shape22.setTransform(3.5,-71.5);

    this.shape23 = new cjs.Shape();
    this.shape23.graphics.f('#333').s().p('AgzLLQgBrNBKrIIAeADQhKLDABLPIgeAAg');
    this.shape23.setTransform(3.7,-71.5);

    this.shape24 = new cjs.Shape();
    this.shape24.graphics.f('#333').s().p('Ag1LMQgBrOBOrJIAeAEQhOLDABLQIgeAAg');
    this.shape24.setTransform(3.9,-71.5);

    this.shape25 = new cjs.Shape();
    this.shape25.graphics.f('#333').s().p('Ag2LMQgCrPBSrIIAeAEQhSLCACLRIgeAAg');
    this.shape25.setTransform(4.1,-71.6);

    this.shape26 = new cjs.Shape();
    this.shape26.graphics.f('#333').s().p('Ag4LMQgCrPBVrIIAeAEQhVLCACLRIgeAAg');
    this.shape26.setTransform(4.3,-71.6);

    this.shape27 = new cjs.Shape();
    this.shape27.graphics.f('#333').s().p('Ag6LMQgBrPBYrIIAeAEQhYLCABLRIgeAAg');
    this.shape27.setTransform(4.4,-71.6);

    this.shape28 = new cjs.Shape();
    this.shape28.graphics.f('#333').s().p('Ag7LMQgCrPBbrIIAeAEQhbLBACLSIgeAAg');
    this.shape28.setTransform(4.6,-71.6);

    this.shape29 = new cjs.Shape();
    this.shape29.graphics.f('#333').s().p('Ag9LMQgBrPBerIIAeAEQheLBABLSIgeAAg');
    this.shape29.setTransform(4.7,-71.6);

    this.shape30 = new cjs.Shape();
    this.shape30.graphics.f('#333').s().p('Ag+LNQgCrQBhrIIAeAEQhhLBACLTIgeAAg');
    this.shape30.setTransform(4.8,-71.6);

    this.shape31 = new cjs.Shape();
    this.shape31.graphics.f('#333').s().p('Ag/LNQgCrQBjrIIAeAEQhjLAACLUIgeAAg');
    this.shape31.setTransform(5,-71.6);

    this.shape32 = new cjs.Shape();
    this.shape32.graphics.f('#333').s().p('AhALNQgCrRBlrIIAeAFQhlLBACLTIgeAAg');
    this.shape32.setTransform(5.1,-71.7);

    this.shape33 = new cjs.Shape();
    this.shape33.graphics.f('#333').s().p('AhBLNQgCrRBnrIIAeAFQhnLAACLUIgeAAg');
    this.shape33.setTransform(5.1,-71.7);

    this.shape34 = new cjs.Shape();
    this.shape34.graphics.f('#333').s().p('AhCLNQgCrRBprIIAeAFQhpLAACLUIgeAAg');
    this.shape34.setTransform(5.2,-71.7);

    this.shape35 = new cjs.Shape();
    this.shape35.graphics.f('#333').s().p('AhCLNQgCrRBqrIIAeAFQhqLAACLUIgeAAg');
    this.shape35.setTransform(5.3,-71.7);

    this.shape36 = new cjs.Shape();
    this.shape36.graphics.f('#333').s().p('AhDLNQgCrRBrrIIAeAFQhrLAACLUIgeAAg');
    this.shape36.setTransform(5.3,-71.7);

    this.shape37 = new cjs.Shape();
    this.shape37.graphics.f('#333').s().p('AhDLNQgCrRBsrIIAeAFQhsLAACLUIgeAAg');
    this.shape37.setTransform(5.4,-71.7);

    this.shape38 = new cjs.Shape();
    this.shape38.graphics.f('#333').s().p('AhELNQgCrRBtrIIAeAFQhtLAACLUIgeAAg');
    this.shape38.setTransform(5.4,-71.7);

    this.shape39 = new cjs.Shape();
    this.shape39.graphics.f('#333').s().p('AhELNQgCrRBtrIIAeAFQhtLAACLUg');
    this.shape39.setTransform(5.4,-71.7);

    this.shape40 = new cjs.Shape();
    this.shape40.graphics.f('#333').s().p('AgKLIQAArIgIrHIAdAAQAILHgBLIg');
    this.shape40.setTransform(-0.3,-71.2);

    this.shape41 = new cjs.Shape();
    this.shape41.graphics.f('#333').s().p('AgHLJQAArJgOrGIAdgBQAOLHAALJg');
    this.shape41.setTransform(-0.6,-71.2);

    this.shape42 = new cjs.Shape();
    this.shape42.graphics.f('#333').s().p('AgELJQABrJgVrHIAdgBQAVLIgBLJg');
    this.shape42.setTransform(-1,-71.3);

    this.shape43 = new cjs.Shape();
    this.shape43.graphics.f('#333').s().p('AgBLJQABrKgcrGIAdgBQAcLIgBLJg');
    this.shape43.setTransform(-1.3,-71.3);

    this.shape44 = new cjs.Shape();
    this.shape44.graphics.f('#333').s().p('AABLJQABrKghrGIAfgBQAgLIgBLJg');
    this.shape44.setTransform(-1.6,-71.3);

    this.shape45 = new cjs.Shape();
    this.shape45.graphics.f('#333').s().p('AAELKQABrMgmrFIAdgCQAnLIgBLLg');
    this.shape45.setTransform(-1.9,-71.4);

    this.shape46 = new cjs.Shape();
    this.shape46.graphics.f('#333').s().p('AAHLKQABrMgsrFIAegCQAsLIgBLLg');
    this.shape46.setTransform(-2.2,-71.4);

    this.shape47 = new cjs.Shape();
    this.shape47.graphics.f('#333').s().p('AAKLKQABrMgyrFIAegCQAyLIgBLLg');
    this.shape47.setTransform(-2.4,-71.4);

    this.shape48 = new cjs.Shape();
    this.shape48.graphics.f('#333').s().p('AAMLLQABrOg3rEIAegDQA3LJgBLMg');
    this.shape48.setTransform(-2.7,-71.4);

    this.shape49 = new cjs.Shape();
    this.shape49.graphics.f('#333').s().p('AARLLQABrOhArEIAegDQBALIgBLNg');
    this.shape49.setTransform(-3.2,-71.5);

    this.shape50 = new cjs.Shape();
    this.shape50.graphics.f('#333').s().p('AATLLQACrPhGrDIAegDQBGLIgCLNg');
    this.shape50.setTransform(-3.4,-71.5);

    this.shape51 = new cjs.Shape();
    this.shape51.graphics.f('#333').s().p('AAWLLQABrPhKrDIAegDQBKLIgBLNg');
    this.shape51.setTransform(-3.6,-71.5);

    this.shape52 = new cjs.Shape();
    this.shape52.graphics.f('#333').s().p('AAYLMQABrQhOrDIAegEQBOLJgBLOg');
    this.shape52.setTransform(-3.8,-71.5);

    this.shape53 = new cjs.Shape();
    this.shape53.graphics.f('#333').s().p('AAZLMQACrRhSrCIAegEQBSLIgCLPg');
    this.shape53.setTransform(-4,-71.6);

    this.shape54 = new cjs.Shape();
    this.shape54.graphics.f('#333').s().p('AAbLMQACrRhVrCIAegEQBVLIgCLPg');
    this.shape54.setTransform(-4.2,-71.6);

    this.shape55 = new cjs.Shape();
    this.shape55.graphics.f('#333').s().p('AAdLMQABrRhYrCIAegEQBYLIgBLPg');
    this.shape55.setTransform(-4.3,-71.6);

    this.shape56 = new cjs.Shape();
    this.shape56.graphics.f('#333').s().p('AAeLMQACrShbrBIAegEQBbLIgCLPg');
    this.shape56.setTransform(-4.5,-71.6);

    this.shape57 = new cjs.Shape();
    this.shape57.graphics.f('#333').s().p('AAgLMQABrSherBIAegEQBeLIgBLPg');
    this.shape57.setTransform(-4.6,-71.6);

    this.shape58 = new cjs.Shape();
    this.shape58.graphics.f('#333').s().p('AAhLNQACrThhrBIAegEQBhLIgCLQg');
    this.shape58.setTransform(-4.7,-71.6);

    this.shape59 = new cjs.Shape();
    this.shape59.graphics.f('#333').s().p('AAiLNQACrUhjrAIAegEQBjLIgCLQg');
    this.shape59.setTransform(-4.9,-71.6);

    this.shape60 = new cjs.Shape();
    this.shape60.graphics.f('#333').s().p('AAjLNQACrThlrBIAegFQBlLIgCLRg');
    this.shape60.setTransform(-5,-71.7);

    this.shape61 = new cjs.Shape();
    this.shape61.graphics.f('#333').s().p('AAkLNQACrUhnrAIAegFQBnLIgCLRg');
    this.shape61.setTransform(-5,-71.7);

    this.shape62 = new cjs.Shape();
    this.shape62.graphics.f('#333').s().p('AAlLNQACrUhprAIAegFQBpLIgCLRg');
    this.shape62.setTransform(-5.1,-71.7);

    this.shape63 = new cjs.Shape();
    this.shape63.graphics.f('#333').s().p('AAlLNQACrUhqrAIAegFQBqLIgCLRg');
    this.shape63.setTransform(-5.2,-71.7);

    this.shape64 = new cjs.Shape();
    this.shape64.graphics.f('#333').s().p('AAmLNQACrUhrrAIAegFQBrLIgCLRg');
    this.shape64.setTransform(-5.2,-71.7);

    this.shape65 = new cjs.Shape();
    this.shape65.graphics.f('#333').s().p('AAmLNQACrUhsrAIAegFQBsLIgCLRg');
    this.shape65.setTransform(-5.3,-71.7);

    this.shape66 = new cjs.Shape();
    this.shape66.graphics.f('#333').s().p('AAnLNQACrUhtrAIAegFQBtLIgCLRg');
    this.shape66.setTransform(-5.3,-71.7);
    this.shape66._off = true;

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape1}]},1).to({state:[{t:this.shape2}]},1).to({state:[{t:this.shape3}]},1).to({state:[{t:this.shape4}]},1).to({state:[{t:this.shape5}]},1).to({state:[{t:this.shape6}]},1).to({state:[{t:this.shape7}]},1).to({state:[{t:this.shape8}]},1).to({state:[{t:this.shape9}]},1).to({state:[{t:this.shape10}]},1).to({state:[{t:this.shape11}]},1).to({state:[{t:this.shape12}]},1).to({state:[{t:this.shape13}]},1).to({state:[{t:this.shape14}]},1).to({state:[{t:this.shape15}]},1).to({state:[{t:this.shape16}]},1).to({state:[{t:this.shape17}]},1).to({state:[{t:this.shape18}]},1).to({state:[{t:this.shape19}]},1).to({state:[{t:this.shape20}]},1).to({state:[{t:this.shape21}]},1).to({state:[{t:this.shape22}]},1).to({state:[{t:this.shape23}]},1).to({state:[{t:this.shape24}]},1).to({state:[{t:this.shape25}]},1).to({state:[{t:this.shape26}]},1).to({state:[{t:this.shape27}]},1).to({state:[{t:this.shape28}]},1).to({state:[{t:this.shape29}]},1).to({state:[{t:this.shape30}]},1).to({state:[{t:this.shape31}]},1).to({state:[{t:this.shape32}]},1).to({state:[{t:this.shape33}]},1).to({state:[{t:this.shape34}]},1).to({state:[{t:this.shape35}]},1).to({state:[{t:this.shape36}]},1).to({state:[{t:this.shape37}]},1).to({state:[{t:this.shape38}]},1).to({state:[{t:this.shape38}]},1).to({state:[{t:this.shape39}]},1).to({state:[{t:this.shape38}]},1).to({state:[{t:this.shape38}]},1).to({state:[{t:this.shape37}]},1).to({state:[{t:this.shape36}]},1).to({state:[{t:this.shape35}]},1).to({state:[{t:this.shape34}]},1).to({state:[{t:this.shape33}]},1).to({state:[{t:this.shape32}]},1).to({state:[{t:this.shape31}]},1).to({state:[{t:this.shape30}]},1).to({state:[{t:this.shape29}]},1).to({state:[{t:this.shape28}]},1).to({state:[{t:this.shape27}]},1).to({state:[{t:this.shape26}]},1).to({state:[{t:this.shape25}]},1).to({state:[{t:this.shape24}]},1).to({state:[{t:this.shape23}]},1).to({state:[{t:this.shape22}]},1).to({state:[{t:this.shape21}]},1).to({state:[{t:this.shape20}]},1).to({state:[{t:this.shape19}]},1).to({state:[{t:this.shape18}]},1).to({state:[{t:this.shape17}]},1).to({state:[{t:this.shape16}]},1).to({state:[{t:this.shape15}]},1).to({state:[{t:this.shape14}]},1).to({state:[{t:this.shape13}]},1).to({state:[{t:this.shape12}]},1).to({state:[{t:this.shape11}]},1).to({state:[{t:this.shape10}]},1).to({state:[{t:this.shape40}]},1).to({state:[{t:this.shape41}]},1).to({state:[{t:this.shape42}]},1).to({state:[{t:this.shape43}]},1).to({state:[{t:this.shape44}]},1).to({state:[{t:this.shape45}]},1).to({state:[{t:this.shape46}]},1).to({state:[{t:this.shape47}]},1).to({state:[{t:this.shape48}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape49}]},1).to({state:[{t:this.shape50}]},1).to({state:[{t:this.shape51}]},1).to({state:[{t:this.shape52}]},1).to({state:[{t:this.shape53}]},1).to({state:[{t:this.shape54}]},1).to({state:[{t:this.shape55}]},1).to({state:[{t:this.shape56}]},1).to({state:[{t:this.shape57}]},1).to({state:[{t:this.shape58}]},1).to({state:[{t:this.shape59}]},1).to({state:[{t:this.shape60}]},1).to({state:[{t:this.shape61}]},1).to({state:[{t:this.shape62}]},1).to({state:[{t:this.shape63}]},1).to({state:[{t:this.shape64}]},1).to({state:[{t:this.shape65}]},1).to({state:[{t:this.shape66}]},1).to({state:[{t:this.shape66}]},1).to({state:[{t:this.shape66}]},1).to({state:[{t:this.shape66}]},1).to({state:[{t:this.shape66}]},1).to({state:[{t:this.shape65}]},1).to({state:[{t:this.shape64}]},1).to({state:[{t:this.shape63}]},1).to({state:[{t:this.shape62}]},1).to({state:[{t:this.shape61}]},1).to({state:[{t:this.shape60}]},1).to({state:[{t:this.shape59}]},1).to({state:[{t:this.shape58}]},1).to({state:[{t:this.shape57}]},1).to({state:[{t:this.shape56}]},1).to({state:[{t:this.shape55}]},1).to({state:[{t:this.shape54}]},1).to({state:[{t:this.shape53}]},1).to({state:[{t:this.shape52}]},1).to({state:[{t:this.shape51}]},1).to({state:[{t:this.shape50}]},1).to({state:[{t:this.shape49}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape48}]},1).to({state:[{t:this.shape47}]},1).to({state:[{t:this.shape46}]},1).to({state:[{t:this.shape45}]},1).to({state:[{t:this.shape44}]},1).to({state:[{t:this.shape43}]},1).to({state:[{t:this.shape42}]},1).to({state:[{t:this.shape41}]},1).to({state:[{t:this.shape40}]},1).to({state:[{t:this.shape10}]},1).wait(1));
    this.timeline.addTween(cjs.Tween.get(this.shape66).wait(98).to({_off:false},0).wait(4).to({_off:true},1).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-231.3,123.6,231.4);


(lib.flower1_1 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{'flower1-loop':0});

    // timeline functions:
    this.frame_120 = function() {
        this.gotoAndPlay('flower1-loop');
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

    // head
    this.instance = new lib.flower1head();
    this.instance.parent = this;
    this.instance.setTransform(89.7,-273.5,1,1,0,0,0,81.9,77.8);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:77.7,rotation:10,x:111.7,y:-255.6},30,cjs.Ease.get(1)).to({regY:77.8,rotation:0,x:89.7,y:-273.5},30,cjs.Ease.get(-1)).to({regY:77.7,rotation:-10,x:63.7,y:-286.6},30,cjs.Ease.get(1)).to({regY:77.8,rotation:0,x:89.7,y:-273.5},30,cjs.Ease.get(-1)).wait(1));

    // leaf
    this.instance1 = new lib.leaf1();
    this.instance1.parent = this;
    this.instance1.setTransform(8.7,-223.3,1,1,0,0,0,9.7,10.1);

    this.timeline.addTween(cjs.Tween.get(this.instance1).to({regY:10,rotation:10,x:23.6,y:-220.3},30,cjs.Ease.get(1)).to({regY:10.1,rotation:0,x:8.6,y:-223.3},30,cjs.Ease.get(-1)).to({rotation:-10,x:-6.6,y:-223.1},30,cjs.Ease.get(1)).to({rotation:0,x:8.6,y:-223.3},30,cjs.Ease.get(-1)).wait(1));

    // stem
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#333').s().p('AgOV6MAAAgrzIAdAAMAAAArzg');
    this.shape.setTransform(0.2,-140.2);

    this.shape1 = new cjs.Shape();
    this.shape1.graphics.f('#333').s().p('AgWV6QgB16AR15IAdAAQgRV5ABV6IgdAAg');
    this.shape1.setTransform(1,-140.2);

    this.shape2 = new cjs.Shape();
    this.shape2.graphics.f('#333').s().p('AgeV6QgB16Ag15IAeABQggV4ABV6IgeAAg');
    this.shape2.setTransform(1.8,-140.2);

    this.shape3 = new cjs.Shape();
    this.shape3.graphics.f('#333').s().p('AgmV6QgB17Aw13IAeABQgwV2ABV7IgeAAg');
    this.shape3.setTransform(2.6,-140.1);

    this.shape4 = new cjs.Shape();
    this.shape4.graphics.f('#333').s().p('AgtV5QgC17A/12IAeABQg/V2ACV6IgeAAg');
    this.shape4.setTransform(3.3,-140.1);

    this.shape5 = new cjs.Shape();
    this.shape5.graphics.f('#333').s().p('Ag0V5QgC18BN11IAeACQhNV1ACV6IgeAAg');
    this.shape5.setTransform(4,-140.1);

    this.shape6 = new cjs.Shape();
    this.shape6.graphics.f('#333').s().p('Ag7V5QgC18Bb11IAeACQhbV0ACV7IgeAAg');
    this.shape6.setTransform(4.7,-140.1);

    this.shape7 = new cjs.Shape();
    this.shape7.graphics.f('#333').s().p('AhBV5QgD19Bp10IAdACQhoVzADV8IgeAAg');
    this.shape7.setTransform(5.3,-140.1);

    this.shape8 = new cjs.Shape();
    this.shape8.graphics.f('#333').s().p('AhHV5QgE19B210IAeADQh2VyAEV8IgeAAg');
    this.shape8.setTransform(5.9,-140.1);

    this.shape9 = new cjs.Shape();
    this.shape9.graphics.f('#333').s().p('AhNV5QgE1+CC1yIAeACQiCVyAEV8IgeAAg');
    this.shape9.setTransform(6.5,-140);

    this.shape10 = new cjs.Shape();
    this.shape10.graphics.f('#333').s().p('AhTV5QgE1+CN1yIAeACQiNVxAEV9IgeAAg');
    this.shape10.setTransform(7.1,-140);

    this.shape11 = new cjs.Shape();
    this.shape11.graphics.f('#333').s().p('AhYV4QgF1+CZ1xIAeADQiZVwAFV8IgeAAg');
    this.shape11.setTransform(7.6,-140);

    this.shape12 = new cjs.Shape();
    this.shape12.graphics.f('#333').s().p('AheV4QgF1/Ck1wIAeADQikVwAFV8IgeAAg');
    this.shape12.setTransform(8.2,-140);

    this.shape13 = new cjs.Shape();
    this.shape13.graphics.f('#333').s().p('AhiV4QgF1/Ct1wIAeAEQitVvAFV8IgeAAg');
    this.shape13.setTransform(8.6,-140);

    this.shape14 = new cjs.Shape();
    this.shape14.graphics.f('#333').s().p('AhnV4QgF1/C31wIAdAEQi2VuAFV9IgeAAg');
    this.shape14.setTransform(9.1,-140);

    this.shape15 = new cjs.Shape();
    this.shape15.graphics.f('#333').s().p('AhrV4QgG1/DA1wIAeAFQjAVtAGV9IgeAAg');
    this.shape15.setTransform(9.5,-140);

    this.shape16 = new cjs.Shape();
    this.shape16.graphics.f('#333').s().p('AhvV4QgG2ADI1vIAeAEQjIVtAGV+IgeAAg');
    this.shape16.setTransform(9.9,-140);

    this.shape17 = new cjs.Shape();
    this.shape17.graphics.f('#333').s().p('AhzV4QgG2BDQ1uIAdAFQjPVsAGV+IgeAAg');
    this.shape17.setTransform(10.3,-140);

    this.shape18 = new cjs.Shape();
    this.shape18.graphics.f('#333').s().p('Ah2V4QgH2BDX1uIAeAFQjXVsAHV+IgeAAg');
    this.shape18.setTransform(10.6,-140);

    this.shape19 = new cjs.Shape();
    this.shape19.graphics.f('#333').s().p('Ah6V4QgG2BDd1uIAeAFQjdVsAGV+IgeAAg');
    this.shape19.setTransform(11,-139.9);

    this.shape20 = new cjs.Shape();
    this.shape20.graphics.f('#333').s().p('Ah9V4QgG2BDj1uIAeAGQjjVqAGV/IgeAAg');
    this.shape20.setTransform(11.3,-139.9);

    this.shape21 = new cjs.Shape();
    this.shape21.graphics.f('#333').s().p('Ah/V4QgH2BDp1uIAdAGQjoVqAHV/IgeAAg');
    this.shape21.setTransform(11.5,-139.9);

    this.shape22 = new cjs.Shape();
    this.shape22.graphics.f('#333').s().p('AiCV4QgH2CDu1tIAeAGQjuVqAHV/IgeAAg');
    this.shape22.setTransform(11.8,-139.9);

    this.shape23 = new cjs.Shape();
    this.shape23.graphics.f('#333').s().p('AiEV4QgH2CDy1tIAeAGQjyVrAHV+IgeAAg');
    this.shape23.setTransform(12,-139.9);

    this.shape24 = new cjs.Shape();
    this.shape24.graphics.f('#333').s().p('AiFV3QgH2BD11sIAeAFQj1VqAHV+IgeAAg');
    this.shape24.setTransform(12.1,-139.9);

    this.shape25 = new cjs.Shape();
    this.shape25.graphics.f('#333').s().p('AiHV3QgH2BD51sIAdAFQj4VqAHV+IgeAAg');
    this.shape25.setTransform(12.3,-139.9);

    this.shape26 = new cjs.Shape();
    this.shape26.graphics.f('#333').s().p('AiIV3QgI2CD81rIAdAFQj7VqAIV+IgeAAg');
    this.shape26.setTransform(12.4,-139.9);

    this.shape27 = new cjs.Shape();
    this.shape27.graphics.f('#333').s().p('AiJV3QgI2CD+1rIAdAFQj9VqAIV+IgeAAg');
    this.shape27.setTransform(12.5,-139.9);

    this.shape28 = new cjs.Shape();
    this.shape28.graphics.f('#333').s().p('AiKV3QgH2CD/1rIAdAFQj+VqAHV+IgeAAg');
    this.shape28.setTransform(12.6,-139.9);

    this.shape29 = new cjs.Shape();
    this.shape29.graphics.f('#333').s().p('AiKV3QgI2CEA1rIAdAFQj/VqAIV+IgeAAg');
    this.shape29.setTransform(12.6,-139.9);

    this.shape30 = new cjs.Shape();
    this.shape30.graphics.f('#333').s().p('AiKV3QgI2CEA1rIAeAFQkAVqAIV+g');
    this.shape30.setTransform(12.6,-139.9);

    this.shape31 = new cjs.Shape();
    this.shape31.graphics.f('#333').s().p('AgGV6QAB16gR15IAdAAQARV5gBV6g');
    this.shape31.setTransform(-0.6,-140.2);

    this.shape32 = new cjs.Shape();
    this.shape32.graphics.f('#333').s().p('AABV6QAB16gg14IAegBQAgV5gBV6g');
    this.shape32.setTransform(-1.4,-140.2);

    this.shape33 = new cjs.Shape();
    this.shape33.graphics.f('#333').s().p('AAJV6QAB17gw12IAegBQAwV3gBV7g');
    this.shape33.setTransform(-2.2,-140.1);

    this.shape34 = new cjs.Shape();
    this.shape34.graphics.f('#333').s().p('AAQV5QAC16g/12IAegBQA/V2gCV7g');
    this.shape34.setTransform(-2.9,-140.1);

    this.shape35 = new cjs.Shape();
    this.shape35.graphics.f('#333').s().p('AAXV5QAC16hN11IAegCQBNV1gCV8g');
    this.shape35.setTransform(-3.6,-140.1);

    this.shape36 = new cjs.Shape();
    this.shape36.graphics.f('#333').s().p('AAeV5QAC17hb10IAegCQBbV1gCV8g');
    this.shape36.setTransform(-4.3,-140.1);

    this.shape37 = new cjs.Shape();
    this.shape37.graphics.f('#333').s().p('AAkV5QAD18ho1zIAdgCQBpV0gDV9g');
    this.shape37.setTransform(-4.9,-140.1);

    this.shape38 = new cjs.Shape();
    this.shape38.graphics.f('#333').s().p('AAqV5QAE18h21yIAegDQB2V0gEV9g');
    this.shape38.setTransform(-5.5,-140.1);

    this.shape39 = new cjs.Shape();
    this.shape39.graphics.f('#333').s().p('AAwV5QAE18iC1yIAegCQCCVygEV+g');
    this.shape39.setTransform(-6.1,-140);

    this.shape40 = new cjs.Shape();
    this.shape40.graphics.f('#333').s().p('AA2V5QAE19iN1xIAegCQCNVygEV+g');
    this.shape40.setTransform(-6.7,-140);

    this.shape41 = new cjs.Shape();
    this.shape41.graphics.f('#333').s().p('AA7V4QAF18iZ1wIAegDQCZVxgFV+g');
    this.shape41.setTransform(-7.2,-140);

    this.shape42 = new cjs.Shape();
    this.shape42.graphics.f('#333').s().p('ABBV4QAF18ik1wIAegDQCkVwgFV/g');
    this.shape42.setTransform(-7.8,-140);

    this.shape43 = new cjs.Shape();
    this.shape43.graphics.f('#333').s().p('ABFV4QAF18it1vIAegEQCtVwgFV/g');
    this.shape43.setTransform(-8.2,-140);

    this.shape44 = new cjs.Shape();
    this.shape44.graphics.f('#333').s().p('ABKV4QAF19i21uIAdgEQC3VwgFV/g');
    this.shape44.setTransform(-8.7,-140);

    this.shape45 = new cjs.Shape();
    this.shape45.graphics.f('#333').s().p('ABOV4QAG19i/1tIAdgFQDAVwgGV/g');
    this.shape45.setTransform(-9.1,-140);

    this.shape46 = new cjs.Shape();
    this.shape46.graphics.f('#333').s().p('ABSV4QAG1+jI1tIAegEQDIVvgGWAg');
    this.shape46.setTransform(-9.5,-140);

    this.shape47 = new cjs.Shape();
    this.shape47.graphics.f('#333').s().p('ABWV4QAG1+jP1sIAdgFQDQVugGWBg');
    this.shape47.setTransform(-9.9,-140);

    this.shape48 = new cjs.Shape();
    this.shape48.graphics.f('#333').s().p('ABZV4QAH1+jX1sIAegFQDXVugHWBg');
    this.shape48.setTransform(-10.2,-140);

    this.shape49 = new cjs.Shape();
    this.shape49.graphics.f('#333').s().p('ABdV4QAG1+jd1sIAegFQDdVugGWBg');
    this.shape49.setTransform(-10.6,-139.9);

    this.shape50 = new cjs.Shape();
    this.shape50.graphics.f('#333').s().p('ABgV4QAG1/jj1qIAegGQDjVugGWBg');
    this.shape50.setTransform(-10.9,-139.9);

    this.shape51 = new cjs.Shape();
    this.shape51.graphics.f('#333').s().p('ABiV4QAH1/jo1qIAdgGQDpVugHWBg');
    this.shape51.setTransform(-11.1,-139.9);

    this.shape52 = new cjs.Shape();
    this.shape52.graphics.f('#333').s().p('ABlV4QAH1/ju1qIAegGQDuVtgHWCg');
    this.shape52.setTransform(-11.4,-139.9);

    this.shape53 = new cjs.Shape();
    this.shape53.graphics.f('#333').s().p('ABnV4QAH1+jy1rIAegGQDyVtgHWCg');
    this.shape53.setTransform(-11.6,-139.9);

    this.shape54 = new cjs.Shape();
    this.shape54.graphics.f('#333').s().p('ABoV3QAH1+j11qIAegFQD1VsgHWBg');
    this.shape54.setTransform(-11.7,-139.9);

    this.shape55 = new cjs.Shape();
    this.shape55.graphics.f('#333').s().p('ABqV3QAH1+j41qIAdgFQD5VsgHWBg');
    this.shape55.setTransform(-11.9,-139.9);

    this.shape56 = new cjs.Shape();
    this.shape56.graphics.f('#333').s().p('ABrV3QAI1+j71qIAdgFQD8VrgIWCg');
    this.shape56.setTransform(-12,-139.9);

    this.shape57 = new cjs.Shape();
    this.shape57.graphics.f('#333').s().p('ABsV3QAI1+j91qIAdgFQD+VrgIWCg');
    this.shape57.setTransform(-12.1,-139.9);

    this.shape58 = new cjs.Shape();
    this.shape58.graphics.f('#333').s().p('ABtV3QAH1+j+1qIAdgFQD/VrgHWCg');
    this.shape58.setTransform(-12.2,-139.9);

    this.shape59 = new cjs.Shape();
    this.shape59.graphics.f('#333').s().p('ABtV3QAI1+j/1qIAdgFQEAVrgIWCg');
    this.shape59.setTransform(-12.2,-139.9);

    this.shape60 = new cjs.Shape();
    this.shape60.graphics.f('#333').s().p('ABtV3QAI1+kA1qIAegFQEAVrgIWCg');
    this.shape60.setTransform(-12.2,-139.9);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape1}]},1).to({state:[{t:this.shape2}]},1).to({state:[{t:this.shape3}]},1).to({state:[{t:this.shape4}]},1).to({state:[{t:this.shape5}]},1).to({state:[{t:this.shape6}]},1).to({state:[{t:this.shape7}]},1).to({state:[{t:this.shape8}]},1).to({state:[{t:this.shape9}]},1).to({state:[{t:this.shape10}]},1).to({state:[{t:this.shape11}]},1).to({state:[{t:this.shape12}]},1).to({state:[{t:this.shape13}]},1).to({state:[{t:this.shape14}]},1).to({state:[{t:this.shape15}]},1).to({state:[{t:this.shape16}]},1).to({state:[{t:this.shape17}]},1).to({state:[{t:this.shape18}]},1).to({state:[{t:this.shape19}]},1).to({state:[{t:this.shape20}]},1).to({state:[{t:this.shape21}]},1).to({state:[{t:this.shape22}]},1).to({state:[{t:this.shape23}]},1).to({state:[{t:this.shape24}]},1).to({state:[{t:this.shape25}]},1).to({state:[{t:this.shape26}]},1).to({state:[{t:this.shape27}]},1).to({state:[{t:this.shape28}]},1).to({state:[{t:this.shape29}]},1).to({state:[{t:this.shape30}]},1).to({state:[{t:this.shape29}]},1).to({state:[{t:this.shape28}]},1).to({state:[{t:this.shape27}]},1).to({state:[{t:this.shape26}]},1).to({state:[{t:this.shape25}]},1).to({state:[{t:this.shape24}]},1).to({state:[{t:this.shape23}]},1).to({state:[{t:this.shape22}]},1).to({state:[{t:this.shape21}]},1).to({state:[{t:this.shape20}]},1).to({state:[{t:this.shape19}]},1).to({state:[{t:this.shape18}]},1).to({state:[{t:this.shape17}]},1).to({state:[{t:this.shape16}]},1).to({state:[{t:this.shape15}]},1).to({state:[{t:this.shape14}]},1).to({state:[{t:this.shape13}]},1).to({state:[{t:this.shape12}]},1).to({state:[{t:this.shape11}]},1).to({state:[{t:this.shape10}]},1).to({state:[{t:this.shape9}]},1).to({state:[{t:this.shape8}]},1).to({state:[{t:this.shape7}]},1).to({state:[{t:this.shape6}]},1).to({state:[{t:this.shape5}]},1).to({state:[{t:this.shape4}]},1).to({state:[{t:this.shape3}]},1).to({state:[{t:this.shape2}]},1).to({state:[{t:this.shape1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape31}]},1).to({state:[{t:this.shape32}]},1).to({state:[{t:this.shape33}]},1).to({state:[{t:this.shape34}]},1).to({state:[{t:this.shape35}]},1).to({state:[{t:this.shape36}]},1).to({state:[{t:this.shape37}]},1).to({state:[{t:this.shape38}]},1).to({state:[{t:this.shape39}]},1).to({state:[{t:this.shape40}]},1).to({state:[{t:this.shape41}]},1).to({state:[{t:this.shape42}]},1).to({state:[{t:this.shape43}]},1).to({state:[{t:this.shape44}]},1).to({state:[{t:this.shape45}]},1).to({state:[{t:this.shape46}]},1).to({state:[{t:this.shape47}]},1).to({state:[{t:this.shape48}]},1).to({state:[{t:this.shape49}]},1).to({state:[{t:this.shape50}]},1).to({state:[{t:this.shape51}]},1).to({state:[{t:this.shape52}]},1).to({state:[{t:this.shape53}]},1).to({state:[{t:this.shape54}]},1).to({state:[{t:this.shape55}]},1).to({state:[{t:this.shape56}]},1).to({state:[{t:this.shape57}]},1).to({state:[{t:this.shape58}]},1).to({state:[{t:this.shape59}]},1).to({state:[{t:this.shape60}]},1).to({state:[{t:this.shape59}]},1).to({state:[{t:this.shape58}]},1).to({state:[{t:this.shape57}]},1).to({state:[{t:this.shape56}]},1).to({state:[{t:this.shape55}]},1).to({state:[{t:this.shape54}]},1).to({state:[{t:this.shape53}]},1).to({state:[{t:this.shape52}]},1).to({state:[{t:this.shape51}]},1).to({state:[{t:this.shape50}]},1).to({state:[{t:this.shape49}]},1).to({state:[{t:this.shape48}]},1).to({state:[{t:this.shape47}]},1).to({state:[{t:this.shape46}]},1).to({state:[{t:this.shape45}]},1).to({state:[{t:this.shape44}]},1).to({state:[{t:this.shape43}]},1).to({state:[{t:this.shape42}]},1).to({state:[{t:this.shape41}]},1).to({state:[{t:this.shape40}]},1).to({state:[{t:this.shape39}]},1).to({state:[{t:this.shape38}]},1).to({state:[{t:this.shape37}]},1).to({state:[{t:this.shape36}]},1).to({state:[{t:this.shape35}]},1).to({state:[{t:this.shape34}]},1).to({state:[{t:this.shape33}]},1).to({state:[{t:this.shape32}]},1).to({state:[{t:this.shape31}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-421.3,171.5,421.4);

// stage content:
(lib.txpcanvas = function(mode,startPosition,loop)
{
    if (loop === null) {
        loop = false;
    }
    this.initialize(mode,startPosition,loop,{});

    // flower2
    this.instance = new lib.flower2_1();
    this.instance.parent = this;
    this.instance.setTransform(948,351.2,1,1,0,0,0,12,-64.2);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // flower1
    this.instance1 = new lib.flower1_1();
    this.instance1.parent = this;
    this.instance1.setTransform(886.6,288.3,1,1,0,0,0,14.6,-133.1);
    this.timeline.addTween(cjs.Tween.get(this.instance1).wait(1));

    // flower3
    this.instance2 = new lib.flower3_1();
    this.instance2.parent = this;
    this.instance2.setTransform(1006.2,253.8,1,1,0,0,0,4.2,-162.2);
    this.timeline.addTween(cjs.Tween.get(this.instance2).wait(1));

    // ground
    this.instance3 = new lib.ground();
    this.instance3.parent = this;
    this.instance3.setTransform(0,360,0.5,0.5);
    this.timeline.addTween(cjs.Tween.get(this.instance3).wait(1));

}).prototype = p = new cjs.MovieClip();

p.nominalBounds = new cjs.Rectangle(575,240,1150,480);
// library properties:
lib.properties = {
    width: 1150,
    height: 480,
    fps: 20,
    color: '#fff',
    opacity: 1,
    manifest: [
        {src:'../assets/img/com/index-animation.png', id:'index-animation'}
    ]
};

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
