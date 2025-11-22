export class CommentResponseDto {
    id: number;
    author: string;
    content: string;
    createdAt: Date;
}

export class GetCommentListResponseDto {
    data: CommentResponseDto[];
}

export class CreateCommentResponseDto {
    data: CommentResponseDto;
}
