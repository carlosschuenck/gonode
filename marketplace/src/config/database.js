module.exports = (dockerIp) => {
  return `mongodb://${dockerIp}:27017/marketplace`
}
