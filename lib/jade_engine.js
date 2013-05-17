/*
* Template engine for Jade
* Based on Jade - https://github.com/visionmedia/jade#readme
*/

var BaseEngine = require("punch").TemplateEngines.Base;
var Jade = require("jade");

var _ = require("underscore");
var util = require('util');

function JadeEngine(options){
	BaseEngine.call(this, options);

	this.extension = JadeEngine.extension;
	this.renderFunction = JadeEngine.renderFunction;
};

util.inherits(JadeEngine, BaseEngine);

JadeEngine.extension = ".jade";

JadeEngine.setup = function(config){
	JadeEngine.config = config;
}

JadeEngine.renderFunction = function(template, content, partials, helpers) {

	var content_with_helpers = _.extend({}, content, helpers.tag, helpers.block);

	var p = require('path');
	var compiled_template = Jade.compile(template, { "basedir": p.join(process.cwd(), JadeEngine.config.template_dir) });
	return compiled_template(content_with_helpers);
}

module.exports = JadeEngine;
