<template>
	<main>
		<div class="bg"></div>
		<image src="https://img.js.design/assets/img/642a48a72850a4fc08989c92.png#55e0c5c0e9f01944b7b1f02511ec5107"
			class="top-img" mode="aspectFill"></image>
		<image src="https://img.js.design/assets/img/642281207c814c19c7d829d5.png#7deb0d9fbaff1845eb3b64bad7fcb142"
			class="name-img" mode="aspectFill"></image>
		<div class="img-decorate"></div>
		<h2 class="name">《千变万化绘画》</h2>
		<div class="p-wrapper" style="background-color: black;">
			<div style="width: 100%;">
				<view class="card" style="border: 1px solid #333; border-radius: 14px;">
					<view class="header">
						<div style="margin-top: 20vh;"></div>
						<view class="image-wrapper">
							<image class="image"
								src="https://img.js.design/assets/img/6422872d634e77963d151f89.png#f391bd6731fb87de589c75f2a67fb9d3"
								mode="aspectFit"></image>
						</view>
						<view class="text-wrapper">
							<text class="title">武当山书则</text>
							<view class="button-wrapper">
								<button class="button">+关注</button>
							</view>
						</view>
					</view>
					<view class="content">
						<div style="border: 1px solid rgba(240, 224, 190, 0.17);margin-top: -7vh;"></div>
						<p style="
							margin-top: 1vh;
							font-size: 12px;
							font-weight: 400;
							color: rgba(255, 255, 255, 0.8);
							text-align: justify;
						">
							2120年，人类科技水平再次迈上了新台阶。
						</p>
						<p style="
							font-size: 12px;
							font-weight: 400;
							color: rgba(255, 255, 255, 0.8);
							text-align: justify;
						">
							新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。
						</p>
					</view>
				</view>
				<div style="display: flex;align-items: center;justify-content: space-between;">
					<div style="font-size: 20px;
						font-weight: 700;
						letter-spacing: 3px;
						line-height: 0px;
						color: rgba(255, 255, 255, 1);
						text-align: left;
						vertical-align: top;
						width: 70vw;">￥ 19.00</div>
					<div style=" display: flex;align-items: center;justify-content: space-between;flex-grow: 1;">
						<button
							style="background: rgba(240, 224, 190, 1);border-radius: 18.5px;width: 100px;height: 37px; margin-right: 3vw;"
							@click="toNewPageFn('/pages/draw/detail')">预览</button>
						<button
							style="background: linear-gradient(90deg, rgba(251, 231, 193, 1) 0%, rgba(232, 194, 132, 1) 99.93%);border-radius: 18.5px;width: 100px;height: 37px; margin-right: 3vw;"
							@click="this.$refs.popup.open('center');">购买</button>
					</div>
				</div>
			</div>
			<uni-popup ref="popup">
				<div style="
					width: 288px;
					height: 343px;
					background: url(https://img.js.design/assets/img/64227e507c814c19c7d66c31.png#2c89fe46a5d30dd33a59feda70bfa2df) no-repeat;
					background-size: cover;">

				</div>
				<!-- <div style="
					width: 324px;
					height: 556px;
					background: url(https://img.js.design/assets/img/6422455dd51f3246b0542d43.jpg#16e1bba5446fd8ab0a4664271572b583);">
				 </div>-->
				<div style="
					position: absolute;
					top: 0;
					right: -5vw;
					width: 440px;
					height: 307px;
					background: url(https://img.js.design/assets/img/642262b6cece21d6b638099f.png#c6a461f978abdc00993655755571ec07) no-repeat;
					background-size: cover;">
				</div>
				<div style="
					width: 80vw;
					height: 25vh;
					background: url(https://img.js.design/assets/img/6422455dd51f3246b0542d43.jpg#16e1bba5446fd8ab0a4664271572b583) no-repeat;
					background-size: cover;
					border-radius: 24px;
					">
					<div style="
						margin-left: 12vw;
						top: 475px;
						width: 224px;
						height: 44px;
						opacity: 1;
						border-radius: 226px;
						background: linear-gradient(90deg, rgba(91, 85, 75, 1) 0%, rgba(44, 42, 35, 1) 100%);">
						<div style="font-size: 18px;
							font-weight: 500;
							color: rgba(240, 224, 190, 1);
							text-align: center;
							vertical-align: center;">
							购买成功！
						</div>
					</div>
				</div>
			</uni-popup>

			<!-- <uni-popup v-model="showBuy" :title="'交易成功'" :message="'您已成功购买商品！'">
				<h1>aasfdasdf</h1>
				<view class="popup-btns">
					<button @click="show = false">确定</button>
				</view>
			</uni-popup> -->
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			toNewPageFn(url) {
				uni.navigateTo({
					url: url
				})
			}
		},
		mounted() {}
	}
</script>
<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main {
		min-height: 100vh;
		background: black;

		.bg {
			position: fixed;
			left: -10px;
			top: -400px;
			width: 434px;
			height: 686.35px;
			background-color: black;
			background-image: url(../../static/bg.png);
			background-size: cover;
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
		}

		.top-img {
			top: 10vh;
			width: 80vw;
			height: 78vw;
			margin-left: 10vw;
			border: 1px solid rgba(0, 0, 0, 1);
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
		}

		.name-img {
			top: 0vh;
			left: -5vw;
			width: 120vw;
			height: 70vw;
			// border: 1px solid rgba(0, 0, 0, 1);
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
		}

		.img-decorate {
			position: absolute;
			top: 100vw;
			width: 100vw;
			height: 20vw;
			background: radial-gradient(50% 50%, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.01) 100%);
			filter: blur(4px);
		}

		.p-wrapper {
			position: absolute;
			top: 130vw;
			width: 100vw;
			left: 1vw;
			min-height: 100vh;
			background: url("https://img.js.design/assets/img/64228a34cece21d6b6495b2d.png#af16a6ad687a8181f2b8ba794a7cd1e8") no-repeat;
			background-size: contain;

			.card {
				margin-top: 4vh;
				box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
				border-radius: 8px;
				padding: 20rpx;

				.header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 40%;
					margin-bottom: 20rpx;


					.image-wrapper {
						width: 12vw;
						height: 12vw;
						display: flex;
						align-items: center;
					}

					.image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
						border: 2rpx solid #fff;
					}

					.text-wrapper {
						width: 85%;
						height: 100%;
						display: flex;
						align-items: center;
						// justify-content: center;
						justify-content: space-between;
					}

					.title {
						font-size: 14px;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
					}

					.button-wrapper {
						margin-top: 10rpx;

						.button {
							width: 81px;
							height: 30px;
							border-radius: 15px;
							background-color: rgba(240, 224, 190, 1);
							color: #fff;
							font-size: 16px;
							font-weight: 400;
							color: rgba(0, 0, 0, 1);
							text-align: center;
						}
					}

				}
			}

			// p {
			// 	margin-top: 5vh;
			// 	width: 80%;
			// 	margin-left: 10%;
			// 	min-height: 100vh;
			// 	background-color: black;
			// 	color: rgba(255, 255, 255, 0.8);
			// 	text-align: justify;
			// 	vertical-align: top;
			// 	font-size: 12px;
			// 	font-weight: 400;
			// }
		}

		.name {
			position: absolute;
			width: 100vw;
			height: 10vh;
			top: 55vh;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			color: rgba(240, 224, 190, 1);
			font-size: 20px;
			font-weight: 700;
		}
	}
</style>