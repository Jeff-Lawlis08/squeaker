import $ from 'jquery';
import Backbone from 'backbone';

const squeakSound = new Audio('./assets/sounds/squeak.mp3');

const MakePost = Backbone.View.extend({
  tagName: 'form',
  className: 'squeak-form',
  template() {
    return `
    <input class="squeak-post" type="text" placeholder="Make a New Squeak...">
    <input class="submit" type="submit" value="Squeak!">
    `;
  },
  render() {
    this.$el.empty();
    this.$el.append(this.template());
  },
  events: {
    'submit': 'handleSubmit'
  },
  handleSubmit(e) {
    e.preventDefault();
    const post = this.$('.squeak-post').val();
    const username = window.localStorage.getItem('username');
    squeakSound.play();
    // console.log(name);
    this.collection.create({username, post});
  }
});

export default MakePost;
