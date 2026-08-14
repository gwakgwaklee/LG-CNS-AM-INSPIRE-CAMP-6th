import features.oop.tv.TV;
import features.oop.factory.BeanFactory;
import features.oop.tv.SamsungTV;

public class TvClientApp {
    public void main(String[] args) {

        TV tv = SamsungTV.getInstance();
        System.out.println("debug >>>> tv address" + tv);
        tv.turnOn();

        TV tv1 = SamsungTV.getInstance();
        System.out.println("debug >>>> tv address" + tv1);
        tv.turnOn();

        BeanFactory factory = BeanFactory.getInstance();

        TV tv2 = factory.getBrand("lg");
        tv2.turnOn();
    }
}
