import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateArticleRequestDto } from './dto/request.dto';

@Injectable()
export class ArticlesService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.article.findMany({
            select: {
                id: true,
                author: true,
                title: true,
                createdAt: true,
            },
            orderBy: { id: 'desc' },
        });
    }

    async findOne(id: number) {
        const article = await this.prisma.article.findUnique({
            where: { id },
            select: {
                id: true,
                author: true,
                title: true,
                content: true,
                createdAt: true,
            },
        });

        if (!article) {
            throw new NotFoundException(`Article ${id} not found`);
        }

        return article;
    }

    async create(dto: CreateArticleRequestDto) {
        return this.prisma.article.create({
            data: {
                author: dto.author,
                title: dto.title,
                content: dto.content,
            },
            select: {
                id: true,
                author: true,
                title: true,
                content: true,
                createdAt: true,
            },
        });
    }
}
