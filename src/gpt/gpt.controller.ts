import { Body, Controller, Options, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrthographyDto } from './dtos';
@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}
  @Post('check')
  check(@Body() orthographyDto: OrthographyDto) {
    return this.gptService.orthographyCheck(orthographyDto);
  }

  @Options('check')
  ok(@Body() orthographyDto: OrthographyDto) {
    return `<h1>ok</h1>`;
  }
}
