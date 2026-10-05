// Mobile nav toggle + course catalogue filters. No dependencies.
(function () {
  var nav = document.querySelector('[data-nav]');
  var toggle = document.querySelector('[data-nav-toggle]');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('nav--open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var form = document.querySelector('[data-filters]');
  if (!form) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-course-grid] .course-card'));
  var empty = document.querySelector('[data-empty]');
  var state = {};

  function apply() {
    var shown = 0;
    cards.forEach(function (card) {
      var ok = Object.keys(state).every(function (key) {
        if (!state[key]) return true;
        return (card.dataset[key] || '').split(' ').indexOf(state[key]) !== -1;
      });
      card.hidden = !ok;
      if (ok) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  }

  function select(btn) {
    var key = btn.dataset.filter;
    state[key] = btn.dataset.value;
    form.querySelectorAll('[data-filter="' + key + '"]').forEach(function (b) {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
  }

  form.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-filter]');
    if (!btn) return;
    select(btn);
    apply();
  });

  if (empty) {
    empty.querySelector('[data-reset]').addEventListener('click', function () {
      form.querySelectorAll('[data-value=""]').forEach(select);
      apply();
    });
  }
})();
