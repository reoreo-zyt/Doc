<template>
	<div class="about">
		<h1 class="about-item bg-red-500 text-white p-4">
			<a href="https://windicss.org/"
				>测试 windicss (bg-red-500 text-white p-4)</a
			>
		</h1>
	</div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
		&-item {
			color: $a;
		}
	}
}
</style>
