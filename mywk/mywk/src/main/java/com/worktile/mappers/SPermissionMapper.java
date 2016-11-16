package com.worktile.mappers;

import com.worktile.models.SPermission;
import com.worktile.models.SPermissionExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SPermissionMapper {
    long countByExample(SPermissionExample example);

    int deleteByExample(SPermissionExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(SPermission record);

    int insertSelective(SPermission record);

    List<SPermission> selectByExample(SPermissionExample example);

    SPermission selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") SPermission record, @Param("example") SPermissionExample example);

    int updateByExample(@Param("record") SPermission record, @Param("example") SPermissionExample example);

    int updateByPrimaryKeySelective(SPermission record);

    int updateByPrimaryKey(SPermission record);
}