const gulp = require('gulp');

const clean = require('gulp-clean');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyCss = require("gulp-minify-css");
const minifyHtml = require("gulp-minify-html");

const bases = {
 app: 'app/',
 dist: 'dist/',
};

const paths = {
 scripts: ['**/*.js'],
 styles: ['**/*.css'],
 html: ['index.html'],
};

// Delete the dist directory
gulp.task('clean', function() {
 return gulp.src(bases.dist)
 .pipe(clean());
});

// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function() {
 gulp.src(paths.scripts, {cwd: bases.app})
 .pipe(uglify())
 .pipe(concat('app.min.js'))
 .pipe(gulp.dest(bases.dist + 'scripts/'));
});

// Process styles and concatenate them into one output file
gulp.task('styles', ['clean'], function() {
 gulp.src(paths.styles, {cwd: bases.app})
 .pipe(minifyCss())
   .pipe(concat('styles.min.css'))
 .pipe(gulp.dest(bases.dist + 'styles/'));
});

// Minify html files and copy to dist
gulp.task('copy', ['clean'], function() {
 gulp.src(paths.html, {cwd: bases.app})
 .pipe(minifyHtml())
 .pipe(gulp.dest(bases.dist));
});

// Define the default task as a sequence of the above tasks
gulp.task('default', ['clean', 'scripts', 'styles', 'copy']);
