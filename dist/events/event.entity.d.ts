export declare enum Priority {
    DEBUG = 0,
    INFO = 1,
    ERROR = 2,
    WTF = 3
}
export declare class LogEvent {
    id: string;
    priority: Priority;
    tag: string;
    content: string;
    created: Date;
}
