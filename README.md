wasa vue cli
==========================

## My profolio
-----------------------------------
```
利用自身的作品
用 Vue cli  ( style 使用 scss 撰寫)
試做一個 “個人介紹” 的網站
```

## 主頁 & Component
-----------------------------------
主要的頁面為 Home 跟 About 兩頁
```
- Home : 主要內容呈現使用 component "index.vue"
- About : 主要內容呈現在 “About.vue” 其中將一個 ”與我聯繫“ 的form表單 拆成 component "myform.vue" 製作。
- myform : component "myform.vue" 再利用 component 拆出一支 inputcomponent資料夾 ＠接收事件資料 達到同步修改內容。
- inputTextarea : component "inputcomponent資料夾" 存放 textarea，套用v-model同步變更資料 且使用 computed
發出$emit事件，傳出資料
- footer : 作為 component 供各頁面使用

```

## API
-----------------------------------
```
首頁下方 Who comes here 串接一組 API 並用 v-for 顯示出來參觀過的人
```

