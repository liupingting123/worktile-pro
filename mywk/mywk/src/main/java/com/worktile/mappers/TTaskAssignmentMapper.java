package com.worktile.mappers;

import com.worktile.models.TTaskAssignment;
import com.worktile.models.TTaskAssignmentExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TTaskAssignmentMapper {
    int countByExample(TTaskAssignmentExample example);

    int deleteByExample(TTaskAssignmentExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TTaskAssignment record);

    int insertSelective(TTaskAssignment record);

    List<TTaskAssignment> selectByExample(TTaskAssignmentExample example);

    TTaskAssignment selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TTaskAssignment record, @Param("example") TTaskAssignmentExample example);

    int updateByExample(@Param("record") TTaskAssignment record, @Param("example") TTaskAssignmentExample example);

    int updateByPrimaryKeySelective(TTaskAssignment record);

    int updateByPrimaryKey(TTaskAssignment record);
}