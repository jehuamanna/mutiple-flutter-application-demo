// Generated by dart2js (NullSafetyMode.sound, csp, intern-composite-values), the Dart to JavaScript compiler version: 3.5.0-167.0.dev.
((s, d, e) => {
  s[d] = s[d] || {};
  s[d][e] = s[d][e] || [];
  s[d][e].push({p: "main.dart.js_576", e: "beginPart"});
})(self, "$__dart_deferred_initializers__", "eventLog");
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var A, D,
  B = {
    Tab$(text) {
      return new B.Tab(text, null);
    },
    Tab: function Tab(t0, t1) {
      this.text = t0;
      this.key = t1;
    }
  },
  C;
  A = holdersList[0];
  D = holdersList[2];
  B = hunkHelpers.updateHolder(holdersList[103], B);
  C = holdersList[120];
  B.Tab.prototype = {
    _buildLabelText$0() {
      var _null = null,
        t1 = A.Text$(this.text, _null, D.TextOverflow_1, _null, false, _null, _null, _null, _null);
      return t1;
    },
    build$1(context) {
      var label = this._buildLabelText$0();
      return A.SizedBox$(A.Center$(label, null, 1), 46, null);
    },
    get$preferredSize() {
      return C.Size_HFk0;
    },
    $isPreferredSizeWidget: 1
  };
  var typesOffset = hunkHelpers.updateTypes([]);
  (function inheritance() {
    var _inherit = hunkHelpers.inherit;
    _inherit(B.Tab, A.StatelessWidget);
  })();
  A._Universe_addRules(init.typeUniverse, JSON.parse('{"Tab":{"StatelessWidget":[],"PreferredSizeWidget":[],"Widget":[],"DiagnosticableTree":[]}}'));
  (function constants() {
    C.EdgeInsets_0_0_0_10 = new A.EdgeInsets(0, 0, 0, 10);
    C.Size_HFk0 = new A.Size(1 / 0, 46);
  })();
};
;
((d, h) => {
  d[h] = d.current;
  d.eventLog.push({p: "main.dart.js_576", e: "endPart", h: h});
})($__dart_deferred_initializers__, "+J7jWJsaY2vjt0Pc+QqYakhkc08=");
;