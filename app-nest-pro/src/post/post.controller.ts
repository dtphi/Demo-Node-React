import { Controller, Get } from '@nestjs/common';

@Controller()
export class PostController {
    @Get('/post')
    getPost (): string {
        return 'pố'
    }
}
