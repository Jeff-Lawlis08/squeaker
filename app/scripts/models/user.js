import Backbone from 'backbone';
import $ from 'jquery';
import router from '../router';

export default Backbone.Model.extend({
  initialize() {
    if(window.localStorage.getItem('user-token')) {
      this.set('user-token', window.localStorage.getItem('user-token'));
      this.set('username', window.localStorage.getItem('username'));
      this.set('ownerId', window.localStorage.getItem('ownerId'));
      this.set('bio', window.localStorage.getItem('bio'));
      this.set('pic', window.localStorage.getItem('pic'));
      this.set('name', window.localStorage.getItem('name'));
    }
  },
  idAttribute: 'ownerId',
  defaults: {
    username: '',
    name: '',
    email: '',
    'user-token': ''
  },
  signup(name, username, email, password, bio, pic){
    this.save(
      {name, username, email, password, bio, pic},
    {
      url: 'https://api.backendless.com/v1/users/register',
      success: () => {
        this.login(email, password);
      }

    });
  },
  login(login, password){
    this.save(
      {login, password},
      {
        url: 'https://api.backendless.com/v1/users/login',
        success: () => {
          // console.log('response is '+response);
          this.set({login, password});
          window.localStorage.setItem('user-token', this.get('user-token'));
          window.localStorage.setItem('username', this.get('username'));
          window.localStorage.setItem('ownerId', this.get('ownerId'));
          window.localStorage.setItem('bio', this.get('bio'));
          window.localStorage.setItem('pic', this.get('pic'));
          window.localStorage.setItem('name', this.get('name'));
          router.navigate('feed', {trigger: true});
        }
    });
  },
  logout() {
    $.ajax({
      url: 'https://api.backendless.com/v1/users/logout',
      success: () => {
        this.clear();
        window.localStorage.clear();
        router.navigate('', {trigger: true});
      }
    });
  }
});
