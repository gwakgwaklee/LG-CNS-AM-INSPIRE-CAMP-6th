import features.blogs.domain.dto.BlogRequestDTO;
import features.blogs.domain.dto.BlogResponseDTO;
import features.operator.OperatorDemo;

public class OperatorApp {

    public static void main(String[] args) {
        OperatorDemo instance = new OperatorDemo();
        // instance.operator();

        // BlogResponseDTO response = instance.register("무사히", "앗",
        // "jslim9413@naver.com");
        // System.out.println(response.getStatus());
        // System.out.println(response.getMessage());

        // System.out.println();
        // BlogRequestDTO request = new BlogRequestDTO(1, "무사히", "앗",
        // "jslim9413@naver.com");
        // BlogResponseDTO res = instance.register(request);

        // System.out.println(res.getStatus());
        // System.out.println(res.getMessage());

        // String result = instance.ifWoodMain(3);
        // System.out.println(result);

        // int result = instance.sumNumber(1, 100);
        // System.out.println("number :" + result);
        // System.out.println(instance.sumRandom());

        instance.printGugudan(10);
        instance.gugudan();

        instance.popStr("inspire lgcns camp 6th");
    }

}