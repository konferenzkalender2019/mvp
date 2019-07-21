package ek.mvp.server;

import java.net.URL;

public class Conference {
    private String name;
    private String ort;
    private URL hompage;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrt() {
        return ort;
    }

    public void setOrt(String ort) {
        this.ort = ort;
    }

    public URL getHompage() {
        return hompage;
    }

    public void setHompage(URL hompage) {
        this.hompage = hompage;
    }
}
