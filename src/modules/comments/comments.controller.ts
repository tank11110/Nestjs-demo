import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentRequestDto } from './dto/request.dto';
import { CreateCommentResponseDto, GetCommentListResponseDto } from './dto/response.dto';

@Controller('articles/:articleId/comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Get()
    async getComments(
        @Param('articleId', ParseIntPipe) articleId: number,
    ): Promise<GetCommentListResponseDto> {
        const comments = await this.commentsService.findAll(articleId);

        return { data: comments };
    }

    @Post()
    async create(
        @Param('articleId', ParseIntPipe) articleId: number,
        @Body() dto: CreateCommentRequestDto,
    ): Promise<CreateCommentResponseDto> {
        const comment = await this.commentsService.create(articleId, dto);

        return { data: comment };
    }
}
