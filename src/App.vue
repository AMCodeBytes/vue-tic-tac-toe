<template>
	<v-app>
		<v-app-bar app color="primary" light>
			<div class="d-flex align-center">
				<v-img alt="Vue Logo" class="shrink mr-2" contain src="./assets/logo.png" transition="scale-transition" width="40" />
				<v-toolbar-title>Tic-Tac-Toe</v-toolbar-title>
			</div>
		</v-app-bar>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	data: () => ({
		//
	}),
};
</script>

<style lang="scss">
html {
	overflow-y: auto!important;
}
</style>
