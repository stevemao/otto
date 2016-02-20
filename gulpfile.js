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
var colors = require('colors');
var runSequence = require('run-sequence');
var conventionalChangelog = require('conventional-changelog');
var conventionalGithubReleaser = require('conventional-github-releaser');
var argv = require('yargs').argv;
var fs = require('fs');
var $ = require('gulp-load-plugins')();


/*
 * > Data
 */

var getJsonData = function(file) {
  return require(file.path);
};


/*
 * > Clean
 */

gulp.task('clean:themes', function() {
  return del(['./*.sublime-theme']);
});

gulp.task('clean:schemes', function() {
  return del(['./schemes/*.tmTheme', './schemes/*.YAML-tmTheme']);
});

gulp.task('clean:widgets', function() {
  return del(['./widgets/*.stTheme', './widgets/*.sublime-settings']);
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

gulp.task('release', function(cb) {
  runSequence(
    'bump',
    'changelog',
    'commit-changes',
    'create-new-tag',
    'github-release',
    function (error) {
      if (error) {
        console.log('[release]'.bold.magenta + ' There was an issue releasing themes:\n'.bold.red + error.message);
      } else {
        console.log('[release]'.bold.magenta + ' Finished successfully'.bold.green);
      }
      cb(error);
    }
  );
});


/*
 * > Build
 */

gulp.task('build', function(cb) {
  runSequence(
    'build:themes',
    'build:schemes',
    'build:widgets',
    function (error) {
      if (error) {
        console.log('[build]'.bold.magenta + ' There was an issue building Otto:\n'.bold.red + error.message);
      } else {
        console.log('[build]'.bold.magenta + ' Finished successfully'.bold.green);
      }

      cb(error);
    }
  );
});

/* >> Themes */

gulp.task('build:themes', ['clean:themes'], function() {
  return gulp.src('./sources/themes/*.json')
    .pipe($.plumber(function(error) {
      console.log('[build:themes]'.bold.magenta + ' There was an issue building themes:\n'.bold.red + error.message);
      this.emit('end');
    }))
    .pipe($.include())
    .pipe($.rename({ extname: '.sublime-theme' }))
    .pipe(gulp.dest('./'))
    .on('end', function() {
      console.log('[build:themes]'.bold.magenta + ' Finished successfully'.bold.green);
    });
});

/* >> Schemes */

gulp.task('build:schemes', ['clean:schemes'], function(cb) {
  return gulp.src('./sources/config/*.json')
    .pipe($.plumber(function(error) {
      console.log('[build:schemes]'.bold.magenta + ' There was an issue building schemes:\n'.bold.red + error.message);
      this.emit('end');
    }))
    .pipe($.foreach(function(stream, file) {
      var jsonFile = file;
      var jsonBasename = path.basename(jsonFile.path, path.extname(jsonFile.path));

      return gulp.src('./sources/templates/scheme.YAML-tmTheme')
        .pipe($.data(getJsonData(jsonFile)))
        .pipe($.template())
        .pipe($.rename(function(schemeFile) {
          schemeFile.basename = jsonBasename;
        }))
        .pipe(gulp.dest('./schemes'));
    }))
    .on('end', function() {
      console.log('[build:schemes]'.bold.magenta + ' Finished successfully'.bold.green);
    });
});

gulp.task('convert:schemes', function() {
  return gulp.src('./schemes/*.YAML-tmTheme')
    .pipe($.plumber(function(error) {
      console.log('[convert:schemes]'.bold.magenta + ' There was an issue converting color schemes:\n'.bold.red + error.message +
                  'To fix this error:\nAdd Sublime Text to the `PATH` and then install "AAAPackageDev" via "Package Control.\nOpen Sublime Text before running the task. "'.bold.blue);
      this.emit('end');
    }))
    .pipe($.exec('subl "<%= file.path %>" --b && subl --b --command "convert_file" && subl --b --command "close_file"'));
});

/* >> Widgets */

gulp.task('build:widgets', ['clean:widgets'], function(cb) {
  runSequence(
    'build:widget-themes',
    'build:widget-settings',
    function (error) {
      if (error) {
        console.log('[build:widgets]'.bold.magenta + ' There was an issue building widgets:\n'.bold.red + error.message);
      } else {
        console.log('[build:widgets]'.bold.magenta + ' Finished successfully'.bold.green);
      }

      cb(error);
    }
  );
});

gulp.task('build:widget-themes', function() {
  return gulp.src('./sources/config/*.json')
    .pipe($.foreach(function(stream, file) {
      var jsonFile = file;
      var jsonBasename = path.basename(jsonFile.path, path.extname(jsonFile.path));

      return gulp.src('./sources/templates/widget.stTheme')
        .pipe($.data(getJsonData(jsonFile)))
        .pipe($.template())
        .pipe($.rename(function(widgetThemeFile) {
          widgetThemeFile.basename = 'Widget - ' + jsonBasename;
        }))
        .pipe(gulp.dest('./widgets'));
    }));
});

gulp.task('build:widget-settings', function() {
  return gulp.src('./sources/config/*.json')
    .pipe($.foreach(function(stream, file) {
      var jsonFile = file;
      var jsonBasename = path.basename(jsonFile.path, path.extname(jsonFile.path));

      return gulp.src('./sources/templates/widget.sublime-settings')
        .pipe($.data(getJsonData(jsonFile)))
        .pipe($.template())
        .pipe($.rename(function(widgetSettingsFile) {
          widgetSettingsFile.basename = 'Widget - ' + jsonBasename;
        }))
        .pipe(gulp.dest('./widgets'));
    }));
});


/*
 * > Watch
 */

gulp.task('watch', function() {
  gulp.watch('./sources/themes/**/*.json', ['build:themes']);
  gulp.watch('./sources/templates/scheme.YAML-tmTheme', ['build:schemes']);
  gulp.watch('./sources/templates/widget.*', ['build:widgets']);
  gulp.watch('./sources/config/*.json', ['build:schemes', 'build:widgets']);
});


/*
 * > Default
 */

gulp.task('default', ['build']);
