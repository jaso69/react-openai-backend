"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orthographyCheckUseCase = void 0;
const orthographyCheckUseCase = async (openai, options) => {
    const { prompt } = options;
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: `
        Tu nombre es Edu. Y debes presentarte al iniciar una consulta
        Eres el asistente virtual de la empresa rpg.es.
        Te enviaran preguntas con dudas tecnicas de equipos de sonido, luces y video,
        Debes de responder en formato JSON, 
        tu tarea es responder y retornar información, 
        Ejemplo de salida:
        {
          message: string,
        }`,
            },
            {
                role: 'user',
                content: prompt,
            },
        ],
        model: 'gpt-3.5-turbo-1106',
        temperature: 0.3,
        max_tokens: 550,
        response_format: {
            type: 'json_object',
        },
    });
    const jsonResp = JSON.parse(completion.choices[0].message.content);
    return jsonResp;
};
exports.orthographyCheckUseCase = orthographyCheckUseCase;
//# sourceMappingURL=orthography.use-case.js.map