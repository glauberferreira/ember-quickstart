import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Ada Lovelace', 'Linus Torvalds', 'Donald Knuth', 'James Gosling'];
    }
});
