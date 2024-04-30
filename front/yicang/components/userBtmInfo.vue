<template>
	<div class="user-btm-info">
		<img class="user-avatar" :src="user.avatar" alt="user avatar">
		<div class="user-info">
			<div class="user-name">{{ user.username }}</div>
			<div class="user-stats">
				<div class="user-stat">
					<div class="user-stat-label">·故事</div>
					<div class="user-stat-value">{{ user.story }}</div>
				</div>
				<div class="user-stat">
					<div class="user-stat-label">·专精</div>
					<div class="user-stat-value">{{ user.expertise }}</div>
				</div>
				<div class="user-stat">
					<div class="user-stat-label">·天赋</div>
					<div class="user-stat-value">{{ user.talent }}</div>
				</div>
				<div class="user-stat">
					<div class="user-stat-label">综合属性</div>
					<div class="user-stat-value">{{ user.composite }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'user-btm-info',
		props: {
			user: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style scoped>
	.user-btm-info {
		width: 100vw;
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.user-avatar {
		width: 20%;
		height: auto;
		border-radius: 50%;
	}

	.user-info {
		width: 100%;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.user-name {
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
	}

	.user-stats {
		width: 80%;
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		background-image: url("https://img.js.design/assets/img/6422468ad51f3246b0551740.png#9035c48270538db98579855b00f82616");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		opacity: 0.6;
		padding: 1rem;
	}

	.user-stat {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.user-stat-label {
		font-size: 1rem;
		font-weight: bold;
		color: white;
		margin-right: 1rem;
	}

	.user-stat-value {
		font-size: 1rem;
		color: white;
	}
</style>