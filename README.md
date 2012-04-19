# Ember.js Jasmin Standalone #

## Getting set up ##

```
$ bundle install
$ bundle exec rakep
```

You should be good to go!

Run the app:
  http://localhost:9292/index.html

Run the tests:
  http://localhost:9292/spec.html


Using Minispade
------------------

Place a require at the top of each file with a dependency, such as:

  require('helpers/tests_helper');

HandleBars Templates
------------------

These go in 'app/templates' subfolders and should be named '*.handlebars'

A file in 'app/templates/test/test.handlebars' will map to:

Ember.TEMPLATES['test/test']


Example Model & Spec
------------------
Person = Ember.Object.extend({
  alive: true
});

describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person();
  });

  it("should be alive", function() {
      expect(person.alive).toBeTruthy();
  });
});


TODO: make sure spec helper runs first
