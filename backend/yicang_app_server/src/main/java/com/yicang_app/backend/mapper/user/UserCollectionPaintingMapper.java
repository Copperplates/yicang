package com.yicang_app.backend.mapper.user;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yicang_app.backend.entity.user.UserCollectionPainting;
import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;

/**
 * 用户收藏绘画Mapper
 * @author linorman
 * @data 2023/03/19
 */
@Mapper
public interface UserCollectionPaintingMapper extends BaseMapper<UserCollectionPainting> {
}
