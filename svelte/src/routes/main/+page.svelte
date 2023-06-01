<script lang="ts">
    import { auth } from '../../service/store';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'

    let userInfo : any; //여기 any는 나중에 타입 정해지면 바꾸는게 좋을 듯함

    onMount(async () => {
        try {
            userInfo = await auth.isLogin();
            if (userInfo == false)
                throw("잘못된 접근");
        }
        catch(error) {
            //토큰이 없거나, 유효하지 않다는 것을 의미
            alert("잘못된 접근");
            goto('.');
        }
    });

    const goChat = () => {
        //정보를 보낼때, contextAPI 활용하면 될 듯 함.
        const nickname = localStorage.getItem('userid'); //로컬스토리지에 저장된 키 값을 헤더에 붙여서 보낸다
        alert(nickname);
        const token = localStorage.getItem('authToken');
        alert(token);
    };
    const goGame = () => {
        //정보를 보낼때, contextAPI 활용하면 될 듯 함.
    };

</script>

<button class="outline" on:click={goChat}>말잇수다</button>
<button class="outline" on:click={goGame}>놀이</button>
