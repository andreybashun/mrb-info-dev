import React, {useRef} from 'react';

interface  FileUploadProps{
    setFile: Function;
    children: JSX.Element|JSX.Element[];
    next: Function;
}

const FileUpload : React.FC<FileUploadProps>= ({next, setFile, children}) => {
    const ref = useRef<HTMLInputElement>()
    const  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0])
        //console.log(e.target.files)
        next()

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