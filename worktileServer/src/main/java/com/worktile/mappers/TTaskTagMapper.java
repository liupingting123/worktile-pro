package com.worktile.mappers;

import com.worktile.model.TTaskTag;
import com.worktile.model.TTaskTagExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TTaskTagMapper {
    long countByExample(TTaskTagExample example);

    int deleteByExample(TTaskTagExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TTaskTag record);

    int insertSelective(TTaskTag record);

    List<TTaskTag> selectByExample(TTaskTagExample example);

    TTaskTag selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TTaskTag record, @Param("example") TTaskTagExample example);

    int updateByExample(@Param("record") TTaskTag record, @Param("example") TTaskTagExample example);

    int updateByPrimaryKeySelective(TTaskTag record);

    int updateByPrimaryKey(TTaskTag record);
}