<template>
	<div class="auth-container">
		<!-- <div class="logo-content">
			<span>{{ getThemeConfig.globalViceTitle }}</span>
		</div> -->
		<div class="auth-container-center">
			<div class="image-content"></div>
			<div class="form-content">
				<router-view></router-view>
			</div>
		</div>
		<div class="auth-copyright">
			<div class="mb5 auth-copyright-company">{{ $t('message.copyright.one5') }}</div>
			<div class="auth-copyright-msg">{{ $t('message.copyright.two6') }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from '/@/store/index';

export default {
	name: 'authLayout',
	setup() {
		const store = useStore();
		// 获取布局配置信息
		const getThemeConfig = computed(() => {
			return store.state.themeConfig.themeConfig;
		});
		return {
			getThemeConfig,
		};
	},
};
</script>

<style scoped lang="scss">
.auth-container {
	width: 100%;
	height: 100%;
	background: url('/@/assets/images/login/background.png') center no-repeat;
	background-size: contain;
	padding: 144px 50px;
	
	.logo-content {
		position: absolute;
		top: 30px;
		left: 50%;
		height: 50px;
		display: flex;
		align-items: center;
		font-size: 20px;
		color: var(--color-primary);
		letter-spacing: 2px;
		width: 90%;
		transform: translateX(-50%);
	}
	.auth-container-center {
		margin: 0 auto;
		display: flex;
		max-width: 1184px;
		height: 100%;
		min-height: 460px;
		background-color: #fff;
		border-radius: 8px;
		overflow: hidden;

		.image-content {
			flex: 1;
			height: 100%;
			max-width: 684px;
			background: url('/@/assets/images/login/left-bg.png') center no-repeat;
			background-size: cover;
		}
		.form-content {
			padding: 20px;
			flex: 1;
			background-color: rgba(255, 255, 255, 0.99);
			transition: height 0.2s linear;
			overflow: hidden;
			z-index: 1;
			display: flex;
			align-items: center;
		}
	}
	.auth-copyright {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 30px;
		text-align: center;
		color: var(--color-primary);
		font-size: 12px;
		opacity: 0.8;
		.auth-copyright-company {
			white-space: nowrap;
		}
		.auth-copyright-msg {
			@extend .auth-copyright-company;
		}
	}
}

/* 页面宽度小于1440px
------------------------------- */
@media screen and (max-width: 1440px) {
	.auth-container {
		padding: 90px 50px;
	
	}
}
</style>
