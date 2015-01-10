// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('main.core')) {
goog.provide('main.core');
}
goog.require('cljs.core');
goog.require('reagent.core');
main.core.coords = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null));
main.core.message_active = reagent.core.atom.call(null,true);
main.core.message = (function message(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),"Touch Screen to Begin..."], null);
});
main.core.wrapped_message = (function wrapped_message(active){
main.core.px = (function px(n){
return [cljs.core.str(n),cljs.core.str("px")].join('');
});

if(cljs.core.truth_(active)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message-container","div.message-container",-2075666641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),main.core.px.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main.core.coords))),new cljs.core.Keyword(null,"top","top",-1856271961),main.core.px.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main.core.coords)))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.message], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hidden","span.hidden",-1400248416),"not active"], null);
}
});
main.core.app = (function app(){
var message_width_5669 = document.getElementById("hidden-message").offsetWidth;
var message_height_5670 = document.getElementById("hidden-message").offsetHeight;
var window_width_5671 = window.innerWidth;
var window_height_5672 = window.innerHeight;
setInterval(((function (message_width_5669,message_height_5670,window_width_5671,window_height_5672){
return (function (){
cljs.core.swap_BANG_.call(null,main.core.message_active,cljs.core.not);

return cljs.core.reset_BANG_.call(null,main.core.coords,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand.call(null,((window_width_5671 - message_width_5669) - (20))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand.call(null,(window_height_5672 - message_height_5670))], null));
});})(message_width_5669,message_height_5670,window_width_5671,window_height_5672))
,(3000));

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.wrapped_message,cljs.core.deref.call(null,main.core.message_active)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.wrapped_message,cljs.core.not.call(null,cljs.core.deref.call(null,main.core.message_active))], null)], null);
});
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.message], null),document.getElementById("hidden-message"));
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map