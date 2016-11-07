import $ from 'jquery';
import Backbone from 'backbone';

const SignupForm = Backbone.View.extend({
  tagName: 'form',
  className: 'signup-form',

  template() {
    return `
    <input class="name" type="text" placeholder="Your Name">
    <input class="username" type="text" placeholder="Your Username">
    <input class="email" type="email" placeholder="Email">
    <input class="password" type="password" placeholder="Password">
    <textarea class="bio" placeholder="Tell us about yourself!"></textarea>
    <textarea class="picture" placeholder="Photo URL"></textarea>
    <input class="submit" type="submit" value="Signup">
    Already a member?<a href="#">Login Here</a>
    `;
  },
  render() {
    this.$el.append(this.template());
  },
  events: {
    'submit': 'handleSubmit'
  },
  handleSubmit(e) {
    e.preventDefault();
    const name = this.$('.name').val();
    const username = this.$('.username').val();
    const email = this.$('.email').val();
    const password = this.$('.password').val();
    const bio = this.$('.bio').val();
    const pic = this.$('.picture').val();
    console.log(name, username, email, password, bio);
    this.model.signup(name, username, email, password, bio);
  }
});

export default SignupForm;
