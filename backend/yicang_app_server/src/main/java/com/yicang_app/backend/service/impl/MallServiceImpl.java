package com.yicang_app.backend.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yicang_app.backend.constant.R;
import com.yicang_app.backend.constant.ResultCode;
import com.yicang_app.backend.entity.collection.Novel;
import com.yicang_app.backend.entity.collection.Painting;
import com.yicang_app.backend.entity.user.UserInfo;
import com.yicang_app.backend.mapper.mall.MallNovelMapper;
import com.yicang_app.backend.mapper.mall.MallPaintingMapper;
import com.yicang_app.backend.mapper.user.UserInfoMapper;
import com.yicang_app.backend.service.MallService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 商城服务实现类
 * @author linorman
 * @date 2023/03/30
 */
@Slf4j
@Service
@DS("collection_ds")
public class MallServiceImpl extends ServiceImpl<MallNovelMapper, Novel> implements MallService {
    @Autowired
    @Qualifier("userInfoMapper")
    private UserInfoMapper userMapper;

    @Autowired
    @Qualifier("mallNovelMapper")
    private MallNovelMapper mallNovelMapper;

    @Autowired
    @Qualifier("mallPaintingMapper")
    private MallPaintingMapper mallPaintingMapper;

    @Override
    public R<List<Novel>> novelList() {
        LambdaQueryWrapper<Novel> queryWrapper = new LambdaQueryWrapper<>();
        List<Novel> novelList = mallNovelMapper.selectList(queryWrapper);
        if (novelList == null || novelList.size() == 0) {
            return R.error(ResultCode.NOVEL_EMPTY, null);
        }
        return R.success(ResultCode.SUCCESS, novelList);
    }

    @Override
    public R<List<Painting>> paintingList() {
        LambdaQueryWrapper<Painting> queryWrapper = new LambdaQueryWrapper<>();
        List<Painting> paintingList = mallPaintingMapper.selectList(queryWrapper);
        if (paintingList == null || paintingList.size() == 0) {
            log.info("paintingList is null");
            return R.error(ResultCode.PAINTING_EMPTY, null);
        }
        return R.success(ResultCode.SUCCESS, paintingList);
    }

    @Override
    public R<Novel> novelInfo(Novel novelInfo) {
        LambdaQueryWrapper<Novel> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Novel::getNovelName, novelInfo.getNovelName());
        Novel novel = mallNovelMapper.selectOne(queryWrapper);
        if (novel == null) {
            log.info("novel is null");
            return R.error(ResultCode.NOVEL_NOT_EXIST, null);
        }
        return R.success(ResultCode.SUCCESS, novel);
    }

    @Override
    public R<Painting> paintingInfo(Painting paintingInfo) {
        LambdaQueryWrapper<Painting> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Painting::getPaintingName, paintingInfo.getPaintingName());
        Painting painting = mallPaintingMapper.selectOne(queryWrapper);
        if (painting == null) {
            log.info("painting is null");
            return R.error(ResultCode.PAINTING_NOT_EXIST, null);
        }
        return R.success(ResultCode.SUCCESS, painting);
    }

    @Override
    public R addNovel(Novel novelInfo) {
        LambdaQueryWrapper<Novel> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Novel::getNovelName, novelInfo.getNovelName());
        Novel novel = mallNovelMapper.selectOne(queryWrapper);
        if (novel != null) {
            log.info("novel is exist");
            return R.error(ResultCode.NOVEL_COLLECTION_EXISTS, null);
        }
        int result = mallNovelMapper.insert(novelInfo);
        if (result == 0) {
            log.info("add novel failed");
            return R.error(ResultCode.FAIL, null);
        }
        return R.success(ResultCode.SUCCESS, null);
    }

    @Override
    public R addPainting(Painting paintingInfo) {
        LambdaQueryWrapper<Painting> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Painting::getPaintingName, paintingInfo.getPaintingName());
        Painting painting = mallPaintingMapper.selectOne(queryWrapper);
        if (painting != null) {
            log.info("painting is exist");
            return R.error(ResultCode.PAINTING_COLLECTION_EXISTS, null);
        }
        int result = mallPaintingMapper.insert(paintingInfo);
        if (result == 0) {
            log.info("add painting failed");
            return R.error(ResultCode.FAIL, null);
        }
        return R.success(ResultCode.SUCCESS, null);
    }

}
