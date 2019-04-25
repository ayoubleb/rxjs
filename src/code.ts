import {Observable}  from "rxjs/Observable";


var observable = Observable.create((observer:any) => {
    try{
    observer.next('1')
    observer.next('2')
    setInterval(  () => { observer.next('3 setInterval used')}, 2000 )
    observer.next('4')
    }catch(err){
        observer.error(err)
    }
   
});

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('done'),
);

var observer2 = observable.subscribe(
    (x:any) => addItem(x),   
);

observer.add(observer2)

setTimeout(()=>{
    observer.unsubscribe();
}, 6001)




function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}