<template>
	<main>
		<div class="bg"></div>

		<div class="intro-wrapper">
			<image src="../../static/2.png" mode="aspectFit"></image>
			<h1>好书推荐</h1>
			<h2>你有太久没来看书了，快来看看吧~</h2>
		</div>

		<div class="card-top-adjust-block" style="height: 38vh;"></div>

		<div class="card" id="card-1">
			<div class="card-left">
				<image src="../../static/tmp.png"></image>
			</div>
			<div class="card-right">
				<h1>烈狱天女王</h1>
				<p>2120年，人类科技水平再次迈上了新台阶。新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。</p>
				<div class="button-wrapper">
					<button @click="toNewPageFn('/pages/novel/detail');">
						<span class="icon-wrapper">
							<image src="../../static/icon1.png" class="icon" />
						</span>
						<span class="label">阅读</span>
					</button>
					<button @click="toNewPageFn('/pages/novel/continue');">
						<span class="icon-wrapper">
							<image src="../../static/icon2.png" class="icon" />
						</span>
						<span class="label">续写</span>
					</button>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-left">
				<image src="../../static/tmp.png"></image>
			</div>
			<div class="card-right">
				<h1>永生世界</h1>
				<p>李天命做梦都要笑醒了。他家的宠物，竟然都是传说中的太古混沌巨兽！他的家鸡，是以太阳为食的‘永恒炼狱凤凰’。他的黑猫，是以雷霆炼化万界的‘太初混沌雷魔’。</p>
				<div class="button-wrapper">
					<button>
						<span class="icon-wrapper">
							<image src="../../static/icon1.png" class="icon" />
						</span>
						<span class="label">阅读</span>
					</button>
					<button>
						<span class="icon-wrapper">
							<image src="../../static/icon2.png" class="icon" />
						</span>
						<span class="label">续写</span>
					</button>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="card-left">
				<image src="../../static/tmp.png"></image>
			</div>
			<div class="card-right">
				<h1>千骗万化</h1>
				<p>我见过那些腰缠万贯的人，一夜之间倾家荡产还见过那些权势在手的人，被人玩弄于股掌之中，含恨自尽官为白，匪为黑......</p>
				<div class="button-wrapper">
					<button>
						<span class="icon-wrapper">
							<image src="../../static/icon1.png" class="icon" />
						</span>
						<span class="label">阅读</span>
					</button>
					<button>
						<span class="icon-wrapper">
							<image src="../../static/icon2.png" class="icon" />
						</span>
						<span class="label">续写</span>
					</button>
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
			getNovelListFn() {
				console.log("getNovelList");
				uni.request({
				    url: 'http://47.97.38.78/mall/paintingList',
					method: 'GET',
					sslVerify: false,
					data:{},
				    success: (response) => {
						console.log("success");
				        console.log(response);
				    },
					fail: (response) => {
						console.log(response);
					}
				});
			},
			toNewPageFn(url) {
				uni.navigateTo({url: url})
			}
		},
		mounted() {
			this.getNovelListFn();
		}
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
		// background: linear-gradient(to bottom right, #0F2027, #2C5364);
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

		.card {
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 100%;
			height: 30vh;
			object-fit: cover;
			overflow: hidden;
			border-bottom: 1px solid rgba(217, 217, 217, 1);
			margin-bottom: 5vh;
			width: 90%;
			margin-left: 5%;

			.card-left {
				flex: 4;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

			}

			.card-right {
				display: flex;
				flex-direction: column;
				flex: 6;
				justify-content: center;
				align-items: center;
				overflow: scroll;

				h1,
				p {
					margin: 10px 0;
					flex: 4;
				}

				h1 {
					font-size: 18px;
					font-weight: 500;
					letter-spacing: -1px;
					line-height: 0px;
					color: rgba(234, 224, 214, 1);
					text-align: left;
					vertical-align: top;
				}

				p {
					font-size: 11px;
					font-weight: 400;
					color: rgba(234, 224, 214, 1);
					text-align: justify;
					vertical-align: top;
				}

				button {
					margin: 10px 0;
				}

			}


			.button-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				flex: 4;

				button {
					margin-left: 20px;
					width: 80px;
					height: 40px;
					border-radius: 15px;
					background: rgba(240, 224, 190, 1);
					display: flex;
					align-items: center;

					.icon-wrapper {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 30%;

						.icon {
							width: 20px;
							height: 20px;
						}
					}

					.label {
						flex: 1;
						margin: 10px;
					}
				}
			}




		}
	}
</style>