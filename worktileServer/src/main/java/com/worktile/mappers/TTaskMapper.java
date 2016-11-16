package com.worktile.mappers;

import com.worktile.model.TTask;
import com.worktile.model.TTaskExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TTaskMapper {
    long countByExample(TTaskExample example);

    int deleteByExample(TTaskExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TTask record);

    int insertSelective(TTask record);

    List<TTask> selectByExample(TTaskExample example);

    TTask selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TTask record, @Param("example") TTaskExample example);

    int updateByExample(@Param("record") TTask record, @Param("example") TTaskExample example);

    int updateByPrimaryKeySelective(TTask record);

    int updateByPrimaryKey(TTask record);
}