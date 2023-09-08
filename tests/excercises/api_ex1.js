// "username":"user1",
//"username":"password1"
//{
// "username":"user1",
//"password":"password1"
//}
//http://playground.kinemadev.com:8000/authentication/login
//create dataset 
var data1 = {
    username: "user1",
    password: "password1"
};
//check input data
function checkUser(loginData) {
    if (loginData.username !== "user1") {
        console.log("wrong username");
    }
    else {
        if (loginData.password != "password1")
            console.log("wrong password");
    }
    console.log("correct user");
}
checkUser(data1);
sds
