<script lang="ts">
    export let profile_info: UserDTO;
    export let isMyself: boolean;
    // export let isFriend: boolean;
    let isFriend : boolean = true;

    import { petchApi } from '../../service/api';

    // Two-factor toggle
    import { SlideToggle } from '@skeletonlabs/skeleton';
    async function two_factor_toggle() {
        const tmp = await petchApi('user/'+profile_info.id, 0);
        console.log(tmp);
    }

    //프로필 사진 업로드
    import { FileButton } from '@skeletonlabs/skeleton';
    
</script>

<div class="card p-4 flex flex-col items-center">
    <img src="{profile_info.avatar}" alt="인트라 프로필" class="w-48 h-48 rounded-full mb-4">
    <FileButton name="files" />
    <ul class="text-center">
      <li class="text-lg font-bold">인트라 ID: {profile_info.id}</li>
      <li class="text-lg font-bold">닉네임 : {profile_info.nickname}</li>
    </ul>
</div>


<!-- two-factor 혹은 친구 -->
<div class="grid">	
    {#if isMyself === true}
        <label>
            <!-- two-factor 인증 -->
            <label class="flex items-center">
                <SlideToggle name="slide" bind:checked={profile_info.two_factor} on:click={two_factor_toggle} />
                <span class="ml-2">{profile_info.two_factor ? '전자우편 인증 작동중' : '전자우편 인증 미작동중'}</span>
              </label>
        </label>
    {:else}
        <div class="flex justify-center pt-4">
            <div class="btn-group variant-filled mx-auto inline-flex">
            {#if isFriend === true}
                <button class="flex-1">무참히 절교</button>
            {:else}
                <button class="flex-1">동무 추가</button>
                <button class="flex-1">검열</button>
            {/if}
            </div>
        </div>
    {/if}
</div>


<style>

</style>