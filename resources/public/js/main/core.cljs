(ns main.core
 (:require [reagent.core :as reagent :refer [atom]]))

(def coords (atom {:x 50 :y 50}))
(def message-active (atom true))

(defn message []
  [:div.message "Touch Screen to Begin..."])

(defn wrapped-message [active]
  (defn- px [n] (str n "px"))
  (if active
    [:div.message-container {:style {:left (px (:x @coords)) :top (px (:y @coords))}}
      [message]]
    [:span.hidden "not active"]))

(defn app []
  (let [message-width (.-offsetWidth (.getElementById js/document "hidden-message"))
        message-height (.-offsetHeight (.getElementById js/document "hidden-message"))
        window-width (.-innerWidth js/window)
        window-height (.-innerHeight js/window)]

    (js/setInterval 
      (fn [] 
        (swap! message-active not)
        (reset! coords 
          {:x (rand (- window-width message-width 20))
           :y (rand (- window-height message-height))})) 
      3000))
  (fn []
    [:div 
      [wrapped-message @message-active]
      [wrapped-message (not @message-active)]]))

(reagent/render-component [message] (.getElementById js/document "hidden-message"))
(reagent/render-component [app] (.getElementById js/document "app"))