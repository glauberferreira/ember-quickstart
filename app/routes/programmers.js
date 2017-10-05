import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['Ada Lovelace', 'Linus Torvalds', 'Donald Knuth', 'James Gosling'];
    }
});
