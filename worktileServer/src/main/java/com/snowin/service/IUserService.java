package com.snowin.service;


import com.snowin.model.User;

/**
 * Created by Snowin on 2016/11/5 0005.
 */
public interface IUserService {
    User getUserByName(String username);
}
