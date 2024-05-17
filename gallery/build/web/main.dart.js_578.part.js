// Generated by dart2js (NullSafetyMode.sound, csp, intern-composite-values), the Dart to JavaScript compiler version: 3.5.0-167.0.dev.
((s, d, e) => {
  s[d] = s[d] || {};
  s[d][e] = s[d][e] || [];
  s[d][e].push({p: "main.dart.js_578", e: "beginPart"});
})(self, "$__dart_deferred_initializers__", "eventLog");
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var A, C,
  B = {OverflowBoxFit: function OverflowBoxFit(t0, t1) {
      this.index = t0;
      this._core$_name = t1;
    }, RenderConstrainedOverflowBox: function RenderConstrainedOverflowBox(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
      var _ = this;
      _._minWidth = t0;
      _._shifted_box$_maxWidth = t1;
      _._minHeight = t2;
      _._shifted_box$_maxHeight = t3;
      _._shifted_box$_fit = t4;
      _._resolvedAlignment = null;
      _._alignment = t5;
      _._shifted_box$_textDirection = t6;
      _.RenderObjectWithChildMixin__child = t7;
      _._layoutCacheStorage = t8;
      _._computingThisDryBaseline = _._computingThisDryLayout = false;
      _._box$_size = null;
      _._debugActivePointers = 0;
      _._debugDisposed = false;
      _.parentData = null;
      _._depth = 0;
      _.debugCreator = _._object$_parent = null;
      _._debugDoingThisLayout = _._debugDoingThisResize = false;
      _._debugCanParentUseSize = null;
      _._debugMutationsLocked = false;
      _._object$_owner = null;
      _._needsLayout = true;
      _._relayoutBoundary = null;
      _._doingThisLayoutWithCallback = false;
      _._constraints = null;
      _._debugDoingThisPaint = false;
      _.__RenderObject__wasRepaintBoundary_A = $;
      _._layerHandle = t9;
      _._needsCompositingBitsUpdate = false;
      _.__RenderObject__needsCompositing_A = $;
      _._needsPaint = true;
      _._needsCompositedLayerUpdate = false;
      _._cachedSemanticsConfiguration = null;
      _._needsSemanticsUpdate = true;
      _._semantics = null;
    },
    OverflowBox$(alignment, child, maxHeight, maxWidth, minHeight, minWidth) {
      return new B.OverflowBox(alignment, minWidth, maxWidth, minHeight, maxHeight, child, null);
    },
    OverflowBox: function OverflowBox(t0, t1, t2, t3, t4, t5, t6) {
      var _ = this;
      _.alignment = t0;
      _.minWidth = t1;
      _.maxWidth = t2;
      _.minHeight = t3;
      _.maxHeight = t4;
      _.child = t5;
      _.key = t6;
    }
  },
  D;
  A = holdersList[0];
  C = holdersList[2];
  B = hunkHelpers.updateHolder(holdersList[95], B);
  D = holdersList[140];
  B.OverflowBoxFit.prototype = {
    _enumToString$0() {
      return "OverflowBoxFit." + this._core$_name;
    }
  };
  B.RenderConstrainedOverflowBox.prototype = {
    set$minWidth(_, value) {
      if (this._minWidth == value)
        return;
      this._minWidth = value;
      this.markNeedsLayout$0();
    },
    set$maxWidth(_, value) {
      if (this._shifted_box$_maxWidth == value)
        return;
      this._shifted_box$_maxWidth = value;
      this.markNeedsLayout$0();
    },
    set$minHeight(_, value) {
      if (this._minHeight == value)
        return;
      this._minHeight = value;
      this.markNeedsLayout$0();
    },
    set$maxHeight(_, value) {
      if (this._shifted_box$_maxHeight === value)
        return;
      this._shifted_box$_maxHeight = value;
      this.markNeedsLayout$0();
    },
    set$fit(value) {
      var _this = this;
      if (_this._shifted_box$_fit === value)
        return;
      _this._shifted_box$_fit = value;
      _this.markNeedsLayout$0();
      _this.markParentNeedsLayout$0();
    },
    _getInnerConstraints$1(constraints) {
      var t2, t3, t4, _this = this,
        t1 = _this._minWidth;
      if (t1 == null)
        t1 = constraints.minWidth;
      t2 = _this._shifted_box$_maxWidth;
      if (t2 == null)
        t2 = constraints.maxWidth;
      t3 = _this._minHeight;
      if (t3 == null)
        t3 = constraints.minHeight;
      t4 = _this._shifted_box$_maxHeight;
      return new A.BoxConstraints(t1, t2, t3, t4);
    },
    get$sizedByParent() {
      switch (this._shifted_box$_fit.index) {
        case 0:
          var t1 = true;
          break;
        case 1:
          t1 = false;
          break;
        default:
          t1 = null;
      }
      return t1;
    },
    computeDryLayout$1(constraints) {
      var t1;
      switch (this._shifted_box$_fit.index) {
        case 0:
          t1 = new A.Size(A.clampDouble(1 / 0, constraints.minWidth, constraints.maxWidth), A.clampDouble(1 / 0, constraints.minHeight, constraints.maxHeight));
          break;
        case 1:
          t1 = this.RenderObjectWithChildMixin__child;
          t1 = t1 == null ? null : t1._computeIntrinsics$2$3(C.C__DryLayout, constraints, t1.get$_computeDryLayout(), type$.BoxConstraints, type$.Size);
          if (t1 == null)
            t1 = new A.Size(A.clampDouble(0, constraints.minWidth, constraints.maxWidth), A.clampDouble(0, constraints.minHeight, constraints.maxHeight));
          break;
        default:
          t1 = null;
      }
      return t1;
    },
    computeDryBaseline$2(constraints, baseline) {
      var child, childConstraints, result, t2, t3, _this = this,
        t1 = type$.BoxConstraints;
      t1._as(constraints);
      type$.TextBaseline._as(baseline);
      child = _this.RenderObjectWithChildMixin__child;
      if (child == null)
        return null;
      childConstraints = _this._getInnerConstraints$1(constraints);
      result = child.getDryBaseline$2(childConstraints, baseline);
      if (result == null)
        return null;
      t2 = type$.Size;
      t3 = child._computeIntrinsics$2$3(C.C__DryLayout, childConstraints, child.get$_computeDryLayout(), t1, t2);
      t2 = _this._computeIntrinsics$2$3(C.C__DryLayout, constraints, _this.get$_computeDryLayout(), t1, t2);
      return result + _this.get$resolvedAlignment().alongOffset$1(type$.Offset._as(t2.$sub(0, t3)))._dy;
    },
    performLayout$0() {
      var t2, _this = this,
        t1 = _this.RenderObjectWithChildMixin__child;
      if (t1 != null) {
        t2 = type$.BoxConstraints;
        t1.layout$2$parentUsesSize(_this._getInnerConstraints$1(t2._as(A.RenderObject.prototype.get$constraints.call(_this))), true);
        switch (_this._shifted_box$_fit.index) {
          case 0:
            break;
          case 1:
            _this._box$_size = t2._as(A.RenderObject.prototype.get$constraints.call(_this)).constrain$1(_this.RenderObjectWithChildMixin__child.get$size(0));
            break;
        }
        _this.alignChild$0();
      } else
        switch (_this._shifted_box$_fit.index) {
          case 0:
            break;
          case 1:
            t1 = type$.BoxConstraints._as(A.RenderObject.prototype.get$constraints.call(_this));
            _this._box$_size = new A.Size(A.clampDouble(0, t1.minWidth, t1.maxWidth), A.clampDouble(0, t1.minHeight, t1.maxHeight));
            break;
        }
    }
  };
  B.OverflowBox.prototype = {
    createRenderObject$1(context) {
      var _this = this,
        t1 = new B.RenderConstrainedOverflowBox(_this.minWidth, _this.maxWidth, _this.minHeight, _this.maxHeight, D.OverflowBoxFit_0, _this.alignment, A.Directionality_maybeOf(context), null, new A._LayoutCacheStorage(), A.LayerHandle$(type$.ContainerLayer));
      t1.RenderObject$0();
      t1.set$child(null);
      return t1;
    },
    updateRenderObject$2(context, renderObject) {
      var _this = this;
      type$.RenderConstrainedOverflowBox._as(renderObject);
      renderObject.set$alignment(_this.alignment);
      renderObject.set$minWidth(0, _this.minWidth);
      renderObject.set$maxWidth(0, _this.maxWidth);
      renderObject.set$minHeight(0, _this.minHeight);
      renderObject.set$maxHeight(0, _this.maxHeight);
      renderObject.set$fit(D.OverflowBoxFit_0);
      renderObject.set$textDirection(A.Directionality_maybeOf(context));
    }
  };
  var typesOffset = hunkHelpers.updateTypes([]);
  (function inheritance() {
    var _inherit = hunkHelpers.inherit;
    _inherit(B.OverflowBoxFit, A._Enum);
    _inherit(B.RenderConstrainedOverflowBox, A.RenderAligningShiftedBox);
    _inherit(B.OverflowBox, A.SingleChildRenderObjectWidget);
  })();
  A._Universe_addRules(init.typeUniverse, JSON.parse('{"OverflowBoxFit":{"Enum":[]},"RenderConstrainedOverflowBox":{"RenderBox":[],"RenderObjectWithChildMixin":["RenderBox"],"RenderObject":[],"DiagnosticableTree":[],"HitTestTarget":[],"RenderObjectWithChildMixin.0":"RenderBox"},"OverflowBox":{"SingleChildRenderObjectWidget":[],"RenderObjectWidget":[],"Widget":[],"DiagnosticableTree":[]}}'));
  var type$ = {
    BoxConstraints: A.findType("BoxConstraints"),
    ContainerLayer: A.findType("ContainerLayer0"),
    Offset: A.findType("Offset"),
    RenderConstrainedOverflowBox: A.findType("RenderConstrainedOverflowBox"),
    Size: A.findType("Size"),
    TextBaseline: A.findType("TextBaseline")
  };
  (function constants() {
    D.OverflowBoxFit_0 = new B.OverflowBoxFit(0, "max");
  })();
};
;
((d, h) => {
  d[h] = d.current;
  d.eventLog.push({p: "main.dart.js_578", e: "endPart", h: h});
})($__dart_deferred_initializers__, "WBJuAmgNc8S9+iddAHfjZPWBuWQ=");
;