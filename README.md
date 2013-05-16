# Jade Template Engine for Punch 

Use this plugin to replace Punch's default Mustache template engine with [Jade](http://jade-lang.com/). 

### How to Setup

* Install the package
	
		npm install punch-engine-jade

* Open your Punch project's configurations (`config.json`) and add the following:

		"plugins": {
			
			"template_engine": "punch-engine-jade" 

		}

* Now you can use Jade syntax for your project's templates. 

	Make sure you **save the templates with `.jade` extension**.

* Paths for includes must start with `/` and be relative to the templates_dir in your config


