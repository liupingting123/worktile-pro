package com.worktile.mappers;

import com.worktile.model.List;
import com.worktile.model.ListExample;
import org.apache.ibatis.annotations.Param;

public interface ListMapper {
    long countByExample(ListExample example);

    int deleteByExample(ListExample example);

    int deleteByPrimaryKey(Integer listid);

    int insert(List record);

    int insertSelective(List record);

    java.util.List<List> selectByExample(ListExample example);

    List selectByPrimaryKey(Integer listid);

    int updateByExampleSelective(@Param("record") List record, @Param("example") ListExample example);

    int updateByExample(@Param("record") List record, @Param("example") ListExample example);

    int updateByPrimaryKeySelective(List record);

    int updateByPrimaryKey(List record);
}
