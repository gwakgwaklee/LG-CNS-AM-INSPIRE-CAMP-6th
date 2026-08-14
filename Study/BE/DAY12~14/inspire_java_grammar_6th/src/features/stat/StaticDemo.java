package features.stat;

public class StaticDemo {

    /*
     * static (클래스, 변수, 메서드)4
     * - static 선언된 변수, 메서드는 인스턴스 소유가 아닌 클래스 소유
     * final : 상수(const)
     * - static final int PI = 3.14
     */

    public String message = "인스턴스 소유";
    public static String staticMessage = "클래스 소유의 변수";
    public static final double PI = 3.14;

    public StaticDemo() {

    }

    public void nonStaticMethod() {

    }

    public void instanceMethod() {
        System.out.println("debug >>>> instanceMethod : " + message);
        System.out.println("debug >>>> instanceMethod : " + staticMessage);
        System.out.println("debug >>>> instanceMethod : " + PI);

    }

    public static void classMethod() {
        // error?
        // static 소유는 instance 소유 (변수, 메서드) 접근 불가
        // System.out.println("debug >>>> instanceMethod : " + message);

        System.out.println("debug >>>> instanceMethod : " + staticMessage);
        System.out.println("debug >>>> instanceMethod : " + PI);

    }
}
