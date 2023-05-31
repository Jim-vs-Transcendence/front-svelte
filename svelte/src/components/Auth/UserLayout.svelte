<div class="container">
    <nav>
      <ul>
        <li><strong>우리팀 잘한다</strong></li>
      </ul>
      <ul>
        <li><a href="/main">로그아웃</a></li>
        <li><a href="/main" role="Home">홈</a></li>
      </ul>
    </nav>
  </div>
  
  <div class="sidebar">
    <ul>
      <li><a href="/profile/Nickname1">Nickname1 </a></li>
      <li><a href="/profile/jinwoole">jinwoole</a></li>
      <li><a href="/profile/Whatever">Whatever</a></li>
    </ul>
  </div>
  
  <style>
    .container {
      position: relative;
      z-index: 1;
      border-bottom: 1px solid black;
    }
  
    .sidebar {
      position: fixed;
      top: 70px;
      right: 0;
      width: 200px;
      height: 100%;
      overflow-x: hidden;
      padding-top: 20px;
      border-right: 1px solid black;
      border-left: 1px solid black;
    }
  
    .sidebar ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  
    .sidebar li a {
      display: block;
      color: #000;
      padding: 8px 16px;
      text-decoration: none;
    }
  
    .sidebar li a:hover {
      background-color: #555;
      color: white;
    }
  </style>
  