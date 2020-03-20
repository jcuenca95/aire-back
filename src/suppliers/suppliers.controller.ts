import { Controller } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { Suppliers } from './suppliers.entity';
import { CrudController, Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: Suppliers,
  },
})
@Controller('suppliers')
export class SuppliersController implements CrudController<Suppliers> {
  constructor(public service: SuppliersService) {}
}
