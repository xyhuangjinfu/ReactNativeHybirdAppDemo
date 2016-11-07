package cn.hjf.rntest;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.facebook.react.ReactRootView;

/**
 * Created by huangjinfu on 2016/11/7.
 */

public class HomeFragment extends Fragment {

    FrameLayout rnContainer;
    private ReactRootView mReactRootView;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        super.onCreateView(inflater, container, savedInstanceState);
        View view = inflater.inflate(R.layout.fragment_home, container, false);

        rnContainer = (FrameLayout) view.findViewById(R.id.rn_container);


        mReactRootView = new ReactRootView(getActivity());

        mReactRootView.startReactApplication(ReactInstanceManagerHolder.getReactInstanceManager(), "Home", null);

        rnContainer.addView(mReactRootView);


        return view;
    }
}
