<template>
	<div class="container">
		<h1>Board</h1>
		<section>
			<div class="row">
				<div>0</div>
				<div>1</div>
				<div>2</div>
			</div>

			<div class="row">
				<div>3</div>
				<div>4</div>
				<div>5</div>
			</div>
			<div class="row">
				<div>6</div>
				<div>7</div>
				<div>8</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Board'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
