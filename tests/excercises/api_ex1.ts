


// "username":"user1",
    //"username":"password1"
//{
   // "username":"user1",
    //"password":"password1"
//}
//http://playground.kinemadev.com:8000/authentication/login

//interface  for data set 

    interface myApi {
        username: string
        password: string
    }



//create dataset 
    const data1: myApi = {
        username: "user1",
        password:"password1"
    }
    //check input data
    function checkUser(loginData:myApi) {
        if(loginData.username !== "user1") {
            console.log("wrong username")
        }else{
            if(loginData.password!="password1") 
                console.log("wrong password")
        }
        console.log("correct user")
    }
    
    checkUser(data1)