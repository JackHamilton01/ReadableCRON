function sortHistory(history) {
    return [...history].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
}

export function getHistory() {
    try {
        const rawData = localStorage.getItem('myLocalData');
        return rawData ? sortHistory(JSON.parse(rawData)) : [];
    } catch (e) {
        localStorage.clear();
        return [];
    }
}

export function saveToHistory(expression, description) {
    const history = getHistory();

    const exists = history.find((item) => item.expression === expression);

    if (!exists) {
        history.unshift({ expression, description, timestamp: Date.now() });
        const limitedHistory = history.slice(0, 10);
        localStorage.setItem('myLocalData', JSON.stringify(limitedHistory));
    }
}