import { IsString } from 'class-validator';

export class CreateArticleRequestDto {
    @IsString()
    author: string;

    @IsString()
    title: string;

    @IsString()
    content: string;
}
