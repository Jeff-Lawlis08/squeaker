import Backbone from 'backbone';
import Squeak from '../models/squeak';

export default Backbone.Collection.extend({
  model: Squeak,
  url: 'https://api.backendless.com/v1/data/squeaks',
  parse(data) {
    return data.data;
  }
});
