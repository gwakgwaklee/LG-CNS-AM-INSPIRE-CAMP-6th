import features.var.Teacher;

public class TeacherApp {
    public static void main(String[] args) {
        // new 연산자를 이용하여 instance를 생성할 수 있음
        Teacher teacher = new Teacher();
        System.err.println("teacher - " + teacher);

        teacher.setName("임정섭");
        String name = teacher.getName();
        System.out.println(name);

        String name2 = teacher.name = "inspire";
        System.out.println(name2);
        ;

    }
}
