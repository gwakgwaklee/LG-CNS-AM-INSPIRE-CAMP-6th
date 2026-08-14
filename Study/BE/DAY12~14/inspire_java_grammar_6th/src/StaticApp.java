import features.stat.StaticDemo;

public class StaticApp {
    public static void main(String[] args) {
        StaticDemo demo = new StaticDemo();
        System.out.println(demo.message);
        demo.message = "메시지 변경";
        System.out.println(demo.message);

        //
        System.out.println(StaticDemo.staticMessage);

        // 상수는 수정 불가

        demo.instanceMethod();
        StaticDemo.classMethod();
    }
}
