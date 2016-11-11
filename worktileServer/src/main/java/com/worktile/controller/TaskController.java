package com.worktile.controller;

import com.worktile.model.Mask;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by Snowin on 2016/11/8 0008.
 */

@CrossOrigin
@Controller
@RequestMapping(value = "task/")
public class TaskController {

    @RequestMapping(value = "mytask", method = RequestMethod.GET)
    public List<Mask> getMask(){
        return null;
    }
}
