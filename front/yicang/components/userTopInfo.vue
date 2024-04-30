<template>
	<div class="user-top-info">
		<image :src="topImageUrl" :style="topImgStyle"></image>
		<div class="user-card">
			<div class="user-card-header">
				<img :src="user.avatar" class="avatar" />
				<!-- <img :src="user.avatar" class="avatar" @click="getUserInfo();" /> -->
				<div class="user-info">
					<div class="username">{{ user.username }}</div>
					<div class="signature" @click="handleSignature();">{{ computedSinature }}</div>
				</div>
				<uni-popup ref="showSignaturePopup" :title="'签名'" style="z-index: 99999;">
					<uni-card title="注册" sub-title="" extra=""
						thumbnail="https://img.js.design/assets/img/6422455dd51f3246b0542d43.jpg#16e1bba5446fd8ab0a4664271572b583">
						<text>请输入您新的签名</text>
						<view class="input-group">
							<input type="text" placeholder="签名" v-model="user.signature" />
						</view>
						<view class="btn-group">
							<button class="btn cancel" @click="handleSignatureCancel();">取消</button>
							<button class="btn confirm" @click="handleSignatureConfirm();">确认</button>
						</view>
					</uni-card>
				</uni-popup>
			</div>
			<div class="user-card-footer">
				<div class="count-item">
					<div class="count">{{ user.postCount }}</div>
					<div class="count-label">帖子</div>
				</div>
				<div class="count-item">
					<div class="count">{{ user.fansCount }}</div>
					<div class="count-label">粉丝</div>
				</div>
				<div class="count-item">
					<div class="count">{{ user.friendCount }}</div>
					<div class="count-label">好友</div>
				</div>
			</div>
		</div>
	</div>
	<div class="user-bottom-info">
		<image :src="btmImageUrl" :style="btmImgStyle"></image>
	</div>
	
	<!-- <view v-if="showInfo == true">
		<UserBtmInfo :user="user" />
	</view> -->
</template>

<script>
	import UserBtmInfo from "@/components/userBtmInfo.vue";
	export default {
		props: {
			user: {
				avatar: String,
				username: String,
				signature: String,
				postCount: Number,
				fansCount: Number,
				friendCount: Number,
			}
		},
		components: {
			UserBtmInfo,
		},
		data() {
			return {
				topImageUrl: "https://img.js.design/assets/img/6422468ad51f3246b0551740.png#9035c48270538db98579855b00f82616",
				btmImageUrl: "https://img.js.design/assets/img/64228a34cece21d6b6495b2d.png#af16a6ad687a8181f2b8ba794a7cd1e",
				topImgStyle: {
					width: '120vw',
					height: "80vh",
					marginTop: "-20vh",
					marginLeft: "-10vw",
					opacity: ".6",
					position: "fixed"
				},
				btmImgStyle: {
					width: '120vw',
					height: "80vh",
					marginTop: "-15vh",
					marginLeft: "-10vw",
				},
				showInfo: false,
				userInfo: {
					username: this.computedUsername,
					story: "Once upon a time...",
					expertise: "Coding",
					talent: "Creative problem solving",
					overall: "A+",
				},
			}
		},
		computed: {
			computedSinature() {
				return this.user.signature;
			},
			computedUsername() {
				return this.user.username;
			}
		},
		methods: {
			handleSignature() {
				this.$refs.showSignaturePopup.open('center');
			},
			handleSignatureConfirm() {
				console.log("handleSignatureConfirm");
				uni.request({
					header: {
						'Content-Type': 'application/json'
					},
					url: 'http://47.97.38.78/user/setSignature',
					method: 'POST',
					sslVerify: false,
					data: JSON.stringify({
						'username': this.username,
						'signature': this.computedSinature,
					}),
					success: (response) => {
						this.$refs.showSignaturePopup.close();
						console.log(response.data.data)
					},
					fail: (response) => {
						console.log(response);
					}
				});
			},
			handleSignatureCancel() {
				this.$refs.showSignaturePopup.close();
			},

			getUserInfo() {
				console.log("getUserInfo-Character");
				this.showInfo = true;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.user-top-info {
		background-color: #2D3034;
		height: 50vh;
		width: 120vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.user-card {
		width: 100vw;
		background: transparent;
		border-radius: 10px;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		z-index: 999;
		color: rgba(234, 224, 214, 1);
	}

	.user-card-header {
		display: flex;
		padding: 20px;
	}

	.avatar {
		border-radius: 50%;
		border: 2px solid #eee;
		height: 80px;
		width: 80px;
		margin-right: 30px;
	}

	.user-info {
		display: flex;
		flex-direction: column;
	}

	.username {
		font-size: 18px;
		font-weight: 700;
		line-height: 26.06px;
	}

	.signature {
		margin-top: 1vh;
		font-size: 12px;
		font-weight: 400;
		line-height: 17.38px;
	}

	.user-card-footer {
		margin-top: 5vh;
		width: 60vw;
		margin-left: 10vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.count-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 20px;
	}

	.count {
		font-size: 20px;
		font-weight: 700;
		line-height: 20px;
	}

	.count-label {
		font-size: 14px;
	}

	.title {
		font-size: 3rem;
		margin-top: -10vh;
		margin-bottom: 30vh;
		color: #FF69B4;
		z-index: 999;
	}

	.btn-group {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		width: 20vw;
		height: 20vw;
		border-radius: 20px;
		margin: 0 10vw;
	}

	.login {
		background-color: #2196F3;
		color: #fff;
	}

	.register {
		background-color: #fff;
		color: #2196F3;
		border: 2px solid #2196F3;
	}

	.uni-popup {
		width: 100vw;
	}

	.input-group {
		margin-bottom: 20px;
	}

	input {
		width: 100%;
		height: 40px;
		padding: 0 10px;
		border: 1px solid #ccc;
		border-radius: 20px;
		outline: none;
	}

	.confirm {
		background-color: #2196F3;
		color: #fff;
	}

	.cancel {
		background-color: #fff;
		color: #2196F3;
		border: 2px solid #2196F3;
	}
</style>