package com.worktile.mappers;

import com.worktile.models.ProjectUser;
import com.worktile.models.ProjectUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ProjectUserMapper {
    long countByExample(ProjectUserExample example);

    int deleteByExample(ProjectUserExample example);

    int deleteByPrimaryKey(@Param("pid") Integer pid, @Param("username") String username);

    int insert(ProjectUser record);

    int insertSelective(ProjectUser record);

    List<ProjectUser> selectByExample(ProjectUserExample example);

    ProjectUser selectByPrimaryKey(@Param("pid") Integer pid, @Param("username") String username);

    int updateByExampleSelective(@Param("record") ProjectUser record, @Param("example") ProjectUserExample example);

    int updateByExample(@Param("record") ProjectUser record, @Param("example") ProjectUserExample example);

    int updateByPrimaryKeySelective(ProjectUser record);

    int updateByPrimaryKey(ProjectUser record);
}