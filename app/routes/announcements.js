import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    save3(params) {
      var newAnnouncement =
      this.store.createRecord('announcement', params);
      newAnnouncement.save();
      console.log(newAnnouncement);
      this.transitionTo('announcements');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcements');
    }
  }
});
