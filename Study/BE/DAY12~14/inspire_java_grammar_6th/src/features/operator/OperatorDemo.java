package features.operator;

import features.operator.OperatorDemo;
import features.blogs.domain.dto.BlogRequestDTO;
import features.blogs.domain.dto.BlogResponseDTO;
import java.math.*;

public class OperatorDemo {
    public OperatorDemo() {
        System.out.println("생성자입니다!");
    }

    // 반환type x , 매개변수 x
    public void operator() {
        System.out.println("연산자들!");
    }

    // 반환타입 o, 매개변수 o
    public BlogResponseDTO register(String title, String content, String email) {
        System.out.println(">>>>반환타입O, 매개변수 O");

        if (email == "jslim9413@naver.com") {
            return new BlogResponseDTO(201, "OK");
        } else {
            return new BlogResponseDTO(400, "error");
        }
    }

    public BlogResponseDTO register(BlogRequestDTO response) {
        if (response.getEmail() == "jslim9413@naver.com") {
            return new BlogResponseDTO(201, "OK");
        } else {
            return new BlogResponseDTO(400, "error");
        }
    }

    /*
     * 매개변수 number
     * 1. 금도끼 1이라고하면 -> 산신령 대답하길 "거짓말";
     * 2. 은도끼 2이라고하면 -> 산신령 대답하길 "또 거짓말";
     * 3. 쇠도끼 3이라고하면 -> 산신령 대답하길 "정직하구나";
     */
    public String ifWoodMain(int number) {

        // switch (number) {
        // case 1:
        // return "거짓말이구나";
        // case 2:
        // return "또 거짓말이구나";
        // case 3:
        // return "정직하구나";
        // default:
        // return "그건 조건에 없다!";
        // }

        // lambda
        String result = null;
        switch (number) {
            case 1 -> result = "거짓말이구나";
            case 2 -> result = "또 거짓말이구나";
            case 3 -> result = "정직하구나";
            default -> result = "그건 조건에 없다!";

        }
        return result;

    }

    public int sumNumber(int start, int end) {
        int result = 0;
        int temp = 0;
        // 누군가 악의적인 0의 값을 넣어도 작동이되도록 함.
        if (start > end) {
            temp = start;
            start = end;
            end = temp;
        }

        for (int data = start; data <= end; data++) {
            result += data;
        }
        return result;
    }

    /*
     * Q)
     * - 1 ~ 100 사이의 난수를 발생시킬예정
     * casting
     * 1 ~ 해당 난수까지의 누적합을 계산
     * hint)
     * static
     * arugument x ,
     * return type : int
     * method name : sumRandom
     */

    public int sumRandom() {
        int nan = (int) (Math.random() * 100) + 1;
        System.out.println("number : " + nan);

        int data = 1;
        int result = 0;
        while (data <= nan) {
            result += data;
            data++;
        }

        data = 0;
        result = 0;
        do {
            result += data;
            data++;
        } while (data <= nan);
        return result;
    }

    /*
     * format : %d, %s, %f
     * System.out,.printf()
     * 
     * - argument : int,
     * - return type : void
     * - method name : printGugudan
     */
    public void printGugudan(int num) {
        for (int idx = 1; idx <= 9; idx++) {
            System.out.printf("%d x %d = %d\t", num, idx, num * idx);
        }
    }

    public void gugudan() {
        for (int row = 2; row <= 9; row++) {

            System.out.println();

            for (int col = 1; col <= 9; col++) {
                System.out.printf("%d * %d = %d\t", row, col, (row * col));
            }
            System.out.println();
        }

    }

    public void popStr(String str) {
        System.out.println("debug >>>> params" + str);
        System.out.println("debug >>>> params" + str.length());
        System.out.println(str.charAt(0));

        for (int idx = str.length() - 1; idx >= 0; idx--) {
            System.out.print(str.charAt(idx));
        }
    }
}