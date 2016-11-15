package wk.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import wk.model.Mask;
import wk.model.MaskExample;

public interface MaskMapper {
    int countByExample(MaskExample example);

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