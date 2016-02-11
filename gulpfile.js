/* Sublime Text 3 Theme Builder
 * -------------------------------------------------------------------------- *
 * Developed with love & patience by Ihor Oleksandrov
 * -------------------------------------------------------------------------- */

'use strict';


/*
 * > Plugins
 */

var gulp = require('gulp');
var del = require('del');
var path = require('path');
var runSequence = require('run-sequence');
var conventionalChangelog = require('conventional-changelog');
var conventionalGithubReleaser = require('conventional-github-releaser');
var argv = require('yargs').argv;
var fs = require('fs');
var $ = require('gulp-load-plugins')();


/*
 * > Settings
 */

var logo = './media/icon.png';


/*
 * > Clean
 */

gulp.task('clean', function() {
  $.util.log('Cleaning... ');

  return del('./*.sublime-theme');
});


/*
 * > Generate CHANGELOG
 */

gulp.task('changelog', function () {
  return conventionalChangelog({
    preset: 'angular',
    releaseCount: 0
  })
  .pipe(fs.createWriteStream('CHANGELOG.md'));
});


/*
 * > Github Release
 */

gulp.task('github-release', function(done) {
  conventionalGithubReleaser({
    type: 'oauth',
    token: process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN
  }, {
    preset: 'angular'
  }, done);
});


/*
 * > Bump Version
 */

gulp.task('bump', function(){
  return gulp.src('./package.json')
    .pipe($.if((Object.keys(argv).length === 2), $.bump()))
    .pipe($.if(argv.patch, $.bump()))
    .pipe($.if(argv.minor, $.bump({ type: 'minor' })))
    .pipe($.if(argv.major, $.bump({ type: 'major' })))
    .pipe(gulp.dest('./'));
});


/*
 * > Git
 */

gulp.task('commit-changes', function () {
  return gulp.src('.')
    .pipe($.git.add())
    .pipe($.git.commit('chore: bump version number'));
});

gulp.task('create-new-tag', function (cb) {
  var version = getPackageJsonVersion();

  $.git.tag('v' + version, 'version: ' + version, function (error) {
    if (error) {
      return cb(error);
    }
    $.git.push('origin', 'master', {args: '--tags'}, cb);
  });

  function getPackageJsonVersion () {
    return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
  }
});


/*
 * > Release
 */

gulp.task('pre-release', function(cb) {
  runSequence(
    'bump',
    'changelog',
    'commit-changes',
    function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('Pre-release finished successfully');
      }
      cb(error);
    }
  );
});

gulp.task('release', function(cb) {
  runSequence(
    'create-new-tag',
    'github-release',
    function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('Release finished successfully');
      }
      cb(error);
    }
  );
});


/*
 * > Build
 */

gulp.task('build', ['clean'], function() {
  $.util.log('Building themes... ');

  return gulp.src('./sources/*.json')
    .pipe($.include())
    .on('end', function () { $.util.log('Themes generated'); })
    .pipe($.rename({ extname: '.sublime-theme' }))
    .on('end', function () { $.util.log('Themes renamed'); })
    .pipe(gulp.dest('./'))
    .pipe($.notify({
      title: 'Otto',
      message: 'Build completed',
      icon: path.join(__dirname, logo)
    }));
});


/*
 * > Watch
 */

gulp.task('watch', function() {
  gulp.watch('./sources/**/*.json', ['build']);
});


/*
 * > Default
 */

gulp.task('default', ['build']);
