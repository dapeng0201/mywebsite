package service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.SearchDao;
import entity.Search;

@Service
public class SearchService {

	@Autowired
	private SearchDao searchDao;
	
	public int addSearchResult(Search search) {
		return searchDao.addSearchResult(search);
	}
	
}
