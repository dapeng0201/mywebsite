$(document).ready(function() {
	//隐藏表格
	$("#table").hide();
	//日期选择器设置
	$(".form_datetime").datetimepicker({
		format: 'yyyy-mm-dd',
        minView:'month',
        language: 'zh-CN',
        autoclose:true,
        startDate:new Date(),
        autoclose:true,    
	});
	
	console.log(returnCitySN["cip"]+','+returnCitySN["cname"])  
	
	var Trip = {
		url:"http://m.ctrip.com/restapi/busphp/h5service/index.php?param=/api/home&method=product.getBusListPage&v=1.0&ref=ctrip.h5&partner=ctrip.h5&clientType=Android--h5&version=1000&launchDay=20170525&_fxpcqlniredt=09031135110025244613",
		check:function() {		
			var from = $("#from").val();
			var to = $("#to").val();
			var date = $("#date").val();
			if($("#from").val()=="" || $("#to").val()=="" || $("#date").val()=="") {
				alert("未输入信息");
				return false;
			}
			//清除上次搜索结果
			$("tr").remove("#show");
			var send = {"fromCity":from,"toCity":to,"fromDate":date,"utmsource":"12308","sortType":"asc","fromStationName":[],"toStationName":[],"fromTimeRange":[],"pageNum":1,"isForcedDSearch":0,"isForcedASearch":0,"isPointBus":false,"scount":7,"head":{"cid":"09031135110025244613","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":null,"extension":[{"name":"protocal","value":"http"}]},"contentType":"json"};
			new Trip.getMessage(send);
			//存储
			addResult(from, to, date);
		},
		getMessage : function(send) {
			$.ajax({
				type:"POST",
				url:Trip.url,
				data: JSON.stringify(send),
				dataType:"json",
				beforeSend: function(request) {
					request.setRequestHeader("Content-Type","application/json");
				},
				success: function(data) {		
					
					if(data.message=="") {
						//渲染页面
						new Trip.modelReturn(data);
						//显示表格
						$("#table").fadeIn("snow");
					}else {
						alert("未查询到信息");
					}
					
				},
				error: function() {
					alert("server error");
				}
			});
		},
		modelReturn : function(data) {
			var getData = data.return.data;
			var count = getData.length;				
			for(var i=0;i<count;i++) {
				console.log(data.return.data[i]);
				
				var html = "<tr id='show' align='center'>"+
				"<td>"+getData[i].fromTime+"</td><td>"
				+getData[i].fromCityName+"</td><td>"
				+getData[i].toStationName+"</td><td>"
				+getData[i].showTicketInfo+"</td><td>"
				+getData[i].busType+"</td><td>"
				+getData[i].costTime+"</td><td>"
				+getData[i].fullPrice+"</td>"
				+"<tr>"
				//添加到页面
				$("#showMessage").append(html);
			}	
		},
	}
	
	var addResult = function(from, to, date) {
		var basePath = $("#basePath").val();
		$.ajax({
			type:"POST",
			url:basePath + "search/addSearchResult",
			data:{
				ip:returnCitySN["cip"]+','+returnCitySN["cname"],
				search:from+"--"+to+"--"+date
			},
			success: function(data) {
				console.log(data);
			}
						
		});
	}
	
	
	$("#submit").click(function() {
		new Trip.check();
	});
	
})