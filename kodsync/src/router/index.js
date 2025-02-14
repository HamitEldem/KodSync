import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import CandidateOtp from '../views/CandidateOtp.vue';
import CodingEnvironment from '../views/CodingEnvironment.vue';
import InterviewerDashboard from '../views/InterviewerDashboard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/candidate-otp', component: CandidateOtp },
  { path: '/coding', component: CodingEnvironment },
  { path: '/dashboard', component: InterviewerDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;