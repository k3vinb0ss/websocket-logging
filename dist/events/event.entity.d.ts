export declare enum Priority {
    DEBUG = 1,
    INFO = 2,
    ERROR = 3,
    WTF = 4
}
export declare class LogEvent {
    id: string;
    priority: Priority;
    tag: string;
    content: string;
    created: Date;
}
