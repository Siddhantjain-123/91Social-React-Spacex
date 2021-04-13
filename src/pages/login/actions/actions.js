import {USER_LOGIN} from '../../constants';
const userLogin= (userID, password) =>{
    return{
        type : USER_LOGIN,
        payload : {
            userId : userID,
            password : password
        }
    }
};

export default userLogin;