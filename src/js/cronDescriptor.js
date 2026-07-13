// js/main.js
import { getDescription } from 'https://esm.run/cron-descriptor';

export function describeCronExpression(cronExpression) {
    try {
        return getDescription(cronExpression, {
            throwExceptionOnParseError: true,
            casing: "sentence"
        });
    } catch (err) {
        console.error("Invalid CRON expression", err);
    }
}