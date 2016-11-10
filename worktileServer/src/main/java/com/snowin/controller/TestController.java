package com.snowin.controller;

import com.snowin.model.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Snowin on 2016/11/4 0004.
 */
@Controller
@CrossOrigin
public class TestController {

    // 返回json
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    @ResponseBody
    public User test() {
        User user = new User();
        user.setUsername("snowin");
        user.setNickname("snowin");
        user.setPassword("19940524");

        return user;
    }

    // 返回String
    @RequestMapping(value = "/testString", method = RequestMethod.GET)
    @ResponseBody
    public String testString() {

        return "SXF";
    }
}
