<template>
	<div id="header_menu">
    <span>
      <img height="16px" style="margin-top: -5px; margin-right: 5px; vertical-align: middle;" src="/favicon.png">
      <span>Techhair</span>
    </span>
    <RouterLink to="/product"><span class="menu_item"><img src="/cut.svg"><span>Hjem</span></span></RouterLink>
    <RouterLink to="/calender"><span class="menu_item"><img src="/calendar.svg"><span>Kalender</span></span></RouterLink>
    <RouterLink to="/orders"><span class="menu_item"><img src="/orders.svg"><span>Order</span></span></RouterLink>

    <RouterLink to="/" style="margin-left: auto; margin-right: 10px;"><span class="menu_item"><img src="/logout.svg"><span>Logout</span></span></RouterLink>
    
	</div>
</template>

<style>
  #header_menu{
    display: flex;
    gap: 20px;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 40px;
    padding-left: 10px;
    background-color: rgba(103, 161, 106, 0.329);
    margin: 0px;
  }

  .menu_item {
    padding-top: 5px;
    display:flex;
    align-items: center;
    flex-direction:column;
    color: white;

    font-size: 10px;
  }

  .menu_item img {
    height: 14px;
  }

</style>