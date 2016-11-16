package com.worktile.mappers;

import com.worktile.model.TTaskLog;
import com.worktile.model.TTaskLogExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TTaskLogMapper {
    long countByExample(TTaskLogExample example);

    int deleteByExample(TTaskLogExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TTaskLog record);

    int insertSelective(TTaskLog record);

    List<TTaskLog> selectByExampleWithBLOBs(TTaskLogExample example);

    List<TTaskLog> selectByExample(TTaskLogExample example);

    TTaskLog selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TTaskLog record, @Param("example") TTaskLogExample example);

    int updateByExampleWithBLOBs(@Param("record") TTaskLog record, @Param("example") TTaskLogExample example);

    int updateByExample(@Param("record") TTaskLog record, @Param("example") TTaskLogExample example);

    int updateByPrimaryKeySelective(TTaskLog record);

    int updateByPrimaryKeyWithBLOBs(TTaskLog record);

    int updateByPrimaryKey(TTaskLog record);
}