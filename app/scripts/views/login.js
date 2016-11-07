import $ from 'jquery';
import Backbone from 'backbone';

const LoginForm = Backbone.View.extend({
  tagName: 'form',
  className: 'login-form',
  template() {
    return `
    <input class="email" type="email" placeholder="email">
    <input class="password" type="password" placeholder="password">
    <input class="submit" type="submit" value="Login">
    Not a member? <a href="#signup">Signup Here!</a>
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
    const email = this.$('.email').val();
    const password = this.$('.password').val();
    console.log(email, password);
    this.model.login(email, password);
  }
});
// });
export default LoginForm;
