package com.snowin.mappers;


import com.snowin.model.User;

/**
 * Created by Snowin on 2016/11/5 0005.
 */


public interface UserMapper {
    User selectUser(String username);
}
