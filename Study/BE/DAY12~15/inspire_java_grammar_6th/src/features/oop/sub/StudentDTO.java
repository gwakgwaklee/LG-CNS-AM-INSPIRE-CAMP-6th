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
public class StudentDTO extends PersonDTO {

    private String ssn;

    // public StudentDTO() {

    // }

    public StudentDTO(String name, int age, String address, String ssn) {
        super(name, age, address);
        System.out.println("StudentDTO 출력");
        this.ssn = ssn;
    }

    // public String getSsn() {
    // return ssn;
    // }

    // public void setSsn(String ssn) {
    // this.ssn = ssn;
    // }

    @Override
    public String personInfo() {
        return super.personInfo() + "," + " ssn = " + ssn;
    }

}
