var global = window;
global.COPY_TO_CLIPBOARD = global.COPY_TO_CLIPBOARD || {};

global.COPY_TO_CLIPBOARD.getBoxDocumentPWD = function(joinStr){
    const url = Box.prefetchedData['/app-api/enduserapp/current-user'].preview.appHost + 'app-api/enduserapp/folder/' + document.URL.split('/').pop();
    return fetch(url)
        .then(response => response.json())
        .then(json => json.folder.path.map(i => i.name).filter((_, idx) => idx > 0));
};

global.COPY_TO_CLIPBOARD.copyToClipboard = async function() {
    const arrayFolder = await this.getBoxDocumentPWD();
    const joinInfo = this.getPathJoinInfo();
    const joinFolderName = arrayFolder.join(joinInfo.joinStr);
    const res = joinInfo.prtPath + joinFolderName + '\n' + document.URL;
    navigator.clipboard.writeText(res);
    return;
};
global.COPY_TO_CLIPBOARD.getPathJoinInfo = function(){
    const osInfo = navigator.userAgentData.platform;
    let res = {};
    res.joinStr = '/';
    if (osInfo === 'Windows') {
        res.prtPath = '%USERPROFILE%/Box/';
    } else {
        res.prtPath = '~/Library/CloudStorage/Box-Box/';
    };
    return res;
};
global.COPY_TO_CLIPBOARD.copyToClipboard();
