# vuecli3-vw

> vue-cli3引用vw移动端适配方案，含兼容方案、1px边框、元素容器宽高比设置demo。

## vw适配方案
### 插件安装
- postcss-aspect-ratio-mini：主要用来处理元素容器宽高比。

- postcss-px-to-viewport：主要用来把px单位转换为vw、vh、vmin或者vmax这样的视窗单位，也是vw适配方案的核心插件之一。

- postcss-write-svg：主要用来处理移动端1px的解决方案。该插件主要使用的是border-image和background来做1px的相关处理。

- postcss-cssnext：其实就是cssnext，该插件可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理

- cssnano：主要用来压缩和清理CSS代码。在Webpack中，cssnano和css-loader捆绑在一起，所以不需要自己加载它。不过你也可以使用postcss-loader显式的使用cssnano。

- cssnano-preset-advanced：在cssnano的配置中，使用了preset: "advanced"，需要安装该插件

- postcss-viewport-units：主要是给CSS的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin和vmax做适配的操作。

- sass-resources-loader：实现scss定义的函数设为全局变量，设置见build/utils.js

### postcss.config.js配置postcss相关插件：

```
module.exports = {
  plugins: {
		"postcss-import": {},
		"postcss-url": {},
		// to edit target browsers: use "browserslist" field in package.json
		"postcss-aspect-ratio-mini": {},
		"postcss-write-svg": {utf8: false},
		"postcss-cssnext": {},
		// vw适配方案
		"postcss-px-to-viewport": {
			viewportWidth: 750,      // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
			viewportHeight: 1334,    // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
			unitPrecision: 3,        // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
			viewportUnit: 'vw',      // 指定需要转换成的视窗单位，建议使用vw
			selectorBlackList: ['.ignore', '.hairlines'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
			minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
			mediaQuery: false       // 允许在媒体查询中转换`px`
		},
		"postcss-viewport-units": {},
		"cssnano": {
			preset: "advanced",
			autoprefixer: false,
			"postcss-zindex": false // 为true时，z-index的值就会重置为1
		},
	}
};
```

## vw兼容方案
### Github - https://github.com/rodneyrehm/viewport-units-buggyfill
### 引入viewport-units-buggyfill.js和viewport-units-buggyfill.hacks.js
### viewport-units-buggyfill调用：

```
window.onload = () => {
	window.viewportUnitsBuggyfill.init({
		hacks: window.viewportUnitsBuggyfillHacks
	});
};
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
