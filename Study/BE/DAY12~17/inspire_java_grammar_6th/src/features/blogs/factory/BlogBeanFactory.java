package features.blogs.factory;

import java.util.HashMap;
import java.util.Map;

import features.blogs.controller.ListController;
import features.blogs.repository.BlogReactDao;
import features.blogs.service.BlogReactService;
import features.blogs.service.BlogReactServiceImpl;

/* 
 - singleton pattern
 - factory pattern
 사용자의 요청 endPoint로 각 controller 객체를 바인딩해서 담을 것 : Map 
*/
public class BlogBeanFactory {
    // Object를 사용하는 이유 Controller들은 다양한 type이
    // 나오기때문에 다향성을 지켜주는거임

    // Bean = FrameWork를 통해서 생성되고 관리되는 것
    private Map<String, Object> map;
    private static BlogBeanFactory instance;

    // dependency injection
    private BlogReactService service;
    private BlogReactDao dao;

    private BlogBeanFactory() {
        map = new HashMap<>();

        dao = new BlogReactDao();
        service = new BlogReactServiceImpl(dao);
        // 추후 추가되는 각 기능을 구현하는 xxxController 등록
        map.put("list.inspire", new ListController(service));
    }

    public static BlogBeanFactory getInstance() {
        /*
         * [싱글톤을 사용하는 이유]
         * - 싱글톤을 쓰지 않으면 매 요청마다 Controller, Service, DAO 같은 로직 처리 객체가 계속 new 생성됨.
         * - 손님이 올 때마다 '은행 금고문/창구'를 매번 새로 짓고 부수는 격(메모리 낭비 & GC 부하 발생).
         * - 상태(State)를 가지지 않는 처리 객체는 1개만 생성해두고 여러 요청 스레드가 공유/재사용하는 것이 효율적임.
         */
        if (instance == null) {
            instance = new BlogBeanFactory();
        }
        return instance;
    }

    // front controller가 호출하는 메서드
    public Object getBean(String endPoint) {
        return map.get(endPoint);
    }

}
