package com.yicang_app.backend.mapper.user;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yicang_app.backend.entity.user.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;

/**
 * User Mapper
 * @author linorman
 * @data 2023/03/13
 */
@Mapper
public interface UserInfoMapper extends BaseMapper<UserInfo> {
}
