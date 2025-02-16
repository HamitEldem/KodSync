<script setup>
import { ref } from 'vue';

const selectedOption = ref('Dashboard');

const selectOption = (option) => {
  selectedOption.value = option;
};

const userList = ref([
  {
    name: "Serkan Genc",
    age: 25,
    datetime: "2024-01-01T12:00:00"
  },
  {
    name: "Ali Firat",
    age: 24,
    datetime: "2024-01-02T09:30:00"
  },
  {
    name: "Erkan Ucar",
    age: 26,
    datetime: "2024-01-03T15:45:00"
  },
  {
    name: "Serpil Tin",
    age: 27,
    datetime: "2025-05-01T11:20:00"
  },
  {
    name: "Engin Kirac",
    age: 28,
    datetime: "2025-05-02T14:10:00"
  },
  {
    name: "Hatice Yilmaz",
    age: 29,
    datetime: "2025-05-03T16:30:00"
  }
]);

function isUpcoming(date) {
  const now = new Date();
  const interviewDate = new Date(date);
  return now < interviewDate;
}
</script>

<template>
  <div class="interviewer-dashboard">
    <div class="mobile-warning">
      <h2>Please switch to desktop for the best experience</h2>
      <p>KodSync is optimized for desktop viewing</p>
    </div>
    <div class="content">
      <div id="left-bar">
        <div @click="selectOption('Dashboard')" :class="{ active: selectedOption === 'Dashboard' }">
          <p>Dashboard</p>
        </div>
        <div @click="selectOption('Sessions')" :class="{ active: selectedOption === 'Sessions' }">
          <p>Sessions</p>
        </div>
        <div @click="selectOption('Settings')" :class="{ active: selectedOption === 'Settings' }">
          <p>Settings</p>
        </div>
        <div id="new-session">
          <p><span>+</span>New Session</p>
        </div>
      </div>
      <div id="right-side">
        <div v-if="selectedOption === 'Dashboard'">
          <h1>Dashboard</h1>
          <p>Upcoming</p>
          <div class="sessionList" v-for="user in userList" v-if="userList.some(user => isUpcoming(user.datetime))">
            <span v-if="isUpcoming(user.datetime)">Interview with {{ user.name }}</span>
            <h4  class="dtime" v-if="isUpcoming(user.datetime)">Completed at {{ user.datetime }}</h4>
          </div>
          <h4 v-else>No upcoming interviews </h4>
          <p>Past</p>
          <div class="sessionList" v-for="user in userList" v-if="userList.some(user => !isUpcoming(user.datetime))">
            <span v-if="!isUpcoming(user.datetime)">Interview with {{ user.name }}</span>
            <h4  class="dtime" v-if="!isUpcoming(user.datetime)">Completed at {{ user.datetime }}</h4>
          </div>
          <h4 v-else>No past interviews </h4>
        </div>
        <div v-if="selectedOption === 'Sessions'">
          <!-- Add your Sessions content here -->

        </div>
        <div v-if="selectedOption === 'Settings'">
          <!-- Add your Settings content here -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.interviewer-dashboard {
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

#right-side{
  margin-top: 1.5rem;
  margin-left: 3rem;
}

.content {
  color: white;
  display: flex;
  gap: 0.5rem;
}

h4{
  font-weight: 450;
  color: #515151;
  margin-top: 0.5rem;

}

#left-bar {
  width: 20%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  margin-left: 2%;
  font-size: 20px;
  margin-top: 2rem;
  font-weight: 500;
}

#left-bar div {
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 12px;
}


template .sessionList span{
  font-size: 0.8rem;
}

.sessionList{
  margin-top: 1.5rem;
}

#new-session {
  background-color: #2ECC71;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  width: 18%;
  margin-left: 2%;
}

#right-side p {
  margin-top: 1.5rem;
  font-weight: bold;
  font-size: 1.2rem;

}

#new-session:hover {
  background-color: #27AE60;
}

p span {
  font-size: 25px;
  margin-right: 10px;
  line-height: 20px;
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

.active {
  background-color: #333;
}
</style>