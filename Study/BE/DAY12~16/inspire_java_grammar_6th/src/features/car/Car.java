package features.car;

public class Car {
    private String brand;
    private String model;

    public Car() {
        this.brand = "아우디";
    }

    public Car(String brand) {
        this.brand = brand;
    }

    public Car(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String carInfo() {
        return brand + "브랜드의 모델은 : " + model;
    }
    // public String brand;
    // public String model;

    // public Car() {

    // }

    // /*
    // * constructro(생성자)
    // * - 반환타입이 void 아니고 없다.
    // * - 메서드의 이름이 클래스의 이름과 동일하다.
    // * - 인스턴스 소유가 아니므로
    // * - 일반 메서드처럼 호출되어질 수 없다.
    // * - 반드시 new 연산자 뒤에서만 호출되어야 함
    // */
    // public Car(String brand) {
    // this.brand = brand;
    // }

    // public Car(String brand, String model) {
    // this.brand = brand;
    // this.model = model;
    // }

}
