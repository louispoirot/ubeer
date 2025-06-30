import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
    private client: RedisClientType;

    async onModuleInit() {
        this.client = createClient({
            username: 'default',
            password: process.env.REDIS_PASSWORD,
            socket: {
                host: process.env.REDIS_HOST,
                port: Number(process.env.REDIS_PORT),
            },
        });

        this.client.on('error', (err) => console.error('Redis Client Error', err));

        await this.client.connect();
        console.log('Redis connected');
    }

    async onModuleDestroy() {
        if (this.client) {
            await this.client.quit();
            console.log('Redis connection closed');
        }
    }

    getClient(): RedisClientType {
        return this.client;
    }

    // Méthode test pour vérifier que tout fonctionne
    async testConnection(): Promise<void> {
        await this.client.set('foo', 'bar');
        const result = await this.client.get('foo');
        console.log('Test Redis foo:', result); // Doit afficher "bar"
    }

    async getOrSetCache<T>(key: string, ttlSeconds: number, fetchFunction: () => Promise<T>): Promise<T> {
        const cached = await this.client.get(key);

        if (cached) {
            return JSON.parse(cached);
        }

        const freshData = await fetchFunction();
        await this.client.set(key, JSON.stringify(freshData), {
            EX: ttlSeconds,
        });

        return freshData;
    }

    async deleteKey(key: string): Promise<void> {
        await this.client.del(key);
    }
}
