package com.yicang_app.backend.constant;

/**
 * 结果集枚举
 *
 * @author linorman
 * @data 2023/03/13
 */
public enum ResultCode {
    /**
     * 默认成功值
     */
    SUCCESS(1000, "响应成功"),
    FAIL(1001, "响应失败"),
    UNKNOWN_ERROR(2000, "未知错误"),
    TIMEOUT(408, "服务器繁忙"),
    INTERNAL_SERVER_ERROR(500, "服务器内部错误"),

    /**
     * 数据库操作
     */
    DATABASE_SUCCESS(800, "数据库操作成功"),
    DATABASE_ERROR(801, "数据库操作异常"),
    PARAMETER_ERROR(804, "参数错误"),
    INVALID_PARAMETER(805, "不合法的参数"),
    MISS_PARAMETER(806, "缺少参数"),
    REPEAT_RECORD(807, "重复记录"),
    RECORD_NOT_EXIST(808, "记录不存在"),
    RECORD_EXISTS(809, "记录已存在"),
    NOVEL_EMPTY(810, "小说列表为空"),
    PAINTING_EMPTY(811, "画作列表为空"),
    NOVEL_NOT_EXIST(812, "小说不存在"),
    PAINTING_NOT_EXIST(813, "画作不存在"),
    NOVEL_EXISTS(814, "小说已存在"),
    PAINTING_EXISTS(815, "画作已存在"),
    NOVEL_COLLECTION_EXISTS(816, "小说已收藏"),
    PAINTING_COLLECTION_EXISTS(817, "画作已收藏"),
    NOVEL_COLLECTION_NOT_EXIST(818, "小说未收藏"),
    PAINTING_COLLECTION_NOT_EXIST(819, "画作未收藏"),
    NOVEL_COLLECTION_EMPTY(820, "小说收藏列表为空"),
    PAINTING_COLLECTION_EMPTY(821, "画作收藏列表为空"),

    /**
     * 用户操作
     */
    USER_SUCCESS(3000, "用户操作成功"),
    USER_NOT_EXIST(3001, "用户不存在"),
    USER_EXISTS(3005, "用户已存在"),
    USER_PASSWORD_ERROR(3002, "密码错误"),
    USER_ACCOUNT_LOCKED(3003, "账号已被锁定"),
    USER_PERMISSION_DENIED(3004, "权限不足"),

    /**
     * 书籍操作
     */
    FILE_NOT_FOUND(4001, "文件不存在");

    private int code;
    private String msg;

    ResultCode(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public long getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }


}
