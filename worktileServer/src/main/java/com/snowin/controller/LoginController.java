package com.snowin.controller;

import com.snowin.mappers.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Snowin on 2016/11/5 0005.
 */

@CrossOrigin
@Controller
public class LoginController {

    @RequestMapping(value = "logindo", method = RequestMethod.POST)
    @ResponseBody
    public User login(@ModelAttribute("user") User user) {
        User result = new User();
        // 数据库查询
        result.setUsername("snowin");
        result.setNickname("SnowinSun");
        result.setPassword("19940524");

        return result;
    }
}
