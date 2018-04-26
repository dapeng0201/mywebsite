$(document).ready(function() {
	
	var from = "上海";
	var to = "北京";
	
	var req_url = "http://m.ctrip.com/restapi/busphp/h5service/index.php?param=/api/home&method=product.getBusListPage&v=1.0&ref=ctrip.h5&partner=ctrip.h5&clientType=Android--h5&version=1000&launchDay=20170525&_fxpcqlniredt=09031135110025244613";
	var send = {"fromCity":"石泉","toCity":"西安","fromDate":"2018-04-08","utmsource":"12308","sortType":"asc","fromStationName":[],"toStationName":[],"fromTimeRange":[],"pageNum":1,"isForcedDSearch":0,"isForcedASearch":0,"isPointBus":false,"scount":1,"head":{"cid":"09031135110025244613","ctok":"","cver":"1.0","lang":"01","sid":"55551825","syscode":"09","auth":null,"extension":[{"name":"protocal","value":"http"}]},"contentType":"json"}
	var cookie = "_abtest_userid=5f758454-8d53-4de6-b781-3ec9565abdc8; _fpacid=09031135110025244613; GUID=09031135110025244613; _RSG=CyanNKhKsuCKxSCju3EO2A; _RDG=28a176e760e303252930e4d88934d600f3; _RGUID=ce3652b5-17c6-4f0c-a098-383e2d31ced4; _ga=GA1.2.958423719.1502525346; UM_distinctid=160c9ccb469608-0644de0790cebd-3c604504-1fa400-160c9ccb46a4f9; ibulocale=en_hk; ibulanguage=en; Customer=HAL=ctrip_gb; FlightIntl=Search=%5B%22Shanghai%7C%E4%B8%8A%E6%B5%B7(SHA)%7C2%7CSHA%7C480%22%2C%22Sydney%7C%E6%82%89%E5%B0%BC(SYD)%7C501%7CSYD%7C660%22%2C%222018-03-11%22%2C%222018-03-17%22%5D; MKT_Pagesource=PC; _gid=GA1.2.162114779.1523080222; Session=SmartLinkCode=U155952&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=&SmartLinkLanguage=zh; adscityen=Ankang; ASP.NET_SessionSvc=MTAuMTUuMTI4LjM3fDkwOTB8b3V5YW5nfGRlZmF1bHR8MTUxMDczOTczNjA2MA; _bfi=p1%3D104602%26p2%3D104601%26v1%3D143%26v2%3D142; __zpspc=9.25.1523080884.1523080902.2%231%7C%7C%7C%7C%7C%23; appFloatCnt=6; manualclose=1; _RF1=113.138.151.232; Union=OUID=&AllianceID=4897&SID=353693&SourceID=55551825&Expires=1523686918414; _jzqco=%7C%7C%7C%7C1523080222169%7C1.898931903.1502525340816.1523081942004.1523082118464.1523081942004.1523082118464.undefined.0.0.98.98; Mkt_UnionRecord=%5B%7B%22aid%22%3A%221630%22%2C%22timestamp%22%3A1522944350240%7D%2C%7B%22aid%22%3A%22263375%22%2C%22timestamp%22%3A1523081143062%7D%2C%7B%22aid%22%3A%224897%22%2C%22timestamp%22%3A1523082118475%7D%5D; _bfa=1.1502525337005.3vf5lf.1.1523080235521.1523085505408.20.171.0"
	
	$("#submit").click(function() {
		
		$.ajax({
			
			beforeSend: function(request) {
				request.setRequestHeader("Content-Type","application/json");
			},
			type:"POST",
			url:req_url,
			data:JSON.stringify(send),
			success:function(data) {
				console.log(data);
			},
			error: function() {
				alert("error")
			}
		})
		
	})
	
	
})
