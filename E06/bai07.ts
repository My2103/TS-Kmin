// bai07.ts: Closure - Tính trung bình cộng

function calculateAverage(): (n: number) => number {
    let sum = 0;
    let count = 0;

    return function (num: number): number {
        sum += num;
        count += 1;
        return sum / count;
    };
  }
  
  const average: (n: number) => number = calculateAverage();
  
  console.log(average(2)); // 2
  console.log(average(4)); // 3
  console.log(average(6)); // 4