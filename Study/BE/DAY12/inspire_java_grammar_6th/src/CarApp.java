import features.car.Car;

public class CarApp {

    public static void main(String[] args) {
        Car audi = new Car();
        audi.setBrand("아우디");
        System.out.println("brand : " + audi.getBrand());

        //// 생성자 활용
        Car bmw = new Car("BMW");
        System.out.println("brand : " + bmw.getBrand());

        System.out.println();
        Car benz = new Car("BENZ", "C200");
        System.out.println("brand: " + benz.getBrand());
        System.out.println("model : " + benz.getModel());

        benz.carInfo();
    }
}
