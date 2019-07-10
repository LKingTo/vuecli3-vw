<template>
	<div class="container">
		<div class="test">test</div>
		<div class="box ignore">ingore类，写的`px`不会被转换</div>
		<div class="hairlines">hairlines类，写的`px`不会被转换</div>
		<br>
		<div w-188-246 class="color">容器宽高比: 188:246</div>
		<br>
		<div class="real-1px-box">1px box</div>
		<br>
		<div class="real-1px-border-top">1px border-top</div>
	</div>
</template>

<script>
	export default {
		name: "demo1"
	}
</script>

<style lang="scss" scoped>
	.test{
		border: .5px solid black;
		border-bottom-width: 1px;
		font-size: 14px;
		line-height: 20px;
		position: relative;
	}
	.ignore {
		margin: 10px;
		background-color: red;
	}
	.box {
		width: 180px;
		height: 300px;
		font-size: 32px;
	}
	.hairlines {
		border-bottom: 0.5px solid red;
	}

	/* 容器宽高比 */
	[w-188-246] {
		width: 188px;
		background-color: red;
	}

	/* aspect-ratio属性不能和其他属性写在一起，否则编译出来的属性只会留下aspect-ratio的值 */
	[w-188-246] {
		aspect-ratio: '188:246';
	}

	/* 引用全局变量函数svg(1px-border) */
	.real-1px-box {
		border: 1px solid;
		border-image: svg(1px-border param(--color red)) 1 stretch;
	}

	.real-1px-border-top {
		border: 0;    						// 将其余三遍的border宽度设置成0
		border-top: 1px solid;   	// 这里将单边覆盖上面border的宽度设置
		border-image: svg(1px-border param(--color red)) 1 stretch;
	}
</style>