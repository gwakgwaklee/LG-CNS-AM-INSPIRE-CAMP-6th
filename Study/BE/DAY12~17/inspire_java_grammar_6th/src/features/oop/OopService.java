package features.oop;

import features.oop.sub.ManagerDTO;
import features.oop.sub.StudentDTO;
import features.oop.sub.TeacherDTO;
import features.oop.sup.PersonDTO;
import features.oop.util.Flag;

public class OopService {

    private PersonDTO[] ary;
    private int idx;

    public OopService() {
        ary = new PersonDTO[10];
        idx = 0;
    }

    // 매개변수의 다형성!
    // 결국 manager, student, teacher은 persion에서 시작한 사람이기 때문에!
    public void setAry(PersonDTO per) {
        ary[idx++] = per;
    }

    // copy (shallow Copy, deep copy)
    public PersonDTO[] getAry() {
        return ary;
    }

    /*
     * CRUD
     * params : flag, name, age, address, domm(ssn subject)
     * 1 -> Student, 2 -> Teacher, -> Manager
     * Person() 매개변수로 전달된 값을 가지고 타입에 맞게 객체를 생성하고 배열에 담는 역함
     * 
     */

    public void makePerson(Flag flag, String name, int age, String address, String comm) {
        System.out.println("debug >>>> enum flag : " + flag);
        System.out.println("debug >>>> enum flag : " + flag.getFlag());

    }

    public PersonDTO findPerson(String name) {

        for (int i = 0; i < idx; i++) {
            // 배열과 이름 null 검사를 진행하고
            // 문제가 없는 경우에만 비교작업 진행한다.
            if (ary[i] != null && ary[i].getName() != null && ary[i].getName().equals(name)) {
                return ary[i];
            }
        }
        return null;
    }
}
