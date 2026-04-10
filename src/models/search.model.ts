import { Department } from "./document.model";
export interface RetrievedChunk{
    chunkId: string;
    documentId: string;
    documentName: string;
    department: string;
    chunkIndex: number;
    content: string;
    score: number;
    semanticScore?: number;
    keywordScore?: number;
}
export interface SearchResponse {
    query: string;
    answer: string;
    relatedDocuments: {
        documentId:  string;
        documentName: string;
        department: Department;
        content: string;
    }[];
    retrievedChunks: RetrievedChunk[];
}