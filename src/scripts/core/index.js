var index=require("../txt/index.string");

SPA.defineView("index",{
	html:index,
	plugins:["delegated"],
	modules:[{
		name:"content",
		defaultTag:"home",
		views:["home","search","my"],
		container:".c_main"
	}],
	//绑定试图事件
	bindEvents:{

	},
	//绑定元素的tap事件
	bindActions:{
		"changPage":function(e){
			$(e.el).addClass("colorBg").siblings().removeClass("colorBg");
			this.modules.content.launch(e.data.name);
		}
	}
})

SPA.config({
	indexView:"index"
})