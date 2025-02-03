<template>
	<header id="header" :class="{ 'is-root': isRoot }">
		<ButtonItem v-if="!isRoot" class="btn-shape-round" @click="$router.back()">
			<span class="material-symbols-outlined btn-icon size-28">arrow_back</span>
		</ButtonItem>
		<h1>{{ title }}</h1>
	</header>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: false,
			},
			isRoot: {
				type: Boolean,
				required: false,
				default: false,
			},
		},
		data() {
			return {
				transformPoint: 60,
			};
		},
		mounted() {
			const contentContainer = this.$el.nextElementSibling;
			if (contentContainer && contentContainer.classList.contains('content-container')) {
				contentContainer.addEventListener('scroll', this.handleScroll);
			}
		},
		beforeUnmount() {
			const contentContainer = this.$el.nextElementSibling;
			if (contentContainer && contentContainer.classList.contains('content-container')) {
				contentContainer.removeEventListener('scroll', this.handleScroll);
			}
		},
		methods: {
			handleScroll(event) {
				const contentContainer = event.target;
				const scrollTop = contentContainer.scrollTop;

				if (scrollTop > 0) {
					this.$el.classList.add('scrolled');
				} else {
					this.$el.classList.remove('scrolled');
				}

				if (this.$el.classList.contains('transform-header')) {
					const maxScroll = this.transformPoint;
					const opacity = Math.min(scrollTop / maxScroll, 1);
					this.$el.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
				}
			}
		}
	}
</script>

<style>
	#header {
		width: 100%;
		height: 56px;
		padding: 6px;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		position: fixed;
		top: 0;
		left: 0;
		margin: 0;
		z-index: var(--layer-z-index-header);
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
		transition: box-shadow 0.3s ease;
	}

	#header h1 {
		font-size: 16px;
		font-weight: 700;
		padding: 0 4px;
		margin: 0;
	}

	#header.is-root {
		box-shadow: none;
	}

	#header.scrolled {
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
	}

	#header.is-root h1 {
		font-size: 18px;
		padding-left: 12px;
	}
</style>
