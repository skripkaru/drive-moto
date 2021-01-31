const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const del = require('del');

function browsersync() {
   browserSync.init({
      server: {baseDir: 'app/'},
      notify: false,
      online: true
   });
}

function scripts() {
   return src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/rateyo/min/jquery.rateyo.min.js',
      'node_modules/ion-rangeslider/js/ion.rangeSlider.min.js',
      'node_modules/jquery-form-styler/dist/jquery.formstyler.min.js',
      'node_modules/swiper/swiper-bundle.min.js',
      'app/js/app.js',
   ])
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(dest('app/js/'))
      .pipe(browserSync.stream());
}

function styles() {
   return src([
      'node_modules/rateyo/min/jquery.rateyo.min.css',
      'node_modules/ion-rangeslider/css/ion.rangeSlider.min.css',
      'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
      'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
      'node_modules/swiper/swiper-bundle.min.css',
      'app/scss/app.scss',
   ])
      .pipe(sass())
      .pipe(concat('app.min.css'))
      .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
      .pipe(cleancss(({level: {1: {specialComments: 0}}/* , format: 'beautify' */})))
      .pipe(dest('app/css/'))
      .pipe(browserSync.stream());
}

function cleandist() {
   return del('dist/**/*', {force: true});
}

function buildcopy() {
   return src([
      'app/**/*.html',
      'app/css/**/*.min.css',
      'app/js/**/*.min.js',
      'app/fonts/**/*.woff2',
      'app/svg/**/*',
      'app/img/**/*',
   ], {base: 'app'})
      .pipe(dest('dist'));
}

function startwatch() {
   watch(['app/**/**/*.scss'], styles);
   watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
   watch('app/**/*.html').on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.build = series(cleandist, styles, scripts, buildcopy);
exports.default = parallel(styles, scripts, browsersync, startwatch);