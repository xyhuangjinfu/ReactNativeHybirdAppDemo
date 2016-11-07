package cn.hjf.rntest;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

import cn.hjf.rntest.rn.MyReactPackage;

public class HomeActivity extends AppCompatActivity {

    Fragment home;
    Fragment discovery;
    FragmentManager fragmentManager;


    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);


        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setCurrentActivity(this)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new MyReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                //.setUseOldBridge(true) // uncomment this line if your app crashes
                .build();
        ReactInstanceManagerHolder.setReactInstanceManager(mReactInstanceManager);


        home = new HomeFragment();
        discovery = new DiscoveryFragment();
        fragmentManager = getSupportFragmentManager();


        fragmentManager.beginTransaction().add(R.id.container, home).commit();


    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Log.i("O_O", "onActivityResult: " + Thread.currentThread().getName());
        ReactInstanceManagerHolder.getReactInstanceManager().onActivityResult(this, requestCode, resultCode, data);
    }

    public void clickHome(View v) {
        fragmentManager.beginTransaction().replace(R.id.container, home).commit();
    }

    public void clickDiscovery(View v) {
        fragmentManager.beginTransaction().replace(R.id.container, discovery).commit();
    }

}
