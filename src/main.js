import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false


//全局守卫
//to 想要进入的页面
//from 从那个页面执行过来
//next 是否允许展示想要进入的页面
router.beforeEach((to,from,next) =>{
  if(to.path == '/Login' || to.path=='/'){
    next();
  }else{
    alert("请先登录");
    next('/'); 
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
