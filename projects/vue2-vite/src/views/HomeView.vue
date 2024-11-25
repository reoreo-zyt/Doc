<script>
export default {
	name: 'HomeView',
	components: {},
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
					heading: 'unplugin-icons',
					version: '^0.20.1',
					link: 'https://icon-sets.iconify.design/mdi',
					description: '一个图标库，目前装载了mdi图标'
				}
			]
		}
	}
}
</script>

<template>
	<div>
		<div>
			<el-row style="height: 95vh">
				<el-col :span="6">
					<el-menu default-active="1-4-1">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-folder"></i>
								<span>项目搭建</span>
							</template>
							<el-menu-item index="1-4-1"
								><i class="el-icon-tickets"></i>文档</el-menu-item
							>
						</el-submenu>
					</el-menu>
				</el-col>
				<el-col :span="18" style="height: 100%; overflow-y: scroll">
					<el-row>
						<el-card
							style="margin-bottom: 10px"
							v-for="(item, index) in welcomeItemData"
							:key="index + 'box-card'"
						>
							<div slot="header" class="clearfix">
								<span>{{ item.heading }}</span>
								<el-button style="float: right; padding: 3px 0" type="text"
									><a :href="item.link" target="_blank">文档</a></el-button
								>
							</div>
							<div>{{ item.description }}</div>
						</el-card>
					</el-row>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
