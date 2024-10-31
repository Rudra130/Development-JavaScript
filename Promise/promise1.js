const p1 = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("this is my promise")
        resolve()
    },1000)
});


p1.then(function(){
    console.log("promise run perfectly")
}).catch(function(){
    console.log("promise catches")
}).finally(function(){
    console.log(
        "finally block executed"
    )
})



const p2 = new Promise((resolve,reject)=>{
    let error = false;
     setTimeout(()=>{
        if(!error){
        console.log("this is my settimeout")
        resolve({"name":"Rudra","password":123})
        }else{
            reject("error")
        }
     },1000)
     
});

p2.then((user)=>{
    return user.name;
}).then((name)=>{
    console.log(name)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("this is finnaly block")
})





