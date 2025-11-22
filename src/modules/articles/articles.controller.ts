import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleRequestDto } from './dto/request.dto';
import { CreateArticleResponseDto, GetArticleListResponseDto } from './dto/response.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {}

    @Get()
    async getArticles(): Promise<GetArticleListResponseDto> {
        const articles = await this.articlesService.findAll();

        return { data: articles };
    }

    @Get(':id')
    async getArticle(@Param('id', ParseIntPipe) id: number) {
        const article = await this.articlesService.findOne(id);

        return { data: article };
    }

    @Post()
    async create(@Body() dto: CreateArticleRequestDto): Promise<CreateArticleResponseDto> {
        const article = await this.articlesService.create(dto);

        return { data: article };
    }
}
