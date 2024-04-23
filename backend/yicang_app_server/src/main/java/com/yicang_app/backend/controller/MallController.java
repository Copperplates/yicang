package com.yicang_app.backend.controller;


import com.yicang_app.backend.constant.R;
import com.yicang_app.backend.entity.collection.Novel;
import com.yicang_app.backend.entity.collection.Painting;
import com.yicang_app.backend.service.MallService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 商城控制器
 * @author linorman
 * @date 2023/03/30
 */
@Slf4j
@RestController
@RequestMapping("/mall")
public class MallController {
    @Autowired
    private MallService mallService;

    /**
     * 获取所有的小说信息
     * @param
     * @return R
     */
    @GetMapping("/novelList")
    public R novelList(){
        return mallService.novelList();
    }

    /**
     * 获取所有的画作信息
     * @param
     * @return R
     */
    @GetMapping("/paintingList")
    public R paintingList(){
        return mallService.paintingList();
    }

    /**
     * 获取指定小说的详细信息
     * @param novelInfo 小说信息
     * @return R
     */
    @GetMapping("/novelInfo")
    public R novelDetail(@RequestBody Novel novelInfo){
        return mallService.novelInfo(novelInfo);
    }

    /**
     * 获取指定画作的详细信息
     * @param paintingInfo 画作信息
     * @return R
     */
    @GetMapping("/paintingInfo")
    public R paintingDetail(@RequestBody Painting paintingInfo){
        return mallService.paintingInfo(paintingInfo);
    }

    /**
     * 添加画作
     * @param paintingInfo 画作信息
     * @return R
     */
    @PostMapping("/addPainting")
    public R addPainting(@RequestBody Painting paintingInfo){
        return mallService.addPainting(paintingInfo);
    }

    /**
     * 添加小说
     * @param novelInfo 小说信息
     * @return R
     */
    @PostMapping("/addNovel")
    public R addNovel(@RequestBody Novel novelInfo){
        return mallService.addNovel(novelInfo);
    }
}
