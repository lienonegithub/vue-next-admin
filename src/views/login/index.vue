<template>
	<div class="login-container">
		<div class="login-container-center">
			<div class="image-content"></div>
			<div class="form-content">
				<div class="login-content" :class="{ 'login-content-mobile': tabsActiveName === 'mobile' }">
					<div class="login-content-main">
						<h4 class="login-content-title">登录{{ getThemeConfig.globalTitle }}</h4>
						<el-tabs v-model="tabsActiveName" stretch @tab-click="onTabsClick">
							<el-tab-pane :label="$t('message.label.one1')" name="account" :disabled="tabsActiveName === 'account'">
								<transition name="el-zoom-in-center">
									<Account v-show="isTabPaneShow" />
								</transition>
							</el-tab-pane>
							<el-tab-pane :label="$t('message.label.two2')" name="mobile" :disabled="tabsActiveName === 'mobile'">
								<transition name="el-zoom-in-center">
									<Mobile v-show="!isTabPaneShow" />
								</transition>
							</el-tab-pane>
						</el-tabs>
						<div class="login-content-links">
							<el-button class="forget-password" type="text" size="small">{{ $t('message.link.one3') }}</el-button>
							<el-button class="register" type="text" size="small" @click="$router.push({ name: 'register' })">{{ $t('message.link.two4') }}</el-button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="login-copyright">
			<div class="mb5 login-copyright-company">{{ $t('message.copyright.one5') }}</div>
			<div class="login-copyright-msg">{{ $t('message.copyright.two6') }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { toRefs, reactive, computed } from 'vue';
import Account from './component/account.vue';
import Mobile from './component/mobile.vue';
import { useStore } from '/@/store/index';

export default {
	name: 'loginIndex',
	components: { Account, Mobile },
	setup() {
		const store = useStore();
		const state = reactive({
			tabsActiveName: 'account',
			isTabPaneShow: true,
		});
		// 获取布局配置信息
		const getThemeConfig = computed(() => {
			return store.state.themeConfig.themeConfig;
		});
		// 切换密码、手机登录
		const onTabsClick = () => {
			state.isTabPaneShow = !state.isTabPaneShow;
		};
		return {
			onTabsClick,
			getThemeConfig,
			...toRefs(state),
		};
	},
};
</script>

<style scoped lang="scss">
.login-container {
	width: 100%;
	height: 100%;
	background: url('/@/assets/images/login/background.png') center no-repeat;
	background-size: contain;
	padding: 144px 50px;
	
	.login-container-center {
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
	
	.login-content {
		transition: height 0.2s linear;
		overflow: hidden;
		z-index: 1;
		display: flex;
		align-items: center;
		width: 100%;

		.login-content-main {
			margin: 0 auto;
			width: 340px;
			max-width: 80%;
			.login-content-title {
				color: var(--color-text-heavy);
				font-weight: 500;
				font-size: 30px;
				line-height: 38px;
				text-align: center;
				margin: 15px 0 30px;
				white-space: nowrap;
				z-index: 5;
				position: relative;
				transition: all 0.3s ease;
			}

			& ::v-deep(.el-tabs__nav) {
				.el-tabs__active-bar {
					height: 4px;
				}
				.el-tabs__item {
					font-size: 18px;
					line-height: 26px;
					font-weight: 400;
					color: var(--color-text-light);

					&.is-active {
						font-weight: 500;
						color: var(--color-primary);
					}
				}
			}

			.login-content-links {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				line-height: 20px;

				.forget-password {
					color: #909399;
				}

				.register {
					color: var(--color-blue) !important;
				}
			}
		}
		.login-content-main-sacn {
			position: absolute;
			top: 0;
			right: 0;
			width: 50px;
			height: 50px;
			overflow: hidden;
			cursor: pointer;
			transition: all ease 0.3s;
			&-delta {
				position: absolute;
				width: 35px;
				height: 70px;
				z-index: 2;
				top: 2px;
				right: 21px;
				background: var(--el-color-white);
				transform: rotate(-45deg);
			}
			&:hover {
				opacity: 1;
				transition: all ease 0.3s;
				color: var(--color-primary);
			}
			i {
				width: 47px;
				height: 50px;
				display: inline-block;
				font-size: 48px;
				position: absolute;
				right: 2px;
				top: -1px;
			}
		}
	}
	.login-content-mobile {
		height: 100%;
	}
	.login-copyright {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 30px;
		text-align: center;
		color: var(--color-primary);
		font-size: 12px;
		opacity: 0.8;
		.login-copyright-company {
			white-space: nowrap;
		}
		.login-copyright-msg {
			@extend .login-copyright-company;
		}
	}
}

/* 页面宽度小于1440px
------------------------------- */
@media screen and (max-width: 1440px) {
	.login-container {
		padding: 90px 50px;
	
	}
}
</style>
