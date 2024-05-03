package com.yicang_app.backend.entity.collection;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 小说模型
 * @author linorman
 * @data 2023/03/15
 */
@Data
public class Novel implements Serializable {
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
    private String filePath;
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime finishTime;
    private int id;
    private String introduction;
    private String novelName;
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;
    private String writer;
    private int price;
    private int audit;
}
