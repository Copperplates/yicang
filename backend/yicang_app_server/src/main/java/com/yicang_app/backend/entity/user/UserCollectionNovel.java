package com.yicang_app.backend.entity.user;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 用户收藏小说模型
 * @author linorman
 * @data 2023/03/15
 */
@Data
public class UserCollectionNovel implements Serializable {
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime boughtTime;
    private int id;
    private String username;
    private Long novelId;
    private String novelName;
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime updateTime;
    private int audit;
}