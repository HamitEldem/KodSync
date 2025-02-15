<script setup>
import { ref } from 'vue';

const otp = ref(0);
const count = ref(0);

function handleOtp(e) {
  if (e.target.value.length === 1 && count.value < 3 && parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 9) {
    e.target.nextElementSibling.focus();
    count.value++;
    otp.value = otp.value * 10 + parseInt(e.target.value);
    console.log(otp.value);
  }   
  if (e.key === "Backspace" && count.value > 0) {
    count.value--;
    e.target.previousElementSibling.focus();
    otp.value = Math.floor(otp.value / 10);
    e.target.previousElementSibling.value = '';
  }

}
</script>

<template>
  <div class="candidate-otp">
    <div class="mobile-warning">
      <h2>Please switch to desktop for the best experience</h2>
      <p>KodSync is optimized for desktop viewing</p>
    </div>
    <div class="header">
      <div class="name">
        <router-link to="/" class="home">
          <h2>KodSync</h2>
        </router-link>
      </div>

    </div>
    <div class="line">

    </div>
    <div class="content">
      <h1>Join as Candidate</h1>
      <div id="credentials">
        <div class="user-input">
          <h3>
            Name
          </h3>
          <input type="text" name="name" id="name" placeholder="Jane">
        </div>
        <div class="user-input">
          <h3>
            Surname
          </h3>
          <input type="text" name="surname" id="surname" placeholder="Doe">
        </div>
      </div>
      <h1>Enter the code to join the interview</h1>
      <div id="otp">
        <input type="text" maxlength="1" v-for="n in 4" @keyup="handleOtp">
      </div>
      <div id="join-btn">
          <button>
            
            Join Interview

          </button>
      </div>


    </div>

  </div>
</template>

<style scoped>
.candidate-otp {
  width: 100%;
  background-color: #121714;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #121714;
  z-index: 100;
  color: #fff;
}

.name {
  margin: 0;
  font-size: 1.5rem;
  padding-top: 15px;

}

h2 {
  font-size: 1.5rem;
}

.line {
  border: 1px solid white;
  width: 97%;
  margin: 0 auto;
  margin-top: 0.1rem;
  position: relative;
}

.content {
  color: white;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
}

.content h1 {
  margin: 0 auto;
  font-size: 24px;
  margin-bottom: 1.5rem;
}

#join-btn {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #14B859;
  border-radius: 12px;
  width: 25%;

  margin-top: 2.5rem;
}

#join-btn button {
  background-color: inherit;
  border: none;
  color: black;
  font-size: 15px;
  padding: 0.8rem 2rem;
  border-radius: 12px;
}



h3 {
  font-size: 15px;
  font-weight: normal;
  margin-left: 0.2rem;
}

.user-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: auto 1.3rem;
  margin-top: 0.2rem;
  width: 25%;
  text-align: left;
  margin-bottom: 1.2rem;
}

.user-input input {
  padding: 0.8rem;
  border: 1px solid #656565;
  border-radius: 12px;
  background-color: #3D5445;
  color: white;

}

#reset-btn {
  padding: 0.5rem 50%;
  margin: 1.8rem auto;
  width: 25%;
  background-color: #14B859;
  border-radius: 12px;
  color: black;
  text-align: center;
  display: flex;
  justify-content: center;
}

button {
  background-color: inherit;
  border: none;
  color: black;
  font-size: 15px;

  white-space: nowrap;
}

#reset-btn:hover {
  color: black;
  cursor: pointer;
  background-color: #12a24e;
}



a h2 {
  color: white;
  text-decoration: none;
}

a {
  text-decoration: none;
}

#otp {
  display: flex;
  gap: 1rem;
  border-radius: 12px;
  justify-content: center;

}

#otp input {
  padding: 0.8rem;
  border: 1px solid #656565;
  border-radius: 12px;
  background-color: #3D5445;
  color: white;
  width: 3%;
  font-size: 18px;
  text-align: center;

}

#credentials {
  display: flex;
  margin: 0 auto;
  margin-top: 0.2rem;
  width: 50%;
  text-align: left;
  margin-bottom: 1.2rem;
  justify-content: center;
}

/* Mobile warning */
.mobile-warning {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #121714;
  color: white;
  z-index: 1000;
  text-align: center;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Media Queries */
@media screen and (max-width: 768px) {
  .mobile-warning {
    display: flex;
  }

  .header {
    padding: 0.8rem 1.5rem;
  }


}

/* Desktop Responsiveness */
@media screen and (min-width: 769px) and (max-width: 1200px) {
  #slogan {
    font-size: 1.2rem;
  }

  #main-img {
    width: 45%;
    height: 350px;
  }

  .otp-btn {
    font-size: 20px;
    padding: 0.8rem 2rem;
  }
}

/* Tablet Responsiveness */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .content {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  #main-img {
    width: 70%;
    height: 280px;
  }

  #slogan {
    width: 100%;
  }

  .bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  #context {
    width: 70%;
    margin: 0 auto 0.5rem;
  }

  .header {
    padding: 1rem 2rem;
  }

  .otp-btn {
    margin: 0 auto;
  }
}
</style>
