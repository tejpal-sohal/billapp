var gulp = require('gulp');
var replace = require('gulp-html-replace');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css')

gulp.task('prod', function() {
    gulp.src(['./node_modules/jquery/dist/jquery.js',
              './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
              './node_modules/angular/angular.js',
              './node_modules/angular-route/angular-route.js',
              'js/*.js',
              'directives/*.js',
              'controllers/*.js'
             ])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
    gulp.src('css/*.css')
        .pipe(minify('all.css'))
        .pipe(gulp.dest('dist'));
    gulp.src(['partials/*.html', 'img/*'],{base:"."})
        .pipe(gulp.dest('dist'));
    gulp.src('index.html')
        .pipe(replace({
            'js': 'all.min.js',
            'css': 'main.css'
        }))
        .pipe(gulp.dest('dist'));

});