import { BlobServiceClient } from '@azure/storage-blob';

const azureUploadFile = async (file) => {
  const AZURE_STORAGE_CONNECTION_STRING =
    process.env.NEXT_PUBLIC_AZURE_STORAGE_CONNECTION_STRING;
  const containerName = 'revxdataupload/arriving_files';

  console.log(AZURE_STORAGE_CONNECTION_STRING);
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    AZURE_STORAGE_CONNECTION_STRING
  );
  const containerClient = blobServiceClient.getContainerClient(containerName);

  const blobClient = containerClient.getBlockBlobClient(file.name);
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  try {
    const uploadBlobResponse = await blobClient.uploadBrowserData(
      file,
      options
    );
    console.log(
      `Upload block blob ${file.name} successfully`,
      uploadBlobResponse.requestId
    );
  } catch (err) {
    console.error('Error uploading file to Azure Blob Storage:', err.message);
  }
};
export { azureUploadFile };
