<script lang="ts">
  import { authToken } from '../../service/store';
  import '../../service/userDTO';
  export let userInfo: UserDTO ;

const logout = () => {
  authToken.logout()
};

</script>

<div>
    <nav>
      <ul>
        <li><strong>내 이름은 {userInfo.id}</strong></li>
      </ul>
      <ul>
        <li><button on:click={logout}>로그아웃</button></li>
        <li><button >홈</button></li>
      </ul>
    </nav>
</div>
  
  <div>
    <figure>
      <ul>
        <li><a href="/profile/Nickname1">Nickname1 </a></li>
        <li><a href="/profile/jinwoole">jinwoole</a></li>
        <li><a href="/profile/Whatever">Whatever</a></li>
      </ul>
    </figure>
  </div>
  
  <style>
 
  </style>
  