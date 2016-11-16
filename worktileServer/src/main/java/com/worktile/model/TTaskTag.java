package com.worktile.model;

public class TTaskTag {
    private Integer id;

    private Integer userId;

    private Integer taskId;

    private String name;

    private Integer color;

    private String pending1;

    private String pending2;

    private String pending3;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getTaskId() {
        return taskId;
    }

    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getColor() {
        return color;
    }

    public void setColor(Integer color) {
        this.color = color;
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