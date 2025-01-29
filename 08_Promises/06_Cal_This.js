function setUsername(username){

    this.username = username;
}

function createUser(username,email,age){
    setUsername.call(this,username);
    this.email = email;
    this.age = age;

}

const c = new createUser("harsh","rathore@gmail.com","31");
console.log(c);