describe('Protractor Element Demo',function() {  
	 var obj=  require("./Jsobjectdemo.js");
	 var using = require('jasmine-data-provider');
	 var d=  require("./data.js");
	
	 beforeEach(function() {
			obj.getURL();
		  });
	 
	 //data stores actual data
	 //description stores sub object name
	 //for every iteration one data set is picked
	 using(d.Datadriven, function (data, description) {
		 
		 it('Testing calculator functionality'+description,function() {
				
				/*browser.waitForAngularEnabled(false);
				browser.get("http://google.com");//non angular apps*/
				//set
				
				

			
			obj.firstinput.sendKeys(data.firstinput);
			obj.secondinput.sendKeys(data.secondinput);
				
		obj.goButton.click();
		//tagname[attribute='value']

		//Jasmine takes care of promise reslove
		expect(obj.result.getText()).toBe(data.result);


		obj.result.getText().then(function(text){
			
			console.log(text);
			
			
			
			
			
		})
				
				//real output will display only when you resolve promise
		// protractor for 90% of methods will resolve promise automatically
		//there could be 2 potential problems..1. sequnce is not guaranteed
		//
				
			})
	 });
	
	
	afterEach(function() {
	 console.log("Test is completed");
	  });
	
	})

		 
		
		
		
		
		
	




