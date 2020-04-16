// object, properties, methods (functions), end of object, function (with parameters),  

let logInInfo = {
    currentUserName: "",
    currentEmail: "",
    userNamesLoggedIn: [],
    emailsLoggedIn: [],
    userNamesLoggedOut: [],
    emailsLoggedOut: [],
    logIn: function() {
        if (this.emailsLoggedIn.includes (this.currentEmail)) {
            console.log(`:::WARNING ${this.currentUserName} ALREADY LOGGED IN!:::`)
        } else 
        this.userNamesLoggedIn.push(this.currentUserName);
        this.emailsLoggedIn.push(this.currentEmail);
        console.log(`Welcome ${this.currentUserName}!`);
        console.log(`You have successfully logged in with your email ${this.currentEmail}!`);
    },
    logOut: function () {
        //if (this.emailsLoggedOut.includes (this.currentEmail)) {
          //  console.log(`:::WARNING ${this.currentUserName} DID NOT LOG IN!:::`);
        //} else
        this.emailsLoggedOut.push(this.emailsLoggedIn.splice(this.emailsLoggedIn.indexOf(this.currentEmail), 1 ).pop()); 
        this.userNamesLoggedOut.push(this.userNamesLoggedIn.splice(this.userNamesLoggedIn.indexOf(this.currentUserName), 1 ).pop());
        console.log(`Farewell ${this.currentUserName}!`);
        console.log(`You have successfully logged out with your email ${this.currentEmail}!`);
    }
};

function checkLogIn (username, email, status) {
    logInInfo.currentUserName = username;
    logInInfo.currentEmail = email;
    if (status == 'in') {
    logInInfo.logIn();
} else if (status == 'out') {
    logInInfo.logOut();
}
}
checkLogIn('chelsearceo', 'myPretendEmail@email.com', 'in');
checkLogIn('chelsearceo', 'myPretendEmail@email.com', 'out');
checkLogIn('username2', 'pretendEmail2@gmail.com', 'in');
checkLogIn('username2', 'pretendEmail2@gmail.com', 'out');
checkLogIn('UN3', 'PEmail3@gmail.com', 'out');





