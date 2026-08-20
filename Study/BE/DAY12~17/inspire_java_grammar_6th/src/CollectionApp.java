import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.stream.Collectors;

import features.oop.sub.ManagerDTO;
import features.oop.sub.StudentDTO;
import features.oop.sub.TeacherDTO;
import features.oop.sup.PersonDTO;

public class CollectionApp {

    /*
     * Collection API (- Java.util.*)
     * - list (중복허용, 순선존재, 요소의 타입으로 객체만, 가변길이)
     * - Set (중복허용 x, 순서존재 x, 요소의 타입으로 객체만, 가변길이)
     * - 순서가 없으므로 for() 불가능
     * - Map ( {key : value}, {key:value}, .... )
     * 
     * (Consumer <? super E> action) -> 함수형 메서드
     * 메서드가 함수를 인자로 받음
     * 
     * element : 타입의 안정성읃 얻음
     */

    public static void main(String[] args) {
        List<String> list = new ArrayList<String>();

        list.add("String");
        // list.add(10);
        // list.add(true);

        System.out.println("debug >>>> " + list);

        System.out.println();
        System.out.println("debug >>>> ArrayList Element xxxxDTO ");

        List<PersonDTO> personList = new ArrayList<PersonDTO>();
        StudentDTO student = StudentDTO.builder()
                .name("inspire").build();
        TeacherDTO teacher = TeacherDTO.builder()
                .name("jslim").build();
        ManagerDTO manager = ManagerDTO.builder()
                .name("lgcns").build();

        personList.add(student);
        personList.add(teacher);
        personList.add(manager);

        List<String> filteringList = new ArrayList<String>();
        for (int idx = 0; idx < personList.size(); idx++) {
            PersonDTO person = personList.get(idx);
            if (person.getName().startsWith("j")) {
                filteringList.add(person.getName().toUpperCase());
            }
        }

        // Stream API (선언적 처리)
        // 컬렉션을 Stream 객체로 바인딩하고 - 중간 연산(0~N) - 연산결과를 최종연산(1)
        // System::println
        // s -> s.startsWith()

        List<String> filteringList2 = personList.stream()
                .filter(s -> s.getName().startsWith("j"))
                .map(s -> s.getName().toUpperCase())
                .collect(Collectors.toList());
        System.out.println(filteringList2);

        personList.stream()
                .filter(person -> person.getName().length() > 5)
                .forEach(System.out::println);

        // 중복 data 는 skip 즉, 담는것에 의의를 둠
        System.out.println();
        System.out.println("debug >>>> Set");
        Set<String> set = new HashSet<>();
        set.add("jslim");
        set.add("inspire");
        set.add("lgcns");
        set.add("jslim");

        System.out.println(set);
        Object[] setAry = set.toArray();
        for (Object data : setAry) {
            System.out.println(data);
        }

        System.out.println();
        System.out.println("debug >>>> Map (key : value) === JSON");

        List<StudentDTO> studentList = new ArrayList<StudentDTO>();
        List<TeacherDTO> teacherList = new ArrayList<TeacherDTO>();
        List<ManagerDTO> managerList = new ArrayList<ManagerDTO>();

        Map<String, List<? extends PersonDTO>> map = new HashMap<>();
        map.put("student", studentList);
        map.put("teacher", teacherList);
        map.put("manager", managerList);

        // List<? extends PersonDTO> mapList = map.get("manager");
        // mapList.forEach(person -> System.out.println(person.personInfo()));
        // -> stream 방식
        map.get("stduent")
                .stream()
                .filter(null)
                .map(null)
                .forEach(person -> System.out.println(person.personInfo()));

    }
}
