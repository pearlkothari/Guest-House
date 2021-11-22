class AuthenticationService{
    RegisterSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser',username);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isLoggedIn(){
        let user=sessionStorage.getItem('authenticatedUser');
        if(user==null){
            return false;
        }
        return true;
    }
    getusername(){
        let user=sessionStorage.getItem('authenticatedUser');
        if(user==null){
            return '';
        }
        return user;
    }
}


export default new AuthenticationService();