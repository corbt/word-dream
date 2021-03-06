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
                             {:source-map "page/js/page.js.map"}}}}}}
 :cljsbuild
 {:builds
  {:client {:source-paths ["src"]
            :compiler
            {:preamble ["reagent/react.js"]
             :output-dir "page/js/"
             :output-to "page/js/page.js"
             :pretty-print true}}}})
