package com.worktile.mappers;

import com.worktile.models.TTaskCheckItem;
import com.worktile.models.TTaskCheckItemExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TTaskCheckItemMapper {
    int countByExample(TTaskCheckItemExample example);

    int deleteByExample(TTaskCheckItemExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TTaskCheckItem record);

    int insertSelective(TTaskCheckItem record);

    List<TTaskCheckItem> selectByExampleWithBLOBs(TTaskCheckItemExample example);

    List<TTaskCheckItem> selectByExample(TTaskCheckItemExample example);

    TTaskCheckItem selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TTaskCheckItem record, @Param("example") TTaskCheckItemExample example);

    int updateByExampleWithBLOBs(@Param("record") TTaskCheckItem record, @Param("example") TTaskCheckItemExample example);

    int updateByExample(@Param("record") TTaskCheckItem record, @Param("example") TTaskCheckItemExample example);

    int updateByPrimaryKeySelective(TTaskCheckItem record);

    int updateByPrimaryKeyWithBLOBs(TTaskCheckItem record);

    int updateByPrimaryKey(TTaskCheckItem record);
}