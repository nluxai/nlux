import {AiTaskRunner, DataTransferMode} from '@nlux/core';

export type ChatAdapterOptions = {
    /**
     * The URL of the NLBridge endpoint.
     *
     */
    url: string;

    /**
     * The data transfer mode to use when communicating with NLBridge.
     * If not provided, the adapter will use `stream` mode.
     */
    dataTransferMode?: DataTransferMode;

    /**
     * The context ID to use when communicating with NLBridge.
     * Optional. If not provided, the adapter will not use a context.
     */
    contextId?: string;

    /**
     * A task runner function that can be used to execute tasks returned by AI.
     */
    taskRunner?: AiTaskRunner;
};
