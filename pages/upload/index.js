import { useState } from 'react';
import { azureUploadFile } from '../../utils/blobFunctions';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
        alert('Please select a file first!');
        return;
    }
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:7071/api/upload_contacts_csv', { // This should be the URL to your Azure Function
            method: 'POST',
            body: formData,
        });
        console.log(response);
        if (response.ok) {
            console.log('File uploaded successfully');
            // alert('File uploaded successfully');
        } else {
            throw new Error('File upload failed');
        }
    } catch (error) {
        console.error('Error uploading file:', error);
        // alert('Error uploading file: ' + error.message);
    }
  };
  return (
    <div className="upload-container">
      <h1>Upload</h1>
      <p>Upload your files here.</p>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  );
};

export default Upload;
