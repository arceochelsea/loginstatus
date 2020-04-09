// object, properties, methods (functions), end of object, function (with parameters),  

let logInInfo = {
    currentUserName: "",
    currentEmail: "",
    userNamesLoggedIn: [],
    emailsLoggedIn: [],
    userNamesLoggedOut: [],
    emailsLoggedOut: [],
    logIn: function() {
        this.userNamesLoggedIn.push(this.currentUserName);
        this.emailsLoggedIn.push(this.currentEmail);
        console.log(`Welcome ${this.currentUserName}!`);
        console.log(`You have successfully logged in with your email ${this.currentEmail}!`);
        this.splice(this.indexof(this.currentUserName), 1);
        this.splice(this.indexof(this.currentEmail), 1);
    },
    logOut: function () {
        this.userNamesLoggedOut.push(this.currentUserName);
        this.emailsLoggedOut.push(this.currentEmail);
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



