//获取所有历史记录
function getHistory(){
	//获取在localStorage保存的日志个数
	var length = localStorage.length;
	//获取表格主体部分tbody对象
	var table = document.getElementById("history");
	//清空表格内容
	table.innerHTML = ""; 
	
	//遍历日志的历史记录
		for(var i=0;i<length;i++){
		//获取键名称
		var key = localStorage.key(i);
		var date = new Date();
		date.setTime(key);  
		
		//获取日志记录时间的本地格式
		var time = date.toLocaleString();
		
		//根据时间戳获取日志内容
		var content = localStorage.getItem(key);
		
		//创建表格主体中的一行
		var row = table.insertRow(i);
		//插入第1个单元格，文本内容为序号
		row.insertCell(0).innerHTML = i+1;
		//插入第2个单元格，文本内容为日志内容
		row.insertCell(1).innerHTML = content;
		//插入第3个单元格，文本内容为日志记录的时间
		row.insertCell(2).innerHTML = time;
		//插入第4个单元格，内容为删除按钮
		row.insertCell(3).innerHTML = '<button onclick="delDiary('+key+')">删除</button>';
	}	
}

//保存日志内容
function saveDiary(){
	//获取文本框中的日志内容
	var content = document.getElementById("diary").value;
	//获取当前日期和时间
	var today = new Date();
	//将当前日期时间转换为时间戳
	var key = today.getTime();
	
	//以时间戳为key名称保存当前日志
	localStorage.setItem(key,content);
	alert("日志已保存！");
	
	//清空文本框中的日志，等待下一次记录
	document.getElementById("diary").value = "";
	
	//重新加载日志的历史记录
	getHistory();
}

//删除指定日志
function delDiary(key){
	//根据key名称删除对应的数据记录
	localStorage.removeItem(key);
	alert("本条日志已删除！");
	
	//重新加载日志的历史记录
	getHistory();
}

//删除全部日志
function clearDiary(){
	//清空所有日志记录
	localStorage.clear();
	alert("日志已全部删除！");
	
	//重新加载日志的历史记录
	getHistory();
}

/*
//获取所有历史记录
function getHistory(){
	//获取在localStorage保存的日志个数
	var length = localStorage.length;
	//获取表格主体部分tbody对象
	var table = document.getElementById("history");
	//清空表格内容
	table.innerHTML = ""; 
	
	//遍历日志的历史记录
		for(var i=0;i<length;i++){
		//获取键名称
		var key = localStorage.key(i);
		var date = new Date();
		date.setTime(key);  
		
		//获取日志记录时间的本地格式
		var time = date.toLocaleString();
		
		//根据时间戳获取日志内容
		var content = localStorage.getItem(key);
		
		//创建表格主体中的一行
		var row = table.insertRow(i);
		//插入第1个单元格，文本内容为序号
		row.insertCell(0).innerHTML = i+1;
		//插入第2个单元格，文本内容为日志内容
		row.insertCell(1).innerHTML = content;
		//插入第3个单元格，文本内容为日志记录的时间
		row.insertCell(2).innerHTML = time;
		//插入第4个单元格，内容为删除按钮
		row.insertCell(3).innerHTML = '<button onclick="delDiary('+key+')">删除</button>';
	}	
}

//保存日志内容
function saveDiary(){
	//获取文本框中的日志内容
	var content = document.getElementById("diary").value;
	//获取当前日期和时间
	var today = new Date();
	//将当前日期时间转换为时间戳
	var key = today.getTime();
	
	//以时间戳为key名称保存当前日志
	localStorage.setItem(key,content);
	alert("日志已保存！");
	
	//清空文本框中的日志，等待下一次记录
	document.getElementById("diary").value = "";
	
	//重新加载日志的历史记录
	getHistory();
}

//删除指定日志
function delDiary(key){
	//根据key名称删除对应的数据记录
	localStorage.removeItem(key);
	alert("本条日志已删除！");
	
	//重新加载日志的历史记录
	getHistory();
}

//删除全部日志
function clearDiary(){
	//清空所有日志记录
	localStorage.clear();
	alert("日志已全部删除！");
	
	//重新加载日志的历史记录
	getHistory();
}*/