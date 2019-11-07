<template>
	<div class="g-button-group">
		<slot></slot>
	</div>
</template>

<script>
export default {
	// 处理边框BUG，当子元素不是g-button 时，发出警告
	mounted() {
		for (let node of this.$el.children) {
			let name = node.nodeName.toLowerCase();
			if (name !== 'button') {
				console.warn(`g-button-group 的子元素只能是 g-button, 请去除 ${name}`);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.g-button-group {
	display: inline-flex;
	vertical-align: middle;
	> .g-button {
		border-radius: 0;
		&:not(:first-child) {
			margin-left: -1px; //解决边框不合并的问题,新bug边的按钮被覆盖掉一个边框
		}
		&:first-child {
			border-top-left-radius: var(--border-radius);
			border-bottom-left-radius: var(--border-radius);
		}
		&:last-child {
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
		}
		&:hover {
			position: relative;
			z-index: 1;
		}
	}
}
</style>
