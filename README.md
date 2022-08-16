# 概要
Web版のBoxで、エクスプローラーで開けるアドレスとURLをコピーします。
# 使用方法
- Web版のBoxを開き、作成したブックマークをクリックすると、開いている画面に対する下記の情報がコピーされます。
  - 1行目:Windows用のアドレス
  - 2行目:Mac用のアドレス（OSが最新でない場合動作しない可能性があります）
  - 3行目:URL
- Windowsでは、エクスプローラーのアドレスバーに1行目の情報を貼り付けてEnterキーを押すとBox Driveの該当フォルダに移動します。
![スクリーンショット 2022-08-16 13 46 04](https://user-images.githubusercontent.com/24307469/184799868-7cf18a38-1d8c-45aa-85c4-01f485498580.png)  
- Macでは、Finderの「フォルダに移動」に２行目の情報を貼り付けるとBox Driveの該当フォルダに移動します。  
![スクリーンショット 2022-08-16 11 32 45](https://user-images.githubusercontent.com/24307469/184786455-3810133f-b327-41d0-82c0-8ea49f3ecba9.png)  
![スクリーンショット 2022-08-16 11 33 00](https://user-images.githubusercontent.com/24307469/184786936-dd3f9a91-5d9d-4732-aaf8-cdb7c8d27071.png)  
- Box以外のサイトでブックマークをクリックした場合や、Box画面上で正常に動作しなかった場合はタイトルとURLがコピーされます。
# 設定
- Google Chrome右上の設定からブックマーク > ブックマークマネージャを開きます。
![スクリーンショット 2022-08-16 11 49 12](https://user-images.githubusercontent.com/24307469/184788131-8443711e-63aa-4256-999a-86e228dc479f.png)  
- 右上の設定から「新しいブックマークを追加」を選択します。  
![スクリーンショット 2022-08-16 11 53 03](https://user-images.githubusercontent.com/24307469/184788456-731685de-f8e7-4160-9c30-8855b6df3ac0.png)  
- ブックマーク編集画面が開きます。名前とURLを編集して保存してください。  
  - 「名前」には任意の名前をつけてください。
  - 「URL」には下記の手順でコピーした値を貼り付けてください。
    - [https://github.com/nnh/copyBoxPathToClipboard/blob/master/bookmarklet.js](https://github.com/nnh/copyBoxPathToClipboard/blob/master/bookmarklet.js)を開きます。  
    - 画面右寄りにある 「Copy raw contents」をクリックしてコピーします。  
     ![スクリーンショット 2022-08-16 11 56 41](https://user-images.githubusercontent.com/24307469/184788835-357f1ce8-3158-4a88-84fd-fcc773ced73a.png)  
