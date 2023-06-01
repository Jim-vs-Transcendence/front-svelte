import { writable } from "svelte/store";
import { getApi, petchApi, delApi, postApi } from "../service/api";
import { goto } from '$app/navigation';
import { browser } from '$app/environment';

function setAuth() {
    const isLogin = async () => {
        try {
            const getUserInfo = await getApi({path: '/user/sdfsdf'});
            return getUserInfo;
        }
        catch(error)
        {
            authToken.resetAuthToken();
        }
    }
    return {
        isLogin
    }
}

function setAuthToken() {
    let token: string | null;
    if (browser) {
        token = localStorage.getItem('authToken');
    }

    const { set } = writable(token);

    const login = async () => {
        try {
            const response = await getApi({ path: 'auth/login' });
            token = response.authToken;

            console.log(token); 
            // debug

            if (browser && token) {
                localStorage.setItem('authToken', token);
            }
            else {
                throw new Error('로그인 실패');
            }
            set(token);
            goto('/main');
        }
        catch(error) {
            alert("로그인 실패")
        }
    }

    const logout = async() => {
        try {
            await postApi({ path: 'user/logout', data: null});
            if (browser) {
                resetAuthToken();
            }
        }
        catch(error){
            alert('로그아웃 실패')
        }
    }

    const resetAuthToken = () => {
        set('');
        if (browser) {
            localStorage.removeItem('authToken');
        }
    }

    return {
        login,
        logout,
        resetAuthToken,
    }
}

export const auth = setAuth();
export const authToken = setAuthToken();