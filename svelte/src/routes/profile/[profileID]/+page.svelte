<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
	import { getApi } from '../../../service/api';
	const profileID = $page.params.profileID;

	//1. 서버에 profileID인 유저가 있는지 확인 및 본인인지 확인하고 정보 받아야 함
	// 1.5 받아올 정보는 2개 1. 유저정보 2. 게임 히스토리
	//2. 없는 유저면(아마 catch로 가겠지?) 메인으로 보내버리고,
	//3. 본인이면 투팩터 옵션, 본인 아니면 친구 관련 버튼 보이게

	let twoFactor = false;
	let isMyself = false;

	let profile_info;

	onMount(async () => {
		//1. token기반 

		//2. target user profile / isMyself가 false라면,
		profile_info = await getApi({ path: 'user/dhyun' });
		console.log(profile_info);
	});  

	function toggle() {
	}
</script>
  
<div class="container">
    <div class="left">
        <h2>사용자 기록</h2>
        <ul>
            <li>이름: {profileID}</li>
            <li>이런거: 25</li>
            <li>여러 정보들</li>
        </ul>
        <div class="grid">

			
			{#if isMyself === true}
				<label>
					<input type="checkbox" bind:checked={twoFactor} on:change={toggle} role="switch">
					{twoFactor ? '전자우편 인증 작동중' : '전자우편 인증 미작동중'}
				</label>
			{:else}
				<button class="button">동무 추가</button>
				<button class="button secondary">무참히 절교</button>
				<button class="button contrast">소통 끊기</button>
			{/if}


        </div>
    </div>
    <div class="line"></div>
    <div class="right">
        <h2>투쟁 정보</h2>
        <ul>
            <li>Match 1</li>
            <li>Match 2</li>
            <li>Match 3</li>
        </ul>
    </div>
</div>

<a href="/main" role="button" class="button">메인으로</a>


<style>  
.container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100vh;
}

.left {
	width: 50%;
	margin-right: 1rem;
	height: 100%;
}

.right {
	width: 50%;
	height: 100%;
}

.line {
	width: 1px;
	height: 100%;
	margin-right: 1rem;
	margin-left: 1rem;

	background-color: #ccc;
}

.button {
	padding: 5px 10px;
	font-size: 14px;
	border-radius: 3px;
	transition: background 1s;
}

.button:hover {
	background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
	color: white;
}
</style>
