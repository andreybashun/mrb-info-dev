import React, {useRef} from 'react';

interface  FileUploadProps{
    file: any;
    setFile: Function;
    children: JSX.Element|JSX.Element[];
}

const FileUpload : React.FC<FileUploadProps>= ({file, setFile, children}) => {
    const ref = useRef<HTMLInputElement>()
    const  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0])
    }

    return (
        <div onClick={() => ref.current.click()}>
            <input
                type = "file"
                style={{display:"none"}}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload;