package entity;

import java.sql.Timestamp;

public class Search {

	private int id;
	private String ip;
	private String search;
	private Timestamp searchtime;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public String getSearch() {
		return search;
	}
	public void setSearch(String search) {
		this.search = search;
	}
	public Timestamp getSearchtime() {
		return searchtime;
	}
	public void setSearchtime(Timestamp searchtime2) {
		this.searchtime = searchtime2;
	}
	@Override
	public String toString() {
		return "Search [id=" + id + ", ip=" + ip + ", search=" + search + ", searchtime=" + searchtime + "]";
	}
	
	
}
