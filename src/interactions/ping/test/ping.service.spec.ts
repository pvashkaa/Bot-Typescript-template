import { CommandInteraction } from "discord.js";
import { PingService } from "../ping.service";

describe(`Проверка задержки бота командой`, () => {
  const mockInteraction: CommandInteraction = {
    reply: jest.fn(),
    client: {
      ws: Number,
    },
  } as unknown as CommandInteraction;

  test(`должно вызвать сервис пинга`, async () => {
    const service = new PingService(mockInteraction);
    await service.generateEmbed();
  });
});
