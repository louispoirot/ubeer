import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
    constructor(private readonly stripeService: StripeService) { }

    @Post('checkout')
    async checkout(@Body() body: { items: any[], orderId: number }) {
        return this.stripeService.createCheckoutSession(body.items, body.orderId);
    }
}