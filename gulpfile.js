//导入依赖插件
var gulp = require("gulp");
var sass = require("gulp-sass");
//建立任务（发布任务）
gulp.task("pint",function(){
	console.log("hello world");
})
gulp.task("styles",function(){
	return gulp.src("sass/*.scss")
	.pipe(sass({style:"expanded"}))
	.pipe(gulp.dest("css"));
})
gulp.task("watch",function(){
	gulp.watch("sass/*.scss",["styles"]);
})