import $ from 'jquery';
import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    body: '',
    timestamp: new Date(),
  },
  delete() {
    this.destroy();
  }
});
