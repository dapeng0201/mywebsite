package web;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import entity.User;

@Controller
@RequestMapping(value="/user")
public class UserController {
	
	@RequestMapping(value="/test/{id}", produces = {
	"application/json; charset=utf-8" })
	@ResponseBody
	public User test(HttpServletRequest req, @PathVariable("id") String id) {
		String get = req.getParameter("get");
		System.out.println("获取数据:"+get);
		System.out.println("获取id:"+id);
		User u = new User();
		u.setId(1);
		u.setNickname("222");
		return u;
	}
	
}
