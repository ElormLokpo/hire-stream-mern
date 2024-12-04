import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "..";
import { serviceEndpoints } from "../../../constants";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/slices/auth";



let registerUserService = async (data: any) => (await axiosInstance.post(serviceEndpoints.API_AUTH_REGISTER, data)).data;
let loginUserService = async (data: any) => (await axiosInstance.post(serviceEndpoints.API_AUTH_LOGIN, data)).data;



let authMutation = (authService: (data:any)=>Promise<any>, key:string)=>{
    let dispatch = useDispatch();

    return useMutation({
        mutationKey: [key],
        mutationFn: (data: any) => authService(data),
        onSuccess: (response: any) => {
            
            if (response.success == true) {
                
                dispatch(authAction(response.data))
            }

        }, 
        onError:(error:any)=>{
            console.log(error);
        }

    })
}


let registerUserMutation = ()=> authMutation(registerUserService, "register");
let loginUserMuation = ()=> authMutation(loginUserService, "login");



export const authService = { registerUserMutation, loginUserMuation }