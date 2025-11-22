import { IsString } from 'class-validator';

export class CreateCommentRequestDto {
    @IsString()
    author: string;

    @IsString()
    content: string;
}
