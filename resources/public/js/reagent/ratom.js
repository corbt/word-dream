// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('reagent.ratom')) {
goog.provide('reagent.ratom');
}
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_5520 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5520;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__5524__delegate = function (x,p__5521){
var map__5523 = p__5521;
var map__5523__$1 = ((cljs.core.seq_QMARK_.call(null,map__5523))?cljs.core.apply.call(null,cljs.core.hash_map,map__5523):map__5523);
var validator = cljs.core.get.call(null,map__5523__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__5523__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__5524 = function (x,var_args){
var p__5521 = null;
if (arguments.length > 1) {
var G__5525__i = 0, G__5525__a = new Array(arguments.length -  1);
while (G__5525__i < G__5525__a.length) {G__5525__a[G__5525__i] = arguments[G__5525__i + 1]; ++G__5525__i;}
  p__5521 = new cljs.core.IndexedSeq(G__5525__a,0);
} 
return G__5524__delegate.call(this,x,p__5521);};
G__5524.cljs$lang$maxFixedArity = 1;
G__5524.cljs$lang$applyTo = (function (arglist__5526){
var x = cljs.core.first(arglist__5526);
var p__5521 = cljs.core.rest(arglist__5526);
return G__5524__delegate(x,p__5521);
});
G__5524.cljs$core$IFn$_invoke$arity$variadic = G__5524__delegate;
return G__5524;
})()
;
atom = function(x,var_args){
var p__5521 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__5527 = null;
if (arguments.length > 1) {
var G__5528__i = 0, G__5528__a = new Array(arguments.length -  1);
while (G__5528__i < G__5528__a.length) {G__5528__a[G__5528__i] = arguments[G__5528__i + 1]; ++G__5528__i;}
G__5527 = new cljs.core.IndexedSeq(G__5528__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__5527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.peek_at = (function peek_at(a,path){
var _STAR_ratom_context_STAR_5530 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = null;

return cljs.core.get_in.call(null,cljs.core.deref.call(null,a),path);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5530;
}});

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom,setf,reaction){
this.path = path;
this.ratom = ratom;
this.setf = setf;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path,self__.setf], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,self__.ratom,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,self__.ratom,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,self__.path,writer,opts);

cljs.core._write.call(null,writer," ");

cljs.core.pr_writer.call(null,self__.ratom,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path)));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x,y));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.setf == null)){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
} else {
return self__.setf.call(null,new_value);
}
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
} else {
if((self__.reaction == null)){
self__.reaction = reagent.ratom.make_reaction.call(null,((function (this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$__$1))
);
} else {
}

return cljs.core.deref.call(null,self__.reaction);
}
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)) && (cljs.core._EQ_.call(null,self__.setf,other.setf));
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom,setf,reaction){
return (new reagent.ratom.RCursor(path,ratom,setf,reaction));
});

reagent.ratom.cursor = (function() {
var cursor = null;
var cursor__2 = (function (path,ra){
return (new reagent.ratom.RCursor(path,ra,null,null));
});
var cursor__4 = (function (path,ra,setf,args){
return (new reagent.ratom.RCursor(path,ra,(new reagent.impl.util.partial_ifn(setf,args,null)),null));
});
cursor = function(path,ra,setf,args){
switch(arguments.length){
case 2:
return cursor__2.call(this,path,ra);
case 4:
return cursor__4.call(this,path,ra,setf,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
cursor.cljs$core$IFn$_invoke$arity$4 = cursor__4;
return cursor;
})()
;

reagent.ratom.IDisposable = (function (){var obj5532 = {};
return obj5532;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3723__auto__ = this$;
if(and__3723__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3723__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4379__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3735__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj5534 = {};
return obj5534;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3723__auto__ = this$;
if(and__3723__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3723__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4379__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3735__auto__ = (reagent.ratom.run[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (reagent.ratom.run["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj5536 = {};
return obj5536;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3723__auto__ = this$;
if(and__3723__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3723__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4379__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3735__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3723__auto__ = k;
if(and__3723__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3723__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4379__auto__ = (((k == null))?null:k);
return (function (){var or__3735__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4379__auto__)]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,obs,oldval,newval);

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3723__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3723__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3723__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3735__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__5537_5549 = cljs.core.seq.call(null,derefed);
var chunk__5538_5550 = null;
var count__5539_5551 = (0);
var i__5540_5552 = (0);
while(true){
if((i__5540_5552 < count__5539_5551)){
var w_5553 = cljs.core._nth.call(null,chunk__5538_5550,i__5540_5552);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5553)){
} else {
cljs.core.add_watch.call(null,w_5553,this$__$1,reagent.ratom._handle_change);
}

var G__5554 = seq__5537_5549;
var G__5555 = chunk__5538_5550;
var G__5556 = count__5539_5551;
var G__5557 = (i__5540_5552 + (1));
seq__5537_5549 = G__5554;
chunk__5538_5550 = G__5555;
count__5539_5551 = G__5556;
i__5540_5552 = G__5557;
continue;
} else {
var temp__4126__auto___5558 = cljs.core.seq.call(null,seq__5537_5549);
if(temp__4126__auto___5558){
var seq__5537_5559__$1 = temp__4126__auto___5558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5537_5559__$1)){
var c__4522__auto___5560 = cljs.core.chunk_first.call(null,seq__5537_5559__$1);
var G__5561 = cljs.core.chunk_rest.call(null,seq__5537_5559__$1);
var G__5562 = c__4522__auto___5560;
var G__5563 = cljs.core.count.call(null,c__4522__auto___5560);
var G__5564 = (0);
seq__5537_5549 = G__5561;
chunk__5538_5550 = G__5562;
count__5539_5551 = G__5563;
i__5540_5552 = G__5564;
continue;
} else {
var w_5565 = cljs.core.first.call(null,seq__5537_5559__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5565)){
} else {
cljs.core.add_watch.call(null,w_5565,this$__$1,reagent.ratom._handle_change);
}

var G__5566 = cljs.core.next.call(null,seq__5537_5559__$1);
var G__5567 = null;
var G__5568 = (0);
var G__5569 = (0);
seq__5537_5549 = G__5566;
chunk__5538_5550 = G__5567;
count__5539_5551 = G__5568;
i__5540_5552 = G__5569;
continue;
}
} else {
}
}
break;
}

var seq__5541_5570 = cljs.core.seq.call(null,self__.watching);
var chunk__5542_5571 = null;
var count__5543_5572 = (0);
var i__5544_5573 = (0);
while(true){
if((i__5544_5573 < count__5543_5572)){
var w_5574 = cljs.core._nth.call(null,chunk__5542_5571,i__5544_5573);
if(cljs.core.contains_QMARK_.call(null,derefed,w_5574)){
} else {
cljs.core.remove_watch.call(null,w_5574,this$__$1);
}

var G__5575 = seq__5541_5570;
var G__5576 = chunk__5542_5571;
var G__5577 = count__5543_5572;
var G__5578 = (i__5544_5573 + (1));
seq__5541_5570 = G__5575;
chunk__5542_5571 = G__5576;
count__5543_5572 = G__5577;
i__5544_5573 = G__5578;
continue;
} else {
var temp__4126__auto___5579 = cljs.core.seq.call(null,seq__5541_5570);
if(temp__4126__auto___5579){
var seq__5541_5580__$1 = temp__4126__auto___5579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5541_5580__$1)){
var c__4522__auto___5581 = cljs.core.chunk_first.call(null,seq__5541_5580__$1);
var G__5582 = cljs.core.chunk_rest.call(null,seq__5541_5580__$1);
var G__5583 = c__4522__auto___5581;
var G__5584 = cljs.core.count.call(null,c__4522__auto___5581);
var G__5585 = (0);
seq__5541_5570 = G__5582;
chunk__5542_5571 = G__5583;
count__5543_5572 = G__5584;
i__5544_5573 = G__5585;
continue;
} else {
var w_5586 = cljs.core.first.call(null,seq__5541_5580__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_5586)){
} else {
cljs.core.remove_watch.call(null,w_5586,this$__$1);
}

var G__5587 = cljs.core.next.call(null,seq__5541_5580__$1);
var G__5588 = null;
var G__5589 = (0);
var G__5590 = (0);
seq__5541_5570 = G__5587;
chunk__5542_5571 = G__5588;
count__5543_5572 = G__5589;
i__5544_5573 = G__5590;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__5545_5591 = cljs.core.seq.call(null,self__.watching);
var chunk__5546_5592 = null;
var count__5547_5593 = (0);
var i__5548_5594 = (0);
while(true){
if((i__5548_5594 < count__5547_5593)){
var w_5595 = cljs.core._nth.call(null,chunk__5546_5592,i__5548_5594);
cljs.core.remove_watch.call(null,w_5595,this$__$1);

var G__5596 = seq__5545_5591;
var G__5597 = chunk__5546_5592;
var G__5598 = count__5547_5593;
var G__5599 = (i__5548_5594 + (1));
seq__5545_5591 = G__5596;
chunk__5546_5592 = G__5597;
count__5547_5593 = G__5598;
i__5548_5594 = G__5599;
continue;
} else {
var temp__4126__auto___5600 = cljs.core.seq.call(null,seq__5545_5591);
if(temp__4126__auto___5600){
var seq__5545_5601__$1 = temp__4126__auto___5600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5545_5601__$1)){
var c__4522__auto___5602 = cljs.core.chunk_first.call(null,seq__5545_5601__$1);
var G__5603 = cljs.core.chunk_rest.call(null,seq__5545_5601__$1);
var G__5604 = c__4522__auto___5602;
var G__5605 = cljs.core.count.call(null,c__4522__auto___5602);
var G__5606 = (0);
seq__5545_5591 = G__5603;
chunk__5546_5592 = G__5604;
count__5547_5593 = G__5605;
i__5548_5594 = G__5606;
continue;
} else {
var w_5607 = cljs.core.first.call(null,seq__5545_5601__$1);
cljs.core.remove_watch.call(null,w_5607,this$__$1);

var G__5608 = cljs.core.next.call(null,seq__5545_5601__$1);
var G__5609 = null;
var G__5610 = (0);
var G__5611 = (0);
seq__5545_5591 = G__5608;
chunk__5546_5592 = G__5609;
count__5547_5593 = G__5610;
i__5548_5594 = G__5611;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches.call(null,a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
self__.on_set.call(null,oldval,newval);
} else {
}

return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if(cljs.core.empty_QMARK_.call(null,self__.watches)){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__3735__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__5305__auto___5612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(249),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__5305__auto___5612))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3735__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__5613){
var map__5615 = p__5613;
var map__5615__$1 = ((cljs.core.seq_QMARK_.call(null,map__5615))?cljs.core.apply.call(null,cljs.core.hash_map,map__5615):map__5615);
var derefed = cljs.core.get.call(null,map__5615__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__5615__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__5615__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__5615__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__5613 = null;
if (arguments.length > 1) {
var G__5616__i = 0, G__5616__a = new Array(arguments.length -  1);
while (G__5616__i < G__5616__a.length) {G__5616__a[G__5616__i] = arguments[G__5616__i + 1]; ++G__5616__i;}
  p__5613 = new cljs.core.IndexedSeq(G__5616__a,0);
} 
return make_reaction__delegate.call(this,f,p__5613);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__5617){
var f = cljs.core.first(arglist__5617);
var p__5613 = cljs.core.rest(arglist__5617);
return make_reaction__delegate(f,p__5613);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map