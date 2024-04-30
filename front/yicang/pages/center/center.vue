<template>
	<div style="position: fixed;">
		<UserTopInfo :user=user></UserTopInfo>
	</div>
	<view class="login-container" v-if="ifLogin==false">
		<view class="title">未登录</view>
		<view class="btn-group">
			<button class="btn login" @click="handleLogin">登录</button>
			<button class="btn register" @click="handleRegister">注册</button>
		</view>

		<uni-popup ref="showLoginPopup" :title="'登录'">
			<uni-card title="登录" sub-title="" extra=""
				thumbnail="https://img.js.design/assets/img/6422455dd51f3246b0542d43.jpg#16e1bba5446fd8ab0a4664271572b583">
				<text>请输入用户名和密码</text>
				<view class="input-group">
					<input type="text" placeholder="用户名" v-model="username" />
				</view>
				<view class="input-group">
					<input type="password" placeholder="密码" v-model="password" />
				</view>
				<view class="btn-group">
					<button class="btn cancel" @click="handleLoginCancel">取消</button>
					<button class="btn confirm" @click="handleLoginConfirm">确认</button>
				</view>
			</uni-card>
		</uni-popup>

		<uni-popup ref="showRegisterPopup" :title="'注册'">
			<uni-card title="注册" sub-title="" extra=""
				thumbnail="https://img.js.design/assets/img/6422455dd51f3246b0542d43.jpg#16e1bba5446fd8ab0a4664271572b583">
				<text>请输入用户名和密码</text>
				<view class="input-group">
					<input type="text" placeholder="用户名" v-model="username" />
				</view>
				<view class="input-group">
					<input type="password" placeholder="密码" v-model="password" />
				</view>
				<view class="btn-group">
					<button class="btn cancel" @click="handleRegisterCancel">取消</button>
					<button class="btn confirm" @click="handleRegisterConfirm">确认</button>
				</view>
			</uni-card>
		</uni-popup>

	</view>

	<view class="choice-container" v-if="ifLogin==true && ifChoice==true">
		<view class="choice-item">
			<text class="choice-text" @click="myNovel();">我的小说</text>
		</view>
		<view class="choice-item">
			<text class="choice-text" @click="myDraw();">我的绘画</text>
		</view>
		<view class="choice-item">
			<text class="choice-text" @click="myCharacter();">我的人物</text>
		</view>
		
	</view>

	<view class="choice-container" v-if="ifLogin==true && ifNovel==true">
		<div class="big-card" style="margin-top: 30vh;">
			<div class="card-row">
				<div class="card">
					<img
						src="https://img.js.design/assets/img/6423df1b59e732fb5996ac2e.png#3c07a2d25650b7e910989358ab73684a" />
					<p class="card-text">新花样 </p>
				</div>
				<div class="card">
					<img
						src="https://img.js.design/assets/img/6423def59b06204f6ad661f1.png#b7411bc65ed267448616ccedffc8dc30" />
					<p class="card-text">混蛋经济学</p>
				</div>
				<div class="card">
					<img
						src="https://img.js.design/assets/img/6423df45e8745177e5a937b6.png#47f730dd16d5a273f13dbc8f54362930" />
					<p class="card-text">即刻出发</p>
				</div>
			</div>
			<div class="card-row">
				<div class="card">
					<img
						src="https://img.js.design/assets/img/6423df4bad69f06604d63a81.png#e05312d11709458a89793be28837da0c" />
					<p class="card-text">米歇尔</p>
				</div>
				<div class="card">
					<img
						src="https://img.js.design/assets/img/6423df51e8745177e5a941c6.png#c3fd0bd57108e787c23d0b3f6cefe78e" />
					<p class="card-text">新花样</p>
				</div>
				<div class="card">
					<img
						src="https://img.js.design/assets/img/6423def59b06204f6ad661f1.png#b7411bc65ed267448616ccedffc8dc30" />
					<p class="card-text">混蛋经济学</p>
				</div>
			</div>
			<button style="margin-top: 10vh;color: palevioletred;background-color:darkorchid;" @click="ifNovel=false; ifChoice=true">返回</button>
		</div>
	</view>

	<view class="choice-container" v-if="ifLogin==true && ifDraw==true">
		<div class="big-card-draw" style="margin-top: 30vh;">
			<div class="card-row">
				<div class="card">
					<img
						src="https://img.js.design/assets/img/6423ddca24baae5a3b5d1706.png#b711d9f8cfa497ce0145f2f73ba5f8bc" />
					<p class="card-text">现代言情</p>
				</div>
				<div class="card">
					<img
						src="https://img.js.design/assets/img/6423df51e8745177e5a941c6.png#c3fd0bd57108e787c23d0b3f6cefe78e" />
					<p class="card-text">在彼岸</p>
				</div>
			</div>
			<div class="card-row">
				<div class="card">
					<img
						src="https://img.js.design/assets/img/6423dd799b06204f6ad4fa50.png#c6aabd883f06363d979a52ce1769eb4d" />
					<p class="card-text">新花样</p>
				</div>
				<div class="card">
					<img
						src="https://img.js.design/assets/img/6423ddca24baae5a3b5d1706.png#b711d9f8cfa497ce0145f2f73ba5f8bc" />
					<p class="card-text">更多画作</p>
				</div>
			</div>
			<button style="margin-top: 10vh;color: palevioletred;background-color:darkorchid;" @click="ifDraw=false; ifChoice=true">返回</button>
		</div>
	</view>

</template>

<script>
	import UserTopInfo from '@/components/userTopInfo.vue';

	export default {
		components: {
			UserTopInfo,
		},
		data() {
			return {
				ifLogin: false,
				ifChoice: true,
				ifNovel: false,
				ifDraw: false,
				//ifLogin: true,
				username: '',
				password: '',
				user: {
					avatar: 'https://img.js.design/assets/img/642297ced51f3246b08fdfb0.png#dd97edd5a028e2369fa1a7f712d85b0f',
					username: '',
					signature: '',
					postCount: '',
					fansCount: '',
					friendCount: '',
				}
			}
		},
		methods: {
			handleLogin() {
				this.$refs.showLoginPopup.open('center');
			},
			handleLoginConfirm() {
				console.log("handleLoginConfirm");
				uni.request({
					header: {
						'Content-Type': 'application/json'
					},
					url: 'http://47.97.38.78/user/login',
					method: 'POST',
					sslVerify: false,
					data: JSON.stringify({
						'username': this.username,
						'password': this.password,
					}),
					success: (response) => {
						this.$refs.showLoginPopup.close();
						this.ifLogin = true;
						console.log(response.data.data)
						// this.user = response.data.data
						this.user.avatar =
							"https://img.js.design/assets/img/642297ced51f3246b08fdfb0.png#dd97edd5a028e2369fa1a7f712d85b0f";
						this.user.signature = "#" + response.data.data.signature;
						this.user.username = response.data.data.username;
						this.user.postCount = 724;
						this.user.fansCount = 452;
						this.user.friendCount = 273;
					},
					fail: (response) => {
						console.log(response);
					}
				});
			},
			handleLoginCancel() {
				this.$refs.showLoginPopup.close();
			},
			handleRegister() {
				this.$refs.showRegisterPopup.open('center');
			},
			handleRegisterConfirm() {
				console.log("handleReigsterConfirm");
				uni.request({
					header: {
						'Content-Type': 'application/json'
					},
					url: 'http://47.97.38.78/user/register',
					method: 'POST',
					sslVerify: false,
					data: JSON.stringify({
						'username': this.username,
						'password': this.password,
					}),
					success: (response) => {
						this.$refs.showRegisterPopup.close();
					},
					fail: (response) => {
						console.log(response);
					}
				});
			},
			handleRegisterCancel() {
				this.$refs.showRegisterPopup.close();
			},
			myNovel() {
				this.ifChoice = false;
				this.ifNovel = true;
			},
			myDraw() {
				this.ifChoice = false;
				this.ifDraw = true;
			}
		},

	}
</script>
<style lang="scss" scoped>
	.login-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		z-index: 999;

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
	}

	.choice-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 18vh;
		position: absolute;
		top: 50vh;

		.choice-item {
			margin: 0 4vw;
			flex: 1;
			height: 100%;
			background-color: url(https://img.js.design/assets/img/64229de694edb4d3046bf87e.png#87b25b93638875bde4496ef2a2a72c98);
			border-radius: 6px;
			border: 1px solid rgba(243, 221, 184, 1);
			box-shadow: inset 0px 2px 4px 0px rgba(237, 211, 211, 0.25);
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.choice-text {
			font-size: 16px;
			font-weight: 500;
			line-height: 23.17px;
			color: rgba(234, 224, 214, 1);
		}
	}

	.big-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;


		.card-row {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.card {
			width: 20vw;
			height: 30vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 0 5vw;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
			border-radius: 10px;
		}

		.card img {
			width: 20vw;
			height: 30vh;
			object-fit: contain;
		}

		.card-text {
			font-size: 13.69px;
			font-weight: 400;
			line-height: 19.83px;
			color: rgba(240, 224, 190, 1);
		}
	}
	
	.big-card-draw {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	
	
		.card-row {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	
		.card {
			width: 40vw;
			height: 30vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 0 5vw;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
			border-radius: 10px;
		}
	
		.card img {
			width: 40vw;
			height: 30vh;
			object-fit: contain;
		}
	
		.card-text {
			font-size: 13.69px;
			font-weight: 400;
			line-height: 19.83px;
			color: rgba(240, 224, 190, 1);
		}
	}
</style>