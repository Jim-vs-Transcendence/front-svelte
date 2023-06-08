<script lang="ts">

  import ioClient from 'socket.io-client';
      
  
      const ENDPOINT = 'http://localhost:3000/chat';
  
      const socket = ioClient(ENDPOINT);
  
    let chatting_list : string [];
    
    socket
    
    function onRoom() {
      console.log("It works");
      // Add your logic here to handle the room click event
    }
  </script>
  
  <div class="wrap">
    <div class="w970">
      <!-- <h1>채팅방 리스트</h1> -->
    </div>
    <div class="listWrap">
          {#if chatting_list }
          {#each chatting_list as ct_room}
              <div> {ct_room} </div>
          {/each}
          {/if }
      <!-- <div class="room after" onclick="onRoom()">1번 방</div> 
      <div class="room after" onclick="onRoom()">2번 방</div>
      <div class="room after" onclick="onRoom()">3번 방</div>
      <div class="room after" onclick="onRoom()">4번 방</div>-->
      <div class="btn_div">
        <input type="button">
      </div>
    </div>
  </div>
  
  <style>
  
    .wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f1f1f1;
    }
  
    .listWrap {
      max-width: 100%;
      width: 80%;
      height: 80%;
      max-height: 80%; /* Adjust the maximum height as needed */
      overflow-y: auto; /* Enable vertical scrolling */
    }
  
    .room {
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  
    .room:hover {
      box-shadow: 0 2px 4px #d91a1adf;
    }
  </style>
  
  