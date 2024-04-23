package com.yicang_app.backend.controller;

import com.yicang_app.backend.constant.R;
import com.yicang_app.backend.constant.ResultCode;
import com.yicang_app.backend.service.FileService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.websocket.server.PathParam;
import java.io.File;
import java.io.IOException;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.util.Optional;

/**
 * 文件控制器
 * @author linorman
 * @date 2023/04/19
 */
@Slf4j
@RestController
@RequestMapping("/files")
public class FileController {

    @Autowired
    private FileService fileService;

    /**
     * 文件上传
     * @param file
     * @param path
     * @return
     */
    @PostMapping("/upload")
    public R uploadFile(@RequestParam("file") MultipartFile file,
                                             @RequestParam("path") String path) {
        try {
            byte[] bytes = file.getBytes();
            fileService.saveFile(path, bytes);
        } catch (IOException e) {
            return R.error(ResultCode.UNKNOWN_ERROR, null);
        }
        return R.success(ResultCode.SUCCESS, null);
    }

    /**
     * 文件更新
     * @param path
     * @param file
     * @return
     */
    @PutMapping("/update")
    public R updateFile(@RequestParam("path") String path,
                                             @RequestParam("file") MultipartFile file) {
        try {
            Optional<File> optionalFile = fileService.getFileByPath(path);
            if (optionalFile.isPresent()) {
                byte[] bytes = file.getBytes();
                fileService.updateFile(optionalFile.get(), bytes);
                return R.success(ResultCode.SUCCESS, null);
            } else {
                return R.error(ResultCode.FILE_NOT_FOUND, null);
            }
        } catch (IOException e) {
            return R.error(ResultCode.UNKNOWN_ERROR, null);
        }
    }

    /**
     * 文件下载
     * @param path
     * @return
     */
    @GetMapping("/download")
    public R getFile(@RequestParam("path") String path) {
        Optional<File> optionalFile = fileService.getFileByPath(path);
        if (optionalFile.isPresent()) {
            File file = optionalFile.get();
            String contentType = URLConnection.guessContentTypeFromName(file.getName());
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType(contentType));
            headers.setContentDisposition(ContentDisposition.builder("attachment")
                    .filename(file.getName(), StandardCharsets.UTF_8)
                    .build());
            try {
                byte[] data = FileUtils.readFileToByteArray(file);
                return R.success(ResultCode.SUCCESS, data);
            } catch (IOException e) {
                return R.error(ResultCode.UNKNOWN_ERROR, null);
            }
        } else {
            return R.error(ResultCode.FILE_NOT_FOUND, null);
        }
    }

}


