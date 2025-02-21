<template>
  <div class="nav-container">
    <ul class="nav-bar" ref="navBar">
      <li>
        <router-link to="/" :class="$route.path === '/' ? 'active' : ''"
          >首頁</router-link
        >
      </li>
      <li>
        <router-link
          to="/products"
          :class="$route.path === '/products' ? 'active' : ''"
          >全部商品</router-link
        >
      </li>
      <li>
        <router-link
          to="/order"
          :class="$route.path === '/order' ? 'active' : ''"
          >我的訂單</router-link
        >
      </li>
      <li>
        <router-link
          to="/contact"
          :class="$route.path === '/contact' ? 'active' : ''"
          >聯絡我們</router-link
        >
      </li>
    </ul>
  </div>
</template>
