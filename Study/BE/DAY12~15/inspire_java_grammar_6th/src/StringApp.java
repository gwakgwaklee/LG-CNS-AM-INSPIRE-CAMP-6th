public class StringApp {
    public static void main(String[] args) {
        String str01 = "lgcns";
        String str02 = "lgcns";

        if (str01 == str02) {
            System.out.println("str01과 str02는 같다.");
        } else {
            System.out.println("str01과 str02는 다르다");
        }

        String str1 = new String("lgcns");
        String str2 = new String("lgcns");
        if (str1 == str2) {
            System.out.println("str01과 str02는 같다.");
        } else {
            System.out.println("str01과 str02는 다르다");
        }

        StringBuffer sb1 = new StringBuffer(str01);
        sb1 = sb1.append("!!");
        String str = sb1.toString();

    }
}
