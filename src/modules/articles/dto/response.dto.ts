export class ArticleListItemDto {
    id: number;
    author: string;
    title: string;
    createdAt: Date;
}

export class ArticleResponseDto {
    id: number;
    author: string;
    title: string;
    content: string;
    createdAt: Date;
}

export class GetArticleResponseDto {
    data: ArticleResponseDto;
}

export class GetArticleListResponseDto {
    data: ArticleListItemDto[];
}

export class CreateArticleResponseDto {
    data: ArticleResponseDto;
}
