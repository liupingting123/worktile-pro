package com.snowin.mappers;

import com.snowin.model.ProjectUser;
import com.snowin.model.ProjectUserExample;
import com.snowin.model.ProjectUserKey;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ProjectUserMapper {
    int countByExample(ProjectUserExample example);

    int deleteByExample(ProjectUserExample example);

    int deleteByPrimaryKey(ProjectUserKey key);

    int insert(ProjectUser record);

    int insertSelective(ProjectUser record);

    List<ProjectUser> selectByExample(ProjectUserExample example);

    ProjectUser selectByPrimaryKey(ProjectUserKey key);

    int updateByExampleSelective(@Param("record") ProjectUser record, @Param("example") ProjectUserExample example);

    int updateByExample(@Param("record") ProjectUser record, @Param("example") ProjectUserExample example);

    int updateByPrimaryKeySelective(ProjectUser record);

    int updateByPrimaryKey(ProjectUser record);
}