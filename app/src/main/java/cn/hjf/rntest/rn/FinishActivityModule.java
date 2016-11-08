package cn.hjf.rntest.rn;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;

/**
 * Created by huangjinfu on 2016/11/7.
 */

public class FinishActivityModule extends ReactContextBaseJavaModule {


    public FinishActivityModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "FinishActivityModule";
    }

    @ReactMethod
    public void finishActivity(ReadableMap params) {
        Intent data = new Intent();
        data.putExtras(fromReadableMap(params));
        getCurrentActivity().setResult(Activity.RESULT_OK, data);
        getCurrentActivity().finish();
    }

    private Bundle fromReadableMap(ReadableMap readableMap) {
        if (readableMap == null) {
            return null;
        }

        Bundle bundle = new Bundle();

        ReadableMapKeySetIterator keys = readableMap.keySetIterator();
        while (keys.hasNextKey()) {
            String key = keys.nextKey();
            ReadableType typeOfValue = readableMap.getType(key);

            if (typeOfValue == ReadableType.String) {
                bundle.putString(key, readableMap.getString(key));
            } else if (typeOfValue == ReadableType.Boolean) {
                bundle.putBoolean(key, readableMap.getBoolean(key));
            } else if (typeOfValue == ReadableType.Number) {
                bundle.putDouble(key, readableMap.getDouble(key));
            } else if (typeOfValue == ReadableType.Map) {
                bundle.putBundle(key, fromReadableMap(readableMap.getMap(key)));
            } else if (typeOfValue == ReadableType.Array) {
                //TODO 等待进一步实现
            }
        }

        return bundle;
    }

}
