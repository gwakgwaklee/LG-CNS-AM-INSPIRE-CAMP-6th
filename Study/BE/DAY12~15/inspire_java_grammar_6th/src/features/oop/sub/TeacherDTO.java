package features.oop.sub;

import features.oop.sup.PersonDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class TeacherDTO extends PersonDTO {

    private String subject;

    // public TeacherDTO() {
    // System.out.println("기본 생성자");
    // }

    public TeacherDTO(String name, int age, String address, String subject) {
        super(name, age, address);
        System.out.println("debug >>>> 티처 생성자");
        this.subject = subject;
    }

    // public String getSubject() {
    // return subject;
    // }

    @Override
    public String personInfo() {
        return super.personInfo() + "," + " tsn = " + subject;
    }

}
