---
title: 'Why Choose Spring as Your Java Framework'
date: '2021-01-06'
slug: 'why-choose-spring'
tags: ['Java', 'Spring'']
---

In this article,we'll go through the main value proposition of Spring as one of the most popular Java Frameworks.
在这篇文章中，我们将介绍Spring作为最受欢迎的Java框架之一，它的主要价值是什么，它推崇什么

<ore importantly,we'll try to understand the reason for Spring being our framework of choice.Details of Spring and 
its constituent parts have been [widely covered in our previous tutorial].Hence we'll skip the introductory "how" 
parts and mostly focus on "why".(更重要的是，我们将尝试了解为什么要首选Spring框架。关于Spring框架以及其周边生态，我们在之前的文章已经介绍
过，因此我们将跳过Spring的介绍部分，主要关注为什么选它)

## Why Use Any Framework

Before we begin any discussion in particular on Spring.let's first understand why do we need to use any framework at 
all in the first place.(在我们专门讨论Spring框架之前，让我们先弄明白我们为什么需要选用一个框架)

A general purpose programming language like Java is capable of supporting a wide variety of applications.Not to 
mention that Java is actively being worked upon and improving every day.(像Java这样通用的编程语言能够支持各种各样的应用，除此之外，
Java社区更是在积极地推动Java的改进与更新)

Moreover,there are countless open source and proprietary libraries to support Java in this regard.（此外，在Java开发这一块，
更是有无数的开源库和专有库来支持Java）

So why do we need a framework after all?Honestly,it isn;t absolutely necessary to use a framework to accomplish a 
task.But.it's often advisable to use one of several reasons:(那么，我们究竟出于什么原因要选择一个框架呢？老实说，要完成一个java开发任务
并不是必须要选一个框架才能做。但是考虑到以下几点，使用一个框架来完成开发任务往往是明智的)

1. Helps us **focus on the core task rather than the boilerplate** associated with it 
   使用框架可以帮助我们专注于核心任何，而不是拘泥于各种样板代码，比如数据库配置啥的
2. Brings together years of wisdom in the form of design patterns. 框架往往集成了软件开发多年来积累的的设计模式
3. Helps us adhere to the industry and regulatory standards 帮助我们遵守行业和监管的标准
4. Bring down the total cost of ownership for the application 降低开发应用的成本

We've just scratched the surface here and we must say that the benefits are difficult to ignore.But it can't be all 
positive,so what's the catch:(我们在这里只是谈到了浅层次的一些东西，但是这些优点也是不容忽视的，但是就如一个硬币有两面，使用框架带来的也并非全是正面的，也会有一些缺点)

1. Forces us to write an application in a specific manner. 使用框架迫使我们必须以一种特定的方式来编写应用
2. Binds to a specific version of language and libraries 框架往往和特定版本的语言、特定的库进行了绑定
3. Adds to the resource footprint of the application 框架增加了应用的资源占用率

Frankly,there are no silver bullets in software development and frameworks are certainly no exception to that.So the 
choice of which framework or none should be driven form the context.
(坦率地说，软件开发中并没有银弹，使用框架自然也不例外。因此开发应用，选用哪个框架或者不选框架，都应该根据实际情况来做决定)

Hopefully,we'll be better placed to make this decision with respect to Spring in Java by the end of this article.
(而这篇文章，就是来帮助开发者了解Spring框架，这样有助于在使用Spring框架是，做出正确的判断)

## Brief Overview of Spring Ecosystem

Before we begin our qualitative assessment of Spring Framework,let's have a closer look into what does Spring 
ecosystem looks like.(在我们开始对Spring框架进行定型评估之前，先认真地看看Spring生态系统是什么样子)

Spring came into existence somewhere in 2003 at a time when Java Enterprise Edition wa evolving fast and developing 
an enterprise application was exciting but nonetheless tedious.
(2003年时，Java企业版正在如火如荼地发展，Spring就是在这么一个时间点诞生了。当时开发一个企业级的Java应用是相当令人兴奋的，但是整个过程却也是相当枯燥的)

Spring started out as [an Inversion of Control(IoC) container for Java].We still relate Spring mostly to it and in 
fact,it forms the core of the framework and other projects that have benn developed on top of it.
(Spring诞生之初是作为Java的IoC容器的，Spring深入贯彻了IoC这个概念，事实上，IoC构成了Spring框架以及其他基于Spring框架开发的项目的核心)

### 3.1 Spring Framework

Spring framework is divided into modules which makes it really easy to pick and choose in parts to use in any 
application:(Spring框架被氛围了多个模块，这使得开发者在构建应用时可以按需使用)

- Core: Provides core features like DI(Dependency Injection),Internationalisation,Validation,and AOP(Aspect Oriented 
  Programming)核心模块：提供了诸如DI--依赖注入、国际化、验证、AOP--面向切面编程等核心功能
- Data Access:Support data access through JTA(Java Transaction API),JPA(Java Persistence API),and JDBC(Java Database 
  Connectivity)数据访问：支持通过JTA、JPA、JDBC等形式的数据访问
- Web:Support both Servlet API(Spring MVC) and of recently Reactive API(Spring WebFlux),and additionally support 
  WebSockets,STOMP,and WebClient.Web：支持Servlet API--Spring MVC和最新的Reactive API--Spring 
  WebFlux，此外还支持WebSockets、STOMP和WebClient
- Integration:Support integration to Enterprise Java through JMS(Java Message Service),JMX(Java Management Extension)
  ,and RMI(Remote Method Invocation)集成：支持通过JMS--Java消息服务，JMX--Java管理拓展和RMI--远程函数调用和企业级Java服务集成
- Testing:Wide support for unit and integration testing through Mock Objects,Test Fixtures,Context Management,and 
  Caching.测试：通过模拟对象、测试配置、上下文管理和缓存，广泛支持单元和集成测试

### 3.2 Spring Projects

But what makes Spring much more valuable is a strong ecosystem that has grown around it over the years and that 
continues to evolve actively.These are structured as Spring projects which are developed on top of the Spring Framework
但是，使得Spring变得更有价值的是一个围绕Spring发展的强大生态，这个生态围绕Spring发展，并且持续壮大。

Although the list of Spring projects is a long one and it keeps changing.there are a few worth 
mentioning:虽然基于Spring的项目很多，而且不断变化，但是有几个项目值得一提

- Boot:Provides us with a set of highly opinionated but extensible template for creating various projects based on 
  Spring in almost no time.It makes it really easy to create standalone Spring applications with embedded Tomcat or 
  a similar container.为开发者提供了一套高度定制化但是可拓展的模板，几乎可以在短时间内创建基于Spring的各种项目。Boot使得开发者非常容易创建内置Tomcat或者蕾丝容器的独立Spring应用
- Cloud: Provides support to easily develop some of the common distributed system patterns like service discovery,
  circuit breaker,and API gateway.It helps us cut down the effort to deploy such boilerplate patterns in local,
  remote or event managed platforms为开发者轻松开发一些常见的分布式系统服务，例如service discovery、circuit breaker和API 
  gateways，提供了支持。Cloud能帮助开发者减少在本地、远程甚至是管理平台上部署这些样板服务的成本
- Security:Provides a robust mechanism to develop authentication and authorization for projects based on Spring in a 
  highly customizable manner.With minimal declarative support,we get protection against common attacks like session 
  fixation,click-jacking,and cross-site request forgery.
  提供了一个强大的机制，以高度定制的方式为基于Spring的项目开发认证和授权服务。通过最小性声明，开发者可以获得常见攻击的保护，如会话固定、点击劫持和跨站点请求伪造
- Mobile: Provide capabilities to detect the device and adapt the application behavior accordingly.Additionally,
  supports device-aware view management for optimal user experience,site preference management,and site switcher.
  提供检测设备以及根据检测结果调整应用的能力。此外，还支持设备感知的视图管理，从而获得最佳的用户体验、网站偏好管理以及网站切换器
- Batch: provides a lightweight framework for developing batch applications for enterprise system like data archival.
  has intuitive support for scheduling,restart,skipping,collecting metrics,and logging.Additionally,support scaling 
  up for high-volume jobs through optimization and partitioning.
  提供一个轻量级的框架，用于开发企业系统的批处理应用程序，如数据存储。对调度、重启、跳过、收集指标和日志都直接支持。此外，还支持通过优化和分区来扩大大批量作业的规模

## 4.Spring in Action

It is customary to add a hello-world program to understand any new technology.(按照惯例，要了解任何新技术，那么就是启动一个hello-world应用)

Let's see how Spring can make it a cakewalk to write a program which does more than just hello-world.We'll create an 
application that will expose CRUD operations as REST APIs for a domain entity Employee backed by an in-memory 
database.What's more,we'll protect our mutation endpoints using basic auth.Finally,no application can really be 
complete without good,old unit test.让我们看看Spring是如何将编写Java应用变得轻松简单的，而不是局限于一个简单的hello-world。我们将创建一个Spring 
demo，在这个应用里，我们将CURD操作作为REST API暴露给一个domain entity--比如Employee,
并基于一个内存数据库进行CURD操作。更为重要的是，我们将使用基本的认证来保护我们的后端接口。最后，如果没有良好的、稳定的单元测试，任何应用都不是完整的


### 4.1 Project Set-up

We'll set up our Spring Boot project using [Spring Initializr],which is a convenient online tool to bootstrap 
projects with the right dependencies.We'll add Web,JPA,H2,and Security as project dependencies to get the Maven 
configuration set-up correctly.

### 4.2 Domain Model and Persistence

With so little to be done,we are already to define our domain model and persistence.Let's first define the Employee 
as simple JPA entity:

```java
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    // Standard constructors,getters,and setters
}
```

Note the auto-generated id we've included in our entity definition

Now we have to define a JPA repository for our entity.This is where Spring makes it really simple

```java
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    List<Employee> findAll();
}
```

### 4.3 Controller

Now we have to define a web controller to route and handle our incoming requests

```java
@RestController
public class EmployeeController {
    @Autowired
    private EmployeeRepository repository;
    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return repository.findAll();
    }
    // Other CRUD endpoints handlers
}
```

Really,all we had to do was annotate the class and define routing meta information along with each handler method.

### 4.4 Security

So we have defined everything now,but what about securing operations like create or delete employees?We don't want 
unauthenticated access to those endpoints

Spring Security really shines in this area

```java
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigureAdapter {
    @Override
    protected void configure(HttpSecurity http) {
        http
            .authorizeRequest()
            .antMatchers(HttpMethod.GET, "/employees", "/employees/**")
            .permitAll()
            .anyRequest()
            .authenticated()
            .and()
            .httpBasic()
    }
}
```

### 4.5 Testing

Now we have done everything,but wait,how do we test this?Let's see if Spring can make it easy to write unit tests 
for REST controller

```java
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class EmployeeControllerTests {
    @Autowired
    private MockMvc mvc;
    @Test
    @WithMockUser()
    public void givenNoEmployee_whenCreateEmployee_thenEmployeeCreated() throws Exception {
        mvc.perform("/employees").content(
            new ObjectMapper().writeValueAsString(new Employee("First", "Last")).with(csrf())
        )
        .contentType(MediaType.APPLICATION_JSON)
        .accept((MediaType.APPLICATION_JSON)
        .andExpect(MockMvcResultMatchers.status)
        .isCreated()
        .andExpect(jsonPath("$.firstName", is("first")))
        .andExpect(jsonPath("$.lastName", is("last")))
    }
}
```

As we can see,Spring provides us with the necessary infrastructure to write simple and integration tests which 
otherwise depend on the Spring context to be initialized and configured

### 4.6 Running the Application

Finally,how do we run this application?This is another interesting aspect of Spring Boot.Although we can package 
this as a regular application and deploy traditionally on a Servlet container.

But where is fun this that!Spring Boot comes with an embedded Tomcat server.

```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args)
    }
}
```

This is a class which comes pre-created as part of the bootstrap and has all the necessary details to start this 
application using the embedded server.

## 5.Alternative to Spring

While choosing to use a framework is relatively easier,choosing between framework can often be daunting with the 
choices we have.But for that,we must have at least a rough understanding of what alternative are there for the 
features that Spring has to offer.

As we discussed previously, the Spring framework together with its projects offer a wide choice for an enterprise 
developer to  pick from.If we do q quick assessment of contemporary Java frameworks,they don't even come close to 
the ecosystem that Spring provides us.正如我们之前讨论的，Spring框架及其项目为企业开发者提供了广泛的选择。如果我们对当代的Java框架做一个快速的评估，它们甚至不能接近Spring为我们提供的生态系统。

However,for special areas,they do form a compelling argument to pick as alternatives:

- Guide:Offers a robust IoC container for Java applications
- Play:Quite aptly fits in as a Web framework with reactive support 
- Hibernate: An established framework for data access with JPA support.

Other than these are some recent additions that offer wide support than a specific domain bu still do not cover everything that Spring has to offer.

- Micronaut:A JVM-based framework tailored towards cloud-native microservices
- Quarkus: A new age Java stack which promise to deliver faster boot time and a smaller footprint

Obviously,it's neither necessary nor feasible to iterate over the list completely but we do get the broad idea here.

## 6 So,Why Choose Spring

finally,we've built all the required context to address our central question.why Spring?We understand the ways a 
framework can help us in developing complex enterprise applications.

Moreover,we do understand the options we've got for specific concerns like web,data access,integration in terms of 
framework,especially for Java.

Now,where does Spring shine among all these?Let's explore.

### 6.1 Usability

One of the key aspects of any framework's popularity is how easy it is for developers to use it.Spring through 
multiple configuration options and Convention over Configuration makes it really easy for developer to start and 
then configure exactly what they need.

Projects like Spring Boot have made bootstrapping a complex Spring project almost trivial.Not to mention,it has 
excellent documentation and tutorials to help anyone get on-boarded.

### 6.2 Modularity

Another key aspect of Spring's popularity is its highly modular nature.We've options to use the entire Spring 
framework o just the modules necessary.Moreover,we can optionally include one or more Spring projects depending upon 
the need.

What's more,we've got the option to use other frameworks like Hibernate or Structs well.

### 6.3 Conformance

Although Spring does not support all of Jakarta EE specifications,it supports all of its technologies,often 
improving the support over the standard specification where necessary.For instance,Spring supports JPA based 
repositories and hence makes it trivial to switch providers.

Moreover,Spring supports industry specifications like Reactive Stream under Spring Web Reactive and HATEOAS under Spring HATEOAS.

### 6.4 Testability

Adoption of any framework largely also depends on the fact that how easy it is to test the application built on top 
of it.Spring at the core advocates and supports Test Driven Development(TDD)

Spring application is mostly composed of POJOs which naturally makes unit testing relatively much simpler.However,
Spring does provide Mock Objects for scenarios like MVC where unit testing gets complicated otherwise。(Spring应用程序大多由POJOs组成，这自然使单元测试相对简单得多。然而，Spring确实为MVC等场景提供了Mock对象，否则单元测试会变得很复杂。)

### 6.5 Maturity

Spring has long history of innovation,adoption,and standardization.Over the years,it's become mature enough to 
become a default solution for most common problems faced in the development of large scale enterprise applications.

What is more exciting is how actively it's being developed and maintained.Support for new language features and 
enterprise integration solutions are being developed every day.

### 6.6 Community Support

Last but not least,any framework or even library survive the industry through innovation and there's no better place 
for innovation that the community.Spring is an open source led by Pivotal Software and backed by a large consortium 
of organizations and individual developers

This has means that it remains contextual and often futuristic,as evident by the number of projects under its umbrella.




