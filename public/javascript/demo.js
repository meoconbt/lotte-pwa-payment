'use strict';

(function() {
  var amount = document.querySelector('#amount');
  var amountLabel = document.querySelector('label[for="amount"]');

  amount && amount.addEventListener('focus', function() {
    amountLabel.className = 'has-focus';
  }, false);
  amount && amount.addEventListener('blur', function() {
    amountLabel.className = '';
  }, false);
})();
