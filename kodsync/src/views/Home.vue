<script setup>
// Component imports and logic will go here
</script>

<template>
  <div class="home">
    <div class="mobile-warning">
      <h2>Please switch to desktop for the best experience</h2>
      <p>KodSync is optimized for desktop viewing</p>
    </div>
    <div class="header">
        <div class="name">
            <h3>KodSync</h3>
        </div>
        <div class="login-signup">
            <router-link to="/login" class="login">Login</router-link>
            <router-link to="/signup" class="signup">Signup</router-link>
        </div>
    </div>
    <div class = "line">

    </div>
    <div class="content">
        <div id="main-img">

        </div>
        <div id="slogan">
            <h1>Conduct Real-Time</h1>
            <h1>Coding Interviews</h1>
            <h1>Effortlesly.</h1>
        </div>
    </div>
    <div class="bottom-line"></div>
    <div class="bottom-content">
        <div>
            <div>
                <h1>
                    Why KodSync?
                </h1>
            </div  id = "p-container">
                <p id="context">
                    Traditional coding interviews are time-consuming and cumbersome. 
                    KodSync streamlines the  process so you can focus on what matters most—finding the right talent for your team.
                </p>
            
        </div>
        <div class="otp-btn">
            <router-link to="/candidate-otp" class="candidate-otp">Join an interview as candidate</router-link>
        </div>
        <div>

        </div>
        
    </div>
    <div class="final-line"></div>
    <div class="footer">
        <p>Sync, Code, Hire ✅</p>
    </div>
  </div>
</template>

<style scoped>
  

    .home{
        width: 100%;
        background-color: #121714;
        min-height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    *{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    }
    .header{
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
    .name{
        margin: 0;
        font-size: 1.5rem;
        padding-top: 15px;
    }
    .login-signup{
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }
    .login, .signup {
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 12px;
        transition: all 0.3s ease;
    }
    .login {
        color: #000;
        background-color: #14B859;
    }
    .signup {
        color: white;
    }
    .login:hover {
        background-color: #f5f5f5;
    }
    .signup:hover {
        background-color: #e05e00;
    }
    .line{
        border: 1px solid white;
        width: 97%;
        margin: 0 auto;
        margin-top: 1rem;
        position: relative;
    }
    .content{
        display: flex;
        justify-content: space-between;
        padding: 1rem 5%;
        margin-top: 1.5rem;
        position: relative;
        min-height: 350px;
    }
    #main-img {
        background-image: url('../images/main-img.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 45%;
        height: 320px;
        border-radius: 12px;
        position: relative;
    }
    #slogan{
        color: white;
        width: 45%;
        font-size: 1.5rem;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .bottom-line {
        border-top: 2px solid white;
        width: 97%;
        margin: 1rem auto;
        position: relative;
    }
    .bottom-content{
        position: relative;
        padding: 1rem 5%;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .otp-btn {
        position: relative;
        font-size: 24px;
        background-color: #14B859;
        font-weight: 500;
        padding: 0.6rem 2rem;
        border-radius: 12px;
        transition: all 0.3s ease;
        margin-left: auto;
        margin-right: 5rem;
    }

    .candidate-otp {
        text-decoration: none;
        color: #000;
    }

    .otp-btn a{
        text-decoration: none;
        color: #000;
    }

    .otp-btn:hover{
        background-color: #f5f5f5;
    }

    #context{
        max-width: 500px;
        width: 100%;
        margin-bottom: 1rem;
        line-height: 1.4;
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

        .login-signup {
            gap: 0.4rem;
        }

        .login, .signup {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
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

    .final-line {
        border-top: 2px solid white;
        width: 97%;
        margin: 0.5rem auto;
        position: relative;
    }

    .footer {
        color: white;
        text-align: center;
        padding: 0.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        position: relative;
        margin-top: 0.5rem;
    }

    
</style>
