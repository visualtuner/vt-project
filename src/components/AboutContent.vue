<template>
	<div class="content">
		<h1>This is an about page</h1>
		<p v-for="n in 100" :key="n">{{ n }}번 째 줄</p>
	</div>
</template>
<script>
	export default {
		name: "AboutContent",
	};
</script>
