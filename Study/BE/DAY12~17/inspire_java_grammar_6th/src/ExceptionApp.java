import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import features.exception.ExceptionDemo;
import features.util.InspireException;

public class ExceptionApp {
    public static void main(String[] args) {
        System.out.println("debug >>>> main start");

        // System.out.println("debug >>>> runtime excption ~ ");
        // String[] strAry = { "jslim", "inspire", "lgcns" };

        // try {
        // for (int idx = 0; idx <= strAry.length; idx++) {
        // System.out.println(strAry[idx]);
        // }
        // } catch (ArrayIndexOutOfBoundsException e) {
        // e.printStackTrace();
        // } finally {
        // System.out.println("debug >>>> 예외발생 여부와 상관 없이 수행");
        // }

        // System.out.println("debug >>>> compile exception");

        // // input stream : 데이터가 입력되는 통로
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // String line = null;
        // try {
        // System.out.print("메시지를 입력하세요 : ");
        // line = br.readLine();
        // } catch (IOException e) {
        // e.printStackTrace();
        // } finally {
        // System.out.println(line);
        // }

        System.out.println("debug >>>> user exception end throws ");

        ExceptionDemo demo = new ExceptionDemo();

        try {
            demo.first(-1);
        } catch (InspireException e) {
            e.printStackTrace();
        }

        System.out.println("debug >>>> main end");
    }
}
