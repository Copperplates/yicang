package com.yicang_app.backend.mapper.userInterest;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yicang_app.backend.entity.collection.Novel;
import com.yicang_app.backend.entity.user.UserCollectionNovel;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 用户关注小说Mapper
 * @author linorman
 * @data 2023/03/28
 */
@Mapper
public interface UserInterestNovelMapper extends BaseMapper<UserCollectionNovel> {
    @Select("SELECT * FROM ${tableName}")
    List<Novel> selectUserInterestNovel(@Param("tableName") String tableName);

    @Update("CREATE TABLE IF NOT EXISTS user_interest_novel_${username} (" +
            " `id` INTEGER NOT NULL," +
            " `novel_name` VARCHAR(255) NOT NULL," +
            " `novel_id` INTEGER NOT NULL," +
            " PRIMARY KEY (`id`)" +
            ") ENGINE=InnoDB;")
    void createUserInterestNovelTable(@Param("username") String username);

    @Select("SELECT * FROM information_schema.TABLES WHERE TABLE_NAME = '${tableName}'")
    int tableExists(@Param("tableName") String tableName);
}
