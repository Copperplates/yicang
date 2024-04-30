<template>
	<main>
		<div class="bg"></div>

		<div class="intro-wrapper">
			<image src="../../static/2.png" mode="aspectFit"></image>
			<h1 style="width: 200%;">绘画藏品阅览</h1>
			<h2 style="width: 200%;">看看有哪些中意的藏品哦～快把它带回家</h2>
		</div>

		<div class="card-top-adjust-block" style="height: 38vh;"></div>

		<div class="draw-card" @click="toNewPageFn('/pages/draw/buy');" style="z-index: 999;">
			<!-- <image src="../../static/画1.png" class="draw-card__image" mode="scaleToFill"></image> -->
			<image src="https://img.js.design/assets/img/6423da6731aefe4dc8e9343e.png#12aadd9d316ffbba084263d6cc9228ba" class="draw-card__image" mode="scaleToFill"></image>
			<div class="draw-card__info">
				<div class="draw-card__price">
					$19.00
				</div>
				<div class="draw-card__title">
					千变万化绘画作品
				</div>
			</div>
		</div>
		<div class="draw-card" style="z-index: 999;">
			<!-- <image src="../../static/画1.png" class="draw-card__image" mode="scaleToFill"></image> -->
			<image src="https://img.js.design/assets/img/6423db9459e732fb599343a5.png#9769dde76f7482a9944d01f805edc1f7" class="draw-card__image" mode="scaleToFill"></image>
			<div class="draw-card__info">
				<div class="draw-card__price">
					$22.00
				</div>
				<div class="draw-card__title">
					千变万化绘画作品
				</div>
			</div>
		</div>
		<div class="draw-card" style="z-index: 999;">
			<!-- <image src="../../static/画1.png" class="draw-card__image" mode="scaleToFill"></image> -->
			<image src="https://img.js.design/assets/img/6423da3f4754de384841d7c1.png#9e6c4ff978fca5666f86a95a355d41fe" class="draw-card__image" mode="scaleToFill"></image>
			<div class="draw-card__info">
				<div class="draw-card__price">
					$19.00
				</div>
				<div class="draw-card__title">
					千变万化绘画作品
				</div>
			</div>
		</div>

	</main>
</template>

<script>
	export default {
		data() {
			return {

			}
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
			background-image: url(../../static/bg.png);
			background-size: cover;
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
		}

		.intro-wrapper {
			position: absolute;
			left: 51px;
			top: 172px;
			width: 313px;
			height: 91px;
			opacity: 1;
			border-radius: 15px;
			background-color: rgba(215, 208, 192, 1);
			background-image: url(../../static/蒙版分组1.png);
			background-size: cover;
			border: 1px solid rgba(208, 200, 181, 1);

			image {
				position: absolute;
				width: 50vw;
				margin-left: -20vw;
				margin-top: -20vw;
			}

			h1 {
				position: relative;
				left: 150px;
				top: 38px;
				width: 56px;
				height: 21px;
				opacity: 1;
				font-size: 14px;
				font-weight: 700;
				letter-spacing: 0px;
				line-height: 0px;
				color: rgba(38, 38, 38, 1);
				text-align: left;
				vertical-align: top;
				// z-index: 999;
			}

			h2 {
				position: relative;
				left: 130px;
				top: 50px;
				width: 160px;
				height: 15px;
				opacity: 1;
				/** 文本1 */
				font-size: 10px;
				font-weight: 500;
				letter-spacing: 0px;
				line-height: 0px;
				color: rgba(38, 38, 38, 1);
				text-align: left;
				vertical-align: top;
				// z-index: 999;
			}
		}

		.draw-card {
			width: 100%;
			height: 30vh;
			display: flex;
			flex-direction: column;
			border-radius: 12px;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
			object-fit: cover;
			margin-bottom: 5vh;
			.draw-card__image {
				height: 75%;
				width: 100%;
				object-fit: cover;
				// border: 1px solid red;
				
			}

			.draw-card__info {
				height: 25%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				background: rgba(234, 224, 214, 0.96);

				.draw-card__price {
					width: 20%;
					height: 100%;
					color: #FFFFFF;
					display: flex;
					justify-content: center;
					align-items: center;
					font-weight: bold;
					font-size: 18px;
					border-radius: 0 25px 25px 5px;
					background: rgba(13, 13, 13, 1);
					border: 1px solid rgba(190, 175, 142, 1);
					color: rgba(240, 224, 190, 1);
				}

				.draw-card__title {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 18px;
					font-weight: 700;
					color: rgba(13, 13, 13, 1);
					text-align: center;
					padding: 0px 10px;
				}
			}
		}
	}
</style>