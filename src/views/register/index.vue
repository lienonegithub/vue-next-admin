<template>
	<div class="register-content">
		<div class="register-content-main">
			<h4 class="register-content-title">{{ $t('message.registerTitle.index') }}</h4>
			<div class="register-entrance">
				<button class="entrance-item" @click="handleClick('external')">
					<img src="/@/assets/images/register/icon-enterprise.png" alt="" class="entrance-item-icon">
					<span class="entrance-item-label">{{ $t('message.entranceLabel.external') }}</span>
				</button>
				<button class="entrance-item" @click="handleClick('inner')">
					<img src="/@/assets/images/register/icon-expert.png" alt="" class="entrance-item-icon">
					<span class="entrance-item-label">{{ $t('message.entranceLabel.inner') }}</span>
				</button>
			</div>
			<el-button class="back-btn" type="primary" @click="$router.replace({ name: 'login' })">
				<span class="back-btn-text">
					{{ $t('message.registerButtonText.index') }}
				</span>
			</el-button>
		</div>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
	name: 'auth-register',
	setup () {
		const activeType = ref('')

		const handleClick = (type: string) => {
			activeType.value = type
		}

		return {
			activeType,
			handleClick
		}
	}
};
</script>

<style scoped lang="scss">
.register-content {
	transition: height 0.2s linear;
	overflow: hidden;
	z-index: 1;
	display: flex;
	align-items: center;
	width: 100%;
	.register-content-main {
		margin: 0 auto;
		width: 340px;
		max-width: 80%;
	}
	.register-content-title {
		color: var(--color-text-heavy);
		font-weight: 500;
		font-size: 30px;
		line-height: 38px;
		text-align: center;
		margin: 15px 0 0;
		white-space: nowrap;
		z-index: 5;
		position: relative;
		transition: all 0.3s ease;
	}
	.register-entrance {
		margin: 100px 0 70px;
		text-align: center;
		.entrance-item {
			cursor: pointer;
			text-align: center;
			border: 0;
			width: 138px;
			height: 174px;
			background: #F7F9FB;
			border-radius: 10px;
			margin: 0 8px;
			padding: 28px 32px;
			transition: all 0.3s ease;

			&:hover {
				background-color: var(--color-info-light-9);
			}
			&:active {
				transform: scale(0.95);
			}

			&-icon {
				@include wh(64px, 64px);

				object-fit: fill;
				margin-bottom: 32px;
			}

			&-label {
				@include ft(16px, 22px);

				font-weight: 500;
				color: var(--color-text-heavy);
			}
		}
	}
	.back-btn {
		width: 100%;
		height: 48px;
		letter-spacing: 2px;
		margin-top: 15px;
		border-radius: 8px;

		&-text {
			font-size: 16px;
			line-height: 24px;
			font-weight: 500;
		}
	}
}
</style>
