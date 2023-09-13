  export  interface myApi {
        username: string
        password: string
    }
    
//create dataset 
const data1: myApi = {
    username: "user1",
    password:"password1"
}

// user that exist but forbidden from logging in
const data2: myApi = {
    username: "user2",
    password:"password2"
}
//STATUS CODES SUPPORT 
export enum StatusCodes {
    NOTFOUND = 404,
    SUCCESS = 200,
    ACCEPTED = 202,
    FORBIDDEN = 403,
    UNAUTHORIZED = 401
  };

    //check input data
    function checkValidUser(loginData:myApi) {
        if(loginData.username !== "user1"&&loginData.password !== "password1") {
            return'{statusCodes.SUCCESS} status returned '
            console.log("wrong username")
        }else{
            if(loginData.password!="password1") 
               return '${statusCodes.UNAUTHORIZED} status returned '
        }
        console.log("correct user")
    }
    
    function check403 (loginData:myApi) {
        if(loginData.username == "user2"&&loginData.password=='password2') {
            return`${StatusCodes.FORBIDDEN} status returned `
          //  console.log("wrong username")
           }
        }
        console.log ("Forbidden User test Finished ")


    
    checkValidUser(data1)
    check403(data2)