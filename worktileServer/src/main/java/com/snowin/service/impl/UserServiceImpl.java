package com.snowin.service.impl;

import com.snowin.mappers.User;
import com.snowin.mappers.UserMapper;

import com.snowin.service.IUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by Snowin on 2016/11/5 0005.
 */

@Service("userService")
public class UserServiceImpl implements IUserService {
    @Resource
    private UserMapper userMapper;

    public User getUserById(int userId) {

        return userMapper.selectUser(userId);
    }
}
