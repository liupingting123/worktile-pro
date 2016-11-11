package com.worktile.controller;

import com.worktile.model.User;
import com.worktile.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Snowin on 2016/11/5 0005.
 */

@CrossOrigin
@Controller
public class LoginController {

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "logindo", method = RequestMethod.POST)
    @ResponseBody
    public User login(@ModelAttribute("user") User user) {
        // to watch user data
        System.out.println(user.getUsername() + ":" + user.getPassword());

        User result = new User();
        // 数据库查询
        result = userService.getUserByName(user.getUsername());
        //result = userMapper.selectUser(user.getUsername());
//        result.setUsername("snowin");
//        result.setNickname("SnowinSun");
//        result.setPassword("19940524");

        return result;
    }
}
