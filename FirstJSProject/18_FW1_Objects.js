/**
 * 
 */



var AngularHomepage =function () {
	//var first = element(by.model("first"));
	//var second = element(by.model("second"));
	//var Button =element(by.id("gobutton"));
	//var result =item.element(by.css("td:nth-child(3)"));

	this.getURL= function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
	};
};
module.exports = new AngularHomepage();

