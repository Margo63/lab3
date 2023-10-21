
var less = require("gulp-less")
var clean_css = require("gulp-clean-css")

const {src, dest} = require("gulp")
const paths = {
    styles: {
        src: 'public/styles/less/*.less',
        dest: 'public/styles'
    }
}


exports.default = function() {
    return src(paths.styles.src)
        .pipe(less()) // Обработать LESS
        .pipe(clean_css()) // Минификация CSS
        .pipe(dest(paths.styles.dest))
}

// export default ()=>{
//     return src(paths.styles.src)
//         .pipe(less())
//         .pipe(clean_css())
//         .pipe(dest(paths.styles.dest))
// }