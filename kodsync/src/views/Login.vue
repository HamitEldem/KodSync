<script setup>

</script>

<template>
  <div class="login">
    <div class="mobile-warning">
      <h2>Please switch to desktop for the best experience</h2>
      <p>KodSync is optimized foor desktop viewing</p>
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
      <h1>Log in to KodSync</h1>
      <div class="user-input">
        <h3>
          Email
        </h3>
        <input type="text" name="e-mail" id="e-mail" placeholder="jane_doe@example.com">
      </div>
      <div class="user-input">
        <h3>
          Password
        </h3>
        <input type="password" name="passwd" id="passwd">
        <div id="login-btn">
          <button>

            Log in

          </button>
        </div>
        <div class="foot-links">
          <router-link to="/forgot-password" class="forgot-password">Forgot Your Password?</router-link>
        </div>
        <div class="foot-links">
          <router-link to="/signup" class="signup">Don't have an account?</router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.login {
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

h3 {
  font-size: 15px;
  font-weight: normal;
  margin-left: 0.2rem;
}

.user-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 auto;
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

#login-btn {
  padding: 0.5rem 50%;
  margin: 1.8rem auto;
  width: 50%;
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

#login-btn:hover{
  color: black;
  cursor: pointer;
  background-color: #12a24e;
}

.foot-links {
  margin: 0 auto;
  margin-top: 0.5rem;
  color: gray;
  text-decoration: none;
}

.foot-links a {
  color: gray;
  text-decoration: none;
}

a h2{
  color: white;
  text-decoration: none;
}

a{
    text-decoration: none;
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
