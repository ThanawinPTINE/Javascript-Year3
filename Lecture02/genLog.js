function createLogEntry(message) {
    const now = new Date();
    const timestamp = now.toLocaleDateString('th-TH');

    const eventID = Math.random().toString(16).substring(2, 10).toUpperCase();
    
    const logMessage = message.toUpperCase();

    return `[${timestamp}] [${eventID}] - [${logMessage}]`;
}

const log = createLogEntry("User login Successful.");
console.log(log);