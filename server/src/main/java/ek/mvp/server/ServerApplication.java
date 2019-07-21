package ek.mvp.server;

import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@SpringBootApplication
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    @RequestMapping("/test")
    public Conference greeting() throws MalformedURLException {
        Conference conference = new Conference();

        conference.setName("BEDCON 2019");
        conference.setHompage(new URL("https://www.bedcon.org"));
        conference.setOrt("Berlin");

        return conference;
    }

}
