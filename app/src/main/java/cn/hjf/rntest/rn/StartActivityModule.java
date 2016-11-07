package cn.hjf.rntest.rn;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;

/**
 * Created by huangjinfu on 2016/11/7.
 */

public class StartActivityModule extends ReactContextBaseJavaModule {


    public StartActivityModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "StartActivityModule";
    }

    @ReactMethod
    public void startActivity(String fullName, ReadableMap params) {
        Log.i("O_O", fullName);
        try {
            Intent intent = new Intent(getCurrentActivity(), Class.forName(fullName));
            intent.putExtras(fromReadableMap(params));
            getCurrentActivity().startActivity(intent);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    private Bundle fromReadableMap(ReadableMap readableMap) {
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
