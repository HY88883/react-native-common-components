import DocumentPicker from 'react-native-document-picker';

const FileTypes = [
    DocumentPicker.types.doc,
    DocumentPicker.types.docx,
    DocumentPicker.types.ppt,
    DocumentPicker.types.pptx,
    DocumentPicker.types.xls,
    DocumentPicker.types.xlsx,
    DocumentPicker.types.pdf,
    DocumentPicker.types.plainText,
    DocumentPicker.types.images,
];

let MyDocumentPicker = {
    // Pick a single file
    pickerSingleFile: (callback:(value:any)=>void, errorCallback:(value:any)=>void) => {
        try {
            DocumentPicker.pick({
                type: FileTypes,
            }).then(res => {
                console.log(
                    res.uri,
                    res.type, // mime type
                    res.name,
                    res.size
                );
                if (callback) {
                    callback(res);
                }
            }).catch(error => {
                console.log(error);
                if (errorCallback) {
                    errorCallback(error);
                }
            });
        } catch (err) {
            if (errorCallback) {
                errorCallback(err);
            }
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err;
            }
        }
    },
    PickMultipleFiles: (callback:(value:any)=>void, errorCallback:(value:any)=>void) => {
        // Pick multiple files
        try {
            DocumentPicker.pickMultiple({
                type: FileTypes,
            }).then(results => {
                for (const res of results) {
                    console.log(
                        res.uri,
                        res.type, // mime type
                        res.name,
                        res.size
                    );
                }
                if (callback) {
                    callback(results);
                }
            });
        } catch (err) {
            if (errorCallback) {
                errorCallback(err);
            }
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    },
};


export default MyDocumentPicker;
