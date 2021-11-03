const bins = {
  waste: 4,
  recycling: 2,
  compost: 5
}
const trash = 'recycling'

const smartGarbage = (trash, bins) => {
  if (trash === "waste") bins.waste++
  else if (trash === "recycling") bins.recycling++
  else if (trash === "compost") bins.compost++
  return bins
}
console.log(smartGarbage(trash, bins))