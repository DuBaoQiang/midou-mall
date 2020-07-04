import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '../router/index';
import Cookies from 'js-cookie';
import store from '../store/index'

Nprogress.configure({showSpinner: true});

const whiteList = ['/login', '/regest'];

router.beforeEach((to, from, next) => {

  Nprogress.start();
  //to and from are Route Object,next() must be called to resolve the hook}
  if (store.getters.token) {
    if (to.path === '/login') {
      next({name: 'Login'})
      Nprogress.done()
    } else {
      // if userInfo is null or undefined
      if (!store.getters.token) {
        // request user info again
        next()
      } else {
        next()
      }
    }
  }
});

router.afterEach( route => {
  //these hooks do not get a next function and cannot affect the navigation}
  Nprogress.done();
});
