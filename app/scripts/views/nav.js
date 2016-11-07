import Backbone from 'backbone';

export default Backbone.View.extend({
  tagName: 'nav',
  template() {
    let navStuff = ``;
    if(this.model.get('user-token')) {
      navStuff += `
      <a href="#feed">Feed</a>
      <button type="button" class="logout">Logout</button>
      `;
    } else {
      navStuff += `
      <a href="#signup">Signup</a>
      <a href='#'>Login</a>
      `;
    }
    return navStuff;
  },
  render() {
    this.$el.append(this.template());
  },
  events: {
    'click .logout': 'handleLogout'
  },
  handleLogout() {
    this.model.logout();
  }
});
