class AuthenticationService{
    RegisterSuccessfulLogin(email,role){
        sessionStorage.setItem('authenticatedUser',email);
        sessionStorage.setItem('role',role);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('role');
    }

    whatRole(){
        return sessionStorage.getItem('role');
    }
    isLoggedIn(){
        let user=sessionStorage.getItem('autenticatedUser');
        let user2=sessionStorage.length;
        if(user2==0){
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