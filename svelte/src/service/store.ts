import { writable } from "svelte/store"
import { getApi, putApi, delApi, postApi } from "../service/api"
import { goto } from '$app/navigation'
import { onMount } from 'svelte';
import { browser } from '$app/environment';

/**
이 함수는 외부 라이브러리의 writable 함수를 사용하여 쓰기 가능한 저장소를 생성합니다.
저장소의 초기 값은 _id 속성을 빈 문자열로 가진 객체입니다.
이 함수는 세 가지 속성(subscribe, isLogin, resetUserInfo)을 가진 객체를 반환합니다.
isLogin 함수는 비동기 함수로, getApi 함수를 사용하여 /user 엔드포인트로 GET 요청을 보냅니다.
요청이 성공하면, 응답을 저장소의 값으로 설정합니다.
에러가 발생하면, resetUserInfo 함수를 호출합니다.
resetUserInfo 함수는 저장소의 값을 초기 값으로 설정합니다.
 */

function setAuth() {
    let initValues = {
        _id: '',
        email: '',
    }

    let values = {...initValues}

    const { set, update } = writable(values);

    const isLogin = async () => {
        try {
            const getUserInfo = await getApi({path: '/user'});
            set(getUserInfo)
        }
        catch(error) 
        {
            resetUserInfo();
            authToken.resetAuthToken();
        }
    }

    const resetUserInfo = () => {
        const newValues = {...initValues};
        set(newValues);
    }

    return {
        isLogin,
        resetUserInfo,
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
            const response = await getApi({ path: 'user/token' });
            console.log(response);
            token = response.key;

            console.log(token);
            // if (browser) {
            //     localStorage.setItem('authToken', token);
            // }
            // set(token);
            // goto('/main');
        }
        catch(error) {
            alert(error)
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
            alert('오류 발생 : 로그아웃')
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