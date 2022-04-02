var minMeetingRooms = function (intervals) {
  const startTimes = intervals
    .map((interval) => interval[0])
    .sort((a, b) => a - b);
  const endTimes = intervals
    .map((interval) => interval[1])
    .sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let roomCount = 0;
  let maxRoomCount = -Infinity;

  while (i !== intervals.length) {
    if (startTimes[i] < endTimes[j]) {
      roomCount++;
      maxRoomCount = Math.max(maxRoomCount, roomCount);
      i++;
    } else {
      roomCount--;
      j++;
    }
  }

  return maxRoomCount;
};
