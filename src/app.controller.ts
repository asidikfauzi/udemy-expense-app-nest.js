import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get('')
  getAllIncomeReports() {
    return "Hallo Bela";
  }
  @Get(':id')
  getReportById() {
    return "Hallo Adel";
  }

  @Post()
  createReport() {
    return "Created";
  }

  @Put(':id')
  updateReport(){
    return "Updated";
  }

  @Delete(':id')
  deleteReport(){
    return "Deleted";
  }

}
