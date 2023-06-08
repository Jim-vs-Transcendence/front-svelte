<script lang="ts">
    // import { page } from '$app/stores';
    // import { onMount } from 'svelte';
	// import { getApi } from '../../../../service/api';
	// import { auth } from '../../../../service/store';
	// import { goto } from '$app/navigation';

	// const profileID = $page.params.profileID;

	// import '../../../service/userDTO';
	// import LoadingMessage from '../../../../components/Auth/LoadingMessage.svelte';

	// //1. 서버에 profileID인 유저가 있는지 확인 및 본인인지 확인하고 정보 받아야 함
	// // 1.5 받아올 정보는 2개 1. 유저정보 2. 게임 히스토리
	// //2. 없는 유저면(아마 catch로 가겠지?) 메인으로 보내버리고,
	// //3. 본인이면 투팩터 옵션, 본인 아니면 친구 관련 버튼 보이게

	// let isLoading: boolean = true;
	// let userInfo : UserDTO;

	// onMount(async () => {
	// 	try{
	// 		//1. token기반 
	// 		userInfo = await auth.isLogin();


	// 		//2. target user profile / isMyself가 false라면,
	// 		isLoading = false;
	// 	}
	// 	catch(error){
	// 		alert('잘못된 접근');
	// 		goto('/');
	// 	}
	// });  

	let messageFeed = [ /* ... */ ];
    let currentMessage = '';
    let elemChat;
    function addMessage() {
      const newMessage = {
        id: messageFeed.length,
        host: true,
        avatar: 48,
        name: 'Jinwoole',
        timestamp: new Date(),
        message: currentMessage,
        color: 'variant-soft-primary'
      };
      messageFeed = [...messageFeed, newMessage];
      currentMessage = '';
      setTimeout(() => { elemChat.scrollTo({ top: elemChat.scrollHeight, behavior: 'smooth' }); }, 0);
    }

</script>

<!-- {#if isLoading === true}
	<LoadingMessage />
{:else} -->
  <div class="grid grid-cols-2 grid-rows-2 h-screen">
    <div class="col-start-1 col-end-2 row-start-1 row-end-2 overflow-y-auto" bind:this={elemChat}>
      {#each messageFeed as message (message.id)}
        <div class="p-4 rounded-lg bg-gray-800 text-white shadow mb-2">
          <div class="font-bold text-yellow-300">{message.name}</div>
          <div>{message.message}</div>
        </div>
      {/each}
    </div>
    <div class="col-start-1 col-end-2 row-start-2 row-end-3 p-4">
      <div class="flex items-center">
        <textarea
          bind:value={currentMessage}
          class="flex-grow p-2 rounded border shadow mr-2 bg-gray-200 text-gray-800"
          placeholder="Write a message..."
        ></textarea>
        <button class="btn variant-filled text-white bg-blue-600" on:click={addMessage}>Send</button>
      </div>
    </div>
  </div>

<!-- {/if} -->