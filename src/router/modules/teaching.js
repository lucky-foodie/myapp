import tindex from '@/views/teaching/index.vue';
import tsucceed from '@/views/teaching/succeed.vue';
import tfiltrate from '@/views/teaching/filtrate.vue';
import tdetails from '@/views/teaching/details.vue';
import tstudio from '@/views/teaching/studio.vue';
import thome from '@/views/teaching/home.vue';
const childrenn = [
  {
    path: '/tindex',
    component: tindex,
    redirect: '/tfiltrate',
    children: [
      {
        path: '/tsucceed',
        component: tsucceed,
      },
      {
        path: '/tfiltrate',
        component: tfiltrate,
      },
      {
        path: '/tdetails',
        component: tdetails,
      },
      {
        path: '/tstudio',
        component: tstudio,
      },
    ],
  },
  {
    path: '/',
    component: thome,
  },
];
export default childrenn;
