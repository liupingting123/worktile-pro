package com.worktile.mappers;

import com.worktile.models.TTaskAttachment;
import com.worktile.models.TTaskAttachmentExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TTaskAttachmentMapper {
    int countByExample(TTaskAttachmentExample example);

    int deleteByExample(TTaskAttachmentExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TTaskAttachment record);

    int insertSelective(TTaskAttachment record);

    List<TTaskAttachment> selectByExample(TTaskAttachmentExample example);

    TTaskAttachment selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TTaskAttachment record, @Param("example") TTaskAttachmentExample example);

    int updateByExample(@Param("record") TTaskAttachment record, @Param("example") TTaskAttachmentExample example);

    int updateByPrimaryKeySelective(TTaskAttachment record);

    int updateByPrimaryKey(TTaskAttachment record);
}