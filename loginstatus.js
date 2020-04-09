// object, properties, methods (functions), end of object, function (with parameters),  

let logInInfo = {
    currentUserNamez: "",
    currentEmail: "",
    userNamesLoggedIn: [],
    emailsLoggedIn: [],
    userNamesLoggedOut: [],
    emailsLoggedOut: [],
    logIn: function() {
        this.userNamesLoggedIn.push(this.currentUserName);
        this.emailsLoggedIn.push(this.currentEmail);
        console.log(`Welcome ${this.currentUserName[i]}!`);
        console.log(`You have successfully logged in with your email ${this.currentEmail[i]}!`);
    },
    logOut: function () {
        this.userNamesLoggedOut.push(this.currentUserName);
        this.emailsLoggedOut.push(this.currentEmail);
        console.log(`Farewell ${this.currentUserName[i]}!`);
        console.log(`You have successfully logged out with your email ${this.currentEmail[i]}!`);
    }
},