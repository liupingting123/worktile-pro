package com.worktile.mappers;

import com.worktile.models.TTaskComment;
import com.worktile.models.TTaskCommentExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TTaskCommentMapper {
    int countByExample(TTaskCommentExample example);

    int deleteByExample(TTaskCommentExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TTaskComment record);

    int insertSelective(TTaskComment record);

    List<TTaskComment> selectByExampleWithBLOBs(TTaskCommentExample example);

    List<TTaskComment> selectByExample(TTaskCommentExample example);

    TTaskComment selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TTaskComment record, @Param("example") TTaskCommentExample example);

    int updateByExampleWithBLOBs(@Param("record") TTaskComment record, @Param("example") TTaskCommentExample example);

    int updateByExample(@Param("record") TTaskComment record, @Param("example") TTaskCommentExample example);

    int updateByPrimaryKeySelective(TTaskComment record);

    int updateByPrimaryKeyWithBLOBs(TTaskComment record);

    int updateByPrimaryKey(TTaskComment record);
}