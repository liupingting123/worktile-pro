package com.worktile.model;

import java.util.Date;

public class TUser {
    private Integer id;

    private String account;

    private String password;

    private String name;

    private String head;

    private String email;

    private String position;

    private String department;

    private String signature;

    private String phone;

    private String wechat;

    private Date createTime;

    private Date updateTime;

    private String pending1;

    private String pending2;

    private String pending3;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account == null ? null : account.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head == null ? null : head.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position == null ? null : position.trim();
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department == null ? null : department.trim();
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature == null ? null : signature.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getWechat() {
        return wechat;
    }

    public void setWechat(String wechat) {
        this.wechat = wechat == null ? null : wechat.trim();
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