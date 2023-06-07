<!-- auth : 토큰 발급을 위한 임시 페이지 -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'
    import { authToken } from '../../../../service/store';
    import { page } from '$app/stores';
    import LoadingMessage from '../../../../components/Auth/LoadingMessage.svelte';
    const id = $page.params.id;
    let authKey : string;

    const handleSubmit = async () => {
  };
 

</script>

<div class="container">
    <div class="card p-4">
      <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
        <input type="search" placeholder="인증키" bind:value={authKey} />
        <button class="variant-filled-secondary" on:click={handleSubmit}>제출</button>
      </div>
    </div>
</div>

<style>
    .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }
</style>








