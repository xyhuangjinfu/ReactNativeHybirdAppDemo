package cn.hjf.rntest;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

public class SearchActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search);

        TextView textView = (TextView) findViewById(R.id.content);
        textView.setText("搜索界面，搜索内容：" + getIntent().getStringExtra("search_content"));
    }

}
