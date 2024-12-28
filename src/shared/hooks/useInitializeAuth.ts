import { useRecoilState } from "recoil";
import { loginState } from "../recoil/loginState";
import { internalServerInstance } from "../instance/apiInstance";

export const useInitializeAuth = async () => {
    const [isLoggedIn, setLoginState] = useRecoilState(loginState);
    console.log(isLoggedIn);
    try {
        const res = await internalServerInstance.get("/auth/token/access");
    } catch (e) {}
};
