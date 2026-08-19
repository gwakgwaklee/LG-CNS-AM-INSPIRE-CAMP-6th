import features.oop.sub.*;
import features.oop.sup.*;
import features.oop.util.Flag;
import features.oop.OopService;

public class OopApp {
    public static void main(String[] args) {

        // StudentDTO stu = new StudentDTO();
        // stu.setSsn("2026");
        // stu.setName(null);
        // stu.setAge(26);

        StudentDTO stu = new StudentDTO("임섭순", 20, "서울", "2026");

        System.out.println(stu.getName());
        System.out.println(stu.getAge());
        System.out.println(stu.getAddress());
        System.out.println(stu.getSsn());

        // Q) TeacherDTO도 객체로 생성

        TeacherDTO tea = new TeacherDTO("선생님", 40, "서울시", "2026");

        System.out.println(tea.getName());
        System.out.println(tea.getAge());
        System.out.println(tea.getAddress());
        System.out.println(tea.getSubject());

        System.out.println();
        System.out.println("debug >>>> 변수타입의 다형성");
        PersonDTO manager = new ManagerDTO("김혜림", 20, "서울", "교육사무국");
        System.out.println(((ManagerDTO) manager).getDept());
        // 위와 같은 경우 컴파일(성성시점) Person타입이다.
        // 하지만, 런타임(실행시점)에서는 manager 타입이다.
        // -> 즉, 자바의 컴파일러는 실제 메모리를 보지 않고 오직 변수의 타입만
        // 체크하기 때문에 컴파일러 시점에서는 Person으로 보고 getDept를 찾을 수 없다고본다.

        System.out.println();
        System.out.println("debug >>>> 변수의 활용");

        PersonDTO[] ary = new PersonDTO[3];
        ary[0] = new TeacherDTO("임정섭", 20, "서울", "react");
        ary[1] = new ManagerDTO("김혜림", 20, "서울", "교육팀");
        ary[2] = new StudentDTO("김혜림", 20, "서울", "2026");

        PersonDTO per01 = ary[0];
        System.out.println(per01.getName());
        System.out.println(per01.getAge());
        System.out.println(per01.getAddress());
        System.out.println(((TeacherDTO) per01).getSubject());

        // for (int idx = 0; idx < ary.length; idx++) {

        // // PersonDTO per = ary[idx];
        // // if (per instanceof TeacherDTO) {
        // // System.out.println(((TeacherDTO) per).getTsn());
        // // }
        // // if (per instanceof ManagerDTO) {
        // // System.out.println(((ManagerDTO) per).getDept());
        // // }
        // // if (per instanceof StudentDTO) {
        // // System.out.println(((StudentDTO) per).getSsn());

        // // }
        // }

        for (int idx = 0; idx < ary.length; idx++) {
            PersonDTO per = ary[idx];
            System.out.println(per.personInfo());
        }

        System.out.println("\ndebug >>>> 매개변수의 다양성");
        System.out.println();

        OopService service = new OopService();

        service.setAry(stu);
        service.setAry(tea);
        service.setAry(manager);

        int serverLength = service.getAry().length;
        System.out.println("debug >>>> " + serverLength);

        service.makePerson(Flag.STUDENT, "문한일", 20, "seoul", "2026");
        service.makePerson(Flag.TEACHER, "임정섭", 20, "seoul", "2026");
        service.makePerson(Flag.MANAGER, "김혜림", 20, "seoul", "2026");

        PersonDTO[] result = service.getAry();

        System.out.println("======debug=====");
        for (PersonDTO person : result) {
            if (person == null)
                break;
            System.out.println(person.personInfo());
        }

        PersonDTO find = service.findPerson("임정섭");
        // PersonDTO find = service.findPerson("임섭순");
        if (find != null) {
            System.out.println("====매칭 성공====");
            System.out.println(find.personInfo());
        } else {
            System.out.println(">>>> Not Found!!!");
        }
    }
}
