import cronstrue from 'https://esm.run/cronstrue';

export function describeCronExpression(cronExpression) {
    try {
        return cronstrue.toString(cronExpression, {
            throwExceptionOnParseError: true
        })
    } catch (err) {
        console.error("Invalid CRON expression", err);
    }
}