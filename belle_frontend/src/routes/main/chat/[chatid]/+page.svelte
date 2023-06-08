<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
	import { getApi } from '../../../../service/api';
	import { auth } from '../../../../service/store';
	import { goto } from '$app/navigation';

	const profileID = $page.params.profileID;

	import '../../../service/userDTO';
	import LoadingMessage from '../../../../components/Auth/LoadingMessage.svelte';

	//1. 서버에 profileID인 유저가 있는지 확인 및 본인인지 확인하고 정보 받아야 함
	// 1.5 받아올 정보는 2개 1. 유저정보 2. 게임 히스토리
	//2. 없는 유저면(아마 catch로 가겠지?) 메인으로 보내버리고,
	//3. 본인이면 투팩터 옵션, 본인 아니면 친구 관련 버튼 보이게

	let isLoading: boolean = true;
	let userInfo : UserDTO;

	onMount(async () => {
		try{
			//1. token기반 
			userInfo = await auth.isLogin();


			//2. target user profile / isMyself가 false라면,
			isLoading = false;
		}
		catch(error){
			alert('잘못된 접근');
			goto('/');
		}
	});  


</script>

{#if isLoading === true}
	<LoadingMessage />
{:else}
fdfdfdfd

{/if}



<style>  

</style>
