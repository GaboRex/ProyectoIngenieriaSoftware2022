import { isLoading, setUser } from "./authSlice";
import { loginWithEmailAndPassword } from "../../config/firebaseConfig";
// createThunk

const user = {
    name: 'Gabriel',
    lastName : 'Neme',
    password : '1213g'
    
}
export const login = () => {
    return async(dispatch) => {
     dispatch(isLoading());
     dispatch(setUser(user));
     const loginResponse = await loginWithEmailAndPassword (email,password);
     console.log(loginResponse);
    dispatch(setUser(user));
// await datos user
//dispatch(setUser())
    };
}