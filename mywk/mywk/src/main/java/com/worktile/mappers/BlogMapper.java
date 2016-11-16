package com.worktile.mappers;

import com.worktile.models.Blog;
import org.noo.pagination.page.Page;
import java.util.List;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;


@Repository(value="blogMapper")
public interface BlogMapper {
	Blog findById(@Param("id") int id );
	int save(Blog blog);
	List<Blog> findAllBlogs(Page tag);
	int delete(Blog blog);
}
