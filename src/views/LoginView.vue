<script setup>
import { ref, onMounted } from 'vue'
import Message from '@/components/Message.vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const loginForm = Object();
loginForm.remember = true;

function notImplemented() {
  alert('not implemented');
}

function submit() {
  if (loginForm.username === undefined) {
    router.push('/product');
  } else if (loginForm.username === "admin") {
    router.push('/admin');
  } else {
    alert("unknown user");
  }
}

</script>

<template>
  <div id="center2">
  <div id="center">
    <header>
      <center><img alt="Techhair logo" class="logo" src="/favicon.png" width="125" height="125" /></center>

      <div class="wrapper">
        <Message title="Velkommen til Techhair" msg="Du er nu mere en velkommen til at logge ind" />
      </div>
    </header>

    <main>
      <form @submit.prevent="submit">
        <div class="container">
          <label for="uname"><b>Brugernavn</b></label>
          <input type="text" placeholder="Skriv dit brugernavn" name="uname" v-model="loginForm.username">

          <label for="psw"><b>Adgangskode</b></label>
          <input type="password" placeholder="Skriv din adgangskode" name="psw" v-model="loginForm.password">

          <button type="submit">Login</button>
          <label>
          <input type="checkbox" name="remember" v-model="loginForm.remember"> Husk Mig
          </label>
          
          <span style="padding-left: 20px;"><RouterLink to="/user">I am a Legend</RouterLink></span>
          <span class="psw">Glemt din <a @click="notImplemented">adgangskode?</a></span>

          <div style="clear:both"></div>
        </div>
      </form>
    </main>
  </div>
  </div>
</template>

<style scoped>
#center {
  display: block;
  max-width: 1000px;
  margin: 20px;
}
#center2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
header {
  line-height: 1.5;
  padding-bottom: 20px;
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.logo {
  display: block;
  margin: 0 2rem 0 0;
}

/* Bordered form */
form {
  border: 5px solid #34495e;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #34495e;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
}

@media (max-width: 600px) {
  header {
    display: block;
    padding-right: 0px;
  }
}

</style>