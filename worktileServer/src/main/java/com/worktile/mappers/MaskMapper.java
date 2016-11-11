package com.worktile.mappers;

import com.worktile.model.Mask;
import com.worktile.model.MaskExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MaskMapper {
    long countByExample(MaskExample example);

    int deleteByExample(MaskExample example);

    int deleteByPrimaryKey(Integer mid);

    int insert(Mask record);

    int insertSelective(Mask record);

    List<Mask> selectByExampleWithBLOBs(MaskExample example);

    List<Mask> selectByExample(MaskExample example);

    Mask selectByPrimaryKey(Integer mid);

    int updateByExampleSelective(@Param("record") Mask record, @Param("example") MaskExample example);

    int updateByExampleWithBLOBs(@Param("record") Mask record, @Param("example") MaskExample example);

    int updateByExample(@Param("record") Mask record, @Param("example") MaskExample example);

    int updateByPrimaryKeySelective(Mask record);

    int updateByPrimaryKeyWithBLOBs(Mask record);

    int updateByPrimaryKey(Mask record);
}