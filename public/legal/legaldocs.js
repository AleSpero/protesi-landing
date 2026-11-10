/* Behaviour of the legal pages (privacy policy, cookie policy, terms), in
   place of iubenda's own script. Their stylesheet (legaldocs.css) turns the
   table of contents and the summary cards into full-screen panels below
   960px; this opens and closes them from the "Sommario" and card buttons,
   closes them on Escape, and closes the contents panel once a link in it is
   followed. Above 960px the panels are plain page content. */
(function () {
  var PANELS = [
    "table-of-content-wrapper",
    "data-we-collect-card",
    "data-you-give-to-us-card",
    "what-you-can-do-card",
    "in-case-of-issues-card",
  ];
  var mobile = window.matchMedia("(max-width: 959px)");
  var open = null; // { panel, opener }

  function panels() {
    return PANELS.map(function (id) {
      return document.getElementById(id);
    }).filter(Boolean);
  }

  function setMode() {
    if (open) close();
    panels().forEach(function (panel) {
      if (mobile.matches) {
        panel.setAttribute("role", "dialog");
        panel.setAttribute("aria-modal", "true");
        var title = panel.querySelector("h2[id], h3[id]");
        if (title) panel.setAttribute("aria-labelledby", title.id);
        panel.classList.add("hidden");
      } else {
        panel.removeAttribute("role");
        panel.removeAttribute("aria-modal");
        panel.removeAttribute("aria-labelledby");
        panel.classList.remove("hidden");
      }
    });
  }

  function focusables(panel) {
    return panel.querySelectorAll("a[href], button:not([disabled]), summary");
  }

  function show(panel, opener) {
    if (open) close();
    open = { panel: panel, opener: opener };
    document.body.classList.add("has-dialog");
    panel.classList.remove("hidden");
    var first = focusables(panel)[0];
    if (first) first.focus();
  }

  function close() {
    if (!open) return;
    var current = open;
    open = null;
    current.panel.classList.add("hidden");
    document.body.classList.remove("has-dialog");
    if (current.opener) current.opener.focus();
  }

  document.addEventListener("click", function (event) {
    var target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    var opener = target.closest(".open-dialog");
    if (opener) {
      var panel = document.getElementById(opener.getAttribute("aria-controls"));
      if (panel) show(panel, opener);
      return;
    }

    if (target.closest(".close-dialog")) {
      close();
      return;
    }

    // Following a link inside an open panel (the contents, "Contattaci")
    // shows the page underneath, so the panel gets out of the way.
    if (open && target.closest("a[href^='#']") && open.panel.contains(target)) {
      open.opener = null;
      close();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (!open) return;
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    // Keep Tab inside the open panel, as a modal dialog should.
    if (event.key === "Tab") {
      var items = focusables(open.panel);
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  if (mobile.addEventListener) mobile.addEventListener("change", setMode);
  else mobile.addListener(setMode);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setMode);
  } else {
    setMode();
  }
})();
