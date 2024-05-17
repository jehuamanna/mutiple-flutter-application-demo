// Generated by dart2js (NullSafetyMode.sound, csp, intern-composite-values), the Dart to JavaScript compiler version: 3.5.0-167.0.dev.
((s, d, e) => {
  s[d] = s[d] || {};
  s[d][e] = s[d][e] || [];
  s[d][e].push({p: "main.dart.js_586", e: "beginPart"});
})(self, "$__dart_deferred_initializers__", "eventLog");
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var J, A, C,
  B = {
    showModalBottomSheet(builder, context, $T) {
      var t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, _null = null,
        $navigator = A.Navigator_of(context, false),
        t1 = A.Localizations_of(context, C.Type_MaterialLocalizations_EyN, type$.MaterialLocalizations);
      t1.toString;
      t2 = $navigator._framework$_element;
      t2.toString;
      t2 = A.InheritedTheme_capture(context, t2);
      t3 = t1.get$scrimLabel();
      t1 = t1.scrimOnTapHint$1(t1.get$bottomSheetLabel());
      t4 = A.Theme_of(context);
      t5 = $.$get$ChangeNotifier__emptyListeners();
      t6 = A._setArrayType([], type$.JSArray_of_Future_bool_Function);
      t7 = $.Zone__current;
      t8 = A.ProxyAnimation$(C.C__AlwaysDismissedAnimation);
      t9 = A._setArrayType([], type$.JSArray_OverlayEntry);
      t10 = $.Zone__current;
      t11 = $T._eval$1("_Future<0?>");
      t12 = $T._eval$1("_AsyncCompleter<0?>");
      return $navigator.push$1$1(new B.ModalBottomSheetRoute(builder, t2, false, 0.5625, _null, _null, _null, _null, _null, t4.bottomSheetTheme.modalBarrierColor, true, true, _null, _null, _null, false, _null, t1, new A.ValueNotifier(C.EdgeInsets_0_0_0_0, t5, type$.ValueNotifier_EdgeInsets), t3, _null, _null, t6, A.LinkedHashSet_LinkedHashSet$_empty(type$.PopEntry_nullable_Object), new A.LabeledGlobalKey(_null, $T._eval$1("LabeledGlobalKey<_ModalScopeState<0>>")), new A.LabeledGlobalKey(_null, type$.LabeledGlobalKey_State_StatefulWidget), new A.PageStorageBucket(), _null, 0, new A._AsyncCompleter(new A._Future(t7, $T._eval$1("_Future<0?>")), $T._eval$1("_AsyncCompleter<0?>")), t8, t9, C.RouteSettings_null_null, new A.ValueNotifier(_null, t5, type$.ValueNotifier_nullable_String), new A._AsyncCompleter(new A._Future(t10, t11), t12), new A._AsyncCompleter(new A._Future(t10, t11), t12), $T._eval$1("ModalBottomSheetRoute<0>")), $T);
    },
    _BottomSheetLayoutWithSizeListener: function _BottomSheetLayoutWithSizeListener(t0, t1, t2, t3, t4, t5) {
      var _ = this;
      _.onChildSizeChanged = t0;
      _.animationValue = t1;
      _.isScrollControlled = t2;
      _.scrollControlDisabledMaxHeightRatio = t3;
      _.child = t4;
      _.key = t5;
    },
    _RenderBottomSheetLayoutWithSizeListener: function _RenderBottomSheetLayoutWithSizeListener(t0, t1, t2, t3, t4, t5, t6, t7) {
      var _ = this;
      _._lastSize = t0;
      _._onChildSizeChanged = t1;
      _._animationValue = t2;
      _._isScrollControlled = t3;
      _._scrollControlDisabledMaxHeightRatio = t4;
      _.RenderObjectWithChildMixin__child = t5;
      _._layoutCacheStorage = t6;
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
      _._layerHandle = t7;
      _._needsCompositingBitsUpdate = false;
      _.__RenderObject__needsCompositing_A = $;
      _._needsPaint = true;
      _._needsCompositedLayerUpdate = false;
      _._cachedSemanticsConfiguration = null;
      _._needsSemanticsUpdate = true;
      _._semantics = null;
    },
    _ModalBottomSheet: function _ModalBottomSheet(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11) {
      var _ = this;
      _.route = t0;
      _.isScrollControlled = t1;
      _.scrollControlDisabledMaxHeightRatio = t2;
      _.backgroundColor = t3;
      _.elevation = t4;
      _.shape = t5;
      _.clipBehavior = t6;
      _.constraints = t7;
      _.enableDrag = t8;
      _.showDragHandle = t9;
      _.key = t10;
      _.$ti = t11;
    },
    _ModalBottomSheetState: function _ModalBottomSheetState(t0, t1, t2) {
      var _ = this;
      _.animationCurve = t0;
      _._widget = null;
      _._debugLifecycleState = t1;
      _._framework$_element = null;
      _.$ti = t2;
    },
    _ModalBottomSheetState_build_closure0: function _ModalBottomSheetState_build_closure0(t0, t1) {
      this.$this = t0;
      this.context = t1;
    },
    _ModalBottomSheetState_build_closure: function _ModalBottomSheetState_build_closure(t0, t1) {
      this.$this = t0;
      this.routeLabel = t1;
    },
    _ModalBottomSheetState_build__closure: function _ModalBottomSheetState_build__closure(t0) {
      this.$this = t0;
    },
    ModalBottomSheetRoute: function ModalBottomSheetRoute(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36) {
      var _ = this;
      _.builder = t0;
      _.capturedThemes = t1;
      _.isScrollControlled = t2;
      _.scrollControlDisabledMaxHeightRatio = t3;
      _.backgroundColor = t4;
      _.elevation = t5;
      _.shape = t6;
      _.clipBehavior = t7;
      _.constraints = t8;
      _.modalBarrierColor = t9;
      _.isDismissible = t10;
      _.enableDrag = t11;
      _.showDragHandle = t12;
      _.transitionAnimationController = t13;
      _.anchorPoint = t14;
      _.useSafeArea = t15;
      _.sheetAnimationStyle = t16;
      _.barrierOnTapHint = t17;
      _._bottom_sheet$_clipDetailsNotifier = t18;
      _.barrierLabel = t19;
      _._animationController = null;
      _.filter = t20;
      _.traversalEdgeBehavior = t21;
      _._offstage = false;
      _._secondaryAnimationProxy = _._animationProxy = null;
      _._willPopCallbacks = t22;
      _._popEntries = t23;
      _._scopeKey = t24;
      _._subtreeKey = t25;
      _._storageBucket = t26;
      _.__ModalRoute__modalBarrier_A = $;
      _._modalScopeCache = null;
      _.__ModalRoute__modalScope_A = $;
      _.LocalHistoryRoute__localHistory = t27;
      _.LocalHistoryRoute__entriesImpliesAppBarDismissal = t28;
      _._transitionCompleter = t29;
      _._performanceModeRequestHandle = null;
      _._popFinalized = false;
      _._routes$_controller = _._animation = null;
      _._secondaryAnimation = t30;
      _.willDisposeAnimationController = true;
      _._trainHoppingListenerRemover = _._result = null;
      _._overlayEntries = t31;
      _._navigator = null;
      _._settings = t32;
      _._restorationScopeId = t33;
      _._popCompleter = t34;
      _._disposeCompleter = t35;
      _.$ti = t36;
    },
    ModalBottomSheetRoute_buildPage_closure: function ModalBottomSheetRoute_buildPage_closure(t0) {
      this.$this = t0;
    }
  };
  J = holdersList[1];
  A = holdersList[0];
  C = holdersList[2];
  B = hunkHelpers.updateHolder(holdersList[101], B);
  B._BottomSheetLayoutWithSizeListener.prototype = {
    createRenderObject$1(context) {
      var t1 = new B._RenderBottomSheetLayoutWithSizeListener(C.Size_0_0, this.onChildSizeChanged, this.animationValue, false, this.scrollControlDisabledMaxHeightRatio, null, new A._LayoutCacheStorage(), A.LayerHandle$(type$.ContainerLayer));
      t1.RenderObject$0();
      t1.set$child(null);
      return t1;
    },
    updateRenderObject$2(context, renderObject) {
      type$._RenderBottomSheetLayoutWithSizeListener._as(renderObject);
      renderObject.set$onChildSizeChanged(this.onChildSizeChanged);
      renderObject.set$animationValue(this.animationValue);
      renderObject.set$isScrollControlled(false);
      renderObject.set$scrollControlDisabledMaxHeightRatio(this.scrollControlDisabledMaxHeightRatio);
    }
  };
  B._RenderBottomSheetLayoutWithSizeListener.prototype = {
    set$onChildSizeChanged(newCallback) {
      type$.void_Function_Size._as(newCallback);
      if (J.$eq$(this._onChildSizeChanged, newCallback))
        return;
      this.set$_onChildSizeChanged(newCallback);
      this.markNeedsLayout$0();
    },
    set$animationValue(newValue) {
      if (this._animationValue === newValue)
        return;
      this._animationValue = newValue;
      this.markNeedsLayout$0();
    },
    set$isScrollControlled(newValue) {
      return;
    },
    set$scrollControlDisabledMaxHeightRatio(newValue) {
      if (this._scrollControlDisabledMaxHeightRatio === newValue)
        return;
      this._scrollControlDisabledMaxHeightRatio = newValue;
      this.markNeedsLayout$0();
    },
    computeMinIntrinsicWidth$1(height) {
      var t1 = A.BoxConstraints$tightForFinite(A._asDouble(height), 1 / 0),
        width = t1.constrain$1(new A.Size(A.clampDouble(1 / 0, t1.minWidth, t1.maxWidth), A.clampDouble(1 / 0, t1.minHeight, t1.maxHeight)))._dx;
      if (isFinite(width))
        return width;
      return 0;
    },
    computeMaxIntrinsicWidth$1(height) {
      var t1 = A.BoxConstraints$tightForFinite(A._asDouble(height), 1 / 0),
        width = t1.constrain$1(new A.Size(A.clampDouble(1 / 0, t1.minWidth, t1.maxWidth), A.clampDouble(1 / 0, t1.minHeight, t1.maxHeight)))._dx;
      if (isFinite(width))
        return width;
      return 0;
    },
    computeMinIntrinsicHeight$1(width) {
      var t1 = A.BoxConstraints$tightForFinite(1 / 0, A._asDouble(width)),
        height = t1.constrain$1(new A.Size(A.clampDouble(1 / 0, t1.minWidth, t1.maxWidth), A.clampDouble(1 / 0, t1.minHeight, t1.maxHeight)))._dy;
      if (isFinite(height))
        return height;
      return 0;
    },
    computeMaxIntrinsicHeight$1(width) {
      var t1 = A.BoxConstraints$tightForFinite(1 / 0, A._asDouble(width)),
        height = t1.constrain$1(new A.Size(A.clampDouble(1 / 0, t1.minWidth, t1.maxWidth), A.clampDouble(1 / 0, t1.minHeight, t1.maxHeight)))._dy;
      if (isFinite(height))
        return height;
      return 0;
    },
    computeDryLayout$1(constraints) {
      return constraints.constrain$1(new A.Size(A.clampDouble(1 / 0, constraints.minWidth, constraints.maxWidth), A.clampDouble(1 / 0, constraints.minHeight, constraints.maxHeight)));
    },
    computeDryBaseline$2(constraints, baseline) {
      var child, childConstraints, result, t2, t3, childSize,
        t1 = type$.BoxConstraints;
      t1._as(constraints);
      type$.TextBaseline._as(baseline);
      child = this.RenderObjectWithChildMixin__child;
      if (child == null)
        return null;
      childConstraints = this._getConstraintsForChild$1(constraints);
      result = child.getDryBaseline$2(childConstraints, baseline);
      if (result == null)
        return null;
      t2 = childConstraints.minWidth;
      t3 = childConstraints.maxWidth;
      childSize = t2 >= t3 && childConstraints.minHeight >= childConstraints.maxHeight ? new A.Size(A.clampDouble(0, t2, t3), A.clampDouble(0, childConstraints.minHeight, childConstraints.maxHeight)) : child._computeIntrinsics$2$3(C.C__DryLayout, childConstraints, child.get$_computeDryLayout(), t1, type$.Size);
      return result + this._getPositionForChild$2(constraints.constrain$1(new A.Size(A.clampDouble(1 / 0, constraints.minWidth, constraints.maxWidth), A.clampDouble(1 / 0, constraints.minHeight, constraints.maxHeight))), childSize)._dy;
    },
    _getConstraintsForChild$1(constraints) {
      var t1 = constraints.maxWidth,
        t2 = this._scrollControlDisabledMaxHeightRatio;
      return new A.BoxConstraints(t1, t1, 0, constraints.maxHeight * t2);
    },
    _getPositionForChild$2(size, childSize) {
      return new A.Offset(0, size._dy - childSize._dy * this._animationValue);
    },
    performLayout$0() {
      var child, childConstraints, t3, t4, childSize, _this = this,
        t1 = type$.BoxConstraints,
        t2 = t1._as(A.RenderObject.prototype.get$constraints.call(_this));
      _this._box$_size = t2.constrain$1(new A.Size(A.clampDouble(1 / 0, t2.minWidth, t2.maxWidth), A.clampDouble(1 / 0, t2.minHeight, t2.maxHeight)));
      child = _this.RenderObjectWithChildMixin__child;
      if (child == null)
        return;
      childConstraints = _this._getConstraintsForChild$1(t1._as(A.RenderObject.prototype.get$constraints.call(_this)));
      t1 = childConstraints.minWidth;
      t2 = childConstraints.maxWidth;
      t3 = t1 >= t2;
      child.layout$2$parentUsesSize(childConstraints, !(t3 && childConstraints.minHeight >= childConstraints.maxHeight));
      t4 = child.parentData;
      t4.toString;
      type$.BoxParentData._as(t4);
      childSize = t3 && childConstraints.minHeight >= childConstraints.maxHeight ? new A.Size(A.clampDouble(0, t1, t2), A.clampDouble(0, childConstraints.minHeight, childConstraints.maxHeight)) : child.get$size(0);
      t4.offset = _this._getPositionForChild$2(_this.get$size(0), childSize);
      if (!_this._lastSize.$eq(0, childSize)) {
        _this._lastSize = childSize;
        _this._onChildSizeChanged.call$1(childSize);
      }
    },
    set$_onChildSizeChanged(_onChildSizeChanged) {
      this._onChildSizeChanged = type$.void_Function_Size._as(_onChildSizeChanged);
    }
  };
  B._ModalBottomSheet.prototype = {
    createState$0() {
      return new B._ModalBottomSheetState(C.Cubic_oXg, C._StateLifecycle_0, this.$ti._eval$1("_ModalBottomSheetState<1>"));
    }
  };
  B._ModalBottomSheetState.prototype = {
    _getRouteLabel$1(localizations) {
      var t1 = this._framework$_element;
      t1.toString;
      switch (A.Theme_of(t1).platform.index) {
        case 2:
        case 4:
          return "";
        case 0:
        case 1:
        case 3:
        case 5:
          return localizations.get$dialogLabel();
      }
    },
    handleDragStart$1(details) {
      this.set$animationCurve(C.C__Linear);
    },
    handleDragEnd$2$isClosing(details, isClosing) {
      this.set$animationCurve(new A.Split(this._widget.route._animationProxy.get$value(0), C.Cubic_oXg));
    },
    handleDragEnd$1(details) {
      return this.handleDragEnd$2$isClosing(details, null);
    },
    build$1(context) {
      var routeLabel, t2, t3, t4, t5, t6, t7, _this = this,
        t1 = A.Localizations_of(context, C.Type_MaterialLocalizations_EyN, type$.MaterialLocalizations);
      t1.toString;
      routeLabel = _this._getRouteLabel$1(t1);
      t1 = _this._widget;
      t2 = t1.route;
      t3 = t2._animationProxy;
      t3.toString;
      t4 = t2._animationController;
      t5 = t1.backgroundColor;
      t6 = t1.elevation;
      t7 = t1.shape;
      return A.AnimatedBuilder$(t3, new B._ModalBottomSheetState_build_closure(_this, routeLabel), A.BottomSheet$(t4, t5, t2.builder, t1.clipBehavior, t1.constraints, t6, true, new B._ModalBottomSheetState_build_closure0(_this, context), _this.get$handleDragEnd(), _this.get$handleDragStart(), t7, t1.showDragHandle));
    },
    set$animationCurve(animationCurve) {
      this.animationCurve = type$.ParametricCurve_double._as(animationCurve);
    }
  };
  B.ModalBottomSheetRoute.prototype = {
    dispose$0() {
      var t1 = this._bottom_sheet$_clipDetailsNotifier;
      t1.set$_change_notifier$_listeners($.$get$ChangeNotifier__emptyListeners());
      t1.ChangeNotifier__count = 0;
      this.super$TransitionRoute$dispose();
    },
    _didChangeBarrierSemanticsClip$1(newClipDetails) {
      var t1 = this._bottom_sheet$_clipDetailsNotifier;
      if (J.$eq$(t1._change_notifier$_value, newClipDetails))
        return false;
      t1.set$value(0, newClipDetails);
      return true;
    },
    get$transitionDuration(_) {
      return C.Duration_250000;
    },
    get$reverseTransitionDuration() {
      return C.Duration_200000;
    },
    get$barrierDismissible() {
      return true;
    },
    get$barrierColor() {
      var t1 = this.modalBarrierColor;
      return t1 == null ? C.Color_2315255808 : t1;
    },
    createAnimationController$0() {
      var t1 = this._navigator;
      t1.toString;
      t1 = A.BottomSheet_createAnimationController(t1, this.sheetAnimationStyle);
      this._animationController = t1;
      return t1;
    },
    buildPage$3(context, animation, secondaryAnimation) {
      var bottomSheet,
        t1 = type$.Animation_double;
      t1._as(animation);
      t1._as(secondaryAnimation);
      bottomSheet = A.MediaQuery$removePadding(new A.DisplayFeatureSubScreen(this.anchorPoint, new A.Builder(new B.ModalBottomSheetRoute_buildPage_closure(this), null), null), context, false, false, false, true);
      t1 = new A._CaptureAll(this.capturedThemes._themes, bottomSheet, null);
      return t1;
    },
    buildModalBarrier$0() {
      var t3, t4, _this = this,
        t1 = _this.modalBarrierColor,
        t2 = t1 == null;
      if (((t2 ? C.Color_2315255808 : t1).value >>> 24 & 255) !== 0 && !_this._offstage) {
        t3 = _this._animationProxy;
        t3.toString;
        t4 = (t2 ? C.Color_2315255808 : t1).value;
        t4 = A.Color$fromARGB(0, t4 >>> 16 & 255, t4 >>> 8 & 255, t4 & 255);
        if (t2)
          t1 = C.Color_2315255808;
        t1 = type$.Animatable_nullable_Color._as(new A._ChainedEvaluation(type$.Animatable_double._as(new A.CurveTween(C.Cubic_WKj)), new A.ColorTween(t4, t1), type$.ColorTween._eval$1("_ChainedEvaluation<Animatable.T>")));
        t4 = type$.Animation_double;
        return A.AnimatedModalBarrier$(true, _this._bottom_sheet$_clipDetailsNotifier, new A._AnimatedEvaluation(t4._as(t4._as(t3)), t1, t1.$ti._eval$1("_AnimatedEvaluation<Animatable.T>")), true, _this.barrierLabel, _this.barrierOnTapHint);
      } else
        return A.ModalBarrier$(true, _this._bottom_sheet$_clipDetailsNotifier, null, true, null, _this.barrierLabel, _this.barrierOnTapHint);
    },
    get$barrierLabel() {
      return this.barrierLabel;
    }
  };
  var typesOffset = hunkHelpers.updateTypes(["double(double)", "~(DragStartDetails)", "~(DragEndDetails{isClosing:bool?})"]);
  B._ModalBottomSheetState_build_closure0.prototype = {
    call$0() {
      if (this.$this._widget.route.get$isCurrent())
        A.Navigator_of(this.context, false).pop$1$1(null, type$.nullable_Object);
    },
    $signature: 0
  };
  B._ModalBottomSheetState_build_closure.prototype = {
    call$2(context, child) {
      var t1, _null = null;
      type$.BuildContext._as(context);
      type$.nullable_Widget._as(child);
      t1 = this.$this;
      t1 = A.ClipRect$(new B._BottomSheetLayoutWithSizeListener(new B._ModalBottomSheetState_build__closure(t1), t1.animationCurve.transform$1(0, t1._widget.route._animationProxy.get$value(0)), false, t1._widget.scrollControlDisabledMaxHeightRatio, child, _null), C.Clip_1, _null);
      return new A.Semantics(A.SemanticsProperties$(_null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, this.routeLabel, _null, _null, _null, _null, _null, true, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, true, _null, _null, _null, _null, _null, _null, _null, _null, _null), false, true, false, false, t1, _null);
    },
    $signature: 222
  };
  B._ModalBottomSheetState_build__closure.prototype = {
    call$1(size) {
      type$.Size._as(size);
      this.$this._widget.route._didChangeBarrierSemanticsClip$1(new A.EdgeInsets(0, 0, 0, size._dy));
    },
    $signature: 132
  };
  B.ModalBottomSheetRoute_buildPage_closure.prototype = {
    call$1(context) {
      var sheetTheme, defaults, t1, t2, t3, t4;
      type$.BuildContext._as(context);
      sheetTheme = A.Theme_of(context).bottomSheetTheme;
      A.Theme_of(context);
      defaults = A._BottomSheetDefaultsM3$(context);
      t1 = this.$this;
      t2 = sheetTheme.modalBackgroundColor;
      if (t2 == null)
        t2 = sheetTheme.backgroundColor;
      if (t2 == null)
        t2 = defaults.get$backgroundColor(0);
      t3 = sheetTheme.modalElevation;
      if (t3 == null)
        t3 = sheetTheme.elevation;
      if (t3 == null)
        t3 = defaults.modalElevation;
      t4 = t1.showDragHandle;
      t4 = false;
      return new B._ModalBottomSheet(t1, false, t1.scrollControlDisabledMaxHeightRatio, t2, t3, t1.shape, t1.clipBehavior, t1.constraints, true, t4, null, t1.$ti._eval$1("_ModalBottomSheet<1>"));
    },
    $signature() {
      return this.$this.$ti._eval$1("_ModalBottomSheet<1>(BuildContext)");
    }
  };
  (function installTearOffs() {
    var _instance_1_u = hunkHelpers._instance_1u,
      _instance = hunkHelpers.installInstanceTearOff;
    var _;
    _instance_1_u(_ = B._RenderBottomSheetLayoutWithSizeListener.prototype, "get$computeMinIntrinsicWidth", "computeMinIntrinsicWidth$1", 0);
    _instance_1_u(_, "get$computeMaxIntrinsicWidth", "computeMaxIntrinsicWidth$1", 0);
    _instance_1_u(_, "get$computeMinIntrinsicHeight", "computeMinIntrinsicHeight$1", 0);
    _instance_1_u(_, "get$computeMaxIntrinsicHeight", "computeMaxIntrinsicHeight$1", 0);
    _instance_1_u(_ = B._ModalBottomSheetState.prototype, "get$handleDragStart", "handleDragStart$1", 1);
    _instance(_, "get$handleDragEnd", 0, 1, null, ["call$2$isClosing", "call$1"], ["handleDragEnd$2$isClosing", "handleDragEnd$1"], 2, 0, 0);
  })();
  (function inheritance() {
    var _inherit = hunkHelpers.inherit,
      _inheritMany = hunkHelpers.inheritMany;
    _inherit(B._BottomSheetLayoutWithSizeListener, A.SingleChildRenderObjectWidget);
    _inherit(B._RenderBottomSheetLayoutWithSizeListener, A.RenderShiftedBox);
    _inherit(B._ModalBottomSheet, A.StatefulWidget);
    _inherit(B._ModalBottomSheetState, A.State);
    _inherit(B._ModalBottomSheetState_build_closure0, A.Closure0Args);
    _inherit(B._ModalBottomSheetState_build_closure, A.Closure2Args);
    _inheritMany(A.Closure, [B._ModalBottomSheetState_build__closure, B.ModalBottomSheetRoute_buildPage_closure]);
    _inherit(B.ModalBottomSheetRoute, A.PopupRoute);
  })();
  A._Universe_addRules(init.typeUniverse, JSON.parse('{"_ModalBottomSheet":{"StatefulWidget":[],"Widget":[],"DiagnosticableTree":[]},"_BottomSheetLayoutWithSizeListener":{"SingleChildRenderObjectWidget":[],"RenderObjectWidget":[],"Widget":[],"DiagnosticableTree":[]},"_RenderBottomSheetLayoutWithSizeListener":{"RenderBox":[],"RenderObjectWithChildMixin":["RenderBox"],"RenderObject":[],"DiagnosticableTree":[],"HitTestTarget":[],"RenderObjectWithChildMixin.0":"RenderBox"},"_ModalBottomSheetState":{"State":["_ModalBottomSheet<1>"],"State.T":"_ModalBottomSheet<1>"},"ModalBottomSheetRoute":{"ModalRoute":["1"],"_ModalRoute_TransitionRoute_LocalHistoryRoute":["1"],"TransitionRoute":["1"],"OverlayRoute":["1"],"LocalHistoryRoute":["1"],"Route":["1"],"_RoutePlaceholder":[],"Route.T":"1","TransitionRoute.T":"1","ModalRoute.T":"1","OverlayRoute.T":"1","_ModalRoute_TransitionRoute_LocalHistoryRoute.T":"1"}}'));
  var type$ = (function rtii() {
    var findType = A.findType;
    return {
      Animatable_double: findType("Animatable<double>"),
      Animatable_nullable_Color: findType("Animatable<Color?>"),
      Animation_double: findType("Animation<double>"),
      BoxConstraints: findType("BoxConstraints"),
      BoxParentData: findType("BoxParentData"),
      BuildContext: findType("BuildContext"),
      ColorTween: findType("ColorTween"),
      ContainerLayer: findType("ContainerLayer0"),
      JSArray_OverlayEntry: findType("JSArray<OverlayEntry>"),
      JSArray_of_Future_bool_Function: findType("JSArray<Future<bool>()>"),
      LabeledGlobalKey_State_StatefulWidget: findType("LabeledGlobalKey<State<StatefulWidget>>"),
      MaterialLocalizations: findType("MaterialLocalizations"),
      ParametricCurve_double: findType("ParametricCurve<double>"),
      PopEntry_nullable_Object: findType("PopEntry<Object?>"),
      Size: findType("Size"),
      TextBaseline: findType("TextBaseline"),
      ValueNotifier_EdgeInsets: findType("ValueNotifier<EdgeInsets>"),
      ValueNotifier_nullable_String: findType("ValueNotifier<String?>"),
      _RenderBottomSheetLayoutWithSizeListener: findType("_RenderBottomSheetLayoutWithSizeListener"),
      nullable_Object: findType("Object?"),
      nullable_Widget: findType("Widget?"),
      void_Function_Size: findType("~(Size)")
    };
  })();
};
;
((d, h) => {
  d[h] = d.current;
  d.eventLog.push({p: "main.dart.js_586", e: "endPart", h: h});
})($__dart_deferred_initializers__, "8OzCHtxVeP26WLyEplbWxp99wM4=");
;