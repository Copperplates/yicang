package com.yicang_app.backend.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yicang_app.backend.constant.R;
import com.yicang_app.backend.constant.ResultCode;
import com.yicang_app.backend.entity.collection.Novel;
import com.yicang_app.backend.entity.collection.Painting;
import com.yicang_app.backend.entity.user.UserCollectionNovel;
import com.yicang_app.backend.entity.user.UserCollectionPainting;
import com.yicang_app.backend.entity.user.UserInfo;
import com.yicang_app.backend.mapper.user.UserCollectionNovelMapper;
import com.yicang_app.backend.mapper.user.UserCollectionPaintingMapper;
import com.yicang_app.backend.mapper.user.UserInfoMapper;
import com.yicang_app.backend.mapper.userInterest.UserInterestNovelMapper;
import com.yicang_app.backend.mapper.userInterest.UserInterestPaintingMapper;
import com.yicang_app.backend.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * User Service Impl
 * @author linorman
 * @data 2023/03/13
 */
@Slf4j
@Service
@DS("user_info")
public class UserServiceImpl extends ServiceImpl<UserInfoMapper, UserInfo> implements UserService {
    @Autowired
    @Qualifier("userInfoMapper")
    private UserInfoMapper userMapper;

    @Autowired
    @Qualifier("userCollectionNovelMapper")
    private UserCollectionNovelMapper userCollectionNovelMapper;

    @Autowired
    @Qualifier("userCollectionPaintingMapper")
    private UserCollectionPaintingMapper userCollectionPaintingMapper;

    @Autowired
    @Qualifier("userInterestNovelMapper")
    private UserInterestNovelMapper userInterestNovelMapper;

    @Autowired
    @Qualifier("userInterestPaintingMapper")
    private UserInterestPaintingMapper userInterestPaintingMapper;


    @Override
    public R login(UserInfo user) {
        String username = user.getUsername();
        String password = user.getPassword();
        LambdaQueryWrapper<UserInfo> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(UserInfo::getUsername, username);
        UserInfo temp = userMapper.selectOne(queryWrapper);
        log.info("temp:{}", temp);
        if (temp == null) {
            log.info("用户不存在");
            return R.error(ResultCode.USER_NOT_EXIST, null);
        }
        if (!password.equals(temp.getPassword())) {
            log.info("密码错误");
            return R.error(ResultCode.USER_PASSWORD_ERROR, null);
        }
        if (temp.getStatus() == 0) {
            log.info("用户已被禁用");
            return R.error(ResultCode.USER_ACCOUNT_LOCKED, null);
        }
        log.info("用户登陆成功{}", temp);
        return R.success(ResultCode.USER_SUCCESS, temp);
    }

    @Override
    public R register(UserInfo userInfo) {
        String username = userInfo.getUsername();
        LambdaQueryWrapper<UserInfo> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(UserInfo::getUsername, username);
        UserInfo temp = userMapper.selectOne(queryWrapper);
        if (temp != null) {
            log.info("用户已存在");
            return R.error(ResultCode.USER_EXISTS, null);
        }
        userInfo.setStatus(1);
        userMapper.insert(userInfo);
        log.info("用户注册成功");
        return R.success(ResultCode.USER_SUCCESS, null);

    }

    @Override
    public R getUserInfo(UserInfo userInfo) {
        String username = userInfo.getUsername();
        LambdaQueryWrapper<UserInfo> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(UserInfo::getUsername, username);
        UserInfo temp = userMapper.selectOne(queryWrapper);
        if (temp == null) {
            log.info("用户不存在");
            return R.error(ResultCode.USER_NOT_EXIST, null);
        }
        return R.success(ResultCode.USER_SUCCESS, temp);
    }

    @Override
    public R changePassword(UserInfo userInfo) {
        String username = userInfo.getUsername();
        LambdaQueryWrapper<UserInfo> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(UserInfo::getUsername, username);
        UserInfo temp = userMapper.selectOne(queryWrapper);
        if (temp == null) {
            log.info("用户不存在");
            return R.error(ResultCode.USER_NOT_EXIST, null);
        }
        userMapper.updateById(userInfo);
        log.info("用户修改密码成功");
        return R.success(ResultCode.USER_SUCCESS, null);
    }

    @Override
    public R logout(UserInfo userInfo) {
        return null;
    }

    @Override
    @DS("user_collection_novel")
    public R<List<UserCollectionNovel>> getUserCollectionNovel(UserInfo userInfo) {
        String username = userInfo.getUsername();
        LambdaQueryWrapper<UserInfo> queryWrapper1 = new LambdaQueryWrapper<>();
        queryWrapper1.eq(UserInfo::getUsername, username);
        UserInfo temp = userMapper.selectOne(queryWrapper1);
        if (temp == null) {
            log.info("用户不存在");
            return R.error(ResultCode.USER_NOT_EXIST, null);
        }
        LambdaQueryWrapper<UserCollectionNovel> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(UserCollectionNovel::getUsername, username);
        List<UserCollectionNovel> userCollectionNovels = userCollectionNovelMapper.selectList(queryWrapper);
        if (userCollectionNovels == null) {
            log.info("用户收藏小说为空");
            return R.error(ResultCode.NOVEL_COLLECTION_EMPTY, null);
        }
        return R.success(ResultCode.USER_SUCCESS, userCollectionNovels);
    }

    @Override
    @DS("user_collection_painting")
    public R<List<UserCollectionPainting>> getUserCollectionPainting(UserInfo userInfo) {
        String username = userInfo.getUsername();
        LambdaQueryWrapper<UserInfo> queryWrapper1 = new LambdaQueryWrapper<>();
        queryWrapper1.eq(UserInfo::getUsername, username);
        UserInfo temp = userMapper.selectOne(queryWrapper1);
        if (temp == null) {
            log.info("用户不存在");
            return R.error(ResultCode.USER_NOT_EXIST, null);
        }
        LambdaQueryWrapper<UserCollectionPainting> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(UserCollectionPainting::getUsername, username);
        List<UserCollectionPainting> userCollectionPaintings = userCollectionPaintingMapper.selectList(queryWrapper);
        if (userCollectionPaintings == null) {
            log.info("用户收藏画作为空");
            return R.error(ResultCode.PAINTING_COLLECTION_EMPTY, null);
        }
        return R.success(ResultCode.USER_SUCCESS, userCollectionPaintings);
    }

    @Override
    @DS("user_interest_novel")
    public R<List<Novel>> getUserInterestNovelList(UserInfo userInfo) {
        String username = userInfo.getUsername();
        LambdaQueryWrapper<UserInfo> queryWrapper1 = new LambdaQueryWrapper<>();
        queryWrapper1.eq(UserInfo::getUsername, username);
        UserInfo temp = userMapper.selectOne(queryWrapper1);
        if (temp == null) {
            log.info("用户不存在");
            return R.error(ResultCode.USER_NOT_EXIST, null);
        }
        String tableName = "user_interest_novel_" + username;
        if (userInterestNovelMapper.tableExists(tableName) == 0) {
            userInterestNovelMapper.createUserInterestNovelTable(username);
        }
        List<Novel> novelModels = userInterestNovelMapper.selectUserInterestNovel(tableName);
        if (novelModels == null) {
            log.info("用户感兴趣小说为空");
            return R.error(ResultCode.RECORD_NOT_EXIST, null);
        }
        return R.success(ResultCode.USER_SUCCESS, novelModels);
    }

    @Override
    @DS("user_interest_painting")
    public R<List<Painting>> getUserInterestPaintingList(UserInfo userInfo) {
        String username = userInfo.getUsername();
        LambdaQueryWrapper<UserInfo> queryWrapper1 = new LambdaQueryWrapper<>();
        queryWrapper1.eq(UserInfo::getUsername, username);
        UserInfo temp = userMapper.selectOne(queryWrapper1);
        if (temp == null) {
            log.info("用户不存在");
            return R.error(ResultCode.USER_NOT_EXIST, null);
        }
        String tableName = "user_interest_painting_" + username;
        if (userInterestPaintingMapper.tableExists(tableName) == 0) {
            userInterestPaintingMapper.createUserInterestPaintingTable(username);
        }
        List<Painting> paintingModels = userInterestPaintingMapper.selectUserInterestPainting(tableName);
        if (paintingModels == null) {
            log.info("用户感兴趣画作为空");
            return R.error(ResultCode.RECORD_NOT_EXIST, null);
        }
        return R.success(ResultCode.USER_SUCCESS, paintingModels);
    }

    @Override
    public R setSignature(UserInfo userInfo) {
        String username = userInfo.getUsername();
        LambdaQueryWrapper<UserInfo> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(UserInfo::getUsername, username);
        UserInfo temp = userMapper.selectOne(queryWrapper);
        if (temp == null) {
            log.info("用户不存在");
            return R.error(ResultCode.USER_NOT_EXIST, null);
        }
        temp.setSignature(userInfo.getSignature());
        userMapper.updateById(temp);
        log.info("用户修改签名成功");
        return R.success(ResultCode.USER_SUCCESS, null);
    }
}
