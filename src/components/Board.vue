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
			<h1>Move: {{ move }} | Player: {{ player }} | Won: {{ won }}</h1>
		</v-row>
		<v-row justify="center">
			<v-btn class="ma-2" outlined color="teal" @click="resetBoard()"><v-icon>mdi-replay</v-icon> Reset</v-btn>
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
		player: 'X',
		won: false,
		move: 0
	}),

	computed: {
		
	},

	methods: {
		selectItem(row, column) {
			if (!this.boardLayout[row][column]) {
				this.changeItem(row, column);
				if (this.move < 4) {
					this.move++;
					this.changePlayer();
				} else {
					if (!this.winCheck()) {
						this.move++;
						this.changePlayer();
					}
				}
			}
		},
		setHover(isHover) {
			if (isHover) {
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
		},
		winCheck() {
			const board = this.boardLayout;

			// Check for diagonal win
			if (((board[0][0] !== null || board[1][1] !== null || board[2][2] !== null) && (board[0][0] === board[1][1] && board[1][1] === board[2][2])) ||
				((board[0][2] !== null || board[1][1] !== null || board[2][0] !== null) && (board[0][2] === board[1][1] && board[1][1] === board[2][0]))) {
				this.won = true;
				return true;
			}

			// Check if row or column has won
			for (let i = 0; i < board.length; i++) {
				if (((board[i][0] !== null || board[i][1] !== null || board[i][2] !== null) && (board[i][0] === board[i][1]) && (board[i][1] === board[i][2])) ||
					((board[0][i] !== null || board[1][i] !== null || board[2][i] !== null) && (board[0][i] === board[1][i]) && (board[1][i] === board[2][i]))) {
					this.won = true;
					return true;
				}
			}
			return false;
		},
		resetBoard() {
			this.boardLayout = [
				[null, null, null],
				[null, null, null],
				[null, null, null]
			];
			this.player = 'X';
			this.won = false;
			this.move = 0;
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
