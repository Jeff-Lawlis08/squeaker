import $ from 'jquery';
import Backbone from 'backbone';
import SingleSqueak from './singleView';

const SqueakPostList = Backbone.View.extend({
  tagName: 'ul',
  className: 'squeak-list',
  render() {
    this.$el.empty();
    this.collection.forEach((squeak, i, arr) => {
      let singleSqueak = new SingleSqueak({
        model: squeak,
      });
      singleSqueak.render();
      this.$el.prepend(singleSqueak.el);
    });
  }
});

export default SqueakPostList;
