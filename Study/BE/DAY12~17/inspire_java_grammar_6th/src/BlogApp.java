import features.blogs.domain.dto.BlogRequestDTO;

public class BlogApp {
    public static void main(String[] args) {
        // System.out.println(">>>> new 연산자를 이용한 객체생성");
        // // BlogRequestDTO request = new BlogRequestDTO(1, "title", "content",
        // "email");

        System.out.println();
        System.out.println();

        BlogRequestDTO request = BlogRequestDTO.builder()
                .id(1)
                .title("title")
                .content("content")
                .email("email")
                .build();

        System.out.println("title : " + request.getTitle());
        ;
    }
}
