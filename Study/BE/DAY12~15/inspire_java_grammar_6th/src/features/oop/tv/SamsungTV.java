package features.oop.tv;

public class SamsungTV implements TV {

    private static SamsungTV instance;

    private SamsungTV() {
        System.out.println("기본 생성자");
    }

    public static SamsungTV getInstance() {
        if (instance == null) {
            instance = new SamsungTV();
        }
        return instance;
    }

    public void turnOn() {
        System.out.println("samsung tv turnOn");
    }
}
