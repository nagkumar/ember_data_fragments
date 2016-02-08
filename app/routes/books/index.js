import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('book');
  },

  actions: {
    createReview: function (aReview) {
      Ember.Logger.info(aReview);
      aReview.pushObject('mohan');
    }
  }
});
