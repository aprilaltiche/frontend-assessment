<template>
    <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-lg font-bold">
        MyApp
      </div>
      <div class="hidden md:flex space-x-4">
        <router-link
          to="/"
          class="text-white hover:text-gray-200"
          active-class="underline"
        >
        Excercise #1
        </router-link>
        <router-link
          to="/mytabs"
          class="text-white hover:text-gray-200"
          active-class="underline"
        >
          Excercise #2
        </router-link>
      </div>
      <!-- Hamburger Menu for Mobile -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    
  </nav>  
</template>
<script>

export default {
    name: 'NavigationComponent',
    }
</script>