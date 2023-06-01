<script lang="ts">
    import UserLayout from "../../components/Auth/UserLayout.svelte";
    import { auth } from '../../service/store';
    import { onMount } from 'svelte';

    let userInfo : any; //여기 any는 나중에 타입 정해지면 바꿔야 함

    onMount(async () => {
        try {
            userInfo = await auth.isLogin();
            console.log(userInfo);
        }
        catch(error) {
            console.log(error);
        }
    });
</script>

<UserLayout />
<slot />