package cn.hjf.rntest;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class HomeActivity extends AppCompatActivity  {

    Fragment home;
    Fragment discovery;
    FragmentManager fragmentManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        home = new HomeFragment();
        discovery = new DiscoveryFragment();
        fragmentManager = getSupportFragmentManager();


        fragmentManager.beginTransaction().add(R.id.container, home).commit();


    }

    public void clickHome(View v) {
        fragmentManager.beginTransaction().replace(R.id.container, home).commit();
    }

    public void clickDiscovery(View v) {
        fragmentManager.beginTransaction().replace(R.id.container, discovery).commit();
    }

}
