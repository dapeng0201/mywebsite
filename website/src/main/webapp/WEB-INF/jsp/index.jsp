<%@include file="common/tag.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%@include file="common/head.jsp"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" href="${basePath}resources/css/bootstrap-datetimepicker.min.css"/>
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<script src="${basePath}resources/js/mywebsite.js"  type="text/javascript" charset="UTF-8"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="${basePath}resources/js/bootstrap-datetimepicker.min.js"></script>
<script src="${basePath}resources/js/bootstrap-datetimepicker.zh-CN.js"></script>
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<title>主页</title>
</head>
<body style="padding-top:80px; width:90%;  margin:0 auto;">
<input type="hidden" value="${basePath}" id="basePath">
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">导航条</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">website</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>	
<!-- 车票查询 -->
<div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title"><span class="glyphicon glyphicon-tag"></span>&nbsp;汽车票查询</h3>
  </div>
  <div class="panel-body">
    
    <div class="input-group input-group-lg">
  		<span class="input-group-addon" id="sizing-addon1">始发地：</span>
  		<input type="text" id="from" class="form-control" placeholder="出发车站" aria-describedby="sizing-addon1"><br>
	</div><br/>
	<div class="input-group input-group-lg">
  		<span class="input-group-addon" id="sizing-addon1">到达地：</span>
  		<input type="text" id="to" class="form-control" placeholder="到达车站" aria-describedby="sizing-addon1"><br>
	</div><br/>
	<div class="input-group input-group-lg">	
  		<span class="input-group-addon" id="sizing-addon1">出发时间:</span>
  		<div class="input-append date form_datetime">
		    <input id="date" size="16" style="height:50px;" class="btn-block form-control" type="text" value="" readonly>
		    <span class="add-on"><i class="icon-th"></i></span>
		</div>
	</div><br/> 
  		<input type="button" id="submit" class="btn-block btn btn-info btn-lg" aria-describedby="sizing-addon1" value="查询"><br>
	</div>
  </div>

	<div class="panel panel-success" id="table">
  	<!-- Default panel contents -->
  		<div class="panel-heading">查询结果</div>
  		<div class="panel-body">
  		</div>
		  <!-- Table -->
		  <table class="table table-bordered table-hover" id="showMessage">
		  	<tr align="center" class="info">
		  		<td>发车时间</td>
		  		<td>出发车站</td>
		  		<td>到达车站</td>
		  		<td>剩余票数</td>
		  		<td>车型</td>
		  		<td>路程</td>
		  		<td>售价</td>
		  	<tr>
		  </table>
		</div>

</body>
</html>