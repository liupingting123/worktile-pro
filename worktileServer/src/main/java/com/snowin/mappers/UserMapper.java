package com.snowin.mappers;


import com.snowin.model.User;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Created by Snowin on 2016/11/5 0005.
 */

//@Repository(value="userMapper")
public interface UserMapper {
    User selectUser(/*@Param("username")*/ String username);
}
