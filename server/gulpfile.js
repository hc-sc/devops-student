const { src, dest, parallel } = require('gulp');
const ugilfy = require('gulp-uglify');

const destPath = 'dist/';

function root () {
    return src(['main.js', 'server.js'])
        .pipe(ugilfy())
        .pipe(src(['package.json', 'package-lock.json']))
        .pipe(dest(destPath));
}

function models () {
    return src('models/*.js')
        .pipe(ugilfy())
        .pipe(dest(destPath + 'models/'));
}

function routes () {
    return src('routes/*.js')
        .pipe(ugilfy({
            output: {
                comments: /@swagger/
            }
        }))
        .pipe(dest(destPath + 'routes/'));
}

exports.default = parallel(root, models, routes);