import {createMemoryHistory, createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Layout from '../layout/index.vue'
import AboutView from "@/views/about/AboutView.vue";
import EditDocView from "@/views/document/EditDocView.vue";
import ReviewDocView from "@/views/document/RevDocListView.vue";
import MusicPlayView from "@/views/play/MusicPlayView.vue";



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children:[
      {
        path: '',
        name: '首页',
        component: () => import('@/views/home/HomeView.vue')
      },
      {
        path: '/about',
        name: '关于',
        component: AboutView
      },{
        path: '/editDoc',
        name: '编辑文档',
        component: EditDocView
      },{
        path: '/viewDoc',
        name: '查看文档',
        component: ReviewDocView
      },{
        path: '/music',
        name: '音乐',
        component: MusicPlayView
      }

    ]
  },

]

const router = createRouter({

  history: createWebHashHistory(),
  routes
})

export default router
