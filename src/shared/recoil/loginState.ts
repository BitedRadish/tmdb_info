import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist({
    key: "localStorage",
    storage: localStorage,
});

export const loginState = atom({
    key: "loginState",
    default: { accessToken: undefined, refreshToken: undefined },
});
