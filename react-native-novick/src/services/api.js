export const mockMessages = [
    {
        "incoming": true,
        "message" : "Hi, Vladimir."
    },
    {
        "incoming": false,
        "message" : "Hi, John."
    },
    {
        "incoming": true,
        "message" : "When we will learn real data fetching?"
    },
    {
        "incoming": false,
        "message" : "Let's get the basic first. We need to understand styling and handling inputs right? After all you want not only to receive but send messages too right?"
    }
];

export const getMockData = () => (
    new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000))
);