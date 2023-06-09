<!-- 메인에서 게임으로 넘어오는 곳 -->

<script lang="ts">
    import { auth } from '../../service/store';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'
    import LoadingMessage from "../../components/Auth/LoadingMessage.svelte";
    import "../../service/userDTO";

    let userInfo : UserDTO;
    let isLoading : boolean = true;

    // 친구 불러오기 위함
    let friendList: UserDTO[] = [];


    onMount(async () => {
        try {
            userInfo = await auth.isLogin();
            if (!userInfo) {
                goto('/');
                throw("잘못된 접근");
            }
            isLoading = false;
        }
        catch(error) {
            alert("잘못된 접근");
            goto('/');
        }
    });
</script>

{#if isLoading === true}
    <LoadingMessage />
{:else}
	<!-- 사람이 없으면 기다리는 페이지로 이동시킴 -->
{/if}