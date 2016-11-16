package com.worktitle.mappers;

import com.worktitle.models.SRole;
import com.worktitle.models.SRoleExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SRoleMapper {
    int countByExample(SRoleExample example);

    int deleteByExample(SRoleExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(SRole record);

    int insertSelective(SRole record);

    List<SRole> selectByExample(SRoleExample example);

    SRole selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") SRole record, @Param("example") SRoleExample example);

    int updateByExample(@Param("record") SRole record, @Param("example") SRoleExample example);

    int updateByPrimaryKeySelective(SRole record);

    int updateByPrimaryKey(SRole record);
}