package com.worktile.mappers;

import com.worktile.model.TTaskAssignment;
import com.worktile.model.TTaskAssignmentExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TTaskAssignmentMapper {
    long countByExample(TTaskAssignmentExample example);

    int deleteByExample(TTaskAssignmentExample example);

    int insert(TTaskAssignment record);

    int insertSelective(TTaskAssignment record);

    List<TTaskAssignment> selectByExample(TTaskAssignmentExample example);

    int updateByExampleSelective(@Param("record") TTaskAssignment record, @Param("example") TTaskAssignmentExample example);

    int updateByExample(@Param("record") TTaskAssignment record, @Param("example") TTaskAssignmentExample example);
}