
  ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
      if (!a.document) throw new Error("jQuery requires a window with a document");
      return b(a)
    } : b(a)
  }("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
      var b = a.length,
        c = fa.type(a);
      return "function" === c || fa.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
      if (fa.isFunction(b)) return fa.grep(a, function(a, d) {
        return !!b.call(a, d, a) !== c
      });
      if (b.nodeType) return fa.grep(a, function(a) {
        return a === b !== c
      });
      if ("string" == typeof b) {
        if (na.test(b)) return fa.filter(b, a, c);
        b = fa.filter(b, a)
      }
      return fa.grep(a, function(a) {
        return fa.inArray(a, b) >= 0 !== c
      })
    }

    function e(a, b) {
      do a = a[b]; while (a && 1 !== a.nodeType);
      return a
    }

    function f(a) {
      var b = va[a] = {};
      return fa.each(a.match(ua) || [], function(a, c) {
        b[c] = !0
      }), b
    }

    function g() {
      pa.addEventListener ? (pa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (pa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
    }

    function h() {
      (pa.addEventListener || "load" === event.type || "complete" === pa.readyState) && (g(), fa.ready())
    }

    function i(a, b, c) {
      if (void 0 === c && 1 === a.nodeType) {
        var d = "data-" + b.replace(Aa, "-$1").toLowerCase();
        if (c = a.getAttribute(d), "string" == typeof c) {
          try {
            c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : za.test(c) ? fa.parseJSON(c) : c
          } catch (e) {}
          fa.data(a, b, c)
        } else c = void 0
      }
      return c
    }

    function j(a) {
      var b;
      for (b in a)
        if (("data" !== b || !fa.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
      return !0
    }

    function k(a, b, c, d) {
      if (fa.acceptData(a)) {
        var e, f, g = fa.expando,
          h = a.nodeType,
          i = h ? fa.cache : a,
          j = h ? a[g] : a[g] && g;
        if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || fa.guid++ : g), i[j] || (i[j] = h ? {} : {
            toJSON: fa.noop
          }), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = fa.extend(i[j], b) : i[j].data = fa.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[fa.camelCase(b)] = c),
          "string" ==
          typeof b ? (e = f[b], null == e && (e = f[fa.camelCase(b)])) : e = f, e
      }
    }

    function l(a, b, c) {
      if (fa.acceptData(a)) {
        var d, e, f = a.nodeType,
          g = f ? fa.cache : a,
          h = f ? a[fa.expando] : fa.expando;
        if (g[h]) {
          if (b && (d = c ? g[h] : g[h].data)) {
            fa.isArray(b) ? b = b.concat(fa.map(b, fa.camelCase)) : b in d ? b = [b] : (b = fa.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
            for (; e--;) delete d[b[e]];
            if (c ? !j(d) : !fa.isEmptyObject(d)) return
          }(c || (delete g[h].data, j(g[h]))) && (f ? fa.cleanData([a], !0) : da.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
        }
      }
    }

    function m() {
      return !0
    }

    function n() {
      return !1
    }

    function o() {
      try {
        return pa.activeElement
      } catch (a) {}
    }

    function p(a) {
      var b = La.split("|"),
        c = a.createDocumentFragment();
      if (c.createElement)
        for (; b.length;) c.createElement(b.pop());
      return c
    }

    function q(a, b) {
      var c, d, e = 0,
        f = typeof a.getElementsByTagName !== ya ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== ya ? a.querySelectorAll(b || "*") : void 0;
      if (!f)
        for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || fa.nodeName(d, b) ? f.push(d) : fa.merge(f, q(d, b));
      return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], f) : f
    }

    function r(a) {
      Fa.test(a.type) && (a.defaultChecked = a.checked)
    }

    function s(a, b) {
      return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function t(a) {
      return a.type = (null !== fa.find.attr(a, "type")) + "/" + a.type, a
    }

    function u(a) {
      var b = Wa.exec(a.type);
      return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function v(a, b) {
      for (var c, d = 0; null != (c = a[d]); d++) fa._data(c, "globalEval", !b || fa._data(b[d], "globalEval"))
    }

    function w(a, b) {
      if (1 === b.nodeType && fa.hasData(a)) {
        var c, d, e, f = fa._data(a),
          g = fa._data(b, f),
          h = f.events;
        if (h) {
          delete g.handle, g.events = {};
          for (c in h)
            for (d = 0, e = h[c].length; e > d; d++) fa.event.add(b, c, h[c][d])
        }
        g.data && (g.data = fa.extend({}, g.data))
      }
    }

    function x(a, b) {
      var c, d, e;
      if (1 === b.nodeType) {
        if (c = b.nodeName.toLowerCase(), !da.noCloneEvent && b[fa.expando]) {
          e = fa._data(b);
          for (d in e.events) fa.removeEvent(b, d, e.handle);
          b.removeAttribute(fa.expando)
        }
        "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), da.html5Clone && a.innerHTML && !fa.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c &&
          Fa
          .test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a
            .defaultValue)
      }
    }

    function y(b, c) {
      var d = fa(c.createElement(b)).appendTo(c.body),
        e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : fa.css(d[0], "display");
      return d.detach(), e
    }

    function z(a) {
      var b = pa,
        c = ab[a];
      return c || (c = y(a, b), "none" !== c && c || (_a = (_a || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (_a[0].contentWindow || _a[0].contentDocument).document, b.write(), b.close(), c = y(a, b),
        _a.detach()), ab[a] = c), c
    }

    function A(a, b) {
      return {
        get: function() {
          var c = a();
          return null != c ? c ? void delete this.get : (this.get = b).apply(this, arguments) : void 0
        }
      }
    }

    function B(a, b) {
      if (b in a) return b;
      for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = nb.length; e--;)
        if (b = nb[e] + c, b in a) return b;
      return d
    }

    function C(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = fa._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Da(d) && (f[g] = fa
        ._data(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = Da(d), (c && "none" !== c || !e) && fa._data(d, "olddisplay", e ? c : fa.css(d, "display"))));
      for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
      return a
    }

    function D(a, b, c) {
      var d = jb.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function E(a, b, c, d, e) {
      for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fa.css(a, c + Ca[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + Ca[f], !0, e)), "margin" !== c && (
        g -= fa.css(a, "border" + Ca[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Ca[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Ca[f] + "Width", !0, e)));
      return g
    }

    function F(a, b, c) {
      var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = bb(a),
        g = da.boxSizing() && "border-box" === fa.css(a, "boxSizing", !1, f);
      if (0 >= e || null == e) {
        if (e = cb(a, b, f), (0 > e || null == e) && (e = a.style[b]), eb.test(e)) return e;
        d = g && (da.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
      }
      return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function G(a, b, c, d, e) {
      return new G.prototype.init(a, b, c, d, e)
    }

    function H() {
      return setTimeout(function() {
        ob = void 0
      }), ob = fa.now()
    }

    function I(a, b) {
      var c, d = {
          height: a
        },
        e = 0;
      for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ca[e], d["margin" + c] = d["padding" + c] = a;
      return b && (d.opacity = d.width = a), d
    }

    function J(a, b, c) {
      for (var d, e = (ub[b] || []).concat(ub["*"]), f = 0, g = e.length; g > f; f++)
        if (d = e[f].call(c, b, a)) return d
    }

    function K(a, b, c) {
      var d, e, f, g, h, i, j, k, l = this,
        m = {},
        n = a.style,
        o = a.nodeType && Da(a),
        p = fa._data(a, "fxshow");
      c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
        h.unqueued || i()
      }), h.unqueued++, l.always(function() {
        l.always(function() {
          h.unqueued--, fa.queue(a, "fx").length || h.empty.fire()
        })
      })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fa.css(a, "display"), k = z(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === fa.css(a, "float") && (
        da
          .inlineBlockNeedsLayout && "inline" !== k ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", da.shrinkWrapBlocks() || l.always(function() {
        n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
      }));
      for (d in b)
        if (e = b[d], qb.exec(e)) {
          if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
            if ("show" !== e || !p || void 0 === p[d]) continue;
            o = !0
          }
          m[d] = p && p[d] || fa.style(a, d)
        }
      if (!fa.isEmptyObject(m)) {
        p ? "hidden" in p && (o = p.hidden) : p = fa._data(a, "fxshow", {}), f && (p.hidden = !o), o ? fa(a).show() : l.done(function() {
          fa(a).hide()
        }), l.done(function() {
          var b;
          fa._removeData(a, "fxshow");
          for (b in m) fa.style(a, b, m[b])
        });
        for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
      }
    }

    function L(a, b) {
      var c, d, e, f, g;
      for (c in a)
        if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
          f = g.expand(f), delete a[d];
          for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function M(a, b, c) {
      var d, e, f = 0,
        g = tb.length,
        h = fa.Deferred().always(function() {
          delete i.elem
        }),
        i = function() {
          if (e) return !1;
          for (var b = ob || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
          return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
          elem: a,
          props: fa.extend({}, b),
          opts: fa.extend(!0, {
            specialEasing: {}
          }, c),
          originalProperties: b,
          originalOptions: c,
          startTime: ob || H(),
          duration: c.duration,
          tweens: [],
          createTween: function(b, c) {
            var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d
          },
          stop: function(b) {
            var c = 0,
              d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; d > c; c++) j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
          }
        }),
        k = j.props;
      for (L(k, j.opts.specialEasing); g > f; f++)
        if (d = tb[f].call(j, a, k, j.opts)) return d;
      return fa.map(k, J, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
        elem: a,
        anim: j,
        queue: j.opts.queue
      })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function N(a) {
      return function(b, c) {
        "string" != typeof b && (c = b, b = "*");
        var d, e = 0,
          f = b.toLowerCase().match(ua) || [];
        if (fa.isFunction(c))
          for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
      }
    }

    function O(a, b, c, d) {
      function e(h) {
        var i;
        return f[h] = !0, fa.each(a[h] || [], function(a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
        }), i
      }
      var f = {},
        g = a === Sb;
      return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function P(a, b) {
      var c, d, e = fa.ajaxSettings.flatOptions || {};
      for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
      return c && fa.extend(!0, a, c), a
    }

    function Q(a, b, c) {
      for (var d, e, f, g, h = a.contents, i = a.dataTypes;
        "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
      if (e)
        for (g in h)
          if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
          }
      if (i[0] in c) f = i[0];
      else {
        for (g in c) {
          if (!i[0] || a.converters[g + " " + i[0]]) {
            f = g;
            break
          }
          d || (d = g)
        }
        f = f || d
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function R(a, b, c, d) {
      var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
      if (k[1])
        for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      for (f = k.shift(); f;)
        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g)
          for (e in j)
            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
              g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
              break
            }
        if (g !== !0)
          if (g && a["throws"]) b = g(b);
          else try {
            b = g(b)
          } catch (l) {
            return {
              state: "parsererror",
              error: g ? l : "No conversion from " + i + " to " + f
            }
          }
      }
      return {
        state: "success",
        data: b
      }
    }

    function S(a, b, c, d) {
      var e;
      if (fa.isArray(b)) fa.each(b, function(b, e) {
        c || Wb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
      });
      else if (c || "object" !== fa.type(b)) d(a, b);
      else
        for (e in b) S(a + "[" + e + "]", b[e], c, d)
    }

    function T() {
      try {
        return new a.XMLHttpRequest
      } catch (b) {}
    }

    function U() {
      try {
        return new a.ActiveXObject("Microsoft.XMLHTTP")
      } catch (b) {}
    }

    function V(a) {
      return fa.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var W = [],
      X = W.slice,
      Y = W.concat,
      Z = W.push,
      $ = W.indexOf,
      _ = {},
      aa = _.toString,
      ba = _.hasOwnProperty,
      ca = "".trim,
      da = {},
      ea = "1.11.0",
      fa = function(a, b) {
        return new fa.fn.init(a, b)
      },
      ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ha = /^-ms-/,
      ia = /-([\da-z])/gi,
      ja = function(a, b) {
        return b.toUpperCase()
      };
    fa.fn = fa.prototype = {
      jquery: ea,
      constructor: fa,
      selector: "",
      length: 0,
      toArray: function() {
        return X.call(this)
      },
      get: function(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
      },
      pushStack: function(a) {
        var b = fa.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b
      },
      each: function(a, b) {
        return fa.each(this, a, b)
      },
      map: function(a) {
        return this.pushStack(fa.map(this, function(b, c) {
          return a.call(b, c, b)
        }))
      },
      slice: function() {
        return this.pushStack(X.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: Z,
      sort: W.sort,
      splice: W.splice
    }, fa.extend = fa.fn.extend = function() {
      var a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
        if (null != (e = arguments[h]))
          for (d in e) a = g[d], c = e[d], g !== c && (j && c && (fa.isPlainObject(c) || (b = fa.isArray(c))) ? (b ? (b = !1, f = a && fa.isArray(a) ? a : []) : f = a && fa.isPlainObject(a) ? a : {}, g[d] = fa.extend(j, f, c)) : void 0 !==
            c &&
            (g[d] = c));
      return g
    }, fa.extend({
      expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(a) {
        throw new Error(a)
      },
      noop: function() {},
      isFunction: function(a) {
        return "function" === fa.type(a)
      },
      isArray: Array.isArray || function(a) {
        return "array" === fa.type(a)
      },
      isWindow: function(a) {
        return null != a && a == a.window
      },
      isNumeric: function(a) {
        return a - parseFloat(a) >= 0
      },
      isEmptyObject: function(a) {
        var b;
        for (b in a) return !1;
        return !0
      },
      isPlainObject: function(a) {
        var b;
        if (!a || "object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return !1;
        try {
          if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
          return !1
        }
        if (da.ownLast)
          for (b in a) return ba.call(a, b);
        for (b in a);
        return void 0 === b || ba.call(a, b)
      },
      type: function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
      },
      globalEval: function(b) {
        b && fa.trim(b) && (a.execScript || function(b) {
          a.eval.call(a, b)
        })(b)
      },
      camelCase: function(a) {
        return a.replace(ha, "ms-").replace(ia, ja)
      },
      nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
      },
      each: function(a, b, d) {
        var e, f = 0,
          g = a.length,
          h = c(a);
        if (d) {
          if (h)
            for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
          else
            for (f in a)
              if (e = b.apply(a[f], d), e === !1) break
        } else if (h)
          for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
        else
          for (f in a)
            if (e = b.call(a[f], f, a[f]), e === !1) break;
        return a
      },
      trim: ca && !ca.call("\ufeff ") ? function(a) {
        return null == a ? "" : ca.call(a)
      } : function(a) {
        return null == a ? "" : (a + "").replace(ga, "")
      },
      makeArray: function(a, b) {
        var d = b || [];
        return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
      },
      inArray: function(a, b, c) {
        var d;
        if (b) {
          if ($) return $.call(b, a, c);
          for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
            if (c in b && b[c] === a) return c
        }
        return -1
      },
      merge: function(a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
        if (c !== c)
          for (; void 0 !== b[d];) a[e++] = b[d++];
        return a.length = e, a
      },
      grep: function(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
        return e
      },
      map: function(a, b, d) {
        var e, f = 0,
          g = a.length,
          h = c(a),
          i = [];
        if (h)
          for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
        else
          for (f in a) e = b(a[f], f, d), null != e && i.push(e);
        return Y.apply([], i)
      },
      guid: 1,
      proxy: function(a, b) {
        var c, d, e;
        return "string" == typeof b && (e = a[b], b = a, a = e), fa.isFunction(a) ? (c = X.call(arguments, 2), d = function() {
          return a.apply(b || this, c.concat(X.call(arguments)))
        }, d.guid = a.guid = a.guid || fa.guid++, d) : void 0
      },
      now: function() {
        return +new Date
      },
      support: da
    }), fa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
      _["[object " + b + "]"] = b.toLowerCase()
    });
    var ka = function(a) {
      function b(a, b, c, d) {
        var e, f, g, h, i, j, l, o, p, q;
        if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
        if (1 !== (h = b.nodeType) && 9 !== h) return [];
        if (I && !d) {
          if (e = sa.exec(a))
            if (g = e[1]) {
              if (9 === h) {
                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                if (f.id === g) return c.push(f), c
              } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
            } else {
              if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
              if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), c
            }
          if (x.qsa && (!J || !J.test(a))) {
            if (o = l = N, p = b, q = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
              for (j = m(a), (l = b.getAttribute("id")) ? o = l.replace(ua, "\\$&") : b.setAttribute("id", o), o = "[id='" + o + "'] ", i = j.length; i--;) j[i] = o + n(j[i]);
              p = ta.test(a) && k(b.parentNode) || b, q = j.join(",")
            }
            if (q) try {
              return _.apply(c, p.querySelectorAll(q)), c
            } catch (r) {} finally {
              l || b.removeAttribute("id")
            }
          }
        }
        return v(a.replace(ia, "$1"), b, c, d)
      }

      function c() {
        function a(c, d) {
          return b.push(c + " ") > y.cacheLength && delete a[b.shift()], a[c + " "] = d
        }
        var b = [];
        return a
      }

      function d(a) {
        return a[N] = !0, a
      }

      function e(a) {
        var b = G.createElement("div");
        try {
          return !!a(b)
        } catch (c) {
          return !1
        } finally {
          b.parentNode && b.parentNode.removeChild(b), b = null
        }
      }

      function f(a, b) {
        for (var c = a.split("|"), d = a.length; d--;) y.attrHandle[c[d]] = b
      }

      function g(a, b) {
        var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
        if (d) return d;
        if (c)
          for (; c = c.nextSibling;)
            if (c === b) return -1;
        return a ? 1 : -1
      }

      function h(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a
        }
      }

      function i(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a
        }
      }

      function j(a) {
        return d(function(b) {
          return b = +b, d(function(c, d) {
            for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
          })
        })
      }

      function k(a) {
        return a && typeof a.getElementsByTagName !== V && a
      }

      function l() {}

      function m(a, c) {
        var d, e, f, g, h, i, j, k = S[a + " "];
        if (k) return c ? 0 : k.slice(0);
        for (h = a, i = [], j = y.preFilter; h;) {
          (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
            value: d,
            type: e[0].replace(ia, " ")
          }), h = h.slice(d.length));
          for (g in y.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
            value: d,
            type: g,
            matches: e
          }), h = h.slice(d.length));
          if (!d) break
        }
        return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
      }

      function n(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d
      }

      function o(a, b, c) {
        var d = b.dir,
          e = c && "parentNode" === d,
          f = Q++;
        return b.first ? function(b, c, f) {
          for (; b = b[d];)
            if (1 === b.nodeType || e) return a(b, c, f)
        } : function(b, c, g) {
          var h, i, j = [P, f];
          if (g) {
            for (; b = b[d];)
              if ((1 === b.nodeType || e) && a(b, c, g)) return !0
          } else
            for (; b = b[d];)
              if (1 === b.nodeType || e) {
                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                if (i[d] = j, j[2] = a(b, c, g)) return !0
              }
        }
      }

      function p(a) {
        return a.length > 1 ? function(b, c, d) {
          for (var e = a.length; e--;)
            if (!a[e](b, c, d)) return !1;
          return !0
        } : a[0]
      }

      function q(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g
      }

      function r(a, b, c, e, f, g) {
        return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
          var j, k, l, m = [],
            n = [],
            o = g.length,
            p = d || u(b || "*", h.nodeType ? [h] : h, []),
            r = !a || !d && b ? p : q(p, m, a, h, i),
            s = c ? f || (d ? a : o || e) ? [] : g : r;
          if (c && c(r, s, h, i), e)
            for (j = q(s, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
          if (d) {
            if (f || a) {
              if (f) {
                for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                f(null, s = [], j, i)
              }
              for (k = s.length; k--;)(l = s[k]) && (j = f ? ba.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
            }
          } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : _.apply(g, s)
        })
      }

      function s(a) {
        for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = o(function(a) {
            return a === b
          }, g, !0), j = o(function(a) {
            return ba.call(b, a) > -1
          }, g, !0), k = [
            function(a, c, d) {
              return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
            }
          ]; e > h; h++)
          if (c = y.relative[a[h].type]) k = [o(p(k), c)];
          else {
            if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
              for (d = ++h; e > d && !y.relative[a[d].type]; d++);
              return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                value: " " === a[h - 2].type ? "*" : ""
              })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
            }
            k.push(c)
          }
        return p(k)
      }

      function t(a, c) {
        var e = c.length > 0,
          f = a.length > 0,
          g = function(d, g, h, i, j) {
            var k, l, m, n = 0,
              o = "0",
              p = d && [],
              r = [],
              s = C,
              t = d || f && y.find.TAG("*", j),
              u = P += null == s ? 1 : Math.random() || .1,
              v = t.length;
            for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
              if (f && k) {
                for (l = 0; m = a[l++];)
                  if (m(k, g, h)) {
                    i.push(k);
                    break
                  }
                j && (P = u)
              }
              e && ((k = !m && k) && n--, d && p.push(k))
            }
            if (n += o, e && o !== n) {
              for (l = 0; m = c[l++];) m(p, r, g, h);
              if (d) {
                if (n > 0)
                  for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
                r = q(r)
              }
              _.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
            }
            return j && (P = u, C = s), p
          };
        return e ? d(g) : g
      }

      function u(a, c, d) {
        for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
        return d
      }

      function v(a, b, c, d) {
        var e, f, g, h, i, j = m(a);
        if (!d && 1 === j.length) {
          if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && y.relative[f[1].type]) {
            if (b = (y.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
            a = a.slice(f.shift().value.length)
          }
          for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)
            if ((i = y.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
              if (f.splice(e, 1), a = d.length && n(f), !a) return _.apply(c, d), c;
              break
            }
        }
        return B(a, j)(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
      }
      var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
        O = a.document,
        P = 0,
        Q = 0,
        R = c(),
        S = c(),
        T = c(),
        U = function(a, b) {
          return a === b && (E = !0), 0
        },
        V = "undefined",
        W = 1 << 31,
        X = {}.hasOwnProperty,
        Y = [],
        Z = Y.pop,
        $ = Y.push,
        _ = Y.push,
        aa = Y.slice,
        ba = Y.indexOf || function(a) {
          for (var b = 0, c = this.length; c > b; b++)
            if (this[b] === a) return b;
          return -1
        },
        ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        da = "[\\x20\\t\\r\\n\\f]",
        ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        fa = ea.replace("w", "w#"),
        ga = "\\[" + da + "*(" + ea + ")" + da + "*(?:([*^$|!~]?=)" + da + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fa + ")|)|)" + da + "*\\]",
        ha = ":(" + ea + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ga.replace(3, 8) + ")*)|.*)\\)|)",
        ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$", "g"),
        ja = new RegExp("^" + da + "*," + da + "*"),
        ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"),
        la = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]", "g"),
        ma = new RegExp(ha),
        na = new RegExp("^" + fa + "$"),
        oa = {
          ID: new RegExp("^#(" + ea + ")"),
          CLASS: new RegExp("^\\.(" + ea + ")"),
          TAG: new RegExp("^(" + ea.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + ga),
          PSEUDO: new RegExp("^" + ha),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + ca + ")$", "i"),
          needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)", "i")
        },
        pa = /^(?:input|select|textarea|button)$/i,
        qa = /^h\d$/i,
        ra = /^[^{]+\{\s*\[native \w/,
        sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ta = /[+~]/,
        ua = /'|\\/g,
        va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)", "ig"),
        wa = function(a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
      try {
        _.apply(Y = aa.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
      } catch (xa) {
        _ = {
          apply: Y.length ? function(a, b) {
            $.apply(a, aa.call(b))
          } : function(a, b) {
            for (var c = a.length, d = 0; a[c++] = b[d++];);
            a.length = c - 1
          }
        }
      }
      x = b.support = {}, A = b.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1
      }, F = b.setDocument = function(a) {
        var b, c = a ? a.ownerDocument || a : O,
          d = c.defaultView;
        return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !A(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
          F()
        }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
          F()
        })), x.attributes = e(function(a) {
          return a.className = "i", !a.getAttribute("className")
        }), x.getElementsByTagName = e(function(a) {
          return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
        }), x.getElementsByClassName = ra.test(c.getElementsByClassName) && e(function(a) {
          return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
        }), x.getById = e(function(a) {
          return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
        }), x.getById ? (y.find.ID = function(a, b) {
          if (typeof b.getElementById !== V && I) {
            var c = b.getElementById(a);
            return c && c.parentNode ? [c] : []
          }
        }, y.filter.ID = function(a) {
          var b = a.replace(va, wa);
          return function(a) {
            return a.getAttribute("id") === b
          }
        }) : (delete y.find.ID, y.filter.ID = function(a) {
          var b = a.replace(va, wa);
          return function(a) {
            var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
            return c && c.value === b
          }
        }), y.find.TAG = x.getElementsByTagName ? function(a, b) {
          return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
        } : function(a, b) {
          var c, d = [],
            e = 0,
            f = b.getElementsByTagName(a);
          if ("*" === a) {
            for (; c = f[e++];) 1 === c.nodeType && d.push(c);
            return d
          }
          return f
        }, y.find.CLASS = x.getElementsByClassName && function(a, b) {
          return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
        }, K = [], J = [], (x.qsa = ra.test(c.querySelectorAll)) && (e(function(a) {
          a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + da + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + da +
            "*(?:value|" + ca + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
        }), e(function(a) {
          var b = c.createElement("input");
          b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + da + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled",
            ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
        })), (x.matchesSelector = ra.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
          x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ha)
        }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
          var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
          return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
        } : function(a, b) {
          if (b)
            for (; b = b.parentNode;)
              if (b === a) return !0;
          return !1
        }, U = b ? function(a, b) {
          if (a === b) return E = !0, 0;
          var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 :
            b ===
            c || b.ownerDocument === O && M(O, b) ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0 : 4 & d ? -1 : 1)
        } : function(a, b) {
          if (a === b) return E = !0, 0;
          var d, e = 0,
            f = a.parentNode,
            h = b.parentNode,
            i = [a],
            j = [b];
          if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0;
          if (f === h) return g(a, b);
          for (d = a; d = d.parentNode;) i.unshift(d);
          for (d = b; d = d.parentNode;) j.unshift(d);
          for (; i[e] === j[e];) e++;
          return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
        }, c) : G
      }, b.matches = function(a, c) {
        return b(a, null, null, c)
      }, b.matchesSelector = function(a, c) {
        if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!x.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
          var d = L.call(a, c);
          if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
        } catch (e) {}
        return b(c, G, null, [a]).length > 0
      }, b.contains = function(a, b) {
        return (a.ownerDocument || a) !== G && F(a), M(a, b)
      }, b.attr = function(a, b) {
        (a.ownerDocument || a) !== G && F(a);
        var c = y.attrHandle[b.toLowerCase()],
          d = c && X.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
        return void 0 !== d ? d : x.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
      }, b.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a)
      }, b.uniqueSort = function(a) {
        var b, c = [],
          d = 0,
          e = 0;
        if (E = !x.detectDuplicates, D = !x.sortStable && a.slice(0), a.sort(U), E) {
          for (; b = a[e++];) b === a[e] && (d = c.push(e));
          for (; d--;) a.splice(c[d], 1)
        }
        return D = null, a
      }, z = b.getText = function(a) {
        var b, c = "",
          d = 0,
          e = a.nodeType;
        if (e) {
          if (1 === e || 9 === e || 11 === e) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += z(a)
          } else if (3 === e || 4 === e) return a.nodeValue
        } else
          for (; b = a[d++];) c += z(b);
        return c
      }, y = b.selectors = {
        cacheLength: 50,
        createPseudo: d,
        match: oa,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(a) {
            return a[1] = a[1].replace(va, wa), a[3] = (a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
          },
          CHILD: function(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(
              a[
                0]), a
          },
          PSEUDO: function(a) {
            var b, c = !a[5] && a[2];
            return oa.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && ma.test(c) && (b = m(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
          }
        },
        filter: {
          TAG: function(a) {
            var b = a.replace(va, wa).toLowerCase();
            return "*" === a ? function() {
              return !0
            } : function(a) {
              return a.nodeName && a.nodeName.toLowerCase() === b
            }
          },
          CLASS: function(a) {
            var b = R[a + " "];
            return b || (b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) && R(a, function(a) {
              return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
            })
          },
          ATTR: function(a, c, d) {
            return function(e) {
              var f = b.attr(e, a);
              return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" ===
                c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
            }
          },
          CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e ? function(a) {
              return !!a.parentNode
            } : function(b, c, i) {
              var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;
              if (q) {
                if (f) {
                  for (; p;) {
                    for (l = b; l = l[p];)
                      if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                    o = p = "only" === a && !o && "nextSibling"
                  }
                  return !0
                }
                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                  for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                    if (1 === l.nodeType && ++m && l === b) {
                      k[a] = [P, n, m];
                      break
                    }
                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                else
                  for (;
                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                return m -= e, m === d || m % d === 0 && m / d >= 0
              }
            }
          },
          PSEUDO: function(a, c) {
            var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
            return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
              for (var d, e = f(a, c), g = e.length; g--;) d = ba.call(a, e[g]), a[d] = !(b[d] = e[g])
            }) : function(a) {
              return f(a, 0, e)
            }) : f
          }
        },
        pseudos: {
          not: d(function(a) {
            var b = [],
              c = [],
              e = B(a.replace(ia, "$1"));
            return e[N] ? d(function(a, b, c, d) {
              for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
            }) : function(a, d, f) {
              return b[0] = a, e(b, null, f, c), !c.pop()
            }
          }),
          has: d(function(a) {
            return function(c) {
              return b(a, c).length > 0
            }
          }),
          contains: d(function(a) {
            return function(b) {
              return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
            }
          }),
          lang: d(function(a) {
            return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
              function(b) {
                var c;
                do
                  if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                return !1
              }
          }),
          target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id
          },
          root: function(a) {
            return a === H
          },
          focus: function(a) {
            return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
          },
          enabled: function(a) {
            return a.disabled === !1
          },
          disabled: function(a) {
            return a.disabled === !0
          },
          checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected
          },
          selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
          },
          empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0
          },
          parent: function(a) {
            return !y.pseudos.empty(a)
          },
          header: function(a) {
            return qa.test(a.nodeName)
          },
          input: function(a) {
            return pa.test(a.nodeName)
          },
          button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b
          },
          text: function(a) {
            var b;
            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
          },
          first: j(function() {
            return [0]
          }),
          last: j(function(a, b) {
            return [b - 1]
          }),
          eq: j(function(a, b, c) {
            return [0 > c ? c + b : c]
          }),
          even: j(function(a, b) {
            for (var c = 0; b > c; c += 2) a.push(c);
            return a
          }),
          odd: j(function(a, b) {
            for (var c = 1; b > c; c += 2) a.push(c);
            return a
          }),
          lt: j(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
            return a
          }),
          gt: j(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
            return a
          })
        }
      }, y.pseudos.nth = y.pseudos.eq;
      for (w in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) y.pseudos[w] = h(w);
      for (w in {
          submit: !0,
          reset: !0
        }) y.pseudos[w] = i(w);
      return l.prototype = y.filters = y.pseudos, y.setFilters = new l, B = b.compile = function(a, b) {
        var c, d = [],
          e = [],
          f = T[a + " "];
        if (!f) {
          for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
          f = T(a, t(e, d))
        }
        return f
      }, x.sortStable = N.split("").sort(U).join("") === N, x.detectDuplicates = !!E, F(), x.sortDetached = e(function(a) {
        return 1 & a.compareDocumentPosition(G.createElement("div"))
      }), e(function(a) {
        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
      }) || f("type|href|height|width", function(a, b, c) {
        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
      }), x.attributes && e(function(a) {
        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
      }) || f("value", function(a, b, c) {
        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
      }), e(function(a) {
        return null == a.getAttribute("disabled")
      }) || f(ca, function(a, b, c) {
        var d;
        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
      }), b
    }(a);
    fa.find = ka, fa.expr = ka.selectors, fa.expr[":"] = fa.expr.pseudos, fa.unique = ka.uniqueSort, fa.text = ka.getText, fa.isXMLDoc = ka.isXML, fa.contains = ka.contains;
    var la = fa.expr.match.needsContext,
      ma = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      na = /^.[^:#\[\.,]*$/;
    fa.filter = function(a, b, c) {
      var d = b[0];
      return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function(a) {
        return 1 === a.nodeType
      }))
    }, fa.fn.extend({
      find: function(a) {
        var b, c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a) return this.pushStack(fa(a).filter(function() {
          for (b = 0; e > b; b++)
            if (fa.contains(d[b], this)) return !0
        }));
        for (b = 0; e > b; b++) fa.find(a, d[b], c);
        return c = this.pushStack(e > 1 ? fa.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
      },
      filter: function(a) {
        return this.pushStack(d(this, a || [], !1))
      },
      not: function(a) {
        return this.pushStack(d(this, a || [], !0))
      },
      is: function(a) {
        return !!d(this, "string" == typeof a && la.test(a) ? fa(a) : a || [], !1).length
      }
    });
    var oa, pa = a.document,
      qa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ra = fa.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
          if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : qa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || oa).find(a) : this.constructor(b).find(a);
          if (c[1]) {
            if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : pa, !0)), ma.test(c[1]) && fa.isPlainObject(b))
              for (c in b) fa.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
            return this
          }
          if (d = pa.getElementById(c[2]), d && d.parentNode) {
            if (d.id !== c[2]) return oa.find(a);
            this.length = 1, this[0] = d
          }
          return this.context = pa, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? "undefined" != typeof oa.ready ? oa.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fa
          .makeArray(a, this))
      };
    ra.prototype = fa.fn, oa = fa(pa);
    var sa = /^(?:parents|prev(?:Until|All))/,
      ta = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    fa.extend({
      dir: function(a, b, c) {
        for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !fa(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
        return d
      },
      sibling: function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
      }
    }), fa.fn.extend({
      has: function(a) {
        var b, c = fa(a, this),
          d = c.length;
        return this.filter(function() {
          for (b = 0; d > b; b++)
            if (fa.contains(this, c[b])) return !0
        })
      },
      closest: function(a, b) {
        for (var c, d = 0, e = this.length, f = [], g = la.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
              f.push(c);
              break
            }
        return this.pushStack(f.length > 1 ? fa.unique(f) : f)
      },
      index: function(a) {
        return a ? "string" == typeof a ? fa.inArray(this[0], fa(a)) : fa.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(a, b) {
        return this.pushStack(fa.unique(fa.merge(this.get(), fa(a, b))))
      },
      addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
      }
    }), fa.each({
      parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
      },
      parents: function(a) {
        return fa.dir(a, "parentNode")
      },
      parentsUntil: function(a, b, c) {
        return fa.dir(a, "parentNode", c)
      },
      next: function(a) {
        return e(a, "nextSibling")
      },
      prev: function(a) {
        return e(a, "previousSibling")
      },
      nextAll: function(a) {
        return fa.dir(a, "nextSibling")
      },
      prevAll: function(a) {
        return fa.dir(a, "previousSibling")
      },
      nextUntil: function(a, b, c) {
        return fa.dir(a, "nextSibling", c)
      },
      prevUntil: function(a, b, c) {
        return fa.dir(a, "previousSibling", c)
      },
      siblings: function(a) {
        return fa.sibling((a.parentNode || {}).firstChild, a)
      },
      children: function(a) {
        return fa.sibling(a.firstChild)
      },
      contents: function(a) {
        return fa.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : fa.merge([], a.childNodes)
      }
    }, function(a, b) {
      fa.fn[a] = function(c, d) {
        var e = fa.map(this, b, c);
        return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (ta[a] || (e = fa.unique(e)), sa.test(a) && (e = e.reverse())), this.pushStack(e)
      }
    });
    var ua = /\S+/g,
      va = {};
    fa.Callbacks = function(a) {
      a = "string" == typeof a ? va[a] || f(a) : fa.extend({}, a);
      var b, c, d, e, g, h, i = [],
        j = !a.once && [],
        k = function(f) {
          for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
            if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
              c = !1;
              break
            }
          b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
        },
        l = {
          add: function() {
            if (i) {
              var d = i.length;
              ! function f(b) {
                fa.each(b, function(b, c) {
                  var d = fa.type(c);
                  "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                })
              }(arguments), b ? e = i.length : c && (h = d, k(c))
            }
            return this
          },
          remove: function() {
            return i && fa.each(arguments, function(a, c) {
              for (var d;
                (d = fa.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
            }), this
          },
          has: function(a) {
            return a ? fa.inArray(a, i) > -1 : !(!i || !i.length)
          },
          empty: function() {
            return i = [], e = 0, this
          },
          disable: function() {
            return i = j = c = void 0, this
          },
          disabled: function() {
            return !i
          },
          lock: function() {
            return j = void 0, c || l.disable(), this
          },
          locked: function() {
            return !j
          },
          fireWith: function(a, c) {
            return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
          },
          fire: function() {
            return l.fireWith(this, arguments), this
          },
          fired: function() {
            return !!d
          }
        };
      return l
    }, fa.extend({
      Deferred: function(a) {
        var b = [
            ["resolve", "done", fa.Callbacks("once memory"), "resolved"],
            ["reject", "fail", fa.Callbacks("once memory"), "rejected"],
            ["notify", "progress", fa.Callbacks("memory")]
          ],
          c = "pending",
          d = {
            state: function() {
              return c
            },
            always: function() {
              return e.done(arguments).fail(arguments), this
            },
            then: function() {
              var a = arguments;
              return fa.Deferred(function(c) {
                fa.each(b, function(b, f) {
                  var g = fa.isFunction(a[b]) && a[b];
                  e[f[1]](function() {
                    var a = g && g.apply(this, arguments);
                    a && fa.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                  })
                }), a = null
              }).promise()
            },
            promise: function(a) {
              return null != a ? fa.extend(a, d) : d
            }
          },
          e = {};
        return d.pipe = d.then, fa.each(b, function(a, f) {
          var g = f[2],
            h = f[3];
          d[f[1]] = g.add, h && g.add(function() {
            c = h
          }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
            return e[f[0] + "With"](this === e ? d : this, arguments), this
          }, e[f[0] + "With"] = g.fireWith
        }), d.promise(e), a && a.call(e, e), e
      },
      when: function(a) {
        var b, c, d, e = 0,
          f = X.call(arguments),
          g = f.length,
          h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0,
          i = 1 === h ? a : fa.Deferred(),
          j = function(a, c, d) {
            return function(e) {
              c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
            }
          };
        if (g > 1)
          for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
        return h || i.resolveWith(d, f), i.promise()
      }
    });
    var wa;
    fa.fn.ready = function(a) {
      return fa.ready.promise().done(a), this
    }, fa.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
        a ? fa.readyWait++ : fa.ready(!0)
      },
      ready: function(a) {
        if (a === !0 ? !--fa.readyWait : !fa.isReady) {
          if (!pa.body) return setTimeout(fa.ready);
          fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(pa, [fa]), fa.fn.trigger && fa(pa).trigger("ready").off("ready"))
        }
      }
    }), fa.ready.promise = function(b) {
      if (!wa)
        if (wa = fa.Deferred(), "complete" === pa.readyState) setTimeout(fa.ready);
        else if (pa.addEventListener) pa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
      else {
        pa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
        var c = !1;
        try {
          c = null == a.frameElement && pa.documentElement
        } catch (d) {}
        c && c.doScroll && ! function e() {
          if (!fa.isReady) {
            try {
              c.doScroll("left")
            } catch (a) {
              return setTimeout(e, 50)
            }
            g(), fa.ready()
          }
        }()
      }
      return wa.promise(b)
    };
    var xa, ya = "undefined";
    for (xa in fa(da)) break;
    da.ownLast = "0" !== xa, da.inlineBlockNeedsLayout = !1, fa(function() {
        var a, b, c = pa.getElementsByTagName("body")[0];
        c && (a = pa.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = pa.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== ya && (b.style
          .cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (da.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
      }),
      function() {
        var a = pa.createElement("div");
        if (null == da.deleteExpando) {
          da.deleteExpando = !0;
          try {
            delete a.test
          } catch (b) {
            da.deleteExpando = !1
          }
        }
        a = null
      }(), fa.acceptData = function(a) {
        var b = fa.noData[(a.nodeName + " ").toLowerCase()],
          c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
      };
    var za = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Aa = /([A-Z])/g;
    fa.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(a) {
        return a = a.nodeType ? fa.cache[a[fa.expando]] : a[fa.expando], !!a && !j(a)
      },
      data: function(a, b, c) {
        return k(a, b, c)
      },
      removeData: function(a, b) {
        return l(a, b)
      },
      _data: function(a, b, c) {
        return k(a, b, c, !0)
      },
      _removeData: function(a, b) {
        return l(a, b, !0)
      }
    }), fa.fn.extend({
      data: function(a, b) {
        var c, d, e, f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (this.length && (e = fa.data(f), 1 === f.nodeType && !fa._data(f, "parsedAttrs"))) {
            for (c = g.length; c--;) d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), i(f, d, e[d]));
            fa._data(f, "parsedAttrs", !0)
          }
          return e
        }
        return "object" == typeof a ? this.each(function() {
          fa.data(this, a)
        }) : arguments.length > 1 ? this.each(function() {
          fa.data(this, a, b)
        }) : f ? i(f, a, fa.data(f, a)) : void 0
      },
      removeData: function(a) {
        return this.each(function() {
          fa.removeData(this, a)
        })
      }
    }), fa.extend({
      queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = fa._data(a, b), c && (!d || fa.isArray(c) ? d = fa._data(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
      },
      dequeue: function(a, b) {
        b = b || "fx";
        var c = fa.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = fa._queueHooks(a, b),
          g = function() {
            fa.dequeue(a, b)
          };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
      },
      _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return fa._data(a, c) || fa._data(a, c, {
          empty: fa.Callbacks("once memory").add(function() {
            fa._removeData(a, b + "queue"), fa._removeData(a, c)
          })
        })
      }
    }), fa.fn.extend({
      queue: function(a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
          var c = fa.queue(this, a, b);
          fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
        })
      },
      dequeue: function(a) {
        return this.each(function() {
          fa.dequeue(this, a)
        })
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", [])
      },
      promise: function(a, b) {
        var c, d = 1,
          e = fa.Deferred(),
          f = this,
          g = this.length,
          h = function() {
            --d || e.resolveWith(f, [f])
          };
        for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = fa._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
      }
    });
    var Ba = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ca = ["Top", "Right", "Bottom", "Left"],
      Da = function(a, b) {
        return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
      },
      Ea = fa.access = function(a, b, c, d, e, f, g) {
        var h = 0,
          i = a.length,
          j = null == c;
        if ("object" === fa.type(c)) {
          e = !0;
          for (h in c) fa.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(fa(a), c)
          })), b))
          for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
      },
      Fa = /^(?:checkbox|radio)$/i;
    ! function() {
      var a = pa.createDocumentFragment(),
        b = pa.createElement("div"),
        c = pa.createElement("input");
      if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", da.leadingWhitespace = 3 === b.firstChild.nodeType, da.tbody = !b.getElementsByTagName("tbody").length, da.htmlSerialize = !!b
        .getElementsByTagName("link").length, da.html5Clone = "<:nav></:nav>" !== pa.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), da.appendChecked = c.checked, b.innerHTML =
        "<textarea>x</textarea>", da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        da.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
          da.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == da.deleteExpando) {
        da.deleteExpando = !0;
        try {
          delete b.test
        } catch (d) {
          da.deleteExpando = !1
        }
      }
      a = b = c = null
    }(),
    function() {
      var b, c, d = pa.createElement("div");
      for (b in {
          submit: !0,
          change: !0,
          focusin: !0
        }) c = "on" + b, (da[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), da[b + "Bubbles"] = d.attributes[c].expando === !1);
      d = null
    }();
    var Ga = /^(?:input|select|textarea)$/i,
      Ha = /^key/,
      Ia = /^(?:mouse|contextmenu)|click/,
      Ja = /^(?:focusinfocus|focusoutblur)$/,
      Ka = /^([^.]*)(?:\.(.+)|)$/;
    fa.event = {
      global: {},
      add: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = fa._data(a);
        if (q) {
          for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = fa.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
              return typeof fa === ya || a && fa.event.triggered === a.type ? void 0 : fa.event.dispatch.apply(k.elem, arguments)
            }, k.elem = a), b = (b || "").match(ua) || [""], h = b.length; h--;) f = Ka.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = fa.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j =
            fa.event.special[n] || {}, l = fa.extend({
              type: n,
              origType: p,
              data: d,
              handler: c,
              guid: c.guid,
              selector: e,
              needsContext: e && fa.expr.match.needsContext.test(e),
              namespace: o.join(".")
            }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(
              a,
              l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), fa.event.global[n] = !0);
          a = null
        }
      },
      remove: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = fa.hasData(a) && fa._data(a);
        if (q && (k = q.events)) {
          for (b = (b || "").match(ua) || [""], j = b.length; j--;)
            if (h = Ka.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
              for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g
                .origType ||
                c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
              i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete k[n])
            } else
              for (n in k) fa.event.remove(a, n + b[j], c, d, !0);
          fa.isEmptyObject(k) && (delete q.handle, fa._removeData(a, "events"))
        }
      },
      trigger: function(b, c, d, e) {
        var f, g, h, i, j, k, l, m = [d || pa],
          n = ba.call(b, "type") ? b.type : b,
          o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
        if (h = k = d = d || pa, 3 !== d.nodeType && 8 !== d.nodeType && !Ja.test(n + fa.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b :
            new fa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b
              .target = d), c = null == c ? [b] : fa.makeArray(c, [b]), j = fa.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
          if (!e && !j.noBubble && !fa.isWindow(d)) {
            for (i = j.delegateType || n, Ja.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
            k === (d.ownerDocument || pa) && m.push(k.defaultView || k.parentWindow || a)
          }
          for (l = 0;
            (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (fa._data(h, "events") || {})[b.type] && fa._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && fa.acceptData(h) && (b
            .result = f.apply(h, c), b.result === !1 && b.preventDefault());
          if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && fa.acceptData(d) && g && d[n] && !fa.isWindow(d)) {
            k = d[g], k && (d[g] = null), fa.event.triggered = n;
            try {
              d[n]()
            } catch (p) {}
            fa.event.triggered = void 0, k && (d[g] = k)
          }
          return b.result
        }
      },
      dispatch: function(a) {
        a = fa.event.fix(a);
        var b, c, d, e, f, g = [],
          h = X.call(arguments),
          i = (fa._data(this, "events") || {})[a.type] || [],
          j = fa.event.special[a.type] || {};
        if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
          for (g = fa.event.handlers.call(this, a, i), b = 0;
            (e = g[b++]) && !a.isPropagationStopped();)
            for (a.currentTarget = e.elem, f = 0;
              (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((fa.event.special[d.origType] || {}).handle || d.handler).apply(e
              .elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
          return j.postDispatch && j.postDispatch.call(this, a), a.result
        }
      },
      handlers: function(a, b) {
        var c, d, e, f, g = [],
          h = b.delegateCount,
          i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))
          for (; i != this; i = i.parentNode || this)
            if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
              for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? fa(c, this).index(i) >= 0 : fa.find(c, this, null, [i]).length), e[c] && e.push(d);
              e.length && g.push({
                elem: i,
                handlers: e
              })
            }
        return h < b.length && g.push({
          elem: this,
          handlers: b.slice(h)
        }), g
      },
      fix: function(a) {
        if (a[fa.expando]) return a;
        var b, c, d, e = a.type,
          f = a,
          g = this.fixHooks[e];
        for (g || (this.fixHooks[e] = g = Ia.test(e) ? this.mouseHooks : Ha.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
        return a.target || (a.target = f.srcElement || pa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(a, b) {
          return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(a, b) {
          var c, d, e, f = b.button,
            g = b.fromElement;
          return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || pa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft ||
            0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a
            .which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== o() && this.focus) try {
              return this.focus(), !1
            } catch (a) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === o() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return fa.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
          },
          _default: function(a) {
            return fa.nodeName(a.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(a) {
            void 0 !== a.result && (a.originalEvent.returnValue = a.result)
          }
        }
      },
      simulate: function(a, b, c, d) {
        var e = fa.extend(new fa.Event, c, {
          type: a,
          isSimulated: !0,
          originalEvent: {}
        });
        d ? fa.event.trigger(e, null, b) : fa.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
      }
    }, fa.removeEvent = pa.removeEventListener ? function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
      var d = "on" + b;
      a.detachEvent && (typeof a[d] === ya && (a[d] = null), a.detachEvent(d, c))
    }, fa.Event = function(a, b) {
      return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a
        .getPreventDefault()) ? m : n) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void(this[fa.expando] = !0)) : new fa.Event(a, b)
    }, fa.Event.prototype = {
      isDefaultPrevented: n,
      isPropagationStopped: n,
      isImmediatePropagationStopped: n,
      preventDefault: function() {
        var a = this.originalEvent;
        this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
      },
      stopPropagation: function() {
        var a = this.originalEvent;
        this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = m, this.stopPropagation()
      }
    }, fa.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, function(a, b) {
      fa.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function(a) {
          var c, d = this,
            e = a.relatedTarget,
            f = a.handleObj;
          return (!e || e !== d && !fa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
        }
      }
    }), da.submitBubbles || (fa.event.special.submit = {
      setup: function() {
        return fa.nodeName(this, "form") ? !1 : void fa.event.add(this, "click._submit keypress._submit", function(a) {
          var b = a.target,
            c = fa.nodeName(b, "input") || fa.nodeName(b, "button") ? b.form : void 0;
          c && !fa._data(c, "submitBubbles") && (fa.event.add(c, "submit._submit", function(a) {
            a._submit_bubble = !0
          }), fa._data(c, "submitBubbles", !0))
        })
      },
      postDispatch: function(a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && fa.event.simulate("submit", this.parentNode, a, !0))
      },
      teardown: function() {
        return fa.nodeName(this, "form") ? !1 : void fa.event.remove(this, "._submit")
      }
    }), da.changeBubbles || (fa.event.special.change = {
      setup: function() {
        return Ga.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fa.event.add(this, "propertychange._change", function(a) {
          "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
        }), fa.event.add(this, "click._change", function(a) {
          this._just_changed && !a.isTrigger && (this._just_changed = !1), fa.event.simulate("change", this, a, !0)
        })), !1) : void fa.event.add(this, "beforeactivate._change", function(a) {
          var b = a.target;
          Ga.test(b.nodeName) && !fa._data(b, "changeBubbles") && (fa.event.add(b, "change._change", function(a) {
            !this.parentNode || a.isSimulated || a.isTrigger || fa.event.simulate("change", this.parentNode, a, !0)
          }), fa._data(b, "changeBubbles", !0))
        })
      },
      handle: function(a) {
        var b = a.target;
        return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
      },
      teardown: function() {
        return fa.event.remove(this, "._change"), !Ga.test(this.nodeName)
      }
    }), da.focusinBubbles || fa.each({
      focus: "focusin",
      blur: "focusout"
    }, function(a, b) {
      var c = function(a) {
        fa.event.simulate(b, a.target, fa.event.fix(a), !0)
      };
      fa.event.special[b] = {
        setup: function() {
          var d = this.ownerDocument || this,
            e = fa._data(d, b);
          e || d.addEventListener(a, c, !0), fa._data(d, b, (e || 0) + 1)
        },
        teardown: function() {
          var d = this.ownerDocument || this,
            e = fa._data(d, b) - 1;
          e ? fa._data(d, b, e) : (d.removeEventListener(a, c, !0), fa._removeData(d, b))
        }
      }
    }), fa.fn.extend({
      on: function(a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && (c = c || b, b = void 0);
          for (f in a) this.on(f, b, c, a[f], e);
          return this
        }
        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
        else if (!d) return this;
        return 1 === e && (g = d, d = function(a) {
          return fa().off(a), g.apply(this, arguments)
        }, d.guid = g.guid || (g.guid = fa.guid++)), this.each(function() {
          fa.event.add(this, a, d, c, b)
        })
      },
      one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1)
      },
      off: function(a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj) return d = a.handleObj, fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this
        }
        return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function() {
          fa.event.remove(this, a, c, b)
        })
      },
      trigger: function(a, b) {
        return this.each(function() {
          fa.event.trigger(a, b, this)
        })
      },
      triggerHandler: function(a, b) {
        var c = this[0];
        return c ? fa.event.trigger(a, b, c, !0) : void 0
      }
    });
    var La = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      Ma = / jQuery\d+="(?:null|\d+)"/g,
      Na = new RegExp("<(?:" + La + ")[\\s/>]", "i"),
      Oa = /^\s+/,
      Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Qa = /<([\w:]+)/,
      Ra = /<tbody/i,
      Sa = /<|&#?\w+;/,
      Ta = /<(?:script|style|link)/i,
      Ua = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Va = /^$|\/(?:java|ecma)script/i,
      Wa = /^true\/(.*)/,
      Xa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Ya = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: da.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      },
      Za = p(pa),
      $a = Za.appendChild(pa.createElement("div"));
    Ya.optgroup = Ya.option, Ya.tbody = Ya.tfoot = Ya.colgroup = Ya.caption = Ya.thead, Ya.th = Ya.td, fa.extend({
      clone: function(a, b, c) {
        var d, e, f, g, h, i = fa.contains(a.ownerDocument, a);
        if (da.html5Clone || fa.isXMLDoc(a) || !Na.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : ($a.innerHTML = a.outerHTML, $a.removeChild(f = $a.firstChild)), !(da.noCloneEvent && da.noCloneChecked || 1 !== a.nodeType && 11 !==
            a
            .nodeType || fa.isXMLDoc(a)))
          for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
        if (b)
          if (c)
            for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
          else w(a, f);
        return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
      },
      buildFragment: function(a, b, c, d) {
        for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
          if (f = a[o], f || 0 === f)
            if ("object" === fa.type(f)) fa.merge(n, f.nodeType ? [f] : f);
            else if (Sa.test(f)) {
          for (h = h || m.appendChild(b.createElement("div")), i = (Qa.exec(f) || ["", ""])[1].toLowerCase(), k = Ya[i] || Ya._default, h.innerHTML = k[1] + f.replace(Pa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
          if (!da.leadingWhitespace && Oa.test(f) && n.push(b.createTextNode(Oa.exec(f)[0])), !da.tbody)
            for (f = "table" !== i || Ra.test(f) ? "<table>" !== k[1] || Ra.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) fa.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
          for (fa.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
          h = m.lastChild
        } else n.push(b.createTextNode(f));
        for (h && m.removeChild(h), da.appendChecked || fa.grep(q(n, "input"), r), o = 0; f = n[o++];)
          if ((!d || -1 === fa.inArray(f, d)) && (g = fa.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
            for (e = 0; f = h[e++];) Va.test(f.type || "") && c.push(f);
        return h = null, m
      },
      cleanData: function(a, b) {
        for (var c, d, e, f, g = 0, h = fa.expando, i = fa.cache, j = da.deleteExpando, k = fa.event.special; null != (c = a[g]); g++)
          if ((b || fa.acceptData(c)) && (e = c[h], f = e && i[e])) {
            if (f.events)
              for (d in f.events) k[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, f.handle);
            i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== ya ? c.removeAttribute(h) : c[h] = null, W.push(e))
          }
      }
    }), fa.fn.extend({
      text: function(a) {
        return Ea(this, function(a) {
          return void 0 === a ? fa.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pa).createTextNode(a))
        }, null, a, arguments.length)
      },
      append: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = s(this, a);
            b.appendChild(a)
          }
        })
      },
      prepend: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = s(this, a);
            b.insertBefore(a, b.firstChild)
          }
        })
      },
      before: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this)
        })
      },
      after: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
      },
      remove: function(a, b) {
        for (var c, d = a ? fa.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fa.cleanData(q(c)), c.parentNode && (b && fa.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
        return this
      },
      empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++) {
          for (1 === a.nodeType && fa.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
          a.options && fa.nodeName(a, "select") && (a.options.length = 0)
        }
        return this
      },
      clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
          return fa.clone(this, a, b)
        })
      },
      html: function(a) {
        return Ea(this, function(a) {
          var b = this[0] || {},
            c = 0,
            d = this.length;
          if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(Ma, "") : void 0;
          if (!("string" != typeof a || Ta.test(a) || !da.htmlSerialize && Na.test(a) || !da.leadingWhitespace && Oa.test(a) || Ya[(Qa.exec(a) || ["", ""])[1].toLowerCase()])) {
            a = a.replace(Pa, "<$1></$2>");
            try {
              for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (fa.cleanData(q(b, !1)), b.innerHTML = a);
              b = 0
            } catch (e) {}
          }
          b && this.empty().append(a)
        }, null, a, arguments.length)
      },
      replaceWith: function() {
        var a = arguments[0];
        return this.domManip(arguments, function(b) {
          a = this.parentNode, fa.cleanData(q(this)), a && a.replaceChild(b, this)
        }), a && (a.length || a.nodeType) ? this : this.remove()
      },
      detach: function(a) {
        return this.remove(a, !0)
      },
      domManip: function(a, b) {
        a = Y.apply([], a);
        var c, d, e, f, g, h, i = 0,
          j = this.length,
          k = this,
          l = j - 1,
          m = a[0],
          n = fa.isFunction(m);
        if (n || j > 1 && "string" == typeof m && !da.checkClone && Ua.test(m)) return this.each(function(c) {
          var d = k.eq(c);
          n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
        });
        if (j && (h = fa.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
          for (f = fa.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = fa.clone(d, !0, !0), e && fa.merge(f, q(d, "script"))), b.call(this[i], d, i);
          if (e)
            for (g = f[f.length - 1].ownerDocument, fa.map(f, u), i = 0; e > i; i++) d = f[i], Va.test(d.type || "") && !fa._data(d, "globalEval") && fa.contains(g, d) && (d.src ? fa._evalUrl && fa._evalUrl(d.src) : fa.globalEval((d
              .text ||
              d.textContent || d.innerHTML || "").replace(Xa, "")));
          h = c = null
        }
        return this
      }
    }), fa.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(a, b) {
      fa.fn[a] = function(a) {
        for (var c, d = 0, e = [], f = fa(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), fa(f[d])[b](c), Z.apply(e, c.get());
        return this.pushStack(e)
      }
    });
    var _a, ab = {};
    ! function() {
      var a, b, c = pa.createElement("div"),
        d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
      c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", da.opacity = /^0.5/.test(a.style.opacity), da.cssFloat = !!a.style
        .cssFloat,
        c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, da.shrinkWrapBlocks = function() {
          var a, c, e, f;
          if (null == b) {
            if (a = pa.getElementsByTagName("body")[0], !a) return;
            f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = pa.createElement("div"), e = pa.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== ya && (e.style.cssText = d +
              ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
          }
          return b
        }
    }();
    var bb, cb, db = /^margin/,
      eb = new RegExp("^(" + Ba + ")(?!px)[a-z%]+$", "i"),
      fb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (bb = function(a) {
      return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, cb = function(a, b, c) {
      var d, e, f, g, h = a.style;
      return c = c || bb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)), eb.test(g) && db.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h
        .maxWidth = h.width = g,
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : pa.documentElement.currentStyle && (bb = function(a) {
      return a.currentStyle
    }, cb = function(a, b, c) {
      var d, e, f, g, h = a.style;
      return c = c || bb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), eb.test(g) && !fb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ?
        "1em" :
        g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    }), ! function() {
      function b() {
        var b, c, d = pa.getElementsByTagName("body")[0];
        d && (b = pa.createElement("div"), c = pa.createElement("div"), b.style.cssText = j, d.appendChild(b).appendChild(c), c.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", fa.swap(d, null != d.style.zoom ? {
            zoom: 1
          } : {}, function() {
            e = 4 === c.offsetWidth
          }), f = !0, g = !1, h = !0, a.getComputedStyle && (g = "1%" !== (a.getComputedStyle(c, null) || {}).top, f = "4px" === (a.getComputedStyle(c, null) || {
            width: "4px"
          }).width), d.removeChild(b), c = d = null)
      }
      var c, d, e, f, g, h, i = pa.createElement("div"),
        j = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
        k = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
      i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = i.getElementsByTagName("a")[0], c.style.cssText = "float:left;opacity:.5", da.opacity = /^0.5/.test(c.style.opacity), da.cssFloat = !!c.style
        .cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === i.style.backgroundClip, c = i = null, fa.extend(da, {
          reliableHiddenOffsets: function() {
            if (null != d) return d;
            var a, b, c, e = pa.createElement("div"),
              f = pa.getElementsByTagName("body")[0];
            return f ? (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = pa.createElement("div"), a.style.cssText = j, f.appendChild(a).appendChild(e), e.innerHTML =
              "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display =
              "none", d = c && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, d) : void 0
          },
          boxSizing: function() {
            return null == e && b(), e
          },
          boxSizingReliable: function() {
            return null == f && b(), f
          },
          pixelPosition: function() {
            return null == g && b(), g
          },
          reliableMarginRight: function() {
            var b, c, d, e;
            if (null == h && a.getComputedStyle) {
              if (b = pa.getElementsByTagName("body")[0], !b) return;
              c = pa.createElement("div"), d = pa.createElement("div"), c.style.cssText = j, b.appendChild(c).appendChild(d), e = d.appendChild(pa.createElement("div")), e.style.cssText = d.style.cssText = k, e.style.marginRight = e.style
                .width = "0", d.style.width = "1px", h = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
            }
            return h
          }
        })
    }(), fa.swap = function(a, b, c, d) {
      var e, f, g = {};
      for (f in b) g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e
    };
    var gb = /alpha\([^)]*\)/i,
      hb = /opacity\s*=\s*([^)]*)/,
      ib = /^(none|table(?!-c[ea]).+)/,
      jb = new RegExp("^(" + Ba + ")(.*)$", "i"),
      kb = new RegExp("^([+-])=(" + Ba + ")", "i"),
      lb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      mb = {
        letterSpacing: 0,
        fontWeight: 400
      },
      nb = ["Webkit", "O", "Moz", "ms"];
    fa.extend({
      cssHooks: {
        opacity: {
          get: function(a, b) {
            if (b) {
              var c = cb(a, "opacity");
              return "" === c ? "1" : c
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": da.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e, f, g, h = fa.camelCase(b),
            i = a.style;
          if (b = fa.cssProps[h] || (fa.cssProps[h] = B(i, h)), g = fa.cssHooks[b] || fa.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
          if (f = typeof c, "string" === f && (e = kb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(fa.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || fa.cssNumber[h] || (c += "px"), da.clearCloneStyle || "" !==
              c ||
              0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
            i[b] = "", i[b] = c
          } catch (j) {}
        }
      },
      css: function(a, b, c, d) {
        var e, f, g, h = fa.camelCase(b);
        return b = fa.cssProps[h] || (fa.cssProps[h] = B(a.style, h)), g = fa.cssHooks[b] || fa.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = cb(a, b, d)), "normal" === f && b in mb && (f = mb[b]), "" ===
          c ||
          c ? (e = parseFloat(f), c === !0 || fa.isNumeric(e) ? e || 0 : f) : f
      }
    }), fa.each(["height", "width"], function(a, b) {
      fa.cssHooks[b] = {
        get: function(a, c, d) {
          return c ? 0 === a.offsetWidth && ib.test(fa.css(a, "display")) ? fa.swap(a, lb, function() {
            return F(a, b, d)
          }) : F(a, b, d) : void 0
        },
        set: function(a, c, d) {
          var e = d && bb(a);
          return D(a, c, d ? E(a, b, d, da.boxSizing() && "border-box" === fa.css(a, "boxSizing", !1, e), e) : 0)
        }
      }
    }), da.opacity || (fa.cssHooks.opacity = {
      get: function(a, b) {
        return hb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
      },
      set: function(a, b) {
        var c = a.style,
          d = a.currentStyle,
          e = fa.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";
        c.zoom = 1, (b >= 1 || "" === b) && "" === fa.trim(f.replace(gb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = gb.test(f) ? f.replace(gb, e) : f + " " + e)
      }
    }), fa.cssHooks.marginRight = A(da.reliableMarginRight, function(a, b) {
      return b ? fa.swap(a, {
        display: "inline-block"
      }, cb, [a, "marginRight"]) : void 0
    }), fa.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(a, b) {
      fa.cssHooks[a + b] = {
        expand: function(c) {
          for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ca[d] + b] = f[d] || f[d - 2] || f[0];
          return e
        }
      }, db.test(a) || (fa.cssHooks[a + b].set = D)
    }), fa.fn.extend({
      css: function(a, b) {
        return Ea(this, function(a, b, c) {
          var d, e, f = {},
            g = 0;
          if (fa.isArray(b)) {
            for (d = bb(a), e = b.length; e > g; g++) f[b[g]] = fa.css(a, b[g], !1, d);
            return f
          }
          return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
        }, a, b, arguments.length > 1)
      },
      show: function() {
        return C(this, !0)
      },
      hide: function() {
        return C(this)
      },
      toggle: function(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
          Da(this) ? fa(this).show() : fa(this).hide()
        })
      }
    }), fa.Tween = G, G.prototype = {
      constructor: G,
      init: function(a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
      },
      cur: function() {
        var a = G.propHooks[this.prop];
        return a && a.get ? a.get(this) : G.propHooks._default.get(this)
      },
      run: function(a) {
        var b, c = G.propHooks[this.prop];
        return this.pos = b = this.options.duration ? fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(
          this
          .elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
      }
    }, G.prototype.init.prototype = G.prototype, G.propHooks = {
      _default: {
        get: function(a) {
          var b;
          return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
        },
        set: function(a) {
          fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fa.cssProps[a.prop]] || fa.cssHooks[a.prop]) ? fa.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
        }
      }
    }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
      set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      }
    }, fa.easing = {
      linear: function(a) {
        return a
      },
      swing: function(a) {
        return .5 - Math.cos(a * Math.PI) / 2
      }
    }, fa.fx = G.prototype.init, fa.fx.step = {};
    var ob, pb, qb = /^(?:toggle|show|hide)$/,
      rb = new RegExp("^(?:([+-])=|)(" + Ba + ")([a-z%]*)$", "i"),
      sb = /queueHooks$/,
      tb = [K],
      ub = {
        "*": [
          function(a, b) {
            var c = this.createTween(a, b),
              d = c.cur(),
              e = rb.exec(b),
              f = e && e[3] || (fa.cssNumber[a] ? "" : "px"),
              g = (fa.cssNumber[a] || "px" !== f && +d) && rb.exec(fa.css(c.elem, a)),
              h = 1,
              i = 20;
            if (g && g[3] !== f) {
              f = f || g[3], e = e || [], g = +d || 1;
              do h = h || ".5", g /= h, fa.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
          }
        ]
      };
    fa.Animation = fa.extend(M, {
        tweener: function(a, b) {
          fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
          for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ub[c] = ub[c] || [], ub[c].unshift(b)
        },
        prefilter: function(a, b) {
          b ? tb.unshift(a) : tb.push(a)
        }
      }), fa.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fa.extend({}, a) : {
          complete: c || !c && b || fa.isFunction(a) && a,
          duration: a,
          easing: c && b || b && !fa.isFunction(b) && b
        };
        return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete,
          d
          .complete = function() {
            fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
          }, d
      }, fa.fn.extend({
        fadeTo: function(a, b, c, d) {
          return this.filter(Da).css("opacity", 0).show().end().animate({
            opacity: b
          }, a, c, d)
        },
        animate: function(a, b, c, d) {
          var e = fa.isEmptyObject(a),
            f = fa.speed(b, c, d),
            g = function() {
              var b = M(this, fa.extend({}, a), f);
              (e || fa._data(this, "finish")) && b.stop(!0)
            };
          return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
          var d = function(a) {
            var b = a.stop;
            delete a.stop, b(c)
          };
          return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = fa.timers,
              g = fa._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else
              for (e in g) g[e] && g[e].stop && sb.test(e) && d(g[e]);
            for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
            (b || !c) && fa.dequeue(this, a)
          })
        },
        finish: function(a) {
          return a !== !1 && (a = a || "fx"), this.each(function() {
            var b, c = fa._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = fa.timers,
              g = d ? d.length : 0;
            for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish
          })
        }
      }), fa.each(["toggle", "show", "hide"], function(a, b) {
        var c = fa.fn[b];
        fa.fn[b] = function(a, d, e) {
          return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
        }
      }), fa.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(a, b) {
        fa.fn[a] = function(a, c, d) {
          return this.animate(b, a, c, d)
        }
      }), fa.timers = [], fa.fx.tick = function() {
        var a, b = fa.timers,
          c = 0;
        for (ob = fa.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || fa.fx.stop(), ob = void 0
      }, fa.fx.timer = function(a) {
        fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop()
      }, fa.fx.interval = 13, fa.fx.start = function() {
        pb || (pb = setInterval(fa.fx.tick, fa.fx.interval))
      }, fa.fx.stop = function() {
        clearInterval(pb), pb = null
      }, fa.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, fa.fn.delay = function(a, b) {
        return a = fa.fx ? fa.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
          var d = setTimeout(b, a);
          c.stop = function() {
            clearTimeout(d)
          }
        })
      },
      function() {
        var a, b, c, d, e = pa.createElement("div");
        e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = pa.createElement("select"), d = c.appendChild(pa.createElement("option")), b =
          e
          .getElementsByTagName("input")[0], a.style.cssText = "top:1px", da.getSetAttribute = "t" !== e.className, da.style = /top/.test(a.getAttribute("style")), da.hrefNormalized = "/a" === a.getAttribute("href"), da.checkOn = !!b.value, da
          .optSelected = d.selected, da.enctype = !!pa.createElement("form").enctype, c.disabled = !0, da.optDisabled = !d.disabled, b = pa.createElement("input"), b.setAttribute("value", ""), da.input = "" === b.getAttribute("value"), b
          .value =
          "t", b.setAttribute("type", "radio"), da.radioValue = "t" === b.value, a = b = c = d = e = null
      }();
    var vb = /\r/g;
    fa.fn.extend({
      val: function(a) {
        var b, c, d, e = this[0];
        return arguments.length ? (d = fa.isFunction(a), this.each(function(c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function(a) {
            return null == a ? "" : a + ""
          })), b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        })) : e ? (b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(vb, "") : null == c ? "" : c)) : void 0
      }
    }), fa.extend({
      valHooks: {
        option: {
          get: function(a) {
            var b = fa.find.attr(a, "value");
            return null != b ? b : fa.text(a)
          }
        },
        select: {
          get: function(a) {
            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
              if (c = d[i], !(!c.selected && i !== e || (da.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fa.nodeName(c.parentNode, "optgroup"))) {
                if (b = fa(c).val(), f) return b;
                g.push(b)
              }
            return g
          },
          set: function(a, b) {
            for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;)
              if (d = e[g], fa.inArray(fa.valHooks.option.get(d), f) >= 0) try {
                d.selected = c = !0
              } catch (h) {
                d.scrollHeight
              } else d.selected = !1;
            return c || (a.selectedIndex = -1), e
          }
        }
      }
    }), fa.each(["radio", "checkbox"], function() {
      fa.valHooks[this] = {
        set: function(a, b) {
          return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) >= 0 : void 0
        }
      }, da.checkOn || (fa.valHooks[this].get = function(a) {
        return null === a.getAttribute("value") ? "on" : a.value
      })
    });
    var wb, xb, yb = fa.expr.attrHandle,
      zb = /^(?:checked|selected)$/i,
      Ab = da.getSetAttribute,
      Bb = da.input;
    fa.fn.extend({
      attr: function(a, b) {
        return Ea(this, fa.attr, a, b, arguments.length > 1)
      },
      removeAttr: function(a) {
        return this.each(function() {
          fa.removeAttr(this, a)
        })
      }
    }), fa.extend({
      attr: function(a, b, c) {
        var d, e, f = a.nodeType;
        return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === ya ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), d = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? xb : wb)), void 0 === c ? d &&
            "get" in d && null !== (e = d.get(a, b)) ? e : (e = fa.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void fa.removeAttr(a, b)
            ) :
          void 0
      },
      removeAttr: function(a, b) {
        var c, d, e = 0,
          f = b && b.match(ua);
        if (f && 1 === a.nodeType)
          for (; c = f[e++];) d = fa.propFix[c] || c, fa.expr.match.bool.test(c) ? Bb && Ab || !zb.test(c) ? a[d] = !1 : a[fa.camelCase("default-" + c)] = a[d] = !1 : fa.attr(a, c, ""), a.removeAttribute(Ab ? c : d)
      },
      attrHooks: {
        type: {
          set: function(a, b) {
            if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b
            }
          }
        }
      }
    }), xb = {
      set: function(a, b, c) {
        return b === !1 ? fa.removeAttr(a, c) : Bb && Ab || !zb.test(c) ? a.setAttribute(!Ab && fa.propFix[c] || c, c) : a[fa.camelCase("default-" + c)] = a[c] = !0, c
      }
    }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function(a, b) {
      var c = yb[b] || fa.find.attr;
      yb[b] = Bb && Ab || !zb.test(b) ? function(a, b, d) {
        var e, f;
        return d || (f = yb[b], yb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, yb[b] = f), e
      } : function(a, b, c) {
        return c ? void 0 : a[fa.camelCase("default-" + b)] ? b.toLowerCase() : null
      }
    }), Bb && Ab || (fa.attrHooks.value = {
      set: function(a, b, c) {
        return fa.nodeName(a, "input") ? void(a.defaultValue = b) : wb && wb.set(a, b, c)
      }
    }), Ab || (wb = {
      set: function(a, b, c) {
        var d = a.getAttributeNode(c);
        return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
      }
    }, yb.id = yb.name = yb.coords = function(a, b, c) {
      var d;
      return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, fa.valHooks.button = {
      get: function(a, b) {
        var c = a.getAttributeNode(b);
        return c && c.specified ? c.value : void 0
      },
      set: wb.set
    }, fa.attrHooks.contenteditable = {
      set: function(a, b, c) {
        wb.set(a, "" === b ? !1 : b, c)
      }
    }, fa.each(["width", "height"], function(a, b) {
      fa.attrHooks[b] = {
        set: function(a, c) {
          return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
        }
      }
    })), da.style || (fa.attrHooks.style = {
      get: function(a) {
        return a.style.cssText || void 0
      },
      set: function(a, b) {
        return a.style.cssText = b + ""
      }
    });
    var Cb = /^(?:input|select|textarea|button|object)$/i,
      Db = /^(?:a|area)$/i;
    fa.fn.extend({
      prop: function(a, b) {
        return Ea(this, fa.prop, a, b, arguments.length > 1)
      },
      removeProp: function(a) {
        return a = fa.propFix[a] || a, this.each(function() {
          try {
            this[a] = void 0, delete this[a]
          } catch (b) {}
        })
      }
    }), fa.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function(a, b, c) {
        var d, e, f, g = a.nodeType;
        return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !fa.isXMLDoc(a), f && (b = fa.propFix[b] || b, e = fa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e &&
          null !== (d = e.get(a, b)) ? d : a[b]) : void 0
      },
      propHooks: {
        tabIndex: {
          get: function(a) {
            var b = fa.find.attr(a, "tabindex");
            return b ? parseInt(b, 10) : Cb.test(a.nodeName) || Db.test(a.nodeName) && a.href ? 0 : -1
          }
        }
      }
    }), da.hrefNormalized || fa.each(["href", "src"], function(a, b) {
      fa.propHooks[b] = {
        get: function(a) {
          return a.getAttribute(b, 4)
        }
      }
    }), da.optSelected || (fa.propHooks.selected = {
      get: function(a) {
        var b = a.parentNode;
        return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
      }
    }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      fa.propFix[this.toLowerCase()] = this
    }), da.enctype || (fa.propFix.enctype = "encoding");
    var Eb = /[\t\r\n\f]/g;
    fa.fn.extend({
      addClass: function(a) {
        var b, c, d, e, f, g, h = 0,
          i = this.length,
          j = "string" == typeof a && a;
        if (fa.isFunction(a)) return this.each(function(b) {
          fa(this).addClass(a.call(this, b, this.className))
        });
        if (j)
          for (b = (a || "").match(ua) || []; i > h; h++)
            if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
              for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
              g = fa.trim(d), c.className !== g && (c.className = g)
            }
        return this
      },
      removeClass: function(a) {
        var b, c, d, e, f, g, h = 0,
          i = this.length,
          j = 0 === arguments.length || "string" == typeof a && a;
        if (fa.isFunction(a)) return this.each(function(b) {
          fa(this).removeClass(a.call(this, b, this.className))
        });
        if (j)
          for (b = (a || "").match(ua) || []; i > h; h++)
            if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
              for (f = 0; e = b[f++];)
                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
              g = a ? fa.trim(d) : "", c.className !== g && (c.className = g)
            }
        return this
      },
      toggleClass: function(a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(fa.isFunction(a) ? function(c) {
          fa(this).toggleClass(a.call(this, c, this.className, b), b)
        } : function() {
          if ("string" === c)
            for (var b, d = 0, e = fa(this), f = a.match(ua) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          else(c === ya || "boolean" === c) && (this.className && fa._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : fa._data(this, "__className__") || "")
        })
      },
      hasClass: function(a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
          if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0) return !0;
        return !1
      }
    }), fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a,
      b) {
      fa.fn[b] = function(a, c) {
        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
      }
    }), fa.fn.extend({
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      },
      bind: function(a, b, c) {
        return this.on(a, null, b, c)
      },
      unbind: function(a, b) {
        return this.off(a, null, b)
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d)
      },
      undelegate: function(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
      }
    });
    var Fb = fa.now(),
      Gb = /\?/,
      Hb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fa.parseJSON = function(b) {
      if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
      var c, d = null,
        e = fa.trim(b + "");
      return e && !fa.trim(e.replace(Hb, function(a, b, e, f) {
        return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
      })) ? Function("return " + e)() : fa.error("Invalid JSON: " + b)
    }, fa.parseXML = function(b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
      } catch (e) {
        c = void 0
      }
      return c && c.documentElement && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + b), c
    };
    var Ib, Jb, Kb = /#.*$/,
      Lb = /([?&])_=[^&]*/,
      Mb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Nb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ob = /^(?:GET|HEAD)$/,
      Pb = /^\/\//,
      Qb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Rb = {},
      Sb = {},
      Tb = "*/".concat("*");
    try {
      Jb = location.href
    } catch (Ub) {
      Jb = pa.createElement("a"), Jb.href = "", Jb = Jb.href
    }
    Ib = Qb.exec(Jb.toLowerCase()) || [], fa.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Jb,
        type: "GET",
        isLocal: Nb.test(Ib[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Tb,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": fa.parseJSON,
          "text xml": fa.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(a, b) {
        return b ? P(P(a, fa.ajaxSettings), b) : P(fa.ajaxSettings, a)
      },
      ajaxPrefilter: N(Rb),
      ajaxTransport: N(Sb),
      ajax: function(a, b) {
        function c(a, b, c, d) {
          var e, k, r, s, u, w = b;
          2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader(
              "Last-Modified"), u && (fa.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (fa.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s
              .error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n
            .trigger(
              e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --fa.active || fa.event.trigger("ajaxStop")))
        }
        "object" == typeof a && (b = a, a = void 0), b = b || {};
        var d, e, f, g, h, i, j, k, l = fa.ajaxSetup({}, b),
          m = l.context || l,
          n = l.context && (m.nodeType || m.jquery) ? fa(m) : fa.event,
          o = fa.Deferred(),
          p = fa.Callbacks("once memory"),
          q = l.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function(a) {
              var b;
              if (2 === t) {
                if (!k)
                  for (k = {}; b = Mb.exec(g);) k[b[1].toLowerCase()] = b[2];
                b = k[a.toLowerCase()]
              }
              return null == b ? null : b
            },
            getAllResponseHeaders: function() {
              return 2 === t ? g : null
            },
            setRequestHeader: function(a, b) {
              var c = a.toLowerCase();
              return t || (a = s[c] = s[c] || a, r[a] = b), this
            },
            overrideMimeType: function(a) {
              return t || (l.mimeType = a), this
            },
            statusCode: function(a) {
              var b;
              if (a)
                if (2 > t)
                  for (b in a) q[b] = [q[b], a[b]];
                else v.always(a[v.status]);
              return this
            },
            abort: function(a) {
              var b = a || u;
              return j && j.abort(b), c(0, b), this
            }
          };
        if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Jb) + "").replace(Kb, "").replace(Pb, Ib[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = fa.trim(l
            .dataType || "*").toLowerCase().match(ua) || [""], null == l.crossDomain && (d = Qb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Ib[1] && d[2] === Ib[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Ib[
            3] ||
            ("http:" === Ib[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = fa.param(l.data, l.traditional)), O(Rb, l, b, v), 2 === t) return v;
        i = l.global, i && 0 === fa.active++ && fa.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Ob.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Gb.test(f) ? "&" : "?") + l.data, delete l
          .data), l.cache === !1 && (l.url = Lb.test(f) ? f.replace(Lb, "$1_=" + Fb++) : f + (Gb.test(f) ? "&" : "?") + "_=" + Fb++)), l.ifModified && (fa.lastModified[f] && v.setRequestHeader("If-Modified-Since", fa.lastModified[f]),
          fa
          .etag[f] && v.setRequestHeader("If-None-Match", fa.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[
          0] &&
          l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Tb + "; q=0.01" : "") : l.accepts["*"]);
        for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
        if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
        u = "abort";
        for (e in {
            success: 1,
            error: 1,
            complete: 1
          }) v[e](l[e]);
        if (j = O(Sb, l, b, v)) {
          v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
            v.abort("timeout")
          }, l.timeout));
          try {
            t = 1, j.send(r, c)
          } catch (w) {
            if (!(2 > t)) throw w;
            c(-1, w)
          }
        } else c(-1, "No Transport");
        return v
      },
      getJSON: function(a, b, c) {
        return fa.get(a, b, c, "json")
      },
      getScript: function(a, b) {
        return fa.get(a, void 0, b, "script")
      }
    }), fa.each(["get", "post"], function(a, b) {
      fa[b] = function(a, c, d, e) {
        return fa.isFunction(c) && (e = e || d, d = c, c = void 0), fa.ajax({
          url: a,
          type: b,
          dataType: e,
          data: c,
          success: d
        })
      }
    }), fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
      fa.fn[b] = function(a) {
        return this.on(b, a)
      }
    }), fa._evalUrl = function(a) {
      return fa.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }, fa.fn.extend({
      wrapAll: function(a) {
        if (fa.isFunction(a)) return this.each(function(b) {
          fa(this).wrapAll(a.call(this, b))
        });
        if (this[0]) {
          var b = fa(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
            for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
            return a
          }).append(this)
        }
        return this
      },
      wrapInner: function(a) {
        return this.each(fa.isFunction(a) ? function(b) {
          fa(this).wrapInner(a.call(this, b))
        } : function() {
          var b = fa(this),
            c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a)
        })
      },
      wrap: function(a) {
        var b = fa.isFunction(a);
        return this.each(function(c) {
          fa(this).wrapAll(b ? a.call(this, c) : a)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
        }).end()
      }
    }), fa.expr.filters.hidden = function(a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !da.reliableHiddenOffsets() && "none" === (a.style && a.style.display || fa.css(a, "display"))
    }, fa.expr.filters.visible = function(a) {
      return !fa.expr.filters.hidden(a)
    };
    var Vb = /%20/g,
      Wb = /\[\]$/,
      Xb = /\r?\n/g,
      Yb = /^(?:submit|button|image|reset|file)$/i,
      Zb = /^(?:input|select|textarea|keygen)/i;
    fa.param = function(a, b) {
      var c, d = [],
        e = function(a, b) {
          b = fa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
      if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a, function() {
        e(this.name, this.value)
      });
      else
        for (c in a) S(c, a[c], b, e);
      return d.join("&").replace(Vb, "+")
    }, fa.fn.extend({
      serialize: function() {
        return fa.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var a = fa.prop(this, "elements");
          return a ? fa.makeArray(a) : this
        }).filter(function() {
          var a = this.type;
          return this.name && !fa(this).is(":disabled") && Zb.test(this.nodeName) && !Yb.test(a) && (this.checked || !Fa.test(a))
        }).map(function(a, b) {
          var c = fa(this).val();
          return null == c ? null : fa.isArray(c) ? fa.map(c, function(a) {
            return {
              name: b.name,
              value: a.replace(Xb, "\r\n")
            }
          }) : {
            name: b.name,
            value: c.replace(Xb, "\r\n")
          }
        }).get()
      }
    }), fa.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
      return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
    } : T;
    var $b = 0,
      _b = {},
      ac = fa.ajaxSettings.xhr();
    a.ActiveXObject && fa(a).on("unload", function() {
      for (var a in _b) _b[a](void 0, !0)
    }), da.cors = !!ac && "withCredentials" in ac, ac = da.ajax = !!ac, ac && fa.ajaxTransport(function(a) {
      if (!a.crossDomain || da.cors) {
        var b;
        return {
          send: function(c, d) {
            var e, f = a.xhr(),
              g = ++$b;
            if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
              for (e in a.xhrFields) f[e] = a.xhrFields[e];
            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
            for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
            f.send(a.hasContent && a.data || null), b = function(c, e) {
              var h, i, j;
              if (b && (e || 4 === f.readyState))
                if (delete _b[g], b = void 0, f.onreadystatechange = fa.noop, e) 4 !== f.readyState && f.abort();
                else {
                  j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                  try {
                    i = f.statusText
                  } catch (k) {
                    i = ""
                  }
                  h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                }
              j && d(h, i, j, f.getAllResponseHeaders())
            }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = _b[g] = b : b()
          },
          abort: function() {
            b && b(void 0, !0)
          }
        }
      }
    }), fa.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(a) {
          return fa.globalEval(a), a
        }
      }
    }), fa.ajaxPrefilter("script", function(a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), fa.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
        var b, c = pa.head || fa("head")[0] || pa.documentElement;
        return {
          send: function(d, e) {
            b = pa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
              (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
            }, c.insertBefore(b, c.firstChild)
          },
          abort: function() {
            b && b.onload(void 0, !0)
          }
        }
      }
    });
    var bc = [],
      cc = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var a = bc.pop() || fa.expando + "_" + Fb++;
        return this[a] = !0, a
      }
    }), fa.ajaxPrefilter("json jsonp", function(b, c, d) {
      var e, f, g, h = b.jsonp !== !1 && (cc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && cc.test(b.data) && "data");
      return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(cc, "$1" + e) : b.jsonp !== !1 && (b.url += (Gb.test(b.url) ? "&" : "?") + b
        .jsonp + "=" + e), b.converters["script json"] = function() {
        return g || fa.error(e + " was not called"), g[0]
      }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
        g = arguments
      }, d.always(function() {
        a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, bc.push(e)), g && fa.isFunction(f) && f(g[0]), g = f = void 0
      }), "script") : void 0
    }), fa.parseHTML = function(a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && (c = b, b = !1), b = b || pa;
      var d = ma.exec(a),
        e = !c && [];
      return d ? [b.createElement(d[1])] : (d = fa.buildFragment([a], b, e), e && e.length && fa(e).remove(), fa.merge([], d.childNodes))
    };
    var dc = fa.fn.load;
    fa.fn.load = function(a, b, c) {
      if ("string" != typeof a && dc) return dc.apply(this, arguments);
      var d, e, f, g = this,
        h = a.indexOf(" ");
      return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), fa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && fa.ajax({
        url: a,
        type: f,
        dataType: "html",
        data: b
      }).done(function(a) {
        e = arguments, g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
      }).complete(c && function(a, b) {
        g.each(c, e || [a.responseText, b, a])
      }), this
    }, fa.expr.filters.animated = function(a) {
      return fa.grep(fa.timers, function(b) {
        return a === b.elem
      }).length
    };
    var ec = a.document.documentElement;
    fa.offset = {
      setOffset: function(a, b, c) {
        var d, e, f, g, h, i, j, k = fa.css(a, "position"),
          l = fa(a),
          m = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && fa.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d
          .left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a,
          m) : l.css(m)
      }
    }, fa.fn.extend({
      offset: function(a) {
        if (arguments.length) return void 0 === a ? this : this.each(function(b) {
          fa.offset.setOffset(this, a, b)
        });
        var b, c, d = {
            top: 0,
            left: 0
          },
          e = this[0],
          f = e && e.ownerDocument;
        return f ? (b = f.documentElement, fa.contains(b, e) ? (typeof e.getBoundingClientRect !== ya && (d = e.getBoundingClientRect()), c = V(f), {
          top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
          left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
        }) : d) : void 0
      },
      position: function() {
        if (this[0]) {
          var a, b, c = {
              top: 0,
              left: 0
            },
            d = this[0];
          return "fixed" === fa.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (c = a.offset()), c.top += fa.css(a[0], "borderTopWidth", !0), c.left += fa
            .css(
              a[0], "borderLeftWidth", !0)), {
            top: b.top - c.top - fa.css(d, "marginTop", !0),
            left: b.left - c.left - fa.css(d, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var a = this.offsetParent || ec; a && !fa.nodeName(a, "html") && "static" === fa.css(a, "position");) a = a.offsetParent;
          return a || ec
        })
      }
    }), fa.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(a, b) {
      var c = /Y/.test(b);
      fa.fn[a] = function(d) {
        return Ea(this, function(a, d, e) {
          var f = V(a);
          return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? fa(f).scrollLeft() : e, c ? e : fa(f).scrollTop()) : a[d] = e);
        }, a, d, arguments.length, null)
      }
    }), fa.each(["top", "left"], function(a, b) {
      fa.cssHooks[b] = A(da.pixelPosition, function(a, c) {
        return c ? (c = cb(a, b), eb.test(c) ? fa(a).position()[b] + "px" : c) : void 0
      })
    }), fa.each({
      Height: "height",
      Width: "width"
    }, function(a, b) {
      fa.each({
        padding: "inner" + a,
        content: b,
        "": "outer" + a
      }, function(c, d) {
        fa.fn[d] = function(d, e) {
          var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
          return Ea(this, function(b, c, d) {
            var e;
            return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) :
              void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
          }, b, f ? d : void 0, f, null)
        }
      })
    }), fa.fn.size = function() {
      return this.length
    }, fa.fn.andSelf = fa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return fa
    });
    var fc = a.jQuery,
      gc = a.$;
    return fa.noConflict = function(b) {
      return a.$ === fa && (a.$ = gc), b && a.jQuery === fa && (a.jQuery = fc), fa
    }, typeof b === ya && (a.jQuery = a.$ = fa), fa
  }),
  function(a) {
    a.fn.fitText = function(b, c) {
      var d = b || 1,
        e = a.extend({
          minFontSize: Number.NEGATIVE_INFINITY,
          maxFontSize: Number.POSITIVE_INFINITY
        }, c);
      return this.each(function() {
        var b = a(this),
          c = function() {
            b.css("font-size", Math.max(Math.min(b.width() / (10 * d), parseFloat(e.maxFontSize)), parseFloat(e.minFontSize)))
          };
        c(), a(window).on("resize.fittext orientationchange.fittext", c)
      })
    }
  }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
      def: "easeOutQuad",
      swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
      },
      easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
      },
      easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
      },
      easeInOutQuad: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
      },
      easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
      },
      easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
      },
      easeInOutCubic: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
      },
      easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
      },
      easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
      },
      easeInOutQuart: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
      },
      easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
      },
      easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
      },
      easeInOutQuint: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
      },
      easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
      },
      easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
      },
      easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
      },
      easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
      },
      easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
      },
      easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
      },
      easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
      },
      easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
      },
      easeInOutCirc: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
      },
      easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158,
          g = 0,
          h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
          h = d;
          var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
      },
      easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
          g = 0,
          h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
          h = d;
          var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
      },
      easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
          g = 0,
          h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
          h = d;
          var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
      },
      easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
      },
      easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
      },
      easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
      },
      easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
      },
      easeOutBounce: function(a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b +
          .984375) + c
      },
      easeInOutBounce: function(a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
      }
    }), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
      def: "easeOutQuad",
      swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
      },
      easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
      },
      easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
      },
      easeInOutQuad: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
      },
      easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
      },
      easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
      },
      easeInOutCubic: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
      },
      easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
      },
      easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
      },
      easeInOutQuart: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
      },
      easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
      },
      easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
      },
      easeInOutQuint: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
      },
      easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
      },
      easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
      },
      easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
      },
      easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
      },
      easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
      },
      easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
      },
      easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
      },
      easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
      },
      easeInOutCirc: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
      },
      easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158,
          g = 0,
          h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
          h = d;
          var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
      },
      easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
          g = 0,
          h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
          h = d;
          var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
      },
      easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
          g = 0,
          h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
          h = d;
          var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
      },
      easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
      },
      easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
      },
      easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
      },
      easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
      },
      easeOutBounce: function(a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b +
          .984375) + c
      },
      easeInOutBounce: function(a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
      }
    }),
    function(a) {
      a.fn.hoverIntent = function(b, c, d) {
        var e = {
          interval: 100,
          sensitivity: 6,
          timeout: 0
        };
        e = "object" == typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
          over: b,
          out: c,
          selector: d
        }) : a.extend(e, {
          over: b,
          out: b,
          selector: c
        });
        var f, g, h, i, j = function(a) {
            f = a.pageX, g = a.pageY
          },
          k = function(b, c) {
            return c.hoverIntent_t = clearTimeout(c.hoverIntent_t), Math.sqrt((h - f) * (h - f) + (i - g) * (i - g)) < e.sensitivity ? (a(c).off("mousemove.hoverIntent", j), c.hoverIntent_s = !0, e.over.apply(c, [b])) : (h = f, i = g, c
              .hoverIntent_t = setTimeout(function() {
                k(b, c)
              }, e.interval), void 0)
          },
          l = function(a, b) {
            return b.hoverIntent_t = clearTimeout(b.hoverIntent_t), b.hoverIntent_s = !1, e.out.apply(b, [a])
          },
          m = function(b) {
            var c = a.extend({}, b),
              d = this;
            d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t)), "mouseenter" === b.type ? (h = c.pageX, i = c.pageY, a(d).on("mousemove.hoverIntent", j), d.hoverIntent_s || (d.hoverIntent_t = setTimeout(function() {
              k(c, d)
            }, e.interval))) : (a(d).off("mousemove.hoverIntent", j), d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
              l(c, d)
            }, e.timeout)))
          };
        return this.on({
          "mouseenter.hoverIntent": m,
          "mouseleave.hoverIntent": m
        }, e.selector)
      }
    }(jQuery),
    function(a) {
      a.fn.matchHeight = function(b) {
        if ("remove" === b) {
          var c = this;
          return this.css("height", ""), a.each(a.fn.matchHeight._groups, function(a, b) {
            b.elements = b.elements.not(c)
          }), this
        }
        return this.length <= 1 ? this : (b = "undefined" != typeof b ? b : !0, a.fn.matchHeight._groups.push({
          elements: this,
          byRow: b
        }), a.fn.matchHeight._apply(this, b), this)
      }, a.fn.matchHeight._apply = function(b, c) {
        var f = a(b),
          g = [f];
        return c && (f.css({
          display: "block",
          "padding-top": "0",
          "padding-bottom": "0",
          "border-top-width": "0",
          "border-bottom-width": "0",
          height: "100px"
        }), g = d(f), f.css({
          display: "",
          "padding-top": "",
          "padding-bottom": "",
          "border-top-width": "",
          "border-bottom-width": "",
          height: ""
        })), a.each(g, function(b, c) {
          var d = a(c),
            f = 0,
            g = d.parents().add(d).filter(":hidden");
          g.css({
            display: "block"
          }), d.each(function() {
            var b = a(this);
            b.css({
              display: "block",
              height: ""
            }), b.outerHeight(!1) > f && (f = b.outerHeight(!1)), b.css({
              display: ""
            })
          }), g.css({
            display: ""
          }), d.each(function() {
            var b = a(this),
              c = 0;
            "border-box" !== b.css("box-sizing") && (c += e(b.css("border-top-width")) + e(b.css("border-bottom-width")), c += e(b.css("padding-top")) + e(b.css("padding-bottom"))), b.css("height", f - c)
          })
        }), this
      }, a.fn.matchHeight._applyDataApi = function() {
        var b = {};
        a("[data-match-height], [data-mh]").each(function() {
          var c = a(this),
            d = c.attr("data-match-height");
          d in b ? b[d] = b[d].add(c) : b[d] = c
        }), a.each(b, function() {
          this.matchHeight(!0)
        })
      }, a.fn.matchHeight._groups = [], a.fn.matchHeight._throttle = 80;
      var b = -1,
        c = -1;
      a.fn.matchHeight._update = function(d) {
        if (d && "resize" === d.type) {
          var e = a(window).width();
          if (e === b) return;
          b = e
        } - 1 === c && (c = setTimeout(function() {
          a.each(a.fn.matchHeight._groups, function() {
            a.fn.matchHeight._apply(this.elements, this.byRow)
          }), c = -1
        }, a.fn.matchHeight._throttle))
      }, a(a.fn.matchHeight._applyDataApi), a(window).bind("load resize orientationchange", a.fn.matchHeight._update);
      var d = function(b) {
          var c = 1,
            d = a(b),
            f = null,
            g = [];
          return d.each(function() {
            var b = a(this),
              d = b.offset().top - e(b.css("margin-top")),
              h = g.length > 0 ? g[g.length - 1] : null;
            null === h ? g.push(b) : Math.floor(Math.abs(f - d)) <= c ? g[g.length - 1] = h.add(b) : g.push(b), f = d
          }), g
        },
        e = function(a) {
          return parseFloat(a) || 0
        }
    }(jQuery), ! function(a, b, c, d) {
      function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null,
          this
          ._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
          }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
              filter: c.filter,
              run: a.proxy(c.run, this)
            })
          }, this)), this.setup(), this.initialize()
      }

      function f(a) {
        if (a.touches !== d) return {
          x: a.touches[0].pageX,
          y: a.touches[0].pageY
        };
        if (a.touches === d) {
          if (a.pageX !== d) return {
            x: a.pageX,
            y: a.pageY
          };
          if (a.pageX === d) return {
            x: a.clientX,
            y: a.clientY
          }
        }
      }

      function g(a) {
        var b, d, e = c.createElement("div"),
          f = a;
        for (b in f)
          if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1]
      }

      function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
      }

      function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
      }

      function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
      }

      function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
      }

      function l() {
        return b.navigator.msPointerEnabled
      }
      var m, n, o;
      m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
      }, n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
      }, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
      }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
      }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
      }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
          a.current = this._items && this._items[this.relative(this._current)]
        }
      }, {
        filter: ["items", "settings"],
        run: function() {
          var a = this._clones,
            b = this.$stage.children(".cloned");
          (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
      }, {
        filter: ["items", "settings"],
        run: function() {
          var a, b, c = this._clones,
            d = this._items,
            e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
          for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length -
            1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function() {
          var a, b, c, d = this.settings.rtl ? 1 : -1,
            e = (this.width() / this.settings.items).toFixed(3),
            f = 0;
          for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings
            .autoWidth ?
            this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function() {
          var b, c, d = (this.width() / this.settings.items).toFixed(3),
            e = {
              width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
              "padding-left": this.settings.stagePadding || "",
              "padding-right": this.settings.stagePadding || ""
            };
          if (this.$stage.css(e), e = {
              width: this.settings.autoWidth ? "auto" : d - this.settings.margin
            }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
              return a > 1
            }).length > 0)
            for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
          else this.$stage.children().css(e)
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
          a.current && this.reset(this.$stage.children().index(a.current))
        }
      }, {
        filter: ["position"],
        run: function() {
          this.animate(this.coordinates(this._current))
        }
      }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
          var a, b, c, d, e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i
            .push(
              c);
          this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage
            .children(
              "." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
      }], e.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !==
          !
          0) {
          var b, c, e;
          if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthimages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children()
          .not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger(
          "initialized")
      }, e.prototype.setup = function() {
        var b = this.viewport(),
          c = this.options.responsive,
          d = -1,
          e = null;
        c ? (a.each(c, function(a) {
          b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
          return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
          property: {
            name: "settings",
            value: e
          }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
          property: {
            name: "settings",
            value: this.settings
          }
        }))
      }, e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings
          .merge = !1)
      }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
          content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
          content: c.data
        }), c.data
      }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a]
          }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
      }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
          case e.Width.Inner:
          case e.Width.Outer:
            return this._width;
          default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
      }, e.prototype.refresh = function() {
        return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state
          .orientation =
          b.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
      }, e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
          this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function(a) {
          this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function(a) {
          this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function(a) {
          this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function(a) {
          this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function(a) {
          this.preventClick(a)
        }, this)
      }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
      }, e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) :
          !1
      }, e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
      }, e.prototype.internalEvents = function() {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
          this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function() {
          return !1
        }), this.$stage.get(0).onselectstart = function() {
          return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
          this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
      }, e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag
          .distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this
            .width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag
          .targetEl
          .tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
          this.eventsRouter(a)
        }, this))
      }, e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag
          .currentX -
          this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this
            .drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag
            .currentX,
            "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings
            .rtl ?
            this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX,
            h +
            j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY >
            16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
      }, e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
          if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this
            .drag
            .distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
          this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this
              .settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance =
            0,
            a(c).off(".owl.dragEvents")
        }
      }, e.prototype.removeClick = function(c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
          a(c).off("click.preventClick")
        }, 300)
      }, e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
      }, e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
      }, e.prototype.closest = function(b) {
        var c = -1,
          d = 30,
          e = this.width(),
          f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
          return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
      }, e.prototype.animate = function(b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
          transform: "translate3d(" + b + "px,0px, 0px)",
          transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
          left: b + "px"
        }) : this.$stage.animate({
          left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
          this.state.inMotion && this.transitionEnd()
        }, this))
      }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
          var b = this.trigger("change", {
            property: {
              name: "position",
              value: a
            }
          });
          b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
            property: {
              name: "position",
              value: this._current
            }
          })
        }
        return this._current
      }, e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
      }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
      }, e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
      }, e.prototype.relative = function(a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
      }, e.prototype.maximum = function(a) {
        var b, c, d, e = 0,
          f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
          if (f.loop || f.center) b = this._items.length + f.items;
          else {
            if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
            for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
              (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
          }
        else b = this._items.length - f.items;
        return b
      }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
      }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
      }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
      }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
          e = c + this._items.length,
          f = function(a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
          };
        return b === d ? a.map(this._clones, function(a, b) {
          return f(b)
        }) : a.map(this._clones, function(a, c) {
          return a === b ? f(c) : null
        })
      }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
      }, e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
          return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
      }, e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
      }, e.prototype.to = function(c, d) {
        if (this.settings.loop) {
          var e = c - this.relative(this.current()),
            f = this.current(),
            g = this.current(),
            h = this.current() + e,
            i = 0 > g - h ? !0 : !1,
            j = this._clones.length + this._items.length;
          h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b
            .setTimeout(a.proxy(function() {
              this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
      }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
      }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
      }, e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
      }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
          if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
          d = c.documentElement.clientWidth
        }
        return d
      }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
          return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
          b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
      }, e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
          content: a,
          position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this
          ._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
          content: a,
          position: b
        })
      }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
          content: this._items[a],
          position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
          content: null,
          position: a
        }))
      }, e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
          return a.proxy(function(a) {
            a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
          }, this)
        }, this);
        a.each({
          next: this.next,
          prev: this.prev,
          to: this.to,
          destroy: this.destroy,
          refresh: this.refresh,
          replace: this.replace,
          add: this.add,
          remove: this.remove
        }, a.proxy(function(a, c) {
          this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
      }, e.prototype.watchVisibility = function() {
        function c(a) {
          return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
          c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
      }, e.prototype.preloadAutoWidthimages = function(b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) {
          e = a(h), f = new Image, f.onload = function() {
            c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
          }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina");
        })
      }, e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this
          .transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
          return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
      }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
          case "<":
            return d ? a > c : c > a;
          case ">":
            return d ? c > a : a > c;
          case ">=":
            return d ? c >= a : a >= c;
          case "<=":
            return d ? a >= c : c >= a
        }
      }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
      }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
      }, e.prototype.trigger = function(b, c, d) {
        var e = {
            item: {
              count: this._items.length,
              index: this.current()
            }
          },
          f = a.camelCase(a.grep(["on", b, d], function(a) {
            return a
          }).join("-").toLowerCase()),
          g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
          }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
          b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
      }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
          this._supress[b] = !0
        }, this))
      }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
          delete this._supress[b]
        }, this))
      }, e.prototype.browserSupport = function() {
        if (this.support3d = j(), this.support3d) {
          this.transformVendor = i();
          var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
          this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
      }, a.fn.owlCarousel = function(b) {
        return this.each(function() {
          a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
      }, a.fn.owlCarousel.Constructor = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b) {
      var c = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
          "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
            if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
              for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(
                  function(a, b) {
                    this.load(b)
                  }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
          }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
      };
      c.Defaults = {
        lazyLoad: !1
      }, c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
          var e, f = a(d),
            g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
          this._core.trigger("load", {
            element: f,
            url: g
          }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
            f.css("opacity", 1), this._core.trigger("loaded", {
              element: f,
              url: g
            }, "lazy")
          }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
            f.css({
              "background-image": "url(" + g + ")",
              opacity: "1"
            }), this._core.trigger("loaded", {
              element: f,
              url: g
            }, "lazy")
          }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
      }, c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
      }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
    }(window.Zepto || window.jQuery, window, document),
    function(a) {
      var b = function(c) {
        this._core = c, this._handlers = {
          "initialized.owl.carousel": a.proxy(function() {
            this._core.settings.autoHeight && this.update()
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
            this._core.settings.autoHeight && "position" == a.property.name && this.update()
          }, this),
          "loaded.owl.lazy": a.proxy(function(a) {
            this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
          }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
      };
      b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
      }, b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
      }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
      }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c) {
      var d = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
          "resize.owl.carousel": a.proxy(function(a) {
            this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
          }, this),
          "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
            this._playing && this.stop()
          }, this),
          "prepared.owl.carousel": a.proxy(function(b) {
            var c = a(b.content).find(".owl-video");
            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
          }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
          this.play(a)
        }, this))
      };
      d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
      }, d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
          d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else {
          if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
          c = "vimeo"
        }
        d = d[6], this._videos[g] = {
          type: c,
          id: d,
          width: e,
          height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
      }, d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function(a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b
              .after(e)
          };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f =
          "http://img.youtube.com/vi/" +
          c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
          type: "GET",
          url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function(a) {
            f = a[0].thumbnail_large, l(f)
          }
        }))
      }, d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
      }, d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement),
          f = e.closest("." + this._core.settings.itemClass),
          g = this._videos[f.attr("data-video")],
          h = g.width || "100%",
          i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c =
            '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this
          ._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
      }, d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state
          .orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
      }, d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
      }, a.fn.owlCarousel.Constructor.Plugins.Video = d
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
      var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
          "change.owl.carousel": a.proxy(function(a) {
            "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
            this.swapping = "translated" == a.type
          }, this),
          "translate.owl.carousel": a.proxy(function() {
            this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
          }, this)
        }, this.core.$element.on(this.handlers)
      };
      e.Defaults = {
        animateOut: !1,
        animateIn: !1
      }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
          this.core.speed(0);
          var b, c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
            left: b + "px"
          }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one(
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
      }, e.prototype.clear = function(b) {
        a(b.target).css({
          left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
      }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
      }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c) {
      var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
          "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
            this.autoplay()
          }, this),
          "play.owl.autoplay": a.proxy(function(a, b, c) {
            this.play(b, c)
          }, this),
          "stop.owl.autoplay": a.proxy(function() {
            this.stop()
          }, this),
          "mouseover.owl.autoplay": a.proxy(function() {
            this.core.settings.autoplayHoverPause && this.pause()
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function() {
            this.core.settings.autoplayHoverPause && this.autoplay()
          }, this)
        }, this.core.$element.on(this.handlers)
      };
      d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
      }, d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
          this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
      }, d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this
          .core
          .next(this.core.settings.autoplaySpeed)
      }, d.prototype.stop = function() {
        b.clearInterval(this.interval)
      }, d.prototype.pause = function() {
        b.clearInterval(this.interval)
      }, d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
      }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
    }(window.Zepto || window.jQuery, window, document),
    function(a) {
      "use strict";
      var b = function(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
        }, this._handlers = {
          "prepared.owl.carousel": a.proxy(function(b) {
            this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
          }, this),
          "add.owl.carousel": a.proxy(function(b) {
            this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
          }, this),
          "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
            this._core.settings.dotsData && this._templates.splice(a.position, 1)
          }, this),
          "change.owl.carousel": a.proxy(function(a) {
            if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
              var b = this._core.current(),
                c = this._core.maximum(),
                d = this._core.minimum();
              a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
            }
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
            "position" == a.property.name && this.draw()
          }, this),
          "refreshed.owl.carousel": a.proxy(function() {
            this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
          }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
      };
      b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
      }, b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)),
          this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
          }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next
          .clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
          }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
          }, this));
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
      }, b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
      }, b.prototype.update = function() {
        var a, b, c, d = this._core.settings,
          e = this._core.clones().length / 2,
          f = e + this._core.items().length,
          g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
          for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
            start: a - e,
            end: a - e + g - 1
          }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
      }, b.prototype.draw = function() {
        var b, c, d = "",
          e = this._core.settings,
          f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next
          .toggle(e.nav), e.dots) {
          if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
            for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
            this._controls.$indicators.html(d)
          } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
          this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
      }, b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
      }, b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
          return a.start <= b && a.end >= b
        }).pop()
      }, b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length,
          b ?
          c += e.slideBy : c -= e.slideBy), c
      }, b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
      }, b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
      }, b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
      }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
    }(window.Zepto || window.jQuery, window, document),
    function(a, b) {
      "use strict";
      var c = function(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
          "initialized.owl.carousel": a.proxy(function() {
            "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
          }, this),
          "prepared.owl.carousel": a.proxy(function(b) {
            var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
            this._hashes[c] = b.content
          }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
          var a = b.location.hash.substring(1),
            c = this._core.$stage.children(),
            d = this._hashes[a] && c.index(this._hashes[a]) || 0;
          return a ? void this._core.to(d, !1, !0) : !1
        }, this))
      };
      c.Defaults = {
        URLhashListener: !1
      }, c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
      }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
    }



  //Sort random function
  function random(owlSelector) {
    owlSelector.children().sort(function() {
      return Math.round(Math.random()) - 0.5;
    }).each(function() {
      $(this).appendTo(owlSelector);
    });
  }



  (window.Zepto || window.jQuery, window, document), jQuery(function(a) {
      random($('#travel-slides'));
      $('#travel-slides').css({
        'opacity': 1.0
      });

      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        var b = document.querySelector('meta[name="viewport"]');
        b && (b.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0", document.body.addEventListener("gesturestart", function() {
          b.content = "width=device-width, minimum-scale=0.25, maximum-scale=4"
        }, !1))
      }
      a(".dst-m h3").fitText(2),
        a(".dst-s h3").fitText(1.1),
        a(".dst-p h3").fitText(1.8),
        a(".dst-g h3").fitText(1.8),
        a(".dst-t h3").fitText(2.4),
        a(".dst-a h3").fitText(1.9),
        a(".mask i").fitText(.7),
        a(".dst-m h1").fitText(2),
        a(".dst-s h1").fitText(1.1),
        a(".dst-g h1").fitText(1.4),
        a(".dst-p h1").fitText(1.8),
        a(".dst-t h1").fitText(2.4),
        a(".dst-a h1").fitText(1.9),
        a(".map-m").fitText(.18),
        a(".map-s").fitText(.18), a(".map-p").fitText(.18),
        a(".map-t").fitText(.18), a(".map-a").fitText(.18),
        a("body#page").length > 0 && a(".owl-carousel").owlCarousel({
          items: 1,
          loop: !1,
          nav: !0,
          navText: ['<span class="icon-chevron-left"></span>', '<span class="icon-chevron-right"></span>'],
          dots: !0
        }), a("body#home").length > 0 && a(".hero").owlCarousel({
          items: 1,
          loop: !0,
          autoplay: !0,
          animateOut: "fadeOut"
        }), a("body#itinerary").length > 0 && a(".itin-list li").matchHeight(), a(".faq-list").on("click", ".question", function(b) {
          return b.preventDefault(), a(this).hasClass("open") ? (a(this).next(".answer").slideUp(), a(this).removeClass("open")) : (a(this).addClass("open"), a(this).next(".answer").slideDown()), !1
        }), a(document).on("click", ".sample .details-launch", function(b) {
          return b.preventDefault(), a(this).hasClass("open") ? (a(this).next(".details").hide(), a(this).removeClass("open")) : (a(this).addClass("open"), a(this).next(".details").show()), !1
        }), a(document).on("click", ".toggle-subs", function(b) {
          return b.preventDefault(), a(this).hasClass("open") ? (a(this).next(".subs").slideUp(), a(this).removeClass("open")) : (a(this).addClass("open"), a(this).next(".subs").slideDown()), !1
        })
    }),

    //main menu
    jQuery(function(a) {
      a(document).on("click", ".menu-toggle", function() {
        return a(".menu-toggle").hasClass("open") ? (a(".main-nav").hide(), a(".menu-toggle").removeClass("open"), a("body").removeClass("no-scroll")) : (a(".menu-toggle").addClass("open"), a("body").addClass("no-scroll"), a(".main-nav")
          .show()), !1
      })
    }), $(window).resize(function() {
      var a = $(window).width();
      a > 992 ? ($(".main-nav").show(), $(".menu-toggle").addClass("open")) : ($(".main-nav").hide(), $(".menu-toggle").removeClass("open"), $("body").removeClass("no-scroll"))
    }), jQuery(function(a) {
      var b = a(".dropdown").parent().height(),
        c = a(".dropdown").parent().offset().top;
      a(".dropdown").css("display", "none"), a(".dropdown").css("left", "0px").css("top", b + c + "px"), a("#nav").on("click", ".dst-drop", function(b) {
        return b.preventDefault(), a(this).hasClass("open") ? (a(".dropdown").slideUp({
          duration: 500,
          easing: "easeInOutCirc"
        }), a(this).removeClass("open")) : (a(this).addClass("open"), a(".dropdown").slideDown({
          duration: 500,
          easing: "easeInOutCirc"
        })), !1
      })
    }),

    $.fn.proSlider = function() {
      function a() {
        var a = 0,
          e = $(window).height();
        b.each(function() {
          var b = $(this).outerHeight();
          a = b > a ? b : a
        });
        var f = c + a,
          g = e + $(window).scrollTop();
        f > e ? g > f ? d.hide().removeClass("move") : d.show().addClass("move") : d.hide().removeClass("move")
      }
      var b = $(".slide", this),
        c = $("#header").height(),
        d = $(".scroll-moron");
      return $(window).resize(function() {
        a()
      }), $(window).scroll(function() {
        a()
      }), a(), this.each(function() {})



    }, $(document).ready(function() {
      $(".hero").length > 0 && $(".hero").proSlider();




      $('img.subnav').css({
        "display": "none"
      });
      $('a.subnav').hover(function() {
        $('#nav-img-init').css({
          "display": "none"
        }); // hide inital image
        $('ul.subnav').css({
          "display": "none"
        }); // init hiding of all subnavs
        $('img.subnav').css({
          "display": "none"
        }); // in it hiding of all subnav images
        var mainNavHoverId = $(this).attr('id'); //reps the name of the main destination nav hovered on (i.e asia)


        $('#' + mainNavHoverId + 'subnav').stop().fadeIn();; //build up the id of the subnav we want to show on hover
        $('.' + mainNavHoverId + 'subnav').stop().fadeIn();


        //  console.log(navImg);
      });
    });

  // $('img.subnav').hide();
  // $('a.subnav').hover( function() {
  //     $('#nav-img-init').hide(); // hide inital image
  //     $('ul.subnav').hide(); // init hiding of all subnavs
  //     $('img.subnav').hide(); // in it hiding of all subnav images
  //     var mainNavHoverId = $(this).attr('id'); //reps the name of the main destination nav hovered on (i.e asia)


  //      $('#' + mainNavHoverId + 'subnav').stop().fadeIn(); //build up the id of the subnav we want to show on hover
  //      $('.' + mainNavHoverId + 'subnav').stop().fadeIn();

  //      console.log(subNav);
  //     //  console.log(navImg);
  // });
