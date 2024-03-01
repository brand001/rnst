package com.TestST.soexample;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;


public class opeinstall extends ReactContextBaseJavaModule {

    public static String TAG = "";
    public static String RAF = "";

    public static String PushToken = "";

    private String CODE;

    public opeinstall(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Openinstall";
    }

    @ReactMethod
    public void getAffCode(Callback callback) {
        if(TAG == null || TAG.equals("")) {
            //TInstall代理码affcode
            TAG = com.TestST.soexample.MainActivity.Affcodes;
        }
        callback.invoke(TAG);
    }

    @ReactMethod
    public void getRafCode(Callback callback) {
        //推荐好友code
        RAF = com.TestST.soexample.MainActivity.Rafcodes;
        callback.invoke(RAF);
    }

    @ReactMethod
    public void getDeviceToken(Callback callback) {
        //推荐好友code
        PushToken = com.TestST.soexample.UMPush.PushHelper.DeviceTokens;
        callback.invoke(PushToken);
    }

    @ReactMethod
    public void getPackageName(Callback callback) {
        String packageName = getReactApplicationContext().getPackageName();
        callback.invoke(packageName);
    }







    //跳转手机设置
    @ReactMethod
    public void openNetworkSettings(Callback cb) {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            cb.invoke(false);
            return;
        }
        try {
            currentActivity.startActivity(new Intent(android.provider.Settings.ACTION_SETTINGS));
            cb.invoke(true);
        } catch (Exception e) {
            cb.invoke(e.getMessage());
        }
    }


}