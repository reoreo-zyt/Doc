<template>
	<div>
		<div>
			<el-row style="height: 95vh">
				<el-col :span="6">
					<el-menu :default-active="defaultActive" @select="selectMenu">
						<el-submenu
							index="1"
							v-for="(item, index) in menus"
							:key="index + 'submenu'"
						>
							<template slot="title">
								<i :class="item.icon"></i>
								<span>{{ item.title }}</span>
							</template>
							<el-menu-item
								v-for="(citem, cindex) in item.children"
								:key="cindex + 'submenu-item'"
								:index="citem.index"
								><i class="el-icon-tickets"></i>{{ citem.title }}</el-menu-item
							>
						</el-submenu>
					</el-menu>
				</el-col>
				<el-col :span="18" style="height: 100%; overflow-y: scroll">
					<el-row v-if="defaultActive == '1-1'" style="margin: 10px">
						<el-card
							style="margin-bottom: 10px"
							v-for="(item, index) in welcomeItemData"
							:key="index + 'box-card'"
						>
							<div slot="header" class="clearfix">
								<span>{{ item.heading }}</span>
								<el-button style="float: right; padding: 3px 0" type="text">
									{{ item.version }}
									<a :href="item.link" target="_blank"> 文档</a></el-button
								>
							</div>
							<div>{{ item.description }}</div>
						</el-card>
					</el-row>
					<el-row v-if="defaultActive == '2-1'" style="margin: 10px">
						<div>默认方式显示金额</div>
						<t-input
							placeholder="请输入金额"
							@numblur="blurVal"
							v-model="money"
						></t-input>
						<div>显示金额tip（大写）控制isTip</div>
						<t-input placeholder="请输入金额" isTip v-model="money2"></t-input>
						<div>显示天数</div>
						<t-input
							placeholder="请输入天数"
							inputType="days"
							appendTitle="天"
							@numblur="blurVal1"
							v-model="day"
						></t-input>
						<div>显示百分比</div>
						<t-input
							placeholder="请输入"
							inputType="percent"
							appendTitle="%"
							v-model="percent"
						></t-input>
						<div>显示电话号码</div>
						<t-input
							placeholder="请输入电话号码"
							:isShow="false"
							inputType="tel"
							@numblur="blurVal2"
							v-model="tel"
						></t-input>
					</el-row>
					<el-row v-if="defaultActive == '2-2'" style="margin: 10px">
						<h4 style="margin-top: 0">内置防抖功能</h4>
						<t-button size="small" type="primary" @click="exportExcel"
							>导出</t-button
						>
					</el-row>
					<el-row v-if="defaultActive == '2-3'" style="margin: 10px">
						<t-timer-btn :second="second" @click="sendCode" />
					</el-row>
					<el-row v-if="defaultActive == '2-4'" style="margin: 10px">
						<TLayoutPageView></TLayoutPageView>
					</el-row>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import TLayoutPageView from './TLayoutPage/index.vue'

export default {
	name: 'HomeView',
	components: {
		TLayoutPageView
	},
	data() {
		return {
			welcomeItemData: [
				{
					heading: 'vue2',
					version: '^2.7.7',
					link: 'https://v2.cn.vuejs.org/',
					description:
						'Vue 2 已经终止支持且不再维护。 请升级到 Vue 3 或了解有关 Vue 2 终止支持 (EOL) 的信息。'
				},
				{
					heading: 'vite',
					version: '^3.0.2',
					link: 'https://github.com/vitejs/awesome-vite?tab=readme-ov-file#plugins',
					description: '在自己写插件前可以在awesome-vite中查找插件。'
				},
				{
					heading: 'sass',
					version: '^1.81.0',
					link: 'https://www.sass.hk/',
					description: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言！'
				},
				{
					heading: 'UnoCss',
					version: '^3.5.6',
					link: 'http://www.unocss.cn/',
					description: '即时按需原子化 CSS 引擎'
				},
				{
					heading: 'unplugin-icons',
					version: '^0.20.1',
					link: 'https://icon-sets.iconify.design/mdi',
					description: '一个图标库，目前装载了mdi图标'
				},
				{
					heading: 'element-ui',
					version: '^2.15.14',
					link: 'https://element.eleme.cn/#/zh-CN',
					description:
						'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库'
				}
			],
			defaultActive: '1-1',
			menus: [
				{
					index: '1',
					icon: 'el-icon-folder',
					title: '项目搭建',
					children: [
						{
							index: '1-1',
							icon: 'el-icon-tickets',
							title: '文档'
						}
					]
				},
				{
					index: '2',
					icon: 'el-icon-folder',
					title: 'element-ui 二次开发组件库',
					children: [
						{
							index: '2-1',
							icon: 'el-icon-tickets',
							title: 'Input 组件'
						},
						{
							index: '2-2',
							icon: 'el-icon-tickets',
							title: 'Button 组件'
						},
						{
							index: '2-3',
							icon: 'el-icon-tickets',
							title: '验证码倒计时'
						},
						{
							index: '2-4',
							icon: 'el-icon-tickets',
							title: '布局组件'
						}
					]
				}
			],
			// t-input
			money: null,
			day: null,
			money2: null,
			percent: null,
			tel: '',
			// t-timer-btn
			second: 10
		}
	},
	methods: {
		selectMenu(index) {
			this.defaultActive = index
		},
		blurVal(val) {
			console.log('获取输入的值', val)
		},
		blurVal1(val) {
			console.log('获取输入的值1', val)
		},
		blurVal2(val) {
			console.log('获取输入的值2', val)
		},
		// 导出
		async exportExcel() {
			console.log('导出')
		},
		sendCode() {
			console.log('点击获取验证码')
		}
	}
}
</script>
