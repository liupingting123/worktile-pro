package com.worktile.mappers;

import com.worktile.model.TTaskAttachment;
import com.worktile.model.TTaskAttachmentExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TTaskAttachmentMapper {
    long countByExample(TTaskAttachmentExample example);

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