/// <binding BeforeBuild='buildForProduction, build-ts, scriptsNStyles' />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require("gulp-concat");
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var foreach = require('gulp-foreach');
//var Builder = require('gulp-task-builder');
//var notify = require('gulp-notify');
var destPath = './libs/';

var appDev = 'src/';
var appProd = 'scripts/angular2';

var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');

var tsProject = typescript.createProject('tsconfig.json');

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", function () {
    gulp.src([
            'core-js/client/*.js',
            'systemjs/dist/*.js',
            'reflect-metadata/*.js',
            'zone.js/dist/*.js',
            '@angular/**/bundles/*.js',
            'bootstrap/dist/js/*.js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./Scripts/"));
});

var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});


gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('*.ts', ['ts']);
});


gulp.task('build-ts', function () {
    return gulp.src(appDev + '/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest(appProd));
});

gulp.task('minCSS', function () {
    gulp.src(["Content/bootstrap.css",
        "Content/site.css",
        "Content/CSS/dataTables.semanticui.min.css",
        "Content/CSS/daterangepicker.css",
        "Content/CSS/jquery.dataTables.min.css",
        "Content/CSS/login.css",
        "Content/CSS/ng-table.min.css",
        "Content/CSS/semantic.min.css",
        "Content/CSS/sideNavBar.css",
        "Content/CSS/bootstrap.min.css"
    ])
	.pipe(concat('minCSS.css'))
	.pipe(cssmin())
	.pipe(gulp.dest('./Content/'))
});



gulp.task('minJS', function () {
    gulp.src(["Scripts/jquery-1.10.2.min.js",
                "Scripts/bootstrap.min.js",
                "Scripts/jquery.dataTables.min.js",
                "Scripts/dataTables.select.min.js",
                "Scripts/dataTables.semanticui.min.js",
                "Scripts/semantic.min.js",
                "Scripts/moment.min.js",
                "Scripts/sha1.js",
                "Scripts/systemjs.config.js",
    ])
	.pipe(concat('minJSLib.js'))
	.pipe(gulp.dest('./Scripts/'))
	.pipe(rename({ suffix: '.min' }))
});

gulp.task("buildForProduction", function () {

    console.log('injectHTML started');

    var i = 0;

    return gulp.src('application/**/*.js').pipe(foreach(function (stream, file) {

        var name = file.path;
        var fileStream = fs.readFileSync(name, "utf8");

        var fileContents = fileStream.split("\n");
        var rows = fileContents.length;

        var output = "";

        for (var i = 0; i < rows; i++) {

            var currentLine = fileContents[i];
            var outputLine = currentLine;

            if (currentLine.indexOf('application/') > -1) {

                if (currentLine.indexOf('templateUrl') > -1) {

                    currentLine = currentLine.replace("+ exports.debugVersion", "");

                    var start = currentLine.indexOf("application");
                    var end = currentLine.indexOf(".html");
                    var lengthOfName = end - start;
                    var htmlFileName = "./" + currentLine.substr(start, lengthOfName) + ".html";

                    var comma = currentLine.indexOf(",");

                    try {
                        var htmlContent = fs.readFileSync(htmlFileName, "ASCII");

                        htmlContent = htmlContent.replace('/[\x00-\x1F\x80-\xFF]/', '');
                        htmlContent = htmlContent.replace("o;?", "");
                        htmlContent = htmlContent.replace(/"/g, '\\"');
                        htmlContent = htmlContent.replace(/\r\n/g, '');
                        htmlContent = "\"" + htmlContent + "\"";

                        currentLine = "template: " + htmlContent;
                        if (comma > -1) currentLine = currentLine + ",";
                        outputLine = currentLine;

                    }
                    catch (err) {
                        console.log(htmlFileName + " not found.")
                    }

                }

            }
            output = output + outputLine;
        }

        streams = [];
        var stream = source("inject.js");
        var streamEnd = stream;
        stream.write(output);
        process.nextTick(function () {
            stream.end();
        });

        streamEnd = streamEnd.pipe(vinylBuffer()).pipe(concat(name)).pipe(gulp.dest("./application"));
        return stream;

    })).on('end', function () {

        // var builder = new Builder('./', 'systemjs.config.js');

        var path = require("path");
        var Builder = require('systemjs-builder');

        // optional constructor options 
        // sets the baseURL and loads the configuration file 
        var builder = new Builder('./', 'scripts/systemjs.config.js');

        builder.buildStatic('./src/*/main.js',
               'scripts/angular2.min.js', { minify: true, sourceMaps: false }
        ).then(function () {
            console.log('Build static complete');
        });


    });

});


gulp.task('bundle', function () {
    var SystemBuilder = require('systemjs-builder');
    var builder = new SystemBuilder();

    builder.loadConfig('scripts/systemjs.config.js')
        .then(function () {
            var outputFile = 'dist/Login.min.js';
            return builder.buildStatic('src/Login/main.js', outputFile, {
                minify: true,
                mangle: true,
                rollup: true
            });
        })
        .then(function () {
            var outputFile = 'dist/UserAccount.min.js';
            return builder.buildStatic('src/UserAccount/main.js', outputFile, {
                minify: true,
                mangle: true,
                rollup: true
            });
        })
        .then(function () {
            console.log('bundle built successfully!');
        });
});



