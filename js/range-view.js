/* Renders NC_RANGE into the services list, the item page, and the home summary. */
(function () {
  var R = window.NC_RANGE;
  if (!R) return;

  var groupsByKey = {};
  R.groups.forEach(function (g) { groupsByKey[g.key] = g; });

  function txt(v) {
    return String(v == null ? '' : v).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function hrefFor(it) { return it.page || ('item.html?key=' + encodeURIComponent(it.key)); }
  function inGroup(k) { return R.items.filter(function (it) { return it.group === k; }); }

  /* ---- services list (solutions.html) ---- */
  var list = document.getElementById('rangeList');
  if (list) {
    var tabs = document.getElementById('rangeTabs');
    var html = '';
    R.groups.forEach(function (g, gi) {
      var rows = inGroup(g.key);
      if (!rows.length) return;
      html += '<section class="rgroup" id="g-' + g.key + '" data-group="' + g.key + '">' +
        '<div class="rgroup__label"><span class="rgroup__no">SEC ' + String(gi + 1).padStart(2, '0') + '</span>' +
        '<h3>' + txt(g.title) + '</h3><p>' + txt(g.note) + '</p></div><div class="rgroup__rows">';
      rows.forEach(function (it) {
        html += '<a class="rrow" href="' + hrefFor(it) + '">' +
          (it.img ? '<span class="rrow__img"><img src="' + txt(it.img) + '" alt="" loading="lazy" /></span>' : '') +
          '<span class="rrow__body"><span class="rrow__kind">' + txt(it.kind) + '</span>' +
          '<span class="rrow__title">' + txt(it.title) + '</span>' +
          '<span class="rrow__sum">' + txt(it.summary) + '</span></span>' +
          '<span class="rrow__go" aria-hidden="true">&rarr;</span></a>';
      });
      html += '</div></section>';
    });
    list.innerHTML = html;

    if (tabs) {
      tabs.innerHTML = '<button type="button" data-g="all" aria-pressed="true">All</button>' +
        R.groups.map(function (g) {
          return '<button type="button" data-g="' + g.key + '" aria-pressed="false">' + txt(g.title) + '</button>';
        }).join('');
      var setGroup = function (k) {
        tabs.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-g') === k ? 'true' : 'false'); });
        list.querySelectorAll('.rgroup').forEach(function (s) { s.hidden = !(k === 'all' || s.getAttribute('data-group') === k); });
      };
      tabs.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (b) setGroup(b.getAttribute('data-g'));
      });
      var h = (location.hash || '').replace('#g-', '');
      if (groupsByKey[h]) setGroup(h);
    }
  }

  /* ---- single item (item.html?key=) ---- */
  var box = document.getElementById('rangeItem');
  if (box) {
    var key = new URLSearchParams(location.search).get('key');
    var it = R.items.filter(function (x) { return x.key === key; })[0];
    var g = it && groupsByKey[it.group];
    if (!it) {
      box.innerHTML = '<section class="section"><div class="container"><h2 class="section-title">Item not found</h2>' +
        '<p class="section-lead">It may have been renamed or removed. <a href="solutions.html">See all products and services</a>.</p></div></section>';
      return;
    }
    if (it.page) { location.replace(it.page); return; }
    document.title = it.title + ' | Netcom Scinergy';
    var hero = document.querySelector('.page-hero');
    if (hero) {
      var bg = hero.querySelector('.page-hero__bg');
      if (bg && it.img) bg.setAttribute('src', it.img);
      hero.querySelector('.crumbs span').textContent = it.title;
      hero.querySelector('h1').textContent = it.title;
      hero.querySelector('.page-hero__inner > p').textContent = it.summary;
    }
    var li = function (arr) { return (arr || []).map(function (x) { return '<li>' + txt(x) + '</li>'; }).join(''); };
    var specs = (it.specs || []).map(function (r) { return '<tr><th scope="row">' + txt(r[0]) + '</th><td>' + txt(r[1]) + '</td></tr>'; }).join('');
    var sib = inGroup(it.group).filter(function (x) { return x.key !== it.key; });
    box.innerHTML =
      '<section class="section"><div class="container itemgrid">' +
        '<div class="itemgrid__main"><span class="bp-tag">' + txt(it.kind) + ' / ' + txt(g ? g.title : '') + '</span>' +
          '<h2 class="section-title">Overview</h2><div class="prose"><p>' + txt(it.body || it.summary) + '</p></div>' +
          (it.includes ? '<h3 class="itemgrid__h">What you get</h3><ul class="itemlist">' + li(it.includes) + '</ul>' : '') +
          (it.fits ? '<h3 class="itemgrid__h">Good for</h3><ul class="itemlist itemlist--plain">' + li(it.fits) + '</ul>' : '') +
        '</div>' +
        '<aside class="itemgrid__side">' +
          (it.img ? '<img src="' + txt(it.img) + '" alt="" class="itemgrid__img" />' : '') +
          (specs ? '<table class="spec-table"><caption>Specification</caption>' + specs + '</table>' : '') +
          '<a href="contact.html" class="btn btn--primary btn--lg itemgrid__cta">Request a Quote</a>' +
        '</aside>' +
      '</div></section>' +
      (sib.length ? '<section class="section bg-slate"><div class="container"><span class="eyebrow">Same section</span>' +
        '<h2 class="section-title">Also in ' + txt(g.title) + '</h2><div class="rgroup__rows rgroup__rows--grid">' +
        sib.map(function (s) {
          return '<a class="rrow" href="' + hrefFor(s) + '"><span class="rrow__body"><span class="rrow__kind">' + txt(s.kind) + '</span>' +
            '<span class="rrow__title">' + txt(s.title) + '</span><span class="rrow__sum">' + txt(s.summary) + '</span></span>' +
            '<span class="rrow__go" aria-hidden="true">&rarr;</span></a>';
        }).join('') + '</div></div></section>' : '');
  }

  /* ---- home summary ---- */
  var sum = document.getElementById('rangeGroups');
  if (sum) {
    sum.innerHTML = R.groups.map(function (g, i) {
      var rows = inGroup(g.key);
      return '<a class="rsum" href="solutions.html#g-' + g.key + '">' +
        '<span class="rsum__no">SEC ' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="rsum__title">' + txt(g.title) + '</span>' +
        '<span class="rsum__note">' + txt(g.note) + '</span>' +
        '<span class="rsum__count">' + rows.length + ' items &rarr;</span></a>';
    }).join('');
  }

  /* ---- contact form: interest options ---- */
  var pick = document.getElementById('sv');
  if (pick && !pick.dataset.filled) {
    pick.dataset.filled = '1';
    var tail = pick.querySelector('option:last-child');
    R.groups.forEach(function (g) {
      var og = document.createElement('optgroup');
      og.label = g.title;
      inGroup(g.key).forEach(function (x) { var o = document.createElement('option'); o.textContent = x.title; og.appendChild(o); });
      pick.insertBefore(og, tail);
    });
  }
})();
