var str = "https://www.example.com/image1.jpghttps://www.exampleWW.com/image1.jpghttps://www.example.com/image2.JPG";

// 提取第一個以 .jpg 或 .JPG 結尾的字串
var regex = /https?:\/\/[^ ]+\.jpg/;
var match = regex.exec(str);

// 打印提取的結果
console.log(match[0]); // 第一個匹配的字符串
