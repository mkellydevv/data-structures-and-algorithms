var minMeetingRooms = function (intervals) {
  let startTimes = intervals.map((sub) => sub[0]).sort((a, b) => a - b);
  let endTimes = intervals.map((sub) => sub[1]).sort((a, b) => a - b);

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
