<script lang="ts">


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
