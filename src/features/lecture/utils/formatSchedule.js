export const formatSchedule = (schedule) => {
    try {
        const obj = typeof schedule === 'string'
            ? JSON.parse(schedule)
            : schedule;

        if (obj && typeof obj === 'object') {
            return Object.entries(obj)
                .map(([day, times]) => `${day}: ${Array.isArray(times) ? times.join(', ') : times}`)
                .join(' / ');
        }
    } catch {
        return schedule || '';
    }
    return '';
};