<script setup>
	import { RouterLink } from 'vue-router'
</script>
<template>
	<nav id="gnb">
		<RouterLink to="/">
			<span class="material-symbols-outlined size-28">home</span>
			<p>홈</p>
		</RouterLink>
		<RouterLink to="/about">
			<span class="material-symbols-outlined size-28">deployed_code</span>
			<p>인풋</p>
		</RouterLink>
		<RouterLink to="/components">
			<span class="material-symbols-outlined size-28">skull</span>
			<p>컴포넌트</p>
		</RouterLink>
		<RouterLink to="/more">
			<span class="material-symbols-outlined size-28 more-icon">more_horiz</span>
			<p>더보기</p>
		</RouterLink>
	</nav>
</template>

<style>
	#gnb {
		width: 100%;
		height: 56px;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 0;
		margin: 0;
		z-index: var(--layer-z-index-gnb);
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
	}
	#gnb a {
		flex: 1 0 0;
		min-width: 0;
		width: auto;
		height: 56px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		-webkit-tap-highlight-color: transparent;
	}

	#gnb a p {
		color: #555;
		font-size: 11px;
		font-weight: 500;
		line-height: 16px;
	}

	#gnb a .material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 28;
		transition: all 0.2s;
	}

	#gnb a.router-link-active .material-symbols-outlined {
		font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 28;
	}

	#gnb a .material-symbols-outlined.more-icon {
		transition: none;
		font-variation-settings: 'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 40;
		-webkit-text-stroke: 1.6px var(--color-text);
		color: transparent;
	}

	#gnb a.router-link-active .material-symbols-outlined.more-icon {
		font-variation-settings: 'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 40;
		color: var(--color-text);
	}
</style>
