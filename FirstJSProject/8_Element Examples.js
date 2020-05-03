


describe('protractor element demo', function() {
  it('locators test cases', function() {
  
     
     browser.get('http://juliemr.github.io/protractor-demo/');
     browser.sleep(1000);
     element(By.model("first")).sendKeys("3");
     
    
     element(By.model("second")).sendKeys("5").then(function(){
       
        browser.sleep(2000);
      
      })
       element(By.id("gobutton"))
      element(By.id("gobutton")).click().then(function(){
      browser.sleep(1000);

      })

      //assersion .... here manual resolve is not required as it is takne care by Jasmine
      expect(element(By.css("h2[class='ng-binding']")).getText()).toBe("8");
      expect(element(By.css("h2[class='ng-binding']")).getText()).not.toBe("12");


      // assersion case
        var v1 = 3;
        var v2 = 2;
        expect(v1).toEqual(3);
        

    //assersion case- regular expression
        expect("Ajeet").toMatch(/jeet/);

        //see jasmine doc for all assersion

      // resolve it manually 
      element(By.css("h2[class='ng-binding']")).getText().then(function(text){
      console.log(text);


      });

     
  
   

  });


});
