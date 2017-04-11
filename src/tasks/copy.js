var config = require('../../gulpconfig.json');

// node modules
var gulp = require(config.nm + 'gulp');
var gutil = require(config.nm + 'gulp-util');
var newer = require(config.nm + 'gulp-newer');

var copy_config = [
            config.src_path + "views/*"
        ];

var watchPath = config.src_path + 'views/*';
var output_path = config.build_path;



/* Copy files (ussually for fonts or other assets being copied)
 * from bower_components into the build directory
 *
 * @return
 */

gulp.task('copy', function() {
    gulp.src(copy_config)
        .pipe(gulp.dest(output_path));

});

gulp.task('copy-reload', function() {
    if (config.enable_browser_sync) {
        setTimeout(function() {
            gulp.src(output_path).pipe(browserSync.reload({stream:true}));
        }, 600);
    }
});

gulp.task('copy-watch', function() {
    gulp.watch(watchPath, ['copy', 'copy-reload']);
});
