import features.oop.abstraction.*;

public class AbstractApp {
    public static void main(String[] args) {

        Animal[] ary = new Animal[10];

        Animal animal = new SuperMan();

        Flyer superM = new SuperMan();
        animal.eating("밥");

    }
}
