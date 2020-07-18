//console.log() method used to log(print) the output to the console. 
//We can put any type inside the log(), be it a string, array, object, boolean etc
        console.log('abc');  
        console.log(1); 
        console.log(true); 
        console.log(null); 
        console.log(undefined);  
        console.log([1, 2, 3, 4]); // array inside log 
        console.log({a:1, b:2, c:3}); // object inside log 
    
        // console.error() method 
        //Used to log error message to the console. Useful in testing of code. 
        //By default the error message will be highlighted with red color. 
        console.error('This is a simple error'); 

        // console.warn() method 
        //Used to log warning message to the console. 
        //By default the warning message will be highlighted with yellow color. 
        console.warn('This is a warning.');  

        // console.clear() method 
        //Used to clear the console. The console will be cleared, in case of 
        //Chrome a simple overlayed text will be printed 
        //like : ‘Console was cleared’ while in firefox no message is returned. 
        //console.clear();  
        //Whenever we want to know the amount of time spend by a block or a function, 
        //we can make use of the time() and timeEnd() methods provided by the javascript console object. 
        //They take a label which must be same, and the code inside can be anything
        //( function, object, simple console).
        // console.time() and console.timeEnd() method  
        console.time('abc'); 
        let fun =  function()
            { 
                console.log('fun is running'); 
            } 
            let fun2 = function()
            { 
                console.log('fun2 is running..'); 
            } 
            fun(); // calling fun(); 
            fun2(); // calling fun2(); 
            console.timeEnd('abc'); 

        // console.table() method
        //This method allows us to generate a table inside a console. 
        //The input must be an array or an object which will be shown as a table
        console.table({'a':1, 'b':2}); 

        // console.count() method
        //This method is used to count the number that the function hit by this counting method.
        for(let i=0;i<5;i++)
        { 
        console.count(i); 
        } 

        // console.group() and console.groupEnd() method 
        //group() and groupEnd() methods of the console object allows us to group contents in a 
        //separate block, which will be indented. 
        //Just like the time() and the timeEnd() they also accepts label, again of same value.
        console.group('simple'); 
        console.warn('warning!'); 
        console.error('error here'); 
        console.log('Hi Hi Hi'); 
        console.groupEnd('simple'); 
        console.log('new section'); 

        // Custom Console log example
        //User can add Styling to the console logs in order to make logs Custom . 
        //The Syntax for it is to add the css styling as 
        //a parameter to the logs which will replace %c in the logs
        const spacing = '10px'; 
        const styles =  `padding: ${spacing}; background-color: white; color: green; font-style:  
        italic; border: 1px solid black; font-size: 2em;`; 
        console.log('%cRobin Rohit, ICT, Oman', styles); 
