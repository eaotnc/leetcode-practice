function searchInsert(numbers: number[], target: number): number {
  // Define 'start' and 'end' variables representing the search range within the array.
  let start: number = 0;
  let end: number = numbers.length;

  // Continue searching while 'start' is less than 'end'.
  while (start < end) {
    // Calculate the middle index of the current search range.
    const mid: number = Math.floor((start + end) / 2);

    // If the element at 'mid' is greater than or equal to the 'target',
    // narrow the search range to the left half by setting 'end' to 'mid'.
    if (numbers[mid] >= target) {
      end = mid;
    }

    // Otherwise, narrow the search range to the right half by setting 'start' to 'mid + 1'.
    else {
      start = mid + 1;
    }
  }

  // Return the 'start' index, which is the insert position of the 'target'.
  return start;
}
