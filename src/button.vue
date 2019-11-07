<template>
	<!-- 1.通过CSS控制按钮icon位置. 2.通过ES6动态属性, 配合vue切换类名-->
	<button
		class="g-button"
		:class="{ [`icon-${iconPosition}`]: true }"
		@click="$emit('click')"
	>
		<!-- 如果有 loading 状态 就不显示icon-->
		<g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
		<g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>

<script>
import Icon from './icon';
export default {
	components: {
		'g-icon': Icon
	},
	props: {
		icon: {
			type: String
		},
		loading: {
			type: Boolean,
			default: false
		},
		iconPosition: {
			// 定位 icon 在左边还是右边
			type: String,
			default: 'left',
			// 通过拦截器,处理边界情况. 只接受 left || right
			validator(value) {
				return value === 'left' || value == 'right';
			}
		}
	}
};
</script>

<style lang="scss" scoped>
/*loading 加载动画*/
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
.g-button {
	font-size: var(--font-size);
	height: var(--button-height);
	padding: 0 1em;
	border-radius: var(--border-radius);
	border: 1px solid var(--border-color);
	background: var(--button-bg);
	display: inline-flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle; //去除 inline属性系列.无法居中对齐的BUG inline-flex
	&:hover {
		border-color: var(--border-color-hover);
	}
	&:active {
		background-color: var(--button-active-bg);
	}
	&:focus {
		outline: none; /*去除CSS控制按钮，导致蓝色边框的问题*/
	}
	> .content {
		order: 2;
	}
	> .icon {
		order: 1;
		margin-right: 0.2em;
	}
	&.icon-right {
		> .content {
			order: 1;
		}
		> .icon {
			order: 2;
			margin-right: 0;
			margin-left: 0.2em;
		}
	}
	.loading {
		animation: spin 1.5s infinite linear;
	}
}
</style>
