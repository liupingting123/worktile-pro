package com.worktile.mappers;

import com.worktile.model.List;
import com.worktile.model.ListExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ListMapper {
    int countByExample(ListExample example);

    int deleteByExample(ListExample example);

    int deleteByPrimaryKey(Integer listid);

    int insert(List record);

    int insertSelective(List record);

    List<List> selectByExample(ListExample example);

    List selectByPrimaryKey(Integer listid);

    int updateByExampleSelective(@Param("record") List record, @Param("example") ListExample example);

    int updateByExample(@Param("record") List record, @Param("example") ListExample example);

    int updateByPrimaryKeySelective(List record);

    int updateByPrimaryKey(List record);
}