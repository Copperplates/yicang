package com.yicang_app.backend.constant;

import lombok.Data;

import java.util.HashMap;

/**
 * 结果通用类
 * @author linorman
 * @data 2023/03/13
 */
@Data
public class R<T> {
    private int success;
    private int code;
    private String message;
    private T data;
    private HashMap<Object, Object> map = new HashMap<>();

    public static <T> R<T> success(ResultCode resultCode, T data) {
        R<T> r = new R<>();
        r.success = 1;
        r.setCode((int) resultCode.getCode());
        r.setMessage(resultCode.getMsg());
        r.setData(data);
        return r;
    }

    public static <T> R<T> error(ResultCode resultCode, T data) {
        R<T> r = new R<>();
        r.success = 0;
        r.setCode((int) resultCode.getCode());
        r.setMessage(resultCode.getMsg());
        r.setData(data);
        return r;
    }

    public R<T> put(Object key, Object value) {
        map.put(key, value);
        return this;
    }
}