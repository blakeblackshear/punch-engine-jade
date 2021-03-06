var jade_renderer = require("../lib/jade_engine.js");
var Jade = require("jade");

describe("creating a new instance", function(){

	it("set the extension as jade", function(){
    var jade_instance = new jade_renderer();
		expect(jade_instance.extension).toEqual(".jade");
	});

});

describe("calling render", function(){

	it("call Jade's compile function with the template", function(){
    spyOn(Jade, "compile");

    var jade_instance = new jade_renderer();
		jade_instance.template = "template";
		jade_instance.content = {};
		jade_instance.partials = {};
		jade_instance.helpers = {};
		jade_instance.lastModified = new Date(2012, 6, 18);
		spyOn(jade_instance, "emit");

		jade_instance.render();
		expect(Jade.compile).toHaveBeenCalledWith("template");
	});

	it("call compiled template with contents and helpers", function() {
		var dummy_function = jasmine.createSpy();
		spyOn(Jade, "compile").andReturn(dummy_function);

    var jade_instance = new jade_renderer();
		jade_instance.template = "template";
		jade_instance.content = { "content_key": "content_value" };
		jade_instance.partials = {};
		jade_instance.helpers = { "tag": { "tag_helper": "tag_helper_value" }, "block": { "block_helper": "block_helper_value" }};
		jade_instance.lastModified = new Date(2012, 6, 18);
		spyOn(jade_instance, "emit");

		jade_instance.render();
		expect(dummy_function).toHaveBeenCalledWith({ "content_key": "content_value", "tag_helper": "tag_helper_value", "block_helper": "block_helper_value" });
	});

});
