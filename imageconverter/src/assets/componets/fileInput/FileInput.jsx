import React from 'react';
import "../fileInput/fileInput.css"

function FileInput({ onFilesSelected }) {
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        onFilesSelected(files);
    };

    return (
        <div id='inputBox'>
            <label htmlFor="image">Select Image</label>
            <input
                type="file"
                accept="image/png"
                multiple
                hidden
                id='image'
                onChange={handleFileChange}
            />
        </div>
    );
}

export default FileInput;
