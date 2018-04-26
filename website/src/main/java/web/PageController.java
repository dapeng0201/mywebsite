package web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(method=RequestMethod.GET)
public class PageController {

	//打开首页
	@RequestMapping("/")
	public String pageIndex(){
		return "index";
	}
	
	@RequestMapping(value="findUser")
	public String findUserPage() {
		return "finduser";		
	}
}
