<script setup>
import WelcomeItem from './WelcomeItem.vue'

const welcomeItemData = [
	{
		icon: 'mdi:vuejs',
		heading: 'vue2',
		version: '^2.7.7',
		link: 'https://v2.cn.vuejs.org/',
		description:
			'Vue 2 已经终止支持且不再维护。 请升级到 Vue 3 或了解有关 Vue 2 终止支持 (EOL) 的信息。'
	},
	{
		icon: 'mdi:vuejs',
		heading: 'vite',
		version: '^3.0.2',
		link: 'https://github.com/vitejs/awesome-vite?tab=readme-ov-file#plugins',
		description: '在自己写插件前可以在awesome-vite中查找插件。'
	},
	{
		icon: 'mdi:language-css3',
		heading: 'sass',
		version: '^1.81.0',
		link: 'https://www.sass.hk/',
		description: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言！'
	},
	{
		icon: 'mdi:language-css3',
		heading: 'WindiCSS',
		version: '^3.5.6',
		link: 'https://windicss.org/',
		description:
			'Windi CSS是下一代实用程序优先的CSS框架。如果你已经熟悉Tailwind CSS，可以将Windi CSS视为Tailwind的按需替代品，它提供了更快的加载时间，与Tailwind v2.0完全兼容，以及一系列其他很酷的功能。'
	},
	{
		icon: 'mdi:file-image-outline',
		heading: 'unplugin-icons',
		version: '^0.20.1',
		link: 'https://icon-sets.iconify.design/mdi',
		description: '一个图标库，目前装载了mdi图标'
	}
]
</script>

<template>
	<div>
		<WelcomeItem
			v-for="(welcomeItem, index) in welcomeItemData"
			:key="index + 'WelcomeItem'"
		>
			<!-- TODO: 如何数据绑定标签？-->
			<template #icon>
				<i-mdi:vuejs v-if="welcomeItem.icon === 'mdi:vuejs'" />
				<i-mdi:language-css3 v-if="welcomeItem.icon === 'mdi:language-css3'" />
				<i-mdi:file-image-outline
					v-if="welcomeItem.icon === 'mdi:file-image-outline'"
				/>
			</template>
			<template #heading
				><a target="_blank" :href="welcomeItem.link">{{
					welcomeItem.heading
				}}</a></template
			>
			<p>
				当前版本：<span class="green">{{ welcomeItem.version }}</span>
			</p>
			<p>{{ welcomeItem.description }}</p>
		</WelcomeItem>
	</div>
</template>
