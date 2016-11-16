package com.worktitle.mappers;

import com.worktitle.models.TTaskLog;
import com.worktitle.models.TTaskLogExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TTaskLogMapper {
    int countByExample(TTaskLogExample example);

    int deleteByExample(TTaskLogExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TTaskLog record);

    int insertSelective(TTaskLog record);

    List<TTaskLog> selectByExample(TTaskLogExample example);

    TTaskLog selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TTaskLog record, @Param("example") TTaskLogExample example);

    int updateByExample(@Param("record") TTaskLog record, @Param("example") TTaskLogExample example);

    int updateByPrimaryKeySelective(TTaskLog record);

    int updateByPrimaryKey(TTaskLog record);
}