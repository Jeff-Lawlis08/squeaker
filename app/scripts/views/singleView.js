import $ from 'jquery';
import Backbone from 'backbone';
import moment from 'moment';

const SingleSqueak = Backbone.View.extend({
  initialize(opts) {
    this.child = opts.child;
  },
  tagName: 'li',
  className: 'single-squeak',
  template() {
    return `
      <a href="#profile/${this.model.get('ownerId')}">${this.model.get('username')}</a>
      <span> - on (${moment(this.model.get('timestamp')).format('MMMM Do YYYY, h:mm')}) squeaked: </span>
      <span>${this.model.get('post')}</span>
    `;
  },
  render() {
    this.$el.prepend(this.template());
    if(this.model.get('ownerId') === window.localStorage.getItem('ownerId')) {
      this.$el.append(`<button class="delete">Delete</button>`);
    }
  },
  events: {
    'click .delete': 'delete'
  },
  delete() {
  this.model.delete();
}
  //no idea why the delete isn't working
  // delete() {
  //   this.model.destroy({success: () => {
  //     console.log('message destroyed!');
  //   }});
// });
});
export default SingleSqueak;
