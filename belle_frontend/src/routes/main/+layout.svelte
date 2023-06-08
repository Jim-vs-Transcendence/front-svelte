<script lang="ts">
    import UserLayout from "../../components/Auth/UserLayout.svelte";
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
            //여기는 친구 리스트 로딩해야 함
            friendList = [
                
            ];

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
    <UserLayout {userInfo}, {friendList}/>
    <slot />
{/if}