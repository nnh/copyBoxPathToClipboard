var global = window;
global.COPY_TO_CLIPBOARD = global.COPY_TO_CLIPBOARD || {};
global.COPY_TO_CLIPBOARD.confirmUrlExistence = function(url){
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
            }).catch(error => {
                console.log('Fetch failed.', error)
            });
};
global.COPY_TO_CLIPBOARD.createTargetFolderPath = function(targetFolderId){
    return Box.prefetchedData['/app-api/enduserapp/current-user'].preview.appHost + 'app-api/enduserapp/folder/' + targetFolderId;
};
global.COPY_TO_CLIPBOARD.createTargetFilePath = function(targetFileId){
    return Box.prefetchedData['/app-api/enduserapp/current-user'].preview.appHost + 'app-api/enduserapp/item/f_' + targetFileId + '?format=preview';
};
global.COPY_TO_CLIPBOARD.getBoxFolderPath = function(json){
    return json.folder.path.map(i => i.name).filter((_, idx) => idx > 0);
};
global.COPY_TO_CLIPBOARD.getUrlInfo=function(){
    let a = new String(document.title);
    a.allReplace = function(a){
        let b=this,c;
        for(c in a)b=b.replace(new RegExp(c,"g"),a[c]);return b
    }.bind(a);
    return a.allReplace({":":"\uff1a","\\[":"\uff3b","\\]":"\uff3d"})+"\n"+document.URL;
};
global.COPY_TO_CLIPBOARD.copyTextAndTitle=function(){
    navigator.clipboard.writeText(this.getUrlInfo());
};
global.COPY_TO_CLIPBOARD.copyToClipboard = async function(){
    try {
        const temp = Box.prefetchedData['/app-api/enduserapp/current-user'];
    } catch(error) {
        console.log('Does not work outside Box web.');
        this.copyTextAndTitle();
        return;
    };
    const fileId = document.URL.split('/').pop();
    if (!(/^\d+$/.test(fileId))){
        return;
    };
    const jsonFile  = await this.confirmUrlExistence(this.createTargetFilePath(fileId));
    const fileName = jsonFile ? jsonFile.items[0].name : null;
    const folderId = jsonFile ? jsonFile.items[0].parentFolderID : fileId;
    const jsonFolder = await this.confirmUrlExistence(this.createTargetFolderPath(folderId));
    if (!jsonFolder){
        console.log('Failed to obtain folder information.');
        return;
    };
    const arrayFolder = this.getBoxFolderPath(jsonFolder);
    const joinFolderName = arrayFolder.join('/');
    const folderAndFileName = fileName !== null ? joinFolderName + '/' + fileName : joinFolderName;
    const arrayFolders = ['%USERPROFILE%/Box/', '~/Library/CloudStorage/Box-Box/'].map(x => x + folderAndFileName + '\n');
    const res = arrayFolders.join('') + document.URL;
    navigator.clipboard.writeText(res);
    console.log(res);
    return;
};
global.COPY_TO_CLIPBOARD.copyToClipboard();
