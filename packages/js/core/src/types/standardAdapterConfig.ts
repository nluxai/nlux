export type OutputFormat = 'text' | 'audio' | 'html' | 'image' | 'video' | 'file';
export type InputFormat = 'text';

export type AdapterEncodeFunction<OutboundPayload> = (input: string) => Promise<OutboundPayload>;
export type AdapterDecodeFunction<InboundPayload> = (output: InboundPayload) => Promise<string>;

export type StandardAdapterInfo = Readonly<{
    id: string;
    capabilities: Readonly<{
        textChat: boolean;
        audio: boolean;
        fileUpload: boolean;
        replyToSingleMessage: boolean;
    }>;
    readonly remote: Readonly<{
        url: string;
    }>,
    inputFormats: ReadonlyArray<InputFormat>;
    outputFormats: ReadonlyArray<OutputFormat>;
}>;

export type StandardAdapterConfig<InboundPayload, OutboundPayload> = Readonly<{
    encodeMessage: AdapterEncodeFunction<OutboundPayload>;
    decodeMessage: AdapterDecodeFunction<InboundPayload>;
}>;
