minispade.register('app', function() {
console.log('app');

});
minispade.register('controllers/tests_controller', function() {
console.log('controllers');

});
minispade.register('helpers/tests_2_helper', function() {
minispade.require('helpers/tests_helper');

console.log('helpers2');



});
minispade.register('helpers/tests_helper', function() {
console.log('helpers');


});
minispade.register('lib/test_hack', function() {
console.log('helpers');


});
minispade.register('models/test', function() {
console.log('models');


});
minispade.register('views/tests/tests_view', function() {
console.log('views');


});
