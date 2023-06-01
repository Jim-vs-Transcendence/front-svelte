<script lang="ts">
    import UserLayout from "../../components/Auth/UserLayout.svelte";
    import { auth } from '../../service/store';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'

    let userInfo : any; //여기 any는 나중에 타입 정해지면 바꾸는게 좋을 듯함

    onMount(async () => {
        try {
            userInfo = await auth.isLogin();
            if (userInfo == false)
                throw("잘못된 접근");
            console.log(userInfo);
        }
        catch(error) {
            //토큰이 없거나, 유효하지 않다는 것을 의미
            alert("잘못된 접근");
            goto('.');
        }
    });
</script>

{#if userInfo === true}
  <UserLayout />
  <slot />
{/if}