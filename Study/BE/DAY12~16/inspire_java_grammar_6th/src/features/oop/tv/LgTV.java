package features.oop.tv;

public class LgTV implements TV {

    private static LgTV instance;

    public LgTV() {

    }

    public static LgTV getInstance() {
        if (instance == null) {
            instance = new LgTV();
        }
        return instance;
    }

    public void turnOn() {
        System.out.println("lg tv turen on");
    }

}
