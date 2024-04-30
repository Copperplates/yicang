<template>
	<main>
		<div class="bg"></div>
		<image src="https://img.js.design/assets/img/642a49692850a4fc08992bb9.png#1da1d91836b637abe3b6c9936f004c66"
			class="top-img" mode="aspectFill"></image>
		<image src="https://img.js.design/assets/img/642281207c814c19c7d829d5.png#7deb0d9fbaff1845eb3b64bad7fcb142"
			class="name-img" mode="aspectFill"></image>
		<div class="img-decorate"></div>
		<h2 class="name">《千变万化绘画》</h2>
		<div class="p-wrapper">
			<div style="width: 100%; background-color: black;">
				<p>
					2120年，人类科技水平再次迈上了新台阶。新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。不过，对于死亡，他倒是没有什么恐惧的。
					癌症晚期的他，本来就活不了多久。从警校毕业之后，他主动在某个犯罪集团卧底五年，凭借出色的能力，深得集团首脑信任，从一个外围人员，成功坐上了二把手的位貴在李玉的配合下，军方最终成功的将这個国内最大的犯罪集团一网打尽。
					任务完成，李玉却并没有多么高兴二把手的位費不是凭空得来的，卧底五年，为了最终的任务，他做了很多本不该做的事情，以至于很多时候连他自己都分不清，他到底是一个好人还是坏人。后来查出癌症晚期，他星然一直在积极接受治疗，但从此以后，每次执行危险任务，他总是冲在前面，直到在抓捕一名危险的持枪歹徒时，为救人质，李玉以身为饵，胸部中枪，壮烈牺牲这是属于他脑海的一段记忆，而另-一段记忆告诉他，他是陈国白云观的一名弟
				</p>
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

		.top-img {
			top: 10vh;
			width: 60vw;
			height: 78vw;
			margin-left: 20vw;
			border: 1px solid rgba(0, 0, 0, 1);
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
		}

		.name-img {
			top: 0vh;
			left: -5vw;
			width: 120vw;
			height: 70vw;
			border: 1px solid rgba(0, 0, 0, 1);
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
			p {
				margin-top: 5vh;
				width: 80%;
				margin-left: 10%;
				min-height: 100vh;
				background-color: black;
				color: rgba(255, 255, 255, 0.8);
				text-align: justify;
				vertical-align: top;
				font-size: 12px;
				font-weight: 400;
			}
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