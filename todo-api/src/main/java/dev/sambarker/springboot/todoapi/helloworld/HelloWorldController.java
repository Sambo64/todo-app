package dev.sambarker.springboot.todoapi.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping(path = "/basicauth")
    public String basicAuth() {
        return "Success";
    }

    @GetMapping(path = "/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Bean message");
    }

    @GetMapping(path = "/hello-world/{name}")
    public HelloWorldBean helloWorldName(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello, %s",name));
    }
}
