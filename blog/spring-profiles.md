---
title: 'Spring Profiles'
date: '2022-10-31'
slug: 'spring-profiles'
tags: ['Spring', 'Profile'']
---

In this tutorial,we'll focus on introducing Profiles in Spring.

Profiles are a core feature of the framework--allowing us to map our beans to different profiles--for example,*dev,
test,prod*.

We can then activate different profiles in different environments to bootstrap only the beans we need.

## Use @Profile on a Bean

let's start simple and look at how we can make a bean belong to a particular profile.**We use the @Profile 
annotation**--we are mapping the bean to that particular profile;the annotation simply takes the names of one(or 
multiple) profiles.

Consider a basic scenario:We have a bean that should only be active during development but not deployed in production.

We annotate that bean with a *dev profile*,and it will only be present in the container during development.In 
production,the *dev* simple won't be active:

```java
@Component
@Profile("dev")
public class DevDatasourceConfig {}
```

As a quick side-note,profile names can also be prefixed with a NOT operator,e.g *!dev*,to exclude them from a 
profile.In the example,the component is activated only if *dev* profile is not active.

```java
@Component
@Profile("!dev")
public class DecDatasourceConfig {}
```

## Declare Profiles in XML

Profiles can also be configured in XML.The <beans> tag has *profile* attribute,which takes comma-separated values of 
the applicable profiles:

```xml
<beans profile="dev">
    <bean id="devDatasourceConfig" class="org.baeldung.profile.DevDatasourceConfig" />
</beans>
```

## Set Profiles

The next step is to activate and set the profiles so that the respective beans are registered in the container.This 
can be done in a variety of ways,which we'll explore in the following sections.

### Programmatically via WebApplicationInitializer Interface

In web applications,*WebApplicationInitializer* can be used to configure the *ServletContext* programmatically.It's 
also a very handy location to set our active profiles programmatically:

```java
@Configuration
public class MyWebApplicationInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext servletContext) throws ServletException  {
        servletContext.setInitParameter("spring.profiles.active", "dev");
    }
}
```

### Programmatically via ConfigurableEnvironment

We can also set profile directly on the environment

```java
@Autowired
private ConfigurableEnvironment env;
...
env.setActiveProfiles("someProfile");
```