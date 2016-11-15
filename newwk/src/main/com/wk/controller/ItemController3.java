package wk.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;



@Controller
public class ItemController3 {
	//商品列表，@RequestMapping中url建议和方法名一致，方便开发维护
	@RequestMapping("/test")
	public ModelAndView queryItems(){
		
		// 使用静态数据将商品信息列表显示在jsp页面
		// 商品列表

		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("message", "message");
		//指定逻辑视图名
		modelAndView.setViewName("/WEB-INF/jsp/itemsList.jsp");

		return modelAndView;
	}
	
	//商品添加
	
	//商品删除 

	
}
