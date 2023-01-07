export type TPreviewData = { token: string }
export type TPageProps<T> = T & { preview: boolean; previewData: TPreviewData }
