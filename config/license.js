/** Copyright © 2013-2021 DataYes, All Rights Reserved. */

/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const gulp = require("gulp");
const licenser = require("gulp-licenser");

// license 模板
const LICENSE_TEMPLATE = `/** Copyright © 1992-${new Date().getFullYear()} EricYangXD, All Rights Reserved. */`;

// 从参数中获取文件列表，配合lint-stage使用
const files = process.argv.slice(2); // node license [files]

// 默认全量自定义文件
const defaultFiles = [
	"src/**/*.js",
	"src/**/*.ts",
	"src/**/*.tsx",
	"framework/**/*.js",
	"framework/**/*.ts",
	"framework/**/*.tsx",
	"config/**/*.js",
	"packages/**/*.js",
	"packages/**/*.ts",
	"packages/**/*.tsx",
	"*.js",
	"*.ts",
	"*.tsx",
];

// 处理source，拼接绝对路径
const source =
	files.length > 0
		? files
		: defaultFiles.map((item) => path.resolve(process.cwd(), item));

// 检查是否有license并自动加上
function updateLicense() {
	gulp.src(source)
		.pipe(licenser(LICENSE_TEMPLATE))
		.pipe(gulp.dest((file) => file.base));
}

updateLicense();
