<script lang="ts">
    export let profile_info: UserDTO;
    export let isMyself: boolean;
    function two_factor_toggle() {

	}
</script>


<h2>사용자 기록</h2>
<ul>
    <img src="{profile_info.avatar}" alt="인트라 프로필 아이디" width="150" height="150">
    <li>인트라 ID: {profile_info.id}</li>
    <li>닉네임 : {profile_info.nickname}</li>
    <li>승 : {profile_info.win}</li>
    <li>패 : {profile_info.lose}</li>
</ul>
<div class="grid">	
    {#if isMyself === true}
        <label>
            <input type="checkbox" bind:checked={profile_info.two_factor} on:change={two_factor_toggle} role="switch">
            {profile_info.two_factor ? '전자우편 인증 작동중' : '전자우편 인증 미작동중'}
        </label>
    {:else}
        <button class="button">동무 추가</button>
        <button class="button secondary">무참히 절교</button>
        <button class="button contrast">소통 끊기</button>
    {/if}
</div>

<style>

</style>