var global = window;
global.COPY_TO_CLIPBOARD = global.COPY_TO_CLIPBOARD || {};

global.COPY_TO_CLIPBOARD.getBoxDocumentPWD = function(){
  const url = Box.prefetchedData['/app-api/enduserapp/current-user'].preview.appHost + 'app-api/enduserapp/folder/' + document.URL.split('/').pop();
  return fetch(url)
    .then(response => response.json())
    .then(json => json.folder.path.map(i => i.name).join(" > ") + "\n" + document.URL);
};

global.COPY_TO_CLIPBOARD.copyToClipboard = async function() {
  const res = await this.getBoxDocumentPWD();
  navigator.clipboard.writeText(res);
  return;
};
global.COPY_TO_CLIPBOARD.copyToClipboard();