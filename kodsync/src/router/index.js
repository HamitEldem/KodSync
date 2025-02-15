import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import CandidateOtp from '../views/CandidateOtp.vue';
import CodingEnvironment from '../views/CodingEnvironment.vue';
import InterviewerDashboard from '../views/InterviewerDashboard.vue';
import ForgotPassword from '../views/ForgotPassword.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/candidate-otp', component: CandidateOtp },
  { path: '/coding', component: CodingEnvironment },
  { path: '/dashboard', component: InterviewerDashboard },
  { path: '/forgot-password', component: ForgotPassword }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;