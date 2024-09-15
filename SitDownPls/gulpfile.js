const { src, dest, series, watch } = require('gulp');

const path = require('path');
const clean = require('del');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const bulk = require('gulp-sass-bulk-importer');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const webpackStream = require('webpack-stream');
const webp = require('gulp-webp');
const fileInclude = require('gulp-file-include');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const plumber = require('gulp-plumber');

const isProd = process.argv.includes('--prod');
const mode = isProd ? 'production' : 'development';

const typograf = require('gulp-typograf');
const woff2 = require('gulp-ttf2woff2');

const inputDir = path.join(__dirname, './src'); // Исходная директория
const outputDir = path.join(__dirname, './dist'); // Директория назначения
const paths = {
  srcHtml:    `${inputDir}/pages/**.html`,
  outHtml:    `${outputDir}/`,
  htmlPaths:  `${inputDir}/partials/*.html`,
  srcHtmlMin: `${outputDir}/*.html`,
  outHtmlMin: `${outputDir}/`,
  srcScss:    `${inputDir}/scss/**/*.scss`,
  outScss:    `${inputDir}/scss/css`,
  srcCss:     `${inputDir}/scss/**/*.css`,
  outCss:     `${outputDir}/css`,
  srcImg:     `${inputDir}/img/**/*.png`,
  outImg:     `${outputDir}/img`,
  srcSvg:     `${inputDir}/img/svg/sprite/*.svg`,
  outSvg:     `${outputDir}/img/svg/sprite`,
  srcSvgDef:  `${inputDir}/img/svg/default/*.svg`,
  outSvgDef:  `${outputDir}/img/svg/default`,
  srcJs:      `${inputDir}/js/*.js`,
  outJs:      `${outputDir}/js`,
  srcFonts:   `${inputDir}/fonts/*.ttf`,
  outFonts:   `${outputDir}/fonts`
};

const folderDel = () => {
  return clean(outputDir);
}

folderDel()
  .then(() => {
    console.log(`Successfully deleted ${outputDir}.`);
  })
  .catch((err) => {
    console.error(`Error while deleting ${outputDir}: ${err.message}`);
  });

const htmlInclude = () => {
  return src(path.join(paths.srcHtml))
  .pipe(fileInclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(typograf({
    locale: ['ru', 'en-US']
  }))
  .pipe(dest(path.join(paths.outHtml)))
  .pipe(browserSync.stream())
}; 

const compileSass = () => {
  return src(path.join(paths.srcScss))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest(path.join(paths.outScss)))
    .pipe(browserSync.stream())
};

const processCss = () => {
  return src(path.join(paths.srcCss))
    .pipe(bulk())
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(dest(path.join(paths.outCss)))
    .pipe(browserSync.stream())
};

const webpImg = () => {
    return src(path.join(paths.srcImg))
    .pipe(webp())
    .pipe(dest(path.join(paths.outImg)))
    .pipe(browserSync.stream())
};

const svgSprites = () => {
  return src(path.join(paths.srcSvg))
      .pipe(
        svgmin({
          js2svg: {
            pretty: true,
          },
        })
      )
      .pipe(
        cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
          },
          parserOptions: {
            xmlMode: true
          },
        })
      )
      .pipe(replace('&gt;', '>'))
      .pipe(svgSprite({
        mode: {
          stack: {
            sprite: "sprite.svg"
          }
        },
      }))
      .pipe(dest(path.join(paths.outSvg)))
};

const svgDefault = () => {
  return src(path.join(paths.srcSvgDef))
  .pipe(dest(path.join(paths.outSvgDef)))
};

const scripts = () => {
  return src(path.join(paths.srcJs))   
    .pipe(plumber())
    .pipe(webpackStream({
      mode: mode ? 'production' : 'development',
      output: {
        filename: 'main.js',
      },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: "defaults"
                }]
              ]
            }
          }
        }]
      },
      devtool: !mode ? 'source-map' : false
    }))
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(dest(path.join(paths.outJs)))
    .pipe(browserSync.stream())
};

const htmlMinify = () => {
	return src(path.join(paths.srcHtmlMin)) 
    .pipe(htmlmin({
      collapseWhitespace: true, // Удаляет пробелы между блочными элементами
      removeComments: true, // Удаляет комментарии
      removeEmptyAttributes: true, // Удаляет пустые атрибуты
      removeRedundantAttributes: true, // Удаляет избыточные атрибуты
      removeScriptTypeAttributes: true, // Удаляет типы атрибутов для сценариев
      removeStyleLinkTypeAttributes: true, // Удаляет типы атрибутов для стилей и ссылок
      useShortDoctype: true // Использует короткий DOCTYPE,
    }))
    .pipe(dest(path.join(paths.outHtmlMin)))
};

const fonts = () => {
  return src(path.join(paths.srcFonts))
  .pipe(woff2())
  .pipe(dest(path.join(paths.outFonts)))
  .pipe(browserSync.stream())
}

const watchFiles = () => {
    browserSync.init({
      server: {
        baseDir: './dist'
      },
      cors: true
    });

    watch('src/fonts/*.ttf', fonts);
    watch('src/*.html', htmlInclude);
    watch('src/pages/*.html', htmlInclude);
    watch('src/partials/*.html', htmlInclude);
    watch('src/partials/**/*.html', htmlInclude);
    watch('src/scss/**/*.scss', compileSass);
    watch('src/scss/css/*.css', processCss);
    watch('src/img/svg/sprite/*.svg', svgSprites); 
    watch('src/img/svg/default/*.svg', svgDefault); 
    watch('src/img/**.{jpg,jpeg,png}', webpImg);
    watch('src/**/*.js', scripts);
};


  const build = series(
    folderDel, 
    htmlInclude,
    fonts,
    compileSass,
    processCss,
    webpImg,
    svgSprites,
    svgDefault,
    scripts,
    htmlMinify,
    watchFiles
);
  
  exports.default = build;
  exports.build = build;

