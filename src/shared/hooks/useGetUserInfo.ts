import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { internalServerInstance } from "../instance/apiInstance";
import { loginState } from "../recoil/loginState";
const useGetUserInfo = () => {
    const loggedInState = useRecoilValue(loginState);
    const { data } = useQuery({
        queryKey: ["userInfo"],
        queryFn: async () => {
            const response = await internalServerInstance.get("/user/me", {
                headers: {
                    Authorization: `Bearer ${loggedInState.accessToken}`,
                },
            });
            return response.data.email; // 데이터 반환
        },

        select: (res) => {
            return res.split("@")[0];
        },
    });
    return { data };
};

export default useGetUserInfo;
