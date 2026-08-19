package features.oop.util;

public enum Flag {
    STUDENT(1),
    TEACHER(2),
    MANAGER(3);

    private final int flag;

    // 생성자 이름을 Enum 명과 동일하게 Flag로 수정
    private Flag(int flag) {
        this.flag = flag;
    }

    public int getFlag() {
        return this.flag;
    }
}