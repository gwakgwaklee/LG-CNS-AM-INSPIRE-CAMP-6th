
package features.game;

import java.util.Scanner;
import java.math.*;
import java.sql.Time;

public class GuestGame {

    private GuestGameData data;

    Scanner scan = new Scanner(System.in);
    StringBuffer sb = new StringBuffer();

    /*
     * Q) 숫자를 맞추는 게임
     * - 난수 1 ~ 100을 만들고
     * - 사용자에게 입력 받는다 기회는 10번
     * 
     * - 카운트를 진행하고 10번안에 성공하면
     * - 성공 했습니다.
     * - 실패 시 실패했습니다.
     * - 출력하도록
     */

    public void sleep2Sec() {
        try {
            Thread.sleep(2000); // 2초
        } catch (InterruptedException e) {
            // 무시
        }
    }

    public GuestGame() {

        System.out.println("==========GUEST GAME========== ");

    }

    public void GuestGameRun() {
        while (true) {
            // 새로운 게임마다 인스턴스/데이터를 재생성
            data = new GuestGameData(0, ((int) (Math.random() * 100) + 1));

            System.out.print("게임을 시작하시려면 Enter를 눌러주세요!!!\n");
            scan.nextLine();
            GuestIntro();

            System.out.println("2초 후 재시작하겠습니다...\n\n\n\n");
            sleep2Sec();
        }
    }

    public void GuestIntro() {
        System.out.println("안녕하세요. 사용자님 게임을 시작하겠습니다.");
        System.out.println("이 게임은 1 ~ 100 사이의 숫자를 맞추는 게임입니다.\n");
        System.out.println("만약에 중간에 종료를 원하시면 Ctrl+C를 눌러주세요.");
        System.out.println("게임이 동작하는 방식을 골라주세요! 1. for문\t2. while\t3. do-while");
        System.out.print("고르시면 1~3번을 입력하시고 Enter를 눌러주세요!!! : ");

        boolean isRunnig = true;
        int n = 0;
        while (isRunnig) {
            n = getValidNumber(1, 3);
            switch (n) {
                case 1 -> {
                    gameFor();
                    isRunnig = false;
                }
                case 2 -> {
                    gameWhile();
                    isRunnig = false;
                }
                case 3 -> {
                    gameDoWhile();
                    isRunnig = false;
                }
            }
        }
    }

    // 유저에게 숫자를 입력받는다.
    // 숫자, 범위가 맞는지 검증 후 리턴해주는 메서드
    public int getValidNumber(int min, int max) {
        int n = 0;
        boolean isValid = false;

        while (!isValid) {
            System.out.print("\n입력 하세요 >>>>");
            if (scan.hasNextInt()) {
                n = scan.nextInt();

                if (n >= min && n <= max) {
                    isValid = true;
                } else {
                    System.out.printf("범위를 벗어났습니다. %d~%d 사이 숫자를 입력하세요.\n", min, max);
                }
            } else {
                System.out.println("문자가 아닌 숫자를 입력해주세요.");
                scan.next(); // 버퍼 비우기
            }
        }
        return n;
    }

    // 공통 메시지
    public void firstStepMessage() {
        System.out.println("\n\n난수가 설정되었습니다.");
        System.out.println("숫자는 1 ~ 100의 램덤 숫자이고 기회는 총 10번입니다.");
        System.out.println("방법은 여러분이 맞추실 숫자를 입력하시고 엔터를 눌러주시면됩니다.");
        System.out.println("시작하겠습니다. 승리를 기원합니다!!!");
    }

    // 입력 받은 숫자를 체킹하는 단계
    public boolean checkingNumber(int n, GuestGameData data) {
        data.addUserCount();
        int count = data.getUserCount();
        if (n == data.getRandomNumber()) {

            System.out.printf("대단해요!!! %d번만에 맞추셨어요\n\n", count);
            return true;
        } else {

            System.out.printf("아쉬워요 틀리셨습니다 ㅠㅠ\n현재 %d번 도전하셨어요.\n\n", count);
            return false;
        }
    }

    public void gameFor() {

        firstStepMessage();

        int userNumber = 0;
        for (int i = 0; i < 10; i++) {

            userNumber = getValidNumber(1, 100);

            // 종료조건
            if (checkingNumber(userNumber, data)) {
                return;
            }
        }
        System.out.println("실패하셨습니다.\n다시 도전해주세요.");

    }

    public void gameWhile() {

        while (data.getUserCount() < 10) {
            firstStepMessage();

            int userNumber = 0;
            for (int i = 0; i < 10; i++) {
                userNumber = getValidNumber(1, 100);

                // 종료조건
                if (checkingNumber(userNumber, data)) {
                    return;
                }
            }
            System.out.println("실패하셨습니다.\n다시 도전해주세요.");
        }
    }

    public void gameDoWhile() {
        int userNumber = 0;
        do {

            firstStepMessage();

            userNumber = getValidNumber(1, 100);

            // 종료조건 정답이면!
            if (checkingNumber(userNumber, data)) {
                return;
            }

        } while (data.getUserCount() < 10);

        System.out.println("실패하셨습니다.\n다시 도전해주세요.");

    }
}
