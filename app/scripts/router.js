import $ from 'jquery';
import Backbone from 'backbone';
import User from './models/user';
import Users from './collections/users';
import Squeaks from './collections/squeaks';
import LoginForm from './views/login';
import SignupForm from './views/signup';
import config from './config';
import MakePost from './views/squeakForm';
import SqueakPostList from './views/squeakList';
import Nav from './views/nav';
import NavContainer from './views/viewWithNav';
import ProfilePage from './views/profile';
import ProfilePosts from './views/profilePosts';


let user = new User();
let squeaks = new Squeaks();
let users = new Users();
let container = $('.container');

$(document).ajaxSend((e, xhr, opts) => {
  console.log('intercepted ajax request');

xhr.setRequestHeader('application-type', 'REST');
xhr.setRequestHeader('application-id', config.appId);
xhr.setRequestHeader('secret-key', config.secret);
xhr.setRequestHeader('user-token', user.get('user-token'));
});

const Router = Backbone.Router.extend({
  routes: {
    ''      : 'login',
    'signup': 'signup',
    'feed'  : 'feed',
    'profile/:id': 'profile'
  },
  login() {
if(user.get('user-token')) {
  this.navigate('feed', {trigger: true});
} else {
  container.empty();
  let loginForm = new LoginForm({model: user});
  let loginPage = new NavContainer({
    model: user,
    children: [loginForm]
  });
  loginPage.render();
  container.append(loginPage.el);
}
  },
  signup() {
if(user.get('user-token')) {
  this.navigate('feed', {trigger: true});
} else {
  container.empty();
  let signupForm = new SignupForm({model: user});
  let signupPage = new NavContainer({
    model: user,
    children: [signupForm]
  });
  signupPage.render();
  container.append(signupPage.el);
}
  },
  feed() {
if(!user.get('user-token')) {
  this.navigate('', {trigger: true});
} else {
  squeaks.fetch();
  squeaks.comparator = 'timestamp';
  container.empty();
  let makePost = new MakePost({
    collection: squeaks,
    model: user
  });
  let squeakPostList = new SqueakPostList({
    collection: squeaks,
  });
  let feedPage = new NavContainer({
    model: user,
    children: [makePost, squeakPostList]
  });
  feedPage.render();
  squeaks.on('update', squeakPostList.render.bind(squeakPostList));
  container.append(feedPage.el);
}
  },
  profile(id) {
    if(!user.get('user-token')) {
      this.navigate('', {trigger: true});
    } else {
      squeaks.fetch();
      squeaks.comparator = 'timestamp';
      // could not get this working, only getting undefined
      // users.fetch({url:  `https://api.backendless.com/v1/data/Users?where=` + escape(`ownerId='${id}'`)});
      // squeaks.fetch({url:  `https://api.backendless.com/v1/data/Users?where=` + escape(`ownerId='${id}'`)});
      container.empty();
    let profilePage = new ProfilePage({
      // id: id,
      model: user
    });
    let profilePosts = new ProfilePosts({
      collection: squeaks
    });
    let profileInfoPage = new NavContainer({
      model: user,
      children: [profilePage, profilePosts]
    });
    profileInfoPage.render();
    container.append(profileInfoPage.el);
    }
  }
});

export default new Router();
