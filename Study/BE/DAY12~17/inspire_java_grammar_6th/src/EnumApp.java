import features.oop.sub.ManagerDTO;
import features.oop.sub.StudentDTO;
import features.oop.sub.TeacherDTO;
import features.oop.sup.PersonDTO;
import features.oop.util.Flag;

public class EnumApp {
    public static void main(String[] args) {
        Flag flag = Flag.STUDENT;

        System.out.println(flag);
        System.out.println(flag.getFlag());

        System.out.println(">>>> switch 활용");

        switch (flag) {
            case STUDENT -> System.out.println("학생");
            case TEACHER -> System.out.println("강사");
            case MANAGER -> System.out.println("매니저");
        }

        // PersonDTO per = (flag.getFlag() == 1)
        // ? StudentDTO.builder()
        // .name(name).age(age).address(address)
        // .ssn(comm).build()
        // : (flag.getFlag() == 2) ? TeacherDTO.builder()
        // .name(name).age(age).address(address)
        // .subject(comm).build()
        // : ManagerDTO.builder()
        // .name(name).age(age).address(address)
        // .dept(comm).build();

        // setAry(per);

    }

}
