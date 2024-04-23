package com.yicang_app.backend.service;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

/**
 * 文件服务接口
 * @author linorman
 * @date 2023/03/30
 */
public interface FileService {
    /**
     * 保存文件
     * @param path 文件路径
     * @param data 文件数据
     * @throws IOException
     */
    void saveFile(String path, byte[] data) throws IOException;

    /**
     * 获取文件
     * @param path 文件路径
     * @return 文件
     */
    Optional<File> getFileByPath(String path);

    /**
     * 更新文件
     * @param file 文件
     * @param data 文件数据
     * @throws IOException
     */
    void updateFile(File file, byte[] data) throws IOException;

}
