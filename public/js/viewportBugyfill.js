/* vw兼容方案：调用viewport-units-buggyfill */
//todo 静态资源打包后未被压缩
window.onload = () => {
	window.viewportUnitsBuggyfill.init({
		hacks: window.viewportUnitsBuggyfillHacks
	});
	// 打印机型相关参数
	const winDPI = window.devicePixelRatio;
	const uAgent = window.navigator.userAgent;
	const screenHeight = window.screen.height;
	const screenWidth = window.screen.width;
	const winWidth = window.innerWidth;
	const winHeight = window.innerHeight;

	// alert(
	// 	"Windows DPI:" + winDPI +
	// 	";\ruAgent:" + uAgent +
	// 	";\rScreen Width:" + screenWidth +
	// 	";\rScreen Height:" + screenHeight +
	// 	";\rWindow Width:" + winWidth +
	// 	";\rWindow Height:" + winHeight
	// )
}