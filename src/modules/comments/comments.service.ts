import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateCommentRequestDto } from './dto/request.dto';
import { CommentResponseDto } from './dto/response.dto';

@Injectable()
export class CommentsService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(articleId: number) {
        const article = await this.prisma.article.findUnique({
            where: { id: articleId },
            select: { id: true },
        });

        if (!article) {
            throw new NotFoundException(`Article ${articleId} not found`);
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        return (await this.prisma.comment.findMany({
            where: { articleId },
            select: {
                id: true,
                author: true,
                content: true,
                createdAt: true,
            },
            orderBy: { id: 'desc' },
        })) as CommentResponseDto[];
    }

    async create(articleId: number, dto: CreateCommentRequestDto) {
        const article = await this.prisma.article.findUnique({
            where: { id: articleId },
            select: { id: true },
        });

        if (!article) {
            throw new NotFoundException(`Article ${articleId} not found`);
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        return (await this.prisma.comment.create({
            data: {
                articleId,
                author: dto.author,
                content: dto.content,
            },
            select: {
                id: true,
                author: true,
                content: true,
                createdAt: true,
            },
        })) as CommentResponseDto;
    }
}
