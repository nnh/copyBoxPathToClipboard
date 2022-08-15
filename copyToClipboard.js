var global = window;
global.COPY_TO_CLIPBOARD = global.COPY_TO_CLIPBOARD || {};
global.COPY_TO_CLIPBOARD.getBoxDocumentPWD = function(targetFolderId){
    const url = Box.prefetchedData['/app-api/enduserapp/current-user'].preview.appHost + 'app-api/enduserapp/folder/' + targetFolderId;
    return fetch(url)
        .then(response => response.json())
        .then(json => json.folder.path.map(i => i.name).filter((_, idx) => idx > 0));
};
global.COPY_TO_CLIPBOARD.copyToClipboard = async function(){
    const arrayTarget = Box.postStreamURLs;
    const isFolder = arrayTarget.some(x => new RegExp('folder').test(x));
    const targetItems = Box.postStreamData[arrayTarget[0]].items[0];
    const folderId = isFolder ? document.URL.split('/').pop() : targetItems.parentFolderID;
    const arrayFolder = await this.getBoxDocumentPWD(folderId);
    const joinFolderName = arrayFolder.join('/');
    const folderAndFileName = !isFolder ? joinFolderName + '/' + targetItems.name : joinFolderName;
    const arrayFolders = ['%USERPROFILE%/Box/', '~/Library/CloudStorage/Box-Box/'].map(x => x + folderAndFileName + '\n');
    const res = arrayFolders.join('') + document.URL;
    console.log(res);
    return;
};
global.DETERMINE_FOLDER_OR_FILE = function(targetUrl){
    return new RegExp('folder').test(targetUrl);
};
global.COPY_TO_CLIPBOARD.copyToClipboard();
