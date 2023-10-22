
var less = require("gulp-less")
var clean_css = require("gulp-clean-css")
var gulp = require("gulp")
const {src, dest} = gulp

const paths = {
    styles: {
        src: 'public/styles/less/*.less',
        dest: 'public/styles'
    }
}



// export default ()=>{
//     return src(paths.styles.src)
//         .pipe(less())
//         .pipe(clean_css())
//         .pipe(dest(paths.styles.dest))
// }

// const webpack = require('webpack-stream')
// const babel = require("gulp-babel")
//
// gulp.task("js", function (){
//     return gulp.src("./public/*.js")
//         .pipe(babel())
//         .pipe(webpack(require("./webpack.config")))
//         .pipe(gulp.dest("./dist/js"))
// })
//
// gulp.task("watch", function (){
//     gulp.watch('./public/*.js', gulp.parallel("js"))
// })


exports.default = function() {
    return src(paths.styles.src)
        .pipe(less()) // Обработать LESS
        .pipe(clean_css()) // Минификация CSS
        .pipe(dest(paths.styles.dest))
}

// gulp.task("default", gulp.series(
//   //  gulp.parallel('js'),
//     gulp.parallel('watch')
// ))