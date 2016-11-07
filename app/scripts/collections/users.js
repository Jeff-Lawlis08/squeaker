import Backbone from 'backbone';
import User from '../models/user';

export default Backbone.Collection.extend({
  model: User,
  url: 'https://api.backendless.com/v1/data/users',
  parse(data) {
    return data.data;
    // console.log(data.data);
  }
});
