package features.blogs.domain.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.AllArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class BlogResponseDTO {

    private int status;
    private String message;

    /////////////////////////
    private Integer blogId;
    private String title, content, email;
    private Integer viewCnt;

}
