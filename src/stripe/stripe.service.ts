import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StripeService {
    private stripe: Stripe;

    constructor(private configService: ConfigService) {
        this.stripe = new Stripe(configService.get('STRIPE_SECRET_KEY'), {
        });
    }

    async createCheckoutSession(items: { name: string; amount: number; quantity: number }[], orderId: number) {
        const session = await this.stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: items.map((item) => ({
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.amount,
                },
                quantity: item.quantity,
            })),
            success_url: `${this.configService.get('FRONTEND_URL')}/payment-success?orderId=${orderId}`,
            cancel_url: `${this.configService.get('FRONTEND_URL')}/payment-cancelled?orderId=${orderId}`,
            metadata: {
                orderId: orderId.toString(),
            },
        });

        return { url: session.url };
    }
}