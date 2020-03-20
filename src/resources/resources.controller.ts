import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Resources } from './resources.entity';
import { ResourcesService } from './resources.service';

@Crud({
  model: {
    type: Resources,
  },
})
@Controller('resources')
export class ResourcesController implements CrudController<Resources> {
  constructor(public service: ResourcesService) {}
}
