(defproject word-dream "0.1.0-SNAPSHOT"
 :description "Make words appear on the screen"
 :dependencies [[org.clojure/clojure "1.6.0"]
                [org.clojure/clojurescript "0.0-2342"]
                [reagent "0.5.0-alpha"]]

 :plugins [[lein-cljsbuild "1.0.3"]]
 :hooks [leiningen.cljsbuild]

 :source-paths ["src"]

 :profiles {:prod {:cljsbuild
                    {:builds
                      {:client {:compiler
                                {:optimizations :advanced
                                 :preamble ^:replace ["reagent/react.min.js"]
                                 :pretty-print false}}}}}
            :dev {:cljsbuild
                  {:builds
                   {:client {:compiler
                             {:source-map "public/js/page.js.map"}}}}}}

 :cljsbuild
 {:builds
  {:client {:source-paths ["src"]
            :compiler
            {:preamble ["reagent/react.js"]
             :output-dir "public/js/"
             :output-to "public/js/page.js"
             :pretty-print true}}}})


 ; :cljsbuild
 ; {:builds
 ;  {:builds
 ;     {:client {:source-paths ["src"]
 ;               :compiler
 ;               {:preamble ["reagent/react.js"]
 ;                :output-dir "target/client"
 ;                :output-to "target/client.js"
 ;                :pretty-print true}}}}
 ;  {:dev  {:source-paths ["src-cljs"]
 ;          :compiler
 ;          {:optimizations :none
 ;           :preamble ["reagent/react.js"]
 ;           :externs ["reagent/externs/react.js"]
 ;           :output-to "resources/public/js/app.js"
 ;           :output-dir "resources/public/js/"
 ;           :pretty-print true
 ;           :source-map true}}
 ;   :release {:source-paths ["src-cljs"]
 ;             :compiler
 ;             {:output-to "resources/public/js/app.js"
 ;              ;:source-map "resources/public/js/app.js.map"
 ;              :preamble ["reagent/react.js"]
 ;              :externs ["reagent/externs/react.js"]
 ;              :optimizations :advanced
 ;              :pretty-print false
 ;              :output-wrapper false
 ;              :closure-warnings {:non-standard-jsdoc :off}}}}}
