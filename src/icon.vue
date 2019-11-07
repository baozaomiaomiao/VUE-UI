<template>
	<svg class="g-icon">
		<use :xlink:href="`#i-${name}`"></use>
	</svg>
</template>

<script>
import './svg'; // 引入icon图标的svg格式
export default {
	props: ['name']
};
</script>

<style lang="scss" scoped>
.g-icon {
	width: 1em;
	height: 1em;
}
</style>
