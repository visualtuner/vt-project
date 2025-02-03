<template>
	<div class="content">
		<h1>Components List</h1>

		<ul class="components-list">
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/modals" class="router-link-item">
					<span class="btn-txt">Modals</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Input</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Input</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Input</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Input</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Input</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Input</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Buttons</span>
				</router-link>
			</li>
			<li>
				<router-link to="/components/buttons" class="router-link-item">
					<span class="btn-txt">Input</span>
				</router-link>
			</li>
		</ul>
	</div>


</template>
<script>
	export default {
		name: "ComponentsContent",
	};
</script>

<style scoped>
	.components-list {
		width: 100%;
		--col: 3;
		--gutter: 8px;
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--gutter);
		align-items: flex-start;
		justify-content: flex-start;

	}

	.components-list>li {
		flex: 0 0 calc((100% - ((var(--col) - 1) * var(--gutter))) / var(--col));
		min-width: 0;
	}

	.router-link-item {
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		font-weight: 700;
		background: rgba(0, 0, 0, 0.06);
	}

	.router-link-item:active {
		background: rgba(0, 0, 0, 0.1);
	}
</style>
