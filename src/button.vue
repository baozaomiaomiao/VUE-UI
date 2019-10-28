<template>
	<!-- 1.通过CSS控制按钮位置. 2.通过ES6动态属性, 配合vue切换类名-->
	<button class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
		<g-icon v-if="icon" :name="icon"></g-icon>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>

<script>
export default {
	// props: ['icon', 'iconPosition'] //根据 iconPosition 动态设定 icon位置
	props: {
		icon: {
			type: String
		},
		iconPosition: {
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

<style lang="scss">
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
}
</style>
