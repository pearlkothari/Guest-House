class AuthenticationService{
    RegisterSuccessfulLogin(email,role,name){
        sessionStorage.setItem('authenticatedUser',email);
        sessionStorage.setItem('role',role);
        sessionStorage.setItem('name',name);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('name');
    }

    whatRole(){
        return sessionStorage.getItem('role');
    }
    isLoggedIn(){
        let user2=sessionStorage.length;
        if(user2==0){
            return false;
        }
        return true;
    }
    getuseremail(){
        let user=sessionStorage.getItem('authenticatedUser');        
        if(user==null){
            return '';
        }
        return user;
    }
    getusername(){
        let user=sessionStorage.getItem('name');        
        if(user==null){
            return '';
        }
        return user;
    }
}


export default new AuthenticationService();