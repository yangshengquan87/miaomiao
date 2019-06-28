<template>
	<div id="main">
		<Header  title="我的喵喵" />
		<TabBar />
	</div>
</template>

<script>
	import Header from '@/components/Header'
	import TabBar from '@/components/TabBar'
	export default{
		name:'mine',
		components:{
			Header,
			TabBar
		}
	}
</script>

<style>
	
</style>