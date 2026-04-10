export type Department =
  | 'HR'
  | 'Finance'
  | 'Legal'
  | 'IT'
  | 'Operations'
  | 'General';

export type IndexingStatus =
  | 'UPLOADED'
  | 'PROCESSING'
  | 'INDEXED'
  | 'FAILED';


export interface DocumentRecord {
    id: string;
    originalName: string;
    storedFileName: string;
    mimeType: string;
    size: number;
    department: Department;
    tags: string[];
    uploadedAt: string;
    status: IndexingStatus;
    extractedTextLength?: number;
    chunkCount?: number;
    errorMessage?: string;
}