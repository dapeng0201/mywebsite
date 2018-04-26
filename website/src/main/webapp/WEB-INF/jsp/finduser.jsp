<%@include file="common/tag.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh-CN">
<head>
<%@include file="common/head.jsp"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%@ page contentType="text/html; charset=UTF-8"%>
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->	
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<script src="${basePath}resources/js/bus.js"  type="text/javascript" charset="UTF-8"></script>
<title>根据username找用户</title>
</head>
<body>
	<input type="hidden" value="${basePath }" id="basePath">

	<input type="text" id="username" />
	<input type="button" id="submit" value="提交">
		${basePath }
</body>
</html>