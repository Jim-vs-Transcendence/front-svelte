<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation'
  import { getApi } from '../service/api'
  import { auth, authToken } from '../service/store';
  
  //1. store.ts에 만들어질 isLogin함수 활용해서 로그인 여부 확인

  //2. 로그인 함수
  //promise<void> 비동기 함수가 변환하는 값 처리하는 객체(결과 반환 or 오류)
  const login = async (): Promise<void> => {
    try {
      //store 내 login 함수로 변경해야 함
      authToken.login();
    } catch (error) {
      console.log(error);
    }
  };

  let userInfo : any; //여기 any는 나중에 타입 정해지면 바꿔야 함

  onMount(async () => {
      try {
          userInfo = await auth.isLogin();
          goto('/main');
      }
      catch(error) {
          console.log("user not loggined");
      }
    }
  );
 
</script>

<button class="my-button" on:click={login}>기록 속으로...</button>

<style>
  .my-button {
    border: none;
    color: white;
    padding: 10px 20px; /* smaller padding */
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px; /* fixed width */
    height: 50px; /* fixed height */
  }
</style>