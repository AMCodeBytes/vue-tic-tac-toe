<template>
	<v-container class="fill-height" fluid>
		<v-row v-for="(row, i) in boardLayout" :key="i" class="text-center align-self-stretch" align="center" justify="center">
			<v-col v-for="(column, j) in row" :key="j" @mouseover="setHover(true)" @mouseout="setHover(false)" @click="selectItem(i, j)" class="d-flex justify-center align-center elevation-1 align-self-stretch">
				<template v-if="column">
					{{ column }}
				</template>
				<template v-else>
					<wbr>
				</template>
			</v-col>
		</v-row>

		<v-row justify="center">
			<h1>Player: {{ player }}</h1>
		</v-row>
	</v-container>
</template>

<script>

export default {
	name: 'Board',
	data: () => ({
		boardLayout: [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		player: 'X'
	}),

	computed: {
		winCheck() {
			// check if the current play has won
		}
	},

	methods: {
		selectItem(row, column) {
			if (!this.boardLayout[row][column]) {
				this.changeItem(row, column);
				this.winCheck;
				this.changePlayer();
			}
		},
		setHover(bool) {
			if (bool) {
				event.target.classList.add('grey', 'lighten-3');
			} else {
				event.target.classList.remove('grey', 'lighten-3');
			}
		},
		changeItem(row, column) {
			this.boardLayout[row][column] = this.player;
		},
		changePlayer() {
			this.player = this.player === 'X' ? 'O' : 'X';
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.col {
	cursor: pointer;
	font-size: 32px;
}
</style>
