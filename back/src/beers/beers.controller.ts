import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('beers')
export class BeersController {
    /*
    POST /beers
    PATCH /beers/:beer_id
    DELETE /beers/:beer_id
    */

    @Get() // GET /beers
    findAll() {
        return []
    }

    @Get(':id') // GET /beers/:id
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post() // POST /beers
    create(@Body() beer: {}) {
        return beer
    }
}
