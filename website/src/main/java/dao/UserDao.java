package dao;

import java.util.List;

import entity.User;

public interface UserDao {

	//通过username找用户信息
	List<User> findUserByUsername();
	
}
