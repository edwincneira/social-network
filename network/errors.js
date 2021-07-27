import { error } from "./response";

export function errors(err, req, res, next) {
    console.error('[error]', err)
    const message = err.message || "Error interno"
    const status = err.statusCode || 500;
    error(req, res, message, status)
}