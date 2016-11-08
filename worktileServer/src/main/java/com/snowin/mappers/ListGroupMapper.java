package com.snowin.mappers;

import com.snowin.model.ListGroup;
import com.snowin.model.ListGroupExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ListGroupMapper {
    int countByExample(ListGroupExample example);

    int deleteByExample(ListGroupExample example);

    int deleteByPrimaryKey(Integer listid);

    int insert(ListGroup record);

    int insertSelective(ListGroup record);

    List<ListGroup> selectByExample(ListGroupExample example);

    ListGroup selectByPrimaryKey(Integer listid);

    int updateByExampleSelective(@Param("record") ListGroup record, @Param("example") ListGroupExample example);

    int updateByExample(@Param("record") ListGroup record, @Param("example") ListGroupExample example);

    int updateByPrimaryKeySelective(ListGroup record);

    int updateByPrimaryKey(ListGroup record);
}