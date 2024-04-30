<template>
	<main style="background-color: black;min-height: 100vh;width: 100vw;">
		<uni-nav-bar left-icon="left" right-icon="auth-filled"
			style="margin-top: 3vh;background-color: black;border-radius: 146px;">
			<uni-search-bar placeholder="#烟花" bgColor="rgba(61, 61, 57, 1)" @confirm="searchFn();" style="width: 80vw;"
				@click="ifChoice=!ifChoice;ifSearch=!ifSearch;" />
			<div style="width:20vw; margin-right: -3vw;color: black;z-index: 9999;padding-top: 2vh;">
				我的关注
			</div>
		</uni-nav-bar>
		<view class="container" style="background-color: black;" v-if="ifChoice==true">
			<div
				style="background: url(https://img.js.design/assets/img/6423da6731aefe4dc8e9343e.png#12aadd9d316ffbba084263d6cc9228ba) no-repeat;background-size: cover;width: 100vw;height: 30vh;margin-left: -4vw;">
				<div style="color: rgba(240, 224, 190, 1);padding-top: 22vh;padding-left:3vw">
					<div style="font-size: 20px;
					font-weight: 500;
					line-height: 28.96px;">#热搜话题</div>
					<div style="
					font-size: 12px;
					font-weight: 400;
					line-height: 17.38px;">第三期|基础入门</div>
				</div>
			</div>
			<uni-card
				cover="https://img.js.design/assets/img/6423db9459e732fb599343a5.png#9769dde76f7482a9944d01f805edc1f7"
				style="width: 100vw;margin-left: -4vw;background-color: rgba(24, 24, 24, 1);"
				@click="ifDetail=!ifDetail;">
				<text
					style="font-size: 12px;
				font-weight: 400;
				line-height: 17.38px;
				color: rgba(255, 255, 255, 0.8);">2120年，人类科技水平再次迈上了新台阶。新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。</text>
				<template v-slot:actions>
					<view class="card-actions"
						style="display: flex;align-items: center;justify-content: space-between;width: 20vw;">
						<view class="card-actions-item" @click="navigateToNewPage">
							<uni-icons type="heart" size="18" color="rgba(240, 224, 190, 1)"></uni-icons>
							<text class="card-actions-item-text" style="color: #fff;">54</text>
						</view>
						<view class="card-actions-item" @click="actionsClick('评论')">
							<uni-icons type="chatbubble" size="18" color="rgba(240, 224, 190, 1)"></uni-icons>
							<text class="card-actions-item-text" style="color: #fff;">88</text>
						</view>
					</view>
				</template>
			</uni-card>

			<uni-card
				cover="https://img.js.design/assets/img/6423da3f4754de384841d7c1.png#9e6c4ff978fca5666f86a95a355d41fe"
				style="width: 100vw;margin-left: -4vw;background-color: rgba(24, 24, 24, 1);">
				<text
					style="font-size: 12px;
				font-weight: 400;
				line-height: 17.38px;
				color: rgba(255, 255, 255, 0.8);">2120年，人类科技水平再次迈上了新台阶。新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。</text>
				<template v-slot:actions>
					<view class="card-actions"
						style="display: flex;align-items: center;justify-content: space-between;width: 20vw;">
						<view class="card-actions-item" @click="navigateToNewPage">
							<uni-icons type="heart" size="18" color="rgba(240, 224, 190, 1)"></uni-icons>
							<text class="card-actions-item-text" style="color: #fff;">54</text>
						</view>
						<view class="card-actions-item" @click="actionsClick('评论')">
							<uni-icons type="chatbubble" size="18" color="rgba(240, 224, 190, 1)"></uni-icons>
							<text class="card-actions-item-text" style="color: #fff;">88</text>
						</view>
					</view>
				</template>
			</uni-card>
		</view>

		<view class="container" style="background-color: black;" v-if="ifSearch==true">
			<div style="position: absolute;
				top: 10vh;
				width: 30vw;
				font-size: 20px;
				font-weight: 500;
				line-height: 28.96px;
				color: rgba(240, 224, 190, 1);">热搜藏品</div>
			<div style="display: flex; justify-content: space-between;
				position: absolute;
				top: 15vh;
				width: 90vw;
				font-size: 20px;
				font-weight: 500;
				line-height: 28.96px;
				color: rgba(240, 224, 190, 1);">
				<div
					style="width: 30%; background-image: url('https://img.js.design/assets/img/6423def59b06204f6ad661f1.png#b7411bc65ed267448616ccedffc8dc30'); background-size: cover; background-position: center; height: 200px;">
					<div style="display: flex; justify-content: space-between;
						position: absolute;
						top: 24vh;
						width: 90vw;
						font-size: 14px;
						font-weight: 400;
						line-height: 20.27px;
						color: rgba(240, 224, 190, 1);">新花样</div>
					<div style="display: flex; justify-content: space-between;
						position: absolute;
						top: 27vh;
						width: 90vw;
						font-size: 9.13px;
						font-weight: 400;
						line-height: 13.22px;
						color: rgba(240, 224, 190, 1);">作者：独角兽祥子</div>
				</div>
				<div
					style="width: 30%; background-image: url('https://img.js.design/assets/img/6423dc57bff1bce4180d48e7.png#9fa310303820a79b43944ce19c3d53b0'); background-size: cover; background-position: center; height: 200px;">
					<div style="display: flex; justify-content: space-between;
						position: absolute;
						top: 24vh;
						width: 90vw;
						font-size: 14px;
						font-weight: 400;
						line-height: 20.27px;
						color: rgba(240, 224, 190, 1);">混蛋经济学</div>
					<div style="display: flex; justify-content: space-between;
						position: absolute;
						top: 27vh;
						width: 90vw;
						font-size: 9.13px;
						font-weight: 400;
						line-height: 13.22px;
						color: rgba(240, 224, 190, 1);">作者：小美</div>
				</div>
				<div
					style="width: 30%; background-image: url('https://img.js.design/assets/img/6423defe59e732fb59968dae.png#0418d57d850697ac07dcb8b955550061'); background-size: cover; background-position: center; height: 200px;">
					<div style="display: flex; justify-content: space-between;
						position: absolute;
						top: 24vh;
						width: 90vw;
						font-size: 14px;
						font-weight: 400;
						line-height: 20.27px;
						color: rgba(240, 224, 190, 1);">即刻出发</div>
					<div style="display: flex; justify-content: space-between;
						position: absolute;
						top: 27vh;
						width: 90vw;
						font-size: 9.13px;
						font-weight: 400;
						line-height: 13.22px;
						color: rgba(240, 224, 190, 1);">作者：独角兽祥子</div>
				</div>
			</div>


			<div style="position: absolute;
				top: 50vh;
				width: 30vw;
				font-size: 20px;
				font-weight: 500;
				line-height: 28.96px;
				color: rgba(240, 224, 190, 1);">热搜话题</div>

			<div style="
				position: absolute;
				top: 56vh;
				width: 100vw;
				font-size: 14px;
				font-weight: 400;
				line-height: 20.27px;
				color: rgba(240, 224, 190, 1);
				background: rgba(24, 24, 24, 1);
				border-bottom: 1px solid rgba(166, 166, 166, 1);
				">NFT数字藏品
			</div>
			<div style="
				position: absolute;
				top: 60vh;
				width: 100vw;
				font-size: 14px;
				font-weight: 400;
				line-height: 20.27px;
				color: rgba(240, 224, 190, 1);
				background: rgba(24, 24, 24, 1);
				border-bottom: 1px solid rgba(166, 166, 166, 1);
				">数字藏品史上最强破圈活动今日火爆上线
			</div>
			<div style="
				position: absolute;
				top: 64vh;
				width: 100vw;
				font-size: 14px;
				font-weight: 400;
				line-height: 20.27px;
				color: rgba(240, 224, 190, 1);
				background: rgba(24, 24, 24, 1);
				border-bottom: 1px solid rgba(166, 166, 166, 1);
				">#五福送了我一个数字藏品#
			</div>
			<div style="
				position: absolute;
				top: 68vh;
				width: 100vw;
				font-size: 14px;
				font-weight: 400;
				line-height: 20.27px;
				color: rgba(240, 224, 190, 1);
				background: rgba(24, 24, 24, 1);
				border-bottom: 1px solid rgba(166, 166, 166, 1);
				">“头条新闻”发布置顶微博
			</div>
			<div style="
				position: absolute;
				top: 72vh;
				width: 100vw;
				font-size: 14px;
				font-weight: 400;
				line-height: 20.27px;
				color: rgba(240, 224, 190, 1);
				background: rgba(24, 24, 24, 1);
				border-bottom: 1px solid rgba(166, 166, 166, 1);
				">截至发稿前阅读量已超2.5亿人次，讨论数量...
			</div>
		</view>

		<view v-if="ifDetail==true"
			style="position: absolute;top:80vh;width: 100vw;height: 100vh;background-color: black;z-index: 99999;">
			<div style="
				position: absolute;
				left: 25.75px;
				top: 2vh;
				width: 37px;
				height: 37px;
				opacity: 1;
				background: url(https://img.js.design/assets/img/6422e152634e77963d56402d.png#f4304c7f9c5740824bc23a47ab0abd2d);
				border-radius: 50%;">
			</div>
			<div style="
				position: absolute;
				left: 78px;
				top: 2vh;
				width: 90.13px;
				height: 20.27px;
				opacity: 1;
				font-size: 14px;
				font-weight: 500;
				line-height: 20.27px;
				color: rgba(240, 224, 190, 1);
				">Derek Russell</div>
			<div style="
				position: absolute;
				left: 78px;
				top: 4.5vh;
				width: 140px;
				height: 14.48px;
				opacity: 1;
				font-size: 10px;
				font-weight: 400;
				line-height: 14.48px;
				color: rgba(255, 255, 255, 1);">很喜欢你的作品，可以收藏吗？</div>
		</view>
		<view v-if="ifDetail==true"
			style="position: absolute;top:90vh;width: 100vw;height: 100vh;background-color: black;z-index: 99999;">
			<div style="
				position: absolute;
				left: 25.75px;
				top: 2vh;
				width: 37px;
				height: 37px;
				opacity: 1;
				background: url(https://img.js.design/assets/img/6422ead54e8874d2ce590f5b.png#db33345d13591d58cfdb60991ce975df);
				border-radius: 50%;">
			</div>
			<div style="
				position: absolute;
				left: 78px;
				top: 2vh;
				width: 90.13px;
				height: 20.27px;
				opacity: 1;
				font-size: 14px;
				font-weight: 500;
				line-height: 20.27px;
				color: rgba(240, 224, 190, 1);
				">动漫少女</div>
			<div style="
				position: absolute;
				left: 78px;
				top: 4.5vh;
				width: 140px;
				height: 14.48px;
				opacity: 1;
				font-size: 10px;
				font-weight: 400;
				line-height: 14.48px;
				color: rgba(255, 255, 255, 1);">好的</div>
		</view>
		<view v-if="ifDetail==true"
			style="position: absolute;top:100vh;width: 100vw;height: 100vh;background-color: black;z-index: 99999;">
			<div style="
				position: absolute;
				left: 25.75px;
				top: 2vh;
				width: 37px;
				height: 37px;
				opacity: 1;
				background: url(https://img.js.design/assets/img/6422eaeb94edb4d304930826.png#a896847d576d2a06221b8d7fa455a25f);
				border-radius: 50%;">
			</div>
			<div style="
				position: absolute;
				left: 78px;
				top: 2vh;
				width: 90.13px;
				height: 20.27px;
				opacity: 1;
				font-size: 14px;
				font-weight: 500;
				line-height: 20.27px;
				color: rgba(240, 224, 190, 1);
				">一只鱼</div>
			<div style="
				position: absolute;
				left: 78px;
				top: 4.5vh;
				width: 140px;
				height: 14.48px;
				opacity: 1;
				font-size: 10px;
				font-weight: 400;
				line-height: 14.48px;
				color: rgba(255, 255, 255, 1);">可以收藏吗？</div>
		</view>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				ifChoice: true,
				ifSearch: false,
				ifDialog: false,
				ifFocus: false,
				ifDetail: false,
			}
		},
		methods: {
			navigateToNewPage() {
				uni.navigateTo({
					url: '/pages/index/about'
				})
			},
			searchFn() {

			},
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>