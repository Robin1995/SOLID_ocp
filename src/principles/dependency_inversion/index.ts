import fs from 'fs';

// Abstraction Layer
interface Logger {
    logMessage(message: string): void;
}

// Low Level Module #1
class FileLogger implements Logger {
    logMessage(message: string): void {
        fs.writeFileSync('somefile.txt', message);
    }
}

// Low Level Module #2
class ConsoleLogger implements Logger {
    logMessage(message: string): void {
        console.log(message);
    }
}

// High Level Module
class MessageProcessor {
    // Resolved: The high level module is now loosely coupled with the low level logger modules.
    private _logger: Logger;

    constructor (logger: Logger) {
        this._logger = logger;
    }

    processMessage (message: string): void {
        this._logger.logMessage(message);
    }
}

const fileLogger = new FileLogger();
const consoleLogger = new ConsoleLogger();

// Now the logging mechanism can be easily replaced
const messageProcessor = new MessageProcessor(consoleLogger);
messageProcessor.processMessage('Hello');