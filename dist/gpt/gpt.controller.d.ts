import { GptService } from './gpt.service';
import { OrthographyDto } from './dtos';
export declare class GptController {
    private readonly gptService;
    constructor(gptService: GptService);
    check(orthographyDto: OrthographyDto): Promise<any>;
}
