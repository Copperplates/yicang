package com.yicang_app.backend.entity.user;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 用户模型
 * @author linorman
 * @data 2023/03/13
 */
@Data
public class UserInfo implements Serializable{
    private int id;
    private int characterCode;
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
    private String password;
    private String signature;
    private long status;
    @TableField(fill = FieldFill.UPDATE)
    private LocalDateTime updateTime;
    private String username;
}
