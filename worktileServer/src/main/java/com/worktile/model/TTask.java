package com.worktile.model;

import java.util.Date;

public class TTask {
    private Integer id;

    private String title;

    private String description;

    private Integer createId;

    private Integer type;

    private Date createTime;

    private Date updateTime;

    private Integer parentId;

    private Date endTime;

    private String pending1;

    private String pending2;

    private String pending3;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public Integer getCreateId() {
        return createId;
    }

    public void setCreateId(Integer createId) {
        this.createId = createId;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getPending1() {
        return pending1;
    }

    public void setPending1(String pending1) {
        this.pending1 = pending1 == null ? null : pending1.trim();
    }

    public String getPending2() {
        return pending2;
    }

    public void setPending2(String pending2) {
        this.pending2 = pending2 == null ? null : pending2.trim();
    }

    public String getPending3() {
        return pending3;
    }

    public void setPending3(String pending3) {
        this.pending3 = pending3 == null ? null : pending3.trim();
    }
}