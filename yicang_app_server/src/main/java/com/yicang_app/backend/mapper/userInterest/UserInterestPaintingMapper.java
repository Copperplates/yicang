package com.yicang_app.backend.mapper.userInterest;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yicang_app.backend.entity.collection.Painting;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface UserInterestPaintingMapper extends BaseMapper<Painting> {
    @Select("SELECT * FROM ${tableName}")
    List<Painting> selectUserInterestPainting(@Param("tableName") String tableName);

    @Update("CREATE TABLE IF NOT EXISTS user_interest_painting_${username} (" +
            " `id` INTEGER NOT NULL," +
            " `novel_name` VARCHAR(255) NOT NULL," +
            " `novel_id` INTEGER NOT NULL," +
            " PRIMARY KEY (`id`)" +
            ") ENGINE=InnoDB;")
    void createUserInterestPaintingTable(@Param("username") String username);

    @Select("SELECT * FROM information_schema.TABLES WHERE TABLE_NAME = '${tableName}'")
    int tableExists(@Param("tableName") String tableName);
}
