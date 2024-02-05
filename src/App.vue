  <script setup>
  import { RouterLink, RouterView, useRouter } from 'vue-router'
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  </script>

  <template>
  <div class="background-image ">
      <div class="flex flex-col min-h-screen">
          <header class="flex-1">
              <div class="mb-16">
                <NavBar />
              </div>
              <div class="container justify-center items-center mx-auto">
                <RouterView />  
              </div>
              
          </header>
          <Footer />

      </div>
  </div>

  </template>

  <style scoped>
  .background-image {
      background-image: url("./assets/backgroundHomePageCameraPhoto.svg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: auto; 
  }
  </style>