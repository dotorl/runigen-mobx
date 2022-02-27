import * as fruitHandlers from '@mocks/handlers/fruit';
import * as loginHandlers from '@mocks/handlers/login';

export const handlers = [...Object.values(fruitHandlers), ...Object.values(loginHandlers)];
