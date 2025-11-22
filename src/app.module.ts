import { ArticlesModule } from '@modules/articles/articles.module';
import { Module } from '@nestjs/common';
import { PrismaModule } from '@prisma/prisma.module';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
    imports: [PrismaModule, ArticlesModule, CommentsModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
