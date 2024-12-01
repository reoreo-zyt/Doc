import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import WindiCSS from 'vite-plugin-windicss'
// 按需引入
import Components from 'unplugin-vue-components/vite'
import {
	// ElementPlusResolver,
	// AntDesignVueResolver,
	// VantResolver
	// HeadlessUiResolver,
	ElementUiResolver
} from 'unplugin-vue-components/resolvers'
// TODO: 使用unplugin-vue-components来引入ui库的时候，message, notification，toast 等引入样式不生效，引入样式自动引入。没有element-ui
// import styleImport, {
// 	// AndDesignVueResolve,
// 	// VantResolve
// 	ElementPlusResolve
// 	// NutuiResolve,
// 	// AntdResolve
// } from 'vite-plugin-style-import'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { visualizer } from 'rollup-plugin-visualizer'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/', // 开发或生产环境服务的公共基础路径 配置引入相对路径
	mode: 'development', // 模式
	publicDir: 'public', // 静态资源服务的文件夹
	cacheDir: 'node_modules/.vite', // 存储缓存文件的目录
	// 需要用到的插件数组
	plugins: [
		vue2(),
		legacy({
			targets: ['ie >= 11'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime']
		}),
		WindiCSS(),
		Components({
			dirs: ['src/components'], // 目标文件夹
			extensions: ['vue', 'jsx'], // 文件类型
			dts: 'src/components.d.ts', // 输出文件，里面都是一些import的组件键值对
			// ui库解析器，也可以自定义，需要安装相关UI库
			resolvers: [ElementUiResolver(), IconsResolver()]
		}),
		// styleImport({
		// 	resolves: [
		// 		// AndDesignVueResolve(),
		// 		// VantResolve()
		// 		ElementPlusResolve()
		// 		// NutuiResolve(),
		// 		// AntdResolve()
		// 	]
		// }),
		Icons({
			autoInstall: true
		}),
		visualizer(),
		ViteRestart({
			restart: ['vite.config.[jt]s']
		})
	],
	resolve: {
		// 文件系统路径别名
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
		dedupe: [], // 强制 Vite 始终将列出的依赖项解析为同一副本
		conditions: [], // 解决程序包中 情景导出 时的其他允许条件
		mainFields: [], // 解析包入口点尝试的字段列表
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 导入时想要忽略的扩展名列表
		preserveSymlinks: false // 启用此选项会使 Vite 通过原始文件路径确定文件身份
	},
	css: {
		modules: {
			scopeBehaviour: 'global' | 'local'
			// ...
		},
		postcss: '', // 内联的 PostCSS 配置 如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源
		preprocessorOptions: {
			// css的预处理器选项
			scss: {
				api: 'modern-compiler',
				silenceDeprecations: ['legacy-js-api', 'color-functions'],
				additionalData: '@use "src/assets/styles/var.scss" as *;' // 全局引入scss变量
			}
			// less: {
			// 	javascriptEnabled: true
			// }
		}
	},
	json: {
		namedExports: true, // 是否支持从.json文件中进行按名导入
		stringify: false //  开启此项，导入的 JSON 会被转换为 export default JSON.parse("...") 会禁用按名导入
	},
	esbuild: {
		// 最常见的用例是自定义 JSX
		jsxFactory: 'h',
		jsxFragment: 'Fragment'
	},
	assetsInclude: ['**/*.gltf'], // 指定额外的 picomatch 模式 作为静态资源处理
	logLevel: 'info', // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
	clearScreen: true, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
	envDir: '/', // 用于加载 .env 文件的目录
	envPrefix: [], // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中
	optimizeDeps: {
		force: true // 强制使依赖预构建
	},
	server: {
		host: '127.0.0.1', // 指定服务器应该监听哪个 IP 地址
		port: 5000, // 指定开发服务器端口
		strictPort: true, // 若端口已被占用则会直接退出
		https: false, // 启用 TLS + HTTP/2
		open: true, // 启动时自动在浏览器中打开应用程序
		proxy: {
			// 配置自定义代理规则
			//   '/api': {
			// 	target: 'http://jsonplaceholder.typicode.com',
			// 	changeOrigin: true,
			// 	rewrite: (path) => path.replace(/^/api/, '')
			//   }
		},
		cors: true, // 配置 CORS
		hmr: {
			overlay: false
			// 禁用或配置 HMR 连接
			// ...
		},
		watch: {
			// 传递给 chokidar 的文件系统监听器选项
			// ...
		},
		middlewareMode: '', // 以中间件模式创建 Vite 服务器
		fs: {
			strict: true, // 限制为工作区 root 路径以外的文件的访问
			// allow: [], // 限制哪些文件可以通过 /@fs/ 路径提供服务
			deny: ['.env', '.env.*', '*.{pem,crt}'] // 用于限制 Vite 开发服务器提供敏感文件的黑名单
		}
		// origin: 'http://127.0.0.1:8080' // 用于定义开发调试阶段生成资产的 origin
	}
})
