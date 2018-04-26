package web;

import java.sql.Timestamp;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import entity.Search;
import service.Impl.SearchService;

@Controller
@RequestMapping(value="/search")
public class SearchController {

	@Autowired
	private SearchService searchService;
	//添加搜索数据
	@RequestMapping(value="/addSearchResult", method=RequestMethod.POST)
	@ResponseBody
	public int addSearchResult(HttpServletRequest req) {
		String ip = req.getParameter("ip");
		String search = req.getParameter("search");
		Timestamp searchtime = new Timestamp(System.currentTimeMillis()); 
		
		Search s = new Search();
		s.setIp(ip);
		s.setSearch(search);
		s.setSearchtime(searchtime);
		
		int re = searchService.addSearchResult(s);
		return re;
	}
	
}
