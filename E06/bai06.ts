// bai06.ts: Hàm có tham số là hàm

function filterArray(arr: string[], checkFn: (item: string) => boolean): string[] {
    const filteredArray: string[] = [];
    for (const item of arr) {
      if (checkFn(item)) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }
  
  function isLongWord(word: string): boolean {
    return word.length > 5;
}

function startsWithJ(word: string): boolean {
    return word.startsWith("j");
}

  function main(): void {
      // Ví dụ sử dụng
      const words = ["javascript", "java", "typescript", "functions"];

      const longWords = filterArray(words, isLongWord);
      console.log(longWords); // ["javascript", "typescript"]
      
      const wordBeginJ = filterArray(words, startsWithJ);
      console.log(wordBeginJ); // ["javascript", "java"]
  }
  
  main();