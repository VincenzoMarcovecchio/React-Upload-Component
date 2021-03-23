import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert, Icon, Button } from 'design-react-kit';

export const FileUploader = ({
  label = 'Seleziona File',
  accept,
  url,
  FILE_SIZE,
}) => {
  const fileInput = useRef(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [filesArray, setFilesArray] = useState([]);

  useEffect(() => {
    setFilesArray(Object.keys(selectedFile).map((key) => selectedFile[key]));
  }, [selectedFile]);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', filesArray);
  };

  const removeFile = (file) => {
    console.log(file);
    const removedFiles = [...filesArray].filter(
      (fileName) => fileName.name !== file
    );
    setFilesArray(removedFiles);
  };

  function returnFileSize(number) {
    if (number < 1024) {
      return number + 'bytes';
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + 'KB';
    } else if (number >= 1048576) {
      return (number / 1048576).toFixed(1) + 'MB';
    }
  }
  const handleFileInput = (e) => {
    try {
      if (e.target.files.size > FILE_SIZE)
        <Alert
          closeAriaLabel="Close"
          color="warning"
          fade
          isOpen
          tag="div"
          toggle={function noRefCheck() {}}
          transition={{
            appear: true,
            baseClass: 'fade',
            baseClassActive: 'show',
            enter: true,
            exit: true,
            in: true,
            mountOnEnter: false,
            onEnter: function noRefCheck() {},
            onEntered: function noRefCheck() {},
            onEntering: function noRefCheck() {},
            onExit: function noRefCheck() {},
            onExited: function noRefCheck() {},
            onExiting: function noRefCheck() {},
            tag: 'div',
            timeout: 150,
            unmountOnExit: true,
          }}
        >
          <strong>
            Attenzione: il file selezionato supera le dimensioni inizialmente
            preimpostate{' '}
          </strong>
        </Alert>;
      else setSelectedFile(e.target.files);
    } catch (error) {
      <Alert
        closeAriaLabel="Close"
        color="warning"
        fade
        isOpen
        tag="div"
        toggle={function noRefCheck() {}}
        transition={{
          appear: true,
          baseClass: 'fade',
          baseClassActive: 'show',
          enter: true,
          exit: true,
          in: true,
          mountOnEnter: false,
          onEnter: function noRefCheck() {},
          onEntered: function noRefCheck() {},
          onEntering: function noRefCheck() {},
          onExit: function noRefCheck() {},
          onExited: function noRefCheck() {},
          onExiting: function noRefCheck() {},
          tag: 'div',
          timeout: 150,
          unmountOnExit: true,
        }}
      >
        <strong>{error}</strong>
      </Alert>;
    }
  };

  return (
    <div className="mt-2  d-flex justify-content-between align-items-start">
      <form
        method="post"
        className=" flex d-flex flex-column"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="d-flex justify-content-between align-items-start">
          <ul className=" upload-file-list">
            {selectedFile.length > 0 &&
              filesArray.map((fileName) => {
                return (
                  <li key={fileName.name} className="upload-file success">
                    <span className="sr-only">
                      {'File in via dio caricamento'}
                    </span>
                    {fileName.name.substring(0, 10) + '...'}
                    <small className="upload-file-weight">
                      {returnFileSize(fileName.size)}
                    </small>

                    <button disabled>
                      <span className="sr-only">
                        Caricamento pronto per l' upload
                      </span>

                      <Icon
                        onClick={() => removeFile(fileName.name)}
                        color="primary"
                        icon="it-close"
                        padding={false}
                        size="sm"
                      />
                    </button>
                  </li>
                );
              })}
          </ul>
          <div className="d-flex justify-content-between align-items-start file-uploader">
            <label htmlFor="upload1">
              <span className="sr-only">{label}</span>
              <input
                multiple
                hidden
                name="upload1"
                accept={accept}
                type="file"
                ref={fileInput}
                onChange={handleFileInput}
              />
            </label>
            <Button
              onClick={(e) => fileInput.current && fileInput.current.click()}
              className="btn btn-primary  flex d-flex align-items-center justify-content-between btn-sm"
              tag="button"
            >
              <Icon color="white" icon="it-upload" padding={false} size="sm" />
              &nbsp;
              {label}
            </Button>
          </div>
        </div>

        <Button
          className=" border-0 d-block p-2 bg-primary text-white"
          type="submit"
          color="primary"
          icon={false}
          tag="button"
          size="sm"
        >
          Upload
        </Button>
      </form>
    </div>
  );
};
