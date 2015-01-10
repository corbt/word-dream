package com.corbt.worddream;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.service.dreams.DreamService;
import android.view.View;
import android.webkit.WebView;
import android.widget.FrameLayout;

public class WordDream extends DreamService {
    public void onAttachedToWindow() {
        super.onAttachedToWindow();

//        setFullscreen(true);

        WebView view = new WebView(this);
        view.getSettings().setJavaScriptEnabled(true);
        view.setBackgroundColor(getResources().getColor(android.R.color.black));
        view.loadUrl("file:///android_asset/page/page.html");

        setContentView(view);

    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            getWindow().getDecorView()
            .setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);}
    }
}
