package com.yicang_app.backend.mapper.user;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yicang_app.backend.entity.user.UserCollectionNovel;
import com.yicang_app.backend.entity.user.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;

/**
 * 用户收藏小说Mapper
 * @author linorman
 * @data 2023/03/19
 */
@Mapper
public interface UserCollectionNovelMapper extends BaseMapper<UserCollectionNovel> {
}
