<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
	import { getApi } from '../../../service/api';
	import { auth } from '../../../service/store';
	import { goto } from '$app/navigation';

	const profileID = $page.params.profileID;

	import '../../../service/userDTO';
	import LoadingMessage from '../../../components/Auth/LoadingMessage.svelte';
	import UserProfile from '../../../components/Profile/UserProfile.svelte';

	//1. 서버에 profileID인 유저가 있는지 확인 및 본인인지 확인하고 정보 받아야 함
	// 1.5 받아올 정보는 2개 1. 유저정보 2. 게임 히스토리
	//2. 없는 유저면(아마 catch로 가겠지?) 메인으로 보내버리고,
	//3. 본인이면 투팩터 옵션, 본인 아니면 친구 관련 버튼 보이게

	let isLoading: boolean = true;

	let userInfo : UserDTO;
	let twoFactor = false;
	let isMyself = false;

	let profile_info : UserDTO;
	let profile_path : string;

	onMount(async () => {
		try{
			//1. token기반 
			userInfo = await auth.isLogin();
			//2. target user profile / isMyself가 false라면,
			profile_path = 'user/' + profileID;
			profile_info = await getApi({ path: profile_path });
			console.log(profile_info);
			
			//만약 본인 프로필에 들어갔다면
			if (userInfo.id === profileID) {
				isMyself = true;
				twoFactor = userInfo.two_factor;
			}
			isLoading = false;
		}
		catch(error){
			alert('오류 : 프로필을 출력할 수 없습니다2');
			goto('/main');
		}
	});  


</script>

{#if isLoading === true}
	<LoadingMessage />
{:else}
	<UserProfile {profile_info} {isMyself} />
{/if}



<style>  

</style>
