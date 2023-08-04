// Function to find duplicates based on channelId property
export const DuplicateData = (itemsList) => {
  const duplicateIds = []
  const duplicateObjects = []
  const channelIdMap = new Map()

  itemsList.forEach((item) => {
    const channelId = item.channelId

    if (channelIdMap.has(channelId)) {
      if (!duplicateIds.includes(channelId)) {
        duplicateIds.push(channelId)
        duplicateObjects.push(channelIdMap.get(channelId))
      }
      duplicateObjects.push(item)
    } else {
      channelIdMap.set(channelId, item)
    }
  })

  return duplicateObjects
}

// Function to organize duplicate data by channel and format it for visualization
export const DuplicateDataFormat = (duplicateObjects, channels) => {
  const dataByChannel = {}

  const updatedData = duplicateObjects.map((item) => ({
    x: new Date(item.timeBucket).getTime(),
    y: +item.count,
    channelId: item.channelId,
  }))

  updatedData.forEach((item) => {
    const channelId = item.channelId
    if (!dataByChannel[channelId]) {
      dataByChannel[channelId] = []
    }
    dataByChannel[channelId].push(item)
  })

  const result = Object.entries(dataByChannel).map(([channelId, data]) => {
    const channelObj = channels.find((channel) => channel.id === channelId)
    return {
      name: channelObj ? channelObj.name : null,
      color: "#008f8d",
      data: data,
    }
  })

  return result
}
