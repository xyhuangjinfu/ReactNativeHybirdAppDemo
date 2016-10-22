package cn.hjf.rntest;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void jumpToRNActivity(View view) {
        Intent intent = new Intent(this, ReactNativeActivity.class);
        intent.putExtra(ReactNativeActivity.KEY_DATA, "hello, hehe, i am data");
        startActivity(intent);
    }
}
