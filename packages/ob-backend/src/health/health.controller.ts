import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get('')
  async healthCheck() {
    return 'ok';
  }
}
