---
title: 'Spring Bear Annotations'
date: '2022-01-01'
slug: 'spring-bear-annotations'
tags: ['Spring', 'Bear'']
---

In this tutorial,we'll discuss the most **common Spring bear annotations** used to define different types of beans.
这篇文章里，我们将学习最常见的Spring Bean 注解，用来定义不同类型的Bean。

There are several ways to configure beans in a Spring container.Firstly,we can declare them using XML configuration.
We can also declare beans using the @Bean annotation in a configuration class.Finally,we can mark the class with one 
of the annotations form the **org.springframework.stereotype** package,and leave the rest to component scanning.
在Spring容器里配置Bean有好几种方法。首先，我们可以使用XML配置来定义Bean，其次我们也可以在一个配置类中使用`@Bean`注解来定义Bean，最后我们可以用**org.springframework.
stereotype**包中的一个注解来标记某个类，剩下的就交给component来扫描定义Bean。

## Component Scanning

Spring can automatically scan a package for beans if component scanning is enabled.
如果component scanning是被允许的，那么Spring就能自动扫描包的beans

`@ComponentScan` configures which **packages to scan for classes with annotation configuration**.We can specify the 
base package names directly with one of the basePackages or value arguments(value is an alias for basePackage).
@ComponentScan用注解配置来确定扫描哪些包以寻找类。我们可以用哪个basePackages或value的参数之一，直接指定基础包的名字（value是basePackages的别名）

```java
@Configuration
@ComponentScan(basePackages = "com.baeldung.annotations")
class VehicleFactoryConfig {}
```

Also,we can point to classes in the base package with the `baskPackageClasses` argument

```java
@Configuration
@ComponentScan(basePackageClasses = VehicleFactoryConfig.class)
class VehicleFactoryConfig {}
```

Both arguments are arrays so that we can provide multiple package for each.

If no arguments is specified,the scanning happens from the same package where the `@ComponentScan` annotated class 
us present.如果没有指定参数，扫描将从@ComponentScan注解的类所在的同一个包中进行

`@ComponentScan` leverages the Java8 repeating annotations feature,which means we can mark a class with it multiple 
times:@ComponentScan利用了Java8可重复注释的特性，这意味着我们可以使用@ComponetScan重复标记同一个类

```java
@Configuration
@ComponentScan(basePackages = "com.baeldung.annotations")
@ComponentScan(basePackageClasses = VehicleFactoryConfig.class)
class VehicleFactoryConfig {}
```

Alternatively,we can use `@ComponentScans` to specify multiple `@ComponentScan` configuration.

```java
@Configuration
@ComponentScans({
    @ComponentScan(basePackages = "com.baeldung.annotations")
    @ComponentScan(basePackageClasses = VehicleFactoryConfig.class)
})
class VehicleFactoryConfig {}
```

When **using XML configuration**,the configuration component is just as easy.

```xml
<context:component-scan base-package="com.baeldung" />
```

## @Component

`@Component` is a class level annotation.During the component scan,Spring Framework automatically detects classes 
annotated with `@Component`:

```java
@Component
class CarUtility {
    // ...
}
```

By default,the bean instances of this class have the same name as the class name with a lowercase initial.In 
addition,we can specify a different name using the optional *value* argument of this annotation.
默认情况下，这个类的Bean实例具有与类名相同的名称，并且带有小写的首字母。此外，我们可以使用这个注解的可选值参数，来指定这个类的Bean实例又一个不同的名字

Since *@Repository*,*@Service*,*@Configuration*,and *@Controller* all meta-annotations of *@Component*,they share 
the same bean naming behavior.Spring also automatically picks them up during the component scanning process.
由于@Repository，@Service，@Configuration，@Controller都是@Component的元注解，所以被这些注解注释的类，就拥有相同的bean命名规则。在组件的扫描过程中，Spring
框架也会自动拾取这些Bean实例

## @Repository

DAO or Repository classes usually represent the database access layer in an application,and should be annotated with 
*@Repository*

```java
@Repository
class VehicleRepository {
    // ...
}
```

One advantage of using this annotation is that **it has automatic persistence exception translation enabled**.When 
using a persistence framework,such as Hibernate,native exception thrown within classes annotated with *@Repository* 
will be automatically translated into subclasses of Spring's DataAccessException.
使用@Repository注解的一个好处是，它有自动将持久化异常翻译的功能。当使用某些持久化框假时，比如Hibernate，在使用@Repository注解的类中抛出的本地异常，将被自动转化成Spring
的DataAccessException的子类。

To enable exception translation,we need to declare our own PersistenceExceptionTranslationPostProcessor bean:

```java
@Bean
public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
    return new PersistenceExceptionTranslationPostProcessor();
}
```

Note that in most cases,Spring does the above step automatically

Or via XML configuration:

```xml
<bean class="org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor"  />
```

## @Service

The business logic of an application usually resides within the service layer,wo we'll use the *@Service* annotation 
to indicate tah a class belongs to that layer:

```java
@Service
public class VehicleService {}
```

## @Controller

*@Controller* is a class level annotation,which tells the Spring Framework that this class serve as a **Controller 
in Spring MVC**

```java
@Controller
public class VehicleController {}
```

## @Configuration

Configuration classes can contain bean definition method annotated with @Bean.

```java
@Configuration
class VehicleFactoryConfig {
    @Bean
    Engine engine() {
        return new Engine();
    }
}
```

## Stereotype Annotations and AOP

When we use Spring stereotype annotations,it's easy to create a pointcut that targets all classes that have a 
particular stereotype.
当我们使用Spring的定型注解时，我们很容易创建一个针对所有具有特定定型的类的切点

For instance,suppose we want to measure the execution time of methods from the DAO layer.We'll create the following 
aspect(using @Aspect),taking advantages of the @Repository stereotype:

```java
@Aspect
@Component
public class PerformAspect {
    @Pointcut("within@org.springframework.stereotype.Repository *")
    public void repositoryClassMethods() {};
    @Around("repositoryClassNethods()")
    public Object measureMethodExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.nanoTime();
        Object returnValue = joinPoint.proceed();
        long end = System.nanoTime();
        String methodName = joinPoint.getSignature().getName();
        System.out.println(
            "Execution of " + methodName + " took "
            TimeUnit.NANOSECONDS.toMillis(end - start) + "ms"
        )
        return returnValue;
    }
}
```

In this example,we created a pointcut that matches all the methods in classes annotated with @Repository.Then we 
used the *@Around* advice to target that pointcut,and determine the execution time of the intercepted methods calls.
在这个例子中，我们创建了一个切点来匹配所有用@Repository注释的类的方法。然后我们使用@Around建议来定位该切点，并确定被拦截的方法调用所使用的时间

Furthermore,using this approach,we can add logging,performance management,audi,and other behaviors to each 
application layer.
此外，使用这种方法，我们可以为每个应用层添加日志、性能管理，审计和其他行为。

## Profile based segregation

We are using maven build profiles to segregate the huge list of individual projects we have in our repository.
我们使用Maven构建配置文件，来隔离我们仓库中庞大的单个项目列表

As for now,vast majority of the modules require JDK8 to build and run correctly.
就目前而言，绝大多数模块都需要JDK8来构建和正确运行

The projects are broadly divided into 3 lists:first,second,and heavy.
这些项目大致分为3个清单：第一重要的，第二重要的，重度重要的

Next,they are segregated further on the basis of the test that we want to execute.
接下来，它们在我们想要执行的测试的基础上进一步被隔离

Additionally,there are 2 profile dedicated for JDK9 and above builds.
此外，还有2个配置文件专门用于JDK9及以上的版本的构建

Therefore,we have a total of 8 profiles:
所以，我们总共有8个配置文件

## Building the project

Though it should not be needed often to build the entire repository at once because we are usually concerned with a 
specific module.But if we want to,we can invoke the below command from the root of the repository if we want to 
build the entire repository with only Unit Tests enabled.
虽然不需要经常考虑一次性构建整个版本库，因为我们通常关注的是一个特定的模块。但是如果我们想在只启用单元测试的情况下构建整个版本库，我们可以在版本库的根目录下，调用如下命令行界

```bash
mvn clean install -Pdefault-first,default-second,default-heavy
```

of if we want to build the entire repository with Integration Tests enabled,we can do:

```bash
mvn clean install -Pintegration-lite-first,integration-lite-second,integration-heavy
```

Analogously,for the JDK9 and above projects the commands are: `mvn clean install -Pdefault-jdk9-and-above` and `mvn 
clean install -Pintegration-jdk9-and-above`

## Building a single module

To build a specific module,run the command:`mvn clean install` in the module directory

## Running a Spring Boot Module

To run a Spring Boot module,run the command:`mvn spring-boot:run` in the module directory

## Working with the IDE

This repo container a large number of modules.When you're working with an individual module,there's no need to 
import all of them(or build all of them)--you can be simply important that particular module in either Eclipse or 
IntelliJ.

## Running Test

The command `mvn clean install` from within a module will run the unit tests in that module.For Spring modules this 
will also run the `SpringContextTest` if present:

To run the integration tests,use the command:

`mvn clean install -Pintegration-lite-first` or

`mvn clean install -Pintegration-lite-second` or

`mvn clean install -Pintegration-heavy` or

`mvn clean install -Pintegration-jdk9-and-above`






## Conclusion

In this article,we examined the Spring stereotype annotations and discussed what type of semantics they each represent.
在这篇文章里，我们研究了Spring的固有的（内置的）注解，并且讨论了不同的注解代表了什么类型的含义

We also learned how to use component scanning to tell the container where to find annotated classes.
我们还学习了如何使用component scan来告诉Spring容器在哪里可以找到注解的类

Finally,we learned how these annotation lead to a clean,layered design,and separation between the concerns of an 
application.They also make configuration smaller,as we no longer to explicitly define beans manually.
最后，我们了解到，如何通过不同的注解来生成一个干净的、分层的系统设计，以及应用程序中各关注点之间的分离。这些元注解还使得Spring的配置变得更小，因为开发者不再需要显示手动地来定义Bean

As usual,the examples are available over on GitHub.


