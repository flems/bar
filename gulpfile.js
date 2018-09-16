var gulp            = require('gulp'),
    path            = require('path'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    // SVG
    svgSprite = require('gulp-svg-sprites'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    insert = require('gulp-insert');


var $ = gulpLoadPlugins();

var path = {
  'styles': [
    'htdocs/assets/css/main.scss',
    'htdocs/assets/css/production.scss',
  ]
};


gulp.task('styles', function(){
  var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  return gulp.src(path.styles, {base: './'})
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('./'));
});

gulp.task('svgSpriteBuild', function () {
  return gulp.src('htdocs/assets/img/svg/*.svg')
    // minify svg
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    // remove all fill and style declarations in out shapes
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    }))
    // cheerio plugin create unnecessary string '>', so replace it.
    .pipe(replace('&gt;', '>'))
    // build svg sprite
    .pipe(svgSprite({
        mode: "symbols",
        preview: false,
        selector: "icon-%f",
        svg: {
          symbols: 'symbol_sprite.php'
        }
      }
    ))
    .pipe(gulp.dest('htdocs/assets/img/svg/'));
});

gulp.task('watch', ['styles'], function(){
  gulp.watch( path.styles, ['styles']);
  gulp.watch( 'htdocs/assets/img/svg/*.svg', ['svgSpriteBuild']);
});

gulp.task('default', ['watch', 'svgSpriteBuild']);
