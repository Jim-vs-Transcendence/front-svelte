<script lang="ts">

  import ioClient from 'socket.io-client';
  
  // const ENDPOINT = 'http://localhost:3000/chat';

  // const socket = ioClient(ENDPOINT);

  let rooms_list : string [] = [];
  let room_name : string;
  
  // socket
  
  function onRoom() {
    console.log("It works");
    
    // Add your logic here to handle the room click event
  }

  function onAdd() {
    rooms_list = [...rooms_list, room_name];
    // const listWarp = document.querySelector('.listWrap');
    // const newRoom = document.createElement('.div');
    // newRoom.classList.add('room', 'after');
    // newRoom.onclick = onRoom;
    // listWarp.appendChild(newRoom);
  }

  function onRemove() {
    // rooms_list.indexOf("test").;/*  */
    rooms_list.pop();/*  */
    rooms_list = rooms_list;
  }

</script>
  
  <div class="wrap">
    <div class="w970">
      <!-- <h1>채팅방 리스트</h1> -->
    </div>
    <div class="listWrap">
          {#if rooms_list }
          {#each rooms_list as room_once}
              <div class="room after"> {room_once} </div>
          {/each}
          {/if }
      <!-- <div class="room after" onclick="onRoom()">1번 방</div> 
      <div class="room after" onclick="onRoom()">2번 방</div>
      <div class="room after" onclick="onRoom()">3번 방</div>
      <div class="room after" onclick="onRoom()">4번 방</div> -->
      <div class="btn_div" >
        <button class="chat_btn" type="button" on:click={onAdd}> add </button>
        <button class="chat_btn" type="button" on:click={onRemove}> remove</button>
        
        <!-- <input class="btn_class" type="button" value="add" onclick="add()" /> -->
        <!-- <input class="btn_class" style="align-items: center;" type="button" value="remove" /> -->
      </div>
      <div>
        <input type="text" bind:value={ room_name } >
      </div>
    </div>
  </div>
  
  <style>
    .chat_btn {
      background-color: #da8e7d;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 0px;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .chat_btn:hover {
      background-color: #8516da;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 0px;
      border-radius: 4px;
      margin-bottom: 10px;
    }

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
  