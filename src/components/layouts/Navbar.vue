<script setup>
// Navbar fixed when scroll
window.onscroll = function(){
    const header = document.querySelector("#header")
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Component
import Logo from "./Logo.vue";
// import UserInfo from "./UserInfo.vue";
import AuthButton from "./AuthButton.vue";
import NavigationLink from "./NavigationLink.vue";

</script>

<template>
    <!-- Navigation Bar -->
    <nav id="header" class="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 absolute z-10 w-full">
        <div class="container flex flex-wrap items-center justify-between mx-auto my-2 relative">

            <Logo />
            <!-- <UserInfo /> -->
            <AuthButton />
            <NavigationLink />

        </div>
    </nav>
</template>

<style scoped>
.navbar-fixed {
  position: fixed;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
}
</style>