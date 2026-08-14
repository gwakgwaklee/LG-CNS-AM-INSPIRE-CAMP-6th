import features.blogs.domain.dto.BlogResponseDTO;
import features.blogs.service.BlogService;

public class ArrApp {
    public static void main(String[] args) {
        ;
        BlogResponseDTO[] blogAry = new BlogResponseDTO[10];

        BlogResponseDTO response = BlogResponseDTO.builder()
                .status(201)
                .message("성공입니다.")
                .build();

        blogAry[0] = response;
        blogAry[1] = response;
        blogAry[2] = response;

        BlogResponseDTO[] resultAry = BlogService.builder().build().blogs();

    }
}