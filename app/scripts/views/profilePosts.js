import $ from 'jquery';
import Backbone from 'backbone';
import SingleSqueak from './singleView';

const ProfilePosts = Backbone.View.extend({
  tagName: 'ul',
  className: 'profile-posts',
  render() {
    this.$el.empty();
    this.collection.filter((squeak, i, arr) => {
      if(squeak.get('ownerId')=== window.localStorage.getItem('ownerId')){
      let singleProfilePost = new SingleSqueak({model: squeak});
      singleProfilePost.render();
      this.$el.prepend(singleProfilePost.el);
      return true;
    }
  });
  }
});

export default ProfilePosts;
