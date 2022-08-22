"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const cp = require("child_process");
const cssnano = require("cssnano");
//const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const basswork = require("gulp-basswork");
const size = require("gulp-size");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./_site/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
//function clean() {
//  return del(["./_site/assets/"]);
//}

// CSS task
function css() {
  return gulp
    .src("./src/sup-tachyons.css")
    .pipe(plumber())
    .pipe(basswork())
    .pipe(gulp.dest("./assets/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(size({gzip: false, showFiles: true, title:"cssnano css"}))
    .pipe(size({gzip: true, showFiles: true, title:"cssnano gzipped css"}))
    .pipe(gulp.dest("./assets/css/"))
    .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src(["./assets/scripts/**/*", "./gulpfile.js"])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts

// Jekyll
function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}

// Watch files
function watchFiles() {
  gulp.watch("./src/**/*", css);
//  gulp.watch("./assets/js/**/*", gulp.series(scriptsLint, scripts));
  gulp.watch(
    [
      "*.html",
      'css/**/*.css',
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*",
      "./_products/**/*"
    ],
    gulp.series(jekyll, browserSyncReload)
  );
//  gulp.watch("./img/**/*", images);
}

// Tasks
//gulp.task("images", images);
gulp.task("css", css);
//gulp.task("js", gulp.series(scriptsLint, scripts));
gulp.task("jekyll", jekyll);
//gulp.task("clean", clean);

// build
gulp.task(
  "build",
  gulp.series(gulp.parallel(css, jekyll))
);

// watch
gulp.task("watch", gulp.parallel(watchFiles, browserSync));
