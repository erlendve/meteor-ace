Package.describe({
	summary: "Ace editor repackaged for Meteor"
});

// Package.on_use(function (api) {
// 	api.add_files([
// 		'lib/ace/src/ace.js',
// 		'lib/ace/src/ext-static_highlight.js',
// 		'lib/ace/src/ext-textarea.js',
// 		'lib/ace/src/keybinding-emacs.js',
// 		'lib/ace/src/keybinding-vim.js',
// 		'lib/ace/src/mode-abap.js',
// 		'lib/ace/src/mode-asciidoc.js',
// 		'lib/ace/src/mode-c9search.js',
// 		'lib/ace/src/mode-c_cpp.js',
// 		'lib/ace/src/mode-clojure.js',
// 		'lib/ace/src/mode-coffee.js',
// 		'lib/ace/src/mode-coldfusion.js',
// 		'lib/ace/src/mode-csharp.js',
// 		'lib/ace/src/mode-css.js',
// 		'lib/ace/src/mode-dart.js',
// 		'lib/ace/src/mode-diff.js',
// 		'lib/ace/src/mode-dot.js',
// 		'lib/ace/src/mode-glsl.js',
// 		'lib/ace/src/mode-golang.js',
// 		'lib/ace/src/mode-groovy.js',
// 		'lib/ace/src/mode-haml.js',
// 		'lib/ace/src/mode-haxe.js',
// 		'lib/ace/src/mode-html.js',
// 		'lib/ace/src/mode-jade.js',
// 		'lib/ace/src/mode-java.js',
// 		'lib/ace/src/mode-javascript.js',
// 		'lib/ace/src/mode-json.js',
// 		'lib/ace/src/mode-jsp.js',
// 		'lib/ace/src/mode-jsx.js',
// 		'lib/ace/src/mode-latex.js',
// 		'lib/ace/src/mode-less.js',
// 		'lib/ace/src/mode-liquid.js',
// 		'lib/ace/src/mode-lisp.js',
// 		'lib/ace/src/mode-lua.js',
// 		'lib/ace/src/mode-luapage.js',
// 		'lib/ace/src/mode-lucene.js',
// 		'lib/ace/src/mode-makefile.js',
// 		'lib/ace/src/mode-markdown.js',
// 		'lib/ace/src/mode-objectivec.js',
// 		'lib/ace/src/mode-ocaml.js',
// 		'lib/ace/src/mode-perl.js',
// 		'lib/ace/src/mode-pgsql.js',
// 		'lib/ace/src/mode-php.js',
// 		'lib/ace/src/mode-powershell.js',
// 		'lib/ace/src/mode-python.js',
// 		'lib/ace/src/mode-r.js',
// 		'lib/ace/src/mode-rdoc.js',
// 		'lib/ace/src/mode-rhtml.js',
// 		'lib/ace/src/mode-ruby.js',
// 		'lib/ace/src/mode-sass.js',
// 		'lib/ace/src/mode-scad.js',
// 		'lib/ace/src/mode-scala.js',
// 		'lib/ace/src/mode-scss.js',
// 		'lib/ace/src/mode-sh.js',
// 		'lib/ace/src/mode-sql.js',
// 		'lib/ace/src/mode-stylus.js',
// 		'lib/ace/src/mode-svg.js',
// 		'lib/ace/src/mode-tcl.js',
// 		'lib/ace/src/mode-text.js',
// 		'lib/ace/src/mode-textile.js',
// 		'lib/ace/src/mode-typescript.js',
// 		'lib/ace/src/mode-xml.js',
// 		'lib/ace/src/mode-xquery.js',
// 		'lib/ace/src/mode-yaml.js',
// 		'lib/ace/src/theme-ambiance.js',
// 		'lib/ace/src/theme-chaos.js',
// 		'lib/ace/src/theme-chrome.js',
// 		'lib/ace/src/theme-clouds.js',
// 		'lib/ace/src/theme-clouds_midnight.js',
// 		'lib/ace/src/theme-cobalt.js',
// 		'lib/ace/src/theme-crimson_editor.js',
// 		'lib/ace/src/theme-dawn.js',
// 		'lib/ace/src/theme-dreamweaver.js',
// 		'lib/ace/src/theme-eclipse.js',
// 		'lib/ace/src/theme-github.js',
// 		'lib/ace/src/theme-idle_fingers.js',
// 		'lib/ace/src/theme-kr.js',
// 		'lib/ace/src/theme-merbivore.js',
// 		'lib/ace/src/theme-merbivore_soft.js',
// 		'lib/ace/src/theme-mono_industrial.js',
// 		'lib/ace/src/theme-monokai.js',
// 		'lib/ace/src/theme-pastel_on_dark.js',
// 		'lib/ace/src/theme-solarized_dark.js',
// 		'lib/ace/src/theme-solarized_light.js',
// 		'lib/ace/src/theme-textmate.js',
// 		'lib/ace/src/theme-tomorrow.js',
// 		'lib/ace/src/theme-tomorrow_night_blue.js',
// 		'lib/ace/src/theme-tomorrow_night.js',
// 		'lib/ace/src/theme-tomorrow_night_bright.js',
// 		'lib/ace/src/theme-tomorrow_night_eighties.js',
// 		'lib/ace/src/theme-twilight.js',
// 		'lib/ace/src/theme-vibrant_ink.js',
// 		'lib/ace/src/theme-xcode.js',
// 		'lib/ace/src/worker-coffee.js',
// 		'lib/ace/src/worker-css.js',
// 		'lib/ace/src/worker-javascript.js',
// 		'lib/ace/src/worker-json.js',
// 		'lib/ace/src/worker-xquery.js'
// 		],'client'
// 		);
// 	//		api.add_files('common.js', 'client');
// });

Package.on_use(function (api) {
	api.add_files([
		'ace.js',
		'mode-scad.js',
		'ext-searchbox.js',
		'mode-scala.js',
		'ext-spellcheck.js',
		'mode-scheme.js',
		'ext-static_highlight.js',
		'mode-scss.js',
		'ext-textarea.js',
		'mode-sh.js',
		'keybinding-emacs.js',
		'mode-sql.js',
		'keybinding-vim.js',
		'mode-stylus.js',
		'mode-abap.js',
		'mode-svg.js',
		'mode-asciidoc.js',
		'mode-tcl.js',
		'mode-c9search.js',
		'mode-tex.js',
		'mode-c_cpp.js',
		'mode-text.js',
		'mode-clojure.js',
		'mode-textile.js',
		'mode-coffee.js',
		'mode-tm_snippet.js',
		'mode-coldfusion.js',
		'mode-typescript.js',
		'mode-csharp.js',
		'mode-vbscript.js',
		'mode-css.js',
		'mode-xml.js',
		'mode-curly.js',
		'mode-xquery.js',
		'mode-dart.js',
		'mode-yaml.js',
		'mode-diff.js',
		'theme-ambiance.js',
		'mode-django.js',
		'theme-chaos.js',
		'mode-dot.js',
		'theme-chrome.js',
		'mode-glsl.js',
		'theme-clouds.js',
		'mode-golang.js',
		'theme-clouds_midnight.js',
		'mode-groovy.js',
		'theme-cobalt.js',
		'mode-haml.js',
		'theme-crimson_editor.js',
		'mode-haxe.js',
		'theme-dawn.js',
		'mode-html.js',
		'theme-dreamweaver.js',
		'mode-jade.js',
		'theme-eclipse.js',
		'mode-java.js',
		'theme-github.js',
		'mode-javascript.js',
		'theme-idle_fingers.js',
		'mode-json.js',
		'theme-kr.js',
		'mode-jsp.js',
		'theme-merbivore.js',
		'mode-jsx.js',
		'theme-merbivore_soft.js',
		'mode-latex.js',
		'theme-mono_industrial.js',
		'mode-less.js',
		'theme-monokai.js',
		'mode-liquid.js',
		'theme-pastel_on_dark.js',
		'mode-lisp.js',
		'theme-solarized_dark.js',
		'mode-livescript.js',
		'theme-solarized_light.js',
		'mode-lua.js',
		'theme-textmate.js',
		'mode-luapage.js',
		'theme-tomorrow.js',
		'mode-lucene.js',
		'theme-tomorrow_night.js',
		'mode-makefile.js',
		'theme-tomorrow_night_blue.js',
		'mode-markdown.js',
		'theme-tomorrow_night_bright.js',
		'mode-objectivec.js',
		'theme-tomorrow_night_eighties.js',
		'mode-ocaml.js',
		'theme-twilight.js',
		'mode-perl.js',
		'theme-vibrant_ink.js',
		'mode-pgsql.js',
		'theme-xcode.js',
		'mode-php.js',
		'worker-coffee.js',
		'mode-powershell.js',
		'worker-css.js',
		'mode-python.js',
		'worker-javascript.js',
		'mode-r.js',
		'worker-json.js',
		'mode-rdoc.js',
		'worker-php.js',
		'mode-rhtml.js',
		'worker-xquery.js',
		'mode-ruby.js'
		],'client'
		);
});