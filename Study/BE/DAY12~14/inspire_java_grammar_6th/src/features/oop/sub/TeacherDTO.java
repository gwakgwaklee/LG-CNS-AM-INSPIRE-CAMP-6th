package features.oop.sub;

import features.oop.sup.PersonDTO;

public class TeacherDTO extends PersonDTO {

    private String tsn;

    public TeacherDTO() {
        System.out.println("기본 생성자");
    }

    public TeacherDTO(String name, int age, String address, String tsn) {
        super(name, age, address);
        System.out.println("debug >>>> 티처 생성자");
        this.tsn = tsn;
    }

    public String getTsn() {
        return tsn;
    }

    @Override
    public String personInfo() {
        return super.personInfo() + "," + " tsn = " + tsn;
    }

}
