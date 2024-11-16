function countCharactersAndWords(paragraph) {
    const div = document.getElementById(paragraph);
    const paragraphs = div.getElementsByTagName(p);
    
    let chineseCharCount = 0;
    let englishWordCount = 0;

    for (let i = 0; i < paragraphs.length; i++) {
        const paragraphText = paragraphs[i].innerText;

        // 统计中文字符
        const chineseChars = paragraphText.match(/[\u4e00-\u9fa5]/g);
        if (chineseChars) {
            chineseCharCount += chineseChars.length;
        }

        // 统计英文单词
        const englishWords = paragraphText.match(/\b\w+\b/g);
        if (englishWords) {
            englishWordCount += englishWords.length;
        }
    }

    // 返回中文英文总和
    return chineseCharCount + englishWordCount;
}

const totalCount = countCharactersAndWords('myDiv');
console.log('字数:', totalCount);