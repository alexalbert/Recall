System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime"
    ]
  },
  paths: {
    "*": "dist/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app-bundle": [
      "github:paulvanbladel/aurelia-auth@0.9.6.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/index.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/baseConfig.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/authService.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/authorizeStep.js",
      "github:aurelia/framework@0.13.4.js",
      "github:aurelia/http-client@0.10.2.js",
      "github:aurelia/router@0.10.4.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/authUtils.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/authentication.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/oAuth1.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/oAuth2.js",
      "github:aurelia/framework@0.13.4/aurelia-framework.js",
      "github:aurelia/http-client@0.10.2/aurelia-http-client.js",
      "github:aurelia/router@0.10.4/aurelia-router.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/storage.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/popup.js",
      "npm:core-js@0.9.18.js",
      "github:aurelia/logging@0.6.2.js",
      "github:aurelia/metadata@0.7.2.js",
      "github:aurelia/dependency-injection@0.9.1.js",
      "github:aurelia/loader@0.8.3.js",
      "github:aurelia/path@0.8.1.js",
      "github:aurelia/templating@0.13.16.js",
      "github:aurelia/binding@0.8.5.js",
      "github:aurelia/task-queue@0.6.1.js",
      "github:aurelia/route-recognizer@0.6.1.js",
      "github:aurelia/history@0.6.1.js",
      "github:aurelia/event-aggregator@0.6.2.js",
      "github:aurelia/logging@0.6.2/aurelia-logging.js",
      "github:aurelia/path@0.8.1/aurelia-path.js",
      "github:aurelia/task-queue@0.6.1/aurelia-task-queue.js",
      "github:aurelia/history@0.6.1/aurelia-history.js",
      "npm:core-js@0.9.18/client/shim.min.js",
      "github:aurelia/metadata@0.7.2/aurelia-metadata.js",
      "github:aurelia/dependency-injection@0.9.1/aurelia-dependency-injection.js",
      "github:aurelia/loader@0.8.3/aurelia-loader.js",
      "github:aurelia/templating@0.13.16/aurelia-templating.js",
      "github:aurelia/binding@0.8.5/aurelia-binding.js",
      "github:aurelia/route-recognizer@0.6.1/aurelia-route-recognizer.js",
      "github:aurelia/event-aggregator@0.6.2/aurelia-event-aggregator.js",
      "github:jspm/nodelibs-process@0.1.1.js",
      "github:jspm/nodelibs-process@0.1.1/index.js",
      "npm:process@0.10.1.js",
      "npm:process@0.10.1/browser.js",
      "github:aurelia/history-browser@0.6.2.js",
      "github:aurelia/history-browser@0.6.2/aurelia-history-browser.js",
      "github:aurelia/loader-default@0.9.1.js",
      "github:aurelia/loader-default@0.9.1/aurelia-loader-default.js",
      "github:aurelia/templating-router@0.14.1.js",
      "github:aurelia/templating-router@0.14.1/aurelia-templating-router.js",
      "github:aurelia/templating-router@0.14.1/route-href.js",
      "github:aurelia/templating-router@0.14.1/router-view.js",
      "github:aurelia/templating-router@0.14.1/route-loader.js",
      "github:aurelia/templating-resources@0.13.2.js",
      "github:aurelia/templating-resources@0.13.2/aurelia-templating-resources.js",
      "github:aurelia/templating-resources@0.13.2/with.js",
      "github:aurelia/templating-resources@0.13.2/if.js",
      "github:aurelia/templating-resources@0.13.2/show.js",
      "github:aurelia/templating-resources@0.13.2/compose.js",
      "github:aurelia/templating-resources@0.13.2/repeat.js",
      "github:aurelia/templating-resources@0.13.2/sanitize-html.js",
      "github:aurelia/templating-resources@0.13.2/replaceable.js",
      "github:aurelia/templating-resources@0.13.2/global-behavior.js",
      "github:aurelia/templating-resources@0.13.2/focus.js",
      "github:aurelia/templating-binding@0.13.2.js",
      "github:aurelia/templating-binding@0.13.2/aurelia-templating-binding.js",
      "github:aurelia/animator-css@0.14.1.js",
      "github:aurelia/animator-css@0.14.1/aurelia-animator-css.js",
      "github:aurelia/fetch-client@0.1.1.js",
      "github:aurelia/fetch-client@0.1.1/aurelia-fetch-client.js",
      "github:aurelia/bootstrapper@0.14.1.js",
      "github:aurelia/bootstrapper@0.14.1/aurelia-bootstrapper.js",
      "github:aurelia/logging-console@0.6.1.js",
      "github:aurelia/logging-console@0.6.1/aurelia-logging-console.js",
      "server-api",
      "config",
      "profile",
      "notes",
      "autosize",
      "nav-bar",
      "main",
      "auth-config",
      "github:github/fetch@0.9.0.js",
      "github:github/fetch@0.9.0/fetch.js",
      "login",
      "blur-image",
      "app",
      "app_router_config",
      "github:twbs/bootstrap@3.3.5.js",
      "github:paulvanbladel/aurelia-auth@0.9.6/app.httpClient.config.js",
      "github:twbs/bootstrap@3.3.5/css/bootstrap.css!github:systemjs/plugin-css@0.1.13.js",
      "github:twbs/bootstrap@3.3.5/js/bootstrap.js",
      "github:components/jquery@2.1.4.js",
      "github:components/jquery@2.1.4/jquery.js"
    ]
  },

  map: {
    "aurelia-animator-css": "github:aurelia/animator-css@0.14.1",
    "aurelia-binding": "github:aurelia/binding@0.8.5",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.14.1",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
    "aurelia-fetch-client": "github:aurelia/fetch-client@0.1.1",
    "aurelia-framework": "github:aurelia/framework@0.13.4",
    "aurelia-history": "github:aurelia/history@0.6.1",
    "aurelia-history-browser": "github:aurelia/history-browser@0.6.2",
    "aurelia-http-client": "github:aurelia/http-client@0.10.2",
    "aurelia-loader": "github:aurelia/loader@0.8.3",
    "aurelia-loader-default": "github:aurelia/loader-default@0.9.1",
    "aurelia-logging": "github:aurelia/logging@0.6.2",
    "aurelia-metadata": "github:aurelia/metadata@0.7.2",
    "aurelia-path": "github:aurelia/path@0.8.1",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.1",
    "aurelia-router": "github:aurelia/router@0.10.4",
    "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
    "aurelia-templating": "github:aurelia/templating@0.13.16",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.2",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.2",
    "aurelia-templating-router": "github:aurelia/templating-router@0.14.1",
    "aurelia/fetch-client": "github:aurelia/fetch-client@0.1.1",
    "babel": "npm:babel-core@5.8.3",
    "babel-runtime": "npm:babel-runtime@5.8.3",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "clean-css": "npm:clean-css@3.3.9",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "fetch": "github:github/fetch@0.9.0",
    "font-awesome": "npm:font-awesome@4.3.0",
    "paulvanbladel/aurelia-auth": "github:paulvanbladel/aurelia-auth@0.9.6",
    "service": "github:moshensky/aurelia-auth-session@0.2.6",
    "github:aurelia/animator-css@0.14.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-templating": "github:aurelia/templating@0.13.16"
    },
    "github:aurelia/binding@0.8.5": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.14.1": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
      "aurelia-framework": "github:aurelia/framework@0.13.4",
      "aurelia-history": "github:aurelia/history@0.6.1",
      "aurelia-history-browser": "github:aurelia/history-browser@0.6.2",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.1",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.1",
      "aurelia-router": "github:aurelia/router@0.10.4",
      "aurelia-templating": "github:aurelia/templating@0.13.16",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.2",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.2",
      "aurelia-templating-router": "github:aurelia/templating-router@0.14.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.1": {
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.6.2": {
      "aurelia-logging": "github:aurelia/logging@0.6.2"
    },
    "github:aurelia/fetch-client@0.1.1": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/framework@0.13.4": {
      "aurelia-binding": "github:aurelia/binding@0.8.5",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.16",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.6.2": {
      "aurelia-history": "github:aurelia/history@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.10.2": {
      "aurelia-path": "github:aurelia/path@0.8.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.1": {
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2"
    },
    "github:aurelia/loader@0.8.3": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.2": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.1": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.10.4": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
      "aurelia-history": "github:aurelia/history@0.6.1",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.13.2": {
      "aurelia-binding": "github:aurelia/binding@0.8.5",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-templating": "github:aurelia/templating@0.13.16"
    },
    "github:aurelia/templating-resources@0.13.2": {
      "aurelia-binding": "github:aurelia/binding@0.8.5",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.16",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.14.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-router": "github:aurelia/router@0.10.4",
      "aurelia-templating": "github:aurelia/templating@0.13.16"
    },
    "github:aurelia/templating@0.13.16": {
      "aurelia-binding": "github:aurelia/binding@0.8.5",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.3"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:moshensky/aurelia-auth-session@0.2.6": {
      "CodeSeven/toastr": "github:CodeSeven/toastr@2.1.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-http-client": "github:aurelia/http-client@0.10.2",
      "aurelia-router": "github:aurelia/router@0.10.4",
      "jquery": "github:components/jquery@2.1.4",
      "traceur": "github:jmcriffey/bower-traceur@0.0.90",
      "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.90"
    },
    "github:paulvanbladel/aurelia-auth@0.9.6": {
      "aurelia-framework": "github:aurelia/framework@0.13.4",
      "aurelia-http-client": "github:aurelia/http-client@0.10.2",
      "aurelia-router": "github:aurelia/router@0.10.4"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.4.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.3.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:font-awesome@4.3.0": {
      "css": "github:systemjs/plugin-css@0.1.13"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
