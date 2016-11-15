package sy.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.servlet.ModelAndView;
import sy.model.User;
import sy.service.UserServiceI;

@Controller
@RequestMapping("/userController")
public class UserController {
	@RequestMapping("/test")
	public ModelAndView queryItems(){

		// 使用静态数据将商品信息列表显示在jsp页面
		// 商品列表


		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("message", "message");
		//指定逻辑视图名
		modelAndView.setViewName("index.jsp");

		return modelAndView;
	}


}
