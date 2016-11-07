import $ from 'jquery';
import Backbone from 'backbone';

const ProfilePage = Backbone.View.extend({

//   initialize(opts) {
//     // this.id = opts.id;
//   },
  tagName: 'div',
  className: 'profile-div',
  template() {
    console.log(this.model.get('username'));
    console.log(this.model);
    return `
    <h2 class="profile-name">${this.model.get('username')}</h2>
    <img src="${this.model.get('pic')}"/>
    <h4 class="user-name">${this.model.get('name')}</h4>
    <p>${this.model.get('bio')}</p>
    `;
},
  render() {
    this.$el.append(this.template());
  }
});

export default ProfilePage;
