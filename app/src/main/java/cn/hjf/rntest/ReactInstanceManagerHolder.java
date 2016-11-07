package cn.hjf.rntest;

import com.facebook.react.ReactInstanceManager;

/**
 * Created by huangjinfu on 2016/11/7.
 */

public class ReactInstanceManagerHolder {

    private static ReactInstanceManager reactInstanceManager;

    public static void setReactInstanceManager(ReactInstanceManager manager) {
        reactInstanceManager = manager;
    }

    public static ReactInstanceManager getReactInstanceManager() {
        return reactInstanceManager;
    }
}
