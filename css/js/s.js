(function(w, d) {
    zaraz.debug = (a = "") => { document.cookie = `zarazDebug=${a}` };
    zaraz.i = function(e) {
        const n = d.createElement("div");
        n.innerHTML = unescape(e);
        const r = n.querySelectorAll("script");
        for (var t = 0; t < r.length; t++) {
            var a = d.createElement("script");
            for (var i of(r[t].innerHTML && (a.innerHTML = r[t].innerHTML), r[t].attributes)) a.setAttribute(i.name, i.value);
            d.head.appendChild(a), r[t].remove()
        }
        d.body.appendChild(n)
    };
    zaraz.f = async function(e, a) { const n = { credentials: "include", keepalive: !0, mode: "no-cors" }; return a && (n.method = "POST", n.body = new URLSearchParams(a), n.headers = { "Content-Type": "application/x-www-form-urlencoded" }), await fetch(e, n) };
    ! function(e, r, t, n, a, d) {
        function f(e, r) { d ? n(e, r || 32) : a.push(e, r) }

        function i(e, t, n, a) { return t && r.getElementById(t) || (a = r.createElement(e || "SCRIPT"), t && (a.id = t), n && (a.onload = n), r.head.appendChild(a)), a || {} }
        d = /p/.test(r.readyState), e.addEventListener("on" + t in e ? t : "load", (function() { for (d = 1; a[0];) f(a.shift(), a.shift()) })), f._ = i, e.defer = f, e.deferscript = function(e, r, t, n) { f((function() { i("", r, n).src = e }), t) }
    }(this, d, "pageshow", setTimeout, []), defer((function() {
        for (; zaraz.deferred.length;) zaraz.deferred.pop()();
        Object.defineProperty(zaraz.deferred, "push", { configurable: !0, enumerable: !1, writable: !0, value: function(...e) { let r = Array.prototype.push.apply(this, e); for (; zaraz.deferred.length;) zaraz.deferred.pop()(); return r } })
    }), 5500), addEventListener("visibilitychange", (function() { for (; zaraz.deferred.length;) zaraz.deferred.pop()() }));
    zaraz.pageVariables = {}, zaraz._p = a => {
        if (a && (a.e && new Function(a.e)(), a.f))
            for (const e of a.f) fetch(e[0], e[1])
    }, zaraz.track = function(a, e, t) {
        const r = { name: a, data: {} };
        for (const a of[localStorage, sessionStorage]) Object.keys(a || {}).filter((a => a.startsWith("_zaraz_"))).forEach((e => { try { r.data[e.slice(7)] = JSON.parse(a.getItem(e)) } catch { r.data[e.slice(7)] = a.getItem(e) } }));
        Object.keys(zaraz.pageVariables).forEach((a => r.data[a] = JSON.parse(zaraz.pageVariables[a]))),
            //
            r.data = {...r.data, ...e }, r.zarazData = zarazData, fetch("/cdn-cgi/zaraz/t", { credentials: "include", keepalive: !0, method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) }).catch((() => (console.warn("Large event payload sent to Cloudflare Zaraz, cannot assure deliverability."), fetch("/cdn-cgi/zaraz/t", { credentials: "include", method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) })))).then((function(a) { return zarazData._let = (new Date).getTime(), 200 === a.status && a.json() })).then((function(a) { zaraz._p(a), "function" == typeof t && t() }))
    }, zaraz.set = function(a, e, t) { e = JSON.stringify(e), prefixedKey = "_zaraz_" + a, sessionStorage.removeItem(prefixedKey), localStorage.removeItem(prefixedKey), delete zaraz.pageVariables[a], t && "session" == t.scope ? sessionStorage.setItem(prefixedKey, e) : t && "page" == t.scope ? zaraz.pageVariables[a] = e : localStorage.setItem(prefixedKey, e), zaraz.__watchVar = { key: a, value: e } };
    for (const { m: a, a: e }
        of zarazData.q.filter((({ m: a }) => ["debug", "set"].includes(a)))) zaraz[a](...e);
    for (const { m: a, a: e }
        of zaraz.q) zaraz[a](...e);
    delete zaraz.q, delete zarazData.q;
    zaraz.fulfilTrigger = function(a, r, z, g) { zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {}), zaraz.__zarazTriggerMap[a] || (zaraz.__zarazTriggerMap[a] = ""), zaraz.__zarazTriggerMap[a] += "*" + r + "*", zaraz.track("__zarazEmpty", {...z, __zarazClientTriggers: zaraz.__zarazTriggerMap[a] }, g) };
    window.dataLayer = w.dataLayer || [], zaraz._processDataLayer = a => {
        if (a.event) {
            if (zarazData.dataLayerIgnore && zarazData.dataLayerIgnore.includes(a.event)) return;
            let e = {};
            for (obj of dataLayer.slice(0, dataLayer.indexOf(a) + 1)) e = {...e, ...obj };
            delete e.event, a.event.startsWith("gtm.") || zaraz.track(a.event, e)
        }
    }, Object.defineProperty(w.dataLayer, "push", { configurable: !0, enumerable: !1, writable: !0, value: function(...a) { let e = Array.prototype.push.apply(this, a); return zaraz._processDataLayer(a[0]), e } }), dataLayer.forEach((a => zaraz._processDataLayer(a)));
    history.pushState = function() { History.prototype.pushState.apply(history, arguments), zarazData.l = d.location.href, zarazData.t = d.title, zaraz.track("__zarazSPA"), zaraz.pageVariables = {} }, history.replaceState = function() { History.prototype.replaceState.apply(history, arguments), zarazData.l = d.location.href, zarazData.t = d.title, zaraz.track("__zarazSPA"), zaraz.pageVariables = {} };
    zaraz._p({ "f": [], "e": "(function(w,d){w.zarazData.executed.push('Pageview');})(window,document);" })
})(window, document);