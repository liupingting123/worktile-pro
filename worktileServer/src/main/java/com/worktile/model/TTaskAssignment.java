package com.worktile.model;

public class TTaskAssignment {
    private Integer id;

    private Integer taskId;

    private Integer followerId;

    private Integer attachId;

    private Integer assignerId;

    private String pending1;

    private String pending2;

    private String pending3;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTaskId() {
        return taskId;
    }

    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    public Integer getFollowerId() {
        return followerId;
    }

    public void setFollowerId(Integer followerId) {
        this.followerId = followerId;
    }

    public Integer getAttachId() {
        return attachId;
    }

    public void setAttachId(Integer attachId) {
        this.attachId = attachId;
    }

    public Integer getAssignerId() {
        return assignerId;
    }

    public void setAssignerId(Integer assignerId) {
        this.assignerId = assignerId;
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