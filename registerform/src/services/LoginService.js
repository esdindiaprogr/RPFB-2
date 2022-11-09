import axios from 'axios'
const ANGEL_POST_URL ="http://localhost:8080/api/loginhelper/login";

class LoginService{
    postRequestData(angel){
        console.log(angel)
        return axios({
            method:'post',
            url:ANGEL_POST_URL,
            data:{
                email:angel.email,
                pasword:angel.password
            }

        })
    }
}
export default new LoginService()