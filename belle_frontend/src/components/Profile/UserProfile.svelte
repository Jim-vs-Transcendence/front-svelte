<script lang="ts">
    export let profile_info: UserDTO;
    export let isMyself: boolean;

    import { page } from '$app/stores';
    import { onMount } from 'svelte';
	import { auth } from '../../service/store';
	import { goto } from '$app/navigation';

    // export let isFriend: boolean;
    let isFriend : boolean = true;
    let qr : any;
    let popQR : boolean = false;


    import { getApi, petchApi, postApi } from '../../service/api';

    // Two-factor toggle
    import { SlideToggle } from '@skeletonlabs/skeleton';

    let twoFactor : number;

    $: if (twoFactor >= 50) {
    if (!profile_info.two_factor) {
        two_factor_toggle();
        popQR = true;
        (async () => { qr = await postApi({ path: 'two-factor/generate', data:{} }); console.log(qr) })();

    }
    profile_info.two_factor = true;
  } else if (twoFactor < 50) {
    if (profile_info.two_factor) {
        two_factor_toggle();
        popQR = false;
    }
    profile_info.two_factor = false;
  }

    $: text = profile_info.two_factor ? '전자우편 인증 작동중' : '전자우편 인증 미작동중';

    async function two_factor_toggle() {
        if (twoFactor >= 50)
        {
            try {
                petchApi({ path: 'user/'+profile_info.id , data:{
                    two_factor: true
                },
            })
            } catch (error) {
                alert("설정 실패");
            }
        }
        else
        {
            try {
                petchApi( { path: 'user/'+profile_info.id , data:{
                    two_factor: false
                },
            })
            } catch (error) {
                alert("설정 실패")
            }
        }
        console.log(getApi({ path: 'user/'+profile_info.id }));

    }
    
    function close_qr() {
        popQR = false;
    }

    //투팩터 팝업 -> 구글어스 출력
    

    //프로필 사진 업로드
    import { FileButton } from '@skeletonlabs/skeleton';
    

    // 투팩터 초기 설정
    onMount(async () => {
		try{
			if (isMyself === true)
            {
                if (profile_info.two_factor === true)
                {
                    twoFactor = 100;
                }
                else
                {
                    twoFactor = 0;
                }
            }
		}
		catch(error){
			alert('오류 : 프로필을 출력할 수 없습니다');
			goto('/main');
		}
	});  
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
            {#if popQR === true}
                <div class="fixed inset-0 flex items-center justify-center z-50">
                    <div class="card p-4">
                        <h1>디스이즈 구-글 인증</h1>
                        <img src={qr} alt="QR코드" class="w-64 h-64 mb-4">
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <button type="button" class="btn variant-ghost" on:click={close_qr}>
                                닫기
                            </button>
                        </div>  
                    </div>
                </div>
            {/if}

            <!-- two-factor 인증 -->
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="flex items-center">
                <input type="range" bind:value={twoFactor} max="100" />
                <!-- <SlideToggle name="slide" bind:checked={profile_info.two_factor} on:click={two_factor_toggle} /> -->
                <span class="ml-2">
                    {text}
                </span>
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