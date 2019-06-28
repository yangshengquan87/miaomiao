<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name : 'Header',
	props : {	//父子通信，父组件更新了状态，向子组件传递信息
        title : {
            type : String,	//type是固定写法，title的值必须是string
            default : '喵喵电影'		//默认值
        }
    }
}
</script>

<style scoped>
	#header{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
	#header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
	#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>
