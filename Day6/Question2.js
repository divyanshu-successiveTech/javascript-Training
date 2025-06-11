// 2. Give an example of using multiple callback functions in a single function in JavaScript

function demoFunction1(data,func){
    console.log("after first function")
    console.log(data);
    if(func){
        func();
    }
}

function demoFunction2(data,func){
    console.log("after second function")
    console.log(data+10);
    if(func){
        func();
    }
}
function demoFunction3(data){
    console.log("after third function")
    console.log(data**2);
}


function callBackHell(data,func1,func2,func3){
    console.log("data given by user is "+ data);
    func1(data,func1(data));
    func2(data,func2(data));
    func3(data);
}

callBackHell(5,demoFunction1,demoFunction2,demoFunction3);
    




