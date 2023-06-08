<script lang="ts">
    let messageFeed = [ /* ... */ ];
    let currentMessage = '';
    let elemChat;
    function addMessage() {
      const newMessage = {
        id: messageFeed.length,
        host: true,
        avatar: 48,
        name: 'Jinwoole',
        timestamp: new Date(),
        message: currentMessage,
        color: 'variant-soft-primary'
      };
      messageFeed = [...messageFeed, newMessage];
      currentMessage = '';
      setTimeout(() => { elemChat.scrollTo({ top: elemChat.scrollHeight, behavior: 'smooth' }); }, 0);
    }
  </script>
  <div class="grid grid-cols-2 grid-rows-2 h-screen">
    <div class="col-start-1 col-end-2 row-start-1 row-end-2 overflow-y-auto" bind:this={elemChat}>
      {#each messageFeed as message (message.id)}
        <div class="p-4 rounded-lg bg-gray-800 text-white shadow mb-2">
          <div class="font-bold text-yellow-300">{message.name}</div>
          <div>{message.message}</div>
        </div>
      {/each}
    </div>
    <div class="col-start-1 col-end-2 row-start-2 row-end-3 p-4">
      <div class="flex items-center">
        <textarea
          bind:value={currentMessage}
          class="flex-grow p-2 rounded border shadow mr-2 bg-gray-200 text-gray-800"
          placeholder="Write a message..."
        ></textarea>
        <button class="btn variant-filled text-white bg-blue-600" on:click={addMessage}>Send</button>
      </div>
    </div>
  </div>