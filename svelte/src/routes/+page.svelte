<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation'
  import { getApi } from '../service/api'
  import { auth, authToken } from '../service/store';
  
  //1. store.ts에 만들어질 isLogin함수 활용해서 로그인 여부 확인

  //2. 로그인 함수
  // 42auth로 연결해서 로그인 후, main으로 가게 됨. 만약 로그인 실패했으면, main에서 다시 돌아오게 됨
  const login = async () => {
    await goto("http://43.202.12.31:3000/auth/login");
  };

  let userInfo : any; //여기 any는 나중에 타입 정해지면 바꿔야 함

  onMount(async () => {
      try {
          userInfo = await auth.isLogin();
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