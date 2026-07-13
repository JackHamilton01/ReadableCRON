export function getHistory() {
    try {
        const rawData = localStorage.getItem('myLocalData');
        // If data is null or invalid, return an empty array
        return rawData ? JSON.parse(rawData) : [];
    } catch (e) {
        localStorage.clear();
    }
}

export function saveToHistory(expression, description) {
    const history = getHistory();

    // Only add if it doesn't already exist to avoid duplicates
    const exists = history.find(item => item.expression === expression);
    
    if (!exists) {
        history.push({ expression, description, timestamp: Date.now() });
        localStorage.setItem('myLocalData', JSON.stringify(history));
    }
}